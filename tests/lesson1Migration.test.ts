import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
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
import type { ActivityEvidence, LessonActivity } from '../src/types.ts';
import {
  describeExitCheckStatus,
  listeningEvidence,
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

test('global learner-recording removal preserves all lesson IDs', async () => {
  for (const meta of LESSONS_META) {
    assert.equal((await loadLesson(meta.id))?.id, meta.id);
  }
});

test('L6 and L7 remain migrated with activities', async () => {
  assert.equal(LESSON_6.slides.some((slide) => (slide.activities?.length ?? 0) > 0), true);
  const lesson7 = await loadLesson(7);
  assert.equal(lesson7?.slides.some((slide) => (slide.activities?.length ?? 0) > 0), true);
});

test('frozen planning, translation, and slide-audio manifest files remain unchanged', () => {
  assert.equal(sha256(new URL('../docs/LESSON_MIGRATION_MATRIX.md', import.meta.url)), '59F6519EEEE5EF4D48978DC0409145F2DC35CF59787AC05B00E31AC36BF91DDE');
  assert.equal(sha256(new URL('../docs/CURRICULUM_BLUEPRINT.md', import.meta.url)), '55936516561233D3D1AEC5E6D1EF21F32750A8B533AA470D098481743E39D923');
  assert.equal(sha256(new URL('../docs/MODEL_LESSON_L15_SPEC.md', import.meta.url)), '5235B352C368ECD97FBB78C5C4B5CB35515FD41763409ABC588F33A216B5154D');
  assert.equal(sha256(new URL('../src/data/lessonTranslations.ts', import.meta.url)), '3A3B8155BDB0CA11D0EB04031E9F7E83E79CDA73902EE96C77B31EB0FC76900D');
  assert.equal(sha256(new URL('../src/data/slideAudioManifest.ts', import.meta.url)), 'A4F3ADA4D52550A18953813011EEC1AB0FF2BDF87C2BB12B8C5535E198F0F2EC');
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

test('all three required L1 ListeningTasks have exact IDs, published state, and thresholds', () => {
  const expected = [
    ['l1-listening-s-sz', 'l1_listening_s_sz'],
    ['l1-listening-soft-consonants', 'l1_listening_soft_consonants'],
    ['l1-listening-vowel-length', 'l1_listening_vowel_length'],
  ] as const;
  for (const [id, assetId] of expected) {
    const listening = findActivity(id, 'listening');
    assert.equal(listening.assetId, assetId);
    assert.equal(listening.audioStatus, 'published');
    assert.equal(listening.passCount, 8);
    assert.equal(listening.questions.length, 10);
    assert.equal(existsSync(new URL(`../public/audio/${assetId}.mp3`, import.meta.url)), true);
    assert.deepEqual(listeningEvidence(listening, 10, 10), {
      passed: true,
      evidenceMode: 'direct',
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

test('L1 has no Recording activity and keeps read-aloud as optional text-only practice', () => {
  assert.equal(L1_ACTIVITIES.some((activity) => (activity as { kind: string }).kind === 'recording'), false);
  const speaking = LESSON_1.slides.find((slide) => slide.id === 10)?.optionalSpeaking;
  assert.ok(speaking);
  assert.equal(speaking.prompt, 'gyár, tyúk, nyolc, játék, folyó');
  assert.equal(speaking.rubric?.length, 4);
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
  assert.match(listeningSource, /<audio/);
  assert.match(listeningSource, /controls/);
  assert.match(listeningSource, /onError=\{handleAudioError\}/);
  assert.match(listeningSource, /audioReady && !audioError/);
  assert.match(listeningSource, /role="alert"/);
});

test('five-word read-aloud is exact, optional, and not evidence', () => {
  assert.deepEqual(L1_READ_ALOUD_WORDS, ['gyár', 'tyúk', 'nyolc', 'játék', 'folyó']);
  const slide = LESSON_1.slides.find((candidate) => candidate.id === 10);
  assert.ok(slide);
  assert.equal(slide.type, 'read-aloud-practice');
  assert.doesNotMatch(JSON.stringify(slide), /Budapesten élek, és nagyon szeretek magyarul tanulni/);
  assert.equal(slide.optionalSpeaking?.prompt, 'gyár, tyúk, nyolc, játék, folyó');
  assert.equal(L1_ACTIVITIES.some((activity) => /record-five-words/.test(activity.id)), false);
});

test('read-aloud and legacy sentence-reading render without a recorder', () => {
  const slideContentSource = readFileSync(new URL('../src/components/SlideContent.tsx', import.meta.url), 'utf8');
  assert.match(slideContentSource, /slide\.type === 'sentence-reading'/);
  assert.match(slideContentSource, /slide\.optionalSpeaking/);
  assert.doesNotMatch(slideContentSource, /AudioRecorder|getUserMedia|MediaRecorder/);
  assert.notEqual(LESSON_1.slides.find((slide) => slide.id === 10)?.type, 'sentence-reading');
});

test('generic learner Recording architecture is removed', () => {
  const files = [
    '../src/types.ts',
    '../src/utils/activityUtils.ts',
    '../src/components/activities/LessonActivityRenderer.tsx',
  ];
  const sources = files.map((file) => readFileSync(new URL(file, import.meta.url), 'utf8'));
  for (const source of sources) assert.doesNotMatch(source, /RecordingTaskData|recordingCompleted|case 'recording'|AudioRecorder/);
  assert.equal(existsSync(new URL('../src/components/AudioRecorder.tsx', import.meta.url)), false);
  assert.equal(existsSync(new URL('../src/components/activities/RecordingTask.tsx', import.meta.url)), false);
});

test('L2/L5/L15 RolePlay and L4 sentence-reading are text-only', () => {
  assert.equal(LESSON_4.slides.some((slide) => slide.type === 'sentence-reading'), true);
  for (const lessonPath of ['lesson2.ts', 'lesson5.ts', 'lesson15.ts']) {
    const source = readFileSync(new URL(`../src/data/lessons/${lessonPath}`, import.meta.url), 'utf8');
    assert.match(source, /responseMode: 'selfPractice'/);
    assert.doesNotMatch(source, /responseMode: 'recorded'/);
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
  const objectiveIds = LESSON_1.objectives?.map((objective) => objective.id) ?? [];
  assert.ok(exit.checks.every((check) => objectiveIds.includes(check.objectiveId)));
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
    ['l1_distinguish-soft-consonants', 'l1-listening-soft-consonants', ['l1-cp-consonant-graphemes']],
    ['l1_distinguish-long-vowels', 'l1-listening-vowel-length', ['l1-cp-vowel-spelling']],
    ['l1_apply-stress', 'l1-cp-stress-rule', []],
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

test('L1 soft-consonant ExitCheck requires listening and category practice only', () => {
  const exit = findActivity('l1-exit-check', 'exitCheck');
  const check = exit.checks.find((row) => row.objectiveId === 'l1_distinguish-soft-consonants');
  assert.ok(check);
  assert.equal(check.activityId, 'l1-listening-soft-consonants');
  assert.equal(check.evidenceKind, 'listening');
  assert.deepEqual(check.evidenceComponents?.map((component) => component.activityId), [
    'l1-cp-consonant-graphemes',
  ]);
  assert.deepEqual(check.evidenceComponents?.map((component) => component.evidenceKind), [
    'reading',
  ]);
});

test('L1 soft-consonant ExitCheck semantics preserve listening as mandatory DIRECT evidence', () => {
  const exit = findActivity('l1-exit-check', 'exitCheck');
  const check = exit.checks.find((row) => row.objectiveId === 'l1_distinguish-soft-consonants');
  assert.ok(check);
  const caseA = describeExitCheckStatus(check, missingEvidence('l1-listening-soft-consonants'), {
    'l1-cp-consonant-graphemes': directEvidence('l1-cp-consonant-graphemes'),
  });
  assert.equal(caseA.kind, 'partial-review');
  assert.notEqual(caseA.kind, 'direct-met');

  const caseB = describeExitCheckStatus(check, directEvidence('l1-listening-soft-consonants'), {
    'l1-cp-consonant-graphemes': directEvidence('l1-cp-consonant-graphemes'),
  });
  assert.equal(caseB.kind, 'direct-met');

  const caseC = describeExitCheckStatus(check, directEvidence('l1-listening-soft-consonants'), {});
  assert.equal(caseC.kind, 'composite-incomplete');
});

test('L1 optional speaking is absent from ExitCheck evidence', () => {
  const exit = findActivity('l1-exit-check', 'exitCheck');
  assert.doesNotMatch(JSON.stringify(exit), /record-five-words|pronunciation/);
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
    ['l1_apply-stress', 'l1-cp-stress-rule', []],
  ]);
});

test('L1 ExitCheck preserves mixed DIRECT/NONE semantics without optional speaking evidence', () => {
  const exit = findActivity('l1-exit-check', 'exitCheck');
  const evidence: Record<string, ActivityEvidence> = {
    'l1-listening-s-sz': missingEvidence('l1-listening-s-sz'),
    'l1-cp-s-sz-reading': directEvidence('l1-cp-s-sz-reading'),
    'l1-listening-soft-consonants': missingEvidence('l1-listening-soft-consonants'),
    'l1-cp-consonant-graphemes': directEvidence('l1-cp-consonant-graphemes'),
    'l1-listening-vowel-length': missingEvidence('l1-listening-vowel-length'),
    'l1-cp-vowel-spelling': directEvidence('l1-cp-vowel-spelling'),
    'l1-cp-stress-rule': directEvidence('l1-cp-stress-rule'),
  };
  const status = Object.fromEntries(exit.checks.map((check) => [
    check.objectiveId,
    describeExitCheckStatus(check, evidence[check.activityId], evidence).kind,
  ]));
  assert.deepEqual(status, {
    'l1_distinguish-s-sz': 'partial-review',
    'l1_distinguish-soft-consonants': 'partial-review',
    'l1_distinguish-long-vowels': 'partial-review',
    'l1_apply-stress': 'direct-met',
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

test('slideNarrator contains no synthesized fallback script', () => {
  const source = readFileSync(new URL('../src/utils/slideNarrator.ts', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /SpeechSynthesis|fallbackSequence|44 буквы|русское смягчение/);
  assert.match(source, /getAudioFileUrl/);
  assert.match(source, /return audioKey \? \[\{ key: audioKey \}\] : \[\]/);
  assert.doesNotMatch(source, /44 звука|Мягкие согласные: дь, ть, нь, й|всегда падает исключительно/iu);
});

test('physical L1 slide narration and published assessment MP3s remain separate', () => {
  for (let slide = 1; slide <= 11; slide += 1) {
    assert.equal(existsSync(new URL(`../public/audio/1.${slide}.mp3`, import.meta.url)), true);
  }
  for (const assetId of ['l1_listening_s_sz', 'l1_listening_soft_consonants', 'l1_listening_vowel_length']) {
    assert.equal(existsSync(new URL(`../public/audio/${assetId}.mp3`, import.meta.url)), true);
  }
});
