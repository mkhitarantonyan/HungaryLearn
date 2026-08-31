import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  getCourseProgressPercentage,
  getLessonProgressState,
  getRequiredLessonProgressUnits,
  sanitizeActivityEvidence,
  type LessonProgressDefinition,
} from '../src/utils/lessonProgress.ts';
import { LESSON_PROGRESS_DEFINITIONS } from '../src/data/lessonProgressCatalog.ts';
import { LESSONS_META, loadLesson } from '../src/data/lessons/index.ts';
import {
  assertLessonProgressCatalogCurrent,
  assertUniqueProgressUnitIds,
  buildLessonProgressDefinitions,
  renderLessonProgressCatalog,
} from '../scripts/generate-lesson-progress-catalog.ts';
import {
  beginProgressHydration,
  isCurrentProgressHydration,
  mergeActivityEvidence,
} from '../src/utils/progressMerge.ts';
import {
  emptyProgressData,
  mergeProgressData,
  readCachedProgress,
  writeCachedProgress,
} from '../src/utils/userStore.ts';
import { writingEvidence, validateRolePlayGraph } from '../src/utils/activityUtils.ts';
import { RolePlay } from '../src/components/activities/RolePlay.tsx';
import { WritingTask } from '../src/components/activities/WritingTask.tsx';
import { validActivityEvidence } from '../functions/src/progress/validation.ts';
import { gradeActivityAttempt, gradeQuizAttempt } from '../functions/src/progress/grading.ts';
import type { ActivityEvidence, LessonActivity, RolePlayData, WritingTaskData } from '../src/types.ts';

const direct = (activityId: string, passed: boolean, score: number, total: number): ActivityEvidence => ({
  activityId,
  attempted: true,
  completed: true,
  evidenceMode: 'direct',
  passed,
  score,
  total,
});

function permutations<T>(items: T[]): T[][] {
  if (items.length <= 1) return [items];
  return items.flatMap((item, index) =>
    permutations([...items.slice(0, index), ...items.slice(index + 1)]).map((rest) => [item, ...rest])
  );
}

test('progress catalog generation is deterministic, current, and stale content fails closed', async () => {
  const first = await buildLessonProgressDefinitions();
  const second = await buildLessonProgressDefinitions();
  const firstSource = renderLessonProgressCatalog(first);
  assert.equal(firstSource, renderLessonProgressCatalog(second));
  assert.equal(firstSource, readFileSync(new URL('../src/data/lessonProgressCatalog.ts', import.meta.url), 'utf8'));
  assert.throws(() => assertLessonProgressCatalogCurrent('stale', firstSource), /catalog is stale/i);
});

test('duplicate global activity ids and quiz-id conflicts are rejected', () => {
  const unit = { activityId: 'duplicate', kind: 'reading' as const, requirement: 'pass' as const, passCount: 1, total: 1 };
  assert.throws(() => assertUniqueProgressUnitIds([
    { lessonNumber: 1, quizRequired: true, units: [unit] },
    { lessonNumber: 2, quizRequired: true, units: [unit] },
  ]), /Duplicate progress activity id/);
  assert.throws(() => assertUniqueProgressUnitIds([
    { lessonNumber: 1, quizRequired: true, units: [{ ...unit, activityId: 'quiz:1' }] },
  ]), /conflicts with the lesson quiz unit/);
});

test('inventory is recomputed from lessons as 52/31/32/33/31 and 207 total units', async () => {
  const counts: Record<string, number> = {};
  let activities = 0;
  for (const meta of LESSONS_META) {
    const lesson = await loadLesson(meta.number, { admin: true });
    assert.ok(lesson);
    const units = getRequiredLessonProgressUnits(lesson);
    activities += units.length;
    for (const unit of units) counts[unit.kind] = (counts[unit.kind] ?? 0) + 1;
  }
  assert.deepEqual(counts, { listening: 32, controlledPractice: 52, reading: 31, writing: 33, rolePlay: 31 });
  assert.deepEqual([activities, LESSONS_META.length, activities + LESSONS_META.length], [179, 28, 207]);
});

