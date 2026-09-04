import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import test from 'node:test';
import { LESSON_1 } from '../src/data/lessons/lesson1.ts';
import { LESSON_2 } from '../src/data/lessons/lesson2.ts';
import { LESSON_3 } from '../src/data/lessons/lesson3.ts';
import { LESSON_4 } from '../src/data/lessons/lesson4.ts';
import { LESSON_5 } from '../src/data/lessons/lesson5.ts';
import { LESSON_6 } from '../src/data/lessons/lesson6.ts';
import * as P1 from '../src/data/lessons/p1FoundationActivities.ts';
import type { Lesson, LessonActivity } from '../src/types.ts';
import { controlledEvidence, readingEvidence, rolePlayCompletionEvidence, validateActivity, writingEvidence } from '../src/utils/activityUtils.ts';

const lessons = [LESSON_1, LESSON_2, LESSON_3, LESSON_4, LESSON_5, LESSON_6];
const activities = (lesson: Lesson) => lesson.slides.flatMap((slide) => slide.activities ?? []);
const words = (value: string) => value.trim().split(/\s+/u).filter(Boolean).length;
const sha = (url: URL) => createHash('sha256').update(readFileSync(url)).digest('hex');

function attached(id: string): LessonActivity {
  const activity = lessons.flatMap(activities).find((candidate) => candidate.id === id);
  assert.ok(activity, `missing attached activity ${id}`);
  return activity;
}

test('P1 preserves L1–L6 lesson, objective, quiz, and physical slide identities', () => {
  assert.deepEqual(lessons.map((lesson) => [lesson.id, lesson.number]), [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6]]);
  assert.deepEqual(lessons.map((lesson) => lesson.slidesCount), [11, 10, 11, 12, 12, 10]);
  assert.deepEqual(lessons.map((lesson) => lesson.slides.length), [11, 10, 11, 12, 12, 10]);
  assert.deepEqual(lessons.map((lesson) => lesson.objectives?.map((objective) => objective.id)), [
    ['l1_distinguish-s-sz', 'l1_distinguish-soft-consonants', 'l1_distinguish-long-vowels', 'l1_apply-stress', 'l1_read-aloud'],
    ['l2_greet-introduce', 'l2_use-pronouns', 'l2_conjugate-lenni', 'l2_introduce-self', 'l2_ask-answer-questions'],
    ['l3_choose-article', 'l3_form-plural', 'l3_use-egy', 'l3_plural-nouns-reading', 'l3_write-plural'],
    ['l4_conjugate-present', 'l4_use-verbs-context', 'l4_recognize-forms', 'l4_build-sentences', 'l4_ask-questions'],
    ['l5_count-1-100', 'l5_tell-time', 'l5_name-days', 'l5_write-numbers', 'l5_use-time-in-speech'],
    ['l6_review-alphabet', 'l6_review-verb-conj', 'l6_review-numbers', 'l6_review-plural', 'l6_self-assess'],
  ]);
  assert.deepEqual(lessons.map((lesson) => lesson.quiz?.map((question) => question.id)), [
    [101, 102, 103, 104, 105, 106], [201, 202, 203, 204, 205, 206],
    [301, 302, 303, 304, 305, 306], [401, 402, 403, 404, 405, 406],
    [501, 502, 503, 504, 505, 506], [601, 602, 603, 604, 605, 606, 607, 608],
  ]);
});

test('all new P1 scored and open activities are attached, valid, and use unique IDs', () => {
  const ids = [
    'l1-cp-foundation-discrimination', 'l1-reading-decoding', 'l1-writing-first-forms',
    'l2-cp-contextual-foundation', 'l2-reading-first-meeting', 'l2-roleplay-first-meeting', 'l2-writing-fictional-introduction',
    'l3-cp-contextual-foundation', 'l3-reading-classroom', 'l3-roleplay-classroom-objects', 'l3-writing-fictional-room',
    'l4-cp-contextual-foundation', 'l4-reading-simple-day', 'l4-roleplay-simple-day', 'l4-writing-fictional-day',
    'l5-cp-contextual-foundation', 'l5-reading-weekly-program', 'l5-roleplay-arrange-meeting', 'l5-writing-weekly-message',
    'l6-cp-integrated-checkpoint', 'l6-reading-new-course-day', 'l6-roleplay-first-course-day', 'l6-writing-integrated-profile',
  ];
  assert.equal(new Set(ids).size, ids.length);
  for (const id of ids) assert.deepEqual(validateActivity(attached(id)), [], id);
});

