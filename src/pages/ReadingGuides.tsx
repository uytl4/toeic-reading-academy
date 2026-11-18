import { useEffect, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Circle } from 'lucide-react';
import { readingById, readingGuides } from '../data/reading';
import { lessonById } from '../data/grammar';
import { useStore } from '../db/store';
import { readingSecKey, readingStats } from '../app/progress';
import { useScrollToSection } from '../app/hooks';
import { StudySection, SelectionToolbar } from '../components/StudySection';
import { Blocks } from '../components/Blocks';
import { PageHeader, ProgressBar } from '../components/ui';

export function ReadingIndex() {
  const { isDone } = useStore();
  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader title="Reading Part 5–6–7" desc="Chuyên mục cách đọc và áp dụng kiến thức ngữ pháp vào từng Part. Chỉ học lý thuyết, không có bài thi hay chấm điểm." />
      <div className="grid gap-4 md:grid-cols-3">
        {readingGuides.map((g) => {
          const s = readingStats(g.id, isDone);
          return (
            <Link key={g.id} to={`/reading/${g.id}`} className="card flex flex-col gap-2 p-5 transition hover:-translate-y-0.5 hover:border-brand hover:shadow-md">
              <span className="text-3xl font-extrabold text-brand">{g.part}</span>
              <h2 className="font-bold">{g.title.split('–')[0]}</h2>
              <p className="text-[15px] text-muted">{g.desc}</p>
              <div className="mt-auto pt-3">
                <p className="mb-1 text-xs text-muted">
                  {s.done}/{s.total} mục đã đọc
                </p>
                <ProgressBar value={s.pct} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function ReadingDetail() {
  const { id = '' } = useParams();
  const g = readingById(id);
  const store = useStore();
  const ref = useRef<HTMLElement>(null);
  useScrollToSection(id);
  useEffect(() => {
    if (g) store.visit({ path: `/reading/${g.id}`, title: g.title, kind: 'reading' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [g?.id]);
  if (!g) return <Navigate to="/reading" replace />;
  const base = `/reading/${g.id}`;
  const st = readingStats(g.id, store.isDone);

  return (
    <div className="mx-auto max-w-[1200px]">
      <Link to="/reading" className="text-sm font-semibold text-brand hover:underline">
        ← Reading 5–6–7
      </Link>
      <div className="mt-2">
        <PageHeader title={g.title} desc={g.desc}>
          <div className="w-full max-w-xs">
            <p className="mb-1 text-sm text-muted">
              {st.done}/{st.total} mục đã đọc
            </p>
            <ProgressBar value={st.pct} />
          </div>
        </PageHeader>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
        <article ref={ref} className="content min-w-0">
          {g.sections.map((s) => (
            <StudySection
              key={s.id}
              id={s.id}
              title={s.title}
              contentId={`reading:${g.id}#${s.id}`}
              version={g.version}
              link={`${base}?s=${s.id}`}
              pageTitle={g.part}
              bookmarkKind="reading"
              doneKey={readingSecKey(g.id, s.id)}
            >
              <Blocks blocks={s.blocks} />
            </StudySection>
          ))}
        </article>
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <nav aria-label="Mục lục">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted">Mục lục</p>
              <ul className="space-y-1">
                {g.sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${base}?s=${s.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-line/50"
                    >
                      {store.isDone(readingSecKey(g.id, s.id)) ? <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-ok" /> : <Circle size={16} className="mt-0.5 shrink-0 text-line" />}
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted">Bài ngữ pháp liên quan</p>
              <ul className="space-y-1">
                {g.related.map((rid) => {
                  const l = lessonById(rid);
                  return l ? (
                    <li key={rid}>
                      <Link to={`/ngu-phap/${rid}`} className="flex items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-line/50">
                        {l.code}: {l.short} <ArrowRight size={14} />
                      </Link>
                    </li>
                  ) : null;
                })}
              </ul>
            </div>
          </div>
        </aside>
      </div>
      <SelectionToolbar root={ref} />
    </div>
  );
}
