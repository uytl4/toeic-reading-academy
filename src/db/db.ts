import { openDB, type DBSchema, type IDBPDatabase } from 'idb';

export const SCHEMA_VERSION = 1;
export const APP_ID = 'toeic-reading-grammar-academy';

export type BookmarkKind = 'formula' | 'section' | 'lesson' | 'unit' | 'vocab' | 'reading';

export interface ProgressRec {
  key: string; // lesson:bai-4 | unit:unit-1:tu-vung | reading:part-5:sec | day:3
  done: boolean;
  at: number;
}

export interface Bookmark {
  id: string; // `${kind}:${refId}`
  kind: BookmarkKind;
  refId: string;
  title: string;
  subtitle?: string;
  link: string;
  at: number;
}

export interface Note {
  id: string;
  contentId: string; // vd: lesson:bai-4#cum-danh-tu, formula:f-the-adj-n, free
  contentVersion: number;
  kind: 'note' | 'highlight';
  quote?: string;
  text: string;
  title: string;
  link: string;
  at: number;
  updatedAt: number;
}

export interface Settings {
  theme: 'light' | 'dark' | 'system';
  fontSize: number;
}

export interface LastVisited {
  path: string;
  title: string;
  kind: string;
  at: number;
}

interface TraDB extends DBSchema {
  progress: { key: string; value: ProgressRec };
  bookmarks: { key: string; value: Bookmark };
  notes: { key: string; value: Note };
  kv: { key: string; value: unknown };
}

let dbp: Promise<IDBPDatabase<TraDB>> | null = null;

export function getDB() {
  if (!dbp) {
    dbp = openDB<TraDB>('tra-db', 1, {
      upgrade(db) {
        db.createObjectStore('progress', { keyPath: 'key' });
        db.createObjectStore('bookmarks', { keyPath: 'id' });
        db.createObjectStore('notes', { keyPath: 'id' });
        db.createObjectStore('kv');
      }
    });
  }
  return dbp;
}

export interface Snapshot {
  progress: ProgressRec[];
  bookmarks: Bookmark[];
  notes: Note[];
  settings: Settings;
  lastVisited: LastVisited | null;
  visited: string[];
}

export const DEFAULT_SETTINGS: Settings = { theme: 'system', fontSize: 17 };

export async function loadAll(): Promise<Snapshot> {
  const db = await getDB();
  const [progress, bookmarks, notes, settings, lastVisited, visited] = await Promise.all([
    db.getAll('progress'),
    db.getAll('bookmarks'),
    db.getAll('notes'),
    db.get('kv', 'settings'),
    db.get('kv', 'lastVisited'),
    db.get('kv', 'visited')
  ]);
  return {
    progress,
    bookmarks,
    notes,
    settings: { ...DEFAULT_SETTINGS, ...((settings as Settings) || {}) },
    lastVisited: (lastVisited as LastVisited) || null,
    visited: (visited as string[]) || []
  };
}

export async function putProgress(rec: ProgressRec) {
  (await getDB()).put('progress', rec);
}
export async function putBookmark(b: Bookmark) {
  (await getDB()).put('bookmarks', b);
}
export async function delBookmark(id: string) {
  (await getDB()).delete('bookmarks', id);
}
export async function putNote(n: Note) {
  (await getDB()).put('notes', n);
}
export async function delNote(id: string) {
  (await getDB()).delete('notes', id);
}
export async function putKV(key: string, value: unknown) {
  (await getDB()).put('kv', value, key);
}

export async function replaceAll(s: Snapshot) {
  const db = await getDB();
  const tx = db.transaction(['progress', 'bookmarks', 'notes', 'kv'], 'readwrite');
  await Promise.all([
    tx.objectStore('progress').clear(),
    tx.objectStore('bookmarks').clear(),
    tx.objectStore('notes').clear(),
    tx.objectStore('kv').clear()
  ]);
  for (const p of s.progress) tx.objectStore('progress').put(p);
  for (const b of s.bookmarks) tx.objectStore('bookmarks').put(b);
  for (const n of s.notes) tx.objectStore('notes').put(n);
  tx.objectStore('kv').put(s.settings, 'settings');
  if (s.lastVisited) tx.objectStore('kv').put(s.lastVisited, 'lastVisited');
  tx.objectStore('kv').put(s.visited, 'visited');
  await tx.done;
}

