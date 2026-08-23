import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_6 } from '../src/data/lessons/lesson6.ts';
import { LESSONS_META, loadLesson } from '../src/data/lessons/index.ts';
import type { ActivityEvidence, LessonActivity } from '../src/types.ts';
import {
  describeExitCheckStatus,
  listeningEvidence,
  recordingCompletionEvidence,
  rolePlayCompletionEvidence,
  rolePlayRecordingRequirementMet,
  shouldShowTranscript,
  validateActivity,
  validateExitCheckReferences,
  validateLessonQuestionIds,
  writingEvidence,
} from '../src/utils/activityUtils.ts';

function sha256(url: URL): string {
  return createHash('sha256').update(readFileSync(url)).digest('hex').toUpperCase();
}

const L6_ACTIVITIES = LESSON_6.slides.flatMap((slide) => slide.activities ?? []);

function findActivity<TKind extends LessonActivity['kind']>(
  id: string,
  kind: TKind
): Extract<LessonActivity, { kind: TKind }> {
  const activity = L6_ACTIVITIES.find((candidate) => candidate.id === id);
  assert.ok(activity, `missing L6 activity ${id}`);
  assert.equal(activity.kind, kind);
  return activity as Extract<LessonActivity, { kind: TKind }>;
}

function directEvidence(activityId: string, passed = true): ActivityEvidence {
  return { activityId, attempted: true, completed: true, evidenceMode: 'direct', passed };
}

function missingEvidence(activityId: string, score = 5, total = 5): ActivityEvidence {
  return { activityId, attempted: true, completed: true, evidenceMode: 'none', passed: false, score, total };
}

