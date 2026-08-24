import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { LESSON_18 } from '../src/data/lessons/lesson18.ts';
import { LESSONS_META } from '../src/data/lessons/index.ts';
import {
  describeExitCheckStatus,
  listeningEvidence,
  recordingCompletionEvidence,
  validateActivity,
  validateExitCheckReferences,
  validateLessonQuestionIds,
  writingEvidence,
} from '../src/utils/activityUtils.ts';
import type { ActivityEvidence, LessonActivity } from '../src/types.ts';

const activities = LESSON_18.slides.flatMap((slide) => slide.activities ?? []);
const source = readFileSync(new URL('../src/data/lessons/lesson18.ts', import.meta.url), 'utf8');
const hash = (url: URL) => createHash('sha256').update(readFileSync(url)).digest('hex').toUpperCase();
const direct = (activityId: string): ActivityEvidence => ({ activityId, attempted: true, completed: true, passed: true, evidenceMode: 'direct' });

function find<T extends LessonActivity['kind']>(id: string, kind: T): Extract<LessonActivity, { kind: T }> {
  const activity = activities.find((candidate) => candidate.id === id);
  assert.ok(activity, `missing ${id}`);
  assert.equal(activity.kind, kind);
  return activity as Extract<LessonActivity, { kind: T }>;
}

