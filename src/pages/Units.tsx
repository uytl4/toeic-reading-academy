import { useState } from 'react';
import { units } from '../data/units';
import { useStore } from '../db/store';
import { allUnitStats, unitStats } from '../app/progress';
import { UnitCard } from '../components/UnitCard';
import { PageHeader, ProgressBar } from '../components/ui';

const FILTERS = [
  { id: 'all', label: 'Tất cả' },
  { id: 'todo', label: 'Chưa xong' },
  { id: 'done', label: 'Hoàn thành' }
] as const;

export default function Units() {
  const { isDone } = useStore();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]['id']>('all');
  const [q, setQ] = useState('');
  const s = allUnitStats(isDone);
  const list = units.filter((u) => {
    const st = unitStats(u.id, isDone);
    if (filter === 'done' && st.done < st.total) return false;
    if (filter === 'todo' && st.done === st.total) return false;
    const t = (u.name + ' ' + u.viName + ' ' + u.desc).toLowerCase();
    return !q || t.includes(q.toLowerCase());
  });
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader title="Khám phá 8 chủ đề TOEIC" desc="Từ vựng, word families, collocations và cấu trúc ngữ pháp trong ngữ cảnh công sở của từng Unit.">
        <div className="w-full max-w-xs">
          <p className="mb-1 text-sm text-muted">
            {s.done}/{s.total} mục · {s.pct}%
          </p>
          <ProgressBar value={s.pct} />
        </div>
      </PageHeader>
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <div role="group" aria-label="Lọc theo tiến độ" className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button key={f.id} type="button" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)} className={`chip ${filter === f.id ? 'border-brand bg-brand text-white dark:text-navy' : ''}`}>
              {f.label}
            </button>
          ))}
        </div>
        <label className="sr-only" htmlFor="unit-q">
          Lọc theo chủ đề
        </label>
        <input id="unit-q" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Lọc theo tên chủ đề…" className="ml-auto h-10 w-full rounded-xl border border-line bg-card px-3 sm:w-64" />
      </div>
      {list.length ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((u) => (
            <UnitCard key={u.id} unit={u} />
          ))}
        </div>
      ) : (
        <p className="card p-8 text-center text-muted">Không có Unit nào phù hợp bộ lọc.</p>
      )}
      <p className="mt-6 text-sm text-muted">
        Lưu ý: tên và thứ tự 8 Unit giữ theo danh sách khóa học; nội dung bên trong do ứng dụng tự biên soạn để học tập, không phải bản chép nội dung chính thức của khóa học hay ETS.
      </p>
    </div>
  );
}
