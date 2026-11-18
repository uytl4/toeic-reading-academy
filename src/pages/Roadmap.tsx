import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, FileText, Grid2x2 } from 'lucide-react';
import { roadmap, readingById } from '../data/reading';
import { lessonById } from '../data/grammar';
import { unitById } from '../data/units';
import { useStore } from '../db/store';
import { dayKey, lessonKey, lessonStats, roadmapStats, allUnitStats } from '../app/progress';
import { DoneToggle, PageHeader, ProgressBar } from '../components/ui';

export default function Roadmap() {
  const { isDone, setDone } = useStore();
  const rs = roadmapStats(isDone);
  const ls = lessonStats(isDone);
  const us = allUnitStats(isDone);

  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader title="Lộ trình 14 ngày" desc="Gợi ý thứ tự học – không khóa bài theo ngày, bạn có thể học tự do. Tiến độ tính theo mục bạn tự xác nhận đã đọc." />

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {[
          { label: 'Ngày đã hoàn thành', v: `${rs.done}/14`, pct: rs.pct },
          { label: 'Bài ngữ pháp đã học', v: `${ls.done}/${ls.total}`, pct: ls.pct },
          { label: 'Mục Unit đã học', v: `${us.done}/${us.total}`, pct: us.pct }
        ].map((s) => (
          <div key={s.label} className="card p-4">
            <p className="text-sm text-muted">{s.label}</p>
            <p className="my-1 text-2xl font-extrabold">{s.v}</p>
            <ProgressBar value={s.pct} label={s.label} />
          </div>
        ))}
      </div>

      <ol className="relative space-y-4 border-l-2 border-line pl-6 sm:pl-8">
        {roadmap.map((d) => {
          const done = isDone(dayKey(d.day));
          const current = d.day === rs.current && !done;
          return (
            <li key={d.day} className="relative">
              <span
                className={`absolute -left-[39px] top-4 grid h-8 w-8 place-items-center rounded-full border-2 text-sm font-bold sm:-left-[47px] ${
                  done ? 'border-ok bg-ok text-white dark:text-navy' : current ? 'border-brand bg-card text-brand' : 'border-line bg-card text-muted'
                }`}
                aria-hidden
              >
                {done ? <CheckCircle2 size={18} /> : d.day}
              </span>
              <div className={`card p-5 ${current ? 'border-brand shadow-md' : ''}`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-brand">
                      Ngày {d.day} · {d.focus} {current && <span className="ml-1 rounded-full bg-brand/10 px-2 py-0.5 text-xs">Hôm nay</span>}
                    </p>
                    <h2 className="text-lg font-bold">{d.title}</h2>
                  </div>
                  <DoneToggle done={done} onChange={(v) => setDone(dayKey(d.day), v)} label="Hoàn thành ngày" doneLabel="Đã hoàn thành" />
                </div>
                <ul className="mt-3 list-disc space-y-0.5 pl-5 text-[15px]">
                  {d.tasks.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {d.lessons.map((id) => {
                    const l = lessonById(id)!;
                    const ld = isDone(lessonKey(id));
                    return (
                      <Link key={id} to={`/ngu-phap/${id}`} className={`chip hover:border-brand ${ld ? 'border-ok/50 text-ok' : ''}`}>
                        {ld ? <CheckCircle2 size={14} /> : <BookOpen size={14} />} {l.code}: {l.short}
                      </Link>
                    );
                  })}
                  {d.reading?.map((id) => (
                    <Link key={id} to={`/reading/${id}`} className="chip hover:border-brand">
                      <FileText size={14} /> {readingById(id)!.part}
                    </Link>
                  ))}
                  {d.units?.map((id) => (
                    <Link key={id} to={`/units/${id}`} className="chip hover:border-brand">
                      <Grid2x2 size={14} /> Unit {unitById(id)!.no}
                    </Link>
                  ))}
                  {d.day === 8 && (
                    <Link to="/cong-thuc" className="chip hover:border-brand">
                      Thư viện công thức
                    </Link>
                  )}
                  {d.day === 14 && (
                    <Link to="/so-tay" className="chip hover:border-brand">
                      Sổ tay
                    </Link>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
