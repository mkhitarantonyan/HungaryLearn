import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_16 } from '../src/data/lessons/lesson16.ts';
import { LESSONS_META } from '../src/data/lessons/index.ts';
import type { ActivityEvidence, LessonActivity } from '../src/types.ts';
import { describeExitCheckStatus, listeningEvidence, recordingCompletionEvidence, rolePlayCompletionEvidence, validateActivity, validateExitCheckReferences, validateLessonQuestionIds } from '../src/utils/activityUtils.ts';

const activities = LESSON_16.slides.flatMap((slide) => slide.activities ?? []);
const source = readFileSync(new URL('../src/data/lessons/lesson16.ts', import.meta.url), 'utf8');
const hash = (url: URL) => createHash('sha256').update(readFileSync(url)).digest('hex').toUpperCase();
const direct = (activityId: string): ActivityEvidence => ({ activityId, attempted: true, completed: true, passed: true, evidenceMode: 'direct' });
function find<T extends LessonActivity['kind']>(id: string, kind: T): Extract<LessonActivity, { kind: T }> {
  const activity = activities.find((candidate) => candidate.id === id); assert.ok(activity, `missing ${id}`); assert.equal(activity.kind, kind); return activity as Extract<LessonActivity, { kind: T }>;
}

test('L16 preserves identity and exact bounded objectives', () => {
  assert.deepEqual([LESSON_16.id, LESSON_16.number, LESSON_16.level, LESSON_16.slidesCount], [16, 16, 'A2', 12]);
  assert.deepEqual(LESSON_16.objectives?.map((objective) => objective.id), ['l16_form-instrumental', 'l16_apply-assimilation', 'l16_use-instrumental', 'l16_shop-dialogue', 'l16_count-money']);
  assert.deepEqual(LESSON_16.objectives?.map((objective) => objective.text), ['Образовывать изученные формы с суффиксом -val/-vel.', 'Применять ассимиляцию v в изученных письменных формах с -val/-vel.', 'Различать и использовать -val/-vel для средства/способа и сопровождения.', 'Выполнять базовую покупку: спросить цену, назвать количество и выбрать способ оплаты.', 'Понимать и называть изученные практические суммы в форинтах.']);
  for (let slide = 1; slide <= 12; slide += 1) assert.equal(existsSync(new URL(`../public/audio/16.${slide}.mp3`, import.meta.url)), true);
});

test('L16 has exactly eight valid activities of the required kinds', () => {
  assert.deepEqual(activities.map((activity) => activity.id), ['l16-cp-val-vel-forms', 'l16-cp-assimilation', 'l16-cp-means-companionship', 'l16-cp-prices', 'l16-listening-shopping', 'l16-roleplay-shopping', 'l16-recording-means-companionship', 'l16-exit-check']);
  assert.deepEqual(Object.fromEntries(['controlledPractice', 'listening', 'rolePlay', 'recording', 'exitCheck'].map((kind) => [kind, activities.filter((activity) => activity.kind === kind).length])), { controlledPractice: 4, listening: 1, rolePlay: 1, recording: 1, exitCheck: 1 });
  assert.equal(new Set(activities.map((activity) => activity.id)).size, 8); assert.deepEqual(activities.flatMap(validateActivity), []); assert.deepEqual(validateLessonQuestionIds(activities), []);
  const exit = find('l16-exit-check', 'exitCheck'); const objectives = LESSON_16.objectives?.map((objective) => objective.id) ?? [];
  assert.deepEqual(exit.checks.map((check) => check.objectiveId), objectives); assert.equal(new Set(exit.checks.map((check) => check.objectiveId)).size, 5);
  assert.deepEqual(validateExitCheckReferences(exit, objectives, activities.map((activity) => activity.id)), []);
});

test('four controlled practices have exact sizes and thresholds', () => {
  for (const [id, size, threshold] of [['l16-cp-val-vel-forms', 10, 8], ['l16-cp-assimilation', 10, 8], ['l16-cp-means-companionship', 8, 6], ['l16-cp-prices', 8, 6]] as const) { const activity = find(id, 'controlledPractice'); assert.equal(activity.exercises.length, size); assert.equal(activity.passCount, threshold); }
});

