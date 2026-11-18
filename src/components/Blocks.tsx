import { AlertTriangle, Lightbulb } from 'lucide-react';
import type { Block, Ex } from '../data/types';
import { InlineFormula } from './FormulaCard';
import { Rich } from './Rich';

export function GrammarExample({ e, n }: { e: Ex; n?: number }) {
  return (
    <li className="rounded-2xl border border-line bg-card p-4">
      <div className="flex gap-3">
        {n !== undefined && <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand/10 text-sm font-bold text-brand">{n}</span>}
        <div className="min-w-0 space-y-1">
          <p className="font-medium" lang="en">
            <Rich text={e[0]} />
          </p>
          <p className="text-muted">
            <Rich text={e[1]} />
          </p>
          <p className="text-[0.93em]">
            <span className="font-semibold text-ok">Phân tích: </span>
            <Rich text={e[2]} />
          </p>
        </div>
      </div>
    </li>
  );
}

export function ExampleList({ items, start = 1 }: { items: Ex[]; start?: number }) {
  return (
    <ol className="my-3 space-y-3">
      {items.map((e, i) => (
        <GrammarExample key={i} e={e} n={start + i} />
      ))}
    </ol>
  );
}

export function DataTable({ head, rows, caption }: { head: string[]; rows: string[][]; caption?: string }) {
  return (
    <div className="my-3 overflow-x-auto rounded-2xl border border-line scrollbar-thin">
      <table className="w-full min-w-[480px] border-collapse text-[0.95em]">
        <thead>
          <tr className="bg-paper">
            {head.map((h) => (
              <th key={h} scope="col" className="border-b border-line px-3 py-2 text-left font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-line last:border-0 even:bg-paper/50">
              {r.map((c, j) => (
                <td key={j} className="px-3 py-2 align-top">
                  <Rich text={c} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && (
        <p className="border-t border-line bg-paper px-3 py-2 text-sm">
          <Rich text={caption} />
        </p>
      )}
    </div>
  );
}

/** Đoạn minh họa có chú thích (ReadingAnnotation) */
export function ReadingAnnotation({ title, kind, lines }: { title: string; kind?: string; lines: [string, string, string?][] }) {
  return (
    <figure className="my-4 overflow-hidden rounded-2xl border border-line bg-card">
      <figcaption className="flex items-center justify-between gap-2 border-b border-line bg-paper px-4 py-2">
        <span className="font-semibold">{title}</span>
        {kind && <span className="rounded-full bg-ink/5 px-2 py-0.5 text-xs font-semibold text-muted">{kind}</span>}
      </figcaption>
      <div className="divide-y divide-line">
        {lines.map(([en, vi, note], i) => (
          <div key={i} className="grid gap-1 px-4 py-3 md:grid-cols-[1fr_1fr] md:gap-4">
            <p lang="en" className="font-medium">
              <Rich text={en} />
            </p>
            <div>
              <p className="text-muted">
                <Rich text={vi} />
              </p>
              {note && (
                <p className="mt-1 text-[0.9em] text-brand">
                  ▸ <Rich text={note} />
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
}

export function Callout({ tone = 'tip', title, text }: { tone?: 'tip' | 'warn'; title?: string; text: string }) {
  const warn = tone === 'warn';
  return (
    <div className={`my-3 flex gap-3 rounded-2xl border p-4 ${warn ? 'border-amber-500/40 bg-amber-500/10' : 'border-ok/30 bg-ok/[0.07]'}`}>
      <span className={warn ? 'text-amber-600 dark:text-amber-400' : 'text-ok'}>{warn ? <AlertTriangle size={20} /> : <Lightbulb size={20} />}</span>
      <div>
        <p className="font-semibold">{title || (warn ? 'Lưu ý ngoại lệ' : 'Mẹo')}</p>
        <p>
          <Rich text={text} />
        </p>
      </div>
    </div>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.t) {
          case 'p':
            return (
              <p key={i} className="my-3">
                <Rich text={b.text} />
              </p>
            );
          case 'formula':
            return <InlineFormula key={i} pattern={b.pattern} text={b.text} fid={b.fid} />;
          case 'list': {
            const L = b.ordered ? 'ol' : 'ul';
            return (
              <L key={i} className={`my-3 space-y-1.5 pl-6 ${b.ordered ? 'list-decimal' : 'list-disc'}`}>
                {b.items.map((it, j) => (
                  <li key={j}>
                    <Rich text={it} />
                  </li>
                ))}
              </L>
            );
          }
          case 'table':
            return <DataTable key={i} head={b.head} rows={b.rows} caption={b.caption} />;
          case 'note':
            return <Callout key={i} tone={b.tone} title={b.title} text={b.text} />;
          case 'ex':
            return <ExampleList key={i} items={b.items} />;
          case 'passage':
            return <ReadingAnnotation key={i} title={b.title} kind={b.kind} lines={b.lines} />;
        }
      })}
    </>
  );
}