test('all progress Listening units are published, scorable, physical, and only L5 shares an asset', async () => {
  const listening: Array<{ lesson: number; activity: Extract<LessonActivity, { kind: 'listening' }> }> = [];
  for (const meta of LESSONS_META) {
    const lesson = await loadLesson(meta.number, { admin: true });
    assert.ok(lesson);
    for (const slide of lesson.slides) for (const activity of slide.activities ?? []) {
      if (activity.kind === 'listening' && getRequiredLessonProgressUnits(lesson).some((unit) => unit.activityId === activity.id)) {
        listening.push({ lesson: lesson.number, activity });
      }
    }
  }
  const byAsset = new Map<string, typeof listening>();
  for (const item of listening) {
    assert.equal(item.activity.audioStatus, 'published');
    assert.ok(item.activity.questions.length > 0);
    assert.ok(Number.isInteger(item.activity.passCount) && item.activity.passCount! >= 1 && item.activity.passCount! <= item.activity.questions.length);
    const file = new URL(`../public/audio/${item.activity.assetId}.mp3`, import.meta.url);
    assert.ok(existsSync(file) && statSync(file).size > 0);
    byAsset.set(item.activity.assetId, [...(byAsset.get(item.activity.assetId) ?? []), item]);
  }
  const shared = [...byAsset.entries()].filter(([, items]) => items.length > 1);
  assert.deepEqual(shared.map(([asset, items]) => [asset, items.map((item) => item.activity.id)]), [[
    'l5_listening_time',
    ['l5-listening-number-dictation', 'l5-listening-time-schedule'],
  ]]);
  assert.deepEqual([listening.length, byAsset.size], [32, 31]);
});

test('unknown and malformed persisted evidence is ignored without changing denominator or numerator', () => {
  const definition = LESSON_PROGRESS_DEFINITIONS[0];
  const unit = definition.units.find((item) => item.requirement === 'pass')!;
  const malformed = {
    [unit.activityId]: { activityId: unit.activityId, attempted: true, completed: true, evidenceMode: 'direct', passed: true },
    unknown: direct('unknown', true, 999, 999),
  };
  assert.deepEqual(sanitizeActivityEvidence([definition], malformed), {});
  const snapshot = getLessonProgressState({ definition, evidence: malformed as never, quizPassed: false });
  assert.deepEqual([snapshot.completedUnitCount, snapshot.totalUnitCount, snapshot.percentage], [0, definition.units.length + 1, 0]);
});

test('evidence merge implements NONE < PARTIAL < DIRECT and is permutation-stable', () => {
  const activityId = 'same';
  const candidates: ActivityEvidence[] = [
    { activityId, attempted: true, completed: true, evidenceMode: 'none', passed: false, score: 5, total: 5 },
    { activityId, attempted: true, completed: true, evidenceMode: 'partial', passed: false },
    direct(activityId, false, 2, 5),
    direct(activityId, true, 4, 5),
  ];
  for (const order of permutations(candidates)) {
    const merged = order.reduce((store, item) => mergeActivityEvidence(store, { [activityId]: item }), {} as Record<string, ActivityEvidence>);
    assert.deepEqual(merged[activityId], candidates[3]);
  }
});

test('failed -> passed -> failed keeps historical completion without rewriting best score', () => {
  const failed = direct('attempt', false, 2, 5);
  const passed = direct('attempt', true, 4, 5);
  const first = mergeActivityEvidence({}, { attempt: failed });
  const second = mergeActivityEvidence(first, { attempt: passed });
  const third = mergeActivityEvidence(second, { attempt: failed });
  assert.deepEqual(third.attempt, passed);
});

