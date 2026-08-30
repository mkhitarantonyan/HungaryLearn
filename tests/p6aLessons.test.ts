import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import type { Lesson, LessonActivity } from '../src/types.ts';
import { LESSON_20 } from '../src/data/lessons/lesson20.ts';
import { LESSON_21 } from '../src/data/lessons/lesson21.ts';
import { LESSON_22 } from '../src/data/lessons/lesson22.ts';
import { LESSON_23 } from '../src/data/lessons/lesson23.ts';
import { LESSON_24 } from '../src/data/lessons/lesson24.ts';
import { createMigrationActivities } from '../src/data/lessons/migrationActivityFactory.ts';
import {
  rolePlayCompletionEvidence,
  validateActivity,
  writingEvidence,
} from '../src/utils/activityUtils.ts';

const lessons = [LESSON_21, LESSON_22, LESSON_23, LESSON_24];
const activitiesOf = (lesson: Lesson): LessonActivity[] => lesson.slides.flatMap((slide) => slide.activities ?? []);
const activityOf = <K extends LessonActivity['kind']>(lesson: Lesson, kind: K) => {
  const activity = activitiesOf(lesson).find((candidate) => candidate.kind === kind);
  assert.ok(activity);
  return activity as Extract<LessonActivity, { kind: K }>;
};

const expectedObjectives: Record<number, string[]> = {
  21: ['l21_choose-conjugation', 'l21_use-object-pronouns', 'l21_form-lak-lek', 'l21_distinguish-conjugations', 'l21_apply-conjugation'],
  22: ['l22_form-imperative', 'l22_use-imperative', 'l22_form-let', 'l22_polite-requests', 'l22_understand-commands'],
  23: ['l23_form-conditional', 'l23_use-lenne', 'l23_build-if-clauses', 'l23_express-wishes', 'l23_understand-conditional'],
  24: ['l24_use-conjunctions', 'l24_build-complex-sentences', 'l24_express-cause', 'l24_express-contrast', 'l24_connect-ideas'],
};

const listeningContracts: Record<number, { transcript: string; sha256: string }> = {
  21: {
    transcript: 'A: Látod azt a házat?\nB: Igen, látom.\nA: És engem látsz a képen?\nB: Igen, téged is látlak.',
    sha256: '8dceb8fdb28fadef3a2eaaf72c1591361940ed76195bdd0d473e3e3526f9e2d4',
  },
  22: {
    transcript: 'Kérem, jöjjön be! Üljön le, és várjon egy percet. Ne tegye a táskáját az asztalra.',
    sha256: '0f4d240bd2e163cdb5353d8cc95926d5462d1c4650bfd754efd1758684f7df39',
  },
  23: {
    transcript: 'Szeretnék többet utazni. Ha több szabadságom lenne, nyáron elmennék Horvátországba, és sokat úsznék.',
    sha256: '06c74ae261bbbaf15e291282ddbc6ae195a4aa8cc6adc0484786c87ee3653512',
  },
  24: {
    transcript: 'Szerintem jó ez a lakás, mert világos és közel van a munkámhoz. Bár kicsi, mégis kényelmes. Megnézem még egyszer, és utána döntök.',
    sha256: '08fde7014bf9f1de4d1d8756517d9b736f9e54b21b843be4ba25227cce4c337a',
  },
};

test('P6A preserves exact L21–L24 objective IDs and 11-slide identity', () => {
  for (const lesson of lessons) {
    assert.equal(lesson.slides.length, 11);
    assert.deepEqual(lesson.objectives?.map((objective) => objective.id), expectedObjectives[lesson.number]);
  }
});

test('optional RolePlay keeps migration factory backward-compatible', () => {
  assert.deepEqual(activitiesOf(LESSON_20).map((activity) => activity.kind), [
    'controlledPractice', 'reading', 'listening', 'rolePlay', 'writing', 'exitCheck',
  ]);

  const legacyShape = createMigrationActivities({
    lessonId: 99,
    controlledTitle: 'controlled',
    controlledPassCount: 1,
    controlledExercises: [{ kind: 'fillGap', id: 'cp', prompt: 'x', accept: ['x'] }],
    readingTitle: 'reading',
    readingParagraphs: ['text'],
    readingPassCount: 1,
    readingQuestions: [{ id: 'read', question: 'x', options: ['x'], correctIndex: 0 }],
    listeningTitle: 'listening',
    listeningTranscript: 'text',
    listeningPassCount: 1,
    listeningQuestions: [{ id: 'listen', question: 'x', options: ['x'], correctIndex: 0 }],
    writingTitle: 'writing',
    writingPrompt: 'prompt',
    writingModel: ['model'],
    writingRubric: ['rubric'],
    objectiveChecks: [{ objectiveId: 'objective', activity: 'controlled', evidenceKind: 'grammar' }],
  });
  assert.deepEqual(legacyShape.map((activity) => activity.kind), [
    'controlledPractice', 'reading', 'listening', 'writing', 'exitCheck',
  ]);
  assert.equal(legacyShape.some((activity) => activity.kind === 'rolePlay'), false);
});