test('L18 preserves identity and exact bounded objectives', () => {
  assert.deepEqual([LESSON_18.id, LESSON_18.number, LESSON_18.level, LESSON_18.slidesCount], [18, 18, 'A2', 12]);
  assert.deepEqual(LESSON_18.slides.map((slide) => slide.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  assert.deepEqual(LESSON_18.objectives?.map((objective) => objective.id), [
    'l18_form-infinitive',
    'l18_use-modal-verbs',
    'l18_express-necessity',
    'l18_express-desire',
    'l18_understand-modals',
  ]);
  assert.deepEqual(LESSON_18.objectives?.map((objective) => objective.text), [
    'Образовывать и узнавать изученные базовые инфинитивы на -ni.',
    'Выбирать и использовать изученные модели kell, lehet, tud, szeretnék и akarok с инфинитивом.',
    'Выражать необходимость, способность и разрешение/ситуационную возможность в изученных моделях kell, tud и lehet.',
    'Различать и выражать вежливое и прямое желание через szeretnék + инфинитив и akarok + инфинитив.',
    'Понимать функции изученных модальных конструкций в коротком диалоге на слух.',
  ]);
  for (let slide = 1; slide <= 12; slide += 1) {
    assert.equal(existsSync(new URL(`../public/audio/18.${slide}.mp3`, import.meta.url)), true, `missing narration 18.${slide}.mp3`);
  }
});

test('L18 has exactly eight valid activities and a five-row ExitCheck', () => {
  assert.deepEqual(activities.map((activity) => activity.id), [
    'l18-cp-infinitive-forms',
    'l18-cp-personal-infinitive',
    'l18-cp-desire-register',
    'l18-cp-modal-functions',
    'l18-listening-modals',
    'l18-writing-modal-responses',
    'l18-recording-modal-responses',
    'l18-exit-check',
  ]);
  assert.deepEqual(
    Object.fromEntries(['controlledPractice', 'listening', 'writing', 'recording', 'exitCheck'].map((kind) => [kind, activities.filter((activity) => activity.kind === kind).length])),
    { controlledPractice: 4, listening: 1, writing: 1, recording: 1, exitCheck: 1 },
  );
  assert.equal(new Set(activities.map((activity) => activity.id)).size, 8);
  assert.deepEqual(activities.flatMap(validateActivity), []);
  assert.deepEqual(validateLessonQuestionIds(activities), []);
  const exit = find('l18-exit-check', 'exitCheck');
  const objectives = LESSON_18.objectives?.map((objective) => objective.id) ?? [];
  assert.deepEqual(exit.checks.map((check) => check.objectiveId), objectives);
  assert.equal(new Set(exit.checks.map((check) => check.objectiveId)).size, 5);
  assert.deepEqual(validateExitCheckReferences(exit, objectives, activities.map((activity) => activity.id)), []);
});

test('controlled practice has bounded sizes, thresholds, and a separate personal-infinitive block', () => {
  for (const [id, size, threshold] of [
    ['l18-cp-infinitive-forms', 10, 8],
    ['l18-cp-personal-infinitive', 8, 6],
    ['l18-cp-modal-functions', 10, 8],
    ['l18-cp-desire-register', 5, 4],
  ] as const) {
    const activity = find(id, 'controlledPractice');
    assert.equal(activity.exercises.length, size);
    assert.equal(activity.passCount, threshold);
  }
  const personal = find('l18-cp-personal-infinitive', 'controlledPractice');
  const prompts = personal.exercises.map((exercise) => exercise.prompt).join(' ');
  assert.match(prompts, /én.*menni.*te.*menni.*ő.*menni/s);
  assert.match(prompts, /dolgozni/);
  assert.match(prompts, /tanulni/);
  assert.doesNotMatch(prompts, /mi \+|ti \+|ők \+/);
});

test('infinitive instruction avoids the old universal add-ni overclaim', () => {
  for (const form of ['tanulni', 'írni', 'olvasni', 'főzni', 'beszélni', 'dolgozni', 'menni', 'enni', 'inni', 'lenni']) {
    assert.match(source, new RegExp(form));
  }
  assert.match(source, /правило не сводится к механическому «добавь -ni к словарной форме»/);
  assert.match(source, /-ik.*не сохраняется.*dolgozik → dolgozni/s);
  assert.match(source, /изученный набор инфинитивов/);
  assert.doesNotMatch(source, /инфинитив[^\n]{0,160}образуется суффиксом[^\n]{0,80}-ni[^\n]{0,80}(всегда|без исключений)/i);
});

test('kell and personal infinitive are accurate and explicitly scope-bounded', () => {
  for (const form of ['mennem kell', 'menned kell', 'mennie kell', 'dolgoznom kell', 'dolgoznod kell', 'dolgoznia kell', 'tanulnom kell', 'tanulnod kell']) {
    assert.match(source, new RegExp(form));
  }
  assert.match(source, /Nekem mennem kell/);
  assert.match(source, /nekem.*подчёркивает.*личное окончание.*mennem.*всё равно остаётся/s);
  assert.match(source, /Не разбирай форму как <b>menni \+ m<\/b>/);
  assert.match(source, /Itt várni kell/);
  assert.match(source, /Граница урока/);
  assert.match(source, /mennünk, mennetek, menniük.*пока достаточно узнавать/s);
  assert.doesNotMatch(source, /двумя способами[^\n]{0,160}nekem[^\n]{0,160}личн/i);
});

test('modal semantics, desire register, and L19/L23 boundaries are protected', () => {
  assert.match(source, /tud \+ инфинитив.*субъект умеет\/способен/s);
  assert.match(source, /lehet \+ инфинитив.*действие разрешено или возможно в ситуации/s);
  assert.match(source, /Lehet, hogy\.\.\..*другая конструкция/s);
  assert.match(source, /szeretnék.*готовый частотный блок/s);
  assert.match(source, /akarok.*желание или намерение более прямо/s);
  assert.match(source, /будущее с <b>fog \+ инфинитив<\/b> начинается в L19/);
  assert.match(source, /Полную систему условного наклонения.*L23/);
  for (const leakedForm of ['szeretnél', 'szeretnénk', 'szeretnétek', 'szeretnének']) assert.doesNotMatch(source, new RegExp(leakedForm));
  assert.doesNotMatch(source, /Az jó lenne|várlak!/);
});

test('modal listening is real-audio-only and published audio yields DIRECT', () => {
  const listening = find('l18-listening-modals', 'listening');
  assert.equal(listening.assetId, 'l18_listening_modals');
  assert.equal(listening.audioStatus, 'published');
  assert.equal(listening.questions.length, 5);
  assert.equal(listening.passCount, 4);
  assert.equal(existsSync(new URL('../public/audio/l18_listening_modals.mp3', import.meta.url)), true);
  assert.equal(listeningEvidence(listening, 5, 5).evidenceMode, 'direct');
  assert.match(listening.transcript, /szeretnék moziba menni/);
  assert.match(listening.transcript, /dolgoznom kell/);
  assert.match(listening.transcript, /tudok veled találkozni/);
  assert.match(listening.transcript, /Lehet a parkban sétálni/);
  assert.match(listening.transcript, /otthon akar maradni/);
  assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|browser TTS/i);
  assert.doesNotMatch(listening.assetId, /^18\./);
});

test('open writing and speaking remain PARTIAL; ExitCheck resolves DIRECT PARTIAL PARTIAL PARTIAL DIRECT', () => {
  const writing = find('l18-writing-modal-responses', 'writing');
  const recording = find('l18-recording-modal-responses', 'recording');
  const listening = find('l18-listening-modals', 'listening');
  assert.equal(writing.modelAnswer.length, 5);
  assert.equal(writingEvidence(writing.modelAnswer.join(' '), true).evidenceMode, 'partial');
  assert.equal(recordingCompletionEvidence(recording.id).evidenceMode, 'partial');
  const evidence: Record<string, ActivityEvidence> = {
    'l18-cp-infinitive-forms': direct('l18-cp-infinitive-forms'),
    'l18-cp-personal-infinitive': direct('l18-cp-personal-infinitive'),
    'l18-cp-modal-functions': direct('l18-cp-modal-functions'),
    'l18-cp-desire-register': direct('l18-cp-desire-register'),
    'l18-listening-modals': { activityId: 'l18-listening-modals', attempted: true, completed: true, ...listeningEvidence(listening, 5, 5) },
    'l18-writing-modal-responses': { activityId: 'l18-writing-modal-responses', attempted: true, ...writingEvidence(writing.modelAnswer.join(' '), true) },
    'l18-recording-modal-responses': recordingCompletionEvidence('l18-recording-modal-responses'),
  };
  const exit = find('l18-exit-check', 'exitCheck');
  assert.deepEqual(
    exit.checks.map((check) => describeExitCheckStatus(check, evidence[check.activityId], evidence).kind),
    ['direct-met', 'partial-review', 'partial-review', 'partial-review', 'direct-met'],
  );
});

test('quiz Q1801-Q1806 is unique and defensible; IPA is removed', () => {
  assert.deepEqual(LESSON_18.quiz?.map((question) => question.id), [1801, 1802, 1803, 1804, 1805, 1806]);
  for (const question of LESSON_18.quiz ?? []) {
    assert.equal(new Set(question.options).size, question.options.length, `quiz ${question.id}`);
    assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length);
  }
  const q1801 = LESSON_18.quiz?.find((question) => question.id === 1801);
  assert.deepEqual(q1801?.options, ['tanulni', 'tanulok', 'tanulom', 'tanulnom']);
  const q1803 = LESSON_18.quiz?.find((question) => question.id === 1803);
  assert.match(q1803?.options[q1803.correctIndex] ?? '', /tud — способность субъекта/);
  const q1804 = LESSON_18.quiz?.find((question) => question.id === 1804);
  assert.equal(q1804?.options[q1804.correctIndex], 'szeretnék');
  const q1806 = LESSON_18.quiz?.find((question) => question.id === 1806);
  assert.equal(q1806?.options[q1806.correctIndex], 'Pihenni akarok.');
  assert.ok((LESSON_18.vocabulary ?? []).every((item) => item.ipa === undefined));
  assert.equal(LESSON_18.vocabulary?.length, 8);
});

test('metadata matches and frozen L17 remains byte-identical', () => {
  const meta = LESSONS_META.find((candidate) => candidate.id === 18);
  assert.ok(meta);
  assert.equal(meta.title, LESSON_18.title);
  assert.equal(meta.subtitle, LESSON_18.subtitle);
  assert.equal(meta.description, LESSON_18.description);
  assert.equal(hash(new URL('../src/data/lessons/lesson17.ts', import.meta.url)), '0A94373EF8CEFE6251C253BCB914C2B769324A932968E73E74DBC322DCF725CE');
});
