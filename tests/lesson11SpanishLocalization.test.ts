import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_11 } from '../src/data/lessons/lesson11';
import { LESSONS_META } from '../src/data/lessons/index';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';

const esTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const publicEsTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.public.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const NON_LOCALIZED_FIELDS = new Set(['id', 'activityId', 'objectiveId', 'assetId', 'audioText', 'baseWord', 'cardId', 'hu', 'ipa', 'lexemeId', 'phonetic', 'targetPhonetic']);
function lessonElevenRussianKeys(value: unknown, field = '', result = new Set<string>()): Set<string> {
  if (typeof value === 'string') {
    if (NON_LOCALIZED_FIELDS.has(field)) return result;
    for (const part of value.split(/(<[^>]+>)/gu)) {
      const key = part.startsWith('<') ? '' : part.trim();
      if (/[А-Яа-яЁё]/u.test(key)) result.add(key);
    }
    return result;
  }
  if (Array.isArray(value)) value.forEach((item) => lessonElevenRussianKeys(item, field, result));
  else if (value && typeof value === 'object') Object.entries(value).forEach(([key, item]) => lessonElevenRussianKeys(item, key, result));
  return result;
}
const lessonElevenKeys = lessonElevenRussianKeys([LESSON_11, LESSONS_META.find((lesson) => lesson.number === 11), LESSON_TRANSLATION_MAP[11]]);

test('Lesson 11 has complete Spanish coverage and a synchronized public subset', () => {
  assert.equal(lessonElevenKeys.size, 759);
  const publicKeys = [...lessonElevenKeys].filter((key) => key in publicEsTranslations);
  assert.equal(publicKeys.length, 42);
  for (const key of lessonElevenKeys) {
    assert.ok(key in esTranslations, `missing full Spanish translation: ${key}`);
    assert.doesNotMatch(esTranslations[key], /[А-Яа-яЁё]/u, key);
  }
  for (const key of publicKeys) assert.equal(publicEsTranslations[key], esTranslations[key], key);
});

test('Lesson 11 Spanish contains no known machine-translation residue', () => {
  const forbidden = /triple-dip|carta-cara|plena condena|gol-wise|frontales se rompen|aleta al|productos de código abierto|\b(?:roleplay|role-play|score|evidence|selfPractice|self-practice|activity|activities|mini-check|mastery|listening|narration|modelAnswer)\b/iu;
  const failures = [...lessonElevenKeys].map((key) => [key, esTranslations[key]] as const).filter(([, translation]) => forbidden.test(translation));
  assert.deepEqual(failures, []);
});

test('Lesson 11 Spanish preserves the surface and conventional locative rules', () => {
  assert.match(esTranslations['Из урока 10 переносим главный навык: сначала понять пространственную роль. В L11 добавляется второй шаг — определить, какую местную семью обычно использует конкретное слово.'], /función espacial.*qué familia locativa/u);
  assert.match(esTranslations['У Hol? больше видимых вариантов, чем у Hová? и Honnan?. Это нормально: -n/-on/-en/-ön — одна функция «где?», а не четыре разных значения.'], /-n\/-on\/-en\/-ön.*única función/u);
  assert.match(esTranslations['Эти две формы удобно учить парой. Hová? показывает конечную цель, Honnan? — исходную точку. Сначала определи направление смысла, затем выбери гармонический вариант.'], /Hová\?.*destino final.*Honnan\?.*punto de partida/u);
  assert.match(esTranslations['«Конвенциональная» не означает случайная. Это устойчивое венгерское употребление,\n          которое лучше запоминать вместе с самим словом.'], /no significa aleatorio.*uso húngaro estable/u);
  assert.match(esTranslations['Для обычного значения местонахождения в городе стандартная форма — Budapesten lakom; не *Budapestben lakom.'], /Budapesten lakom, no \*Budapestben lakom/u);
  assert.equal(esTranslations['УРОК 11 · 9/11 · ПИСЬМО'], 'LECCIÓN 11 · 9/11 · ESCRITURA');
});
