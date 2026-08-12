import { LESSON_VOCABULARY_MAP } from './lessonQuizAndVocab';
import { LESSONS_META } from '../data/lessons';
import type { ReviewCardState, ReviewGrade, DueReviewCard, VocabularyItem } from '../types';

const DEFAULT_EASE = 2.5;
const MIN_EASE = 1.3;

export function getAllVocabularyCards(): VocabularyItem[] {
  const all: VocabularyItem[] = [];
  for (const lesson of LESSONS_META) {
    const items = LESSON_VOCABULARY_MAP[lesson.number] ?? [];
    all.push(...items);
  }
  return all;
}

export function createInitialCardState(cardId: string, lessonNumber: number): ReviewCardState {
  return {
    cardId,
    lessonNumber,
    intervalDays: 0,
    easeFactor: DEFAULT_EASE,
    reps: 0,
    dueDate: new Date().toISOString(),
    lastReviewedAt: null,
  };
}

export function gradeCard(state: ReviewCardState, grade: ReviewGrade): ReviewCardState {
  const now = new Date();
  let { intervalDays, easeFactor, reps } = state;

  switch (grade) {
    case 'again':
      intervalDays = 0;
      reps = 0;
      easeFactor = Math.max(MIN_EASE, easeFactor - 0.2);
      break;
    case 'hard':
      intervalDays = Math.max(1, Math.round(intervalDays * 1.2)) || 1;
      easeFactor = Math.max(MIN_EASE, easeFactor - 0.15);
      reps += 1;
      break;
    case 'good':
      intervalDays = intervalDays === 0 ? 1 : Math.round(intervalDays * easeFactor);
      reps += 1;
      break;
    case 'easy':
      intervalDays = intervalDays === 0 ? 4 : Math.round(intervalDays * easeFactor * 1.3);
      easeFactor = easeFactor + 0.15;
      reps += 1;
      break;
  }

  const dueDate = new Date(now);
  if (grade === 'again') {
    dueDate.setMinutes(dueDate.getMinutes() + 10);
  } else {
    dueDate.setDate(dueDate.getDate() + intervalDays);
  }

  return {
    ...state,
    intervalDays,
    easeFactor,
    reps,
    dueDate: dueDate.toISOString(),
    lastReviewedAt: now.toISOString(),
  };
}

export function getWarmupSession(
  userCardStates: Record<string, ReviewCardState>,
  completedLessonNumbers: number[],
  limit: number = 8
): DueReviewCard[] {
  const now = new Date();
  const allCards = getAllVocabularyCards();
  const lessonTitleById = new Map(LESSONS_META.map((l) => [l.number, l.title]));

  const due: DueReviewCard[] = [];

  for (const item of allCards) {
    const lessonNumber = extractLessonNumber(item.id);
    if (!completedLessonNumbers.includes(lessonNumber)) continue;

    const state = userCardStates[item.id] ?? createInitialCardState(item.id, lessonNumber);
    if (new Date(state.dueDate) > now) continue;

    due.push({
      state,
      hu: item.hu,
      ru: item.ru,
      phonetic: item.phonetic,
      exampleSentence: item.exampleSentence,
      lessonNumber,
      lessonTitle: lessonTitleById.get(lessonNumber) ?? `Урок ${lessonNumber}`,
      baseWord: item.baseWord,
      grammaticalTag: item.grammaticalTag,
      relatedLessonId: item.relatedLessonId,
    });
  }

  due.sort((a, b) => new Date(a.state.dueDate).getTime() - new Date(b.state.dueDate).getTime());

  return due.slice(0, limit);
}

function extractLessonNumber(cardId: string): number {
  const match = cardId.match(/^l(\d+)_/);
  return match ? parseInt(match[1], 10) : 0;
}

export function getGrammarReminder(card: DueReviewCard): string | null {
  if (!card.relatedLessonId) return null;
  const lesson = LESSONS_META.find((l) => l.number === card.relatedLessonId);
  if (!lesson) return null;
  return `Напоминание: это из ${lesson.title} — ${lesson.subtitle}`;
}

export function countDueCards(
  userCardStates: Record<string, ReviewCardState>,
  completedLessonNumbers: number[]
): number {
  return getWarmupSession(userCardStates, completedLessonNumbers, Number.MAX_SAFE_INTEGER).length;
}
