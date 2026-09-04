import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import type { Lesson, LessonActivity } from '../src/types.ts';
import { LESSON_15 } from '../src/data/lessons/lesson15.ts';
import { LESSON_16 } from '../src/data/lessons/lesson16.ts';
import { LESSON_17 } from '../src/data/lessons/lesson17.ts';
import { rolePlayCompletionEvidence, validateActivity, validateExitCheckReferences, validateLessonQuestionIds, writingEvidence } from '../src/utils/activityUtils.ts';

const lessons: Lesson[] = [LESSON_15, LESSON_16, LESSON_17];
const activitiesOf = (lesson: Lesson): LessonActivity[] => lesson.slides.flatMap((slide) => slide.activities ?? []);
const find = <K extends LessonActivity['kind']>(lesson: Lesson, kind: K) => {
  const activity = activitiesOf(lesson).find((candidate) => candidate.kind === kind);
  assert.ok(activity, `L${lesson.number} ${kind}`);
  return activity as Extract<LessonActivity, { kind: K }>;
};

test('P4 preserves L15-L17 identity, objective IDs, quiz IDs, and eleven slides', () => {
  const objectiveIds = new Map([
    [15, ['l15_name-food', 'l15_form-dative', 'l15_use-have-construction', 'l15_express-likes', 'l15_order-food', 'l15_understand-restaurant-dialogue']],
    [16, ['l16_form-instrumental', 'l16_apply-assimilation', 'l16_use-instrumental', 'l16_shop-dialogue', 'l16_count-money']],
    [17, ['l17_describe-weather', 'l17_name-seasons', 'l17_use-seasonal-adverbials', 'l17_compare-seasons', 'l17_understand-forecast']],
  ]);
  for (const lesson of lessons) {
    assert.equal(lesson.id, lesson.number);
    assert.equal(lesson.slidesCount, 11);
    assert.deepEqual(lesson.slides.map((slide) => slide.id), Array.from({ length: 11 }, (_, index) => index + 1));
    assert.deepEqual(lesson.objectives?.map((objective) => objective.id), objectiveIds.get(lesson.number));
    assert.deepEqual(lesson.quiz?.map((question) => question.id), Array.from({ length: 6 }, (_, index) => lesson.number * 100 + index + 1));
  }
});

test('P4 lessons expose the complete communication sequence with valid references', () => {
  for (const lesson of lessons) {
    const activities = activitiesOf(lesson);
    assert.deepEqual(activities.map((activity) => activity.kind), ['controlledPractice', 'reading', 'listening', 'rolePlay', 'writing', 'exitCheck']);
    assert.deepEqual(activities.flatMap(validateActivity), []);
    assert.deepEqual(validateLessonQuestionIds(activities), []);
    const exit = find(lesson, 'exitCheck');
    const objectiveIds = lesson.objectives?.map((objective) => objective.id) ?? [];
    assert.deepEqual(exit.checks.map((check) => check.objectiveId), objectiveIds);
    assert.deepEqual(validateExitCheckReferences(exit, objectiveIds, activities.map((activity) => activity.id)), []);
  }
});

test('P4 contextual practice has fourteen items and an 11/14 threshold', () => {
  for (const lesson of lessons) {
    const controlled = find(lesson, 'controlledPractice');
    assert.equal(controlled.exercises.length, 14, `L${lesson.number}`);
    assert.equal(controlled.passCount, 11, `L${lesson.number}`);
  }
  assert.match(JSON.stringify(find(LESSON_15, 'controlledPractice')), /Asztalt szeretnék|gyereknek|barátomnak|Hozna nekünk|számlát|Külön fizetünk/);
  const l16 = JSON.stringify(find(LESSON_16, 'controlledPractice'));
  for (const form of ['kártyával', 'készpénzzel', 'baráttal', 'busszal', 'késsel', 'cukorral']) assert.match(l16, new RegExp(form));
  assert.match(l16, /Milyen méretben|Van ebből nagyobb|Felpróbálhatom|Ki szeretném cserélni|Van blokkja/);
  assert.match(JSON.stringify(find(LESSON_17, 'controlledPractice')), /Tizenkét fok|Erősen fúj|eső várható|Ha esik|kabátot veszek fel/);
});

