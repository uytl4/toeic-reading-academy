import { useEffect, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Bookmark, BookmarkCheck, CheckCircle2, Circle } from 'lucide-react';
import { unitById, units } from '../data/units';
import { lessonById } from '../data/grammar';
import { UNIT_SECTIONS } from '../data/types';
import { useStore } from '../db/store';
import { unitSecKey, unitStats } from '../app/progress';
import { useScrollToSection } from '../app/hooks';
import { UnitCover } from '../components/UnitCard';
import { StudySection, SelectionToolbar } from '../components/StudySection';
import { Blocks, ExampleList } from '../components/Blocks';
import { Rich, WordClassLegend } from '../components/Rich';
import { ProgressBar, toast } from '../components/ui';

const POS_CLASS: Record<string, string> = { N: 'wc-N', V: 'wc-V', Adj: 'wc-Adj', Adv: 'wc-Adv' };

export default function UnitDetail() {
  const { id = '' } = useParams();
  const unit = unitById(id);
  const store = useStore();
  const ref = useRef<HTMLElement>(null);
  useScrollToSection(id);

  useEffect(() => {
    if (unit) store.visit({ path: `/units/${unit.id}`, title: `Unit ${unit.no}: ${unit.name}`, kind: 'unit' }, unit.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unit?.id]);

  if (!unit) return <Navigate to="/units" replace />;
  const st = unitStats(unit.id, store.isDone);
  const base = `/units/${unit.id}`;
  const pageTitle = `Unit ${unit.no}: ${unit.name}`;
  const idx = units.findIndex((u) => u.id === unit.id);
  const prev = units[idx - 1];
  const next = units[idx + 1];

  const sec = (sid: (typeof UNIT_SECTIONS)[number]['id'], children: React.ReactNode) => {
    const title = UNIT_SECTIONS.find((s) => s.id === sid)!.title;
    return (
      <StudySection id={sid} title={title} contentId={`unit:${unit.id}#${sid}`} version={unit.version} link={`${base}?s=${sid}`} pageTitle={pageTitle} doneKey={unitSecKey(unit.id, sid)}>
        {children}
      </StudySection>
    );
  };

  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="card mb-6 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,320px)_1fr]">
          <UnitCover unit={unit} className="aspect-[16/9] md:aspect-auto md:h-full" />
          <div className="p-6">
            <Link to="/units" className="text-sm font-semibold text-brand hover:underline">
              ← 8 Units
            </Link>
            <p className="mt-2 text-sm font-bold text-brand">UNIT {String(unit.no).padStart(2, '0')}</p>
            <h1 className="text-3xl font-extrabold tracking-tight">{unit.name}</h1>
            <p className="text-muted">
              {unit.viName} · {unit.desc}
            </p>
            <div className="mt-4 max-w-md">
              <div className="mb-1 flex justify-between text-sm text-muted">
                <span>
                  {st.done}/{st.total} mục đã học
                </span>
                <span className="font-semibold">{st.pct}%</span>
              </div>
              <ProgressBar value={st.pct} label="Tiến độ Unit" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_240px]">
        <article ref={ref} className="content min-w-0">
          <WordClassLegend />
          {sec('tong-quan', <Blocks blocks={unit.overview} />)}

          {sec(
            'tu-vung',
            <ul className="grid gap-3 md:grid-cols-2">
              {unit.vocab.map((v) => {
                const bid = `vocab:${unit.id}:${v.w}`;
                const saved = store.isBookmarked(bid);
                return (
                  <li key={v.w} className="rounded-2xl border border-line bg-card p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-lg font-bold" lang="en">
                          {v.w} {v.ipa && <span className="text-sm font-normal text-muted">{v.ipa}</span>}
                        </p>
                        <p>
                          <span className={`wc ${POS_CLASS[v.pos] || ''} mr-1 text-xs`}>{v.pos}</span> {v.vi}
                        </p>
                      </div>
                      <button
                        type="button"
                        aria-pressed={saved}
                        aria-label={saved ? `Bỏ lưu từ ${v.w}` : `Lưu từ ${v.w} vào sổ tay`}
                        className="rounded-lg p-1.5 text-muted hover:text-brand"
                        onClick={() => {
                          store.toggleBookmark({ id: bid, kind: 'vocab', refId: `${unit.id}:${v.w}`, title: v.w, subtitle: `${v.vi} · Unit ${unit.no}`, link: `${base}?s=tu-vung` });
                          toast(saved ? 'Đã bỏ lưu từ' : 'Đã lưu từ vào sổ tay');
                        }}
                      >
                        {saved ? <BookmarkCheck size={18} className="text-brand" /> : <Bookmark size={18} />}
                      </button>
                    </div>
                    <p className="mt-2 text-[0.93em]" lang="en">
                      {v.ex}
                    </p>
                    <p className="text-[0.93em] text-muted">{v.exVi}</p>
                  </li>
                );
              })}
            </ul>
          )}

          {sec(
            'word-families',
            <div className="grid gap-3 md:grid-cols-2">
              {unit.families.map((f) => (
                <div key={f.root} className="rounded-2xl border border-line bg-card p-4">
                  <p className="mb-2 font-bold">Gốc: {f.root}</p>
                  <ul className="space-y-1">
                    {f.items.map(([w, pos, vi]) => (
                      <li key={w} className="flex flex-wrap items-baseline gap-2">
                        <span className="font-semibold" lang="en">
                          {w}
                        </span>
                        <span className={`wc ${POS_CLASS[pos] || ''} text-xs`}>{pos}</span>
                        <span className="text-muted">{vi}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {sec(
            'collocations',
            <ul className="space-y-2">
              {unit.collocations.map(([en, vi, ex]) => (
                <li key={en} className="rounded-xl border border-line bg-card p-3">
                  <p>
                    <span className="font-bold" lang="en">
                      {en}
                    </span>{' '}
                    <span className="text-muted">– {vi}</span>
                  </p>
                  <p className="text-[0.93em]" lang="en">
                    {ex}
                  </p>
                </li>
              ))}
            </ul>
          )}

          {sec('cau-truc', <Blocks blocks={unit.structures} />)}
          {sec(
            'vi-du-part-5',
            <>
              <p className="text-muted">Câu hoàn chỉnh có giải thích – không phải câu trắc nghiệm.</p>
              <ExampleList items={unit.part5} />
            </>
          )}
          {sec(
            'vi-du-part-6-7',
            <>
              <p className="text-muted">Đoạn văn tự biên soạn, có chú thích ngữ pháp và bản dịch.</p>
              <Blocks blocks={unit.part67} />
            </>
          )}
          {sec(
            'bai-lien-quan',
            <div className="grid gap-2 sm:grid-cols-2">
              {unit.related.map((rid) => {
                const l = lessonById(rid);
                return l ? (
                  <Link key={rid} to={`/ngu-phap/${rid}`} className="flex items-center justify-between gap-2 rounded-xl border border-line bg-card p-3 hover:border-brand">
                    <span>
                      <span className="block text-sm text-brand">{l.code}</span>
                      <span className="font-semibold">{l.title}</span>
                    </span>
                    <ArrowRight size={18} className="shrink-0 text-muted" />
                  </Link>
                ) : null;
              })}
            </div>
          )}
          {sec(
            'tom-tat',
            <ul className="list-disc space-y-1.5 pl-6">
              {unit.summary.map((s) => (
                <li key={s}>
                  <Rich text={s} />
                </li>
              ))}
            </ul>
          )}

          <div className="no-print mt-8 flex flex-col gap-3 sm:flex-row">
            {prev ? (
              <Link to={`/units/${prev.id}`} className="card flex flex-1 items-center gap-3 p-4 hover:border-brand">
                <ArrowLeft />
                <span>
                  <span className="block text-sm text-muted">Unit trước</span>
                  <span className="font-bold">
                    {prev.no}. {prev.name}
                  </span>
                </span>
              </Link>
            ) : (
              <span className="flex-1" />
            )}
            {next && (
              <Link to={`/units/${next.id}`} className="card flex flex-1 items-center justify-end gap-3 p-4 text-right hover:border-brand">
                <span>
                  <span className="block text-sm text-muted">Unit tiếp theo</span>
                  <span className="font-bold">
                    {next.no}. {next.name}
                  </span>
                </span>
                <ArrowRight />
              </Link>
            )}
          </div>
        </article>

        <aside className="hidden lg:block">
          <nav aria-label="Các mục của Unit" className="sticky top-24">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted">Các mục ({st.done}/{st.total})</p>
            <ul className="space-y-1">
              {UNIT_SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${base}?s=${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-line/50"
                  >
                    {store.isDone(unitSecKey(unit.id, s.id)) ? <CheckCircle2 size={16} className="text-ok" /> : <Circle size={16} className="text-line" />}
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
      <SelectionToolbar root={ref} />
    </div>
  );
}
