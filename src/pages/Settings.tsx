import { useCallback, useEffect, useRef, useState } from 'react';
import { CheckCircle2, Download, HardDrive, Monitor, Moon, RefreshCw, Sun, Upload, WifiOff, XCircle } from 'lucide-react';
import { useStore } from '../db/store';
import { makeBackup, validateBackup, SCHEMA_VERSION } from '../db/db';
import { checkOffline, type OfflineCheck } from '../offline/status';
import { PageHeader, toast } from '../components/ui';

export default function Settings() {
  const store = useStore();
  const { settings, updateSettings } = store;
  const fileRef = useRef<HTMLInputElement>(null);
  const [importMsg, setImportMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [off, setOff] = useState<{ ready: boolean; checks: OfflineCheck[]; cached: number } | null>(null);

  const runCheck = useCallback(() => {
    checkOffline().then(setOff).catch(() => setOff({ ready: false, checks: [{ label: 'Không kiểm tra được bộ nhớ đệm', ok: false }], cached: 0 }));
  }, []);
  useEffect(() => {
    runCheck();
    window.addEventListener('tra-offline-ready', runCheck);
    return () => window.removeEventListener('tra-offline-ready', runCheck);
  }, [runCheck]);

  const exportJson = () => {
    const data = makeBackup(store.snapshot());
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `toeic-reading-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
    toast('Đã xuất tệp sao lưu');
  };

  const importJson = async (file: File) => {
    setImportMsg(null);
    try {
      if (file.size > 5 * 1024 * 1024) throw new Error('Tệp quá lớn (> 5 MB).');
      let raw: unknown;
      try {
        raw = JSON.parse(await file.text());
      } catch {
        throw new Error('Tệp không phải JSON hợp lệ.');
      }
      const snap = validateBackup(raw);
      if (!confirm(`Nhập sẽ THAY THẾ dữ liệu hiện tại bằng: ${snap.progress.length} mục tiến độ, ${snap.bookmarks.length} mục đã lưu, ${snap.notes.length} ghi chú. Tiếp tục?`)) return;
      await store.restore(snap);
      setImportMsg({ ok: true, text: `Đã khôi phục: ${snap.progress.length} tiến độ, ${snap.bookmarks.length} mục lưu, ${snap.notes.length} ghi chú.` });
    } catch (e) {
      setImportMsg({ ok: false, text: 'Không nhập được: ' + (e as Error).message });
    } finally {
      if (fileRef.current) fileRef.current.value = '';
    }
  };

  const themes = [
    { id: 'light', label: 'Sáng', icon: Sun },
    { id: 'dark', label: 'Tối', icon: Moon },
    { id: 'system', label: 'Theo hệ thống', icon: Monitor }
  ] as const;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader title="Cài đặt & sao lưu" desc="Giao diện, học offline và sao lưu dữ liệu học tập của bạn." />

      <section className="card p-5" aria-labelledby="ui-h">
        <h2 id="ui-h" className="mb-3 text-lg font-bold">
          Giao diện
        </h2>
        <p className="mb-2 text-sm font-semibold">Chế độ màu</p>
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Chế độ màu">
          {themes.map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" role="radio" aria-checked={settings.theme === id} onClick={() => updateSettings({ theme: id })} className={`btn ${settings.theme === id ? 'border-brand text-brand' : ''}`}>
              <Icon size={16} /> {label}
            </button>
          ))}
        </div>
        <label htmlFor="fs" className="mb-1 mt-5 block text-sm font-semibold">
          Cỡ chữ nội dung bài học: {settings.fontSize}px
        </label>
        <input id="fs" type="range" min={15} max={22} value={settings.fontSize} onChange={(e) => updateSettings({ fontSize: Number(e.target.value) })} className="w-full max-w-sm accent-[rgb(var(--brand))]" />
        <p className="content mt-2 text-muted">Xem trước: The new policy seems effective.</p>
      </section>

      <section className="card p-5" aria-labelledby="off-h">
        <div className="mb-3 flex items-center justify-between gap-2">
          <h2 id="off-h" className="flex items-center gap-2 text-lg font-bold">
            <WifiOff size={20} /> Học offline
          </h2>
          <button type="button" className="btn min-h-[34px]" onClick={runCheck}>
            <RefreshCw size={15} /> Kiểm tra lại
          </button>
        </div>
        {off?.ready ? (
          <div className="mb-4 flex items-center gap-3 rounded-2xl border border-ok/40 bg-ok/10 p-4">
            <CheckCircle2 className="shrink-0 text-ok" size={28} />
            <div>
              <p className="font-bold text-ok">Sẵn sàng học offline</p>
              <p className="text-sm">Toàn bộ bài học, 8 Unit, công thức, ảnh minh họa và tìm kiếm đã được lưu ({off.cached} tệp trong bộ nhớ đệm). Bạn có thể tắt Internet.</p>
            </div>
          </div>
        ) : (
          <div className="mb-4 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4">
            <p className="font-bold">Chưa sẵn sàng offline</p>
            <p className="text-sm">Thiếu tài nguyên offline. Xem các mục chưa đạt bên dưới và hướng dẫn khắc phục.</p>
          </div>
        )}
        <ul className="space-y-2">
          {off?.checks.map((c) => (
            <li key={c.label} className="flex items-start gap-2 text-[15px]">
              {c.ok ? <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-ok" /> : <XCircle size={18} className="mt-0.5 shrink-0 text-amber-600" />}
              <span>
                {c.label}
                {!c.ok && c.hint && <span className="block text-sm text-muted">{c.hint}</span>}
              </span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="btn mt-4"
          onClick={async () => {
            const ok = await navigator.storage?.persist?.();
            toast(ok ? 'Trình duyệt đã cho phép lưu trữ bền vững' : 'Trình duyệt chưa cấp quyền lưu trữ bền vững');
            runCheck();
          }}
        >
          <HardDrive size={16} /> Yêu cầu lưu trữ bền vững
        </button>
        <details className="mt-4 text-[15px]">
          <summary className="cursor-pointer font-semibold">Cách cài ứng dụng (PWA)</summary>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>
              <b>Windows (Chrome/Edge):</b> bấm biểu tượng “Cài đặt ứng dụng” trên thanh địa chỉ.
            </li>
            <li>
              <b>Android (Chrome):</b> menu ⋮ → “Thêm vào màn hình chính” / “Cài đặt ứng dụng”.
            </li>
            <li>
              <b>iOS (Safari):</b> nút Chia sẻ → “Thêm vào Màn hình chính”. iOS có thể xóa dữ liệu web nếu lâu không mở ứng dụng hoặc khi bạn xóa ứng dụng/dữ liệu Safari – hãy sao lưu JSON định kỳ.
            </li>
          </ul>
        </details>
      </section>

      <section className="card p-5" aria-labelledby="bk-h">
        <h2 id="bk-h" className="mb-1 text-lg font-bold">
          Sao lưu dữ liệu
        </h2>
        <p className="mb-4 text-[15px] text-muted">
          Dữ liệu (tiến độ, bookmark, ghi chú, tùy chỉnh) chỉ lưu trên thiết bị này. Để chuyển sang thiết bị khác, hãy xuất tệp JSON rồi nhập ở thiết bị kia. Schema hiện tại: v{SCHEMA_VERSION}.
        </p>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn-primary" onClick={exportJson}>
            <Download size={17} /> Xuất JSON
          </button>
          <button type="button" className="btn" onClick={() => fileRef.current?.click()}>
            <Upload size={17} /> Nhập JSON
          </button>
          <input ref={fileRef} type="file" accept="application/json,.json" className="hidden" onChange={(e) => e.target.files?.[0] && importJson(e.target.files[0])} aria-label="Chọn tệp sao lưu JSON" />
        </div>
        {importMsg && (
          <p role="status" className={`mt-3 rounded-xl p-3 text-[15px] ${importMsg.ok ? 'bg-ok/10 text-ok' : 'bg-red-500/10 text-red-700 dark:text-red-300'}`}>
            {importMsg.text}
          </p>
        )}
        <p className="mt-4 text-sm text-muted">
          Hiện có: {Object.keys(store.progress).filter((k) => store.progress[k]).length} mục đã đánh dấu · {store.bookmarks.length} mục đã lưu · {store.notes.length} ghi chú.
        </p>
      </section>
    </div>
  );
}
