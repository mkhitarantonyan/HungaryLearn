import { LESSONS_META } from '../data/lessons';

/* ------------------------------------------------------------------ */
/*  Admin domain models (independent from the lesson player models)    */
/* ------------------------------------------------------------------ */

export type AdminRole = 'student' | 'admin' | 'editor';
export type AdminUserStatus = 'active' | 'blocked';
export type AdminLessonStatus = 'published' | 'draft';
export type LessonLevel = 'A0' | 'A1' | 'A2' | 'B1';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
  status: AdminUserStatus;
  registeredAt: string; // ISO date
  subscription: 'trial' | 'active' | 'none';
}

export interface AdminLesson {
  id: string;
  title: string;
  level: LessonLevel;
  module: string;
  status: AdminLessonStatus;
  slidesCount: number;
  description: string;
  videoUrl?: string;
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
}

export const LEVEL_MODULES: Record<LessonLevel, string> = {
  A0: 'Фонетика и основы',
  A1: 'Падежи и грамматика',
  A2: 'Будущее время и быт',
  B1: 'Разговорный уровень',
};

const DAY_MS = 24 * 60 * 60 * 1000;
const daysAgo = (n: number): string => new Date(Date.now() - n * DAY_MS).toISOString();

/* ------------------------------------------------------------------ */
/*  Mock data (simulated database)                                     */
/* ------------------------------------------------------------------ */

export const initialUsers: AdminUser[] = [
  { id: 'u-001', name: 'Анна Ковач', email: 'anna.kovacs@example.com', role: 'student', status: 'active', registeredAt: daysAgo(2), subscription: 'trial' },
  { id: 'u-002', name: 'Дмитрий Соколов', email: 'dmitry.sokolov@example.com', role: 'student', status: 'active', registeredAt: daysAgo(5), subscription: 'active' },
  { id: 'u-003', name: 'Мария Павлова', email: 'maria.pavlova@example.com', role: 'editor', status: 'active', registeredAt: daysAgo(12), subscription: 'active' },
  { id: 'u-004', name: 'Иван Петров', email: 'ivan.petrov@example.com', role: 'student', status: 'active', registeredAt: daysAgo(21), subscription: 'none' },
  { id: 'u-005', name: 'Ольга Надь', email: 'olga.nagy@example.com', role: 'student', status: 'blocked', registeredAt: daysAgo(34), subscription: 'none' },
  { id: 'u-006', name: 'Сергей Волков', email: 'sergey.volkov@example.com', role: 'student', status: 'active', registeredAt: daysAgo(48), subscription: 'active' },
  { id: 'u-007', name: 'Елена Киш', email: 'elena.kiss@example.com', role: 'student', status: 'active', registeredAt: daysAgo(63), subscription: 'trial' },
  { id: 'u-008', name: 'Алексей Медведев', email: 'alexey.medvedev@example.com', role: 'student', status: 'active', registeredAt: daysAgo(90), subscription: 'active' },
  { id: 'u-009', name: 'Наталья Фаркаш', email: 'natalia.farkas@example.com', role: 'editor', status: 'active', registeredAt: daysAgo(120), subscription: 'none' },
  { id: 'u-010', name: 'Пётр Сабо', email: 'peter.szabo@example.com', role: 'admin', status: 'active', registeredAt: daysAgo(180), subscription: 'active' },
];

export const initialLessons: AdminLesson[] = LESSONS_META.map((meta, idx) => ({
  id: `lesson-${meta.id}`,
  title: meta.title,
  level: meta.level,
  module: LEVEL_MODULES[meta.level],
  status: idx < 24 ? 'published' : 'draft',
  slidesCount: meta.slidesCount,
  description: meta.description,
  videoUrl: undefined,
  createdAt: daysAgo(230 - idx * 7),
  updatedAt: daysAgo(idx * 3),
}));
