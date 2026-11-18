import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { search, SUGGESTIONS, TYPE_LABEL } from '../search';

export function SearchBox({ autoFocus = false, onNavigate }: { autoFocus?: boolean; onNavigate?: () => void }) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const nav = useNavigate();
  const listId = useId();
  const wrap = useRef<HTMLDivElement>(null);
  const hits = useMemo(() => search(q, 8), [q]);

  useEffect(() => {
    const fn = (e: MouseEvent) => !wrap.current?.contains(e.target as Node) && setOpen(false);
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);
  useEffect(() => setActive(0), [q]);

  const go = (link: string) => {
    nav(link);
    setOpen(false);
    setQ('');
    onNavigate?.();
  };

  return (
    <div ref={wrap} className="relative w-full">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          if (hits[active] && open) go(hits[active].doc.link);
          else if (q.trim()) go(`/tim-kiem?q=${encodeURIComponent(q.trim())}`);
        }}
      >
        <label className="sr-only" htmlFor={listId + '-in'}>
          Tìm bài học, công thức, từ vựng
        </label>
        <div className="flex items-center gap-2 rounded-full border border-line bg-paper px-4 focus-within:border-brand">
          <Search size={18} className="shrink-0 text-muted" />
          <input
            id={listId + '-in'}
            autoFocus={autoFocus}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, hits.length - 1));
              } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === 'Escape') setOpen(false);
            }}
            role="combobox"
            aria-expanded={open && q.length > 1}
            aria-controls={listId}
            aria-autocomplete="list"
            placeholder="Tìm bài học, công thức, chủ điểm…"
            className="h-11 w-full min-w-0 bg-transparent text-[15px] outline-none placeholder:text-muted"
          />
          {q && (
            <button type="button" aria-label="Xóa từ khóa" onClick={() => setQ('')} className="text-muted">
              <X size={16} />
            </button>
          )}
        </div>
      </form>
      {open && (
        <div className="absolute left-0 right-0 top-full z-40 mt-2 max-h-[70vh] overflow-auto rounded-2xl border border-line bg-card p-2 shadow-xl scrollbar-thin">
          {q.trim().length < 2 ? (
            <div className="p-2">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Gợi ý từ khóa</p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button key={s} type="button" className="chip hover:border-brand" onClick={() => setQ(s)}>
                    {s}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted">Hỗ trợ gõ có dấu hoặc không dấu: “menh de quan he”.</p>
            </div>
          ) : hits.length === 0 ? (
            <p className="p-3 text-sm text-muted">Không tìm thấy kết quả cho “{q}”.</p>
          ) : (
            <ul id={listId} role="listbox">
              {hits.map((h, i) => (
                <li key={h.doc.id} role="option" aria-selected={i === active}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(h.doc.link)}
                    className={`w-full rounded-xl px-3 py-2 text-left ${i === active ? 'bg-brand/10' : ''}`}
                  >
                    <span className="mr-2 rounded bg-line/70 px-1.5 py-0.5 text-[11px] font-semibold text-muted">{TYPE_LABEL[h.doc.type]}</span>
                    <span className="font-semibold">{h.doc.title}</span>
                    <span className="block truncate text-xs text-muted">{h.doc.context}</span>
                  </button>
                </li>
              ))}
              <li>
                <button type="button" onClick={() => go(`/tim-kiem?q=${encodeURIComponent(q.trim())}`)} className="w-full rounded-xl px-3 py-2 text-left text-sm font-semibold text-brand hover:bg-brand/10">
                  Xem tất cả kết quả →
                </button>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
