import type { Unit } from '../types';
import { u1, u2, u3, u4 } from './u1-4';
import { u5, u6, u7, u8 } from './u5-8';

export const units: Unit[] = [u1, u2, u3, u4, u5, u6, u7, u8];
export const unitById = (id: string) => units.find((u) => u.id === id);
