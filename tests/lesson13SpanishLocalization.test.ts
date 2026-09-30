import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_13 } from '../src/data/lessons/lesson13';
import { LESSONS_META } from '../src/data/lessons/index';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';

const esTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const publicEsTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.public.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const NON_LOCALIZED_FIELDS = new Set(['id', 'activityId', 'objectiveId', 'assetId', 'audioText', 'baseWord', 'cardId', 'hu', 'ipa', 'lexemeId', 'phonetic', 'targetPhonetic']);
function lessonThirteenRussianKeys(value: unknown, field = '', result = new Set<string>()): Set<string> {
  if (typeof value === 'string') {
    if (NON_LOCALIZED_FIELDS.has(field)) return result;
    for (const part of value.split(/(<[^>]+>)/gu)) {
      const key = part.startsWith('<') ? '' : part.trim();
      if (/[А-Яа-яЁё]/u.test(key)) result.add(key);
    }
    return result;
  }
  if (Array.isArray(value)) value.forEach((item) => lessonThirteenRussianKeys(item, field, result));
  else if (value && typeof value === 'object') Object.entries(value).forEach(([key, item]) => lessonThirteenRussianKeys(item, key, result));
  return result;
}
const lessonThirteenKeys = lessonThirteenRussianKeys([LESSON_13, LESSONS_META.find((lesson) => lesson.number === 13), LESSON_TRANSLATION_MAP[13]]);

test('Lesson 13 has complete Spanish coverage and a synchronized public subset', () => {
  assert.equal(lessonThirteenKeys.size, 578);
  const publicKeys = [...lessonThirteenKeys].filter((key) => key in publicEsTranslations);
  assert.equal(publicKeys.length, 41);
  for (const key of lessonThirteenKeys) {
    assert.ok(key in esTranslations, `missing full Spanish translation: ${key}`);
    assert.doesNotMatch(esTranslations[key], /[А-Яа-яЁё]/u, key);
  }
  for (const key of publicKeys) assert.equal(publicEsTranslations[key], esTranslations[key], key);
});

test('Lesson 13 Spanish contains no known machine-translation residue', () => {
  const forbidden = /Don't|Timeline|nbsp; tardenbsp|cara equivocada|forma desnuda|educación múlt idő|AUDITIZACIÓN|cronologología|película-caminar|market-walk|compra-comprar|finalismo|frases Lexicales|sistema educativo completo|forma de frecuencia|pasado tenso|\b(?:chunks?|RolePlay|selfPractice|score|evidence|modelAnswer|mini-check|checkpoint|controlled practice)\b/iu;
  const failures = [...lessonThirteenKeys].map((key) => [key, esTranslations[key]] as const).filter(([, translation]) => forbidden.test(translation));
  assert.deepEqual(failures, []);
});

test('Lesson 13 Spanish preserves the bounded past-tense pedagogy', () => {
  assert.match(esTranslations['Не добавляй -t механически к любому глаголу. В венгерском есть изменения основы, соединительные гласные и разные личные окончания. Полная система будет в L20.'], /No añadas -t mecánicamente.*cambios en la raíz.*L20/u);
  assert.match(esTranslations['Не смешивай лицо: dolgoztam = «я работал», dolgozott = «он/она работал(а)». Одинаковый глагол даёт разные личные формы.'], /persona gramatical.*dolgoztam.*yo trabajé.*dolgozott.*él\/ella trabajó/u);
  assert.match(esTranslations['Не смешивай tanult и volt: tanult — форма глагола tanul, а volt — прошедшая форма lenni. Сначала определи смысл глагола, затем лицо.'], /tanult.*tanul.*volt.*pasado de lenni.*persona/u);
  assert.equal(esTranslations['nem + прошедшая форма глагола'], 'nem + forma pasada del verbo');
  assert.match(esTranslations['Венгерское прошедшее время одно как продуктивная морфологическая система,\n          но оттенок ситуации всё равно зависит от значения глагола, приставки и контекста.\n          В L13 не нужно анализировать эти оттенки отдельно.'], /pretérito perfecto simple o al imperfecto.*matices aspectuales/u);
  assert.equal(esTranslations['УРОК 13 · 9/11 · ПИСЬМО'], 'LECCIÓN 13 · 9/11 · ESCRITURA');
});
