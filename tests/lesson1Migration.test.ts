import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  LESSON_1,
  L1_READ_ALOUD_WORDS,
  L1_SOFT_CONSONANT_LISTENING_TOKENS,
  L1_S_SZ_LISTENING_TOKENS,
  L1_VOWEL_LISTENING_TOKENS,
} from '../src/data/lessons/lesson1.ts';
import { LESSON_4 } from '../src/data/lessons/lesson4.ts';
import { LESSON_6 } from '../src/data/lessons/lesson6.ts';
import { LESSONS_META, loadLesson } from '../src/data/lessons/index.ts';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations.ts';
import { RecordingTask } from '../src/components/activities/RecordingTask.tsx';
import type { ActivityEvidence, LessonActivity } from '../src/types.ts';
import {
  describeExitCheckStatus,
  listeningEvidence,
  recordingCompletionEvidence,
  validateActivity,
  validateExitCheckReferences,
  validateLessonQuestionIds,
} from '../src/utils/activityUtils.ts';
import { isAnswerAccepted } from '../src/utils/answerNormalization.ts';
import { getLessonVocabulary } from '../src/utils/lessonQuizAndVocab.ts';

function sha256(url: URL): string {
  return createHash('sha256').update(readFileSync(url)).digest('hex').toUpperCase();
}

const L1_ACTIVITIES = LESSON_1.slides.flatMap((slide) => slide.activities ?? []);

function findActivity<TKind extends LessonActivity['kind']>(
  id: string,
  kind: TKind
): Extract<LessonActivity, { kind: TKind }> {
  const activity = L1_ACTIVITIES.find((candidate) => candidate.id === id);
  assert.ok(activity, `missing L1 activity ${id}`);
  assert.equal(activity.kind, kind);
  return activity as Extract<LessonActivity, { kind: TKind }>;
}

function directEvidence(activityId: string, passed = true): ActivityEvidence {
  return {
    activityId,
    attempted: true,
    completed: true,
    evidenceMode: 'direct',
    passed,
  };
}

function missingEvidence(activityId: string, score = 10, total = 10): ActivityEvidence {
  return {
    activityId,
    attempted: true,
    completed: true,
    evidenceMode: 'none',
    passed: false,
    score,
    total,
  };
}

