import type { Lesson } from '../types';
import { bai4, bai5, bai6 } from './l04-06';
import { bai7, bai8, bai81 } from './l07-08';
import { bai9, bai10, bai11 } from './l09-11';
import { bai12, bai13, bai14 } from './l12-14';
import { bai15, bai16, bai17 } from './l15-17';

export const lessons: Lesson[] = [bai4, bai5, bai6, bai7, bai8, bai81, bai9, bai10, bai11, bai12, bai13, bai14, bai15, bai16, bai17].sort(
  (a, b) => a.order - b.order
);

export const lessonById = (id: string) => lessons.find((l) => l.id === id);
