import { createContext, useContext, useState, type ReactNode } from 'react';
import { NoteDialog, type NoteDraft } from './NoteDialog';

const Ctx = createContext<(d: NoteDraft) => void>(() => {});

export function NoteProvider({ children }: { children: ReactNode }) {
  const [draft, setDraft] = useState<NoteDraft | null>(null);
  return (
    <Ctx.Provider value={setDraft}>
      {children}
      <NoteDialog draft={draft} onClose={() => setDraft(null)} />
    </Ctx.Provider>
  );
}

export const useOpenNote = () => useContext(Ctx);
