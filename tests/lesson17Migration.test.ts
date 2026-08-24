import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { LESSON_17 } from '../src/data/lessons/lesson17.ts';
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

const activities = LESSON_17.slides.flatMap((slide) => slide.activities ?? []);
const source = readFileSync(new URL('../src/data/lessons/lesson17.ts', import.meta.url), 'utf8');
const hash = (url: URL) => createHash('sha256').update(readFileSync(url)).digest('hex').toUpperCase();
const direct = (activityId: string): ActivityEvidence => ({ activityId, attempted: true, completed: true, passed: true, evidenceMode: 'direct' });

function find<T extends LessonActivity['kind']>(id: string, kind: T): Extract<LessonActivity, { kind: T }> {
  const activity = activities.find((candidate) => candidate.id === id);
  assert.ok(activity, `missing ${id}`);
  assert.equal(activity.kind, kind);
  return activity as Extract<LessonActivity, { kind: T }>;
}

test('L17 preserves identity and exact bounded objectives', () => {
  assert.deepEqual([LESSON_17.id, LESSON_17.number, LESSON_17.level, LESSON_17.slidesCount], [17, 17, 'A2', 11]);
  assert.deepEqual(LESSON_17.objectives?.map((objective) => objective.id), [
    'l17_describe-weather',
    'l17_name-seasons',
    'l17_use-seasonal-adverbials',
    'l17_compare-seasons',
    'l17_understand-forecast',
  ]);
  assert.deepEqual(LESSON_17.objectives?.map((objective) => objective.text), [
    'Описывать текущую погоду в 3–4 простых фразах.',
    'Называть четыре времени года и соотносить 12 месяцев с сезонами.',
    'Употреблять формы tavasszal, nyáron, ősszel, télen в изученных контекстах.',
    'Сравнивать погоду минимум в двух сезонах, используя знакомую модель -bb + mint.',
    'Понимать ключевые детали короткого прогноза погоды на слух.',
  ]);
  for (let slide = 1; slide <= 11; slide += 1) {
    assert.equal(existsSync(new URL(`../public/audio/17.${slide}.mp3`, import.meta.url)), true, `missing narration 17.${slide}.mp3`);
  }
});

test('L17 has exactly eight valid activities and five-row ExitCheck', () => {
  assert.deepEqual(activities.map((activity) => activity.id), [
    'l17-cp-seasonal-adverbials',
    'l17-cp-seasons-months',
    'l17-writing-current-weather',
    'l17-recording-weather-seasons',
    'l17-listening-weather',
    'l17-writing-season-comparison',
    'l17-recording-season-comparison',
    'l17-exit-check',
  ]);
  assert.deepEqual(
    Object.fromEntries(['controlledPractice', 'writing', 'recording', 'listening', 'exitCheck'].map((kind) => [kind, activities.filter((activity) => activity.kind === kind).length])),
    { controlledPractice: 2, writing: 2, recording: 2, listening: 1, exitCheck: 1 },
  );
  assert.equal(new Set(activities.map((activity) => activity.id)).size, 8);
  assert.deepEqual(activities.flatMap(validateActivity), []);
  assert.deepEqual(validateLessonQuestionIds(activities), []);
  const exit = find('l17-exit-check', 'exitCheck');
  const objectives = LESSON_17.objectives?.map((objective) => objective.id) ?? [];
  assert.deepEqual(exit.checks.map((check) => check.objectiveId), objectives);
  assert.equal(new Set(exit.checks.map((check) => check.objectiveId)).size, 5);
  assert.deepEqual(validateExitCheckReferences(exit, objectives, activities.map((activity) => activity.id)), []);
});

test('season/month and adverbial controlled practices have exact scope', () => {
  const months = find('l17-cp-seasons-months', 'controlledPractice');
  const adverbials = find('l17-cp-seasonal-adverbials', 'controlledPractice');
  assert.equal(months.exercises.length, 12);
  assert.equal(months.passCount, 10);
  assert.equal(adverbials.exercises.length, 6);
  assert.equal(adverbials.passCount, 5);
  for (const month of ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december']) {
    assert.match(source, new RegExp(month));
  }
  for (const form of ['tavasszal', 'nyáron', 'ősszel', 'télen']) assert.match(source, new RegExp(form));
  assert.match(source, /tavasz \+ -val → tavasszal/);
  assert.match(source, /nyár \+ -on → nyáron/);
  assert.match(source, /ősz \+ -vel → ősszel/);
  assert.match(source, /tél \+ -en → télen/);
  assert.doesNotMatch(source, /каждое время года использует.*свой собственный.*суффикс|без единой логики/i);
  assert.match(source, /Это не четыре «случайных исключения»/);
});

test('weather grammar is accurate and bounded', () => {
  assert.match(source, /Süt a nap.*Esik az eső.*Fúj a szél.*Havazik/s);
  assert.match(source, /есть подлежащее: nap, eső, szél/);
  assert.match(source, /Havazik употребляется без отдельного подлежащего/);
  assert.match(source, /Meleg van \/ Hideg van слово <b>van<\/b> нужно/);
  assert.match(source, /Az idő meleg/);
  assert.doesNotMatch(source, /погодн[^\n]{0,120}безличн[^\n]{0,200}Süt a nap/i);
  assert.doesNotMatch(source, /тепло\/холодно[^\n]{0,120}без van|van.*опускается.*Meleg van/is);
  assert.doesNotMatch(source, /Хунгаререн/);
});

