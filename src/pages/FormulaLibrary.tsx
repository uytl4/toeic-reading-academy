import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { FORMULA_GROUPS, formulas, pronounTable, suffixTable } from '../data/formulas';
import { useStore } from '../db/store';
import { normalize } from '../search/normalize';
import { FormulaCard } from '../components/FormulaCard';
import { DataTable } from '../components/Blocks';
import { PageHeader } from '../components/ui';

const WC = [
  { id: 'N', label: 'N – Danh từ', re: /\bN\b|noun|N phrase|pronoun/ },
  { id: 'V', label: 'V – Động từ', re: /\bV\b|V-ing|V3|V2|\bbe\b|modal|have/ },
  { id: 'Adj', label: 'Adj – Tính từ', re: /\bAdj\b/ },
  { id: 'Adv', label: 'Adv – Trạng từ', re: /\bAdv\b/ }
];

export default function FormulaLibrary() {
  const [params, setParams] = useSearchParams();
  const focus = params.get('f');
  const [q, setQ] = useState(params.get('q') || '');
  const [group, setGroup] = useState<string>('all');
  const [wc, setWc] = useState<string | null>(null);
  const [savedOnly, setSavedOnly] = useState(false);
  const { isBookmarked } = useStore();

  useEffect(() => {
    if (!focus) return;
    setQ('');
    setGroup('all');
    setWc(null);
    setSavedOnly(false);
    const t = setTimeout(() => document.getElementById(`f-${focus}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 80);
    return () => clearTimeout(t);
  }, [focus]);

  const list = useMemo(() => {
    const nq = normalize(q);
    const tokens = nq.split(' ').filter(Boolean);
    return formulas.filter((f) => {
      if (group !== 'all' && f.group !== group) return false;
      if (wc && !WC.find((w) => w.id === wc)!.re.test(f.pattern + ' ' + f.positions)) return false;
      if (savedOnly && !isBookmarked(`formula:${f.id}`)) return false;
      if (!tokens.length) return true;
      const hay = normalize([f.pattern, f.label, f.explain, f.example, f.translation, f.exceptions, f.group, f.tags.join(' ')].join(' '));
      return tokens.every((t) => hay.includes(t));
    });
  }, [q, group, wc, savedOnly, isBookmarked]);

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader title="Thư viện công thức nhanh" desc={`${formulas.length} công thức có giải thích, ví dụ Anh–Việt, điểm dễ nhầm và liên kết về bài học.`} />

      <div className="card mb-6 space-y-4 p-4">
        <div className="flex items-center gap-2 rounded-xl border border-line bg-paper px-3 focus-within:border-brand">
          <Search size={18} className="text-muted" />
          <label htmlFor="f-q" className="sr-only">
            Tìm công thức
          </label>
          <input
            id="f-q"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              if (focus) setParams({}, { replace: true });
            }}
            placeholder="Thử: the + adj + n, because of, their, established, mệnh đề quan hệ…"
            className="h-12 w-full bg-transparent outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Lọc theo nhóm">
          <button type="button" aria-pressed={group === 'all'} onClick={() => setGroup('all')} className={`chip ${group === 'all' ? 'border-brand bg-brand text-white dark:text-navy' : ''}`}>
            Tất cả nhóm
          </button>
          {FORMULA_GROUPS.map((g) => (
            <button key={g} type="button" aria-pressed={group === g} onClick={() => setGroup(g)} className={`chip ${group === g ? 'border-brand bg-brand text-white dark:text-navy' : ''}`}>
              {g}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Lọc theo loại từ">
          <span className="text-sm text-muted">Loại từ:</span>
          {WC.map((w) => (
            <button key={w.id} type="button" aria-pressed={wc === w.id} onClick={() => setWc(wc === w.id ? null : w.id)} className={`wc wc-${w.id} rounded-full border px-3 py-1.5 text-sm ${wc === w.id ? 'border-current' : 'border-transparent'}`}>
              {w.label}
            </button>
          ))}
          <label className="ml-auto flex items-center gap-2 text-sm font-medium">
            <input type="checkbox" checked={savedOnly} onChange={(e) => setSavedOnly(e.target.checked)} className="h-4 w-4 accent-[rgb(var(--brand))]" />
            Chỉ công thức đã lưu
          </label>
        </div>
      </div>

      <p className="mb-3 text-sm text-muted" aria-live="polite">
        {list.length} công thức
      </p>
      {list.length ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {list.map((f) => (
            <FormulaCard key={f.id} f={f} defaultOpen={f.id === focus} />
          ))}
        </div>
      ) : (
        <p className="card p-8 text-center text-muted">Không có công thức phù hợp. Thử từ khóa khác hoặc bỏ bộ lọc.</p>
      )}

      <section className="mt-10">
        <h2 className="mb-2 text-xl font-bold">Bảng hậu tố N / Adj / Adv / V</h2>
        <p className="text-muted">Hậu tố là gợi ý, không phải quy tắc tuyệt đối – luôn kiểm tra vị trí trong câu.</p>
        <DataTable head={suffixTable.head} rows={suffixTable.rows} />
      </section>
      <section className="mt-8">
        <h2 className="mb-2 text-xl font-bold">Họ đại từ</h2>
        <p className="text-muted">Tính từ sở hữu luôn có danh từ theo sau; đại từ sở hữu đứng một mình; phản thân khi chủ ngữ và tân ngữ là một.</p>
        <DataTable head={pronounTable.head} rows={pronounTable.rows} />
      </section>
    </div>
  );
}
