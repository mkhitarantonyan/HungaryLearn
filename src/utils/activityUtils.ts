import type {
  LessonActivity,
  ListeningQuestion,
  ListeningTextInputQuestion,
  ListeningTaskData,
  ReadingContent,
  ReadingTaskData,
  RolePlayData,
  RolePlayTurn,
  ExitCheckData,
  ExitCheckItem,
  EvidenceMode,
  ActivityEvidence,
  ActivityRuntimeState,
} from '../types';
import { isAnswerAccepted } from './answerNormalization';

/**
 * Pure helper functions for the Lesson Activity System.
 * Shared between the runtime components, the lesson validator and tests
 * so there is a single source of truth for activity logic.
 */

/**
 * Resolve the frozen top-level L15 menu shape and the new discriminated shape
 * to one render/validation model. No lesson or activity identifiers are used.
 */
export function resolveReadingContent(reading: ReadingTaskData): ReadingContent {
  if (reading.content !== undefined) return reading.content;
  return {
    type: 'menu',
    legend: reading.legend,
    sections: reading.sections,
  };
}

/** Names of menu items marked vegetarian (🌱 marker derives from data). */
export function getVegetarianItemNames(reading: ReadingTaskData): string[] {
  const content = resolveReadingContent(reading);
  if (content.type !== 'menu') return [];
  const names: string[] = [];
  for (const section of content.sections) {
    for (const item of section.items) {
      if (item.vegetarian) names.push(item.name);
    }
  }
  return names;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function validateMenuReadingContent(content: Record<string, unknown>, activityId: string): string[] {
  const errors: string[] = [];
  if (content.legend !== undefined && (typeof content.legend !== 'string' || !content.legend.trim())) {
    errors.push(activityId + ': menu legend must be non-empty when provided');
  }
  if (!Array.isArray(content.sections) || content.sections.length === 0) {
    errors.push(activityId + ': menu content needs >= 1 section');
    return errors;
  }

  const sectionIds = new Set<string>();
  const itemIds = new Set<string>();
  for (const section of content.sections) {
    if (!isRecord(section)) {
      errors.push(activityId + ': menu section must be an object');
      continue;
    }
    if (typeof section.id !== 'string' || !section.id.trim()) {
      errors.push(activityId + ': menu section missing id');
    } else if (sectionIds.has(section.id)) {
      errors.push(activityId + ': duplicate menu section id ' + section.id);
    } else {
      sectionIds.add(section.id);
    }
    if (typeof section.title !== 'string' || !section.title.trim()) {
      errors.push(activityId + ': menu section ' + String(section.id ?? '') + ' has empty title');
    }
    if (!Array.isArray(section.items) || section.items.length === 0) {
      errors.push(activityId + ': menu section ' + String(section.id ?? '') + ' needs >= 1 item');
      continue;
    }
    for (const item of section.items) {
      if (!isRecord(item)) {
        errors.push(activityId + ': menu item must be an object');
        continue;
      }
      if (typeof item.id !== 'string' || !item.id.trim()) {
        errors.push(activityId + ': menu item missing id');
      } else if (itemIds.has(item.id)) {
        errors.push(activityId + ': duplicate menu item id ' + item.id);
      } else {
        itemIds.add(item.id);
      }
      if (typeof item.name !== 'string' || !item.name.trim()) {
        errors.push(activityId + ': menu item ' + String(item.id ?? '') + ' has empty name');
      }
      if (typeof item.price !== 'number' || !Number.isFinite(item.price) || !(item.price > 0)) {
        errors.push(activityId + ': item ' + String(item.id ?? '') + ' has invalid price');
      }
      if (item.vegetarian !== undefined && typeof item.vegetarian !== 'boolean') {
        errors.push(activityId + ': item ' + String(item.id ?? '') + ' has invalid vegetarian flag');
      }
    }
  }
  return errors;
}

function validateProseReadingContent(content: Record<string, unknown>, activityId: string): string[] {
  const errors: string[] = [];
  if (content.title !== undefined && (typeof content.title !== 'string' || !content.title.trim())) {
    errors.push(activityId + ': prose title must be non-empty when provided');
  }
  if (!Array.isArray(content.paragraphs) || content.paragraphs.length === 0) {
    errors.push(activityId + ': prose content needs >= 1 paragraph');
    return errors;
  }
  for (const [index, paragraph] of content.paragraphs.entries()) {
    if (typeof paragraph !== 'string' || !paragraph.trim()) {
      errors.push(activityId + ': prose paragraph ' + (index + 1) + ' is empty');
    }
  }
  return errors;
}

/**
 * Runtime boundary for imported/content-managed reading data. The input is
 * narrowed without casts so unsupported content kinds cannot reach rendering.
 */
export function validateReadingContent(content: unknown, activityId: string): string[] {
  if (!isRecord(content) || typeof content.type !== 'string') {
    return [activityId + ': reading content missing supported type'];
  }
  switch (content.type) {
    case 'menu':
      return validateMenuReadingContent(content, activityId);
    case 'prose':
      return validateProseReadingContent(content, activityId);
    default:
      return [activityId + ': unsupported reading content type ' + content.type];
  }
}

/** Narrow a generic listening question without changing legacy ReadingQuestion. */
export function isListeningTextInputQuestion(
  question: ListeningQuestion
): question is ListeningTextInputQuestion {
  return 'kind' in question && question.kind === 'textInput';
}

/** Score either supported listening-question shape with the shared answer policy. */
export function isListeningQuestionAnswerCorrect(
  question: ListeningQuestion,
  answer: number | string | undefined
): boolean {
  if (isListeningTextInputQuestion(question)) {
    return typeof answer === 'string' && isAnswerAccepted(answer, question.accept);
  }
  return typeof answer === 'number' && answer === question.correctIndex;
}

function validateQuestions(
  activityId: string,
  questions: ListeningQuestion[],
  kindLabel: 'reading' | 'listening'
): string[] {
  const errors: string[] = [];
  if (questions.length === 0) {
    errors.push(activityId + ': ' + kindLabel + ' needs >= 1 comprehension question');
    return errors;
  }

  const questionIds = new Set<string>();
  for (const question of questions) {
    if (!question.id.trim()) {
      errors.push(activityId + ': ' + kindLabel + ' question missing id');
    } else if (questionIds.has(question.id)) {
      errors.push(activityId + ': duplicate question id ' + question.id);
    } else {
      questionIds.add(question.id);
    }
    if (!question.question.trim()) {
      errors.push(activityId + ': question ' + question.id + ' has empty prompt');
    }
    if (isListeningTextInputQuestion(question)) {
      if (kindLabel !== 'listening') {
        errors.push(activityId + ': textInput questions are supported only for listening');
      }
      if (question.accept.length === 0) {
        errors.push(activityId + ': question ' + question.id + ' has empty accept');
      } else if (question.accept.some((answer) => !answer.trim())) {
        errors.push(activityId + ': question ' + question.id + ' has empty accepted answer');
      }
      continue;
    }
    if (question.options.length < 2) {
      errors.push(activityId + ': question ' + question.id + ' needs >= 2 options');
    }
    if (question.options.some((option) => !option.trim())) {
      errors.push(activityId + ': question ' + question.id + ' has empty option');
    }
    if (new Set(question.options).size !== question.options.length) {
      errors.push(activityId + ': question ' + question.id + ' has duplicate options');
    }
    if (
      !Number.isInteger(question.correctIndex) ||
      question.correctIndex < 0 ||
      question.correctIndex >= question.options.length
    ) {
      errors.push(activityId + ': question ' + question.id + ' has invalid correctIndex');
    }
  }
  return errors;
}

/** A listening activity only produces direct listening evidence when a real audio asset is published. */
export function canProduceDirectListeningEvidence(activity: ListeningTaskData): boolean {
  return activity.audioStatus === 'published';
}

/** Returns true when the transcript may be shown (i.e. after a normal attempt was submitted). */
export function shouldShowTranscript(submitted: boolean): boolean {
  return submitted;
}

/** Resolve every target id referenced by a role-play turn. */
function referencedTurnIds(rolePlay: RolePlayData): string[] {
  const refs: string[] = [];
  for (const turn of rolePlay.turns) {
    if (turn.next) refs.push(turn.next);
    for (const branch of turn.branches ?? []) {
      refs.push(branch.nextTurnId);
    }
  }
  return refs;
}

/**
 * Validate a role-play graph. Returns a list of human-readable problems.
 * Empty array means the graph is resolvable.
 */
export function validateRolePlayGraph(rolePlay: RolePlayData): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  for (const turn of rolePlay.turns) {
    if (ids.has(turn.id)) errors.push(`rolePlay ${rolePlay.id}: duplicate turn id ${turn.id}`);
    ids.add(turn.id);
  }
  if (!ids.has(rolePlay.startTurnId)) {
    errors.push(`rolePlay ${rolePlay.id}: startTurnId ${rolePlay.startTurnId} not found`);
  }
  for (const ref of referencedTurnIds(rolePlay)) {
    if (!ids.has(ref)) {
      errors.push(`rolePlay ${rolePlay.id}: unresolved nextTurnId ${ref}`);
    }
  }
  return errors;
}

