import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_8 } from '../src/data/lessons/lesson8';
import { LESSONS_META } from '../src/data/lessons/index';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';

const esTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const publicEsTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.public.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const NON_LOCALIZED_FIELDS = new Set([
  'id', 'activityId', 'objectiveId', 'assetId', 'audioText', 'baseWord',
  'cardId', 'hu', 'ipa', 'lexemeId', 'phonetic', 'targetPhonetic',
]);

function lessonEightRussianKeys(value: unknown, field = '', result = new Set<string>()): Set<string> {
  if (typeof value === 'string') {
    if (NON_LOCALIZED_FIELDS.has(field)) return result;
    for (const part of value.split(/(<[^>]+>)/gu)) {
      const key = part.startsWith('<') ? '' : part.trim();
      if (/[А-Яа-яЁё]/u.test(key)) result.add(key);
    }
    return result;
  }
  if (Array.isArray(value)) value.forEach((item) => lessonEightRussianKeys(item, field, result));
  else if (value && typeof value === 'object') Object.entries(value).forEach(([key, item]) => lessonEightRussianKeys(item, key, result));
  return result;
}

const lessonEightKeys = lessonEightRussianKeys([
  LESSON_8,
  LESSONS_META.find((lesson) => lesson.number === 8),
  LESSON_TRANSLATION_MAP[8],
]);

test('Lesson 8 has complete Spanish coverage and a synchronized public subset', () => {
  assert.equal(lessonEightKeys.size, 862);
  const publicKeys = [...lessonEightKeys].filter((key) => key in publicEsTranslations);
  assert.equal(publicKeys.length, 39);
  for (const key of lessonEightKeys) {
    assert.ok(key in esTranslations, `missing full Spanish translation: ${key}`);
    assert.doesNotMatch(esTranslations[key], /[А-Яа-яЁё]/u, key);
  }
  for (const key of publicKeys) assert.equal(publicEsTranslations[key], esTranslations[key], key);
});

test('Lesson 8 Spanish contains no known machine-translation residue', () => {
  const forbidden = /controlled practice|plural possessor|model answer|propietario obvioso|propuestas neutrales|modelo de la frente|pruebas de sí|empleo conjunto|aleta al a|\b(?:speaker|role-play|score|evidence|selfPractice|mappings|activities|attempt|weaker|beyond|direct)\b/iu;
  const failures = [...lessonEightKeys]
    .map((key) => [key, esTranslations[key]] as const)
    .filter(([, translation]) => forbidden.test(translation));
  assert.deepEqual(failures, []);
});

test('Lesson 8 Spanish preserves the core possessive teaching points', () => {
  assert.match(
    esTranslations['Testvér не указывает пол и переводится как «брат или сестра». Для явного уточнения можно сказать fiútestvér — брат и lánytestvér — сестра.'],
    /hermano o hermana/u,
  );
  assert.match(
    esTranslations['Házaim означает «мои дома»: владелец один, а обладаемых предметов несколько. Эта форма остаётся только необязательным распознаванием и не входит в scoring урока 8.'],
    /«mis casas».*un solo poseedor.*varios objetos poseídos/u,
  );
  assert.match(
    esTranslations['Продуктивная грамматическая цель урока: один обладаемый предмет и владельцы én, te, ő. Нужно образовывать и понимать формы типа házam, házad, háza и частые семейные модели.'],
    /un solo objeto poseído.*én, te y ő/u,
  );
  assert.equal(esTranslations['УРОК 8 · 9/11 · ПИСЬМО'], 'LECCIÓN 8 · 9/11 · ESCRITURA');
});
