import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookmarkCheck, CheckCircle2, List, Minus, Pin, Plus, X } from 'lucide-react';
import { lessonById, lessons } from '../data/grammar';
import { formulaById } from '../data/formulas';
import { useStore } from '../db/store';
import { lessonKey } from '../app/progress';
import { useActiveSection, useReadingProgress, useScrollToSection } from '../app/hooks';
import { StudySection, SelectionToolbar } from '../components/StudySection';
import { Blocks, Callout, DataTable, ExampleList } from '../components/Blocks';
import { Rich, WordClassLegend } from '../components/Rich';
import { DoneToggle, ProgressBar } from '../components/ui';

export default function LessonDetail() {
  const { id = '' } = useParams();
  const lesson = lessonById(id);
  const store = useStore();
  const articleRef = useRef<HTMLElement>(null);
  const [tocOpen, setTocOpen] = useState(false);
  const readPct = useReadingProgress();

  const toc = useMemo(() => {
    if (!lesson) return [];
    return [
      { id: 'muc-tieu', title: 'Mục tiêu' },
      ...lesson.sections.map((s) => ({ id: s.id, title: s.title })),
      { id: 'dau-hieu', title: 'Dấu hiệu nhận biết' },
      { id: 'vi-du', title: `Ví dụ phân tích (${lesson.examples.length})` },
      { id: 'loi-thuong-gap', title: 'Lỗi thường gặp' },
      { id: 'part-5', title: 'Ứng dụng Part 5' },
      { id: 'part-6', title: 'Ứng dụng Part 6' },
      { id: 'part-7', title: 'Ứng dụng Part 7' },
      { id: 'tong-ket', title: 'Tổng kết' },
      { id: 'on-tap', title: 'Gợi ý ôn tập' }
    ];
  }, [lesson]);
  const active = useActiveSection(toc.map((t) => t.id));
  useScrollToSection(id);

  useEffect(() => {
    if (lesson) store.visit({ path: `/ngu-phap/${lesson.id}`, title: `${lesson.code}: ${lesson.title}`, kind: 'lesson' }, lesson.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson?.id]);

  if (!lesson) return <Navigate to="/ngu-phap" replace />;

  const idx = lessons.findIndex((l) => l.id === lesson.id);
  const prev = lessons[idx - 1];
  const next = lessons[idx + 1];
  const done = store.isDone(lessonKey(lesson.id));
  const base = `/ngu-phap/${lesson.id}`;
  const pageTitle = `${lesson.code}: ${lesson.short}`;
  const sec = (sid: string, title: string, children: React.ReactNode) => (
    <StudySection key={sid} id={sid} title={title} contentId={`lesson:${lesson.id}#${sid}`} version={lesson.version} link={`${base}?s=${sid}`} pageTitle={pageTitle}>
      {children}
    </StudySection>
  );
  const pinned = lesson.formulas.map(formulaById).filter(Boolean);
  const fontSize = store.settings.fontSize;

  const Toc = ({ onPick }: { onPick?: () => void }) => (
    <nav aria-label="Mục lục bài học">
      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted">Mục lục</p>
      <ul className="space-y-0.5 border-l border-line">
        {toc.map((t) => (
          <li key={t.id}>
            <a
              href={`#${base}?s=${t.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(t.id)?.scrollIntoView({ behavior: 'smooth' });
                onPick?.();
              }}
              className={`-ml-px block border-l-2 py-1.5 pl-3 text-sm ${active === t.id ? 'border-brand font-semibold text-brand' : 'border-transparent text-muted hover:text-ink'}`}
            >
              {t.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <div className="mx-auto max-w-[1400px]">
      <div className="sticky top-16 z-20 -mx-4 mb-4 bg-paper/95 px-4 py-2 backdrop-blur lg:-mx-8 lg:px-8">
        <div className="flex items-center gap-3">
          <ProgressBar value={readPct} label="Tiến độ đọc bài" />
          <span className="w-10 shrink-0 text-right text-xs font-semibold text-muted">{readPct}%</span>
          <button type="button" className="btn min-h-[34px] px-2 xl:hidden" onClick={() => setTocOpen(true)} aria-label="Mở mục lục">
            <List size={16} /> <span className="hidden sm:inline">Mục lục</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[220px_minmax(0,1fr)_260px]">
        {/* Danh sách bài */}
        <aside className="hidden xl:block">
          <div className="sticky top-32 max-h-[calc(100vh-9rem)] overflow-y-auto pr-1 scrollbar-thin">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted">Danh sách bài</p>
            <ul className="space-y-0.5">
              {lessons.map((l) => (
                <li key={l.id}>
                  <Link
                    to={`/ngu-phap/${l.id}`}
                    className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm ${l.id === lesson.id ? 'bg-brand/10 font-semibold text-brand' : 'hover:bg-line/50'}`}
                  >
                    {store.isDone(lessonKey(l.id)) ? <CheckCircle2 size={15} className="shrink-0 text-ok" /> : <span className="w-[15px] shrink-0 text-center text-xs text-muted">•</span>}
                    <span className="truncate">
                      {l.code} {l.short}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Nội dung */}
        <article ref={articleRef} className="content min-w-0">
          <header className="mb-2">
            <p className="text-sm font-bold text-brand">{lesson.code}</p>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{lesson.title}</h1>
            <p className="mt-2 text-muted">{lesson.summary}</p>
            <div className="no-print mt-4 flex flex-wrap items-center gap-2">
              <DoneToggle done={done} onChange={(v) => store.setDone(lessonKey(lesson.id), v)} doneLabel="Đã học bài này" />
              <div className="flex items-center rounded-xl border border-line bg-card" role="group" aria-label="Cỡ chữ">
                <button type="button" className="p-2.5" aria-label="Giảm cỡ chữ" disabled={fontSize <= 15} onClick={() => store.updateSettings({ fontSize: fontSize - 1 })}>
                  <Minus size={16} />
                </button>
                <span className="px-1 text-sm font-semibold" aria-live="polite">
                  {fontSize}px
                </span>
                <button type="button" className="p-2.5" aria-label="Tăng cỡ chữ" disabled={fontSize >= 22} onClick={() => store.updateSettings({ fontSize: fontSize + 1 })}>
                  <Plus size={16} />
                </button>
              </div>
            </div>
            <div className="mt-4">
              <WordClassLegend />
            </div>
            <p className="mt-2 text-sm text-muted">Mẹo: bôi đen một đoạn bất kỳ để Highlight hoặc thêm Ghi chú.</p>
          </header>

          {sec(
            'muc-tieu',
            'Mục tiêu và kiến thức cần biết',
            <>
              <p className="font-semibold">Sau bài này bạn sẽ:</p>
              <ul className="my-2 list-disc space-y-1 pl-6">
                {lesson.goals.map((g) => (
                  <li key={g}>
                    <Rich text={g} />
                  </li>
                ))}
              </ul>
              <p className="mt-3 font-semibold">Cần biết trước:</p>
              <ul className="my-2 list-disc space-y-1 pl-6">
                {lesson.prereq.map((g) => (
                  <li key={g}>
                    <Rich text={g} />
                  </li>
                ))}
              </ul>
            </>
          )}

          {lesson.sections.map((s) => sec(s.id, s.title, <Blocks blocks={s.blocks} />))}

          {sec(
            'dau-hieu',
            'Dấu hiệu nhận biết khi đọc chỗ trống',
            <>
              <ul className="space-y-2">
                {lesson.signals.map((g, i) => (
                  <li key={i} className="flex gap-3 rounded-xl border border-line bg-card p-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ok/15 text-xs font-bold text-ok">{i + 1}</span>
                    <span>
                      <Rich text={g} />
                    </span>
                  </li>
                ))}
              </ul>
              <Callout tone="warn" text="Các dấu hiệu trên là xu hướng thường gặp, **không phải quy tắc tuyệt đối**. Luôn kiểm tra lại nghĩa và cấu trúc cả câu." />
            </>
          )}

          {sec('vi-du', `Ví dụ phân tích (${lesson.examples.length} câu)`, <ExampleList items={lesson.examples} />)}

          {sec(
            'loi-thuong-gap',
            'Lỗi thường gặp và bảng đối chiếu',
            <>
              <DataTable head={lesson.mistakes.head} rows={lesson.mistakes.rows} />
              {lesson.mistakes.notes?.map((n) => <Callout key={n} tone="warn" text={n} />)}
            </>
          )}

          {sec(
            'part-5',
            'Ứng dụng Part 5',
            <>
              <p className="text-muted">Câu hoàn chỉnh minh họa cách kiến thức xuất hiện trong câu đơn Part 5 – không có yêu cầu trả lời.</p>
              <ExampleList items={lesson.part5} />
            </>
          )}
          {sec('part-6', 'Ứng dụng Part 6', <Blocks blocks={lesson.part6} />)}
          {sec('part-7', 'Ứng dụng Part 7', <Blocks blocks={lesson.part7} />)}

          {sec(
            'tong-ket',
            'Tổng kết quy tắc trọng tâm',
            <>
              <ol className="list-decimal space-y-1.5 pl-6">
                {lesson.keyRules.map((r) => (
                  <li key={r}>
                    <Rich text={r} />
                  </li>
                ))}
              </ol>
              <p className="mt-4 font-semibold">Công thức trong thư viện:</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {pinned.map((f) => (
                  <Link key={f!.id} to={`/cong-thuc?f=${f!.id}`} className="chip font-mono hover:border-brand hover:text-brand">
                    {f!.pattern}
                  </Link>
                ))}
              </div>
            </>
          )}

          {sec(
            'on-tap',
            'Gợi ý học lại và ôn tập',
            <>
              <ul className="list-disc space-y-1 pl-6">
                {lesson.review.map((r) => (
                  <li key={r}>
                    <Rich text={r} />
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-semibold">Bài liên quan:</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {lesson.related.map((rid) => {
                  const r = lessonById(rid);
                  return r ? (
                    <Link key={rid} to={`/ngu-phap/${rid}`} className="chip hover:border-brand hover:text-brand">
                      {r.code}: {r.short}
                    </Link>
                  ) : null;
                })}
              </div>
            </>
          )}

          <div className="no-print mt-8 flex flex-col gap-3 sm:flex-row">
            {prev ? (
              <Link to={`/ngu-phap/${prev.id}`} className="card flex flex-1 items-center gap-3 p-4 hover:border-brand">
                <ArrowLeft className="shrink-0" />
                <span className="min-w-0">
                  <span className="block text-sm text-muted">Bài trước</span>
                  <span className="block truncate font-bold">
                    {prev.code}: {prev.short}
                  </span>
                </span>
              </Link>
            ) : (
              <span className="flex-1" />
            )}
            {next ? (
              <Link to={`/ngu-phap/${next.id}`} className="card flex flex-1 items-center justify-end gap-3 p-4 text-right hover:border-brand">
                <span className="min-w-0">
                  <span className="block text-sm text-muted">Bài tiếp theo</span>
                  <span className="block truncate font-bold">
                    {next.code}: {next.short}
                  </span>
                </span>
                <ArrowRight className="shrink-0" />
              </Link>
            ) : (
              <Link to="/reading" className="card flex flex-1 items-center justify-end gap-3 p-4 text-right hover:border-brand">
                <span>
                  <span className="block text-sm text-muted">Tiếp theo</span>
                  <span className="block font-bold">Reading Part 5–6–7</span>
                </span>
                <ArrowRight />
              </Link>
            )}
          </div>
        </article>

        {/* Mục lục + công thức ghim */}
        <aside className="hidden xl:block">
          <div className="sticky top-32 max-h-[calc(100vh-9rem)] space-y-6 overflow-y-auto pr-1 scrollbar-thin">
            <Toc />
            <div>
              <p className="mb-2 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-muted">
                <Pin size={13} /> Công thức của bài
              </p>
              <ul className="space-y-2">
                {pinned.map((f) => (
                  <li key={f!.id}>
                    <Link to={`/cong-thuc?f=${f!.id}`} className="block rounded-xl border border-line bg-card p-2.5 hover:border-brand">
                      <span className="flex items-start gap-1.5 font-mono text-[13px] font-semibold">
                        {store.isBookmarked(`formula:${f!.id}`) && <BookmarkCheck size={14} className="mt-0.5 shrink-0 text-brand" />}
                        {f!.pattern}
                      </span>
                      <span className="block text-xs text-muted">{f!.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>

      {tocOpen && (
        <div className="fixed inset-0 z-40 xl:hidden" role="dialog" aria-modal="true" aria-label="Mục lục">
          <div className="absolute inset-0 bg-black/40" onClick={() => setTocOpen(false)} />
          <div className="absolute bottom-0 right-0 top-0 w-80 max-w-[88vw] overflow-y-auto bg-card p-5">
            <div className="mb-3 flex justify-end">
              <button type="button" className="rounded-lg p-2 hover:bg-line/50" aria-label="Đóng mục lục" onClick={() => setTocOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <Toc onPick={() => setTocOpen(false)} />
          </div>
        </div>
      )}
      <SelectionToolbar root={articleRef} />
    </div>
  );
}