/** Collect all activity ids in a lesson's slides. */
export function collectActivityIds(slides: { activities?: LessonActivity[] }[]): string[] {
  const ids: string[] = [];
  for (const slide of slides) {
    for (const activity of slide.activities ?? []) ids.push(activity.id);
  }
  return ids;
}

/**
 * Return questions owned by activity kinds that share the generic QuestionSet.
 * Add future question-bearing activity kinds here to include them in lesson-level
 * DOM id uniqueness validation.
 */
function getActivityQuestions(activity: LessonActivity): readonly { id: string }[] {
  switch (activity.kind) {
    case 'reading':
    case 'listening':
      return activity.questions;
    default:
      return [];
  }
}

/** Validate QuestionSet DOM id uniqueness across every activity in one lesson. */
export function validateLessonQuestionIds(activities: LessonActivity[]): string[] {
  const errors: string[] = [];
  const ownerByQuestionId = new Map<string, string>();

  for (const activity of activities) {
    for (const question of getActivityQuestions(activity)) {
      if (!question.id.trim()) continue;

      const firstOwner = ownerByQuestionId.get(question.id);
      if (firstOwner !== undefined) {
        errors.push(
          `duplicate lesson question id ${question.id} in activities ${firstOwner} and ${activity.id}`
        );
      } else {
        ownerByQuestionId.set(question.id, activity.id);
      }
    }
  }

  return errors;
}

