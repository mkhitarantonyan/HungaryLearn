import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_14 } from '../src/data/lessons/lesson14';
import { LESSONS_META } from '../src/data/lessons/index';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';

const esTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const publicEsTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.public.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const NON_LOCALIZED_FIELDS = new Set(['id', 'activityId', 'objectiveId', 'assetId', 'audioText', 'baseWord', 'cardId', 'hu', 'ipa', 'lexemeId', 'phonetic', 'targetPhonetic']);
function lessonFourteenRussianKeys(value: unknown, field = '', result = new Set<string>()): Set<string> {
  if (typeof value === 'string') {
    if (NON_LOCALIZED_FIELDS.has(field)) return result;
    for (const part of value.split(/(<[^>]+>)/gu)) {
      const key = part.startsWith('<') ? '' : part.trim();
      if (/[А-Яа-яЁё]/u.test(key)) result.add(key);
    }
    return result;
  }
  if (Array.isArray(value)) value.forEach((item) => lessonFourteenRussianKeys(item, field, result));
  else if (value && typeof value === 'object') Object.entries(value).forEach(([key, item]) => lessonFourteenRussianKeys(item, key, result));
  return result;
}
const lessonFourteenKeys = lessonFourteenRussianKeys([LESSON_14, LESSONS_META.find((lesson) => lesson.number === 14), LESSON_TRANSLATION_MAP[14]]);

test('Lesson 14 has complete Spanish coverage and a synchronized public subset', () => {
  assert.equal(lessonFourteenKeys.size, 564);
  const publicKeys = [...lessonFourteenKeys].filter((key) => key in publicEsTranslations);
  assert.equal(publicKeys.length, 33);
  for (const key of lessonFourteenKeys) {
    assert.ok(key in esTranslations, `missing full Spanish translation: ${key}`);
    assert.doesNotMatch(esTranslations[key], /[А-Яа-яЁё]/u, key);
  }
  for (const key of publicKeys) assert.equal(publicEsTranslations[key], esTranslations[key], key);
});

test('Lesson 14 Spanish contains no known machine-translation residue', () => {
  const forbidden = /AUDITIZACIÓN|Benzie|Benze|universidad-restaurante|pre-sequence|timemarker|contrarretro|pregunta de contador|semana-tiempo|autopráctica de la espuma|uno-way|productos de código abierto|nivel-certificado|misto|presente horario|by closed|\b(?:activity|model answer|RolePlay|learner-turns|score|evidence|mini-check|checkpoint model)\b/iu;
  const failures = [...lessonFourteenKeys].map((key) => [key, esTranslations[key]] as const).filter(([, translation]) => forbidden.test(translation));
  assert.deepEqual(failures, []);
});

test('Lesson 14 Spanish preserves the -ik, time, and checkpoint boundaries', () => {
  assert.match(esTranslations['Форма на -ik в словарной / 3-м лице не означает автоматически «действие на себя». Смысл нужно знать у конкретного глагола.'], /terminada en -ik.*no es automáticamente reflexiva.*No identifiques -ik.*se/u);
  assert.match(esTranslations['Не путай -kor и -ra/-re: hétkor означает «в семь», а hétre — «к семи / на семь» в подходящем контексте.'], /hétkor.*a las siete.*hétre.*para las siete/u);
  assert.match(esTranslations['DIRECT не означает «я полностью владею навыком во всех ситуациях». Это означает только, что конкретная закрытая активность дала прямое проверяемое evidence по своему критерию.'], /DIRECTA no significa.*Solo significa.*evidencia directa y verificable/u);
  assert.match(esTranslations['Checkpoint помогает увидеть сильные и слабые места перед дальнейшим материалом,\n          но не заменяет полноценную стандартизированную оценку владения языком.'], /puntos fuertes y débiles.*no sustituye una evaluación estandarizada/u);
  assert.equal(esTranslations['УРОК 14 · 8/11 · ПИСЬМО'], 'LECCIÓN 14 · 8/11 · ESCRITURA');
  assert.equal(esTranslations['Я просыпаюсь в семь часов.'], 'Me despierto a las siete.');
});
