import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  getLessonProgressState,
  hasCompleteDirectObjectiveEvidence,
} from '../src/utils/lessonProgress.ts';
import {
  listeningEvidence,
  writingEvidence,
} from '../src/utils/activityUtils.ts';
import type { ActivityEvidence, ExitCheckItem, ListeningTaskData } from '../src/types.ts';

const progress = (viewedSlideIds: string[], quizPassed = false) =>
  getLessonProgressState({
    lessonNumber: 4,
    requiredSlideIds: [1, 2, 3],
    viewedSlideIds,
    quizPassed,
  });

const check = (objectiveId: string, activityId: string, evidenceKind: ExitCheckItem['evidenceKind']): ExitCheckItem => ({
  objectiveId,
  activityId,
  evidenceKind,
});

const directEvidence = (activityId: string): ActivityEvidence => ({
  activityId,
  attempted: true,
  completed: true,
  evidenceMode: 'direct',
  passed: true,
});

test('A: no viewed slides and no passed quiz means not_started', () => {
  assert.deepEqual(progress([]), {
    state: 'not_started',
    started: false,
    contentCompleted: false,
    quizPassed: false,
    viewedSlideCount: 0,
    totalSlideCount: 3,
  });
});

test('B: some required slides viewed means in_progress', () => {
  const result = progress(['l4_s1', 'l4_s2', 'l40_s3', 'l4_s99']);
  assert.equal(result.state, 'in_progress');
  assert.equal(result.viewedSlideCount, 2);
  assert.equal(result.contentCompleted, false);
});

test('C: all required slides viewed without a passed quiz means content_completed', () => {
  const result = progress(['l4_s3', 'l4_s1', 'l4_s2', 'l4_s2']);
  assert.equal(result.state, 'content_completed');
  assert.equal(result.contentCompleted, true);
  assert.equal(result.quizPassed, false);
});

test('D: a passed quiz means quiz_passed, never an automatic mastered state', () => {
  const result = progress([], true);
  assert.equal(result.state, 'quiz_passed');
  assert.equal(result.contentCompleted, false);
  assert.equal('mastered' in result, false);
});

test('E: a passed quiz with missing required objective evidence does not qualify direct coverage', () => {
  assert.equal(progress([], true).state, 'quiz_passed');
  assert.equal(
    hasCompleteDirectObjectiveEvidence({
      objectiveIds: ['obj-listening'],
      checks: [check('obj-listening', 'listen-1', 'listening')],
      evidence: {},
    }),
    false
  );
});

test('F: completed writing PARTIAL cannot satisfy a DIRECT objective requirement', () => {
  const result = writingEvidence('Ez egy elegendően hosszú válasz.', true);
  const evidence: ActivityEvidence = {
    activityId: 'write-1',
    attempted: true,
    ...result,
  };

  assert.equal(evidence.evidenceMode, 'partial');
  assert.equal(
    hasCompleteDirectObjectiveEvidence({
      objectiveIds: ['obj-writing'],
      checks: [check('obj-writing', evidence.activityId, 'writing')],
      evidence: { [evidence.activityId]: evidence },
    }),
    false
  );
});

test('G: optional speaking self-practice is not an evidence source', () => {
  const typesSource = readFileSync(new URL('../src/types.ts', import.meta.url), 'utf8');
  const utilitySource = readFileSync(new URL('../src/utils/activityUtils.ts', import.meta.url), 'utf8');
  assert.doesNotMatch(typesSource, /RecordingTaskData|recordingCompleted/);
  assert.doesNotMatch(utilitySource, /recordingCompletionEvidence|case 'recording'/);
});

test('H: missing listening audio produces NONE and cannot satisfy required direct evidence', () => {
  const listening: ListeningTaskData = {
    kind: 'listening',
    id: 'listen-1',
    assetId: 'missing-audio',
    audioStatus: 'missing',
    transcript: 'Nem helyettesíti a hanganyagot.',
    passCount: 1,
    questions: [],
  };
  const result = listeningEvidence(listening, 1, 1);
  const evidence: ActivityEvidence = {
    activityId: listening.id,
    attempted: true,
    completed: true,
    ...result,
  };

  assert.equal(evidence.evidenceMode, 'none');
  assert.equal(evidence.passed, false);
  assert.equal(
    hasCompleteDirectObjectiveEvidence({
      objectiveIds: ['obj-listening'],
      checks: [check('obj-listening', evidence.activityId, 'listening')],
      evidence: { [evidence.activityId]: evidence },
    }),
    false
  );
});

test('I: every required objective needs its own complete DIRECT evidence chain', () => {
  const grammar = directEvidence('grammar-1');
  const reading = directEvidence('reading-1');
  assert.equal(
    hasCompleteDirectObjectiveEvidence({
      objectiveIds: ['obj-grammar', 'obj-reading'],
      checks: [
        check('obj-grammar', grammar.activityId, 'grammar'),
        check('obj-reading', reading.activityId, 'reading'),
      ],
      evidence: {
        [grammar.activityId]: grammar,
        [reading.activityId]: reading,
      },
    }),
    true
  );
});

test('lesson-list wording describes quiz and content signals without claiming verification or mastery', () => {
  const source = readFileSync(new URL('../src/components/LessonList.tsx', import.meta.url), 'utf8');
  assert.match(source, /Квиз пройден/);
  assert.match(source, /Материал пройден/);
  assert.match(source, /квизов пройдено/);
  assert.doesNotMatch(source, /Проверено|Освоено|Mastered/);
  assert.match(source, /статус: \$\{statusLabel\}/);
});

test('lesson navigation percentage is explicitly labelled as material progress', () => {
  const source = readFileSync(new URL('../src/components/LessonProgress.tsx', import.meta.url), 'utf8');
  assert.match(source, /Материал: \{step\} из \{total\}/);
  assert.match(source, /Прогресс материала: шаг/);
});

test('quiz completion copy reports a pass only at the 80 percent threshold', () => {
  const source = readFileSync(new URL('../src/components/LessonQuizModal.tsx', import.meta.url), 'utf8');
  assert.match(source, /const passed = percentage >= 80/);
  assert.match(source, /passed \? 'Тест пройден!' : 'Тест завершён'/);
  assert.doesNotMatch(source, /усвоили тему/);
});
