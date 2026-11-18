import { useEffect, useState, type ReactNode } from 'react';
import { Check } from 'lucide-react';

export function ProgressBar({ value, label, className = '' }: { value: number; label?: string; className?: string }) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className={`h-2 w-full overflow-hidden rounded-full bg-line ${className}`} role="progressbar" aria-valuenow={v} aria-valuemin={0} aria-valuemax={100} aria-label={label || 'Tiến độ'}>
      <div className="h-full rounded-full bg-ok transition-[width] duration-500" style={{ width: `${v}%` }} />
    </div>
  );
}

export function DoneToggle({ done, onChange, label = 'Đánh dấu đã học', doneLabel = 'Đã học' }: { done: boolean; onChange: (v: boolean) => void; label?: string; doneLabel?: string }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!done)}
      aria-pressed={done}
      className={`inline-flex min-h-[40px] items-center gap-2 rounded-xl border px-3 text-sm font-semibold transition ${
        done ? 'border-ok bg-ok text-white dark:text-navy' : 'border-line bg-card hover:border-ok hover:text-ok'
      }`}
    >
      <span className={`grid h-5 w-5 place-items-center rounded-full border-2 ${done ? 'border-white bg-white/20 dark:border-navy' : 'border-current'}`}>{done && <Check size={13} strokeWidth={3} />}</span>
      {done ? doneLabel : label}
    </button>
  );
}

export function PageHeader({ title, desc, children }: { title: string; desc?: ReactNode; children?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div className="min-w-0">
        <h1 className="border-l-4 border-brand pl-3 text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h1>
        {desc && <p className="mt-2 pl-4 text-muted">{desc}</p>}
      </div>
      {children}
    </div>
  );
}

export function Toast({ message, onDone }: { message: string | null; onDone: () => void }) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [message, onDone]);
  return (
    <div aria-live="polite" className="pointer-events-none fixed bottom-20 left-1/2 z-50 -translate-x-1/2 lg:bottom-6">
      {message && <div className="rounded-xl bg-ink px-4 py-2 text-sm font-medium text-paper shadow-lg">{message}</div>}
    </div>
  );
}

let toastSetter: ((m: string) => void) | null = null;
export function toast(m: string) {
  toastSetter?.(m);
}
export function ToastHost() {
  const [m, setM] = useState<string | null>(null);
  useEffect(() => {
    toastSetter = setM;
    return () => {
      toastSetter = null;
    };
  }, []);
  return <Toast message={m} onDone={() => setM(null)} />;
}

export async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    toast('Đã sao chép');
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    toast('Đã sao chép');
  }
}

export function EmptyState({ icon, title, children }: { icon: ReactNode; title: string; children?: ReactNode }) {
  return (
    <div className="card flex flex-col items-center gap-2 p-10 text-center">
      <div className="text-muted">{icon}</div>
      <p className="font-semibold">{title}</p>
      {children && <div className="text-sm text-muted">{children}</div>}
    </div>
  );
}