/** Validate a passCount threshold for an activity with `total` scorable items. */
function passCountError(
  activityId: string,
  kind: string,
  passCount: number | undefined,
  total: number
): string | null {
  if (passCount === undefined) return null;
  if (!Number.isInteger(passCount) || passCount < 1 || passCount > total) {
    return `${activityId}: ${kind} passCount ${passCount} out of range 1..${total}`;
  }
  return null;
}

/** Validate a single activity structurally. Returns a list of problems. */
export function validateActivity(activity: LessonActivity): string[] {
  const errors: string[] = [];
  if (!activity.id.trim()) errors.push(activity.kind + ': missing activity id');
  switch (activity.kind) {
    case 'reading': {
      errors.push(...validateQuestions(activity.id, activity.questions, 'reading'));
      if (activity.content !== undefined && activity.passCount === undefined) {
        errors.push(activity.id + ': structured reading content requires explicit passCount');
      }
      const pc = passCountError(activity.id, 'reading', activity.passCount, activity.questions.length);
      if (pc) errors.push(pc);
      errors.push(...validateReadingContent(resolveReadingContent(activity), activity.id));
      break;
    }
    case 'listening': {
      errors.push(...validateQuestions(activity.id, activity.questions, 'listening'));
      if (!activity.transcript.trim()) errors.push(`${activity.id}: empty transcript`);
      const pc = passCountError(activity.id, 'listening', activity.passCount, activity.questions.length);
      if (pc) errors.push(pc);
      break;
    }
    case 'controlledPractice': {
      const eIds = new Set<string>();
      for (const ex of activity.exercises) {
        if (eIds.has(ex.id)) errors.push(`${activity.id}: duplicate exercise id ${ex.id}`);
        eIds.add(ex.id);
        if (ex.kind === 'singleChoice') {
          if (ex.correctIndex < 0 || ex.correctIndex >= ex.options.length) {
            errors.push(`${activity.id}: exercise ${ex.id} has invalid correctIndex`);
          }
        } else {
          if (ex.accept.length === 0) errors.push(`${activity.id}: exercise ${ex.id} has empty accept`);
        }
      }
      const pc = passCountError(activity.id, 'controlledPractice', activity.passCount, activity.exercises.length);
      if (pc) errors.push(pc);
      break;
    }
    case 'rolePlay': {
      if (activity.partnerLabel !== undefined && !activity.partnerLabel.trim()) {
        errors.push(`${activity.id}: empty partnerLabel`);
      }
      if (activity.completionMessage !== undefined && !activity.completionMessage.trim()) {
        errors.push(`${activity.id}: empty completionMessage`);
      }
      errors.push(...validateRolePlayGraph(activity));
      for (const turn of activity.turns) {
        if (turn.speaker === 'learner' && !turn.responseMode) {
          errors.push(`${activity.id}: learner turn ${turn.id} missing responseMode`);
        }
        if (turn.responseMode === 'choice' && (!turn.options || turn.options.length === 0)) {
          errors.push(`${activity.id}: choice turn ${turn.id} missing options`);
        }
        if (turn.responseMode === 'choice') {
          // Duplicate branch.choice is forbidden.
          const seenChoices = new Set<string>();
          for (const branch of turn.branches ?? []) {
            if (branch.choice !== undefined) {
              if (seenChoices.has(branch.choice)) {
                errors.push(`${activity.id}: turn ${turn.id} has duplicate branch choice ${branch.choice}`);
              }
              seenChoices.add(branch.choice);
            }
          }
          // Every option must resolve deterministically to a branch target.
          for (const option of turn.options ?? []) {
            const branch = (turn.branches ?? []).find((b) => b.choice === option);
            if (!branch) {
              errors.push(`${activity.id}: turn ${turn.id} option ${option} has no matching branch`);
            } else if (!branch.nextTurnId) {
              errors.push(`${activity.id}: turn ${turn.id} branch for ${option} missing nextTurnId`);
            }
          }
          // A pedagogically incorrect branch must not accidentally advance forward.
          for (const branch of turn.branches ?? []) {
            if (branch.correct === false && branch.nextTurnId !== turn.id) {
              errors.push(
                `${activity.id}: turn ${turn.id} incorrect branch advances to ${branch.nextTurnId} (must stay on ${turn.id})`
              );
            }
          }
        }
      }
      break;
    }
    case 'writing': {
      if (!activity.prompt.trim()) errors.push(`${activity.id}: empty prompt`);
      if (activity.rubric.length === 0) errors.push(`${activity.id}: empty rubric`);
      break;
    }
    case 'exitCheck': {
      for (const check of activity.checks) {
        if (!check.objectiveId) errors.push(`${activity.id}: check missing objectiveId`);
        if (!check.activityId) errors.push(`${activity.id}: check missing activityId`);
        const practiceComponents = check.practiceComponents ?? [];
        if (new Set(practiceComponents).size !== practiceComponents.length) {
          errors.push(`${activity.id}: check ${check.objectiveId} has duplicate practice components`);
        }
        if (practiceComponents.includes(check.evidenceKind)) {
          errors.push(
            `${activity.id}: check ${check.objectiveId} cannot mark its evidence kind as practice-only`
          );
        }
        const evidenceComponents = check.evidenceComponents ?? [];
        const evidenceComponentKeys = evidenceComponents.map(
          (component) => `${component.activityId}\u0000${component.evidenceKind}`
        );
        if (new Set(evidenceComponentKeys).size !== evidenceComponentKeys.length) {
          errors.push(`${activity.id}: check ${check.objectiveId} has duplicate evidence components`);
        }
        if (
          evidenceComponents.some(
            (component) =>
              component.activityId === check.activityId &&
              component.evidenceKind === check.evidenceKind
          )
        ) {
          errors.push(
            `${activity.id}: check ${check.objectiveId} repeats its primary evidence component`
          );
        }
        for (const component of evidenceComponents) {
          if (practiceComponents.includes(component.evidenceKind)) {
            errors.push(
              `${activity.id}: check ${check.objectiveId} cannot require and mark ${component.evidenceKind} as practice-only`
            );
          }
        }
      }
      break;
    }
  }
  return errors;
}

