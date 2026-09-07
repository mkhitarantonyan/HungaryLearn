export interface LessonResumePosition {
  lessonNumber: number;
  slideId: number;
  updatedAt: number;
}

export type LessonResumePositions = Record<string, LessonResumePosition>;

const MAX_LESSON_NUMBER = 28;
const MAX_SLIDE_ID = 100;
const ALLOWED_POSITION_KEYS = new Set(['lessonNumber', 'slideId', 'updatedAt']);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function parseLessonResumePosition(value: unknown): LessonResumePosition | null {
  if (!isRecord(value) || Object.keys(value).some((key) => !ALLOWED_POSITION_KEYS.has(key))) return null;

  const lessonNumber = value.lessonNumber;
  const slideId = value.slideId;
  const updatedAt = value.updatedAt;
  if (
    !Number.isInteger(lessonNumber) || Number(lessonNumber) < 1 || Number(lessonNumber) > MAX_LESSON_NUMBER
    || !Number.isInteger(slideId) || Number(slideId) < 1 || Number(slideId) > MAX_SLIDE_ID
    || !Number.isSafeInteger(updatedAt) || Number(updatedAt) < 1
  ) {
    return null;
  }

  return {
    lessonNumber: Number(lessonNumber),
    slideId: Number(slideId),
    updatedAt: Number(updatedAt),
  };
}

/** Strict parser for client payloads. Any malformed or mismatched entry rejects the whole map. */
export function parseLessonResumePositions(value: unknown): LessonResumePositions | null {
  if (!isRecord(value)) return null;
  const entries = Object.entries(value);
  if (entries.length > MAX_LESSON_NUMBER) return null;

  const parsed: LessonResumePositions = {};
  for (const [key, candidate] of entries) {
    const position = parseLessonResumePosition(candidate);
    if (!position || key !== String(position.lessonNumber)) return null;
    parsed[key] = position;
  }
  return parsed;
}

/** Lenient parser for old local caches and stored Firestore documents. */
export function sanitizeLessonResumePositions(value: unknown): LessonResumePositions {
  if (!isRecord(value)) return {};
  const sanitized: LessonResumePositions = {};
  for (const [key, candidate] of Object.entries(value)) {
    const position = parseLessonResumePosition(candidate);
    if (position && key === String(position.lessonNumber)) sanitized[key] = position;
  }
  return sanitized;
}

/** Per-lesson last-write-wins merge used during cache and server hydration. */
export function mergeLessonResumePositions(...sources: unknown[]): LessonResumePositions {
  const merged: LessonResumePositions = {};
  for (const source of sources) {
    for (const [key, position] of Object.entries(sanitizeLessonResumePositions(source))) {
      if (!merged[key] || position.updatedAt >= merged[key].updatedAt) merged[key] = position;
    }
  }
  return merged;
}

export function getLessonResumeSlideIndex(
  lessonNumber: number,
  slides: ReadonlyArray<{ id: number }>,
  positions: LessonResumePositions,
): number {
  const slideId = positions[String(lessonNumber)]?.slideId;
  if (!slideId) return 0;
  const index = slides.findIndex((slide) => slide.id === slideId);
  return index >= 0 ? index : 0;
}
