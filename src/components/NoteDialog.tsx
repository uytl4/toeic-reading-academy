import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useStore } from '../db/store';
import type { Note } from '../db/db';

export interface NoteDraft {
  id?: string;
  contentId: string;
  contentVersion: number;
  kind?: Note['kind'];
  quote?: string;
  text?: string;
  title: string;
  link: string;
}

export function NoteDialog({ draft, onClose }: { draft: NoteDraft | null; onClose: () => void }) {
  const { saveNote } = useStore();
  const [text, setText] = useState('');
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (draft) {
      setText(draft.text || '');
      if (!d.open) d.showModal();
    } else if (d.open) d.close();
  }, [draft]);

  const submit = () => {
    if (!draft) return;
    saveNote({
      id: draft.id,
      contentId: draft.contentId,
      contentVersion: draft.contentVersion,
      kind: draft.kind || 'note',
      quote: draft.quote,
      text: text.trim(),
      title: draft.title,
      link: draft.link
    });
    onClose();
  };

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onCancel={onClose}
      className="w-[min(560px,calc(100vw-32px))] rounded-2xl border border-line bg-card p-0 text-ink shadow-2xl backdrop:bg-black/40"
      aria-labelledby="note-title"
    >
      {draft && (
        <form
          method="dialog"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
          className="p-5"
        >
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <h2 id="note-title" className="text-lg font-bold">
                {draft.id ? 'Sửa ghi chú' : 'Thêm ghi chú'}
              </h2>
              <p className="text-sm text-muted">{draft.title}</p>
            </div>
            <button type="button" className="rounded-lg p-2 hover:bg-line/50" onClick={onClose} aria-label="Đóng">
              <X size={18} />
            </button>
          </div>
          {draft.quote && (
            <blockquote className="mb-3 rounded-xl border-l-4 border-yellow-400 bg-yellow-400/10 px-3 py-2 text-sm">“{draft.quote}”</blockquote>
          )}
          <label className="mb-1 block text-sm font-semibold" htmlFor="note-text">
            Nội dung ghi chú
          </label>
          <textarea
            id="note-text"
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={5}
            className="w-full rounded-xl border border-line bg-paper p-3 text-base outline-none focus:border-brand"
            placeholder="Viết điều bạn muốn nhớ, ví dụ tự đặt, mẹo riêng…"
          />
          <div className="mt-4 flex justify-end gap-2">
            <button type="button" className="btn" onClick={onClose}>
              Hủy
            </button>
            <button type="submit" className="btn-primary">
              Lưu ghi chú
            </button>
          </div>
        </form>
      )}
    </dialog>
  );
}
