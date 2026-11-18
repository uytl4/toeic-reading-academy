/**
 * Kiểu dữ liệu nội dung. Mọi chuỗi văn bản hỗ trợ markup nội tuyến:
 *   **đậm**   `mã/công thức`   {từ|N} {từ|V} {từ|Adj} {từ|Adv}  (tô màu theo loại từ, có nhãn chữ)
 */
export type WordClass = 'N' | 'V' | 'Adj' | 'Adv';

/** Ví dụ: [tiếng Anh, dịch Việt, phân tích vì sao] */
export type Ex = [en: string, vi: string, why: string];

/** Dòng đoạn văn minh họa: [tiếng Anh, dịch Việt, chú thích ngữ pháp?] */
export type Line = [en: string, vi: string, note?: string];

export type Block =
  | { t: 'p'; text: string }
  | { t: 'formula'; pattern: string; text: string; fid?: string }
  | { t: 'list'; items: string[]; ordered?: boolean }
  | { t: 'table'; head: string[]; rows: string[][]; caption?: string }
  | { t: 'note'; tone?: 'tip' | 'warn'; title?: string; text: string }
  | { t: 'ex'; items: Ex[] }
  | { t: 'passage'; title: string; kind?: string; lines: Line[] };

export interface Section {
  id: string;
  title: string;
  blocks: Block[];
}

export interface Lesson {
  id: string;
  code: string; // "Bài 4"
  order: number;
  title: string;
  short: string; // tên ngắn cho danh sách
  summary: string;
  version: number;
  goals: string[];
  prereq: string[];
  sections: Section[]; // khái niệm + công thức
  signals: string[]; // dấu hiệu nhận biết khi đọc chỗ trống
  examples: Ex[]; // >= 10 ví dụ phân tích
  mistakes: { head: string[]; rows: string[][]; notes?: string[] };
  part5: Ex[];
  part6: Block[];
  part7: Block[];
  keyRules: string[];
  review: string[];
  related: string[]; // id bài liên quan
  formulas: string[]; // id công thức liên quan
}

export interface Vocab {
  w: string;
  ipa?: string;
  pos: WordClass | 'Phrase';
  vi: string;
  ex: string;
  exVi: string;
}

export interface Unit {
  id: string;
  no: number;
  name: string;
  viName: string;
  desc: string;
  version: number;
  theme: { from: string; to: string; accent: string };
  overview: Block[];
  vocab: Vocab[];
  families: { root: string; items: [word: string, pos: string, vi: string][] }[];
  collocations: [en: string, vi: string, ex: string][];
  structures: Block[];
  part5: Ex[];
  part67: Block[];
  related: string[];
  summary: string[];
}

export interface Formula {
  id: string;
  group: string;
  label: string;
  pattern: string;
  explain: string;
  example: string;
  translation: string;
  positions: string; // vị trí loại từ
  exceptions: string;
  tags: string[];
  lessons: string[];
  featured?: boolean;
}

export interface ReadingGuide {
  id: string;
  part: string;
  title: string;
  desc: string;
  version: number;
  sections: Section[];
  related: string[];
}

export interface RoadmapDay {
  day: number;
  title: string;
  focus: string;
  lessons: string[];
  reading?: string[];
  units?: string[];
  tasks: string[];
}

/** Các mục chuẩn của một Unit (dùng để tính tiến độ X/Y). */
export const UNIT_SECTIONS = [
  { id: 'tong-quan', title: 'Tổng quan ngữ cảnh' },
  { id: 'tu-vung', title: 'Từ vựng trọng tâm' },
  { id: 'word-families', title: 'Word families' },
  { id: 'collocations', title: 'Collocations' },
  { id: 'cau-truc', title: 'Cấu trúc thường gặp' },
  { id: 'vi-du-part-5', title: 'Ví dụ Part 5' },
  { id: 'vi-du-part-6-7', title: 'Ví dụ Part 6–7' },
  { id: 'bai-lien-quan', title: 'Các bài ngữ pháp liên quan' },
  { id: 'tom-tat', title: 'Tóm tắt cần nhớ' }
] as const;
