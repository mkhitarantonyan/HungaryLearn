import type { ActivityEvidence, LessonActivity } from '../../../src/types.ts';
import { loadServerLesson } from '../../../src/server/lessonLoader.ts';
import { isAnswerAccepted } from '../../../src/utils/answerNormalization.ts';
import {
  controlledEvidence,
  isListeningQuestionAnswerCorrect,
  listeningEvidence,
  readingEvidence,
} from '../../../src/utils/activityUtils.ts';
import { LESSON_PROGRESS_DEFINITIONS } from '../../../src/data/lessonProgressCatalog.ts';

function validAnswers(value: unknown): Record<string, number | string> | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const entries = Object.entries(value as Record<string, unknown>);
  if (entries.length > 100 || entries.some(([id, answer]) =>
    !id || id.length > 200 || (typeof answer !== 'string' && !Number.isInteger(answer))
  )) return null;
  return Object.fromEntries(entries) as Record<string, number | string>;
}

function exactAnswerIds(answers: Record<string, number | string>, ids: readonly string[]): boolean {
  return Object.keys(answers).length === ids.length && ids.every((id) => answers[id] !== undefined);
}

function findActivity(lesson: Awaited<ReturnType<typeof loadServerLesson>>, activityId: string): LessonActivity | null {
  if (!lesson) return null;
  for (const slide of lesson.slides) {
    const activity = (slide.activities ?? []).find((item) => item.id === activityId);
    if (activity) return activity;
  }
  return null;
}

/** Recompute a scored activity result from current lesson definitions. */
export async function gradeActivityAttempt(value: unknown): Promise<ActivityEvidence | null> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const raw = value as Record<string, unknown>;
  if (Object.keys(raw).some((key) => !['activityId', 'answers', 'audioPlayable'].includes(key))) return null;
  const activityId = typeof raw.activityId === 'string' ? raw.activityId : '';
  const answers = validAnswers(raw.answers);
  if (!activityId || !answers) return null;
  const definition = LESSON_PROGRESS_DEFINITIONS.find((item) =>
    item.units.some((unit) => unit.activityId === activityId && unit.requirement === 'pass')
  );
  if (!definition) return null;
  const lesson = await loadServerLesson(definition.lessonNumber);
  const activity = findActivity(lesson, activityId);
  if (!activity) return null;

  if (activity.kind === 'controlledPractice') {
    if (!exactAnswerIds(answers, activity.exercises.map((item) => item.id))) return null;
    let score = 0;
    for (const exercise of activity.exercises) {
      const answer = answers[exercise.id];
      if (exercise.kind === 'singleChoice') {
        if (!Number.isInteger(answer)) return null;
        if (answer === exercise.correctIndex) score += 1;
      } else {
        if (typeof answer !== 'string') return null;
        if (isAnswerAccepted(answer, exercise.accept)) score += 1;
      }
    }
    const result = controlledEvidence(
      true,
      score,
      activity.exercises.length,
      activity.passCount ?? Math.ceil(activity.exercises.length * 0.8)
    );
    return { activityId, attempted: true, ...result };
  }

  if (activity.kind === 'reading' || activity.kind === 'listening') {
    if (!exactAnswerIds(answers, activity.questions.map((item) => item.id))) return null;
    const score = activity.questions.filter((question) =>
      isListeningQuestionAnswerCorrect(question, answers[question.id])
    ).length;
    if (activity.kind === 'reading') {
      const result = readingEvidence(score, activity.questions.length, activity.passCount ?? 3);
      return { activityId, attempted: true, completed: true, ...result };
    }
    if (typeof raw.audioPlayable !== 'boolean') return null;
    const result = listeningEvidence(activity, score, activity.questions.length, raw.audioPlayable);
    return { activityId, attempted: true, completed: true, ...result };
  }
  return null;
}

/** Recompute quiz score from selected option indexes; client-provided scores are never trusted. */
export async function gradeQuizAttempt(value: unknown): Promise<{ lessonNumber: number; score: number; total: number } | null> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const raw = value as Record<string, unknown>;
  if (Object.keys(raw).some((key) => !['lessonNumber', 'answers'].includes(key))) return null;
  if (!Number.isInteger(raw.lessonNumber) || !Array.isArray(raw.answers)) return null;
  const lessonNumber = Number(raw.lessonNumber);
  const answers = raw.answers;
  const lesson = await loadServerLesson(lessonNumber);
  if (!lesson?.quiz || answers.length !== lesson.quiz.length) return null;
  if (answers.some((answer) => !Number.isInteger(answer))) return null;
  const score = lesson.quiz.filter((question, index) => answers[index] === question.correctIndex).length;
  return { lessonNumber, score, total: lesson.quiz.length };
}
