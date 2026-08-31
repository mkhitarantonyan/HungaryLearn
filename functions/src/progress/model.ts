import { mergeActivityEvidence as mergeCanonicalActivityEvidence } from '../../../src/utils/progressMerge.ts';

export interface StoredActivityEvidence {
  activityId: string;
  attempted: boolean;
  completed: boolean;
  evidenceMode: 'direct' | 'partial' | 'none';
  passed: boolean;
  score?: number;
  total?: number;
  selfReviewed?: boolean;
}

export interface ProgressState {
  viewedSlides: string[];
  passedQuizzes: number[];
  activityEvidence?: Record<string, StoredActivityEvidence>;
  reviewCards: Record<string, unknown>;
  customNotes?: string;
}

export function sanitizePassedQuizzes(value: unknown): number[] {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter((item): item is number =>
    Number.isInteger(item) && Number(item) >= 1 && Number(item) <= 28
  ))];
}

export function mergeProgressState(
  existing: ProgressState,
  update: {
    viewedSlides?: string[];
    quiz?: { lessonNumber: number; score: number; total: number };
    activityEvidence?: Record<string, StoredActivityEvidence>;
  }
): ProgressState {
  const passed = update.quiz && update.quiz.score / update.quiz.total >= 0.8
    ? [...new Set([...existing.passedQuizzes, update.quiz.lessonNumber])]
    : existing.passedQuizzes;
  return {
    ...existing,
    viewedSlides: update.viewedSlides ? [...new Set([...existing.viewedSlides, ...update.viewedSlides])] : existing.viewedSlides,
    passedQuizzes: passed,
    activityEvidence: update.activityEvidence
      ? mergeActivityEvidence(existing.activityEvidence ?? {}, update.activityEvidence)
      : existing.activityEvidence ?? {},
  };
}

export function mergeActivityEvidence(
  existing: Record<string, StoredActivityEvidence>,
  incoming: Record<string, StoredActivityEvidence>
): Record<string, StoredActivityEvidence> {
  return mergeCanonicalActivityEvidence(existing, incoming);
}

export function replaceReviewCard(existing: ProgressState, cardId: string, card: Record<string, unknown>): ProgressState {
  return { ...existing, reviewCards: { ...existing.reviewCards, [cardId]: card } };
}
