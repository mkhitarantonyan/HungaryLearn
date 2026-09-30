import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_12 } from '../src/data/lessons/lesson12';
import { LESSONS_META } from '../src/data/lessons/index';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';

const esTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const publicEsTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.public.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const NON_LOCALIZED_FIELDS = new Set(['id', 'activityId', 'objectiveId', 'assetId', 'audioText', 'baseWord', 'cardId', 'hu', 'ipa', 'lexemeId', 'phonetic', 'targetPhonetic']);
function lessonTwelveRussianKeys(value: unknown, field = '', result = new Set<string>()): Set<string> {
  if (typeof value === 'string') {
    if (NON_LOCALIZED_FIELDS.has(field)) return result;
    for (const part of value.split(/(<[^>]+>)/gu)) {
      const key = part.startsWith('<') ? '' : part.trim();
      if (/[А-Яа-яЁё]/u.test(key)) result.add(key);
    }
    return result;
  }
  if (Array.isArray(value)) value.forEach((item) => lessonTwelveRussianKeys(item, field, result));
  else if (value && typeof value === 'object') Object.entries(value).forEach(([key, item]) => lessonTwelveRussianKeys(item, key, result));
  return result;
}
const lessonTwelveKeys = lessonTwelveRussianKeys([LESSON_12, LESSONS_META.find((lesson) => lesson.number === 12), LESSON_TRANSLATION_MAP[12]]);

test('Lesson 12 has complete Spanish coverage and a synchronized public subset', () => {
  assert.equal(lessonTwelveKeys.size, 724);
  const publicKeys = [...lessonTwelveKeys].filter((key) => key in publicEsTranslations);
  assert.equal(publicKeys.length, 37);
  for (const key of lessonTwelveKeys) {
    assert.ok(key in esTranslations, `missing full Spanish translation: ${key}`);
    assert.doesNotMatch(esTranslations[key], /[А-Яа-яЁё]/u, key);
  }
  for (const key of publicKeys) assert.equal(publicEsTranslations[key], esTranslations[key], key);
});

test('Lesson 12 Spanish contains no known machine-translation residue', () => {
  const forbidden = /trasplante|tobogán|destrozado|corrugado|desbloquead|Newgaty|MARCHRO|foot-show|route prepared|Inside the Library|Top three|\b(?:chunks?|RolePlay|selfPractice|score|evidence|modelAnswer|landmark|gol|checklist|self-check)\b/iu;
  const failures = [...lessonTwelveKeys].map((key) => [key, esTranslations[key]] as const).filter(([, translation]) => forbidden.test(translation));
  assert.deepEqual(failures, []);
});

test('Lesson 12 Spanish preserves the locative system and route-repair pedagogy', () => {
  assert.match(esTranslations['L12 добавляет третью знакомую пространственную семью. Её главное значение — контакт с человеком или точкой как с ориентиром: быть у/рядом, двигаться к ней, двигаться от неё.'], /estar junto.*dirigirse hacia.*alejarse/u);
  assert.match(esTranslations['Не выбирай суффикс по последней букве слова. Смотри на гласные основы и особенно различай передние неогублённые e/é/i/í и передние огублённые ö/ő/ü/ű.'], /no redondeadas e\/é\/i\/í.*redondeadas ö\/ő\/ü\/ű/u);
  assert.match(esTranslations['Глагол движения сам по себе не выбирает семью. Формы szobába, postára и Péterhez все отвечают на Hová?, но выражают разные пространственные отношения.'], /no elige una familia.*relaciones espaciales/u);
  assert.match(esTranslations['В реальном маршруте умение восстановить понимание важнее, чем угадывать недослышанную деталь.'], /restablecer la comprensión.*adivinar/u);
  assert.match(esTranslations['спросить → услышать → заметить непонимание → попросить повторить → подтвердить'], /preguntar → escuchar → detectar.*pedir que repitan → confirmar/u);
  assert.equal(esTranslations['УРОК 12 · 9/11 · ПИСЬМО'], 'LECCIÓN 12 · 9/11 · ESCRITURA');
});
