import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_5 } from '../src/data/lessons/lesson5';
import { LESSONS_META } from '../src/data/lessons/index';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';

const esTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const publicEsTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.public.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const NON_LOCALIZED_FIELDS = new Set([
  'id', 'activityId', 'objectiveId', 'assetId', 'audioText', 'baseWord',
  'cardId', 'hu', 'ipa', 'lexemeId', 'phonetic', 'targetPhonetic',
]);

function lessonFiveRussianKeys(value: unknown, field = '', result = new Set<string>()): Set<string> {
  if (typeof value === 'string') {
    if (NON_LOCALIZED_FIELDS.has(field)) return result;
    for (const part of value.split(/(<[^>]+>)/gu)) {
      const key = part.startsWith('<') ? '' : part.trim();
      if (/[А-Яа-яЁё]/u.test(key)) result.add(key);
    }
    return result;
  }
  if (Array.isArray(value)) value.forEach((item) => lessonFiveRussianKeys(item, field, result));
  else if (value && typeof value === 'object') Object.entries(value).forEach(([key, item]) => lessonFiveRussianKeys(item, key, result));
  return result;
}

const lessonFiveKeys = lessonFiveRussianKeys([
  LESSON_5,
  LESSONS_META.find((lesson) => lesson.number === 5),
  LESSON_TRANSLATION_MAP[5],
]);

test('Lesson 5 has complete Spanish coverage and a synchronized public subset', () => {
  assert.equal(lessonFiveKeys.size, 345);
  const publicKeys = [...lessonFiveKeys].filter((key) => key in publicEsTranslations);
  assert.equal(publicKeys.length, 24);
  for (const key of lessonFiveKeys) {
    assert.ok(key in esTranslations, `missing full Spanish translation: ${key}`);
    assert.doesNotMatch(esTranslations[key], /[А-Яа-яЁё]/u, key);
  }
  for (const key of publicKeys) assert.equal(publicEsTranslations[key], esTranslations[key], key);
});

test('Lesson 5 Spanish contains no known machine-translation residue', () => {
  const forbidden = /10-plus-uno|Top diez|Consejo|Contraseña|June and|mes-form|tres vías|4-way|8 en uno|AUDITIZACIÓN|altavoz|Función de juego|médium medio|c-kor|tiempo actual|gratis\/libre|momento de la audiencia|\btranscript\b/iu;
  const failures = [...lessonFiveKeys]
    .map((key) => [key, esTranslations[key]] as const)
    .filter(([, translation]) => forbidden.test(translation));
  assert.deepEqual(failures, []);
});

test('Lesson 5 Spanish preserves the core number, date, and time rules', () => {
  assert.match(esTranslations['Для числа 2: kettő употребляется самостоятельно, két — перед существительным или единицей.'], /kettő se usa de forma independiente/u);
  assert.match(esTranslations['После количественного числительного существительное остаётся в единственном числе: két könyv, három szék, tíz ablak.'], /singular/u);
  assert.equal(esTranslations['год → месяц → день'], 'año → mes → día');
  assert.equal(esTranslations['-kor указывает время действия: három órakor.'], '-kor indica la hora de una acción: három órakor.');
  assert.equal(esTranslations['Как сказать «в понедельник» в простом расписании?'], '¿Cómo se dice «el lunes» en un horario sencillo?');
});
