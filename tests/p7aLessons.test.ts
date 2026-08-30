import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import type { Lesson, LessonActivity } from '../src/types.ts';
import { LESSON_20 } from '../src/data/lessons/lesson20.ts';
import { LESSON_25 } from '../src/data/lessons/lesson25.ts';
import { LESSON_26 } from '../src/data/lessons/lesson26.ts';
import { LESSON_27 } from '../src/data/lessons/lesson27.ts';
import {
  rolePlayCompletionEvidence,
  validateActivity,
  writingEvidence,
} from '../src/utils/activityUtils.ts';

const lessons = [LESSON_25, LESSON_26, LESSON_27];
const activitiesOf = (lesson: Lesson): LessonActivity[] => lesson.slides.flatMap((slide) => slide.activities ?? []);
const activitiesOfKind = <K extends LessonActivity['kind']>(lesson: Lesson, kind: K) =>
  activitiesOf(lesson).filter((activity): activity is Extract<LessonActivity, { kind: K }> => activity.kind === kind);
const activityOf = <K extends LessonActivity['kind']>(lesson: Lesson, kind: K) => {
  const activity = activitiesOfKind(lesson, kind)[0];
  assert.ok(activity);
  return activity;
};

const expectedObjectives: Record<number, string[]> = {
  25: ['l25_name-professions', 'l25_ask-answer-job', 'l25_describe-skills', 'l25_write-cv', 'l25_interview-dialogue'],
  26: ['l26_name-body-symptoms', 'l26_express-pain', 'l26_doctor-dialogue', 'l26_pharmacy', 'l26_understand-advice'],
  27: ['l27_name-transport', 'l27_buy-tickets', 'l27_book-room', 'l27_ask-directions', 'l27_travel-dialogue'],
};

const listeningContracts: Record<number, { transcript: string; sha256: string }> = {
  25: {
    transcript: 'Interjúztató: Mivel foglalkozott korábban?\nJelölt: Két évig egy szállodában dolgoztam. Jól beszélek angolul, és szeretek emberekkel dolgozni.',
    sha256: 'c2ab885299447ac12d641e45104560511863805dd506407ac5730dc0c0c5f97e',
  },
  26: {
    transcript: 'A torka piros, de a tüdeje tiszta. Maradjon otthon két napig, igyon sok teát, és vegye be ezt a gyógyszert naponta kétszer.',
    sha256: '0459bec1968b9354d7c6e25b4d7907b7cf6b44fa089d774be278fa6a1ba6afba',
  },
  27: {
    transcript: 'Vendég: Jó estét! Van egy foglalásom Kovács névre, két éjszakára.\nRecepciós: Igen, látom. A szobája a második emeleten van, a reggeli hét és tíz óra között.',
    sha256: '2e2eb9efa9ca01e7bf8d9f510562769c62b6c0a0b2ce25a8d91bd6d19760282e',
  },
};

test('P7A preserves L25–L27 identity, objective IDs, quiz IDs, and 11 slides', () => {
  for (const lesson of lessons) {
    assert.equal(lesson.id, lesson.number);
    assert.equal(lesson.slidesCount, 11);
    assert.equal(lesson.slides.length, 11);
    assert.deepEqual(lesson.objectives?.map((objective) => objective.id), expectedObjectives[lesson.number]);
    assert.deepEqual(lesson.quiz?.map((question) => question.id),
      Array.from({ length: 6 }, (_, index) => lesson.number * 100 + index + 1));
  }
});

test('P7A uses the communication sequence and optional second RolePlay without changing old lessons', () => {
  assert.deepEqual(activitiesOf(LESSON_20).map((activity) => activity.kind),
    ['controlledPractice', 'reading', 'listening', 'rolePlay', 'writing', 'exitCheck']);
  assert.deepEqual(activitiesOf(LESSON_25).map((activity) => activity.kind),
    ['reading', 'controlledPractice', 'listening', 'rolePlay', 'writing', 'exitCheck']);
  for (const lesson of [LESSON_26, LESSON_27]) {
    assert.deepEqual(activitiesOf(lesson).map((activity) => activity.kind),
      ['reading', 'controlledPractice', 'listening', 'rolePlay', 'rolePlay', 'writing', 'exitCheck']);
  }
});