test('L1 preserves the required sound scope and uses short decoding instead of artificial RolePlay', () => {
  const text = JSON.stringify(LESSON_1);
  for (const token of ['s = /ʃ/', 'sz = /s/', 'cs', 'gy', 'ny', 'ly', 'ty', 'zs', 'j = ly = /j/', 'первом слоге']) assert.ok(text.includes(token), token);
  const reading = P1.P1_L1_DECODING;
  assert.equal(reading.kind, 'reading');
  if (reading.kind !== 'reading' || reading.content.type !== 'prose') assert.fail('L1 decoding must be prose-compatible');
  assert.ok(words(reading.content.paragraphs.join(' ')) <= 70);
  assert.deepEqual([reading.questions.length, reading.passCount], [6, 5]);
  assert.equal(activities(LESSON_1).some((activity) => activity.kind === 'rolePlay'), false);
  assert.match(P1.P1_L1_WRITING.prompt, /5–8.*3 очень короткие/);
});

test('P1 controlled practice uses contextual threshold profiles requested for L2–L6', () => {
  assert.deepEqual([P1.P1_L1_PRACTICE.exercises.length, P1.P1_L1_PRACTICE.passCount], [16, 13]);
  assert.deepEqual([P1.P1_L2_PRACTICE.exercises.length, P1.P1_L2_PRACTICE.passCount], [14, 11]);
  assert.deepEqual([P1.P1_L3_PRACTICE.exercises.length, P1.P1_L3_PRACTICE.passCount], [14, 11]);
  assert.deepEqual([P1.P1_L4_PRACTICE.exercises.length, P1.P1_L4_PRACTICE.passCount], [15, 12]);
  assert.deepEqual([P1.P1_L5_PRACTICE.exercises.length, P1.P1_L5_PRACTICE.passCount], [16, 13]);
  assert.deepEqual([P1.P1_L6_CHECKPOINT.exercises.length, P1.P1_L6_CHECKPOINT.passCount], [18, 15]);
});

test('P1 scored work is DIRECT only at threshold and cannot pass by always choosing option zero', () => {
  for (const practice of [P1.P1_L1_PRACTICE, P1.P1_L2_PRACTICE, P1.P1_L3_PRACTICE, P1.P1_L4_PRACTICE, P1.P1_L5_PRACTICE, P1.P1_L6_CHECKPOINT]) {
    assert.equal(practice.kind, 'controlledPractice');
    if (practice.kind !== 'controlledPractice') assert.fail('expected controlled practice');
    const zeroScore = practice.exercises.filter((exercise) => exercise.kind === 'singleChoice' && exercise.correctIndex === 0).length;
    assert.ok(zeroScore < (practice.passCount ?? practice.exercises.length), `${practice.id} zero-index bias`);
    assert.equal(controlledEvidence(true, (practice.passCount ?? 1) - 1, practice.exercises.length, practice.passCount ?? practice.exercises.length).passed, false);
    assert.equal(controlledEvidence(true, practice.passCount ?? practice.exercises.length, practice.exercises.length, practice.passCount ?? practice.exercises.length).passed, true);
  }
  for (const reading of [P1.P1_L1_DECODING, P1.P1_L2_READING, P1.P1_L3_READING, P1.P1_L4_READING, P1.P1_L5_READING, P1.P1_L6_READING]) {
    assert.equal(reading.kind, 'reading');
    if (reading.kind !== 'reading') assert.fail('expected reading');
    const zeroScore = reading.questions.filter((question) => question.correctIndex === 0).length;
    assert.ok(zeroScore < (reading.passCount ?? reading.questions.length), `${reading.id} zero-index bias`);
    assert.equal(readingEvidence((reading.passCount ?? 1) - 1, reading.questions.length, reading.passCount ?? reading.questions.length).passed, false);
    assert.equal(readingEvidence(reading.passCount ?? reading.questions.length, reading.questions.length, reading.passCount ?? reading.questions.length).passed, true);
  }
});