/* ---------- Sao lưu JSON ---------- */

export interface BackupFile {
  app: string;
  schemaVersion: number;
  exportedAt: string;
  data: Snapshot;
}

export function makeBackup(s: Snapshot): BackupFile {
  return { app: APP_ID, schemaVersion: SCHEMA_VERSION, exportedAt: new Date().toISOString(), data: s };
}

const isObj = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);
const isStr = (v: unknown) => typeof v === 'string';
const isNum = (v: unknown) => typeof v === 'number' && Number.isFinite(v);

/** Kiểm tra tệp sao lưu. Trả về Snapshot hợp lệ hoặc ném lỗi tiếng Việt rõ ràng. */
export function validateBackup(raw: unknown): Snapshot {
  if (!isObj(raw)) throw new Error('Tệp không phải JSON dạng đối tượng.');
  if (raw.app !== APP_ID) throw new Error('Tệp không phải bản sao lưu của TOEIC Reading Grammar Academy.');
  if (!isNum(raw.schemaVersion)) throw new Error('Thiếu trường "schemaVersion".');
  if ((raw.schemaVersion as number) > SCHEMA_VERSION)
    throw new Error(`Bản sao lưu dùng schema v${raw.schemaVersion}, mới hơn ứng dụng (v${SCHEMA_VERSION}). Hãy cập nhật ứng dụng.`);
  const d = raw.data;
  if (!isObj(d)) throw new Error('Thiếu trường "data".');
  const arr = (k: string) => {
    const v = d[k];
    if (!Array.isArray(v)) throw new Error(`Trường "data.${k}" phải là mảng.`);
    return v as unknown[];
  };
  const progress = arr('progress').map((p, i) => {
    if (!isObj(p) || !isStr(p.key) || typeof p.done !== 'boolean' || !isNum(p.at)) throw new Error(`Mục tiến độ #${i + 1} không hợp lệ.`);
    return { key: p.key as string, done: p.done as boolean, at: p.at as number };
  });
  const kinds = ['formula', 'section', 'lesson', 'unit', 'vocab', 'reading'];
  const bookmarks = arr('bookmarks').map((b, i) => {
    if (!isObj(b) || !isStr(b.id) || !kinds.includes(b.kind as string) || !isStr(b.refId) || !isStr(b.title) || !isStr(b.link) || !isNum(b.at))
      throw new Error(`Bookmark #${i + 1} không hợp lệ.`);
    return b as unknown as Bookmark;
  });
  const notes = arr('notes').map((n, i) => {
    if (!isObj(n) || !isStr(n.id) || !isStr(n.contentId) || !isNum(n.contentVersion) || !isStr(n.text) || !isStr(n.title) || !isStr(n.link) || !isNum(n.at))
      throw new Error(`Ghi chú #${i + 1} không hợp lệ.`);
    return { kind: 'note', updatedAt: n.at, ...n } as Note;
  });
  const st = isObj(d.settings) ? d.settings : {};
  const settings: Settings = {
    theme: ['light', 'dark', 'system'].includes(st.theme as string) ? (st.theme as Settings['theme']) : DEFAULT_SETTINGS.theme,
    fontSize: isNum(st.fontSize) ? Math.min(22, Math.max(15, st.fontSize as number)) : DEFAULT_SETTINGS.fontSize
  };
  const lv = d.lastVisited;
  const lastVisited = isObj(lv) && isStr(lv.path) && isStr(lv.title) ? (lv as unknown as LastVisited) : null;
  const visited = Array.isArray(d.visited) ? (d.visited as unknown[]).filter(isStr) as string[] : [];
  return { progress, bookmarks, notes, settings, lastVisited, visited };
}
