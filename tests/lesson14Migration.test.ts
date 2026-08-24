import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

import { LESSON_14 } from '../src/data/lessons/lesson14.ts';
import { LESSONS_META } from '../src/data/lessons/index.ts';
import type { ActivityEvidence, LessonActivity } from '../src/types.ts';
import {
  describeExitCheckStatus,
  listeningEvidence,
  recordingCompletionEvidence,
  validateActivity,
  validateExitCheckReferences,
  validateLessonQuestionIds,
  writingEvidence,
} from '../src/utils/activityUtils.ts';

const ACTIVITIES = LESSON_14.slides.flatMap((slide) => slide.activities ?? []);

function sha256(url: URL): string {
  return createHash('sha256').update(readFileSync(url)).digest('hex').toUpperCase();
}

function findActivity<TKind extends LessonActivity['kind']>(
  id: string,
  kind: TKind
): Extract<LessonActivity, { kind: TKind }> {
  const activity = ACTIVITIES.find((candidate) => candidate.id === id);
  assert.ok(activity, `Missing L14 activity ${id}`);
  assert.equal(activity.kind, kind);
  return activity as Extract<LessonActivity, { kind: TKind }>;
}

function directEvidence(activityId: string): ActivityEvidence {
  return { activityId, attempted: true, completed: true, passed: true, evidenceMode: 'direct' };
}