test('open weather and season-comparison production remains reviewable PARTIAL', () => {
  const weatherWriting = find('l17-writing-current-weather', 'writing');
  const weatherRecording = find('l17-recording-weather-seasons', 'recording');
  const comparisonWriting = find('l17-writing-season-comparison', 'writing');
  const comparisonRecording = find('l17-recording-season-comparison', 'recording');
  assert.equal(weatherWriting.modelAnswer.length, 4);
  assert.match(weatherWriting.prompt, /4 коротких предложения/);
  assert.match(weatherRecording.targetText, /Tavasz, nyár, ősz, tél/);
  assert.match(comparisonWriting.prompt, /3–5 предложений/);
  assert.match(comparisonWriting.prompt, /-bb.*mint/);
  assert.match(comparisonRecording.targetText, /melegebb.*mint télen/);
  assert.equal(writingEvidence(weatherWriting.modelAnswer.join(' '), true).evidenceMode, 'partial');
  assert.equal(recordingCompletionEvidence(weatherRecording.id).evidenceMode, 'partial');
  assert.equal(writingEvidence(comparisonWriting.modelAnswer.join(' '), true).evidenceMode, 'partial');
  assert.equal(recordingCompletionEvidence(comparisonRecording.id).evidenceMode, 'partial');
});

test('forecast listening is real-audio-only and future grammar stays recognition-only', () => {
  const listening = find('l17-listening-weather', 'listening');
  assert.equal(listening.assetId, 'l17_listening_weather');
  assert.equal(listening.audioStatus, 'published');
  assert.equal(listening.questions.length, 5);
  assert.equal(listening.passCount, 4);
  assert.equal(existsSync(new URL('../public/audio/l17_listening_weather.mp3', import.meta.url)), true);
  assert.equal(listeningEvidence(listening, 5, 5).evidenceMode, 'direct');
  assert.match(listening.transcript, /Ma Budapesten felhős az ég, tizenöt fok van/);
  assert.match(listening.transcript, /Délután esik az eső/);
  assert.match(listening.transcript, /Holnap napos idő lesz, húsz fok lesz/);
  assert.match(source, /Holnap \.\.\. lesz.*как готовая форма для понимания прогноза/);
  assert.match(source, /будущее.*fog \+ инфинитив.*L19/is);
  assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|browser TTS/i);
});

test('quiz Q1701-Q1706 is unique and removes old double-correct snow distractor', () => {
  assert.deepEqual(LESSON_17.quiz?.map((question) => question.id), [1701, 1702, 1703, 1704, 1705, 1706]);
  for (const question of LESSON_17.quiz ?? []) {
    assert.equal(new Set(question.options).size, question.options.length, `quiz ${question.id}`);
    assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length);
  }
  const q1702 = LESSON_17.quiz?.find((question) => question.id === 1702);
  assert.equal(q1702?.options[q1702.correctIndex], 'Havazik');
  assert.ok(!q1702?.options.includes('Esik a hó'));
  const q1706 = LESSON_17.quiz?.find((question) => question.id === 1706);
  assert.equal(q1706?.options[q1706.correctIndex], 'október');
});

test('IPA is removed and enrichment stays recognition-only', () => {
  assert.ok((LESSON_17.vocabulary ?? []).every((item) => item.ipa === undefined));
  assert.equal(LESSON_17.vocabulary?.length, 8);
  assert.match(source, /vihar<\/b> — буря \/ шторм/);
  assert.match(source, /Ещё погодные слова для узнавания/);
  const exit = find('l17-exit-check', 'exitCheck');
  assert.ok(exit.checks.every((check) => !['vihar', 'köd', 'szivárvány', 'hőség'].some((word) => check.objectiveId.includes(word))));
});

test('ExitCheck resolves PARTIAL PARTIAL DIRECT PARTIAL DIRECT', () => {
  const exit = find('l17-exit-check', 'exitCheck');
  const weatherWriting = find('l17-writing-current-weather', 'writing');
  const comparisonWriting = find('l17-writing-season-comparison', 'writing');
  const listening = find('l17-listening-weather', 'listening');
  const evidence: Record<string, ActivityEvidence> = {
    'l17-cp-seasons-months': direct('l17-cp-seasons-months'),
    'l17-cp-seasonal-adverbials': direct('l17-cp-seasonal-adverbials'),
    'l17-writing-current-weather': { activityId: 'l17-writing-current-weather', attempted: true, ...writingEvidence(weatherWriting.modelAnswer.join(' '), true) },
    'l17-recording-weather-seasons': recordingCompletionEvidence('l17-recording-weather-seasons'),
    'l17-listening-weather': { activityId: 'l17-listening-weather', attempted: true, completed: true, ...listeningEvidence(listening, 5, 5) },
    'l17-writing-season-comparison': { activityId: 'l17-writing-season-comparison', attempted: true, ...writingEvidence(comparisonWriting.modelAnswer.join(' '), true) },
    'l17-recording-season-comparison': recordingCompletionEvidence('l17-recording-season-comparison'),
  };
  assert.deepEqual(
    exit.checks.map((check) => describeExitCheckStatus(check, evidence[check.activityId], evidence).kind),
    ['partial-review', 'partial-review', 'direct-met', 'partial-review', 'direct-met'],
  );
});

test('metadata matches and frozen L16 remains byte-identical', () => {
  const meta = LESSONS_META.find((candidate) => candidate.id === 17);
  assert.ok(meta);
  assert.equal(meta.title, LESSON_17.title);
  assert.equal(meta.subtitle, LESSON_17.subtitle);
  assert.equal(meta.description, LESSON_17.description);
  assert.equal(hash(new URL('../src/data/lessons/lesson16.ts', import.meta.url)), '2595F66A40A29493BB41771F80288111D527F39A1069E43CBB1264DB108AD225');
});