test('L1 preserves lesson identity, 11 physical slides, five objective IDs, and quiz IDs 101–106', () => {
  assert.equal(LESSON_1.id, 1);
  assert.equal(LESSON_1.number, 1);
  assert.equal(LESSON_1.level, 'A0');
  assert.equal(LESSON_1.slidesCount, 11);
  assert.deepEqual(LESSON_1.slides.map((slide) => slide.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  assert.deepEqual(LESSON_1.objectives?.map((objective) => objective.id), [
    'l1_distinguish-s-sz',
    'l1_distinguish-soft-consonants',
    'l1_distinguish-long-vowels',
    'l1_apply-stress',
    'l1_read-aloud',
  ]);
  assert.deepEqual(LESSON_1.quiz?.map((question) => question.id), [101, 102, 103, 104, 105, 106]);
});

test('L1 migration keeps the curriculum at exactly 139 objectives', async () => {
  let count = 0;
  for (const meta of LESSONS_META) {
    const lesson = await loadLesson(meta.id);
    count += lesson?.objectives?.length ?? 0;
  }
  assert.equal(count, 139);
});

test('L2, L3, L4, L5, and L15 approved lesson modules remain byte-for-byte frozen', () => {
  assert.equal(sha256(new URL('../src/data/lessons/lesson2.ts', import.meta.url)), '91DF3BC496A79898F421D42E7B7F376ED1BA108A3F81C6886777364C65B6EA19');
  assert.equal(sha256(new URL('../src/data/lessons/lesson3.ts', import.meta.url)), '7FF81838BB2610D46A5B1F93408A419D7D668287388F705D75F3AAF3D0F898BF');
  assert.equal(sha256(new URL('../src/data/lessons/lesson4.ts', import.meta.url)), 'E44AFA95D968A513F649C3B193AE2CEED588596DA53EEFB1008132ED1A3D4852');
  assert.equal(sha256(new URL('../src/data/lessons/lesson5.ts', import.meta.url)), 'F13947BD8C817B686DFA82B1B91BD48CA45CD37EA0796148B29AF2D6517C3F50');
  assert.equal(sha256(new URL('../src/data/lessons/lesson15.ts', import.meta.url)), '022977AD8EAAAE2A14FDDEF2FF792FA35D5A0A882EDF66E93BFF5B68B9D9E586');
});

test('L6 is migrated with activities and L7 remains unmigrated', () => {
  assert.equal(LESSON_6.slides.some((slide) => (slide.activities?.length ?? 0) > 0), true);
  assert.equal(sha256(new URL('../src/data/lessons/lesson7.ts', import.meta.url)), '23368A7EB5059E2F54E163A726736D41B5ED7D23BB51A70315C89D5A5C5ED0BB');
});

test('frozen planning, translation, and slide-audio manifest files remain unchanged', () => {
  assert.equal(sha256(new URL('../docs/LESSON_MIGRATION_MATRIX.md', import.meta.url)), '59F6519EEEE5EF4D48978DC0409145F2DC35CF59787AC05B00E31AC36BF91DDE');
  assert.equal(sha256(new URL('../docs/CURRICULUM_BLUEPRINT.md', import.meta.url)), 'B8F4165A237CC7B511D3AA108F5418CE2BAB2DB8DD39E3A394013B0F6491FC2E');
  assert.equal(sha256(new URL('../docs/MODEL_LESSON_L15_SPEC.md', import.meta.url)), '94FB08607855A6A7759916AFA8E8424FDEB136F241ADC7020FBDD9339E86AD30');
  assert.equal(sha256(new URL('../src/data/lessonTranslations.ts', import.meta.url)), '2FCEE83D0BBC849966B8C09B45F17F77B396EE2977DB047D17F6146AA0B31F4A');
  assert.equal(sha256(new URL('../src/data/slideAudioManifest.ts', import.meta.url)), '4D3C6CCEBE42C4C7EC8358F15C46233AC0BDE3C04799BB95DB7C345EF5C03281');
});

test('L1 translations and effective six-card vocabulary remain exact', () => {
  assert.deepEqual(LESSON_TRANSLATION_MAP[1], [
    { id: 'l1_t1', lessonNumber: 1, direction: 'hu-to-ru', sourceText: 'A kert szép.', targetText: 'Сад красивый.' },
    { id: 'l1_t2', lessonNumber: 1, direction: 'ru-to-hu', sourceText: 'Собака умная.', targetText: 'A kutya okos.', acceptableVariants: ['A kutya okos.'] },
  ]);
  assert.deepEqual(getLessonVocabulary(LESSON_1).map((item) => item.id), [
    'l1_v1', 'l1_v2', 'l1_v3', 'l1_v4', 'l1_v5', 'l1_v6',
  ]);
});

test('L1 metadata matches the migrated lesson module', () => {
  const meta = LESSONS_META.find((candidate) => candidate.id === 1);
  assert.ok(meta);
  assert.equal(meta.title, LESSON_1.title);
  assert.equal(meta.subtitle, LESSON_1.subtitle);
  assert.equal(meta.description, LESSON_1.description);
  assert.equal(meta.slidesCount, LESSON_1.slidesCount);
});

test('L1 says 44 letters/letter units, includes digraphs and dzs, and never says 44 sounds', () => {
  const lessonText = JSON.stringify(LESSON_1);
  assert.match(lessonText, /44 буквы\/буквенные единицы/);
  assert.match(lessonText, /диграф/);
  assert.match(lessonText, /триграф dzs/);
  assert.doesNotMatch(lessonText, /44 звук/iu);
  assert.doesNotMatch(lessonText, /1 буква\/сочетание\s*=\s*1 звук/iu);
  assert.match(lessonText, /не универсальный закон/iu);
});

test('L1 teaches gy /ɟ/, ty /c/, ny /ɲ/ as separate phonemes with bounded Russian approximations', () => {
  const lessonText = JSON.stringify(LESSON_1);
  assert.match(lessonText, /gy → \/ɟ\//);
  assert.match(lessonText, /ty → \/c\//);
  assert.match(lessonText, /ny → \/ɲ\//);
  assert.match(lessonText, /отдельные фонемы/iu);
  assert.match(lessonText, /грубая подсказка/iu);
  assert.match(lessonText, /не обычное русское смягчение/iu);
});

test('L1 teaches j and ly as /j/ without an acoustic spelling contrast', () => {
  const lessonText = JSON.stringify(LESSON_1);
  assert.match(lessonText, /j = ly = \/j\//);
  assert.match(lessonText, /акустического контраста j и ly нет/iu);
  const listening = findActivity('l1-listening-soft-consonants', 'listening');
  for (const question of listening.questions) {
    assert.doesNotMatch(question.question, /j.*ly|ly.*j/iu);
  }
  assert.equal(listening.questions.filter((question) => !('kind' in question) && question.correctIndex === 3).length, 2);
});

test('L1 teaches quality plus duration for a/á and e/é', () => {
  const lessonText = JSON.stringify(LESSON_1);
  assert.match(lessonText, /a ≈ \/ɒ\/, á ≈ \/aː\//);
  assert.match(lessonText, /e ≈ \/ɛ\/, é ≈ \/eː\//);
  assert.match(lessonText, /длительность, и качество/iu);
});

test('all three required L1 ListeningTasks have exact IDs, assets, missing state, and thresholds', () => {
  const expected = [
    ['l1-listening-s-sz', 'l1_listening_s_sz'],
    ['l1-listening-soft-consonants', 'l1_listening_soft_consonants'],
    ['l1-listening-vowel-length', 'l1_listening_vowel_length'],
  ] as const;
  for (const [id, assetId] of expected) {
    const listening = findActivity(id, 'listening');
    assert.equal(listening.assetId, assetId);
    assert.equal(listening.audioStatus, 'missing');
    assert.equal(listening.passCount, 8);
    assert.equal(listening.questions.length, 10);
    assert.equal(existsSync(new URL(`../public/audio/${assetId}.mp3`, import.meta.url)), false);
    assert.deepEqual(listeningEvidence(listening, 10, 10), {
      passed: false,
      evidenceMode: 'none',
      score: 10,
      total: 10,
    });
  }
  assert.doesNotMatch(JSON.stringify(LESSON_1), /l1_listening_stress/);
});

test('s/sz listening uses ten natural balanced unseen tokens without visual answers', () => {
  assert.deepEqual(L1_S_SZ_LISTENING_TOKENS.map((token) => token.word), [
    'sál', 'szó', 'sör', 'szoba', 'séta', 'szín', 'sima', 'sziget', 'só', 'szőlő',
  ]);
  assert.equal(L1_S_SZ_LISTENING_TOKENS.filter((token) => token.correctIndex === 0).length, 5);
  assert.equal(L1_S_SZ_LISTENING_TOKENS.filter((token) => token.correctIndex === 1).length, 5);
  const listening = findActivity('l1-listening-s-sz', 'listening');
  for (const [index, question] of listening.questions.entries()) {
    assert.doesNotMatch(question.question, new RegExp(L1_S_SZ_LISTENING_TOKENS[index].word, 'iu'));
  }
});

test('soft-consonant listening has ten valid category items and never scores j versus ly acoustically', () => {
  assert.deepEqual(L1_SOFT_CONSONANT_LISTENING_TOKENS.map((token) => token.word), [
    'magyar', 'kutya', 'nyár', 'jó', 'hegy', 'kártya', 'kenyér', 'hely', 'hagyma', 'lány',
  ]);
  assert.deepEqual(
    [0, 1, 2, 3].map((category) => L1_SOFT_CONSONANT_LISTENING_TOKENS.filter((token) => token.correctIndex === category).length),
    [3, 2, 3, 2]
  );
  const listening = findActivity('l1-listening-soft-consonants', 'listening');
  const jQuestions = listening.questions.filter((question) => !('kind' in question) && question.correctIndex === 3);
  for (const question of jQuestions) {
    assert.equal('kind' in question, false);
    if (!('kind' in question)) {
      assert.equal(question.options[3], '/j/ (на письме j или ly)');
    }
  }
});

test('vowel listening has ten valid exact-entry items including quality-sensitive pairs', () => {
  assert.deepEqual(L1_VOWEL_LISTENING_TOKENS.map((token) => token.word), [
    'hat', 'hát', 'meg', 'még', 'kor', 'kór', 'öröm', 'őr', 'út', 'tűz',
  ]);
  const listening = findActivity('l1-listening-vowel-length', 'listening');
  assert.ok(listening.questions.every((question) => 'kind' in question && question.kind === 'textInput'));
  assert.deepEqual(listening.questions.map((question) => 'kind' in question ? question.accept[0] : ''), L1_VOWEL_LISTENING_TOKENS.map((token) => token.word));
});

test('Hungarian answer normalization preserves every required vowel diacritic contrast', () => {
  for (const [short, long] of [['a', 'á'], ['e', 'é'], ['o', 'ó'], ['ö', 'ő'], ['u', 'ú'], ['ü', 'ű']]) {
    assert.equal(isAnswerAccepted(short, [long]), false, `${short} must differ from ${long}`);
    assert.equal(isAnswerAccepted(long, [short]), false, `${long} must differ from ${short}`);
  }
});

test('visual s/sz and vowel orthographic ControlledPractice are bounded and valid', () => {
  const sSz = findActivity('l1-cp-s-sz-reading', 'controlledPractice');
  assert.equal(sSz.exercises.length, 10);
  assert.equal(sSz.passCount, 8);
  const vowels = findActivity('l1-cp-vowel-spelling', 'controlledPractice');
  assert.equal(vowels.exercises.length, 12);
  assert.equal(vowels.passCount, 10);
  assert.deepEqual(validateActivity(sSz), []);
  assert.deepEqual(validateActivity(vowels), []);
});

test('stress uses direct rule practice with an obligatory explicit rule item and no listening asset', () => {
  const stress = findActivity('l1-cp-stress-rule', 'controlledPractice');
  assert.equal(stress.exercises.length, 5);
  assert.equal(stress.passCount, 5);
  assert.match(stress.exercises[0].prompt, /изолированном венгерском слове/iu);
  assert.equal(stress.exercises[0].kind, 'singleChoice');
  if (stress.exercises[0].kind === 'singleChoice') {
    assert.equal(stress.exercises[0].options[stress.exercises[0].correctIndex], 'На первый слог');
  }
  assert.equal(L1_ACTIVITIES.some((activity) => activity.kind === 'listening' && /stress/i.test(activity.id)), false);
});

test('generic RecordingTask validates and completion evidence is always unscored PARTIAL', () => {
  const recording = findActivity('l1-record-five-words', 'recording');
  assert.deepEqual(validateActivity(recording), []);
  assert.deepEqual(recordingCompletionEvidence(recording.id), {
    activityId: recording.id,
    attempted: true,
    completed: true,
    evidenceMode: 'partial',
    passed: false,
    recordingCompleted: true,
  });
  assert.ok(validateActivity({ ...recording, targetText: ' ' }).some((error) => /empty recording targetText/.test(error)));
});

test('RecordingTask emits evidence only from AudioRecorder onRecordingReady and supports retry/reset', () => {
  const source = readFileSync(new URL('../src/components/activities/RecordingTask.tsx', import.meta.url), 'utf8');
  assert.match(source, /onRecordingReady=\{handleRecordingReady\}/);
  assert.match(source, /onEvidence\(recordingCompletionEvidence\(data\.id\)\)/);
  assert.match(source, /onResetEvidence\?\.\(data\.id\)/);
  assert.match(source, /setRecorderRevision/);
  assert.doesNotMatch(source, /l1[-_]|lesson\s*===?\s*1/i);
});

test('recording component is reusable, mobile-wrapping, textual, and microphone-accessible', () => {
  const recording = findActivity('l1-record-five-words', 'recording');
  const evidence = recordingCompletionEvidence(recording.id);
  const markup = renderToStaticMarkup(React.createElement(RecordingTask, {
    data: recording,
    evidence,
    onEvidence: () => undefined,
    onResetEvidence: () => undefined,
  }));
  assert.match(markup, /min-w-0/);
  assert.match(markup, /flex-wrap/);
  assert.match(markup, /Запись получена · PARTIAL/);
  assert.match(markup, /произношение ожидает квалифицированной проверки/);
  assert.match(markup, /Записать заново/);
  assert.match(markup, /aria-label="Записать ответ с микрофона"/);
  const recorderSource = readFileSync(new URL('../src/components/AudioRecorder.tsx', import.meta.url), 'utf8');
  assert.match(recorderSource, /Не удалось получить доступ к микрофону\. Проверьте разрешения браузера\./);
  assert.match(recorderSource, /role="alert"/);
});

test('L1 controlled and listening controls expose textual feedback, focus, and narrow-screen wrapping', () => {
  const controlledSource = readFileSync(new URL('../src/components/activities/ControlledPractice.tsx', import.meta.url), 'utf8');
  const listeningSource = readFileSync(new URL('../src/components/activities/ListeningTask.tsx', import.meta.url), 'utf8');
  assert.match(controlledSource, /state\.correct \? 'Верно\.'/);
  assert.match(controlledSource, /Неверно\. Правильный ответ:/);
  assert.match(controlledSource, /role="status"/);
  assert.match(controlledSource, /aria-live="polite"/);
  assert.match(controlledSource, /aria-hidden="true"/);
  assert.match(controlledSource, /focus-visible:ring-2/);
  assert.match(controlledSource, /break-words/);
  assert.match(listeningSource, /min-h-11/);
  assert.match(listeningSource, /focus-visible:ring-2/);
});

test('five-word read-aloud is exact, required, real, and replaces the advanced sentence as evidence', () => {
  assert.deepEqual(L1_READ_ALOUD_WORDS, ['gyár', 'tyúk', 'nyolc', 'játék', 'folyó']);
  const slide = LESSON_1.slides.find((candidate) => candidate.id === 10);
  assert.ok(slide);
  assert.equal(slide.type, 'read-aloud-practice');
  assert.doesNotMatch(JSON.stringify(slide), /Budapesten élek, és nagyon szeretek magyarul tanulni/);
  const recording = findActivity('l1-record-five-words', 'recording');
  assert.equal(recording.targetText, 'gyár, tyúk, nyolc, játék, folyó');
  assert.equal(recording.rubric?.length, 5);
});

test('migrated read-aloud slide renders one recorder path, not the legacy duplicate', () => {
  const recording = findActivity('l1-record-five-words', 'recording');
  const markup = renderToStaticMarkup(React.createElement(RecordingTask, {
    data: recording,
    onEvidence: () => undefined,
  }));
  assert.equal((markup.match(/Тренажёр произношения/g) ?? []).length, 1);
  const slideContentSource = readFileSync(new URL('../src/components/SlideContent.tsx', import.meta.url), 'utf8');
  assert.match(slideContentSource, /slide\.type === 'sentence-reading'/);
  assert.notEqual(LESSON_1.slides.find((slide) => slide.id === 10)?.type, 'sentence-reading');
});

test('generic recording architecture has a type, validator, renderer branch, and reused AudioRecorder', () => {
  const files = [
    '../src/types.ts',
    '../src/utils/activityUtils.ts',
    '../src/components/activities/LessonActivityRenderer.tsx',
    '../src/components/activities/RecordingTask.tsx',
  ];
  const sources = files.map((file) => readFileSync(new URL(file, import.meta.url), 'utf8'));
  assert.match(sources[0], /interface RecordingTaskData/);
  assert.match(sources[1], /case 'recording'/);
  assert.match(sources[2], /case 'recording'/);
  assert.match(sources[3], /import \{ AudioRecorder \}/);
  for (const source of sources) assert.doesNotMatch(source, /l1[-_]/i);
});

test('existing L2/L5/L15 RolePlay and L4 sentence-reading recording paths remain unchanged', () => {
  assert.equal(LESSON_4.slides.some((slide) => slide.type === 'sentence-reading'), true);
  for (const lessonPath of ['lesson2.ts', 'lesson5.ts', 'lesson15.ts']) {
    const source = readFileSync(new URL(`../src/data/lessons/${lessonPath}`, import.meta.url), 'utf8');
    assert.match(source, /responseMode: 'recorded'/);
  }
});

test('all L1 activity and QuestionSet question IDs are lesson-wide unique and valid', () => {
  const activityIds = L1_ACTIVITIES.map((activity) => activity.id);
  assert.equal(new Set(activityIds).size, activityIds.length);
  assert.deepEqual(L1_ACTIVITIES.flatMap(validateActivity), []);
  assert.deepEqual(validateLessonQuestionIds(L1_ACTIVITIES), []);
});

test('L1 ExitCheck has one resolvable row per objective with the exact evidence graph', () => {
  const exit = findActivity('l1-exit-check', 'exitCheck');
  assert.deepEqual(exit.checks.map((check) => check.objectiveId), LESSON_1.objectives?.map((objective) => objective.id));
  assert.deepEqual(validateExitCheckReferences(
    exit,
    LESSON_1.objectives?.map((objective) => objective.id) ?? [],
    L1_ACTIVITIES.map((activity) => activity.id)
  ), []);
  assert.deepEqual(exit.checks.map((check) => [
    check.objectiveId,
    check.activityId,
    check.evidenceComponents?.map((component) => component.activityId) ?? [],
  ]), [
    ['l1_distinguish-s-sz', 'l1-listening-s-sz', ['l1-cp-s-sz-reading']],
    ['l1_distinguish-soft-consonants', 'l1-listening-soft-consonants', ['l1-cp-consonant-graphemes', 'l1-record-five-words']],
    ['l1_distinguish-long-vowels', 'l1-listening-vowel-length', ['l1-cp-vowel-spelling']],
    ['l1_apply-stress', 'l1-cp-stress-rule', ['l1-record-five-words']],
    ['l1_read-aloud', 'l1-record-five-words', []],
  ]);
});

test('L1 ControlledPractice correctIndex values are distributed and not all identical', () => {
  const sSz = findActivity('l1-cp-s-sz-reading', 'controlledPractice');
  const consonants = findActivity('l1-cp-consonant-graphemes', 'controlledPractice');
  const stress = findActivity('l1-cp-stress-rule', 'controlledPractice');

  const sSzIndexes = sSz.exercises.map((exercise) => exercise.kind === 'singleChoice' ? exercise.correctIndex : -1);
  const consonantIndexes = consonants.exercises.map((exercise) => exercise.kind === 'singleChoice' ? exercise.correctIndex : -1);
  const stressIndexes = stress.exercises.map((exercise) => exercise.kind === 'singleChoice' ? exercise.correctIndex : -1);

  assert.deepEqual(sSzIndexes, [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]);
  assert.deepEqual(consonantIndexes, [0, 1, 2, 3, 0, 1, 2, 0]);
  assert.deepEqual(stressIndexes, [0, 1, 1, 0, 1]);

  for (const indexes of [sSzIndexes, consonantIndexes, stressIndexes]) {
    assert.notEqual(new Set(indexes).size, 1, 'correctIndex must not be identical for every question');
    assert.equal(indexes.every((index) => index === 0), false, 'blind index-0 strategy must not pass every question');
  }
});

test('no DIRECT L1 ControlledPractice used by ExitCheck is passable by always choosing index 0', () => {
  const exit = findActivity('l1-exit-check', 'exitCheck');

  // Collect every controlledPractice that participates as a DIRECT producer:
  // either as a row's primary activity or as one of its evidence components.
  const directControlledPractice = new Set<string>();
  for (const check of exit.checks) {
    const primary = L1_ACTIVITIES.find((activity) => activity.id === check.activityId);
    if (primary?.kind === 'controlledPractice') directControlledPractice.add(check.activityId);
    for (const component of check.evidenceComponents ?? []) {
      const activity = L1_ACTIVITIES.find((candidate) => candidate.id === component.activityId);
      if (activity?.kind === 'controlledPractice') directControlledPractice.add(component.activityId);
    }
  }

  // The only guessable (single-choice) DIRECT controlled practices must be the
  // three in scope. l1-cp-vowel-spelling is text-input and cannot be guessed
  // by a fixed index, so it is intentionally excluded here.
  const singleChoiceIds = [...directControlledPractice]
    .filter((id) => {
      const activity = findActivity(id, 'controlledPractice');
      return activity.exercises.some((exercise) => exercise.kind === 'singleChoice');
    })
    .sort();

  assert.deepEqual(singleChoiceIds, [
    'l1-cp-consonant-graphemes',
    'l1-cp-s-sz-reading',
    'l1-cp-stress-rule',
  ]);

  for (const id of singleChoiceIds) {
    const activity = findActivity(id, 'controlledPractice');
    const passCount = activity.passCount;
    if (typeof passCount !== 'number') {
      assert.fail(`${id}: expected a numeric passCount`);
    }
    const indexZeroCorrectCount = activity.exercises.filter(
      (exercise) => exercise.kind === 'singleChoice' && exercise.correctIndex === 0
    ).length;
    assert.ok(
      indexZeroCorrectCount < passCount,
      `${id}: always choosing index 0 must not reach passCount ${passCount} (${indexZeroCorrectCount} index-0 answers)`
    );
  }
});

const L1_APPROVED_SINGLE_CHOICE_ANSWERS: Record<string, string> = {
  'l1-s-sz-cp-1': '/ʃ/',
  'l1-s-sz-cp-2': '/ʃ/',
  'l1-s-sz-cp-3': '/ʃ/',
  'l1-s-sz-cp-4': '/ʃ/',
  'l1-s-sz-cp-5': '/ʃ/',
  'l1-s-sz-cp-6': '/s/',
  'l1-s-sz-cp-7': '/s/',
  'l1-s-sz-cp-8': '/s/',
  'l1-s-sz-cp-9': '/s/',
  'l1-s-sz-cp-10': '/s/',
  'l1-soft-cp-1': '/ɟ/',
  'l1-soft-cp-2': '/c/',
  'l1-soft-cp-3': '/ɲ/',
  'l1-soft-cp-4': '/j/',
  'l1-soft-cp-5': '/j/',
  'l1-soft-cp-6': 'j и ly',
  'l1-soft-cp-7': 'Только как грубое приближение, не как обычное русское смягчение',
  'l1-soft-cp-8': '/j/',
  'l1-stress-cp-1': 'На первый слог',
  'l1-stress-cp-2': 'Bu-',
  'l1-stress-cp-3': 'ma-',
  'l1-stress-cp-4': 'fo-',
  'l1-stress-cp-5': 'kö-',
};

test('L1 ControlledPractice keeps the approved linguistic answers after option reordering', () => {
  for (const activityId of ['l1-cp-s-sz-reading', 'l1-cp-consonant-graphemes', 'l1-cp-stress-rule'] as const) {
    const activity = findActivity(activityId, 'controlledPractice');
    for (const exercise of activity.exercises) {
      if (exercise.kind !== 'singleChoice') continue;
      const approved = L1_APPROVED_SINGLE_CHOICE_ANSWERS[exercise.id];
      assert.ok(approved, `missing approved answer fixture for ${exercise.id}`);
      assert.equal(exercise.options[exercise.correctIndex], approved, exercise.id);
    }
  }
});

test('L1 soft-consonant ExitCheck requires listening, category practice, and partial recording', () => {
  const exit = findActivity('l1-exit-check', 'exitCheck');
  const check = exit.checks.find((row) => row.objectiveId === 'l1_distinguish-soft-consonants');
  assert.ok(check);
  assert.equal(check.activityId, 'l1-listening-soft-consonants');
  assert.equal(check.evidenceKind, 'listening');
  assert.deepEqual(check.evidenceComponents?.map((component) => component.activityId), [
    'l1-cp-consonant-graphemes',
    'l1-record-five-words',
  ]);
  assert.deepEqual(check.evidenceComponents?.map((component) => component.evidenceKind), [
    'reading',
    'pronunciation',
  ]);
});

test('L1 soft-consonant ExitCheck semantics preserve listening as mandatory DIRECT evidence', () => {
  const exit = findActivity('l1-exit-check', 'exitCheck');
  const check = exit.checks.find((row) => row.objectiveId === 'l1_distinguish-soft-consonants');
  assert.ok(check);
  const recording = recordingCompletionEvidence('l1-record-five-words');

  const caseA = describeExitCheckStatus(check, missingEvidence('l1-listening-soft-consonants'), {
    'l1-cp-consonant-graphemes': directEvidence('l1-cp-consonant-graphemes'),
    [recording.activityId]: recording,
  });
  assert.equal(caseA.kind, 'partial-review');
  assert.notEqual(caseA.kind, 'direct-met');

  const caseB = describeExitCheckStatus(check, directEvidence('l1-listening-soft-consonants'), {
    'l1-cp-consonant-graphemes': directEvidence('l1-cp-consonant-graphemes'),
    [recording.activityId]: recording,
  });
  assert.equal(caseB.kind, 'partial-review');
  assert.notEqual(caseB.kind, 'direct-met');

  const caseC = describeExitCheckStatus(check, directEvidence('l1-listening-soft-consonants'), {
    [recording.activityId]: recording,
  });
  assert.equal(caseC.kind, 'composite-incomplete');
});

test('L1 recording evidence remains PARTIAL and unscored', () => {
  const recording = recordingCompletionEvidence('l1-record-five-words');
  assert.equal(recording.evidenceMode, 'partial');
  assert.equal(recording.passed, false);
});

test('all other L1 ExitCheck mappings remain unchanged except soft-consonant category practice', () => {
  const exit = findActivity('l1-exit-check', 'exitCheck');
  const unchanged = exit.checks.filter((check) => check.objectiveId !== 'l1_distinguish-soft-consonants');
  assert.deepEqual(unchanged.map((check) => [
    check.objectiveId,
    check.activityId,
    check.evidenceComponents?.map((component) => component.activityId) ?? [],
  ]), [
    ['l1_distinguish-s-sz', 'l1-listening-s-sz', ['l1-cp-s-sz-reading']],
    ['l1_distinguish-long-vowels', 'l1-listening-vowel-length', ['l1-cp-vowel-spelling']],
    ['l1_apply-stress', 'l1-cp-stress-rule', ['l1-record-five-words']],
    ['l1_read-aloud', 'l1-record-five-words', []],
  ]);
});

test('L1 ExitCheck preserves NONE, DIRECT-component, and PARTIAL recording semantics', () => {
  const exit = findActivity('l1-exit-check', 'exitCheck');
  const recording = recordingCompletionEvidence('l1-record-five-words');
  const evidence: Record<string, ActivityEvidence> = {
    'l1-listening-s-sz': missingEvidence('l1-listening-s-sz'),
    'l1-cp-s-sz-reading': directEvidence('l1-cp-s-sz-reading'),
    'l1-listening-soft-consonants': missingEvidence('l1-listening-soft-consonants'),
    'l1-cp-consonant-graphemes': directEvidence('l1-cp-consonant-graphemes'),
    'l1-listening-vowel-length': missingEvidence('l1-listening-vowel-length'),
    'l1-cp-vowel-spelling': directEvidence('l1-cp-vowel-spelling'),
    'l1-cp-stress-rule': directEvidence('l1-cp-stress-rule'),
    [recording.activityId]: recording,
  };
  const status = Object.fromEntries(exit.checks.map((check) => [
    check.objectiveId,
    describeExitCheckStatus(check, evidence[check.activityId], evidence).kind,
  ]));
  assert.deepEqual(status, {
    'l1_distinguish-s-sz': 'none',
    'l1_distinguish-soft-consonants': 'partial-review',
    'l1_distinguish-long-vowels': 'none',
    'l1_apply-stress': 'partial-review',
    'l1_read-aloud': 'partial-review',
  });
});

test('L1 has no WritingTask or RolePlay and does not turn narration into listening evidence', () => {
  assert.equal(L1_ACTIVITIES.some((activity) => activity.kind === 'writing'), false);
  assert.equal(L1_ACTIVITIES.some((activity) => activity.kind === 'rolePlay'), false);
  const exit = findActivity('l1-exit-check', 'exitCheck');
  assert.ok(exit.checks.every((check) => !/^1\./.test(check.activityId)));
  assert.ok(L1_ACTIVITIES.filter((activity) => activity.kind === 'listening').every((activity) => activity.assetId.startsWith('l1_listening_')));
});

test('quiz Q103 is bounded, Q104 keeps j/ly = /j/, and Q105 targets /ɟ/', () => {
  const q103 = LESSON_1.quiz?.find((question) => question.id === 103);
  const q104 = LESSON_1.quiz?.find((question) => question.id === 104);
  const q105 = LESSON_1.quiz?.find((question) => question.id === 105);
  assert.ok(q103 && q104 && q105);
  assert.match(q103.question, /изолированном венгерском слове/iu);
  assert.match(q103.explanation, /Фразовая интонация/);
  assert.match(q104.options[q104.correctIndex], /\/j\//);
  assert.match(q104.explanation, /по звуку нельзя восстановить написание/iu);
  assert.equal(q105.options[q105.correctIndex], '/ɟ/');
  assert.match(q105.explanation, /грубой подсказкой/iu);
});

test('all six L1 retrieval questions have unique options and one valid intended answer', () => {
  for (const question of LESSON_1.quiz ?? []) {
    assert.equal(new Set(question.options).size, question.options.length, `quiz ${question.id}`);
    assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length);
  }
});

test('summary keeps corrected phonetic categories and does not group ly with gy/ty/ny', () => {
  const summary = LESSON_1.slides.find((slide) => slide.id === 11);
  assert.ok(summary?.body);
  assert.match(summary.body, /gy = \/ɟ\//);
  assert.match(summary.body, /ty = \/c\//);
  assert.match(summary.body, /ny = \/ɲ\//);
  assert.match(summary.body, /j = ly = \/j\//);
  assert.doesNotMatch(summary.body, /gy, ty, ny, ly[^<]*(группа|мягк)/iu);
});

test('slideNarrator fallback no longer preserves the old 44-sound, soft-group, or absolute stress model', () => {
  const source = readFileSync(new URL('../src/utils/slideNarrator.ts', import.meta.url), 'utf8');
  assert.match(source, /44 буквы и буквенные единицы/);
  assert.match(source, /gy — \/ɟ\/, ty — \/c\/, ny — \/ɲ\//);
  assert.match(source, /j и ly[^.]*передают один звук \/j\//);
  assert.match(source, /не описывают обычное русское смягчение/);
  assert.doesNotMatch(source, /44 звука|Мягкие согласные: дь, ть, нь, й|всегда падает исключительно/iu);
});

test('physical L1 slide narration exists but assessment MP3s remain absent and uncredited', () => {
  for (let slide = 1; slide <= 11; slide += 1) {
    assert.equal(existsSync(new URL(`../public/audio/1.${slide}.mp3`, import.meta.url)), true);
  }
  for (const assetId of ['l1_listening_s_sz', 'l1_listening_soft_consonants', 'l1_listening_vowel_length']) {
    assert.equal(existsSync(new URL(`../public/audio/${assetId}.mp3`, import.meta.url)), false);
  }
});
