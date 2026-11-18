import { Link } from 'react-router-dom';
import { CheckCircle2, Circle } from 'lucide-react';
import { lessons } from '../data/grammar';
import { useStore } from '../db/store';
import { lessonKey, lessonStats } from '../app/progress';
import { PageHeader, ProgressBar } from '../components/ui';
import { WordClassLegend } from '../components/Rich';

export default function Lessons() {
  const { isDone, visited } = useStore();
  const s = lessonStats(isDone);
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader title="Ngữ pháp TOEIC Reading" desc="15 chủ điểm (Bài 4–17 và Bài 8.1), mỗi bài có công thức, dấu hiệu nhận biết, ví dụ phân tích và ứng dụng Part 5–6–7.">
        <div className="w-full max-w-xs">
          <p className="mb-1 text-sm text-muted">
            Đã học {s.done}/{s.total} bài · {s.pct}%
          </p>
          <ProgressBar value={s.pct} />
        </div>
      </PageHeader>
      <div className="mb-5">
        <WordClassLegend />
      </div>
      <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {lessons.map((l, i) => {
          const done = isDone(lessonKey(l.id));
          return (
            <li key={l.id}>
              <Link to={`/ngu-phap/${l.id}`} className="card flex h-full flex-col gap-2 p-5 transition hover:-translate-y-0.5 hover:border-brand hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-brand">
                    #{i + 1} · {l.code}
                  </span>
                  {done ? (
                    <span className="flex items-center gap-1 text-sm font-semibold text-ok">
                      <CheckCircle2 size={18} /> Đã học
                    </span>
                  ) : visited.includes(l.id) ? (
                    <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">Đang học</span>
                  ) : (
                    <Circle size={18} className="text-line" />
                  )}
                </div>
                <h2 className="text-lg font-bold leading-snug">{l.title}</h2>
                <p className="text-[15px] text-muted">{l.summary}</p>
                <p className="mt-auto pt-2 text-xs text-muted">
                  {l.examples.length + l.part5.length} ví dụ · {l.formulas.length} công thức liên kết
                </p>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
