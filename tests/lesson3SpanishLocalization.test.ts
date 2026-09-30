import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_3 } from '../src/data/lessons/lesson3';
import { LESSONS_META } from '../src/data/lessons/index';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';
const esTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const publicEsTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.public.es.json', import.meta.url), 'utf8')) as Record<string, string>;

const NON_LOCALIZED_FIELDS = new Set([
  'id', 'activityId', 'objectiveId', 'assetId', 'audioText', 'baseWord',
  'cardId', 'hu', 'ipa', 'lexemeId', 'phonetic', 'targetPhonetic',
]);

function lessonThreeRussianKeys(value: unknown, field = '', result = new Set<string>()): Set<string> {
  if (typeof value === 'string') {
    if (NON_LOCALIZED_FIELDS.has(field)) return result;
    for (const part of value.split(/(<[^>]+>)/gu)) {
      const key = part.startsWith('<') ? '' : part.trim();
      if (/[А-Яа-яЁё]/u.test(key)) result.add(key);
    }
    return result;
  }
  if (Array.isArray(value)) value.forEach((item) => lessonThreeRussianKeys(item, field, result));
  else if (value && typeof value === 'object') Object.entries(value).forEach(([key, item]) => lessonThreeRussianKeys(item, key, result));
  return result;
}

const lessonThreeKeys = lessonThreeRussianKeys([
  LESSON_3,
  LESSONS_META.find((lesson) => lesson.number === 3),
  LESSON_TRANSLATION_MAP[3],
]);

test('Lesson 3 has complete Spanish coverage and a synchronized public subset', () => {
  assert.equal(lessonThreeKeys.size, 1003);
  const publicKeys = [...lessonThreeKeys].filter((key) => key in publicEsTranslations);
  assert.equal(publicKeys.length, 58);
  for (const key of lessonThreeKeys) {
    assert.ok(key in esTranslations, `missing full Spanish translation: ${key}`);
    assert.doesNotMatch(esTranslations[key], /[А-Яа-яЁё]/u, key);
  }
  for (const key of publicKeys) {
    assert.equal(publicEsTranslations[key], esTranslations[key], key);
  }
});

test('Lesson 3 Spanish contains no known machine-translation residue', () => {
  const forbidden = /\b(?:Noun|Homework|Reading|inside|petite|pre-noun|slug|one-book|autorespuesta|Numerical|Difference|Hungarian|article|spotlight|post-consensual|finite|Inpredecible|apples)\b|5-ball|10-Presidente|Suelo de basura|nivel de modelo|Sugerencias simples|Número múltiple|forma de frecuencia|vocales de la espalda|palticular|exa muestra|wit h|The final|alma\]Consejo|nuevo-mira|1-off|paquete con un adjetivo/iu;
  const failures = [...lessonThreeKeys]
    .map((key) => [key, esTranslations[key]] as const)
    .filter(([, translation]) => forbidden.test(translation));
  assert.deepEqual(failures, []);
});

test('Lesson 3 Spanish preserves the core pedagogical rules', () => {
  assert.match(esTranslations['Основное правило относится к количественным числительным внутри именной группы: két könyv, három ház, öt alma. Число уже выражает количество, поэтому показатель множественного числа на существительном не ставится.'], /sustantivo no lleva marca de plural/u);
  assert.equal(esTranslations['___ nagy alma (конкретное большое яблоко)'], '___ nagy alma (una manzana grande concreta)');
  assert.equal(esTranslations['Эти формы пока используйте как готовые выражения. Системное образование окончаний места изучается позже.'], 'Por ahora, usa estas formas como expresiones completas. La formación sistemática de las terminaciones locativas se estudiará más adelante.');
  assert.match(esTranslations['Форма -ak не является отдельной группой «неправильного множественного числа». -ok, -ak, -ek и -ök — нормальные варианты. Словарными могут быть точный выбор окончания и изменение основы: ház → házak, nap → napok, ló → lovak, tükör → tükrök.'], /variantes normales/u);
});