test('P1 Reading progresses from beginner dialogue to integrated A0 checkpoint', () => {
  const checks = [
    [P1.P1_L2_READING, 70, 100, 6, 5, 'Első találkozás'],
    [P1.P1_L3_READING, 90, 120, 7, 6, 'Mi van a tanteremben?'],
    [P1.P1_L4_READING, 100, 130, 7, 6, 'Egy egyszerű nap'],
    [P1.P1_L5_READING, 110, 140, 8, 6, 'Egy heti program'],
    [P1.P1_L6_READING, 130, 160, 8, 7, 'Egy új tanfolyami nap'],
  ] as const;
  for (const [activity, min, max, questions, passCount, title] of checks) {
    assert.equal(activity.kind, 'reading');
    if (activity.kind !== 'reading' || activity.content.type !== 'prose') assert.fail(`${title} must be prose`);
    const count = words(activity.content.paragraphs.join(' '));
    assert.ok(count >= min && count <= max, `${title}: ${count}`);
    assert.deepEqual([activity.questions.length, activity.passCount, activity.content.title], [questions, passCount, title]);
  }
});

test('P1 scaffolded RolePlays stay within early-level turn targets and remain PARTIAL', () => {
  const checks = [
    [P1.P1_L2_ROLEPLAY, 6], [P1.P1_L3_ROLEPLAY, 7], [P1.P1_L4_ROLEPLAY, 6],
    [P1.P1_L5_ROLEPLAY, 7], [P1.P1_L6_ROLEPLAY, 8],
  ] as const;
  for (const [activity, learnerTurns] of checks) {
    assert.equal(activity.kind, 'rolePlay');
    assert.equal(activity.turns.filter((turn) => turn.speaker === 'learner').length, learnerTurns);
    assert.ok(activity.turns.filter((turn) => turn.speaker === 'learner').every((turn) => turn.responseMode === 'selfPractice'));
    assert.equal(rolePlayCompletionEvidence(activity.id).evidenceMode, 'partial');
    assert.equal(rolePlayCompletionEvidence(activity.id).passed, false);
  }
});

test('P1 Writing models meet A0 ranges and always remain PARTIAL', () => {
  const checks = [
    [P1.P1_L2_WRITING, 30, 50], [P1.P1_L3_WRITING, 40, 60], [P1.P1_L4_WRITING, 50, 70],
    [P1.P1_L5_WRITING, 50, 70], [P1.P1_L6_WRITING, 60, 80],
  ] as const;
  for (const [activity, min, max] of checks) {
    assert.equal(activity.kind, 'writing');
    const count = words(activity.modelAnswer.join(' '));
    assert.ok(count >= min && count <= max, `${activity.id}: ${count}`);
    const evidence = writingEvidence(activity.modelAnswer.join(' '), true);
    assert.equal(evidence.evidenceMode, 'partial');
    assert.equal(evidence.passed, false);
  }
});

test('Optional Speaking is text-only, non-scored, and outside the activity evidence graph', () => {
  for (const speaking of [P1.P1_L1_SPEAKING, P1.P1_L2_SPEAKING, P1.P1_L3_SPEAKING, P1.P1_L4_SPEAKING, P1.P1_L5_SPEAKING, P1.P1_L6_SPEAKING]) {
    assert.match(speaking.instructions, /без микрофона.*score.*evidence/i);
    assert.equal('kind' in speaking, false);
  }
});

test('L3 preserves its intentional learner-facing Listening gap and has no fake Listening evidence', () => {
  assert.equal(activities(LESSON_3).some((activity) => activity.kind === 'listening'), false);
  const exit = activities(LESSON_3).find((activity) => activity.kind === 'exitCheck');
  assert.ok(exit && exit.kind === 'exitCheck');
  assert.equal(exit.checks.some((check) => check.evidenceKind === 'listening'), false);
});

