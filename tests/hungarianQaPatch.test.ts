import assert from 'node:assert/strict';
import test from 'node:test';
import { VOCABULARY_ENTRIES } from '../src/data/vocabularyCatalog';
import { LESSON_7 } from '../src/data/lessons/lesson7';
import { LESSON_8 } from '../src/data/lessons/lesson8';
import { LESSON_10 } from '../src/data/lessons/lesson10';
import { LESSON_12 } from '../src/data/lessons/lesson12';
import { LESSON_13 } from '../src/data/lessons/lesson13';
import { LESSON_14 } from '../src/data/lessons/lesson14';
import { LESSON_17 } from '../src/data/lessons/lesson17';
import { LESSON_18 } from '../src/data/lessons/lesson18';
import { LESSON_19 } from '../src/data/lessons/lesson19';
import { LESSON_20 } from '../src/data/lessons/lesson20';
import { LESSON_21 } from '../src/data/lessons/lesson21';
import { LESSON_22 } from '../src/data/lessons/lesson22';
import { LESSON_23 } from '../src/data/lessons/lesson23';
import { LESSON_24 } from '../src/data/lessons/lesson24';
import { LESSON_25 } from '../src/data/lessons/lesson25';
import { LESSON_26 } from '../src/data/lessons/lesson26';
import { LESSON_27 } from '../src/data/lessons/lesson27';
import { LESSON_28 } from '../src/data/lessons/lesson28';
import type { Lesson } from '../src/types';

const lessons = new Map<number, Lesson>([
  LESSON_7, LESSON_8, LESSON_10, LESSON_12, LESSON_13, LESSON_14,
  LESSON_17, LESSON_18, LESSON_19, LESSON_20, LESSON_21, LESSON_22,
  LESSON_23, LESSON_24, LESSON_25, LESSON_26, LESSON_27, LESSON_28,
].map((lesson) => [lesson.number, lesson]));

function slideBody(lessonNumber: number, slideId: number): string {
  const slide = lessons.get(lessonNumber)?.slides.find((candidate) => candidate.id === slideId);
  assert.ok(slide, `Missing L${lessonNumber}.${slideId}`);
  return slide.body ?? '';
}

function quizItem(lessonNumber: number, quizId: number) {
  const item = lessons.get(lessonNumber)?.quiz?.find((candidate) => candidate.id === quizId);
  assert.ok(item, `Missing Q${quizId}`);
  return item;
}

test('published Listening slides contain no stale unavailable warning', () => {
  const targets = [[7, 10], [8, 10], [10, 10], [12, 7], [13, 8], [14, 7], [17, 7], [18, 8], [19, 9]];
  const text = targets.map(([lesson, slide]) => slideBody(lesson, slide)).join('\n');
  assert.doesNotMatch(text, /не опубликована|пока недоступно|аудиирование пока недоступно|отдельная запись/i);
});

test('L20 does not teach the old absolute final-consonant past rule', () => {
  const body = slideBody(20, 2);
  assert.doesNotMatch(body, /основа заканчивается на t, d, s, sz, z, zs/i);
  assert.match(body, /зависит от конкретного глагола и типа его основы/i);
});

test('Q2006 retrieves Hungarian past tense instead of a lesson number', () => {
  const item = quizItem(20, 2006);
  assert.doesNotMatch(item.question, /урок/i);
  assert.equal(item.options[item.correctIndex], 'Tegnap dolgoztam.');
});

test('L21 narrows hogy guidance to an object content clause', () => {
  const body = slideBody(21, 3);
  assert.match(body, /Объектное придаточное содержания.*подходящего переходного глагола/i);
  assert.doesNotMatch(body, /Придаточные предложения с.*hogy/i);
});

test('L21 mosakodik example uses Mosakodom, not Mosakszom', () => {
  const body = slideBody(21, 6);
  assert.match(body, /Mosakodom\./);
  assert.doesNotMatch(body, /Mosakszom\./);
});

test('Q2105 tests mosakodik to Mosakodom', () => {
  const item = quizItem(21, 2105);
  assert.match(item.question, /mosakodik/i);
  assert.equal(item.options[item.correctIndex], 'Mosakodom.');
});

test('L21 identifies zenét as the direct object of hallgatni', () => {
  const body = slideBody(21, 7);
  assert.match(body, /zenét — неопределённый прямой объект глагола hallgatni/i);
  assert.doesNotMatch(body, /hallgatni = инфинитив без прямого объекта/i);
});

test('L22 translates legyünk without the obsolete Russian будемте', () => {
  const body = slideBody(22, 5);
  assert.match(body, /давайте будем!/i);
  assert.doesNotMatch(body, /будемте/i);
});

test('Q2203 does not use valid Mondjad as a wrong distractor', () => {
  const item = quizItem(22, 2203);
  assert.ok(!item.options.some((option) => option.includes('Mondjad')));
  assert.match(item.explanation, /Mondjad.*правильная длинная альтернатива/i);
});

