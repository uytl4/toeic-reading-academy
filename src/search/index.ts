import { lessons } from '../data/grammar';
import { units } from '../data/units';
import { formulas } from '../data/formulas';
import { readingGuides } from '../data/reading';
import type { Block } from '../data/types';
import { normalize, stripMarkup } from './normalize';

export type DocType = 'lesson' | 'section' | 'formula' | 'unit' | 'vocab' | 'reading' | 'example';

export interface SearchDoc {
  id: string;
  type: DocType;
  title: string;
  context: string;
  text: string; // văn bản gốc để trích đoạn
  link: string;
  nTitle: string;
  nText: string;
}

export const TYPE_LABEL: Record<DocType, string> = {
  lesson: 'Bài học',
  section: 'Mục bài học',
  formula: 'Công thức',
  unit: 'Unit',
  vocab: 'Từ vựng',
  reading: 'Reading',
  example: 'Ví dụ'
};

function blocksText(blocks: Block[]): string {
  return blocks
    .map((b) => {
      switch (b.t) {
        case 'p':
        case 'note':
          return b.text;
        case 'formula':
          return b.pattern + ' ' + b.text;
        case 'list':
          return b.items.join(' ');
        case 'table':
          return b.head.join(' ') + ' ' + b.rows.flat().join(' ');
        case 'ex':
          return b.items.map((e) => e.join(' ')).join(' ');
        case 'passage':
          return b.title + ' ' + b.lines.map((l) => l.join(' ')).join(' ');
      }
    })
    .join(' ');
}

function doc(d: Omit<SearchDoc, 'nTitle' | 'nText'>): SearchDoc {
  const text = stripMarkup(d.text);
  return { ...d, text, nTitle: normalize(d.title), nText: normalize(d.title + ' ' + d.context + ' ' + text) };
}

let INDEX: SearchDoc[] | null = null;

export function getIndex(): SearchDoc[] {
  if (INDEX) return INDEX;
  const out: SearchDoc[] = [];
  for (const l of lessons) {
    const base = `/ngu-phap/${l.id}`;
    out.push(doc({ id: l.id, type: 'lesson', title: `${l.code}: ${l.title}`, context: 'Ngữ pháp', text: l.summary + ' ' + l.goals.join(' ') + ' ' + l.keyRules.join(' '), link: base }));
    for (const s of l.sections) {
      out.push(doc({ id: `${l.id}#${s.id}`, type: 'section', title: s.title, context: `${l.code}: ${l.title}`, text: blocksText(s.blocks), link: `${base}?s=${s.id}` }));
    }
    out.push(doc({ id: `${l.id}#dau-hieu`, type: 'section', title: 'Dấu hiệu nhận biết', context: `${l.code}: ${l.title}`, text: l.signals.join(' '), link: `${base}?s=dau-hieu` }));
    out.push(doc({ id: `${l.id}#loi`, type: 'section', title: 'Lỗi thường gặp', context: `${l.code}: ${l.title}`, text: l.mistakes.rows.flat().join(' '), link: `${base}?s=loi-thuong-gap` }));
    [...l.examples, ...l.part5].forEach((e, i) =>
      out.push(doc({ id: `${l.id}#ex${i}`, type: 'example', title: stripMarkup(e[0]), context: `${l.code}: ${l.title}`, text: e[1] + ' — ' + e[2], link: `${base}?s=vi-du` }))
    );
  }
  for (const f of formulas) {
    out.push(
      doc({
        id: f.id,
        type: 'formula',
        title: f.pattern,
        context: `${f.group} · ${f.label}`,
        text: [f.label, f.explain, f.example, f.translation, f.exceptions, f.tags.join(' ')].join(' '),
        link: `/cong-thuc?f=${f.id}`
      })
    );
  }
  for (const u of units) {
    const base = `/units/${u.id}`;
    out.push(doc({ id: u.id, type: 'unit', title: `Unit ${u.no}: ${u.name}`, context: u.viName, text: u.desc + ' ' + blocksText(u.overview) + ' ' + u.summary.join(' '), link: base }));
    for (const v of u.vocab) {
      out.push(doc({ id: `${u.id}#${v.w}`, type: 'vocab', title: v.w, context: `Unit ${u.no}: ${u.name} · ${v.pos}`, text: `${v.vi}. ${v.ex} ${v.exVi}`, link: `${base}?s=tu-vung` }));
    }
    for (const fam of u.families) {
      out.push(doc({ id: `${u.id}#fam-${fam.root}`, type: 'vocab', title: fam.items.map((i) => i[0]).join(' / '), context: `Word family · Unit ${u.no}`, text: fam.items.map((i) => `${i[0]} (${i[1]}) ${i[2]}`).join(', '), link: `${base}?s=word-families` }));
    }
    for (const c of u.collocations) {
      out.push(doc({ id: `${u.id}#col-${c[0]}`, type: 'vocab', title: c[0], context: `Collocation · Unit ${u.no}`, text: `${c[1]}. ${c[2]}`, link: `${base}?s=collocations` }));
    }
    out.push(doc({ id: `${u.id}#ct`, type: 'section', title: 'Cấu trúc thường gặp', context: `Unit ${u.no}: ${u.name}`, text: blocksText(u.structures), link: `${base}?s=cau-truc` }));
    out.push(doc({ id: `${u.id}#p67`, type: 'section', title: 'Ví dụ Part 6–7', context: `Unit ${u.no}: ${u.name}`, text: blocksText(u.part67), link: `${base}?s=vi-du-part-6-7` }));
  }
  for (const g of readingGuides) {
    out.push(doc({ id: g.id, type: 'reading', title: g.title, context: g.part, text: g.desc, link: `/reading/${g.id}` }));
    for (const s of g.sections) {
      out.push(doc({ id: `${g.id}#${s.id}`, type: 'reading', title: s.title, context: g.part, text: blocksText(s.blocks), link: `/reading/${g.id}?s=${s.id}` }));
    }
  }
  INDEX = out;
  return out;
}

