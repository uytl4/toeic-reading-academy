import { createContext, Fragment, useContext, type ReactNode } from 'react';

export const WC_LABEL: Record<string, string> = { N: 'Danh từ', V: 'Động từ', Adj: 'Tính từ', Adv: 'Trạng từ' };

/** Danh sách đoạn trích được highlight trong phạm vi hiện tại */
export const HighlightCtx = createContext<string[]>([]);

const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|\{[^}|]+\|(?:N|V|Adj|Adv)\})/g;

function WordTag({ word, cls }: { word: string; cls: string }) {
  return (
    <span className={`wc wc-${cls}`} title={WC_LABEL[cls]}>
      {word}
      <sup>{cls}</sup>
    </span>
  );
}

function highlight(text: string, quotes: string[], keyBase: string): ReactNode {
  const qs = quotes.filter((q) => q.length >= 2 && text.includes(q));
  if (!qs.length) return text;
  const q = qs.sort((a, b) => b.length - a.length)[0];
  const parts = text.split(q);
  return parts.map((p, i) => (
    <Fragment key={keyBase + i}>
      {highlight(p, quotes.filter((x) => x !== q), keyBase + i + '-')}
      {i < parts.length - 1 && <mark className="hl">{q}</mark>}
    </Fragment>
  ));
}

function render(text: string, quotes: string[], allowCode = true): ReactNode[] {
  return text.split(TOKEN).map((part, i) => {
    if (!part) return null;
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{render(part.slice(2, -2), quotes, allowCode)}</strong>;
    if (allowCode && part.startsWith('`') && part.endsWith('`'))
      return (
        <code key={i} className="k">
          {render(part.slice(1, -1), [], false)}
        </code>
      );
    const m = part.match(/^\{([^}|]+)\|(N|V|Adj|Adv)\}$/);
    if (m) return <WordTag key={i} word={m[1]} cls={m[2]} />;
    return <Fragment key={i}>{highlight(part, quotes, `h${i}-`)}</Fragment>;
  });
}

/** Hiển thị chuỗi có markup nội tuyến: **đậm**, `mã`, {từ|N}. */
export function Rich({ text, className }: { text: string; className?: string }) {
  const quotes = useContext(HighlightCtx);
  return <span className={className}>{render(text, quotes)}</span>;
}

export function WordClassLegend() {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm" aria-label="Chú thích màu loại từ">
      <span className="text-muted">Màu loại từ:</span>
      {Object.entries(WC_LABEL).map(([k, v]) => (
        <span key={k} className={`wc wc-${k}`}>
          {v}
          <sup>{k}</sup>
        </span>
      ))}
    </div>
  );
}
