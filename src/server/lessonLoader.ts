import type { Lesson } from '../types';

type LessonModule = { default?: Lesson; [key: string]: unknown };

const lessonLoaders: Record<number, () => Promise<LessonModule>> = {
  1: () => import('../data/lessons/lesson1'),
  2: () => import('../data/lessons/lesson2'),
  3: () => import('../data/lessons/lesson3'),
  4: () => import('../data/lessons/lesson4'),
  5: () => import('../data/lessons/lesson5'),
  6: () => import('../data/lessons/lesson6'),
  7: () => import('../data/lessons/lesson7'),
  8: () => import('../data/lessons/lesson8'),
  9: () => import('../data/lessons/lesson9'),
  10: () => import('../data/lessons/lesson10'),
  11: () => import('../data/lessons/lesson11'),
  12: () => import('../data/lessons/lesson12'),
  13: () => import('../data/lessons/lesson13'),
  14: () => import('../data/lessons/lesson14'),
  15: () => import('../data/lessons/lesson15'),
  16: () => import('../data/lessons/lesson16'),
  17: () => import('../data/lessons/lesson17'),
  18: () => import('../data/lessons/lesson18'),
  19: () => import('../data/lessons/lesson19'),
  20: () => import('../data/lessons/lesson20'),
  21: () => import('../data/lessons/lesson21'),
  22: () => import('../data/lessons/lesson22'),
  23: () => import('../data/lessons/lesson23'),
  24: () => import('../data/lessons/lesson24'),
  25: () => import('../data/lessons/lesson25'),
  26: () => import('../data/lessons/lesson26'),
  27: () => import('../data/lessons/lesson27'),
  28: () => import('../data/lessons/lesson28'),
};

export async function loadServerLesson(lessonNumber: number): Promise<Lesson | null> {
  const loader = lessonLoaders[lessonNumber];
  if (!loader) return null;

  const module = await loader();
  const lesson = (module.default || module[`LESSON_${lessonNumber}`]) as Lesson | undefined;
  return lesson ?? null;
}
