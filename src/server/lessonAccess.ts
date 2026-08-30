import type { Lesson } from '../types';

export interface TrustedLessonAccess { paidAccess: boolean }

export type LessonAccessDecision =
  | { status: 400; message: string }
  | { status: 401; message: string }
  | { status: 403; message: string }
  | { status: 200; lessonNumber: number };

export function parseLessonNumber(value: string): number | null {
  if (!/^(?:[1-9]|1\d|2[0-8])$/.test(value)) return null;
  const lessonNumber = Number(value);
  return Number.isInteger(lessonNumber) ? lessonNumber : null;
}

export function resolveLessonAccess(
  rawLessonNumber: string,
  user: TrustedLessonAccess | null
): LessonAccessDecision {
  const lessonNumber = parseLessonNumber(rawLessonNumber);
  if (lessonNumber === null) {
    return { status: 400, message: 'Некорректный номер урока' };
  }

  if (lessonNumber <= 2) return { status: 200, lessonNumber };
  if (!user) return { status: 401, message: 'Требуется авторизация' };
  if (user.paidAccess !== true) {
    return { status: 403, message: 'Для этого урока требуется действующая подписка' };
  }

  return { status: 200, lessonNumber };
}

export interface LessonRequestResult {
  status: 200 | 400 | 401 | 403 | 404 | 500;
  body: {
    success: boolean;
    lesson?: Lesson;
    message?: string;
  };
}

export async function resolveLessonRequest(
  rawLessonNumber: string,
  user: TrustedLessonAccess | null,
  loadLesson: (lessonNumber: number) => Promise<Lesson | null>
): Promise<LessonRequestResult> {
  const access = resolveLessonAccess(rawLessonNumber, user);
  if (access.status !== 200) {
    return {
      status: access.status,
      body: { success: false, message: access.message },
    };
  }

  try {
    const lesson = await loadLesson(access.lessonNumber);
    if (!lesson) {
      return { status: 404, body: { success: false, message: 'Урок не найден' } };
    }
    return { status: 200, body: { success: true, lesson } };
  } catch {
    return { status: 500, body: { success: false, message: 'Не удалось загрузить урок' } };
  }
}