test('L23 does not claim that kérnék was taught in L15', () => {
  const body = slideBody(23, 2);
  assert.match(body, /kérek → kérnék/);
  assert.doesNotMatch(body, /kérnék[^<]*(?:из|в) 15-го урока/i);
});

test('Q2305 options are unique', () => {
  const options = quizItem(23, 2305).options.map((option) => option.replace(/\s+/g, ' ').trim());
  assert.equal(new Set(options).size, options.length);
});

test('l23_v2 keeps fürödni display and resolves to canonical lemma fürdik', () => {
  const entry = VOCABULARY_ENTRIES.find((candidate) => candidate.id === 'l23_v2');
  assert.equal(entry?.hu, 'fürödni');
  assert.equal(entry?.lemma, 'fürdik');
  assert.equal(entry?.cardId, 'card_l23_v2');
});

test('L24 says a subordinate clause alone does not separate an igekötő', () => {
  const body = slideBody(24, 6);
  assert.match(body, /Само придаточное предложение не заставляет.*приставку отделяться/i);
  assert.doesNotMatch(body, /если придаточное начинается.*приставка отделяется/i);
});

test('L25 nominal-predicate guidance no longer points to L9', () => {
  const body = slideBody(25, 2);
  assert.match(body, /именным сказуемым из 2-го урока/i);
  assert.doesNotMatch(body, /9-й урок/i);
});

test('L25 does not claim that -ként was taught in L16', () => {
  const body = slideBody(25, 2);
  assert.match(body, /-ként означает «в качестве \/ в роли»/i);
  assert.doesNotMatch(body, /-ként из 16-го урока/i);
});

test('Q2506 is a Hungarian language question, not an L24 memory question', () => {
  const item = quizItem(25, 2506);
  assert.doesNotMatch(item.question, /урок 24/i);
  assert.equal(item.options[item.correctIndex], 'Szeretem a munkámat, mert érdekes.');
});

test('L26 body-part possessives no longer point to L15', () => {
  const body = slideBody(26, 2);
  assert.match(body, /притяжательными формами из 8-го урока/i);
  assert.doesNotMatch(body, /15-го урока/i);
});

test('L26 does not claim that temporal -ig was taught in L11', () => {
  const body = slideBody(26, 7);
  assert.match(body, /három napig означает «в течение трёх дней»/i);
  assert.doesNotMatch(body, /-ig из 11-го урока/i);
});

test('Q2605 does not use natural fejfájásra as an unambiguously wrong distractor', () => {
  const item = quizItem(26, 2605);
  assert.ok(!item.options.some((option) => option.includes('fejfájásra')));
  assert.match(item.explanation, /fejfájásra.*естественно/i);
});

test('L27 defines vágány as track rather than platform', () => {
  const body = slideBody(27, 3);
  assert.match(body, /vágány[\s\S]*железнодорожный путь \/ номер пути/i);
  assert.doesNotMatch(body, /vágány[\s\S]{0,200}платформа/i);
});

test('L27 visibly writes Retúrjegyet as one word', () => {
  const body = slideBody(27, 4);
  assert.match(body, /> Retúrjegyet kérek\.<\/button>/);
  assert.doesNotMatch(body, /> Retúr jegyet kérek\.<\/button>/);
});

test('Q2701 accurately explains busz plus val to busszal', () => {
  const explanation = quizItem(27, 2701).explanation;
  assert.match(explanation, /busz \+ -val → busszal/);
  assert.match(explanation, /долгий \/sː\/.*ssz/i);
  assert.doesNotMatch(explanation, /конечный z удваивается/i);
});

test('L28 past summary includes both -t and -ott/-ett/-ött models', () => {
  assert.match(slideBody(28, 3), /-t \/ -ott\/-ett\/-ött/);
});

test('L28 conditional summary includes all four marker variants', () => {
  assert.match(slideBody(28, 3), /-na\/-ne\/-ná\/-né \+ личные окончания/);
});

test('L28 igekötő rule does not send the prefix to sentence-final position', () => {
  const body = slideBody(28, 6);
  assert.match(body, /следует после спрягаемого глагола/i);
  assert.doesNotMatch(body, /уходит в конец предложения/i);
});

test('Q2805 matches the corrected neutral-negative igekötő rule', () => {
  const item = quizItem(28, 2805);
  assert.equal(item.options[item.correctIndex], 'Приставка отделяется и в нейтральном отрицании следует после спрягаемого глагола');
  assert.doesNotMatch(item.explanation, /уходит в конец предложения/i);
});

test('Q2806 tests a Hungarian hypothetical condition, not course policy', () => {
  const item = quizItem(28, 2806);
  assert.doesNotMatch(item.question, /курс|методическ/i);
  assert.equal(item.options[item.correctIndex], 'Ha több időm lenne, többet utaznék.');
});
