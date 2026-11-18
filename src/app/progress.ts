import { lessons } from '../data/grammar';
import { units } from '../data/units';
import { readingGuides, roadmap } from '../data/reading';
import { UNIT_SECTIONS } from '../data/types';

type IsDone = (k: string) => boolean;

export const lessonKey = (id: string) => `lesson:${id}`;
export const unitSecKey = (unitId: string, sec: string) => `unit:${unitId}:${sec}`;
export const readingSecKey = (guideId: string, sec: string) => `reading:${guideId}:${sec}`;
export const dayKey = (d: number) => `day:${d}`;

export function lessonStats(isDone: IsDone) {
  const done = lessons.filter((l) => isDone(lessonKey(l.id))).length;
  return { done, total: lessons.length, pct: Math.round((done / lessons.length) * 100) };
}

export function unitStats(unitId: string, isDone: IsDone) {
  const done = UNIT_SECTIONS.filter((s) => isDone(unitSecKey(unitId, s.id))).length;
  return { done, total: UNIT_SECTIONS.length, pct: Math.round((done / UNIT_SECTIONS.length) * 100) };
}

export function allUnitStats(isDone: IsDone) {
  let done = 0;
  let total = 0;
  units.forEach((u) => {
    const s = unitStats(u.id, isDone);
    done += s.done;
    total += s.total;
  });
  return { done, total, pct: Math.round((done / total) * 100) };
}

export function readingStats(guideId: string, isDone: IsDone) {
  const g = readingGuides.find((r) => r.id === guideId)!;
  const done = g.sections.filter((s) => isDone(readingSecKey(guideId, s.id))).length;
  return { done, total: g.sections.length, pct: Math.round((done / g.sections.length) * 100) };
}

export function roadmapStats(isDone: IsDone) {
  const done = roadmap.filter((d) => isDone(dayKey(d.day))).length;
  const current = roadmap.find((d) => !isDone(dayKey(d.day)))?.day ?? 14;
  return { done, total: roadmap.length, current, pct: Math.round((done / roadmap.length) * 100) };
}