test('-val/-vel semantics, vowel forms, and orthography are bounded and accurate', () => {
  assert.match(source, /средство\/способ.*сопровождение/); assert.match(source, /шире русского творительного падежа.*не всегда переводится одинаково/);
  assert.match(source, /краткие конечные a\/e/); for (const form of ['autóval', 'kutyával', 'kávéval', 'vonattal', 'késsel', 'tollal', 'kanállal', 'busszal']) assert.match(source, new RegExp(form));
  assert.match(source, /диграф sz.*ssz/); assert.match(source, /tollal нет третьей l/); assert.doesNotMatch(source, /точн(ая|ую) копи|без исключений|tolllal[^'\]]/i);
});

test('barátommal and personal/chunk scope are protected', () => {
  assert.match(source, /barátom \+ val → barátommal/); assert.match(source, /заканчивается на m: v→m/); assert.doesNotMatch(source, /barátom[^\n]{0,180}t\+v|barátom[^\n]{0,180}t \+ v/i);
  assert.match(source, /velem.*veled.*vele.*ядро для узнавания/s); assert.match(source, /Для расширения:.*velünk.*veletek.*velük/s); assert.match(source, /Gyere velem!.*готовый полезный блок/s);
  assert.match(source, /Fizethetek kártyával\?.*готовый транзакционный блок/s); assert.doesNotMatch(source, /старого корня|-szor\/-szer\/-ször/);
});

test('shopping dialogue and prices remain bounded', () => {
  assert.match(source, /Цена → количество → оплата/); assert.match(source, /Mennyibe kerül\?/); assert.match(source, /Kérek két darabot/); assert.match(source, /Kártyával fizetek/);
  assert.match(source, /500, 1000, 1500, 2000 и 2500 Ft/); assert.match(source, /не полная система больших чисел/); assert.match(source, /forint остаётся в единственном числе/);
  assert.doesNotMatch(JSON.stringify({ activities, quiz: LESSON_16.quiz }), /килограмм|литр|условн.*наклон|образуй.*-hat|-het.*образуй/i);
});

test('quiz Q1601-Q1606 is unique, defensible, and corrected', () => {
  assert.deepEqual(LESSON_16.quiz?.map((question) => question.id), [1601, 1602, 1603, 1604, 1605, 1606]);
  for (const question of LESSON_16.quiz ?? []) { assert.equal(new Set(question.options).size, question.options.length, `quiz ${question.id}`); assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length); }
  assert.match(LESSON_16.quiz?.find((question) => question.id === 1604)?.question ?? '', /Я плачу картой/); assert.match(LESSON_16.quiz?.find((question) => question.id === 1604)?.explanation ?? '', /настоящее время/);
  assert.deepEqual(LESSON_16.quiz?.find((question) => question.id === 1605)?.options.filter((option) => option === 'barátommal'), ['barátommal']); assert.match(LESSON_16.quiz?.find((question) => question.id === 1605)?.explanation ?? '', /m\+v → mm/);
  assert.match(LESSON_16.quiz?.find((question) => question.id === 1606)?.question ?? '', /краткими конечными a\/e/); assert.doesNotMatch(LESSON_16.quiz?.find((question) => question.id === 1606)?.explanation ?? '', /kávé/);
});

test('IPA is removed and missing assessment listening stays NONE', () => {
  assert.ok((LESSON_16.vocabulary ?? []).every((item) => item.ipa === undefined));
  const listening = find('l16-listening-shopping', 'listening'); assert.equal(listening.assetId, 'l16_listening_shopping'); assert.equal(listening.audioStatus, 'missing'); assert.equal(listening.passCount, 3); assert.equal(listening.questions.length, 4);
  assert.equal(existsSync(new URL('../public/audio/l16_listening_shopping.mp3', import.meta.url)), false); assert.equal(listeningEvidence(listening, 4, 4).evidenceMode, 'none'); assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|browser TTS/i); assert.doesNotMatch(listening.assetId, /^16\./);
});

test('ExitCheck resolves DIRECT DIRECT PARTIAL PARTIAL PARTIAL', () => {
  const exit = find('l16-exit-check', 'exitCheck'); const listening = find('l16-listening-shopping', 'listening');
  const evidence: Record<string, ActivityEvidence> = {
    'l16-cp-val-vel-forms': direct('l16-cp-val-vel-forms'), 'l16-cp-assimilation': direct('l16-cp-assimilation'), 'l16-cp-means-companionship': direct('l16-cp-means-companionship'), 'l16-cp-prices': direct('l16-cp-prices'),
    'l16-listening-shopping': { activityId: 'l16-listening-shopping', attempted: true, completed: true, ...listeningEvidence(listening, 4, 4) },
    'l16-roleplay-shopping': rolePlayCompletionEvidence('l16-roleplay-shopping', true), 'l16-recording-means-companionship': recordingCompletionEvidence('l16-recording-means-companionship'),
  };
  assert.deepEqual(exit.checks.map((check) => describeExitCheckStatus(check, evidence[check.activityId], evidence).kind), ['direct-met', 'direct-met', 'partial-review', 'partial-review', 'partial-review']);
});

test('metadata matches and frozen L15/L17 remain byte-identical', () => {
  const meta = LESSONS_META.find((candidate) => candidate.id === 16); assert.ok(meta); assert.equal(meta.title, LESSON_16.title); assert.equal(meta.subtitle, LESSON_16.subtitle); assert.equal(meta.description, LESSON_16.description);
  assert.equal(hash(new URL('../src/data/lessons/lesson15.ts', import.meta.url)), '022977AD8EAAAE2A14FDDEF2FF792FA35D5A0A882EDF66E93BFF5B68B9D9E586');
  assert.equal(hash(new URL('../src/data/lessons/lesson17.ts', import.meta.url)), '60798E934F60E0940CB4D9881E97DE7974871EB8FF0749C67DEB3F153D12D931');
});
