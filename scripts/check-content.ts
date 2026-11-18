import { lessons } from '../src/data/grammar';
import { units } from '../src/data/units';
import { formulas, formulaById } from '../src/data/formulas';
import { readingGuides, roadmap } from '../src/data/reading';

const errs: string[] = [];
const lessonIds = new Set(lessons.map((l) => l.id));
const unitIds = new Set(units.map((u) => u.id));
const readingIds = new Set(readingGuides.map((r) => r.id));
const tag = /\{[^}|]+\|([^}]+)\}/g;
const checkText = (where: string, s: string) => {
  for (const m of s.matchAll(tag)) if (!['N', 'V', 'Adj', 'Adv'].includes(m[1])) errs.push(`${where}: nhãn lạ ${m[0]}`);
  if ((s.match(/\*\*/g) || []).length % 2) errs.push(`${where}: ** lẻ`);
};
const walk = (where: string, v: unknown): void => {
  if (typeof v === 'string') checkText(where, v);
  else if (Array.isArray(v)) v.forEach((x, i) => walk(`${where}[${i}]`, x));
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) {
    if (k === 'fid' && typeof x === 'string' && !formulaById(x)) errs.push(`${where}: fid không tồn tại ${x}`);
    walk(`${where}.${k}`, x);
  }
};

let exCount = 0;
for (const l of lessons) {
  if (l.examples.length < 10) errs.push(`${l.id}: chỉ ${l.examples.length} ví dụ`);
  exCount += l.examples.length + l.part5.length;
  l.related.forEach((r) => !lessonIds.has(r) && errs.push(`${l.id}: related ${r} không tồn tại`));
  l.formulas.forEach((f) => !formulaById(f) && errs.push(`${l.id}: formula ${f} không tồn tại`));
  if (l.keyRules.length < 5 || l.keyRules.length > 15) errs.push(`${l.id}: keyRules ${l.keyRules.length}`);
  walk(l.id, l);
}
for (const u of units) {
  u.related.forEach((r) => !lessonIds.has(r) && errs.push(`${u.id}: related ${r}`));
  walk(u.id, u);
  exCount += u.part5.length;
}
for (const f of formulas) {
  f.lessons.forEach((r) => !lessonIds.has(r) && errs.push(`${f.id}: lesson ${r}`));
  walk(f.id, f);
}
const ids = formulas.map((f) => f.id);
if (new Set(ids).size !== ids.length) errs.push('Trùng id công thức');
for (const g of readingGuides) { g.related.forEach((r) => !lessonIds.has(r) && errs.push(`${g.id}: ${r}`)); walk(g.id, g); }
for (const d of roadmap) {
  d.lessons.forEach((r) => !lessonIds.has(r) && errs.push(`day ${d.day}: ${r}`));
  d.units?.forEach((r) => !unitIds.has(r) && errs.push(`day ${d.day}: ${r}`));
  d.reading?.forEach((r) => !readingIds.has(r) && errs.push(`day ${d.day}: ${r}`));
}
const vocab = units.reduce((a, u) => a + u.vocab.length, 0);
const colloc = units.reduce((a, u) => a + u.collocations.length, 0);
const fam = units.reduce((a, u) => a + u.families.length, 0);
const passages = JSON.stringify({ lessons, units, readingGuides }).match(/"t":"passage"/g)?.length;
console.log(JSON.stringify({ lessons: lessons.length, units: units.length, readingGuides: readingGuides.length, readingSections: readingGuides.reduce((a, g) => a + g.sections.length, 0), formulas: formulas.length, analyzedExamples: exCount, vocab, collocations: colloc, wordFamilies: fam, annotatedPassages: passages, roadmapDays: roadmap.length }, null, 1));
if (errs.length) { console.error('LỖI:\n' + errs.join('\n')); process.exit(1); } else console.log('Nội dung hợp lệ ✓');
