export interface ProgressState {
  viewedSlides: string[];
  passedQuizzes: number[];
  reviewCards: Record<string, unknown>;
  customNotes?: string;
}

export function mergeProgressState(
  existing: ProgressState,
  update: { viewedSlides?: string[]; quiz?: { lessonNumber: number; score: number; total: number } }
): ProgressState {
  const passed = update.quiz && update.quiz.score / update.quiz.total >= 0.8
    ? [...new Set([...existing.passedQuizzes, update.quiz.lessonNumber])]
    : existing.passedQuizzes;
  return {
    ...existing,
    viewedSlides: update.viewedSlides ? [...new Set([...existing.viewedSlides, ...update.viewedSlides])] : existing.viewedSlides,
    passedQuizzes: passed,
  };
}

export function replaceReviewCard(existing: ProgressState, cardId: string, card: Record<string, unknown>): ProgressState {
  return { ...existing, reviewCards: { ...existing.reviewCards, [cardId]: card } };
}