test('L6 preserves identity, 10 physical slides, five objectives, and quiz IDs 601–608', () => {
  assert.equal(LESSON_6.id, 6);
  assert.equal(LESSON_6.number, 6);
  assert.equal(LESSON_6.level, 'A0');
  assert.equal(LESSON_6.slidesCount, 10);
  assert.deepEqual(LESSON_6.slides.map((slide) => slide.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  assert.deepEqual(LESSON_6.objectives?.map((objective) => objective.id), [
    'l6_review-alphabet',
    'l6_review-verb-conj',
    'l6_review-numbers',
    'l6_review-plural',
    'l6_self-assess',
  ]);
  assert.deepEqual(LESSON_6.quiz?.map((question) => question.id), [601, 602, 603, 604, 605, 606, 607, 608]);
});

test('L6 migration keeps the curriculum at exactly 139 objectives', async () => {
  let count = 0;
  for (const meta of LESSONS_META) {
    const lesson = await loadLesson(meta.id);
    count += lesson?.objectives?.length ?? 0;
  }
  assert.equal(count, 139);
});

test('L1–L5 and L15 approved lesson modules remain byte-for-byte frozen', () => {
  assert.equal(sha256(new URL('../src/data/lessons/lesson1.ts', import.meta.url)), 'C654FF34375034B9346CDD1B7847C4945818ABC176ED89669590E6A366D02505');
  assert.equal(sha256(new URL('../src/data/lessons/lesson2.ts', import.meta.url)), '91DF3BC496A79898F421D42E7B7F376ED1BA108A3F81C6886777364C65B6EA19');
  assert.equal(sha256(new URL('../src/data/lessons/lesson3.ts', import.meta.url)), '7FF81838BB2610D46A5B1F93408A419D7D668287388F705D75F3AAF3D0F898BF');
  assert.equal(sha256(new URL('../src/data/lessons/lesson4.ts', import.meta.url)), 'E44AFA95D968A513F649C3B193AE2CEED588596DA53EEFB1008132ED1A3D4852');
  assert.equal(sha256(new URL('../src/data/lessons/lesson5.ts', import.meta.url)), 'F13947BD8C817B686DFA82B1B91BD48CA45CD37EA0796148B29AF2D6517C3F50');
  assert.equal(sha256(new URL('../src/data/lessons/lesson15.ts', import.meta.url)), '022977AD8EAAAE2A14FDDEF2FF792FA35D5A0A882EDF66E93BFF5B68B9D9E586');
});

test('L7 matches the approved migrated snapshot', () => {
  assert.equal(sha256(new URL('../src/data/lessons/lesson7.ts', import.meta.url)), '70EF9CCBD0BE2CB15CFD2F5D4F060F6998C632F548014D5C8E0FBC6F3DFC5B90');
});

test('frozen planning docs, translations, manifest, and generator remain unchanged', () => {
  assert.equal(sha256(new URL('../docs/LESSON_MIGRATION_MATRIX.md', import.meta.url)), '59F6519EEEE5EF4D48978DC0409145F2DC35CF59787AC05B00E31AC36BF91DDE');
  assert.equal(sha256(new URL('../docs/CURRICULUM_BLUEPRINT.md', import.meta.url)), 'B8F4165A237CC7B511D3AA108F5418CE2BAB2DB8DD39E3A394013B0F6491FC2E');
  assert.equal(sha256(new URL('../docs/MODEL_LESSON_L15_SPEC.md', import.meta.url)), '94FB08607855A6A7759916AFA8E8424FDEB136F241ADC7020FBDD9339E86AD30');
  assert.equal(sha256(new URL('../src/data/lessonTranslations.ts', import.meta.url)), '3A3B8155BDB0CA11D0EB04031E9F7E83E79CDA73902EE96C77B31EB0FC76900D');
  assert.equal(sha256(new URL('../src/data/slideAudioManifest.ts', import.meta.url)), '4D3C6CCEBE42C4C7EC8358F15C46233AC0BDE3C04799BB95DB7C345EF5C03281');
  assert.equal(sha256(new URL('../scripts/generate-audio-manifest.ts', import.meta.url)), 'A11B83A72E3D2E3FF803DB8C4DB56F8E5BE9800BBD4B7FB4645EB88A1A225F32');
});

test('L6 exposes every required generic activity kind and no new shared kind', () => {
  const kinds = new Set(L6_ACTIVITIES.map((activity) => activity.kind));
  assert.deepEqual([...kinds].sort(), [
    'controlledPractice',
    'exitCheck',
    'listening',
    'reading',
    'recording',
    'rolePlay',
    'writing',
  ].sort());
  for (const activity of L6_ACTIVITIES) {
    assert.deepEqual(validateActivity(activity), []);
  }
  assert.deepEqual(validateLessonQuestionIds(L6_ACTIVITIES), []);
});

test('L6 has one resolvable ExitCheck row per objective with the exact graph', () => {
  const exit = findActivity('l6-exit-check', 'exitCheck');
  assert.deepEqual(exit.checks.map((check) => check.objectiveId), LESSON_6.objectives?.map((objective) => objective.id));
  assert.deepEqual(validateExitCheckReferences(
    exit,
    LESSON_6.objectives?.map((objective) => objective.id) ?? [],
    L6_ACTIVITIES.map((activity) => activity.id)
  ), []);
  assert.deepEqual(exit.checks.map((check) => [
    check.objectiveId,
    check.activityId,
    check.evidenceKind,
    check.evidenceComponents?.map((component) => [component.activityId, component.evidenceKind]) ?? [],
  ]), [
    ['l6_review-alphabet', 'l6-cp-decoding', 'reading', [['l6-record-pronunciation-review', 'pronunciation']]],
    ['l6_review-verb-conj', 'l6-cp-present-verbs', 'grammar', []],
    ['l6_review-numbers', 'l6-listening-a0-review', 'listening', [['l6-roleplay-schedule', 'interaction']]],
    ['l6_review-plural', 'l6-cp-plural-articles', 'grammar', []],
    ['l6_self-assess', 'l6-writing-profile', 'writing', [['l6-record-profile', 'speaking']]],
  ]);
});

test('l6-cp-decoding has exactly 10 scored items, passCount 8, and a distributed key', () => {
  const decoding = findActivity('l6-cp-decoding', 'controlledPractice');
  assert.equal(decoding.exercises.length, 10);
  assert.equal(decoding.passCount, 8);
  const indexes = decoding.exercises.map((exercise) => exercise.kind === 'singleChoice' ? exercise.correctIndex : -1);
  assert.deepEqual(indexes, [0, 1, 0, 1, 2, 1, 0, 1, 0, 1]);
  assert.notEqual(new Set(indexes).size, 1);
  const decodingPassCount = decoding.passCount;
  if (typeof decodingPassCount !== 'number') assert.fail('l6-cp-decoding needs a numeric passCount');
  assert.equal(indexes.filter((index) => index === 0).length < decodingPassCount, true);
});

test('pronunciation recording evidence is PARTIAL and never auto-passes', () => {
  const recording = findActivity('l6-record-pronunciation-review', 'recording');
  const evidence = recordingCompletionEvidence(recording.id);
  assert.equal(evidence.evidenceMode, 'partial');
  assert.equal(evidence.passed, false);
  assert.equal(evidence.recordingCompleted, true);
  assert.match(recording.targetText, /szép.*sok.*magyar.*kutya.*nyár.*hely/);
});

test('l6-cp-present-verbs has 10 mixed items, passCount 8, and no definite/accusative scored requirement', () => {
  const present = findActivity('l6-cp-present-verbs', 'controlledPractice');
  assert.equal(present.exercises.length, 10);
  assert.equal(present.passCount, 8);
  const text = JSON.stringify(present);
  assert.doesNotMatch(text, /szeretem|olvasom|látom|tanulom|nézem|eszem/);
  assert.doesNotMatch(text, /könyvet|szavakat|almát|házat|kávét|tanultam|tanulnék|fogok tanulni/);
});

test('l6-cp-plural-articles has 10 mixed items, passCount 8, unique article options, and the number rule', () => {
  const plural = findActivity('l6-cp-plural-articles', 'controlledPractice');
  assert.equal(plural.exercises.length, 10);
  assert.equal(plural.passCount, 8);
  for (const exercise of plural.exercises) {
    if (exercise.kind === 'singleChoice') {
      assert.equal(new Set(exercise.options).size, exercise.options.length, exercise.id);
    }
  }
  const numberRule = plural.exercises.find((exercise) => exercise.id === 'l6-plural-article-8');
  assert.ok(numberRule && numberRule.kind === 'singleChoice');
  if (numberRule && numberRule.kind === 'singleChoice') {
    assert.equal(numberRule.options[numberRule.correctIndex], 'könyv');
    assert.match(numberRule.explanation ?? '', /единственном/);
  }
});

test('ReadingTask carries genuine prose comprehension with an explicit 4/5 threshold', () => {
  const reading = findActivity('l6-reading-a0-profile', 'reading');
  const content = reading.content;
  assert.ok(content);
  assert.equal(content.type, 'prose');
  if (content.type === 'prose') {
    assert.ok(content.paragraphs.length >= 4);
  }
  assert.equal(reading.passCount, 4);
  assert.equal(reading.questions.length, 5);
  for (const question of reading.questions) {
    assert.equal(new Set(question.options).size, question.options.length);
    assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length);
  }
});

test('ReadingTask never satisfies the listening objective', () => {
  const exit = findActivity('l6-exit-check', 'exitCheck');
  const numbers = exit.checks.find((check) => check.objectiveId === 'l6_review-numbers');
  assert.ok(numbers);
  assert.equal(numbers.activityId, 'l6-listening-a0-review');
  const referenced = exit.checks.flatMap((check) => [
    check.activityId,
    ...(check.evidenceComponents ?? []).map((component) => component.activityId),
  ]);
  assert.equal(referenced.includes('l6-reading-a0-profile'), false);
});

test('L6 listening has the exact asset id, missing state, five questions, and a 4/5 threshold', () => {
  const listening = findActivity('l6-listening-a0-review', 'listening');
  assert.equal(listening.assetId, 'l6_listening_a0_review');
  assert.equal(listening.audioStatus, 'missing');
  assert.equal(listening.questions.length, 5);
  assert.equal(listening.passCount, 4);
  assert.equal(existsSync(new URL('../public/audio/l6_listening_a0_review.mp3', import.meta.url)), false);
  const evidence = listeningEvidence(listening, 5, 5);
  assert.equal(evidence.passed, false);
  assert.equal(evidence.evidenceMode, 'none');
});

test('L6 listening covers gist, name, day, time, and a schedule detail', () => {
  const listening = findActivity('l6-listening-a0-review', 'listening');
  const text = JSON.stringify(listening.questions);
  assert.match(text, /разговор/);
  assert.match(text, /второго собеседника/);
  assert.match(text, /В какой день/);
  assert.match(text, /Во сколько/);
  assert.match(text, /субботу/);
  assert.equal(shouldShowTranscript(false), false);
  assert.equal(shouldShowTranscript(true), true);
});

test('L6 listening transcript places Hogy vagy? before Jól vagyok, köszönöm.', () => {
  const listening = findActivity('l6-listening-a0-review', 'listening');
  assert.ok(listening.transcript.includes('Hogy vagy?'));
  assert.ok(listening.transcript.includes('Jól vagyok, köszönöm.'));
  assert.ok(
    listening.transcript.indexOf('Hogy vagy?') < listening.transcript.indexOf('Jól vagyok, köszönöm.'),
    'Hogy vagy? must occur before Jól vagyok, köszönöm.'
  );
});

test('schedule RolePlay requires two recorded learner responses and stays PARTIAL', () => {
  const rolePlay = findActivity('l6-roleplay-schedule', 'rolePlay');
  const recorded = rolePlay.turns.filter((turn) => turn.speaker === 'learner' && turn.responseMode === 'recorded');
  assert.equal(recorded.length, 2);
  assert.equal(rolePlayRecordingRequirementMet(rolePlay, new Set(recorded.map((turn) => turn.id))), true);
  assert.equal(rolePlayRecordingRequirementMet(rolePlay, new Set([recorded[0].id])), false);
  const evidence = rolePlayCompletionEvidence(rolePlay.id);
  assert.equal(evidence.evidenceMode, 'partial');
  assert.equal(evidence.passed, false);
});

test('profile WritingTask requires four facts and remains PARTIAL', () => {
  const writing = findActivity('l6-writing-profile', 'writing');
  assert.match(writing.prompt, /имя/);
  assert.match(writing.prompt, /национальность|происхождение/);
  assert.match(writing.prompt, /текущее действие|учёба\/работа|учёба|работа/);
  assert.match(writing.prompt, /день и время/);
  const evidence = writingEvidence('A nevem Anna. Magyar vagyok. Magyarul tanulok.', true);
  assert.equal(evidence.evidenceMode, 'partial');
  assert.equal(evidence.passed, false);
});

test('personal monologue RecordingTask remains PARTIAL and unscored', () => {
  const recording = findActivity('l6-record-profile', 'recording');
  const evidence = recordingCompletionEvidence(recording.id);
  assert.equal(evidence.evidenceMode, 'partial');
  assert.equal(evidence.passed, false);
});

test('reflection is static, non-mastery, and never creates ActivityEvidence', () => {
  const reflectionSlide = LESSON_6.slides.find((slide) => slide.id === 8);
  assert.ok(reflectionSlide);
  assert.equal((reflectionSlide.activities ?? []).length, 0);
  assert.match(reflectionSlide.body ?? '', /не оценка мастерства/);
  assert.doesNotMatch(JSON.stringify(LESSON_6), /от 1 до 5 баллов/);
});

test('ExitCheck semantics: alphabet stays PARTIAL, verb and plural can be DIRECT, numbers and self-assess stay PARTIAL', () => {
  const exit = findActivity('l6-exit-check', 'exitCheck');
  const findCheck = (id: string) => {
    const row = exit.checks.find((candidate) => candidate.objectiveId === id);
    assert.ok(row, `missing check ${id}`);
    return row;
  };

  const alphabet = findCheck('l6_review-alphabet');
  const alphabetRecording = recordingCompletionEvidence('l6-record-pronunciation-review');
  assert.equal(describeExitCheckStatus(alphabet, directEvidence('l6-cp-decoding'), {
    [alphabetRecording.activityId]: alphabetRecording,
  }).kind, 'partial-review');
  assert.equal(describeExitCheckStatus(alphabet, directEvidence('l6-cp-decoding', false), {}).kind, 'direct-not-met');

  const verb = findCheck('l6_review-verb-conj');
  assert.equal(describeExitCheckStatus(verb, directEvidence('l6-cp-present-verbs'), {}).kind, 'direct-met');
  assert.equal(describeExitCheckStatus(verb, directEvidence('l6-cp-present-verbs', false), {}).kind, 'direct-not-met');

  const numbers = findCheck('l6_review-numbers');
  const numbersRecording = rolePlayCompletionEvidence('l6-roleplay-schedule');
  assert.equal(describeExitCheckStatus(numbers, missingEvidence('l6-listening-a0-review'), {
    [numbersRecording.activityId]: numbersRecording,
  }).kind, 'partial-review');
  assert.equal(describeExitCheckStatus(numbers, directEvidence('l6-listening-a0-review'), {
    [numbersRecording.activityId]: numbersRecording,
  }).kind, 'partial-review');

  const plural = findCheck('l6_review-plural');
  assert.equal(describeExitCheckStatus(plural, directEvidence('l6-cp-plural-articles'), {}).kind, 'direct-met');

  const selfAssess = findCheck('l6_self-assess');
  const profileRecording = recordingCompletionEvidence('l6-record-profile');
  assert.equal(describeExitCheckStatus(selfAssess, {
    activityId: 'l6-writing-profile', attempted: true, completed: true, evidenceMode: 'partial', passed: false,
  }, {
    [profileRecording.activityId]: profileRecording,
  }).kind, 'partial-review');
});

test('missing listening audio plus completed RolePlay never becomes DIRECT', () => {
  const exit = findActivity('l6-exit-check', 'exitCheck');
  const numbers = exit.checks.find((row) => row.objectiveId === 'l6_review-numbers')!;
  const status = describeExitCheckStatus(numbers, missingEvidence('l6-listening-a0-review'), {
    'l6-roleplay-schedule': rolePlayCompletionEvidence('l6-roleplay-schedule'),
  });
  assert.equal(status.kind, 'partial-review');
  assert.notEqual(status.kind, 'direct-met');
});

test('Q604 has unique options and Q608 is no longer a metadata question', () => {
  const q604 = LESSON_6.quiz?.find((question) => question.id === 604);
  const q608 = LESSON_6.quiz?.find((question) => question.id === 608);
  assert.ok(q604 && q608);
  assert.equal(new Set(q604.options).size, q604.options.length);
  assert.doesNotMatch(q608.question, /тема|урок|уровень/i);
  assert.match(q608.question, /tanul/);
});

test('all eight L6 quiz items have unique options, one intended answer, and no course-organization knowledge', () => {
  for (const question of LESSON_6.quiz ?? []) {
    assert.equal(new Set(question.options).size, question.options.length, `quiz ${question.id}`);
    assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length);
    assert.doesNotMatch(question.question, /какой урок|тема уровня|принадлежит|следующий урок/i);
  }
});

