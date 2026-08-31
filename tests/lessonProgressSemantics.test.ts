import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  getCourseProgressPercentage,
  getLessonProgressState,
  getRequiredLessonProgressUnits,
  hasCompleteDirectObjectiveEvidence,
  type LessonProgressDefinition,
} from '../src/utils/lessonProgress.ts';
import { mergeActivityEvidence } from '../src/utils/progressMerge.ts';
import { readCachedProgress, writeCachedProgress } from '../src/utils/userStore.ts';
import { LESSON_PROGRESS_DEFINITIONS } from '../src/data/lessonProgressCatalog.ts';
import { LESSONS_META, loadLesson } from '../src/data/lessons/index.ts';
import type { ActivityEvidence, ExitCheckItem, Lesson } from '../src/types.ts';

const definition: LessonProgressDefinition = {
  lessonNumber: 4,
  quizRequired: true,
  units: [
    { activityId: 'l4-cp', kind: 'controlledPractice', requirement: 'pass', passCount: 4, total: 5 },
    { activityId: 'l4-reading', kind: 'reading', requirement: 'pass', passCount: 4, total: 5 },
    { activityId: 'l4-listening', kind: 'listening', requirement: 'pass', passCount: 4, total: 5 },
    { activityId: 'l4-writing', kind: 'writing', requirement: 'complete' },
    { activityId: 'l4-roleplay', kind: 'rolePlay', requirement: 'complete' },
  ],
};

const direct = (activityId: string, passed = true, score = passed ? 4 : 2): ActivityEvidence => ({
  activityId,
  attempted: true,
  completed: true,
  evidenceMode: 'direct',
  passed,
  score,
  total: 5,
});

const partial = (activityId: string, writing = false): ActivityEvidence => ({
  activityId,
  attempted: true,
  completed: true,
  evidenceMode: 'partial',
  passed: false,
  ...(writing ? { selfReviewed: true } : {}),
});

const progress = (evidence: Record<string, ActivityEvidence> = {}, quizPassed = false) =>
  getLessonProgressState({ definition, evidence, quizPassed });

const check = (objectiveId: string, activityId: string, evidenceKind: ExitCheckItem['evidenceKind']): ExitCheckItem => ({
  objectiveId,
  activityId,
  evidenceKind,
});

test('new learner starts at exactly 0 percent', () => {
  assert.deepEqual(progress(), {
    state: 'not_started', started: false, completed: false, quizPassed: false,
    completedUnitCount: 0, totalUnitCount: 6, percentage: 0,
  });
});

test('opening a lesson or its last slide cannot change progress because slides are not an input', () => {
  assert.equal(progress().percentage, 0);
  assert.equal('viewedSlideIds' in progress(), false);
});

test('narration is not represented by any required progress unit', () => {
  assert.equal(definition.units.some((unit) => /narrat|slide/i.test(unit.activityId)), false);
});

test('an unfinished or failed Controlled Practice does not close its unit', () => {
  assert.equal(progress({ 'l4-cp': direct('l4-cp', false) }).percentage, 0);
});

test('Controlled Practice counts only after its pass threshold', () => {
  const result = progress({ 'l4-cp': direct('l4-cp') });
  assert.equal(result.completedUnitCount, 1);
  assert.equal(result.percentage, 17);
});

test('Reading counts only when its scored evidence passed', () => {
  assert.equal(progress({ 'l4-reading': direct('l4-reading', false) }).completedUnitCount, 0);
  assert.equal(progress({ 'l4-reading': direct('l4-reading') }).completedUnitCount, 1);
});

test('published Listening counts only after a passing comprehension result', () => {
  assert.equal(progress({ 'l4-listening': direct('l4-listening', false) }).completedUnitCount, 0);
  assert.equal(progress({ 'l4-listening': direct('l4-listening') }).completedUnitCount, 1);
});

test('missing Listening is excluded instead of manufacturing a completion requirement', () => {
  const lesson = {
    id: 99, number: 99, level: 'A0', title: '', subtitle: '', description: '', slidesCount: 1,
    slides: [{
      id: 1, eyebrow: '', title: '', subtitle: '', activities: [
        { kind: 'listening', id: 'missing', assetId: 'missing', audioStatus: 'missing', transcript: '', questions: [], passCount: 1 },
      ],
    }],
  } as Lesson;
  assert.deepEqual(getRequiredLessonProgressUnits(lesson), []);
});

test('intentional Listening gaps in L9 and L11 do not add phantom units', async () => {
  for (const lessonNumber of [9, 11]) {
    const lesson = await loadLesson(lessonNumber, { admin: true });
    assert.ok(lesson);
    assert.equal(getRequiredLessonProgressUnits(lesson).some((unit) => unit.kind === 'listening'), false);
  }
});

test('completed Writing contributes progress while remaining PARTIAL and not passed', () => {
  const evidence = partial('l4-writing', true);
  assert.equal(progress({ [evidence.activityId]: evidence }).completedUnitCount, 1);
  assert.deepEqual([evidence.evidenceMode, evidence.passed], ['partial', false]);
});