export interface Hit {
  doc: SearchDoc;
  score: number;
  snippet: string;
}

const TYPE_BOOST: Record<DocType, number> = { formula: 6, lesson: 5, unit: 4, vocab: 5, section: 3, reading: 3, example: 0 };

export function search(q: string, limit = 50): Hit[] {
  const nq = normalize(q);
  if (nq.length < 2) return [];
  const tokens = nq.split(' ').filter(Boolean);
  const hits: Hit[] = [];
  for (const d of getIndex()) {
    if (!tokens.every((t) => d.nText.includes(t))) continue;
    let score = TYPE_BOOST[d.type];
    if (d.nTitle === nq) score += 30;
    else if (d.nTitle.startsWith(nq)) score += 18;
    else if (d.nTitle.includes(nq)) score += 12;
    else if (d.nText.includes(nq)) score += 6;
    tokens.forEach((t) => d.nTitle.includes(t) && (score += 2));
    hits.push({ doc: d, score, snippet: makeSnippet(d.text, tokens) });
  }
  return hits.sort((a, b) => b.score - a.score).slice(0, limit);
}

function makeSnippet(text: string, tokens: string[]) {
  const n = normalize(text);
  // vị trí trong chuỗi chuẩn hóa xấp xỉ vị trí gốc (độ dài gần như giữ nguyên khi bỏ dấu)
  let pos = -1;
  for (const t of tokens) {
    pos = n.indexOf(t);
    if (pos >= 0) break;
  }
  if (pos < 0) return text.slice(0, 140);
  const start = Math.max(0, pos - 50);
  return (start > 0 ? '…' : '') + text.slice(start, start + 160) + (start + 160 < text.length ? '…' : '');
}

export const SUGGESTIONS = ['the + adj + n', 'because of', 'their', 'established', 'mệnh đề quan hệ', 'bị động', 'responsible for', 'unless', 'so sánh', 'employee'];