test('P4 readings meet the approved depth, question counts, and thresholds', () => {
  const contracts = new Map<number, readonly [string, number, number, number]>([
    [15, ['Egy vacsora, ami majdnem tökéletes volt', 170, 210, 7]],
    [16, ['Egy kabát, amit ki kellett cserélni', 180, 220, 8]],
    [17, ['Hétvégi program az időjárás szerint', 190, 230, 8]],
  ]);
  for (const lesson of lessons) {
    const reading = find(lesson, 'reading');
    const [title, minimum, maximum, questionCount] = contracts.get(lesson.number)!;
    assert.equal(reading.title, title);
    assert.ok(reading.content?.type === 'prose');
    const words = reading.content.paragraphs.join(' ').trim().split(/\s+/u).length;
    assert.ok(words >= minimum && words <= maximum, `L${lesson.number} words=${words}`);
    assert.equal(reading.questions.length, questionCount);
    assert.equal(reading.passCount, 6);
  }
});

test('P4 RolePlays implement restaurant, exchange, and weather problem-solving flows', () => {
  const l15 = find(LESSON_15, 'rolePlay');
  assert.equal(l15.turns.length, 18);
  assert.equal(l15.turns.filter((turn) => turn.speaker === 'learner').length, 8);
  assert.match(JSON.stringify(l15), /Asztalt szeretnék|Hány személyre|Mit tartalmaz|másik vendégnek|Sajnos limonádé nincs|számlát|Külön vagy együtt/);
  const l16 = find(LESSON_16, 'rolePlay');
  assert.equal(l16.turns.length, 17);
  assert.equal(l16.turns.filter((turn) => turn.speaker === 'learner').length, 8);
  assert.match(JSON.stringify(l16), /kicserélni|túl kicsi|Van blokkja|Kártyával|nincs kék|másik modellt|ötezer forinttal drágább|Felpróbálhatom|új blokkot/);
  const l17 = find(LESSON_17, 'rolePlay');
  assert.equal(l17.turns.length, 15);
  assert.match(JSON.stringify(l17), /piknikezzünk|eső és erős szél|Hány fok|moziba|vasárnap|melegebb és naposabb|mozi előtt/);
  for (const rolePlay of [l15, l16, l17]) assert.equal(rolePlayCompletionEvidence(rolePlay.id).evidenceMode, 'partial');
});

test('P4 Writing targets and optional Speaking remain open, text-only, and non-direct', () => {
  for (const [lesson, target] of [[LESSON_15, '80–100'], [LESSON_16, '80–100'], [LESSON_17, '90–110']] as const) {
    const writing = find(lesson, 'writing');
    assert.match(`${writing.prompt} ${writing.rubric.join(' ')}`, new RegExp(target));
    assert.equal(writingEvidence(writing.modelAnswer.join(' '), true).evidenceMode, 'partial');
    const speaking = lesson.slides.find((slide) => slide.optionalSpeaking)?.optionalSpeaking;
    assert.ok(speaking);
    assert.match(speaking.instructions, /без микрофона, score и evidence/);
  }
  assert.match(LESSON_15.slides.find((slide) => slide.optionalSpeaking)?.optionalSpeaking?.instructions ?? '', /1\.5–2 минуты/);
  assert.match(LESSON_16.slides.find((slide) => slide.optionalSpeaking)?.optionalSpeaking?.instructions ?? '', /1\.5–2 минуты/);
  assert.match(LESSON_17.slides.find((slide) => slide.optionalSpeaking)?.optionalSpeaking?.instructions ?? '', /около 2 минут/);
});

