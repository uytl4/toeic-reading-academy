import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

/** Cuộn tới mục ?s=<id> sau khi trang hiển thị */
export function useScrollToSection(dep: unknown) {
  const [params] = useSearchParams();
  const s = params.get('s');
  useEffect(() => {
    if (!s) return;
    const t = setTimeout(() => {
      const el = document.getElementById(s);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        el.classList.add('ring-2', 'ring-brand/40', 'rounded-xl');
        setTimeout(() => el.classList.remove('ring-2', 'ring-brand/40', 'rounded-xl'), 1800);
      }
    }, 60);
    return () => clearTimeout(t);
  }, [s, dep]);
}

/** % đã cuộn trong trang */
export function useReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? Math.round((h.scrollTop / max) * 100) : 0);
    };
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    window.addEventListener('resize', fn);
    return () => {
      window.removeEventListener('scroll', fn);
      window.removeEventListener('resize', fn);
    };
  }, []);
  return pct;
}

/** Mục đang hiển thị trên màn hình (cho mục lục nội bộ) */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [ids.join('|')]); // eslint-disable-line react-hooks/exhaustive-deps
  return active;
}