/**
 * Validate that every exit-check reference resolves to an existing objective and
 * activity id. Returns a list of problems.
 */
export function validateExitCheckReferences(
  exitCheck: ExitCheckData,
  objectiveIds: string[],
  activityIds: string[]
): string[] {
  const errors: string[] = [];
  const objectiveSet = new Set(objectiveIds);
  const activitySet = new Set(activityIds);
  for (const check of exitCheck.checks) {
    if (!objectiveSet.has(check.objectiveId)) {
      errors.push(`${exitCheck.id}: objectiveId ${check.objectiveId} not found`);
    }
    if (!activitySet.has(check.activityId)) {
      errors.push(`${exitCheck.id}: activityId ${check.activityId} not found`);
    }
    for (const component of check.evidenceComponents ?? []) {
      if (!activitySet.has(component.activityId)) {
        errors.push(`${exitCheck.id}: activityId ${component.activityId} not found`);
      }
    }
  }
  return errors;
}

// =====================================================================
// Evidence scoring (pilot): separated from component rendering so the
// thresholds are testable and shared with the Exit Check.
// =====================================================================

export const MIN_WRITING_LENGTH = 20;

export interface ScoredEvidence {
  passed: boolean;
  evidenceMode: EvidenceMode;
  score: number;
  total: number;
}

