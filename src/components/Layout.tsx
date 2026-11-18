import { useEffect, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BarChart3, BookOpen, CalendarDays, Grid2x2, Home, Layers, Menu, NotebookPen, Search, Settings, WifiOff, X, Zap, FileText } from 'lucide-react';
import { SearchBox } from './SearchBox';

export const NAV = [
  { to: '/', label: 'Tổng quan', icon: Home, end: true },
  { to: '/lo-trinh', label: 'Lộ trình 14 ngày', icon: CalendarDays },
  { to: '/ngu-phap', label: 'Ngữ pháp', icon: Layers },
  { to: '/units', label: '8 Units', icon: Grid2x2 },
  { to: '/cong-thuc', label: 'Công thức nhanh', icon: Zap },
  { to: '/reading', label: 'Reading 5–6–7', icon: FileText },
  { to: '/so-tay', label: 'Sổ tay học tập', icon: NotebookPen },
  { to: '/cai-dat', label: 'Cài đặt & sao lưu', icon: Settings }
];

const MOBILE_NAV = [NAV[0], NAV[2], NAV[3], NAV[4], NAV[6]];

function Logo() {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="TOEIC Reading Grammar Academy – Trang chủ">
      <BookOpen className="text-brand" size={30} strokeWidth={2.2} />
      <span className="text-lg font-extrabold leading-tight sm:text-xl">
        TOEIC Reading <span className="hidden text-brand xl:inline">Grammar Academy</span>
      </span>
    </Link>
  );
}

function SideNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav aria-label="Điều hướng chính" className="flex flex-col gap-1">
      {NAV.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          onClick={onNavigate}
          className={({ isActive }) =>
            `flex min-h-[48px] items-center gap-3 rounded-xl px-4 text-[15px] font-medium transition ${
              isActive ? 'bg-[#2D6CB5] text-white shadow' : 'text-white/85 hover:bg-white/10 hover:text-white'
            }`
          }
        >
          <Icon size={20} />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

function useOnline() {
  const [online, setOnline] = useState(typeof navigator === 'undefined' ? true : navigator.onLine);
  useEffect(() => {
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => {
      window.removeEventListener('online', on);
      window.removeEventListener('offline', off);
    };
  }, []);
  return online;
}

export function Layout({ children }: { children: ReactNode }) {
  const [drawer, setDrawer] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const loc = useLocation();
  const online = useOnline();

  useEffect(() => {
    setDrawer(false);
    setMobileSearch(false);
    if (!loc.search.includes('s=') && !loc.search.includes('f=')) window.scrollTo(0, 0);
  }, [loc.pathname, loc.search]);

  return (
    <div className="min-h-screen">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-3 focus:py-2 focus:text-white">
        Bỏ qua tới nội dung
      </a>
      <header className="sticky top-0 z-30 border-b border-line bg-card/95 backdrop-blur">
        <div className="flex h-16 items-center gap-3 px-4 lg:px-6">
          <button type="button" className="rounded-lg p-2 lg:hidden" aria-label="Mở menu" onClick={() => setDrawer(true)}>
            <Menu size={22} />
          </button>
          <Logo />
          <div className="mx-auto hidden w-full max-w-xl md:block">
            <SearchBox />
          </div>
          <div className="ml-auto flex items-center gap-2 md:ml-0">
            <button type="button" className="rounded-lg p-2 md:hidden" aria-label="Tìm kiếm" onClick={() => setMobileSearch((v) => !v)}>
              <Search size={21} />
            </button>
            <Link to="/lo-trinh" className="btn-primary hidden whitespace-nowrap sm:inline-flex">
              <BarChart3 size={18} /> Tiến độ
            </Link>
            <Link to="/cai-dat" className="rounded-lg p-2 text-muted hover:text-brand" aria-label="Cài đặt">
              <Settings size={21} />
            </Link>
          </div>
        </div>
        {mobileSearch && (
          <div className="border-t border-line px-4 py-3 md:hidden">
            <SearchBox autoFocus onNavigate={() => setMobileSearch(false)} />
          </div>
        )}
        {!online && (
          <div className="flex items-center justify-center gap-2 bg-amber-500/15 px-4 py-1.5 text-sm font-medium">
            <WifiOff size={15} /> Đang offline – nội dung đã lưu vẫn dùng được.
          </div>
        )}
      </header>

      <aside className="fixed bottom-0 left-0 top-16 hidden w-64 flex-col overflow-y-auto bg-navy p-4 lg:flex">
        <SideNav />
        <svg viewBox="0 0 240 120" className="mt-auto w-full opacity-40" aria-hidden="true">
          <path d="M0 80 Q60 40 120 70 T240 60 V120 H0Z" fill="#2D6CB5" />
          <path d="M0 95 Q70 70 140 92 T240 85 V120 H0Z" fill="#1E4F86" />
        </svg>
      </aside>

      {drawer && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="absolute inset-0 bg-black/40" onClick={() => setDrawer(false)} />
          <div className="absolute bottom-0 left-0 top-0 w-72 max-w-[85vw] overflow-y-auto bg-navy p-4">
            <div className="mb-4 flex items-center justify-between text-white">
              <span className="font-bold">TOEIC Reading</span>
              <button type="button" aria-label="Đóng menu" onClick={() => setDrawer(false)} className="rounded-lg p-2 hover:bg-white/10">
                <X size={20} />
              </button>
            </div>
            <SideNav onNavigate={() => setDrawer(false)} />
          </div>
        </div>
      )}

      <main id="main" className="px-4 pb-28 pt-6 lg:ml-64 lg:px-8 lg:pb-12">
        {children}
      </main>

      <nav aria-label="Điều hướng nhanh" className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-line bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
        {MOBILE_NAV.map(({ to, label, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end} className={({ isActive }) => `flex min-h-[58px] flex-col items-center justify-center gap-0.5 text-[11px] font-medium ${isActive ? 'text-brand' : 'text-muted'}`}>
            <Icon size={21} />
            <span className="max-w-full truncate px-1">{label.replace(' học tập', '').replace(' nhanh', '')}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
