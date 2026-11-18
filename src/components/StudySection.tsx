import { useEffect, useRef, useState, type ReactNode, type RefObject } from 'react';
import { Bookmark, BookmarkCheck, Highlighter, StickyNote, Trash2 } from 'lucide-react';
import { useStore } from '../db/store';
import type { BookmarkKind } from '../db/db';
import { HighlightCtx } from './Rich';
import { useOpenNote } from './NoteProvider';
import { DoneToggle, toast } from './ui';

interface Props {
  id: string;
  title: string;
  contentId: string;
  version: number;
  link: string;
  pageTitle: string;
  bookmarkKind?: BookmarkKind;
  doneKey?: string;
  children: ReactNode;
}

/** Một mục học: có neo, bookmark, ghi chú, highlight, (tùy chọn) đánh dấu đã học */
export function StudySection({ id, title, contentId, version, link, pageTitle, bookmarkKind = 'section', doneKey, children }: Props) {
  const { notes, isBookmarked, toggleBookmark, isDone, setDone, removeNote } = useStore();
  const openNote = useOpenNote();
  const mine = notes.filter((n) => n.contentId === contentId);
  const quotes = mine.filter((n) => n.quote).map((n) => n.quote!) as string[];
  const bid = `${bookmarkKind}:${contentId}`;
  const saved = isBookmarked(bid);
  const fullTitle = `${pageTitle} › ${title}`;

  return (
    <section id={id} data-cid={contentId} data-ver={version} data-title={fullTitle} data-link={link} className="scroll-mt-24 border-b border-line py-8 last:border-0">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
        <div className="no-print flex items-center gap-1">
          <button
            type="button"
            className="rounded-lg p-2 text-muted hover:bg-line/50 hover:text-brand"
            aria-pressed={saved}
            aria-label={saved ? 'Bỏ lưu mục này' : 'Lưu mục này vào sổ tay'}
            title={saved ? 'Bỏ lưu' : 'Lưu mục'}
            onClick={() => {
              toggleBookmark({ id: bid, kind: bookmarkKind, refId: contentId, title, subtitle: pageTitle, link });
              toast(saved ? 'Đã bỏ lưu' : 'Đã lưu mục vào sổ tay');
            }}
          >
            {saved ? <BookmarkCheck size={19} className="text-brand" /> : <Bookmark size={19} />}
          </button>
          <button
            type="button"
            className="rounded-lg p-2 text-muted hover:bg-line/50 hover:text-brand"
            aria-label="Ghi chú cho mục này"
            title="Ghi chú"
            onClick={() => openNote({ contentId, contentVersion: version, title: fullTitle, link })}
          >
            <StickyNote size={19} />
          </button>
        </div>
      </div>
      <HighlightCtx.Provider value={quotes}>{children}</HighlightCtx.Provider>
      {mine.length > 0 && (
        <div className="mt-4 space-y-2">
          {mine.map((n) => (
            <div key={n.id} className="flex items-start gap-2 rounded-xl border border-yellow-400/50 bg-yellow-400/10 p-3 text-[15px]">
              {n.kind === 'highlight' ? <Highlighter size={16} className="mt-1 shrink-0" /> : <StickyNote size={16} className="mt-1 shrink-0" />}
              <div className="min-w-0 flex-1">
                {n.quote && <p className="italic">“{n.quote}”</p>}
                {n.text && <p className="whitespace-pre-wrap">{n.text}</p>}
                {n.contentVersion !== version && <p className="text-xs text-amber-600">Ghi chú tạo ở phiên bản nội dung cũ (v{n.contentVersion}).</p>}
              </div>
              <button type="button" className="text-xs font-semibold text-brand" onClick={() => openNote({ ...n, title: n.title, link: n.link })}>
                Sửa
              </button>
              <button type="button" aria-label="Xóa ghi chú" className="text-muted hover:text-red-600" onClick={() => removeNote(n.id)}>
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>
      )}
      {doneKey && (
        <div className="no-print mt-5">
          <DoneToggle done={isDone(doneKey)} onChange={(v) => setDone(doneKey, v)} label="Đánh dấu đã học mục này" doneLabel="Đã học mục này" />
        </div>
      )}
    </section>
  );
}

/** Thanh công cụ khi bôi đen văn bản: Highlight / Ghi chú */
export function SelectionToolbar({ root }: { root: RefObject<HTMLElement> }) {
  const [sel, setSel] = useState<{ x: number; y: number; text: string; el: HTMLElement } | null>(null);
  const { saveNote } = useStore();
  const openNote = useOpenNote();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const s = window.getSelection();
      if (!s || s.isCollapsed || !root.current) return setSel(null);
      const text = s.toString().trim().replace(/\s+/g, ' ');
      if (text.length < 2 || text.length > 400) return setSel(null);
      const node = s.anchorNode instanceof HTMLElement ? s.anchorNode : s.anchorNode?.parentElement;
      const el = node?.closest('[data-cid]') as HTMLElement | null;
      if (!el || !root.current.contains(el)) return setSel(null);
      const r = s.getRangeAt(0).getBoundingClientRect();
      setSel({ x: Math.min(Math.max(r.left + r.width / 2, 120), window.innerWidth - 120), y: r.top, text, el });
    };
    const onUp = () => setTimeout(update, 10);
    const onDown = (e: Event) => {
      if (barRef.current?.contains(e.target as Node)) return;
      setSel(null);
    };
    document.addEventListener('mouseup', onUp);
    document.addEventListener('keyup', onUp);
    document.addEventListener('touchend', onUp);
    const onScroll = () => setSel(null);
    document.addEventListener('mousedown', onDown);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('keyup', onUp);
      document.removeEventListener('touchend', onUp);
      document.removeEventListener('mousedown', onDown);
    };
  }, [root]);

  if (!sel) return null;
  const meta = {
    contentId: sel.el.dataset.cid!,
    contentVersion: Number(sel.el.dataset.ver || 1),
    title: sel.el.dataset.title || '',
    link: sel.el.dataset.link || '/'
  };
  return (
    <div
      ref={barRef}
      role="toolbar"
      aria-label="Công cụ đoạn đã chọn"
      className="fixed z-40 flex -translate-x-1/2 -translate-y-full gap-1 rounded-xl bg-ink p-1 text-paper shadow-xl"
      style={{ left: sel.x, top: Math.max(sel.y - 8, 70) }}
    >
      <button
        type="button"
        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold hover:bg-white/10"
        onClick={() => {
          saveNote({ ...meta, kind: 'highlight', quote: sel.text, text: '' });
          window.getSelection()?.removeAllRanges();
          setSel(null);
          toast('Đã highlight');
        }}
      >
        <Highlighter size={16} /> Highlight
      </button>
      <button
        type="button"
        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold hover:bg-white/10"
        onClick={() => {
          openNote({ ...meta, kind: 'note', quote: sel.text });
          window.getSelection()?.removeAllRanges();
          setSel(null);
        }}
      >
        <StickyNote size={16} /> Ghi chú
      </button>
    </div>
  );
}