test('P6A RolePlays are valid, bounded text-only interactions', () => {
  for (const lesson of lessons) {
    const rolePlay = activityOf(lesson, 'rolePlay');
    assert.equal(rolePlay.turns.length, 8);
    assert.ok(rolePlay.turns.filter((turn) => turn.speaker === 'learner').length >= 4);
    assert.ok(rolePlay.turns.filter((turn) => turn.responseMode === 'selfPractice').length >= 4);
    assert.deepEqual(validateActivity(rolePlay), []);
  }
  assert.match(JSON.stringify(activityOf(LESSON_21, 'rolePlay')), /неопределённ|határozatlan/i);
  assert.match(JSON.stringify(activityOf(LESSON_22, 'rolePlay')), /не понял|nem értettem|mondja még egyszer/i);
  assert.match(JSON.stringify(activityOf(LESSON_23, 'rolePlay')), /nincs szabad szobánk/);
  assert.match(JSON.stringify(activityOf(LESSON_24, 'rolePlay')), /Összességében/);
});

test('P6A reading tasks use approved question counts and meaningful thresholds', () => {
  const expected = new Map([[21, [6, 5]], [22, [6, 5]], [23, [6, 5]], [24, [8, 6]]]);
  for (const lesson of lessons) {
    const reading = activityOf(lesson, 'reading');
    const [questionCount, passCount] = expected.get(lesson.number) ?? [];
    assert.equal(reading.questions.length, questionCount);
    assert.equal(reading.passCount, passCount);
    assert.ok(reading.passCount / reading.questions.length >= 0.75);
  }
});

test('P6A controlled practice covers 75–80 percent thresholds', () => {
  for (const lesson of lessons) {
    const controlled = activityOf(lesson, 'controlledPractice');
    const threshold = (controlled.passCount ?? controlled.exercises.length) / controlled.exercises.length;
    assert.ok(threshold >= 0.75 && threshold <= 0.8, `L${lesson.number}: ${threshold}`);
  }
});

test('P6A writing and optional speaking targets carry requested lengths and rubrics', () => {
  const writingRanges = new Map([[21, '80–100'], [22, '80–100'], [23, '100–120'], [24, '120–140']]);
  for (const lesson of lessons) {
    const writing = activityOf(lesson, 'writing');
    assert.match(`${writing.prompt} ${writing.rubric.join(' ')}`, new RegExp(writingRanges.get(lesson.number) ?? ''));
    assert.ok(writing.rubric.length >= 5);
    const speaking = lesson.slides.find((slide) => slide.optionalSpeaking)?.optionalSpeaking;
    assert.ok(speaking);
    assert.ok((speaking.rubric?.length ?? 0) >= 4);
  }
  assert.equal(activityOf(LESSON_24, 'writing').rubric.length, 6);
});

test('open production evidence remains PARTIAL and never auto-passes', () => {
  assert.deepEqual(rolePlayCompletionEvidence('p6-roleplay'), {
    activityId: 'p6-roleplay', attempted: true, completed: true, evidenceMode: 'partial', passed: false,
  });
  assert.equal(writingEvidence('A sufficiently long self-reviewed response.', true).evidenceMode, 'partial');
  assert.equal(writingEvidence('A sufficiently long self-reviewed response.', true).passed, false);
  assert.equal(activitiesOf(LESSON_21).some((activity) => (activity as { kind: string }).kind === 'recording'), false);
});

test('current published Listening A transcripts and MP3 hashes remain unchanged', () => {
  for (const lesson of lessons) {
    const listening = activityOf(lesson, 'listening');
    const contract = listeningContracts[lesson.number];
    assert.equal(listening.assetId, `l${lesson.number}_listening_context`);
    assert.equal(listening.audioStatus, 'published');
    assert.equal(listening.transcript, contract.transcript);
    const bytes = readFileSync(new URL(`../public/audio/${listening.assetId}.mp3`, import.meta.url));
    assert.ok(bytes.length > 0);
    assert.equal(createHash('sha256').update(bytes).digest('hex'), contract.sha256);
  }
});

test('P6B contains no browser TTS and keeps the approved script record', () => {
  for (const lesson of lessons) {
    const source = readFileSync(new URL(`../src/data/lessons/lesson${lesson.number}.ts`, import.meta.url), 'utf8');
    assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|browser TTS/i);
    assert.match(source, new RegExp(`l${lesson.number}_listening_b_`));
  }
  const docs = readFileSync(new URL('../docs/P6_B1_LISTENING_SCRIPTS.md', import.meta.url), 'utf8');
  assert.ok((docs.match(/APPROVED SCRIPT \/ AUDIO PUBLISHED IN P6B/g) ?? []).length >= 4);
});

test('L21 typo and course progression are regression-protected', () => {
  const source = readFileSync(new URL('../src/data/lessons/lesson21.ts', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /Ovasok/);
  assert.match(source, /L7[\s\S]*L13[\s\S]*L20[\s\S]*L21/);
});

test('L24 punctuation wording and present-tense Russian translation are accurate', () => {
  const source = readFileSync(new URL('../src/data/lessons/lesson24.ts', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /Запятая перед союзами обязательна практически всегда|запятая перед союзами обязательна/i);
  assert.match(source, /Запятая обычно разделяет части сложного предложения/);
  assert.match(source, /Я учу венгерский, потому что живу в Будапеште/);
  assert.doesNotMatch(source, /Я учился венгерскому потому/);
});