/** Reading comprehension is direct evidence; pass = score >= passCount. */
export function readingEvidence(score: number, total: number, passCount: number): ScoredEvidence {
  return { passed: score >= passCount, evidenceMode: 'direct', score, total };
}

/** Controlled practice: completed = all attempted; passed = all attempted AND score >= passCount. */
export function controlledEvidence(
  attemptedAll: boolean,
  score: number,
  total: number,
  passCount: number
): ScoredEvidence & { completed: boolean } {
  return {
    completed: attemptedAll,
    passed: attemptedAll && score >= passCount,
    evidenceMode: 'direct',
    score,
    total,
  };
}

/**
 * Listening: evidence mode is 'direct' only when a real asset is published;
 * passed additionally requires the comprehension score to reach the threshold.
 */
export function listeningEvidence(
  listening: ListeningTaskData,
  score: number,
  total: number,
  audioPlayable: boolean = true
): ScoredEvidence {
  const published = listening.audioStatus === 'published' && audioPlayable;
  const passCount = listening.passCount ?? 3;
  return {
    passed: published && score >= passCount,
    evidenceMode: published ? 'direct' : 'none',
    score,
    total,
  };
}

/** Writing is partial evidence: never auto-scored as language mastery. */
export function writingEvidence(
  text: string,
  selfReviewed: boolean,
  minLength: number = MIN_WRITING_LENGTH
): { completed: boolean; passed: boolean; evidenceMode: EvidenceMode } {
  return {
    completed: text.trim().length >= minLength && selfReviewed,
    passed: false,
    evidenceMode: 'partial',
  };
}

