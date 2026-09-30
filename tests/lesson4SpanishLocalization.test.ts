import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_4 } from '../src/data/lessons/lesson4';
import { LESSONS_META } from '../src/data/lessons/index';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';

const esTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const publicEsTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.public.es.json', import.meta.url), 'utf8')) as Record<string, string>;

const NON_LOCALIZED_FIELDS = new Set([
  'id', 'activityId', 'objectiveId', 'assetId', 'audioText', 'baseWord',
  'cardId', 'hu', 'ipa', 'lexemeId', 'phonetic', 'targetPhonetic',
]);

function lessonFourRussianKeys(value: unknown, field = '', result = new Set<string>()): Set<string> {
  if (typeof value === 'string') {
    if (NON_LOCALIZED_FIELDS.has(field)) return result;
    for (const part of value.split(/(<[^>]+>)/gu)) {
      const key = part.startsWith('<') ? '' : part.trim();
      if (/[А-Яа-яЁё]/u.test(key)) result.add(key);
    }
    return result;
  }
  if (Array.isArray(value)) value.forEach((item) => lessonFourRussianKeys(item, field, result));
  else if (value && typeof value === 'object') Object.entries(value).forEach(([key, item]) => lessonFourRussianKeys(item, key, result));
  return result;
}

const lessonFourKeys = lessonFourRussianKeys([
  LESSON_4,
  LESSONS_META.find((lesson) => lesson.number === 4),
  LESSON_TRANSLATION_MAP[4],
]);

test('Lesson 4 has complete Spanish coverage and keeps the public subset synchronized', () => {
  assert.equal(lessonFourKeys.size, 950);
  const publicKeys = [...lessonFourKeys].filter((key) => key in publicEsTranslations);
  assert.equal(publicKeys.length, 43);
  for (const key of lessonFourKeys) {
    assert.ok(key in esTranslations, `missing full Spanish translation: ${key}`);
    assert.doesNotMatch(esTranslations[key], /[А-Яа-яЁё]/u, key);
  }
  for (const key of publicKeys) assert.equal(publicEsTranslations[key], esTranslations[key], key);
});

test('Lesson 4 Spanish contains no known machine-translation residue', () => {
  const forbidden = /\b(?:read|write|with|Homework|Hungarian|Incierto|denigrate|adjeive|Basics|frecuencia-ik-verbs|trabajo-en-la-noche|oficina-trabajo|cara|fundación)\b|forma de frecuencia|vocales de la espalda|autorespuesta|denegación/iu;
  const failures = [...lessonFourKeys]
    .map((key) => [key, esTranslations[key]] as const)
    .filter(([, translation]) => forbidden.test(translation));
  assert.deepEqual(failures, []);
});

test('Lesson 4 Spanish preserves the core pedagogical distinctions', () => {
  assert.match(esTranslations['Слово most указывает, что действие происходит сейчас, но глагол остаётся в обычном настоящем времени. В венгерском нет отдельной обязательной формы, соответствующей английскому Present Continuous.'], /no existe una forma progresiva obligatoria/u);
  assert.match(esTranslations['После каждого ответа укажите, почему используется окончание с гласной.'], /terminación con vocal/u);
  assert.match(esTranslations['Фраза «в форме ő нет никаких окончаний» верна только для обычных не-ik глаголов: vár, kér, köt, tanul. У -ik-глаголов словарная форма ő заканчивается на -ik: dolgozik, lakik, játszik.'], /solo es válida para los verbos regulares que no terminan en -ik/u);
  assert.equal(esTranslations['Как правильно сказать "ты читаешь" от глагола "olvas"?'], '¿Cómo se dice correctamente «tú lees» con el verbo olvas?');
});
