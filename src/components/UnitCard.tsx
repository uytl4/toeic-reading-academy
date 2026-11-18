import { Link } from 'react-router-dom';
import { Briefcase, Building2, CheckCircle2, Cpu, Music, Plane, ShoppingCart, Users, UtensilsCrossed, type LucideIcon } from 'lucide-react';
import type { Unit } from '../data/types';
import { useStore } from '../db/store';
import { unitStats } from '../app/progress';
import { ProgressBar } from './ui';

const ICONS: Record<string, LucideIcon> = {
  'unit-1': Users,
  'unit-2': Music,
  'unit-3': Plane,
  'unit-4': UtensilsCrossed,
  'unit-5': Cpu,
  'unit-6': ShoppingCart,
  'unit-7': Briefcase,
  'unit-8': Building2
};

/** Ảnh bìa minh họa tự tạo (SVG + icon), không dùng ảnh bản quyền */
export function UnitCover({ unit, className = '' }: { unit: Unit; className?: string }) {
  const Icon = ICONS[unit.id] || Briefcase;
  const { from, to, accent } = unit.theme;
  const gid = `g-${unit.id}`;
  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={from} />
            <stop offset="1" stopColor={to} />
          </linearGradient>
        </defs>
        <rect width="320" height="180" fill={`url(#${gid})`} />
        <circle cx="270" cy="30" r="70" fill="#fff" opacity="0.08" />
        <circle cx="40" cy="170" r="60" fill="#fff" opacity="0.07" />
        <circle cx="250" cy="150" r="18" fill={accent} opacity="0.55" />
        <circle cx="60" cy="40" r="6" fill={accent} opacity="0.8" />
        <circle cx="90" cy="25" r="3" fill="#fff" opacity="0.6" />
        <path d="M0 140 Q 80 110 160 135 T 320 125 V180 H0 Z" fill="#000" opacity="0.12" />
        <text x="18" y="168" fontSize="64" fontWeight="800" fill="#fff" opacity="0.14" fontFamily="Segoe UI, Arial">
          {String(unit.no).padStart(2, '0')}
        </text>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid h-20 w-20 place-items-center rounded-3xl bg-white/15 shadow-lg ring-1 ring-white/30 backdrop-blur-sm">
          <Icon size={42} color="#fff" strokeWidth={1.8} />
        </div>
      </div>
    </div>
  );
}

export function UnitCard({ unit }: { unit: Unit }) {
  const { isDone } = useStore();
  const s = unitStats(unit.id, isDone);
  const complete = s.done === s.total;
  return (
    <Link
      to={`/units/${unit.id}`}
      className="group card flex flex-col overflow-hidden shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:-translate-y-0.5"
      aria-label={`Unit ${unit.no}: ${unit.name}, ${s.done} trên ${s.total} mục đã học`}
    >
      <div className="relative">
        <UnitCover unit={unit} className="aspect-[16/9]" />
        {complete && (
          <span className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-1.5 text-sm font-bold text-white drop-shadow">
            <CheckCircle2 size={22} className="rounded-full bg-ok" /> Hoàn thành
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col items-center px-4 pb-4 pt-3 text-center">
        <span className="text-2xl font-extrabold text-brand">{String(unit.no).padStart(2, '0')}</span>
        <h3 className="text-lg font-bold leading-tight">{unit.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted">{unit.desc}</p>
        <div className="mt-auto w-full pt-3">
          <div className="mb-1 flex justify-between text-xs text-muted">
            <span>
              {s.done}/{s.total} mục đã học
            </span>
            <span className="font-semibold">{s.pct}%</span>
          </div>
          <ProgressBar value={s.pct} label={`Tiến độ Unit ${unit.no}`} />
        </div>
      </div>
    </Link>
  );
}