test('completed RolePlay contributes progress while remaining PARTIAL and not passed', () => {
  const evidence = partial('l4-roleplay');
  assert.equal(progress({ [evidence.activityId]: evidence }).completedUnitCount, 1);
  assert.deepEqual([evidence.evidenceMode, evidence.passed], ['partial', false]);
});

test('optional speaking is absent from generated requirements for all lessons', async () => {
  for (const meta of LESSONS_META) {
    const lesson = await loadLesson(meta.number, { admin: true });
    assert.ok(lesson);
    assert.equal(getRequiredLessonProgressUnits(lesson).some((unit) => unit.kind === ('recording' as never)), false);
  }
});

test('passing only the quiz is partial lesson progress, never completion', () => {
  const result = progress({}, true);
  assert.equal(result.percentage, 17);
  assert.equal(result.completed, false);
});

test('all required activities and quiz produce exactly 100 percent', () => {
  const result = progress({
    'l4-cp': direct('l4-cp'),
    'l4-reading': direct('l4-reading'),
    'l4-listening': direct('l4-listening'),
    'l4-writing': partial('l4-writing', true),
    'l4-roleplay': partial('l4-roleplay'),
  }, true);
  assert.deepEqual([result.percentage, result.completed, result.state], [100, true, 'completed']);
});

test('100 percent progress does not manufacture DIRECT objective mastery', () => {
  const evidence = partial('l4-writing', true);
  assert.equal(
    hasCompleteDirectObjectiveEvidence({
      objectiveIds: ['writing-objective'],
      checks: [check('writing-objective', evidence.activityId, 'writing')],
      evidence: { [evidence.activityId]: evidence },
    }),
    false
  );
});

test('course progress gives every lesson equal weight', () => {
  const definitions: LessonProgressDefinition[] = [
    { lessonNumber: 1, quizRequired: false, units: [{ activityId: 'small', kind: 'reading', requirement: 'pass', passCount: 4, total: 5 }] },
    { lessonNumber: 2, quizRequired: false, units: [
      { activityId: 'large-1', kind: 'reading', requirement: 'pass', passCount: 4, total: 5 },
      { activityId: 'large-2', kind: 'reading', requirement: 'pass', passCount: 4, total: 5 },
      { activityId: 'large-3', kind: 'reading', requirement: 'pass', passCount: 4, total: 5 },
    ] },
  ];
  assert.equal(getCourseProgressPercentage(definitions, { small: direct('small') }, []), 50);
});

test('local canonical cache survives refresh-shaped read/write', () => {
  const map = new Map<string, string>();
  const storage = { getItem: (key: string) => map.get(key) ?? null, setItem: (key: string, value: string) => void map.set(key, value) };
  const saved = {
    viewedSlides: ['l4_s11'],
    passedQuizzes: [4],
    activityEvidence: { 'l4-cp-recognize-text': direct('l4-cp-recognize-text') },
    reviewCards: {},
    activityAttempts: {},
    quizAttempts: {},
  };
  writeCachedProgress('user-1', saved, storage);
  assert.deepEqual(readCachedProgress('user-1', storage), saved);
});

test('activity merge never regresses a stronger passed result', () => {
  const merged = mergeActivityEvidence({ 'l4-cp': direct('l4-cp', true, 4) }, { 'l4-cp': direct('l4-cp', false, 2) });
  assert.deepEqual([merged['l4-cp'].passed, merged['l4-cp'].score], [true, 4]);
});

test('a repeated attempt upgrades failed evidence to passed evidence', () => {
  const merged = mergeActivityEvidence({ 'l4-cp': direct('l4-cp', false, 2) }, { 'l4-cp': direct('l4-cp', true, 4) });
  assert.deepEqual([merged['l4-cp'].passed, merged['l4-cp'].score], [true, 4]);
});

test('generated catalog matches all current lesson definitions', async () => {
  assert.equal(LESSON_PROGRESS_DEFINITIONS.length, 28);
  for (const meta of LESSONS_META) {
    const lesson = await loadLesson(meta.number, { admin: true });
    assert.ok(lesson);
    const generated = LESSON_PROGRESS_DEFINITIONS.find((item) => item.lessonNumber === meta.number);
    assert.ok(generated);
    assert.deepEqual(generated.units, getRequiredLessonProgressUnits(lesson));
    assert.equal(generated.quizRequired, (lesson.quiz?.length ?? 0) > 0);
  }
});

test('UI uses one activity-based percentage and no viewed-slide completion copy', () => {
  const listSource = readFileSync(new URL('../src/components/LessonList.tsx', import.meta.url), 'utf8');
  const barSource = readFileSync(new URL('../src/components/LessonProgress.tsx', import.meta.url), 'utf8');
  assert.match(listSource, /Общий прогресс курса/);
  assert.match(barSource, /Учебный прогресс урока/);
  assert.doesNotMatch(listSource, /Материал пройден|квизов пройдено/);
  assert.doesNotMatch(barSource, /Прогресс материала/);
});
