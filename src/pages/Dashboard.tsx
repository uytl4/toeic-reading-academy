import { Link } from 'react-router-dom';
import { ArrowRight, Bookmark, BookOpen, CalendarCheck, CheckCircle2, Circle, Flag, PlayCircle, Tag, Zap } from 'lucide-react';
import { lessons } from '../data/grammar';
import { units } from '../data/units';
import { formulas } from '../data/formulas';
import { roadmap } from '../data/reading';
import { useStore } from '../db/store';
import { lessonKey, lessonStats, roadmapStats } from '../app/progress';
import { UnitCard } from '../components/UnitCard';
import { ProgressBar } from '../components/ui';

const CHIP_COLORS = [
  'bg-violet-500/10 text-violet-700 dark:text-violet-300',
  'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  'bg-sky-500/10 text-sky-700 dark:text-sky-300',
  'bg-orange-500/10 text-orange-700 dark:text-orange-300',
  'bg-pink-500/10 text-pink-700 dark:text-pink-300',
  'bg-teal-500/10 text-teal-700 dark:text-teal-300'
];

function StatCard({ icon, label, value, unit, pct, tone }: { icon: React.ReactNode; label: string; value: string | number; unit: string; pct?: number; tone: string }) {
  return (
    <div className="card flex gap-4 p-5 shadow-sm">
      <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${tone}`}>{icon}</span>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-muted">{label}</p>
        <p className="mt-0.5">
          <span className="text-2xl font-extrabold">{value}</span> <span className="text-muted">{unit}</span>
        </p>
        {pct !== undefined && (
          <div className="mt-2 flex items-center gap-2">
            <ProgressBar value={pct} label={label} />
            <span className="text-xs font-semibold text-muted">{pct}%</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { isDone, bookmarks, lastVisited, visited, notes } = useStore();
  const ls = lessonStats(isDone);
  const rs = roadmapStats(isDone);
  const savedFormulas = bookmarks.filter((b) => b.kind === 'formula').length;
  const today = roadmap.find((d) => d.day === rs.current)!;
  const featured = formulas.filter((f) => f.featured);
  const nextLesson = lessons.find((l) => !isDone(lessonKey(l.id)));

  return (
    <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 xl:grid-cols-[1fr_380px]">
      <div className="min-w-0 space-y-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard icon={<BookOpen size={22} />} tone="bg-brand/10 text-brand" label="Bài ngữ pháp đã học" value={ls.done} unit={`/ ${ls.total} bài`} pct={ls.pct} />
          <StatCard icon={<Bookmark size={22} />} tone="bg-violet-500/10 text-violet-600 dark:text-violet-300" label="Công thức đã lưu" value={savedFormulas} unit="công thức" />
          <StatCard icon={<CalendarCheck size={22} />} tone="bg-ok/10 text-ok" label="Tiến độ 14 ngày" value={`Ngày ${rs.current}`} unit="/ 14" pct={rs.pct} />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link to={lastVisited?.path || (nextLesson ? `/ngu-phap/${nextLesson.id}` : '/ngu-phap')} className="card flex items-center gap-4 p-5 transition hover:border-brand">
            <PlayCircle size={40} className="shrink-0 text-brand" />
            <div className="min-w-0">
              <p className="text-sm text-muted">{lastVisited ? 'Học tiếp' : 'Bắt đầu học'}</p>
              <p className="truncate font-bold">{lastVisited?.title || (nextLesson ? `${nextLesson.code}: ${nextLesson.title}` : 'Danh sách bài')}</p>
            </div>
            <ArrowRight className="ml-auto shrink-0 text-muted" />
          </Link>
          <Link to="/lo-trinh" className="card flex items-center gap-4 p-5 transition hover:border-brand">
            <CalendarCheck size={40} className="shrink-0 text-ok" />
            <div className="min-w-0">
              <p className="text-sm text-muted">Lịch hôm nay · Ngày {today.day}</p>
              <p className="truncate font-bold">{today.title}</p>
            </div>
            <ArrowRight className="ml-auto shrink-0 text-muted" />
          </Link>
        </div>

        <section aria-labelledby="units-h">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
            <div className="border-l-4 border-brand pl-3">
              <h1 id="units-h" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                All Units
              </h1>
              <p className="text-muted">Học ngữ pháp TOEIC Reading Part 5–6–7 qua 8 chủ đề</p>
            </div>
            <Link to="/units" className="text-sm font-semibold text-brand hover:underline">
              Xem tất cả →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {units.map((u) => (
              <UnitCard key={u.id} unit={u} />
            ))}
          </div>
        </section>

        {(bookmarks.length > 0 || notes.length > 0) && (
          <section className="card p-5">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-bold">Mục đã lưu gần đây</h2>
              <Link to="/so-tay" className="text-sm font-semibold text-brand hover:underline">
                Mở sổ tay →
              </Link>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {bookmarks.slice(0, 6).map((b) => (
                <li key={b.id}>
                  <Link to={b.link} className="flex items-center gap-2 rounded-xl border border-line px-3 py-2 hover:border-brand">
                    <Bookmark size={15} className="shrink-0 text-brand" />
                    <span className="truncate font-medium">{b.title}</span>
                    {b.subtitle && <span className="truncate text-xs text-muted">· {b.subtitle}</span>}
                  </Link>
                </li>
              ))}
            </ul>
            {notes.length > 0 && <p className="mt-3 text-sm text-muted">Bạn có {notes.length} ghi chú/highlight trong sổ tay.</p>}
          </section>
        )}
      </div>

      <div className="space-y-6">
        <section className="card p-5 shadow-sm" aria-labelledby="road-h">
          <div className="mb-3 flex items-center justify-between">
            <h2 id="road-h" className="flex items-center gap-2 text-lg font-bold">
              <Flag size={20} className="text-brand" /> Lộ trình ngữ pháp
            </h2>
            <span className="text-sm text-muted">{lessons.length} chủ điểm</span>
          </div>
          <ol className="divide-y divide-line">
            {lessons.map((l, i) => {
              const done = isDone(lessonKey(l.id));
              const inProgress = !done && visited.includes(l.id);
              return (
                <li key={l.id}>
                  <Link to={`/ngu-phap/${l.id}`} className="flex items-center gap-3 py-2.5 hover:text-brand">
                    <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold ${done || inProgress ? 'bg-ok text-white dark:text-navy' : 'bg-line text-muted'}`}>{i + 1}</span>
                    <span className="min-w-0 flex-1 truncate text-[15px]">{l.short}</span>
                    <span className="sr-only">{done ? 'đã học' : inProgress ? 'đang học' : 'chưa học'}</span>
                    {done ? (
                      <CheckCircle2 size={20} className="shrink-0 text-ok" />
                    ) : inProgress ? (
                      <span className="h-5 w-5 shrink-0 rounded-full border-[3px] border-ok border-r-transparent" aria-hidden />
                    ) : (
                      <Circle size={20} className="shrink-0 text-line" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="card p-5 shadow-sm" aria-labelledby="ff-h">
          <div className="mb-3 flex items-center justify-between">
            <h2 id="ff-h" className="flex items-center gap-2 text-lg font-bold">
              <Zap size={20} className="text-amber-500" /> Công thức nổi bật
            </h2>
            <Link to="/cong-thuc" className="text-sm font-semibold text-brand hover:underline">
              Xem tất cả →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {featured.map((f, i) => (
              <Link key={f.id} to={`/cong-thuc?f=${f.id}`} className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold ${CHIP_COLORS[i % CHIP_COLORS.length]}`}>
                <Tag size={14} /> {f.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