test('L14 preserves identity, four objective IDs, quiz IDs, and eleven narration slots', () => {
  assert.equal(LESSON_14.id, 14);
  assert.equal(LESSON_14.number, 14);
  assert.equal(LESSON_14.level, 'A1');
  assert.equal(LESSON_14.slidesCount, 11);
  assert.deepEqual(LESSON_14.slides.map((slide) => slide.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  assert.deepEqual(LESSON_14.objectives?.map((objective) => objective.id), [
    'l14_describe-routine',
    'l14_form-reflexive',
    'l14_use-reflexive',
    'l14_tell-routine-time',
  ]);
  assert.deepEqual(LESSON_14.quiz?.map((question) => question.id), [1401, 1402, 1403, 1404, 1405, 1406]);
  for (let slide = 1; slide <= 11; slide += 1) {
    assert.equal(existsSync(new URL(`../public/audio/14.${slide}.mp3`, import.meta.url)), true);
  }
});

test('L14 has exactly seven unique generic activities and one ExitCheck row per objective', () => {
  assert.deepEqual(ACTIVITIES.map((activity) => activity.id), [
    'l14-cp-routine-forms',
    'l14-cp-routine-context',
    'l14-reading-daily-routine',
    'l14-listening-routine',
    'l14-record-daily-routine',
    'l14-writing-daily-routine',
    'l14-exit-check',
  ]);
  assert.deepEqual(
    Object.fromEntries(['controlledPractice', 'reading', 'listening', 'writing', 'recording', 'exitCheck'].map((kind) => [
      kind,
      ACTIVITIES.filter((activity) => activity.kind === kind).length,
    ])),
    { controlledPractice: 2, reading: 1, listening: 1, writing: 1, recording: 1, exitCheck: 1 }
  );
  assert.equal(new Set(ACTIVITIES.map((activity) => activity.id)).size, 7);
  assert.deepEqual(ACTIVITIES.flatMap(validateActivity), []);
  assert.deepEqual(validateLessonQuestionIds(ACTIVITIES), []);

  const exit = findActivity('l14-exit-check', 'exitCheck');
  assert.deepEqual(exit.checks.map((check) => check.objectiveId), LESSON_14.objectives?.map((objective) => objective.id));
  assert.equal(new Set(exit.checks.map((check) => check.objectiveId)).size, 4);
  assert.deepEqual(validateExitCheckReferences(
    exit,
    LESSON_14.objectives?.map((objective) => objective.id) ?? [],
    ACTIVITIES.map((activity) => activity.id)
  ), []);
});

test('bounded form and context practice use exact approved thresholds and answers', () => {
  const forms = findActivity('l14-cp-routine-forms', 'controlledPractice');
  assert.equal(forms.exercises.length, 6);
  assert.equal(forms.passCount, 5);
  assert.ok(forms.exercises.every((exercise) => exercise.kind === 'textInput'));
  assert.deepEqual(forms.exercises.map((exercise) => 'accept' in exercise ? exercise.accept[0] : ''), [
    'mosakodom', 'felöltözöm', 'lefekszem', 'eszem', 'mosakodsz', 'felöltözik',
  ]);

  const context = findActivity('l14-cp-routine-context', 'controlledPractice');
  assert.equal(context.exercises.length, 5);
  assert.equal(context.passCount, 4);
  assert.deepEqual(context.exercises.map((exercise) =>
    exercise.kind === 'singleChoice' ? exercise.options[exercise.correctIndex] : ''
  ), ['Mosakodom', 'Felöltözöm', 'Lefekszem', 'Reggelizem', 'Fésülködöm']);
});

test('ReadingTask checks sequence, actions, and times rather than suffix spotting', () => {
  const reading = findActivity('l14-reading-daily-routine', 'reading');
  assert.ok(reading.content);
  assert.equal(reading.content.type, 'prose');
  assert.equal(reading.questions.length, 5);
  assert.equal(reading.passCount, 4);
  assert.match(reading.questions.map((question) => question.question).join(' '), /Во сколько|после|Когда|раньше/);
  assert.doesNotMatch(reading.instructions ?? '', /найди.*суффикс/i);
});

test('published routine assessment is DIRECT with no TTS or narration fallback', () => {
  const listening = findActivity('l14-listening-routine', 'listening');
  assert.equal(listening.assetId, 'l14_listening_routine');
  assert.equal(listening.audioStatus, 'published');
  assert.equal(listening.questions.length, 5);
  assert.equal(listening.passCount, 4);
  assert.equal(existsSync(new URL('../public/audio/l14_listening_routine.mp3', import.meta.url)), true);
  assert.deepEqual(listeningEvidence(listening, 5, 5), {
    passed: true, evidenceMode: 'direct', score: 5, total: 5,
  });
  const source = readFileSync(new URL('../src/data/lessons/lesson14.ts', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|SpeechSynthesisUtterance|getVoices|voiceschanged|browser TTS/i);
  assert.doesNotMatch(listening.assetId, /^14\./);
});

test('writing and recording stay review-only and enforce the connected-routine brief', () => {
  const writing = findActivity('l14-writing-daily-routine', 'writing');
  const recording = findActivity('l14-record-daily-routine', 'recording');
  assert.match(writing.prompt, /6–8.*шесть действий.*три выражения времени/s);
  assert.equal(writing.modelAnswer.length, 6);
  assert.equal(writing.rubric.length, 3);
  const writingScore = writingEvidence(writing.modelAnswer.join(' '), true);
  assert.deepEqual(writingScore, { completed: true, passed: false, evidenceMode: 'partial' });
  assert.match(recording.instructions ?? '', /проверь последовательность и формы глаголов/);
  assert.equal(recording.rubric?.length, 3);
  assert.equal(recordingCompletionEvidence(recording.id).evidenceMode, 'partial');
  assert.equal(recordingCompletionEvidence(recording.id).passed, false);
});

test('ExitCheck resolves the required PARTIAL DIRECT PARTIAL PARTIAL vector', () => {
  const exit = findActivity('l14-exit-check', 'exitCheck');
  const listening = findActivity('l14-listening-routine', 'listening');
  const writing = writingEvidence('Reggel hétkor felébredek. Utána mosakodom. Fél nyolckor reggelizem.', true);
  const evidence: Record<string, ActivityEvidence> = {
    'l14-writing-daily-routine': { activityId: 'l14-writing-daily-routine', attempted: true, selfReviewed: true, ...writing },
    'l14-cp-routine-forms': directEvidence('l14-cp-routine-forms'),
    'l14-cp-routine-context': directEvidence('l14-cp-routine-context'),
    'l14-listening-routine': {
      activityId: 'l14-listening-routine', attempted: true, completed: true,
      ...listeningEvidence(listening, 5, 5),
    },
    'l14-record-daily-routine': recordingCompletionEvidence('l14-record-daily-routine'),
  };
  assert.deepEqual(Object.fromEntries(exit.checks.map((check) => [
    check.objectiveId,
    describeExitCheckStatus(check, evidence[check.activityId], evidence).kind,
  ])), {
    'l14_describe-routine': 'partial-review',
    'l14_form-reflexive': 'direct-met',
    'l14_use-reflexive': 'partial-review',
    'l14_tell-routine-time': 'partial-review',
  });
});

test('-ik, reflexive meaning, enrichment, and lesson boundaries stay distinct', () => {
  const source = readFileSync(new URL('../src/data/lessons/lesson14.ts', import.meta.url), 'utf8');
  const scored = JSON.stringify({ activities: ACTIVITIES, quiz: LESSON_14.quiz });
  const objective = LESSON_14.objectives?.find((candidate) => candidate.id === 'l14_form-reflexive');
  assert.match(objective?.text ?? '', /формы изученных.*глаголов.*настоящем времени/);
  assert.doesNotMatch(objective?.text ?? '', /с помощью -kodik/);
  assert.match(source, /-ik-глаголы, но не возвратные действия/);
  assert.match(source, /eszik → eszem/);
  assert.match(source, /не являются формулой/);
  assert.match(source, /не объявляем разговорные варианты «невозможным венгерским»/);
  assert.match(source, /<b>öltözködik<\/b>.*обогащение/s);
  assert.doesNotMatch(scored, /öltözködik|magamat|magadat|magát/);
  assert.doesNotMatch(source, /szoktam\s+lefeküdni/);
  assert.doesNotMatch(source, /Tegnap reggel felébredtem/);
  assert.doesNotMatch(source, /-nak\/-nek|nekem van|restaurant|ресторан/i);
  assert.ok((LESSON_14.vocabulary ?? []).every((item) => item.ipa === undefined));
});

test('Q1401-Q1406 are unique objective-aligned retrieval and metadata matches', () => {
  for (const question of LESSON_14.quiz ?? []) {
    assert.equal(new Set(question.options).size, question.options.length, `quiz ${question.id}`);
    assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length);
    assert.doesNotMatch(question.question, /урок|lesson|лексически|термин/i);
    assert.doesNotMatch(question.options.join(' '), /magamat|Tegnap|szoktam/);
  }
  assert.equal(LESSON_14.quiz?.find((question) => question.id === 1401)?.options[0], 'mosakodom');
  assert.equal(LESSON_14.quiz?.find((question) => question.id === 1402)?.options[1], 'eszem');
  assert.equal(LESSON_14.quiz?.find((question) => question.id === 1404)?.options[1], 'Reggel felöltözöm.');
  assert.equal(LESSON_14.quiz?.find((question) => question.id === 1406)?.options[0], 'Általában éjfél körül fekszem le.');

  const meta = LESSONS_META.find((candidate) => candidate.id === 14);
  assert.ok(meta);
  assert.equal(meta.title, LESSON_14.title);
  assert.equal(meta.subtitle, LESSON_14.subtitle);
  assert.equal(meta.description, LESSON_14.description);
  assert.equal(meta.level, LESSON_14.level);
  assert.equal(meta.slidesCount, LESSON_14.slidesCount);
  assert.equal(sha256(new URL('../src/data/lessons/lesson15.ts', import.meta.url)), 'A7A143F7E0D5B029D3F1788868A839516D2C1C373BF7EE31C36C91DCCA15ED85');
});
