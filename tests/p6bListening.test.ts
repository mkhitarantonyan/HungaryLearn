import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, statSync } from 'node:fs';
import type { Lesson, LessonActivity, ListeningTaskData } from '../src/types.ts';
import { LESSON_20 } from '../src/data/lessons/lesson20.ts';
import { LESSON_21 } from '../src/data/lessons/lesson21.ts';
import { LESSON_22 } from '../src/data/lessons/lesson22.ts';
import { LESSON_23 } from '../src/data/lessons/lesson23.ts';
import { LESSON_24 } from '../src/data/lessons/lesson24.ts';
import { listeningEvidence } from '../src/utils/activityUtils.ts';

const lessons = [LESSON_21, LESSON_22, LESSON_23, LESSON_24];
const activitiesOf = (lesson: Lesson): LessonActivity[] => lesson.slides.flatMap((slide) => slide.activities ?? []);
const listeningsOf = (lesson: Lesson): ListeningTaskData[] => activitiesOf(lesson).filter(
  (activity): activity is ListeningTaskData => activity.kind === 'listening'
);

const contracts = {
  21: {
    assetId: 'l21_listening_b_film_choice',
    questions: 6,
    passCount: 5,
    sha256: '070365eff16f1e83944d204723d699d37acbb5a1aecea744a25994494b836a5c',
    stems: ['Miért telefonál Dóra Márknak?', 'Mikor látta Márk a magyar filmet?', 'Mi nem tetszett teljesen Márknak?', 'Ismeri Dóra a főszereplőt?', 'Mit küld Márk Dórának?', 'Mit fog Dóra tenni másnap?'],
  },
  22: {
    assetId: 'l22_listening_b_office_instructions',
    questions: 6,
    passCount: 5,
    sha256: '34ffb8fffd0bf4389aa76be7e63ec88fa2ac06d1801e738dc73db1ac90c045a9',
    stems: ['Mit kell először megmutatnia a dolgozónak?', 'Melyik emeletre kell mennie?', 'Miért kér ismétlést?', 'Mi az iroda száma?', 'Melyik bejáratot nem használhatja?', 'Kihez fordulhat segítségért?'],
  },
  23: {
    assetId: 'l23_listening_b_free_week',
    questions: 7,
    passCount: 6,
    sha256: '89bb82c68906fb48c238b02942157be38ef4ac7e158da59ce1777c50905de8fe',
    stems: ['Mit tenne Ádám egy szabad héten?', 'Miért maradna Nóra inkább otthon?', 'Mitől lehetne olcsóbb az utazás?', 'Miért nem tetszik Nórának Ádám első terve?', 'Milyen kompromisszumot javasol Ádám?', 'Mi kell ahhoz, hogy Nóra is elutazzon?', 'A beszélgetés végén közelebb kerülnek-e a közös döntéshez?'],
  },
  24: {
    assetId: 'l24_listening_b_city_or_suburbs',
    questions: 7,
    passCount: 6,
    sha256: 'f5e7bc7c72866a1fb70651442599762e4b38821de04621b1722edd7225ce8ddc',
    stems: ['Miért szeret Eszter a belvárosban lakni?', 'Mi Gábor két fő érve a külsőbb kerület mellett?', 'Milyen hátrányt ismer el Gábor?', 'Miben különbözik Eszter és Gábor életmódja?', 'Miben értenek egyet a végén?', 'Ki állítja azt, hogy a belváros mindenkinek jobb?', 'Mi a beszélgetés fő következtetése?'],
  },
} as const;

test('optional Listening B is backward-compatible and preserves Listening A order', () => {
  assert.deepEqual(activitiesOf(LESSON_20).map((activity) => activity.kind), [
    'controlledPractice', 'reading', 'listening', 'rolePlay', 'writing', 'exitCheck',
  ]);
  for (const lesson of lessons) {
    const [listeningA, listeningB] = listeningsOf(lesson);
    assert.equal(listeningsOf(lesson).length, 2);
    assert.equal(listeningA.assetId, `l${lesson.number}_listening_context`);
    assert.equal(listeningB.id, `l${lesson.number}-listening-b-context`);
  }
});

test('Listening B assets are published only with physical non-empty hash-locked MP3 files', () => {
  for (const lesson of lessons) {
    const listeningB = listeningsOf(lesson)[1];
    const contract = contracts[lesson.number as keyof typeof contracts];
    const audioUrl = new URL(`../public/audio/${contract.assetId}.mp3`, import.meta.url);
    assert.equal(listeningB.assetId, contract.assetId);
    assert.equal(listeningB.audioStatus, 'published');
    assert.equal(existsSync(audioUrl), true);
    assert.ok(statSync(audioUrl).size > 100_000);
    assert.equal(createHash('sha256').update(readFileSync(audioUrl)).digest('hex'), contract.sha256);
  }
});

