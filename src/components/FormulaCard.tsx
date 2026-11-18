import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, BookmarkCheck, ChevronDown, Copy, StickyNote } from 'lucide-react';
import type { Formula } from '../data/types';
import { formulaById } from '../data/formulas';
import { lessonById } from '../data/grammar';
import { useStore } from '../db/store';
import { useOpenNote } from './NoteProvider';
import { Rich } from './Rich';
import { copyText, toast } from './ui';

function FormulaActions({ f, compact }: { f: Formula; compact?: boolean }) {
  const { isBookmarked, toggleBookmark, notes } = useStore();
  const openNote = useOpenNote();
  const bid = `formula:${f.id}`;
  const saved = isBookmarked(bid);
  const noteCount = notes.filter((n) => n.contentId === `formula:${f.id}`).length;
  const cls = compact ? 'btn min-h-[34px] px-2 text-xs' : 'btn';
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        className={`${cls} ${saved ? 'border-brand text-brand' : ''}`}
        aria-pressed={saved}
        onClick={() => {
          toggleBookmark({ id: bid, kind: 'formula', refId: f.id, title: f.pattern, subtitle: f.label, link: `/cong-thuc?f=${f.id}` });
          toast(saved ? 'Đã bỏ lưu công thức' : 'Đã lưu vào sổ tay');
        }}
      >
        {saved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
        {saved ? 'Đã lưu' : 'Lưu'}
      </button>
      <button type="button" className={cls} onClick={() => copyText(`${f.pattern}\n${f.explain}\nVD: ${f.example} — ${f.translation}`)}>
        <Copy size={16} /> Sao chép
      </button>
      <button
        type="button"
        className={cls}
        onClick={() => openNote({ contentId: `formula:${f.id}`, contentVersion: 1, title: `Công thức: ${f.pattern}`, link: `/cong-thuc?f=${f.id}` })}
      >
        <StickyNote size={16} /> Ghi chú{noteCount ? ` (${noteCount})` : ''}
      </button>
    </div>
  );
}

/** Thẻ công thức đầy đủ trong thư viện */
export function FormulaCard({ f, defaultOpen = false }: { f: Formula; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <article id={`f-${f.id}`} className={`card flex min-w-0 flex-col gap-3 p-5 ${defaultOpen ? 'ring-2 ring-brand' : ''}`}>
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand">{f.group}</span>
        <span className="text-xs text-muted">{f.label}</span>
      </div>
      <p className="break-words font-mono text-lg font-bold leading-snug">{f.pattern}</p>
      <p className="text-[15px]">{f.explain}</p>
      <div className="rounded-xl bg-paper p-3 text-[15px]">
        <p className="font-medium">{f.example}</p>
        <p className="text-muted">{f.translation}</p>
      </div>
      <button type="button" className="flex items-center gap-1 self-start text-sm font-semibold text-brand" aria-expanded={open} onClick={() => setOpen(!open)}>
        <ChevronDown size={16} className={`transition ${open ? 'rotate-180' : ''}`} /> {open ? 'Thu gọn' : 'Xem giải thích chi tiết'}
      </button>
      {open && (
        <div className="space-y-2 text-[15px]">
          <p>
            <span className="font-semibold">Vị trí loại từ: </span>
            {f.positions}
          </p>
          <p className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-3">
            <span className="font-semibold">Điểm dễ nhầm / ngoại lệ: </span>
            <Rich text={f.exceptions} />
          </p>
          <p className="flex flex-wrap gap-2">
            <span className="font-semibold">Bài liên quan:</span>
            {f.lessons.map((id) => {
              const l = lessonById(id);
              return l ? (
                <Link key={id} to={`/ngu-phap/${id}`} className="text-brand underline-offset-2 hover:underline">
                  {l.code} – {l.short}
                </Link>
              ) : null;
            })}
          </p>
          <p className="flex flex-wrap gap-1.5">
            {f.tags.map((t) => (
              <span key={t} className="rounded-md bg-line/60 px-2 py-0.5 text-xs">
                #{t}
              </span>
            ))}
          </p>
        </div>
      )}
      <div className="mt-auto pt-1">
        <FormulaActions f={f} />
      </div>
    </article>
  );
}

/** Khối công thức trong bài học (formula-card) */
export function InlineFormula({ pattern, text, fid }: { pattern: string; text: string; fid?: string }) {
  const f = fid ? formulaById(fid) : undefined;
  return (
    <div className="my-3 rounded-2xl border border-brand/30 bg-brand/[0.05] p-4">
      <p className="font-mono text-[1.05em] font-bold">{pattern}</p>
      <p className="mt-1">
        <Rich text={text} />
      </p>
      {f && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <FormulaActions f={f} compact />
          <Link to={`/cong-thuc?f=${f.id}`} className="text-xs font-semibold text-brand hover:underline">
            Mở trong thư viện →
          </Link>
        </div>
      )}
    </div>
  );
}