test('P4 preserves exact L15-L17 Listening contracts and physical MP3 hashes', () => {
  const contracts = new Map<number, readonly [string, string, number]>([
    [15, ['l15_listening_restaurant', 'e8c16a3d2c6ee7146096b96fc52ddded06606f49657068d41816014e393490a0', 4]],
    [16, ['l16_listening_shopping', '3d21deedbecc2fab0724dde0bc83225353be8c618d9115ceb44615140b7ea374', 4]],
    [17, ['l17_listening_weather', '7c2751cc3966d1ecd7e1e26861c8763c4d0218ef5880dad95300e2123dfc5e1e', 5]],
  ]);
  for (const lesson of lessons) {
    const listening = find(lesson, 'listening');
    const [assetId, expectedHash, questions] = contracts.get(lesson.number)!;
    assert.equal(listening.assetId, assetId);
    assert.equal(listening.audioStatus, 'published');
    assert.equal(listening.questions.length, questions);
    const bytes = readFileSync(new URL(`../public/audio/${assetId}.mp3`, import.meta.url));
    assert.equal(createHash('sha256').update(bytes).digest('hex'), expectedHash);
  }
  assert.equal(readdirSync(new URL('../public/audio/', import.meta.url)).filter((name) => name.toLowerCase().endsWith('.mp3')).length, 1123);
});

test('P4 does not reintroduce learner recording, microphone flow, or browser TTS', () => {
  for (const lesson of lessons) {
    const source = readFileSync(new URL(`../src/data/lessons/lesson${lesson.number}.ts`, import.meta.url), 'utf8');
    assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|AudioRecorder|RecordingTask|recordingCompleted|responseMode:\s*['"]recorded['"]|kind:\s*['"]recording['"]|MediaRecorder|getUserMedia/i);
    assert.equal(activitiesOf(lesson).some((activity) => (activity as { kind: string }).kind === 'recording'), false);
  }
});

test('P4 leaves L18-L27, L28, and P6B L21-L24 source files byte-identical', () => {
  const contracts = new Map([
    [18, 'dc5729fb6d2ba0bf2d4ea8d48e5f8437858e5a52a2e9de0e319d56bd045ab7cf'],
    [19, '85c857d5601a80697d67cdfc962218dc6265e12937d282f4c9e0eff64cf8c325'],
    [20, '7805292794411d967f82f14198542122f611b10861a21935dd6a9b1b9c611138'],
    [21, '844da631c8d56cf5cb1bdac950b247b7cf1042789d34f2ea17d86b72b17fafc9'],
    [22, '60e96dd75c3e8c21334a2c8d4e78838ab1cdcad0c559ada940e85782c54eb1f8'],
    [23, '9a8866b28e94d0bb97f7d400491e60674c88791ab7b60f7f99dcf05a611ceb85'],
    [24, '9f286e89efb21d5e214731f001e96333d24353c739a961dd190a5e6f59b4c8d2'],
    [25, '6ac306dfd9074787d7ee225b2f190a1da1b2099ade65a596120c5ebe6c7aae4b'],
    [26, 'd587d82110db092ec162ee1fa969b4c97f2108fad399174278b10da2feb4ae25'],
    [27, 'a265e3a27e9faf15188596a7f6f00dbb955231830b6f81d641c74536a9982af2'],
    [28, '617f7df1bbd486161a0dba0f63ae0be08011eeacd2b69a060d282ea3e7de2fcc'],
  ]);
  for (const [lesson, expected] of contracts) {
    const bytes = readFileSync(new URL(`../src/data/lessons/lesson${lesson}.ts`, import.meta.url));
    assert.equal(createHash('sha256').update(bytes).digest('hex'), expected, `L${lesson}`);
  }
});

test('P4 vocabulary audit is selective and does not add runtime/audio entries', () => {
  assert.deepEqual(lessons.map((lesson) => lesson.vocabulary?.length), [16, 8, 8]);
  const audit = readFileSync(new URL('../docs/P4_VOCABULARY_AUDIT.md', import.meta.url), 'utf8');
  assert.match(audit, /\| L15 \| 16 \| 6 \| 12 \| 6 \| 10 \|/);
  assert.match(audit, /\| L16 \| 8 \| 6 \| 11 \| 6 \| 8 \|/);
  assert.match(audit, /\| L17 \| 8 \| 6 \| 11 \| 6 \| 10 \|/);
  assert.match(audit, /adds no runtime vocabulary card, vocabulary ID, alias, `wordAudioMap` entry, or MP3/);
});