export interface RolePlayChoiceResult {
  nextTurnId?: string;
  correct?: boolean;
  feedback?: string;
}

export function rolePlayChoiceResult(turn: RolePlayTurn, choice: string): RolePlayChoiceResult {
  const branch = turn.branches?.find((b) => b.choice === choice);
  return {
    nextTurnId: branch?.nextTurnId ?? turn.next,
    correct: branch?.correct,
    feedback: branch?.feedback,
  };
}

/** A choice advances only when it is not explicitly marked incorrect. */
export function advancesRolePlay(result: RolePlayChoiceResult): boolean {
  return result.correct !== false;
}

// =====================================================================
// Evidence store reset + runtime state restore (pilot).
// Evidence = finished result. Runtime = unfinished draft. Never merged.
// =====================================================================

/** Remove an activity's evidence from the store (e.g. when a retry begins). */
export function clearActivityEvidence(
  store: Record<string, ActivityEvidence>,
  activityId: string
): Record<string, ActivityEvidence> {
  const next = { ...store };
  delete next[activityId];
  return next;
}

/** Writing is locked after a successful submit (draft must equal stored evidence). */
export function isWritingLocked(evidence?: ActivityEvidence): boolean {
  return evidence?.completed === true;
}

/** Restore the role-play turn from session runtime state, falling back to the start turn. */
export function restoreRolePlayTurnId(data: RolePlayData, runtime?: ActivityRuntimeState): string {
  const candidate = runtime?.rolePlayCurrentTurnId;
  if (candidate && data.turns.some((t) => t.id === candidate)) return candidate;
  return data.startTurnId;
}

/** Restore the writing draft from session runtime state. */
export function restoreWritingDraft(runtime?: ActivityRuntimeState): string {
  return runtime?.writingDraft ?? '';
}

/** Restore the writing rubric checks from session runtime state. */
export function restoreWritingRubric(runtime?: ActivityRuntimeState): Record<string, boolean> {
  return runtime?.writingRubric ?? {};
}

// =====================================================================
// Role-play completion evidence + exit-check status model (frozen pilot).
// =====================================================================

/**
 * Role-play completion is PARTIAL and never auto-passes. Learner responses are
 * text-only/self-practice; no learner voice capture or automatic speech evaluation exists.
 */
export function rolePlayCompletionEvidence(activityId: string): ActivityEvidence {
  return {
    activityId,
    attempted: true,
    completed: true,
    evidenceMode: 'partial',
    passed: false,
  };
}

export type EvidenceStatusKind =
  | 'not-started'
  | 'none'
  | 'direct-met'
  | 'direct-not-met'
  | 'partial-components'
  | 'composite-incomplete'
  | 'partial-review'
  | 'partial-incomplete';

export interface EvidenceStatus {
  kind: EvidenceStatusKind;
  label: string;
}

/**
 * Exit-check status semantics:
 *   DIRECT + passed → met
 *   DIRECT + !passed → не met
 *   PARTIAL + completed → evidence получено, требует проверки (никогда "met")
 *   PARTIAL + !completed → не завершено
 *   NONE → direct evidence отсутствует
 * The word "mastery" is intentionally absent.
 */
export function describeEvidenceStatus(ev?: ActivityEvidence): EvidenceStatus {
  if (!ev) return { kind: 'not-started', label: 'не начато' };
  if (ev.evidenceMode === 'none') {
    return { kind: 'none', label: 'NONE · direct evidence отсутствует' };
  }
  const scorePart =
    ev.score !== undefined && ev.total !== undefined ? `${ev.score}/${ev.total} · ` : '';
  if (ev.evidenceMode === 'direct') {
    if (ev.passed) return { kind: 'direct-met', label: `${scorePart}DIRECT · met` };
    return { kind: 'direct-not-met', label: `${scorePart}DIRECT · не met` };
  }
  if (ev.completed) {
    return { kind: 'partial-review', label: 'PARTIAL · evidence получено · требует проверки' };
  }
  return { kind: 'partial-incomplete', label: 'PARTIAL · не завершено' };
}

