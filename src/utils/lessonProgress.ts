import type { ActivityEvidence, ExitCheckItem, Lesson, LessonActivity } from '../types';
import { describeExitCheckStatus } from './activityUtils';

export type LessonProgressState =
  | 'not_started'
  | 'in_progress'
  | 'completed';

export type ActivityProgressRequirement = 'pass' | 'complete';

export interface LessonProgressUnit {
  activityId: string;
  kind: LessonActivity['kind'];
  requirement: ActivityProgressRequirement;
  /** Canonical scoring contract for pass-gated activities. */
  passCount?: number;
  total?: number;
}

export interface LessonProgressDefinition {
  lessonNumber: number;
  quizRequired: boolean;
  quizTotal?: number;
  quizPassCount?: number;
  units: LessonProgressUnit[];
}

export interface LessonProgressSnapshot {
  state: LessonProgressState;
  started: boolean;
  completed: boolean;
  quizPassed: boolean;
  completedUnitCount: number;
  totalUnitCount: number;
  percentage: number;
}

interface LessonProgressInput {
  definition: LessonProgressDefinition;
  evidence: Readonly<Record<string, ActivityEvidence>>;
  quizPassed: boolean;
}

export function isActivityEvidenceValidForUnit(
  unit: LessonProgressUnit,
  result: ActivityEvidence | undefined
): boolean {
  if (!result || result.activityId !== unit.activityId || !result.attempted || !result.completed) return false;

  if (unit.requirement === 'complete') {
    if (result.evidenceMode !== 'partial' || result.passed) return false;
    if (result.score !== undefined || result.total !== undefined) return false;
    return unit.kind === 'writing'
      ? result.selfReviewed === true
      : result.selfReviewed === undefined;
  }

  if (!Number.isInteger(result.score) || !Number.isInteger(result.total)) return false;
  if (result.total !== unit.total || result.score! < 0 || result.score! > result.total!) return false;
  if (result.selfReviewed !== undefined) return false;
  if (result.evidenceMode === 'none') {
    return unit.kind === 'listening' && !result.passed;
  }
  if (result.evidenceMode !== 'direct') return false;
  return result.passed === (result.score! >= (unit.passCount ?? 1));
}

function activityUnitIsComplete(
  unit: LessonProgressUnit,
  evidence: Readonly<Record<string, ActivityEvidence>>
): boolean {
  const result = evidence[unit.activityId];
  return isActivityEvidenceValidForUnit(unit, result)
    && (unit.requirement === 'complete' || result.passed);
}

export function sanitizeActivityEvidence(
  definitions: readonly LessonProgressDefinition[],
  evidence: unknown
): Record<string, ActivityEvidence> {
  if (!evidence || typeof evidence !== 'object' || Array.isArray(evidence)) return {};
  const raw = evidence as Record<string, ActivityEvidence | undefined>;
  const sanitized: Record<string, ActivityEvidence> = {};
  for (const definition of definitions) {
    for (const unit of definition.units) {
      const candidate = raw[unit.activityId];
      if (isActivityEvidenceValidForUnit(unit, candidate)) sanitized[unit.activityId] = candidate!;
    }
  }
  return sanitized;
}

function lessonProgressRatio(
  definition: LessonProgressDefinition,
  evidence: Readonly<Record<string, ActivityEvidence>>,
  quizPassed: boolean
): { completed: number; total: number; ratio: number } {
  const completedActivities = definition.units.filter((unit) => activityUnitIsComplete(unit, evidence)).length;
  const completed = completedActivities + (definition.quizRequired && quizPassed ? 1 : 0);
  const total = definition.units.length + (definition.quizRequired ? 1 : 0);
  return { completed, total, ratio: total > 0 ? completed / total : 0 };
}

/** Opening/narrating a slide is never a progress unit. */
export function getLessonProgressState({
  definition,
  evidence,
  quizPassed,
}: LessonProgressInput): LessonProgressSnapshot {
  const progress = lessonProgressRatio(definition, evidence, quizPassed);
  const completedUnitCount = progress.completed;
  const totalUnitCount = progress.total;
  const percentage = Math.round(progress.ratio * 100);
  const completed = totalUnitCount > 0 && completedUnitCount === totalUnitCount;
  const started = completedUnitCount > 0;
  const state: LessonProgressState = completed ? 'completed' : started ? 'in_progress' : 'not_started';

  return {
    state,
    started,
    completed,
    quizPassed,
    completedUnitCount,
    totalUnitCount,
    percentage,
  };
}

/**
 * Required units are derived from the lesson definitions. Scored activities
 * need a passing result; open production needs genuine completion but remains
 * PARTIAL evidence. ExitCheck and optional speaking are presentation/evidence
 * summaries and never add a second progress unit.
 */
export function getRequiredLessonProgressUnits(lesson: Lesson): LessonProgressUnit[] {
  const units: LessonProgressUnit[] = [];
  const seen = new Set<string>();

  for (const slide of lesson.slides) {
    for (const activity of slide.activities ?? []) {
      if (activity.kind === 'exitCheck') continue;
      if (activity.kind === 'listening' && (
        activity.audioStatus !== 'published'
        || activity.questions.length === 0
      )) continue;

      const requirement: ActivityProgressRequirement =
        activity.kind === 'writing' || activity.kind === 'rolePlay' ? 'complete' : 'pass';
      if (seen.has(activity.id)) throw new Error(`Duplicate progress activity id: ${activity.id}`);
      seen.add(activity.id);
      if (activity.kind === 'controlledPractice') {
        units.push({
          activityId: activity.id,
          kind: activity.kind,
          requirement,
          passCount: activity.passCount ?? Math.ceil(activity.exercises.length * 0.8),
          total: activity.exercises.length,
        });
      } else if (activity.kind === 'reading' || activity.kind === 'listening') {
        units.push({
          activityId: activity.id,
          kind: activity.kind,
          requirement,
          passCount: activity.passCount ?? 3,
          total: activity.questions.length,
        });
      } else {
        units.push({ activityId: activity.id, kind: activity.kind, requirement });
      }
    }
  }
  return units;
}

export function getCourseProgressPercentage(
  definitions: readonly LessonProgressDefinition[],
  evidence: Readonly<Record<string, ActivityEvidence>>,
  passedQuizzes: readonly number[]
): number {
  if (definitions.length === 0) return 0;
  const passed = new Set(passedQuizzes);
  const rawLessonRatios = definitions.reduce(
    (sum, definition) => sum + lessonProgressRatio(
      definition,
      evidence,
      passed.has(definition.lessonNumber)
    ).ratio,
    0
  );
  return Math.round((rawLessonRatios / definitions.length) * 100);
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
 * mastery flag. Persisted completion evidence therefore never becomes a
 * durable "mastered" status in the course UI.
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
