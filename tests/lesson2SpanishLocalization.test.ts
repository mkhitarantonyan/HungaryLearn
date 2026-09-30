import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_2 } from '../src/data/lessons/lesson2';
import { LESSONS_META } from '../src/data/lessons/index';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';
const esTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const publicEsTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.public.es.json', import.meta.url), 'utf8')) as Record<string, string>;

const NON_LOCALIZED_FIELDS = new Set([
  'id',
  'activityId',
  'objectiveId',
  'assetId',
  'audioText',
  'baseWord',
  'cardId',
  'hu',
  'ipa',
  'lexemeId',
  'phonetic',
  'targetPhonetic',
]);

function lessonTwoRussianKeys(value: unknown, field = '', result = new Set<string>()): Set<string> {
  if (typeof value === 'string') {
    if (NON_LOCALIZED_FIELDS.has(field)) return result;
    for (const part of value.split(/(<[^>]+>)/gu)) {
      const key = part.startsWith('<') ? '' : part.trim();
      if (/[А-Яа-яЁё]/u.test(key)) result.add(key);
    }
    return result;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => lessonTwoRussianKeys(item, field, result));
  } else if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, item]) => lessonTwoRussianKeys(item, key, result));
  }
  return result;
}

const lessonTwoKeys = lessonTwoRussianKeys([
  LESSON_2,
  LESSONS_META.find((lesson) => lesson.number === 2),
  LESSON_TRANSLATION_MAP[2],
]);

test('Lesson 2 has complete synchronized Spanish coverage', () => {
  assert.equal(lessonTwoKeys.size, 745);
  for (const key of lessonTwoKeys) {
    assert.ok(key in esTranslations, `missing full Spanish translation: ${key}`);
    assert.ok(key in publicEsTranslations, `missing public Spanish translation: ${key}`);
    assert.equal(publicEsTranslations[key as keyof typeof publicEsTranslations], esTranslations[key as keyof typeof esTranslations]);
    assert.doesNotMatch(esTranslations[key as keyof typeof esTranslations], /[А-Яа-яЁё]/u, key);
  }
});

test('Lesson 2 Spanish contains no known machine-translation residue', () => {
  const forbidden = /GELCOM|He\/she|\b(?:Pronoun|mojado|Denial|Reportedly|Pleasant|respondible|oficios[ao]s?|policial|pol[ií]tica|denegaci[oó]n|existiendo)\b|tratamientos pol[ií]ticos|pregunta palabra|palabra de pregunta|corte educado|forma terminada|hecho listas|Abrazaderas listas|Family-friendship|comida-orden|compartirla con un modelo|a corto plazo/iu;
  const failures = [...lessonTwoKeys]
    .map((key) => [key, esTranslations[key as keyof typeof esTranslations]] as const)
    .filter(([, translation]) => forbidden.test(translation));

  assert.deepEqual(failures, []);
});

test('Lesson 2 Spanish preserves the core pedagogical distinctions', () => {
  assert.equal(esTranslations['ti — неофициальное «вы» при обращении к нескольким людям; это не вежливое «Вы» одному человеку.'], 'ti es el «vosotros/vosotras» informal para dirigirse a varias personas; no es el usted formal dirigido a una sola persona.');
  assert.match(esTranslations['Не ставьте nem механически перед любой формой «быть». В нейтральных предложениях отрицанием van и vannak являются специальные формы nincs и nincsenek.'], /nincs y nincsenek/u);
  assert.equal(esTranslations['___ diák vagyok. — Я студент / студентка.'], '___ diák vagyok. — Soy estudiante.');
  assert.equal(esTranslations['местонахождение → van/vannak остаются;'], 'ubicación → se mantienen van/vannak;');
  assert.equal(esTranslations['Соединённые Штаты Америки — американец / американка / американский'], 'Estados Unidos de América — estadounidense (persona o adjetivo)');
});