/**
 * Overall objective status for one ExitCheck item. A passed DIRECT producer
 * cannot make the whole objective "met" while another declared component is
 * practice-only and has no qualifying ActivityEvidence.
 */
export function describeExitCheckStatus(
  check: ExitCheckItem,
  ev?: ActivityEvidence,
  evidence: Record<string, ActivityEvidence> = {}
): EvidenceStatus {
  const primaryStatus = describeEvidenceStatus(ev);
  const componentStatuses = (check.evidenceComponents ?? []).map((component) =>
    describeEvidenceStatus(evidence[component.activityId])
  );
  const qualifyingStatuses = [primaryStatus, ...componentStatuses];
  const qualifyingEvidenceKinds = new Set([
    check.evidenceKind,
    ...(check.evidenceComponents ?? []).map((component) => component.evidenceKind),
  ]);
  const isMixedObjective = qualifyingEvidenceKinds.size > 1;

  // A failed required DIRECT producer remains a hard gate even when another
  // component has produced evidence or is unavailable.
  if (qualifyingStatuses.some((status) => status.kind === 'direct-not-met')) {
    return {
      kind: 'direct-not-met',
      label: 'DIRECT · не met',
    };
  }

  // A completed human-reviewed producer is still genuine PARTIAL evidence
  // when a required DIRECT producer is unavailable (for example, a role-play
  // completed while its listening asset is missing). Never upgrade it to met,
  // but do not erase the evidence that was actually collected.
  if (
    qualifyingStatuses.some((status) => status.kind === 'none') &&
    qualifyingStatuses.some((status) => status.kind === 'partial-review')
  ) {
    return {
      kind: 'partial-review',
      label: 'PARTIAL · evidence получено · обязательный DIRECT-компонент отсутствует',
    };
  }

  // Distinct declared evidence kinds represent legitimate subskills of one
  // mixed objective. Preserve successful DIRECT evidence as PARTIAL when a
  // different required subskill is unavailable; pure-skill hard gates stay NONE.
  if (
    isMixedObjective &&
    qualifyingStatuses.some((status) => status.kind === 'none') &&
    qualifyingStatuses.some((status) => status.kind === 'direct-met')
  ) {
    return {
      kind: 'partial-review',
      label: 'PARTIAL · evidence получено · обязательный DIRECT-компонент отсутствует',
    };
  }

  if (qualifyingStatuses.some((status) => status.kind === 'none')) {
    return {
      kind: 'none',
      label: 'NONE · обязательный DIRECT-компонент отсутствует',
    };
  }
  if (qualifyingStatuses.some((status) => status.kind === 'not-started')) {
    if (qualifyingStatuses.length > 1) {
      return {
        kind: 'composite-incomplete',
        label: 'INCOMPLETE · не все обязательные компоненты подтверждены',
      };
    }
    return primaryStatus;
  }
  if (qualifyingStatuses.some((status) => status.kind === 'partial-review')) {
    return {
      kind: 'partial-review',
      label: 'PARTIAL · evidence получено · требует проверки',
    };
  }
  if (qualifyingStatuses.some((status) => status.kind === 'partial-incomplete')) {
    return {
      kind: 'partial-incomplete',
      label: 'PARTIAL · не завершено',
    };
  }
  if ((check.practiceComponents?.length ?? 0) > 0) {
    return {
      kind: 'partial-components',
      label: 'PARTIAL · не все компоненты подтверждены',
    };
  }
  if (qualifyingStatuses.length > 1) {
    return { kind: 'direct-met', label: 'DIRECT · met' };
  }
  return primaryStatus;
}
