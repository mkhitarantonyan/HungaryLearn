import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_10 } from '../src/data/lessons/lesson10';
import { LESSONS_META } from '../src/data/lessons/index';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';

const esTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const publicEsTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.public.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const NON_LOCALIZED_FIELDS = new Set([
  'id', 'activityId', 'objectiveId', 'assetId', 'audioText', 'baseWord',
  'cardId', 'hu', 'ipa', 'lexemeId', 'phonetic', 'targetPhonetic',
]);

function lessonTenRussianKeys(value: unknown, field = '', result = new Set<string>()): Set<string> {
  if (typeof value === 'string') {
    if (NON_LOCALIZED_FIELDS.has(field)) return result;
    for (const part of value.split(/(<[^>]+>)/gu)) {
      const key = part.startsWith('<') ? '' : part.trim();
      if (/[А-Яа-яЁё]/u.test(key)) result.add(key);
    }
    return result;
  }
  if (Array.isArray(value)) value.forEach((item) => lessonTenRussianKeys(item, field, result));
  else if (value && typeof value === 'object') Object.entries(value).forEach(([key, item]) => lessonTenRussianKeys(item, key, result));
  return result;
}

const lessonTenKeys = lessonTenRussianKeys([
  LESSON_10,
  LESSONS_META.find((lesson) => lesson.number === 10),
  LESSON_TRANSLATION_MAP[10],
]);

test('Lesson 10 has complete Spanish coverage and a synchronized public subset', () => {
  assert.equal(lessonTenKeys.size, 890);
  const publicKeys = [...lessonTenKeys].filter((key) => key in publicEsTranslations);
  assert.equal(publicKeys.length, 46);
  for (const key of lessonTenKeys) {
    assert.ok(key in esTranslations, `missing full Spanish translation: ${key}`);
    assert.doesNotMatch(esTranslations[key], /[А-Яа-яЁё]/u, key);
  }
  for (const key of publicKeys) assert.equal(publicEsTranslations[key], esTranslations[key], key);
});

test('Lesson 10 Spanish contains no known machine-translation residue', () => {
  const forbidden = /mini-check|modelAnswer|route-skeleton|consolas de verbo|fila trasera|versión de atrás|aleta al|prueba de sí|contextless|libras esterlinas|\b(?:roleplay|role-play|score|evidence|selfPractice|self-practice|activity|activities|suffix|after send|optional speaking)\b/iu;
  const failures = [...lessonTenKeys]
    .map((key) => [key, esTranslations[key]] as const)
    .filter(([, translation]) => forbidden.test(translation));
  assert.deepEqual(failures, []);
});

test('Lesson 10 Spanish preserves the internal-locative system', () => {
  assert.match(
    esTranslations['Главная цель 10.1 — не выучить все варианты окончаний, а научиться мгновенно различать три пространственных отношения. Гармонию гласных и выбор -ban/-ben, -ba/-be, -ból/-ből разбираем на 10.2.'],
    /tres relaciones espaciales.*-ban\/-ben.*-ba\/-be.*-ból\/-ből/u,
  );
  assert.match(
    esTranslations['Не путай Hol? и Hová?: házban = в доме, где?; házba = в дом, куда?. Одна буква n меняет пространственное отношение.'],
    /házban.*¿dónde\?.*házba.*¿adónde\?.*n cambia/u,
  );
  assert.match(
    esTranslations['Если основа оканчивается на короткое'],
    /raíz termina en una vocal breve/u,
  );
  assert.match(
    esTranslations['6. В -ból / -ből гласная всегда долгая'],
    /vocal siempre es larga/u,
  );
  assert.match(
    esTranslations['Сам по себе глагол движения не определяет падеж. Поэтому правило «megy = -ba/-be» неверно.\n          Глагол один —'],
    /no determina por sí solo el caso.*megy = -ba\/-be.*incorrecta/u,
  );
  assert.equal(esTranslations['УРОК 10 · 9/11 · ВЗАИМОДЕЙСТВИЕ'], 'LECCIÓN 10 · 9/11 · INTERACCIÓN');
});
