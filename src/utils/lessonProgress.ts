import type { ActivityEvidence, ExitCheckItem } from '../types';
import { describeExitCheckStatus } from './activityUtils';

export type LessonProgressState =
  | 'not_started'
  | 'in_progress'
  | 'content_completed'
  | 'quiz_passed';

export interface LessonProgressSnapshot {
  state: LessonProgressState;
  started: boolean;
  contentCompleted: boolean;
  quizPassed: boolean;
  viewedSlideCount: number;
  totalSlideCount: number;
}

interface LessonProgressInput {
  lessonNumber: number;
  requiredSlideIds: readonly number[];
  viewedSlideIds: readonly string[];
  quizPassed: boolean;
}

/**
 * Derive an honest lesson status from the two progress signals that are
 * persisted today. The independent booleans deliberately preserve non-linear
 * histories, such as passing a quiz before viewing every lesson slide.
 */
export function getLessonProgressState({
  lessonNumber,
  requiredSlideIds,
  viewedSlideIds,
  quizPassed,
}: LessonProgressInput): LessonProgressSnapshot {
  const required = new Set(requiredSlideIds);
  const lessonSlidePattern = new RegExp(`^l${lessonNumber}_s(\\d+)$`);
  const viewedRequired = new Set<number>();

  for (const progressId of viewedSlideIds) {
    const match = lessonSlidePattern.exec(progressId);
    if (!match) continue;

    const slideId = Number(match[1]);
    if (required.has(slideId)) viewedRequired.add(slideId);
  }

  const started = viewedRequired.size > 0;
  const contentCompleted = required.size > 0 && viewedRequired.size === required.size;
  const state: LessonProgressState = quizPassed
    ? 'quiz_passed'
    : contentCompleted
      ? 'content_completed'
      : started
        ? 'in_progress'
        : 'not_started';

  return {
    state,
    started,
    contentCompleted,
    quizPassed,
    viewedSlideCount: viewedRequired.size,
    totalSlideCount: required.size,
  };
}

interface DirectObjectiveEvidenceInput {
  objectiveIds: readonly string[];
  checks: readonly ExitCheckItem[];
  evidence: Readonly<Record<string, ActivityEvidence>>;
}

/**
 * True only when every required objective has one ExitCheck mapping whose
 * complete evidence chain resolves to DIRECT + met. PARTIAL, NONE, failed,
 * missing, duplicate and incomplete mappings all fail closed.
 *
 * This is a qualification rule for objective evidence, not a persisted lesson
 * mastery flag. Current activity evidence is session-only, so the course UI
 * intentionally does not expose a durable "mastered" status yet.
 */
export function hasCompleteDirectObjectiveEvidence({
  objectiveIds,
  checks,
  evidence,
}: DirectObjectiveEvidenceInput): boolean {
  const requiredObjectives = new Set(objectiveIds);
  if (requiredObjectives.size === 0 || requiredObjectives.size !== objectiveIds.length) return false;

  const checkByObjective = new Map<string, ExitCheckItem>();
  for (const check of checks) {
    if (!requiredObjectives.has(check.objectiveId) || checkByObjective.has(check.objectiveId)) {
      return false;
    }
    checkByObjective.set(check.objectiveId, check);
  }

  if (checkByObjective.size !== requiredObjectives.size) return false;

  return objectiveIds.every((objectiveId) => {
    const check = checkByObjective.get(objectiveId);
    if (!check) return false;
    return describeExitCheckStatus(check, evidence[check.activityId], { ...evidence }).kind === 'direct-met';
  });
}