test('P7A reading tasks are approved, meaning-focused, and use 75 percent thresholds', () => {
  const contracts = new Map([
    [25, ['Ügyfélszolgálati munkatársat keresünk', 'Egy budapesti szolgáltató cég', 'A betanulási időszak után']],
    [26, ['Mit tegyünk megfázás esetén?', 'A megfázás általában', 'Antibiotikumot csak orvosi javaslatra']],
    [27, ['Utazás Pécsre — fontos információk', 'A Budapest-Keleti pályaudvarról', 'legkésőbb két nappal']],
  ]);
  for (const lesson of lessons) {
    const reading = activityOf(lesson, 'reading');
    const [title, firstMarker, finalMarker] = contracts.get(lesson.number) ?? [];
    assert.equal(reading.title, title);
    assert.equal(reading.questions.length, 8);
    assert.equal(reading.passCount, 6);
    const content = JSON.stringify(reading.content);
    assert.match(content, new RegExp(firstMarker));
    assert.match(content, new RegExp(finalMarker));
  }
});

test('P7A controlled practice has contextual breadth and honest thresholds', () => {
  const expected = new Map([[25, [13, 10]], [26, [13, 10]], [27, [14, 11]]]);
  for (const lesson of lessons) {
    const controlled = activityOf(lesson, 'controlledPractice');
    const [count, pass] = expected.get(lesson.number) ?? [];
    assert.equal(controlled.exercises.length, count);
    assert.equal(controlled.passCount, pass);
    const ratio = (controlled.passCount ?? 0) / controlled.exercises.length;
    assert.ok(ratio >= 0.75 && ratio <= 0.8);
  }
});

test('L25 interview covers experience, follow-up, availability, candidate question, and closing', () => {
  const rolePlay = activityOf(LESSON_25, 'rolePlay');
  const text = JSON.stringify(rolePlay);
  assert.ok(rolePlay.turns.length >= 16);
  assert.ok(rolePlay.turns.filter((turn) => turn.speaker === 'learner' && turn.responseMode === 'selfPractice').length >= 8);
  assert.match(text, /Hol dolgozott korábban/);
  assert.match(text, /Mit tenne, ha egy ügyfél nagyon mérges lenne/);
  assert.match(text, /Mikor tudna kezdeni/);
  assert.match(text, /Milyen a munkaidő.*otthoni munkára/);
  assert.match(text, /Viszontlátásra/);
  assert.deepEqual(validateActivity(rolePlay), []);
});

test('L26 contains bounded doctor and pharmacy language practice with repair and no invented dosing', () => {
  const [doctor, pharmacy] = activitiesOfKind(LESSON_26, 'rolePlay');
  assert.ok(doctor && pharmacy);
  assert.ok(doctor.turns.length >= 10);
  assert.match(JSON.stringify(doctor), /Mi a panasza|Mióta érzi|Mennyire erős/);
  assert.match(JSON.stringify(doctor), /mondja még egyszer|Nem értettem pontosan/i);
  assert.match(JSON.stringify(doctor), /nyelvgyakorló helyzet.*nem diagnózis/i);
  assert.match(JSON.stringify(pharmacy), /gyógyszer|használati útmutató/i);
  assert.doesNotMatch(JSON.stringify(pharmacy), /\b\d+\s*(?:mg|milligramm)|naponta\s+(?:egyszer|kétszer|háromszor)/i);
  assert.deepEqual(validateActivity(doctor), []);
  assert.deepEqual(validateActivity(pharmacy), []);
});

test('L27 hotel and disruption RolePlays require discrepancy repair and confirmation', () => {
  const [hotel, disruption] = activitiesOfKind(LESSON_27, 'rolePlay');
  assert.ok(hotel && disruption);
  assert.match(JSON.stringify(hotel), /két éjszakára.*egy éjszakát|Meg tudná nézni még egyszer/i);
  assert.match(JSON.stringify(hotel), /másik szobát.*felár nélkül|reggeli/i);
  assert.match(JSON.stringify(disruption), /harminc percet késik|Lekéstem a csatlakozást/i);
  assert.match(JSON.stringify(disruption), /vágány|másik vonat|Jól értem/i);
  assert.deepEqual(validateActivity(hotel), []);
  assert.deepEqual(validateActivity(disruption), []);
});