test('L3 adds no accusative and L4 adds no premature full definite conjugation', () => {
  const l3 = JSON.stringify([P1.P1_L3_PRACTICE, P1.P1_L3_READING, P1.P1_L3_ROLEPLAY, P1.P1_L3_WRITING]);
  assert.doesNotMatch(l3, /könyvet|asztalt|széket|ablakot|accusative/iu);
  assert.match(l3, /Не используй винительный падеж/);
  const l4 = JSON.stringify([P1.P1_L4_PRACTICE, P1.P1_L4_READING, P1.P1_L4_ROLEPLAY, P1.P1_L4_WRITING]);
  assert.doesNotMatch(l4, /olvasom|szeretem|nézem|tanulom/iu);
});

test('L5 stays with full-hour scheduling and avoids premature colloquial clock grammar', () => {
  const text = JSON.stringify([P1.P1_L5_PRACTICE, P1.P1_L5_READING, P1.P1_L5_ROLEPLAY, P1.P1_L5_WRITING]);
  assert.match(text, /Hány óra van|órakor|háromkor|ötkor/);
  assert.doesNotMatch(text, /negyed|fél\s+(egy|kettő|három|négy|öt|hat|hét|nyolc|kilenc|tíz)|háromnegyed/iu);
});

test('L6 integrates L1–L5 domains without claiming A0 certification', () => {
  const text = JSON.stringify([P1.P1_L6_CHECKPOINT, P1.P1_L6_READING, P1.P1_L6_ROLEPLAY, P1.P1_L6_WRITING]);
  for (const token of ['szia', 'vagyok', 'az', 'könyvek', 'tanulok', 'hétfőn', 'ötkor', 'találkozunk']) assert.ok(text.toLocaleLowerCase('hu').includes(token), token);
  assert.doesNotMatch(JSON.stringify(LESSON_6), /A0 achieved|официально (?:имеете|получен|достигнут).*A0|официальный уровень A0/iu);
  assert.match(JSON.stringify(LESSON_6), /не экзамен и не сертификация/iu);
});

test('existing learner-facing Listening contracts and L1–L6 MP3 hashes are unchanged', () => {
  const expected = {
    l1_listening_vowel_length: '8451fbaee9068c1071fe1b39f977d6f2a28f22b4fa11a533b473279104f48014',
    l1_listening_soft_consonants: '803c0b094bf10e4b241bfa0467726da88b7a73a6160227ed05c1f4a5c12b1c5f',
    l1_listening_s_sz: '38699d556cf6a696f52be69b7635ad40eb154498aa7a049a1b82af17d341cdce',
    l2_listening_introduction: 'f472446fed1046a3db3875e17d91f045bbba9c07d502ec1c54c31cdf0215d052',
    l4_listening_present_forms: '7b8fa9ec2527de014d319a6f79ff3393091c449034bd4271a9ea6779dd61ebf2',
    l5_listening_time: 'c4036483c644ffd0ed8925805befd699b8342a8fec2db4fd9bd3725cf205d749',
    l6_listening_a0_review: 'd89a9a9a1113ed5ab0f5d07fdbce4845bbab3b77f6b96eb2d8b97cb463ee584b',
  };
  for (const [asset, hash] of Object.entries(expected)) assert.equal(sha(new URL(`../public/audio/${asset}.mp3`, import.meta.url)), hash, asset);
  const listening = lessons.flatMap(activities).filter((activity) => activity.kind === 'listening');
  assert.ok(listening.every((activity) => activity.audioStatus === 'published'));
  assert.equal(listening.some((activity) => activity.assetId === 'l3_listening'), false);
});

test('physical MP3 inventory and approved P6B assets remain byte-identical', () => {
  const audioDirectory = new URL('../public/audio/', import.meta.url);
  const mp3 = readdirSync(audioDirectory).filter((name) => name.toLowerCase().endsWith('.mp3'));
  assert.equal(mp3.length, 1123);
  assert.ok(mp3.every((name) => statSync(new URL(name, audioDirectory)).size > 0));
  const p6b = {
    l21_listening_b_film_choice: '070365eff16f1e83944d204723d699d37acbb5a1aecea744a25994494b836a5c',
    l22_listening_b_office_instructions: '34ffb8fffd0bf4389aa76be7e63ec88fa2ac06d1801e738dc73db1ac90c045a9',
    l23_listening_b_free_week: '89bb82c68906fb48c238b02942157be38ef4ac7e158da59ce1777c50905de8fe',
    l24_listening_b_city_or_suburbs: 'f5e7bc7c72866a1fb70651442599762e4b38821de04621b1722edd7225ce8ddc',
  };
  for (const [asset, hash] of Object.entries(p6b)) assert.equal(sha(new URL(`../public/audio/${asset}.mp3`, import.meta.url)), hash, asset);
});

