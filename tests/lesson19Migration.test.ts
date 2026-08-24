import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { LESSON_19 } from '../src/data/lessons/lesson19.ts';
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

const activities = LESSON_19.slides.flatMap((slide) => slide.activities ?? []);
const source = readFileSync(new URL('../src/data/lessons/lesson19.ts', import.meta.url), 'utf8');
const hash = (url: URL) => createHash('sha256').update(readFileSync(url)).digest('hex').toUpperCase();
const direct = (activityId: string): ActivityEvidence => ({ activityId, attempted: true, completed: true, passed: true, evidenceMode: 'direct' });

function find<T extends LessonActivity['kind']>(id: string, kind: T): Extract<LessonActivity, { kind: T }> {
  const activity = activities.find((candidate) => candidate.id === id);
  assert.ok(activity, `missing ${id}`);
  assert.equal(activity.kind, kind);
  return activity as Extract<LessonActivity, { kind: T }>;
}

test('L19 preserves identity and exact bounded objectives', () => {
  assert.deepEqual([LESSON_19.id, LESSON_19.number, LESSON_19.level, LESSON_19.slidesCount], [19, 19, 'A2', 11]);
  assert.deepEqual(LESSON_19.slides.map((slide) => slide.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  assert.deepEqual(LESSON_19.objectives?.map((objective) => objective.id), [
    'l19_form-future',
    'l19_conjugate-fog',
    'l19_use-future-plans',
    'l19_distinguish-tenses',
    'l19_make-predictions',
  ]);
  assert.deepEqual(LESSON_19.objectives?.map((objective) => objective.text), [
    'Образовывать изученные утвердительные и отрицательные конструкции будущего с fog + инфинитив.',
    'Спрягать fog по шести лицам в изученной неопределённой парадигме.',
    'Описывать 3 простых будущих плана с изученными маркерами времени.',
    'Различать настоящее, знакомое прошедшее и fog-будущее в коротких фразах на слух и в тексте.',
    'Формулировать 3 простых прогноза с szerintem и изученной конструкцией fog + инфинитив.',
  ]);
  for (let slide = 1; slide <= 11; slide += 1) {
    assert.equal(existsSync(new URL(`../public/audio/19.${slide}.mp3`, import.meta.url)), true, `missing narration 19.${slide}.mp3`);
  }
});

test('L19 has exactly eight valid activities and five-row ExitCheck', () => {
  assert.deepEqual(activities.map((activity) => activity.id), [
    'l19-cp-future-forms',
    'l19-cp-fog-conjugation',
    'l19-cp-present-vs-fog',
    'l19-cp-tense-reading-sort',
    'l19-listening-future',
    'l19-writing-plans-predictions',
    'l19-recording-plans-predictions',
    'l19-exit-check',
  ]);
  assert.deepEqual(
    Object.fromEntries(['controlledPractice', 'listening', 'writing', 'recording', 'exitCheck'].map((kind) => [kind, activities.filter((activity) => activity.kind === kind).length])),
    { controlledPractice: 4, listening: 1, writing: 1, recording: 1, exitCheck: 1 },
  );
  assert.equal(new Set(activities.map((activity) => activity.id)).size, 8);
  assert.deepEqual(activities.flatMap(validateActivity), []);
  assert.deepEqual(validateLessonQuestionIds(activities), []);
  const exit = find('l19-exit-check', 'exitCheck');
  const objectives = LESSON_19.objectives?.map((objective) => objective.id) ?? [];
  assert.deepEqual(exit.checks.map((check) => check.objectiveId), objectives);
  assert.equal(new Set(exit.checks.map((check) => check.objectiveId)).size, 5);
  assert.deepEqual(validateExitCheckReferences(exit, objectives, activities.map((activity) => activity.id)), []);
});

test('future form and fog conjugation practice are direct, bounded, and thresholded', () => {
  const future = find('l19-cp-future-forms', 'controlledPractice');
  const conjugation = find('l19-cp-fog-conjugation', 'controlledPractice');
  const presentVsFog = find('l19-cp-present-vs-fog', 'controlledPractice');
  const tenseSort = find('l19-cp-tense-reading-sort', 'controlledPractice');
  assert.deepEqual(
    [future.exercises.length, future.passCount, conjugation.exercises.length, conjugation.passCount, presentVsFog.exercises.length, presentVsFog.passCount, tenseSort.exercises.length, tenseSort.passCount],
    [10, 8, 6, 6, 6, 5, 10, 8],
  );
  assert.deepEqual(conjugation.exercises.flatMap((exercise) => exercise.kind === 'fillGap' ? exercise.accept : []), ['fogok', 'fogsz', 'fog', 'fogunk', 'fogtok', 'fognak']);
  const controlledText = [future, conjugation, presentVsFog, tenseSort].flatMap((activity) => activity.exercises).map((exercise) => JSON.stringify(exercise)).join(' ');
  for (const definite of ['fogom', 'fogod', 'fogja', 'fogjuk', 'fogjátok', 'fogják']) {
    assert.doesNotMatch(controlledText, new RegExp(`\\b${definite}\\b`));
  }
});

test('future grammar and word-order guidance avoid the legacy overclaims', () => {
  assert.match(source, /инфинитив \+ спрягаемая форма fog/);
  assert.match(source, /порядок слов зависит от фокуса/);
  assert.match(source, /не считай другой порядок автоматически ошибочным/);
  assert.match(source, /Holnap nem fogok dolgozni/);
  assert.match(source, /Holnap dolgozni fogsz\?/);
  assert.doesNotMatch(source, /обычный порядок слов[^\n]{0,180}а не/i);
  assert.doesNotMatch(source, /выбор часто зависит от степени уверенности/i);
});

test('definite fog is explicitly recognition-only', () => {
  for (const form of ['fogom', 'fogod', 'fogja', 'fogjuk', 'fogjátok', 'fogják']) assert.match(source, new RegExp(form));
  assert.match(source, /ЗНАКОМСТВО С ОПРЕДЕЛЁННЫМИ ФОРМАМИ/);
  assert.match(source, /достаточно узнавать этот контраст/);
  assert.match(source, /не является условием прохождения L19/);
  assert.match(source, /Olvasni fogok egy könyvet/);
  assert.match(source, /El fogom olvasni a könyvet/);
  assert.match(source, /Holnap napos idő lesz/);
  assert.match(source, /lesz.*будущая форма.*van \/ lenni/s);
  const quizText = JSON.stringify(LESSON_19.quiz);
  for (const form of ['fogom', 'fogod', 'fogja', 'fogjuk', 'fogjátok', 'fogják']) assert.doesNotMatch(quizText, new RegExp(`\\b${form}\\b`));
});

test('present-for-future plans and predictions are functionally contrasted without majd', () => {
  assert.match(source, /Holnap Budapestre megyek/);
  assert.match(source, /Holnap Budapestre fogok menni/);
  assert.match(source, /Обе конструкции могут обозначать реальное будущее/);
  assert.match(source, /не выводи.*жёсткое правило/is);
  assert.match(source, /Szerintem holnap esni fog/);
  assert.match(source, /Szerintem Anna tanulni fog/);
  assert.doesNotMatch(source, /majd/i);
});

test('tense reading and published dedicated listening make mixed tense evidence DIRECT', () => {
  const reading = find('l19-cp-tense-reading-sort', 'controlledPractice');
  const listening = find('l19-listening-future', 'listening');
  assert.equal(reading.exercises.length, 10);
  assert.equal(reading.passCount, 8);
  assert.equal(listening.assetId, 'l19_listening_future');
  assert.equal(listening.audioStatus, 'published');
  assert.equal(listening.questions.length, 5);
  assert.equal(listening.passCount, 4);
  assert.equal(existsSync(new URL('../public/audio/l19_listening_future.mp3', import.meta.url)), true);
  assert.equal(listeningEvidence(listening, 5, 5).evidenceMode, 'direct');
  assert.match(listening.transcript, /Tegnap Ádám otthon dolgozott/);
  assert.match(listening.transcript, /Ma a könyvtárban tanul/);
  assert.match(listening.transcript, /Holnap Budapestre fog utazni/);
  assert.match(listening.transcript, /Szerinte vasárnap esni fog/);
  assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|browser TTS/i);
  assert.doesNotMatch(listening.assetId, /^19\./);
});

test('plans and predictions have real writing and recording tasks and remain PARTIAL', () => {
  const writing = find('l19-writing-plans-predictions', 'writing');
  const recording = find('l19-recording-plans-predictions', 'recording');
  assert.equal(writing.modelAnswer.length, 6);
  assert.match(writing.prompt, /3 реальных плана и 3 простых прогноза/);
  assert.match(writing.prompt, /минимум два маркера времени/);
  assert.match(writing.prompt, /минимум два плана должны быть с fog \+ инфинитив/);
  assert.match(writing.prompt, /Прогнозы начни с szerintem/);
  assert.match(recording.instructions ?? '', /3 плана и 3 прогноза/);
  assert.equal(writingEvidence(writing.modelAnswer.join(' '), true).evidenceMode, 'partial');
  assert.equal(recordingCompletionEvidence(recording.id).evidenceMode, 'partial');
});

test('ExitCheck resolves DIRECT DIRECT PARTIAL DIRECT PARTIAL', () => {
  const listening = find('l19-listening-future', 'listening');
  const writing = find('l19-writing-plans-predictions', 'writing');
  const recording = find('l19-recording-plans-predictions', 'recording');
  const evidence: Record<string, ActivityEvidence> = {
    'l19-cp-future-forms': direct('l19-cp-future-forms'),
    'l19-cp-fog-conjugation': direct('l19-cp-fog-conjugation'),
    'l19-cp-tense-reading-sort': direct('l19-cp-tense-reading-sort'),
    'l19-listening-future': { activityId: 'l19-listening-future', attempted: true, completed: true, ...listeningEvidence(listening, 5, 5) },
    'l19-writing-plans-predictions': { activityId: 'l19-writing-plans-predictions', attempted: true, ...writingEvidence(writing.modelAnswer.join(' '), true) },
    'l19-recording-plans-predictions': recordingCompletionEvidence(recording.id),
  };
  const exit = find('l19-exit-check', 'exitCheck');
  assert.deepEqual(
    exit.checks.map((check) => describeExitCheckStatus(check, evidence[check.activityId], evidence).kind),
    ['direct-met', 'direct-met', 'partial-review', 'direct-met', 'partial-review'],
  );
});

test('quiz Q1901-Q1906 is unique, bounded, and IPA is removed', () => {
  assert.deepEqual(LESSON_19.quiz?.map((question) => question.id), [1901, 1902, 1903, 1904, 1905, 1906]);
  for (const question of LESSON_19.quiz ?? []) {
    assert.equal(new Set(question.options).size, question.options.length, `quiz ${question.id}`);
    assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length);
  }
  assert.equal(LESSON_19.quiz?.find((question) => question.id === 1902)?.options[1], 'fogsz');
  assert.equal(LESSON_19.quiz?.find((question) => question.id === 1903)?.options[0], 'Holnap nem fogok dolgozni.');
  assert.equal(LESSON_19.quiz?.find((question) => question.id === 1904)?.options[2], 'послезавтра');
  assert.match(LESSON_19.quiz?.find((question) => question.id === 1905)?.options[0] ?? '', /настоящего времени может выражать будущий план/);
  assert.equal(LESSON_19.quiz?.find((question) => question.id === 1906)?.options[0], 'Szerintem holnap esni fog.');
  assert.ok((LESSON_19.vocabulary ?? []).every((item) => item.ipa === undefined));
  assert.equal(LESSON_19.vocabulary?.length, 5);
  assert.deepEqual(LESSON_19.vocabulary?.map((item) => item.hu), ['holnapután', 'jövő héten', 'jövő hónapban', 'jövőre', 'szerintem']);
});

test('metadata matches and frozen L18/L20 remain byte-identical', () => {
  const meta = LESSONS_META.find((candidate) => candidate.id === 19);
  assert.ok(meta);
  assert.equal(meta.title, LESSON_19.title);
  assert.equal(meta.subtitle, LESSON_19.subtitle);
  assert.equal(meta.description, LESSON_19.description);
  assert.equal(hash(new URL('../src/data/lessons/lesson18.ts', import.meta.url)), 'F142CE15C573FC44EBDE4F1831AD7FB74BF522F60F5B3250419E36F06156A8D2');
  assert.equal(hash(new URL('../src/data/lessons/lesson20.ts', import.meta.url)), 'DCD4ED5B9ADDF1D7AD93582CE09E44F302B3DD4C34C8EED090D70CEA16F36AA4');
});
