import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import {
  DEFAULT_SETTINGS,
  delBookmark,
  delNote,
  loadAll,
  putBookmark,
  putKV,
  putNote,
  putProgress,
  replaceAll,
  type Bookmark,
  type LastVisited,
  type Note,
  type Settings,
  type Snapshot
} from './db';

interface Store {
  ready: boolean;
  error: string | null;
  progress: Record<string, boolean>;
  bookmarks: Bookmark[];
  notes: Note[];
  settings: Settings;
  lastVisited: LastVisited | null;
  visited: string[];
  isDone: (key: string) => boolean;
  setDone: (key: string, done: boolean) => void;
  isBookmarked: (id: string) => boolean;
  toggleBookmark: (b: Omit<Bookmark, 'at'>) => void;
  removeBookmark: (id: string) => void;
  saveNote: (n: Omit<Note, 'id' | 'at' | 'updatedAt'> & { id?: string }) => void;
  removeNote: (id: string) => void;
  updateSettings: (s: Partial<Settings>) => void;
  visit: (v: Omit<LastVisited, 'at'>, visitKey?: string) => void;
  snapshot: () => Snapshot;
  restore: (s: Snapshot) => Promise<void>;
}

const Ctx = createContext<Store | null>(null);

const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

export function applyTheme(theme: Settings['theme']) {
  const dark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', dark);
  try {
    localStorage.setItem('tra-theme', theme);
  } catch {
    /* bỏ qua */
  }
}

export function applyFont(size: number) {
  document.documentElement.style.setProperty('--content-size', size + 'px');
  try {
    localStorage.setItem('tra-font', String(size));
  } catch {
    /* bỏ qua */
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [lastVisited, setLastVisited] = useState<LastVisited | null>(null);
  const [visited, setVisited] = useState<string[]>([]);

  const hydrate = useCallback((s: Snapshot) => {
    const p: Record<string, boolean> = {};
    s.progress.forEach((r) => (p[r.key] = r.done));
    setProgress(p);
    setBookmarks(s.bookmarks.sort((a, b) => b.at - a.at));
    setNotes(s.notes.sort((a, b) => b.updatedAt - a.updatedAt));
    setSettings(s.settings);
    setLastVisited(s.lastVisited);
    setVisited(s.visited);
    applyTheme(s.settings.theme);
    applyFont(s.settings.fontSize);
  }, []);

  useEffect(() => {
    loadAll()
      .then(hydrate)
      .catch((e) => setError('Không mở được bộ nhớ IndexedDB trên trình duyệt này: ' + String(e?.message || e)))
      .finally(() => setReady(true));
  }, [hydrate]);

  useEffect(() => {
    if (settings.theme !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const fn = () => applyTheme('system');
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, [settings.theme]);

  const store = useMemo<Store>(() => {
    const snapshot = (): Snapshot => ({
      progress: Object.entries(progress).map(([key, done]) => ({ key, done, at: Date.now() })),
      bookmarks,
      notes,
      settings,
      lastVisited,
      visited
    });
    return {
      ready,
      error,
      progress,
      bookmarks,
      notes,
      settings,
      lastVisited,
      visited,
      isDone: (k) => !!progress[k],
      setDone: (key, done) => {
        setProgress((p) => ({ ...p, [key]: done }));
        putProgress({ key, done, at: Date.now() });
      },
      isBookmarked: (id) => bookmarks.some((b) => b.id === id),
      toggleBookmark: (b) => {
        if (bookmarks.some((x) => x.id === b.id)) {
          setBookmarks((bs) => bs.filter((x) => x.id !== b.id));
          delBookmark(b.id);
        } else {
          const full = { ...b, at: Date.now() };
          setBookmarks((bs) => [full, ...bs]);
          putBookmark(full);
        }
      },
      removeBookmark: (id) => {
        setBookmarks((bs) => bs.filter((x) => x.id !== id));
        delBookmark(id);
      },
      saveNote: (n) => {
        const now = Date.now();
        const existing = n.id ? notes.find((x) => x.id === n.id) : undefined;
        const full: Note = { ...n, id: n.id || uid(), at: existing?.at ?? now, updatedAt: now };
        setNotes((ns) => [full, ...ns.filter((x) => x.id !== full.id)]);
        putNote(full);
      },
      removeNote: (id) => {
        setNotes((ns) => ns.filter((x) => x.id !== id));
        delNote(id);
      },
      updateSettings: (s) => {
        const next = { ...settings, ...s };
        setSettings(next);
        putKV('settings', next);
        if (s.theme) applyTheme(next.theme);
        if (s.fontSize) applyFont(next.fontSize);
      },
      visit: (v, visitKey) => {
        const lv = { ...v, at: Date.now() };
        setLastVisited(lv);
        putKV('lastVisited', lv);
        if (visitKey && !visited.includes(visitKey)) {
          const nv = [...visited, visitKey];
          setVisited(nv);
          putKV('visited', nv);
        }
      },
      snapshot,
      restore: async (s) => {
        await replaceAll(s);
        hydrate(s);
      }
    };
  }, [ready, error, progress, bookmarks, notes, settings, lastVisited, visited, hydrate]);

  return <Ctx.Provider value={store}>{children}</Ctx.Provider>;
}

export function useStore() {
  const s = useContext(Ctx);
  if (!s) throw new Error('useStore phải nằm trong StoreProvider');
  return s;
}