test('L7–L28 lesson sources are protected by their pre-P1 hashes', () => {
  const expected = [
    '1a6cd1e5ca9e074b7d2ebc464d7bbbb9d4fbbb462bbcaf1836d4a9557b30bf8e', 'aa1d5203da9cc94acf9544591936510fa22d9de0060a6e7085d96065fe89d77a',
    'c0f75d5bec761516abaeed9004ce35cc4901d9346b145fdabc57a4b1c647036d', '1e508adfc4da95be14052882e3691352fd90393ea28500be40a394ca9906be96',
    '49f9cbcec6e5c7bd5d53e80aff3d2a741a6097aee9c9b109bc63a5e360fd552f', '8f4873db26bf8d241cf14934c724c6f6d22a0796d8caf9be7f2eaee13db9936e',
    'dbbeb3c9b0a5215f23fbb9d15afd30de4b1380bf1d6e8e7087f0d2852d207b5b', '76b4a519e5316855598d249bca563869e91ec06d10bee7d6ae96a47630438b50',
    'c820df7585f1f1f8e33b988c4f96ef9cff4c2121c838a233fafe85730fd29676', 'b6cdb88db966a799f1dd5b5c2d3df2000c6d0512b265879217b29fab9a9bb8d3',
    '9e996bc1dd7815971427b9861e0b82097508ec4b24b1b00e4fde35586ea91a15', '6d3bcc9fd606567332633891a79b83ac84b70c564e1494e4619d828997bd5b29',
    '67a371a32e0da1bb3de20d505a84b72461125393613e5b5d0d1dd1490a91c858', '7805292794411d967f82f14198542122f611b10861a21935dd6a9b1b9c611138',
    '844da631c8d56cf5cb1bdac950b247b7cf1042789d34f2ea17d86b72b17fafc9', '60e96dd75c3e8c21334a2c8d4e78838ab1cdcad0c559ada940e85782c54eb1f8',
    '9a8866b28e94d0bb97f7d400491e60674c88791ab7b60f7f99dcf05a611ceb85', '9f286e89efb21d5e214731f001e96333d24353c739a961dd190a5e6f59b4c8d2',
    '6ac306dfd9074787d7ee225b2f190a1da1b2099ade65a596120c5ebe6c7aae4b', 'd587d82110db092ec162ee1fa969b4c97f2108fad399174278b10da2feb4ae25',
    'a265e3a27e9faf15188596a7f6f00dbb955231830b6f81d641c74536a9982af2', '617f7df1bbd486161a0dba0f63ae0be08011eeacd2b69a060d282ea3e7de2fcc',
  ];
  for (let lesson = 7; lesson <= 28; lesson += 1) assert.equal(sha(new URL(`../src/data/lessons/lesson${lesson}.ts`, import.meta.url)), expected[lesson - 7], `L${lesson}`);
});

test('P1 source contains no browser TTS or learner Recording implementation', () => {
  const source = readFileSync(new URL('../src/data/lessons/p1FoundationActivities.ts', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|RecordingTask|AudioRecorder|MediaRecorder|getUserMedia|recordingCompleted|responseMode:\s*['"]recorded/i);
  assert.equal(lessons.flatMap(activities).some((activity) => (activity as { kind: string }).kind === 'recording'), false);
});

test('P1 vocabulary audit records bounded classification and no runtime card expansion', () => {
  assert.deepEqual(lessons.map((lesson) => lesson.vocabulary?.length), [6, 9, 6, 7, 13, 6]);
  const audit = readFileSync(new URL('../docs/P1_VOCABULARY_AUDIT.md', import.meta.url), 'utf8');
  for (const label of ['CORE', 'FUNCTIONAL CHUNK', 'RECEPTIVE', 'RECYCLED']) assert.match(audit, new RegExp(label));
  assert.match(audit, /no RolePlay/i);
  assert.match(audit, /Listening gap remains intentional/i);
  assert.match(audit, /does \*\*not\*\* add runtime SRS entries/i);
});