test('Writing requires meaningful trimmed length, full self-review, and explicit submit UI', () => {
  assert.equal(writingEvidence('', true).completed, false);
  assert.equal(writingEvidence('                    ', true).completed, false);
  assert.equal(writingEvidence('достаточный текст, потом удалён', true).completed, true);
  assert.equal(writingEvidence('', true).completed, false);
  assert.equal(writingEvidence('Достаточно длинный ответ.', false).completed, false);
  let emitted = 0;
  const data: WritingTaskData = { kind: 'writing', id: 'w', prompt: 'prompt', rubric: ['check'], modelAnswer: ['model'] };
  renderToStaticMarkup(React.createElement(WritingTask, { data, onEvidence: () => { emitted += 1; } }));
  assert.equal(emitted, 0);
});

test('RolePlay opening emits nothing and every course completion path contains a learner action', async () => {
  let emitted = 0;
  let sample: RolePlayData | undefined;
  for (const meta of LESSONS_META) {
    const lesson = await loadLesson(meta.number, { admin: true });
    assert.ok(lesson);
    for (const slide of lesson.slides) for (const activity of slide.activities ?? []) if (activity.kind === 'rolePlay') {
      sample ??= activity;
      assert.deepEqual(validateRolePlayGraph(activity), []);
    }
  }
  assert.ok(sample);
  renderToStaticMarkup(React.createElement(RolePlay, { data: sample, onEvidence: () => { emitted += 1; } }));
  assert.equal(emitted, 0);
});

test('server rejects raw DIRECT, unknown IDs, wrong totals, extra fields and raw score objects', async () => {
  const unit = LESSON_PROGRESS_DEFINITIONS[0].units.find((item) => item.requirement === 'pass')!;
  const spoof = direct(unit.activityId, true, unit.passCount!, unit.total!);
  assert.equal(validActivityEvidence({ [unit.activityId]: spoof }), null);
  assert.equal(validActivityEvidence({ unknown: direct('unknown', true, 1, 1) }), null);
  assert.equal(validActivityEvidence({ [unit.activityId]: { ...spoof, total: unit.total! + 1 } }), null);
  assert.equal(validActivityEvidence({ [unit.activityId]: { ...spoof, injected: true } }), null);
  assert.equal(await gradeQuizAttempt({ lessonNumber: 1, score: 999, total: 999 }), null);
});

test('server recomputes scored activity and quiz attempts from canonical answers', async () => {
  const lesson = await loadLesson(1, { admin: true });
  assert.ok(lesson?.quiz);
  const controlled = lesson.slides.flatMap((slide) => slide.activities ?? [])
    .find((item): item is Extract<LessonActivity, { kind: 'controlledPractice' }> => item.kind === 'controlledPractice')!;
  const answers = Object.fromEntries(controlled.exercises.map((exercise) => [
    exercise.id,
    exercise.kind === 'singleChoice' ? exercise.correctIndex : exercise.accept[0],
  ]));
  const evidence = await gradeActivityAttempt({ activityId: controlled.id, answers });
  assert.ok(evidence?.passed);
  assert.equal(evidence.score, controlled.exercises.length);
  const quiz = await gradeQuizAttempt({ lessonNumber: 1, answers: lesson.quiz.map((item) => item.correctIndex) });
  assert.deepEqual(quiz, { lessonNumber: 1, score: lesson.quiz.length, total: lesson.quiz.length });
});