test('P7A writing and speaking targets carry requested lengths, content, and rubrics', () => {
  const writingRanges = new Map([[25, '100–130'], [26, '100–120'], [27, '100–130']]);
  const speakingRanges = new Map([[25, '2–3'], [26, '2'], [27, '2–3']]);
  for (const lesson of lessons) {
    const writing = activityOf(lesson, 'writing');
    const speaking = lesson.slides.find((slide) => slide.optionalSpeaking)?.optionalSpeaking;
    assert.ok(speaking);
    assert.match(`${writing.prompt} ${writing.rubric.join(' ')}`, new RegExp(writingRanges.get(lesson.number) ?? ''));
    assert.ok(writing.rubric.length >= 6);
    assert.match(`${speaking.instructions} ${speaking.rubric?.join(' ')}`, new RegExp(speakingRanges.get(lesson.number) ?? ''));
    assert.ok((speaking.rubric?.length ?? 0) >= 6);
  }
});

test('writing and RolePlay remain PARTIAL while optional speaking produces no evidence', () => {
  const written = writingEvidence('Это достаточно длинный проверенный пользователем учебный ответ для проверки evidence semantics.', true);
  assert.equal(written.evidenceMode, 'partial');
  assert.equal(written.passed, false);
  assert.equal(rolePlayCompletionEvidence('p7-roleplay').evidenceMode, 'partial');
  assert.equal(rolePlayCompletionEvidence('p7-roleplay').passed, false);
  for (const lesson of lessons) {
    assert.equal(activitiesOf(lesson).some((activity) => (activity as { kind: string }).kind === 'recording'), false);
  }
});

test('published Listening A transcript and physical MP3 contracts remain byte-identical', () => {
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

test('P7B placeholders are not wired and no browser TTS is introduced', () => {
  for (const lesson of lessons) {
    const source = readFileSync(new URL(`../src/data/lessons/lesson${lesson.number}.ts`, import.meta.url), 'utf8');
    assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|browser TTS/i);
    assert.doesNotMatch(source, /listeningB\s*:|l2[567]_listening_b/i);
  }
  const docs = readFileSync(new URL('../docs/P7_B1_LISTENING_SCRIPTS.md', import.meta.url), 'utf8');
  assert.equal((docs.match(/SCRIPT NOT YET APPROVED \/ AUDIO NOT YET PUBLISHED/g) ?? []).length, 3);
  assert.match(docs, /no approved Hungarian script/);
});

test('P7A vocabulary audit documents selective classification without changing runtime cards', () => {
  for (const lesson of lessons) assert.equal(lesson.vocabulary?.length, 4);
  const docs = readFileSync(new URL('../docs/P7A_VOCABULARY_AUDIT.md', import.meta.url), 'utf8');
  assert.match(docs, /\| L25 \| 4 \| 16 \| 4 \| 4 \| 4 \|/);
  assert.match(docs, /\| L26 \| 4 \| 20 \| 5 \| 5 \| 4 \|/);
  assert.match(docs, /\| L27 \| 4 \| 21 \| 5 \| 5 \| 4 \|/);
  assert.match(docs, /No new runtime card, word-audio mapping, MP3, vocabulary ID/);
});

test('L28 keeps its identity and optional speaking remains non-evidentiary', async () => {
  const { LESSON_28 } = await import('../src/data/lessons/lesson28.ts');
  assert.equal(LESSON_28.id, 28);
  assert.deepEqual(LESSON_28.quiz?.map((question) => question.id), [2801, 2802, 2803, 2804, 2805, 2806]);
  assert.equal(activitiesOf(LESSON_28).some((activity) => (activity as { kind: string }).kind === 'recording'), false);
  assert.ok(LESSON_28.slides.some((slide) => slide.optionalSpeaking));
});