test('legacy out-of-scope A1+ forms are removed from learner-facing and scored content', () => {
  const text = JSON.stringify(LESSON_6);
  for (const banned of [
    'könyvet', 'asztalnál', 'barátaimmal', 'szeretem', 'Mkhitárnak', 'Hétfőtől', 'péntekig',
    'megismertelek', 'reggelizem', 'nyelvet',
  ]) {
    assert.equal(text.includes(banned), false, `unexpected ${banned}`);
  }
  assert.doesNotMatch(text, /\bmert\b|\bbár\b/iu);
});

test('L6 learner-facing text does not claim certification or A1 readiness', () => {
  const text = JSON.stringify(LESSON_6);
  assert.doesNotMatch(text, /Ты доказал/);
  assert.doesNotMatch(text, /полностью освоил/);
  assert.doesNotMatch(text, /готов к A1/);
  assert.doesNotMatch(text, /Поздравляю/);
  assert.match(text, /Ты завершил обзор материала A0/);
  assert.match(text, /ExitCheck показывает/);
});

test('L6 metadata matches the migrated lesson module', () => {
  const meta = LESSONS_META.find((candidate) => candidate.id === 6);
  assert.ok(meta);
  assert.equal(meta.title, LESSON_6.title);
  assert.equal(meta.subtitle, LESSON_6.subtitle);
  assert.equal(meta.description, LESSON_6.description);
  assert.equal(meta.level, LESSON_6.level);
  assert.equal(meta.slidesCount, LESSON_6.slidesCount);
});

test('L6 vocabulary recycles L1–L5 material only and avoids untaught lexemes', () => {
  const vocabulary = LESSON_6.vocabulary ?? [];
  assert.equal(vocabulary.length, 6);
  const text = JSON.stringify(vocabulary);
  assert.doesNotMatch(text, /nehéz|nyelv|néha/);
  assert.match(text, /Review ·/);
  assert.equal(new Set(vocabulary.map((item) => item.id)).size, vocabulary.length);
  for (const item of vocabulary) {
    if (item.relatedLessonId) {
      assert.equal(LESSONS_META.some((meta) => meta.number === item.relatedLessonId), true);
    }
  }
});