test('Listening B uses the approved question sets, unique IDs, and B1 thresholds', () => {
  for (const lesson of lessons) {
    const listeningB = listeningsOf(lesson)[1];
    const contract = contracts[lesson.number as keyof typeof contracts];
    assert.equal(listeningB.questions.length, contract.questions);
    assert.equal(listeningB.passCount, contract.passCount);
    assert.deepEqual(listeningB.questions.map((question) => question.question), contract.stems);
    assert.equal(new Set(listeningB.questions.map((question) => question.id)).size, listeningB.questions.length);
    assert.ok((listeningB.passCount ?? 0) / listeningB.questions.length >= 0.8);
  }
  const l24Question = listeningsOf(LESSON_24)[1].questions[5];
  assert.equal('options' in l24Question && l24Question.options[l24Question.correctIndex], 'Egyikük sem.');
});

test('Listening B scripts are distinct from Reading and synchronized across docs, runtime, and generator', () => {
  const docs = readFileSync(new URL('../docs/P6_B1_LISTENING_SCRIPTS.md', import.meta.url), 'utf8');
  const generator = readFileSync(new URL('../scripts/generate-p6b-listening-audio.mjs', import.meta.url), 'utf8');
  for (const lesson of lessons) {
    const reading = activitiesOf(lesson).find((activity) => activity.kind === 'reading');
    const listeningB = listeningsOf(lesson)[1];
    if (!reading || reading.kind !== 'reading' || !reading.content || !('paragraphs' in reading.content)) {
      assert.fail(`L${lesson.number} must expose prose Reading content`);
    }
    const readingText = reading.content.paragraphs.join('\n').replace(/\s+/g, ' ').trim();
    const listeningText = listeningB.transcript.replace(/^[^:\n]+:\s*/gm, '').replace(/\s+/g, ' ').trim();
    assert.notEqual(listeningText, readingText);
    assert.ok(!listeningText.includes(readingText) && !readingText.includes(listeningText));
    assert.match(docs, new RegExp(listeningB.assetId));
    for (const line of listeningB.transcript.split('\n')) {
      const utterance = line.replace(/^[^:]+:\s*/, '');
      assert.ok(docs.includes(line));
      assert.ok(generator.includes(utterance));
    }
  }
});

test('Listening B keeps truthful DIRECT semantics for score and browser playback state', () => {
  for (const lesson of lessons) {
    const listeningB = listeningsOf(lesson)[1];
    const total = listeningB.questions.length;
    const passCount = listeningB.passCount ?? total;
    assert.deepEqual(listeningEvidence(listeningB, passCount, total, true), {
      passed: true, evidenceMode: 'direct', score: passCount, total,
    });
    assert.deepEqual(listeningEvidence(listeningB, passCount - 1, total, true), {
      passed: false, evidenceMode: 'direct', score: passCount - 1, total,
    });
    assert.deepEqual(listeningEvidence(listeningB, passCount, total, false), {
      passed: false, evidenceMode: 'none', score: passCount, total,
    });
  }
});

test('ExitCheck references Listening B for B1 comprehension without upgrading open production', () => {
  const expectedObjective = new Map([[21, 'l21_distinguish-conjugations'], [22, 'l22_understand-commands'], [23, 'l23_understand-conditional'], [24, 'l24_connect-ideas']]);
  for (const lesson of lessons) {
    const exit = activitiesOf(lesson).find((activity) => activity.kind === 'exitCheck');
    assert.ok(exit && exit.kind === 'exitCheck');
    const check = exit.checks.find((candidate) => candidate.objectiveId === expectedObjective.get(lesson.number));
    assert.ok(check);
    const listeningBId = `l${lesson.number}-listening-b-context`;
    assert.ok(check.activityId === listeningBId || check.evidenceComponents?.some((component) => component.activityId === listeningBId));
  }
  const l24Exit = activitiesOf(LESSON_24).find((activity) => activity.kind === 'exitCheck');
  assert.ok(l24Exit && l24Exit.kind === 'exitCheck');
  assert.equal(l24Exit.checks.find((check) => check.objectiveId === 'l24_connect-ideas')?.evidenceKind, 'interaction');
});

test('runtime lesson code contains no browser speech fallback', () => {
  const source = lessons.map((lesson) => readFileSync(new URL(`../src/data/lessons/lesson${lesson.number}.ts`, import.meta.url), 'utf8')).join('\n');
  assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|browser TTS/i);
});

test('the corrected Olvasok word audio uses the canonical map and exact generation input', () => {
  const map = readFileSync(new URL('../src/data/wordAudioMap.ts', import.meta.url), 'utf8');
  const generator = readFileSync(new URL('../scripts/generate-p6b-listening-audio.mjs', import.meta.url), 'utf8');
  const canonical = new URL('../public/audio/Olvasok_egy_könyvet.mp3', import.meta.url);
  const obsolete = new URL('../public/audio/Ovasok_egy_könyvet.mp3', import.meta.url);
  assert.match(map, /'olvasok egy könyvet\.': audioUrl\('Olvasok_egy_könyvet\.mp3'\)/);
  assert.match(generator, /synthesize\('Olvasok egy könyvet\.', MALE_VOICE/);
  assert.equal(existsSync(obsolete), false);
  assert.equal(createHash('sha256').update(readFileSync(canonical)).digest('hex'), 'b14ec0d2a23fe0cc2c76220541a258b3326d9580adc85c225dea45d9f564d331');
});
