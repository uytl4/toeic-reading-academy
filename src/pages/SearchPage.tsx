import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { search, SUGGESTIONS, TYPE_LABEL, type DocType } from '../search';
import { PageHeader } from '../components/ui';

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') || '';
  const [type, setType] = useState<DocType | 'all'>('all');
  const hits = useMemo(() => search(q, 200), [q]);
  const types = Array.from(new Set(hits.map((h) => h.doc.type)));
  const shown = hits.filter((h) => type === 'all' || h.doc.type === type);

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader title="Tìm kiếm" desc="Tìm cục bộ (offline) trong bài giảng, công thức, Unit, từ vựng và ví dụ. Gõ có dấu hoặc không dấu." />
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          const v = new FormData(e.currentTarget).get('q') as string;
          setParams({ q: v });
          setType('all');
        }}
        className="mb-4 flex gap-2"
      >
        <label htmlFor="sp-q" className="sr-only">
          Từ khóa
        </label>
        <input id="sp-q" name="q" defaultValue={q} key={q} className="h-12 flex-1 rounded-xl border border-line bg-card px-4 outline-none focus:border-brand" placeholder="Nhập từ khóa…" />
        <button className="btn-primary h-12">Tìm</button>
      </form>
      {!q && (
        <div className="flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button key={s} type="button" className="chip hover:border-brand" onClick={() => setParams({ q: s })}>
              {s}
            </button>
          ))}
        </div>
      )}
      {q && (
        <>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted" aria-live="polite">
              {hits.length} kết quả cho “{q}”
            </span>
            {types.length > 1 &&
              (['all', ...types] as const).map((t) => (
                <button key={t} type="button" aria-pressed={type === t} onClick={() => setType(t)} className={`chip text-xs ${type === t ? 'border-brand bg-brand text-white dark:text-navy' : ''}`}>
                  {t === 'all' ? 'Tất cả' : TYPE_LABEL[t]}
                </button>
              ))}
          </div>
          <ul className="space-y-2">
            {shown.map((h) => (
              <li key={h.doc.id}>
                <Link to={h.doc.link} className="card block p-4 hover:border-brand">
                  <span className="mr-2 rounded bg-line/70 px-1.5 py-0.5 text-[11px] font-semibold text-muted">{TYPE_LABEL[h.doc.type]}</span>
                  <span className="font-semibold">{h.doc.title}</span>
                  <span className="mt-0.5 block text-xs text-brand">{h.doc.context}</span>
                  <span className="mt-1 block text-sm text-muted">{h.snippet}</span>
                </Link>
              </li>
            ))}
          </ul>
          {!hits.length && <p className="card p-8 text-center text-muted">Không có kết quả. Thử từ khóa ngắn hơn hoặc không dấu.</p>}
        </>
      )}
    </div>
  );
}