test('anonymous progress merges into one UID, cache keys isolate UIDs, and stale hydration loses authority', () => {
  const canonical = LESSON_PROGRESS_DEFINITIONS[0].units.find((item) => item.requirement === 'pass')!;
  const evidence = direct(canonical.activityId, true, canonical.passCount!, canonical.total!);
  const anonymous = { ...emptyProgressData(), viewedSlides: ['l1_s1'], activityEvidence: { [canonical.activityId]: evidence } };
  const server = { ...emptyProgressData(), viewedSlides: ['l1_s2'], passedQuizzes: [1] };
  const merged = mergeProgressData(anonymous, server);
  assert.deepEqual(new Set(merged.viewedSlides), new Set(['l1_s1', 'l1_s2']));
  assert.deepEqual(merged.passedQuizzes, [1]);
  assert.deepEqual(merged.activityEvidence?.[canonical.activityId], evidence);

  const values = new Map<string, string>();
  const storage = { getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => void values.set(key, value) };
  writeCachedProgress('uid-a', merged, storage);
  writeCachedProgress('uid-b', emptyProgressData(), storage);
  assert.equal(readCachedProgress('uid-b', storage).activityEvidence?.[canonical.activityId], undefined);

  const revision = { current: 0 };
  const requestA = beginProgressHydration(revision);
  const requestB = beginProgressHydration(revision);
  assert.equal(isCurrentProgressHydration(revision, requestA), false);
  assert.equal(isCurrentProgressHydration(revision, requestB), true);
});

test('two stale devices merge disjoint achievements without a lost update', () => {
  const units = LESSON_PROGRESS_DEFINITIONS[0].units.filter((item) => item.requirement === 'pass').slice(0, 2);
  const a = direct(units[0].activityId, true, units[0].passCount!, units[0].total!);
  const b = direct(units[1].activityId, true, units[1].passCount!, units[1].total!);
  const afterA = mergeActivityEvidence({}, { [a.activityId]: a });
  const afterB = mergeActivityEvidence(afterA, { [b.activityId]: b });
  assert.deepEqual(Object.keys(afterB).sort(), [a.activityId, b.activityId].sort());
  const source = readFileSync(new URL('../functions/src/progress/routes.ts', import.meta.url), 'utf8');
  assert.match(source, /firestore\.runTransaction/);
});

test('lesson/course progress is bounded and raw equal-lesson aggregation reaches exact checkpoints', () => {
  const definitions: LessonProgressDefinition[] = Array.from({ length: 28 }, (_, index) => ({
    lessonNumber: index + 1,
    quizRequired: false,
    units: [{ activityId: `u${index + 1}`, kind: 'reading', requirement: 'pass', passCount: 1, total: 1 }],
  }));
  const evidence: Record<string, ActivityEvidence> = {};
  assert.equal(getCourseProgressPercentage(definitions, evidence, []), 0);
  evidence.u1 = direct('u1', true, 1, 1);
  assert.equal(getCourseProgressPercentage(definitions, evidence, []), 4);
  for (let index = 2; index <= 14; index += 1) evidence[`u${index}`] = direct(`u${index}`, true, 1, 1);
  assert.equal(getCourseProgressPercentage(definitions, evidence, []), 50);
  for (let index = 15; index <= 28; index += 1) evidence[`u${index}`] = direct(`u${index}`, true, 1, 1);
  assert.equal(getCourseProgressPercentage(definitions, evidence, []), 100);
  const zero = getLessonProgressState({ definition: { lessonNumber: 99, quizRequired: false, units: [] }, evidence: {}, quizPassed: false });
  assert.deepEqual([zero.percentage, zero.completed, zero.state], [0, false, 'not_started']);
  for (const definition of definitions) {
    const value = getLessonProgressState({ definition, evidence, quizPassed: false }).percentage;
    assert.ok(value >= 0 && value <= 100);
  }

  const rawDefinitions: LessonProgressDefinition[] = [
    { lessonNumber: 1, quizRequired: false, units: [{ activityId: 'empty', kind: 'reading', requirement: 'pass', passCount: 1, total: 1 }] },
    { lessonNumber: 2, quizRequired: false, units: [1, 2, 3].map((index) => ({ activityId: `raw-${index}`, kind: 'reading' as const, requirement: 'pass' as const, passCount: 1, total: 1 })) },
  ];
  const rawEvidence = {
    'raw-1': direct('raw-1', true, 1, 1),
    'raw-2': direct('raw-2', true, 1, 1),
  };
  assert.equal(getCourseProgressPercentage(rawDefinitions, rawEvidence, []), 33);
});
