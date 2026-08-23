import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations.ts';
import { LESSONS_META } from '../src/data/lessons/index.ts';
import { LESSON_8 } from '../src/data/lessons/lesson8.ts';
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

const ACTIVITIES = LESSON_8.slides.flatMap((slide) => slide.activities ?? []);

function sha256(url: URL): string {
  return createHash('sha256').update(readFileSync(url)).digest('hex').toUpperCase();
}

function findActivity<TKind extends LessonActivity['kind']>(
  id: string,
  kind: TKind
): Extract<LessonActivity, { kind: TKind }> {
  const activity = ACTIVITIES.find((candidate) => candidate.id === id);
  assert.ok(activity, `missing L8 activity ${id}`);
  assert.equal(activity.kind, kind);
  return activity as Extract<LessonActivity, { kind: TKind }>;
}

function directEvidence(activityId: string): ActivityEvidence {
  return { activityId, attempted: true, completed: true, evidenceMode: 'direct', passed: true };
}

test('L8 preserves identity, narration slots, objective IDs, and quiz IDs', () => {
  assert.equal(LESSON_8.id, 8);
  assert.equal(LESSON_8.number, 8);
  assert.equal(LESSON_8.level, 'A1');
  assert.equal(LESSON_8.slidesCount, 12);
  assert.deepEqual(LESSON_8.slides.map((slide) => slide.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  assert.deepEqual(LESSON_8.objectives?.map((objective) => objective.id), [
    'l8_name-family',
    'l8_form-possessive',
    'l8_use-possessive',
    'l8_distinguish-possessors',
    'l8_describe-family',
  ]);
  assert.deepEqual(LESSON_8.quiz?.map((question) => question.id), [801, 802, 803, 804, 805, 806]);
  for (const slide of LESSON_8.slides) {
    assert.equal(existsSync(new URL(`../public/audio/8.${slide.id}.mp3`, import.meta.url)), true);
  }
});

test('L8 has nine unique valid generic activities and a resolvable ExitCheck', () => {
  assert.equal(ACTIVITIES.length, 9);
  assert.deepEqual(ACTIVITIES.map((activity) => activity.kind).sort(), [
    'controlledPractice', 'controlledPractice', 'controlledPractice', 'controlledPractice',
    'exitCheck', 'listening', 'reading', 'recording', 'writing',
  ].sort());
  assert.equal(new Set(ACTIVITIES.map((activity) => activity.id)).size, ACTIVITIES.length);
  for (const activity of ACTIVITIES) assert.deepEqual(validateActivity(activity), []);
  assert.deepEqual(validateLessonQuestionIds(ACTIVITIES), []);

  const exit = findActivity('l8-exit-check', 'exitCheck');
  assert.deepEqual(exit.checks.map((check) => check.objectiveId), LESSON_8.objectives?.map((objective) => objective.id));
  assert.deepEqual(validateExitCheckReferences(
    exit,
    LESSON_8.objectives?.map((objective) => objective.id) ?? [],
    ACTIVITIES.map((activity) => activity.id)
  ), []);
});

test('formation is 8/10 DIRECT and written owner identification exists', () => {
  const formation = findActivity('l8-cp-singular-possessives', 'controlledPractice');
  assert.equal(formation.exercises.length, 10);
  assert.equal(formation.passCount, 8);
  assert.deepEqual(formation.exercises.map((exercise) => 'accept' in exercise ? exercise.accept[0] : ''), [
    'házam', 'házad', 'háza', 'anyám', 'anyád', 'anyja', 'apám', 'apád', 'apja', 'testvérem',
  ]);

  const ownerText = findActivity('l8-cp-owner-text', 'controlledPractice');
  assert.ok(ownerText.exercises.length >= 6);
  assert.ok(ownerText.exercises.every((exercise) => exercise.kind === 'singleChoice'));
  assert.match(ownerText.exercises.map((exercise) => exercise.prompt).join(' '), /házam.*házad.*háza/);
});

test('ReadingTask checks relationships and ownership rather than suffix spotting', () => {
  const reading = findActivity('l8-reading-family-profile', 'reading');
  const readingContent = reading.content;
  assert.ok(readingContent);
  assert.equal(readingContent.type, 'prose');
  assert.equal(reading.questions.length, 5);
  assert.equal(reading.passCount, 4);
  assert.match(reading.questions.map((question) => question.question).join(' '), /Кем|Кто|Чей/);
  assert.doesNotMatch(reading.instructions ?? '', /найди.*суффикс/i);
});

test('missing dedicated MP3 stays NONE and has no TTS or narration fallback', () => {
  const listening = findActivity('l8-listening-possessives', 'listening');
  assert.equal(listening.assetId, 'l8_listening_possessives');
  assert.equal(listening.audioStatus, 'missing');
  assert.equal(existsSync(new URL('../public/audio/l8_listening_possessives.mp3', import.meta.url)), false);
  assert.deepEqual(listeningEvidence(listening, 4, 4), { passed: false, evidenceMode: 'none', score: 4, total: 4 });
  const source = readFileSync(new URL('../src/data/lessons/lesson8.ts', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|SpeechSynthesisUtterance|getVoices|voiceschanged|browser TTS/i);
  assert.doesNotMatch(listening.assetId, /^8\./);
});

test('ExitCheck resolves the approved PARTIAL/DIRECT/PARTIAL/PARTIAL/PARTIAL vector', () => {
  const exit = findActivity('l8-exit-check', 'exitCheck');
  const listening = findActivity('l8-listening-possessives', 'listening');
  const writing = writingEvidence('Anna vagyok. Van egy testvérem. Anyám tanár. Apám orvos.', true);
  const evidence: Record<string, ActivityEvidence> = {
    'l8-cp-family-vocabulary': directEvidence('l8-cp-family-vocabulary'),
    'l8-cp-singular-possessives': directEvidence('l8-cp-singular-possessives'),
    'l8-cp-family-captions': directEvidence('l8-cp-family-captions'),
    'l8-cp-owner-text': directEvidence('l8-cp-owner-text'),
    'l8-writing-family-description': { activityId: 'l8-writing-family-description', attempted: true, selfReviewed: true, ...writing },
    'l8-record-family-description': recordingCompletionEvidence('l8-record-family-description'),
    'l8-listening-possessives': {
      activityId: 'l8-listening-possessives', attempted: true, completed: true,
      ...listeningEvidence(listening, 4, 4),
    },
  };
  const statuses = Object.fromEntries(exit.checks.map((check) => [
    check.objectiveId,
    describeExitCheckStatus(check, evidence[check.activityId], evidence).kind,
  ]));
  assert.deepEqual(statuses, {
    'l8_name-family': 'partial-review',
    'l8_form-possessive': 'direct-met',
    'l8_use-possessive': 'partial-review',
    'l8_distinguish-possessors': 'partial-review',
    'l8_describe-family': 'partial-review',
  });

  const possessorCheck = exit.checks.find((check) => check.objectiveId === 'l8_distinguish-possessors');
  assert.ok(possessorCheck);
  assert.deepEqual(possessorCheck.evidenceComponents, [
    { activityId: 'l8-listening-possessives', evidenceKind: 'listening' },
  ]);
  assert.equal(
    describeExitCheckStatus(possessorCheck, evidence[possessorCheck.activityId], {
      'l8-listening-possessives': evidence['l8-listening-possessives'],
    }).kind,
    'partial-review'
  );
  assert.equal(
    possessorCheck.evidenceComponents.some((component) => component.activityId === 'l8-writing-family-description'),
    false
  );
  assert.deepEqual(
    exit.checks
      .filter((check) => check.activityId === 'l8-writing-family-description' ||
        check.evidenceComponents?.some((component) => component.activityId === 'l8-writing-family-description'))
      .map((check) => check.objectiveId),
    ['l8_use-possessive', 'l8_describe-family']
  );
});

test('plural possession is optional only and absent from scored or passing content', () => {
  const quiz = JSON.stringify(LESSON_8.quiz);
  const activities = JSON.stringify(ACTIVITIES);
  const summary = LESSON_8.slides.find((slide) => slide.id === 12)?.body ?? '';
  const source = readFileSync(new URL('../src/data/lessons/lesson8.ts', import.meta.url), 'utf8');
  assert.doesNotMatch(quiz, /házaim|házaid|házai|házunk|házatok|házuk/);
  assert.doesNotMatch(activities, /házaim|házaid|házai|házunk|házatok|házuk/);
  assert.doesNotMatch(summary, /házaim|házaid|házai|házunk|házatok|házuk/);
  assert.doesNotMatch(source, /házunk|házatok|házuk|házaid|házai(?!m)/);
  assert.match(LESSON_8.slides.find((slide) => slide.id === 11)?.body ?? '', /Необязательно.*házaim/);
});

test('language and quiz cleanup enforce bounded morphology and natural family meaning', () => {
  const q802 = LESSON_8.quiz?.find((question) => question.id === 802);
  const q803 = LESSON_8.quiz?.find((question) => question.id === 803);
  const q806 = LESSON_8.quiz?.find((question) => question.id === 806);
  assert.ok(q802 && q803 && q806);
  assert.equal(q802.options[q802.correctIndex], 'apád');
  assert.match(q802.explanation ?? '', /apa → apád.*a → á/);
  assert.doesNotMatch(q802.explanation ?? '', /a \+ pád|исчез/);
  assert.match(q803.question, /его\/её мать/);
  assert.doesNotMatch(q806.question, /урок|lesson/i);
  assert.equal(q806.options[q806.correctIndex], 'testvér');

  const source = readFileSync(new URL('../src/data/lessons/lesson8.ts', import.meta.url), 'utf8');
  assert.match(source, /прежде всего суффиксом на существительном/);
  assert.match(source, /Явные местоимения служат главным образом контрасту/);
  assert.doesNotMatch(source, /суффиксы регулярны и предсказуемы|Van egy anyám|nekem van|neked van|neki van/i);
  assert.match(source, /Van egy testvérem.*готовая фраза/s);
  assert.match(source, /testvér<\/b> — брат \/ сестра; sibling/);
});

test('L8 metadata and translation cards align while frozen lessons remain unchanged', () => {
  const meta = LESSONS_META.find((candidate) => candidate.id === 8);
  assert.ok(meta);
  assert.equal(meta.title, LESSON_8.title);
  assert.equal(meta.subtitle, LESSON_8.subtitle);
  assert.equal(meta.description, LESSON_8.description);
  assert.equal(LESSON_TRANSLATION_MAP[8]?.[1]?.sourceText, 'У меня есть брат или сестра.');
  assert.equal(LESSON_TRANSLATION_MAP[8]?.[1]?.targetText, 'Van egy testvérem.');
  assert.equal(sha256(new URL('../src/data/lessons/lesson7.ts', import.meta.url)), '70EF9CCBD0BE2CB15CFD2F5D4F060F6998C632F548014D5C8E0FBC6F3DFC5B90');
  assert.equal(sha256(new URL('../src/data/lessons/lesson10.ts', import.meta.url)), 'EF95C2BBE4F4054AB8E05708EFB2B953DFDA624AF9F9BF786CF9CE4346FB4211');
  assert.equal(sha256(new URL('../src/data/lessons/lesson11.ts', import.meta.url)), 'EE31B2494B9991561C9576E2B1BDFEA578F2B5A4FB0F0C03A71751488FA47FA7');
  assert.equal(sha256(new URL('../src/data/lessons/lesson15.ts', import.meta.url)), '022977AD8EAAAE2A14FDDEF2FF792FA35D5A0A882EDF66E93BFF5B68B9D9E586');
});
