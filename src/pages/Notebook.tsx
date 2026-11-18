import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Highlighter, NotebookPen, Plus, StickyNote, Trash2 } from 'lucide-react';
import { useStore } from '../db/store';
import { useOpenNote } from '../components/NoteProvider';
import { EmptyState, PageHeader } from '../components/ui';
import { normalize } from '../search/normalize';

const KIND_LABEL: Record<string, string> = { formula: 'Công thức', section: 'Mục bài học', lesson: 'Bài học', unit: 'Unit', vocab: 'Từ vựng', reading: 'Reading' };

export default function Notebook() {
  const { notes, bookmarks, removeNote, removeBookmark } = useStore();
  const openNote = useOpenNote();
  const [tab, setTab] = useState<'notes' | 'saved'>('notes');
  const [kind, setKind] = useState<string>('all');
  const [q, setQ] = useState('');

  const nq = normalize(q);
  const fNotes = useMemo(() => notes.filter((n) => !nq || normalize(`${n.title} ${n.quote || ''} ${n.text}`).includes(nq)), [notes, nq]);
  const fSaved = useMemo(
    () => bookmarks.filter((b) => (kind === 'all' || b.kind === kind) && (!nq || normalize(`${b.title} ${b.subtitle || ''}`).includes(nq))),
    [bookmarks, kind, nq]
  );
  const kinds = Array.from(new Set(bookmarks.map((b) => b.kind)));

  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader title="Sổ tay học tập" desc="Ghi chú, highlight và các công thức, từ vựng, mục bài bạn đã lưu. Dữ liệu lưu trên thiết bị này (IndexedDB).">
        <button
          type="button"
          className="btn-primary"
          onClick={() => openNote({ contentId: 'free', contentVersion: 1, title: 'Ghi chú tự do', link: '/so-tay' })}
        >
          <Plus size={18} /> Ghi chú mới
        </button>
      </PageHeader>

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <div role="tablist" aria-label="Sổ tay" className="flex rounded-xl border border-line bg-card p-1">
          {[
            { id: 'notes', label: `Ghi chú (${notes.length})` },
            { id: 'saved', label: `Đã lưu (${bookmarks.length})` }
          ].map((t) => (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id as 'notes' | 'saved')}
              className={`rounded-lg px-4 py-2 text-sm font-semibold ${tab === t.id ? 'bg-brand text-white dark:text-navy' : 'text-muted'}`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <label htmlFor="nb-q" className="sr-only">
          Lọc sổ tay
        </label>
        <input id="nb-q" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Lọc trong sổ tay…" className="ml-auto h-10 w-full rounded-xl border border-line bg-card px-3 sm:w-64" />
      </div>

      {tab === 'notes' ? (
        fNotes.length ? (
          <ul className="space-y-3">
            {fNotes.map((n) => (
              <li key={n.id} className="card p-4">
                <div className="flex items-start gap-3">
                  {n.kind === 'highlight' ? <Highlighter className="mt-1 shrink-0 text-amber-500" size={18} /> : <StickyNote className="mt-1 shrink-0 text-brand" size={18} />}
                  <div className="min-w-0 flex-1">
                    <Link to={n.link} className="text-sm font-semibold text-brand hover:underline">
                      {n.title}
                    </Link>
                    {n.quote && <p className="mt-1 rounded-lg bg-yellow-400/15 px-2 py-1 italic">“{n.quote}”</p>}
                    {n.text && <p className="mt-1 whitespace-pre-wrap">{n.text}</p>}
                    <p className="mt-1 text-xs text-muted">
                      {new Date(n.updatedAt).toLocaleString('vi-VN')} · {n.contentId} · v{n.contentVersion}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    <button type="button" className="btn min-h-[34px] px-2 text-xs" onClick={() => openNote({ ...n })}>
                      Sửa
                    </button>
                    <button type="button" aria-label="Xóa ghi chú" className="btn min-h-[34px] px-2 text-xs hover:text-red-600" onClick={() => confirm('Xóa ghi chú này?') && removeNote(n.id)}>
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState icon={<NotebookPen size={36} />} title={notes.length ? 'Không có ghi chú khớp bộ lọc' : 'Chưa có ghi chú'}>
            Trong bài học, bôi đen một đoạn để Highlight/Ghi chú, hoặc bấm biểu tượng ghi chú ở mỗi mục.
          </EmptyState>
        )
      ) : (
        <>
          {kinds.length > 1 && (
            <div className="mb-3 flex flex-wrap gap-2" role="group" aria-label="Lọc loại mục đã lưu">
              {['all', ...kinds].map((k) => (
                <button key={k} type="button" aria-pressed={kind === k} onClick={() => setKind(k)} className={`chip ${kind === k ? 'border-brand bg-brand text-white dark:text-navy' : ''}`}>
                  {k === 'all' ? 'Tất cả' : KIND_LABEL[k]}
                </button>
              ))}
            </div>
          )}
          {fSaved.length ? (
            <ul className="grid gap-3 md:grid-cols-2">
              {fSaved.map((b) => (
                <li key={b.id} className="card flex items-center gap-3 p-4">
                  <Bookmark size={18} className="shrink-0 text-brand" />
                  <Link to={b.link} className="min-w-0 flex-1 hover:text-brand">
                    <span className="block text-xs font-semibold text-muted">{KIND_LABEL[b.kind]}</span>
                    <span className={`block truncate font-semibold ${b.kind === 'formula' ? 'font-mono' : ''}`}>{b.title}</span>
                    {b.subtitle && <span className="block truncate text-sm text-muted">{b.subtitle}</span>}
                  </Link>
                  <button type="button" aria-label="Bỏ lưu" className="rounded-lg p-2 text-muted hover:text-red-600" onClick={() => removeBookmark(b.id)}>
                    <Trash2 size={16} />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState icon={<Bookmark size={36} />} title="Chưa lưu mục nào">
              Bấm “Lưu” trên thẻ công thức, biểu tượng bookmark ở mỗi mục bài học hoặc từ vựng.
            </EmptyState>
          )}
        </>
      )}
    </div>
  );
}
