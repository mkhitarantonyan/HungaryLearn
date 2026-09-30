import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_7 } from '../src/data/lessons/lesson7';
import { LESSONS_META } from '../src/data/lessons/index';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';

const esTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const publicEsTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.public.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const NON_LOCALIZED_FIELDS = new Set([
  'id', 'activityId', 'objectiveId', 'assetId', 'audioText', 'baseWord',
  'cardId', 'hu', 'ipa', 'lexemeId', 'phonetic', 'targetPhonetic',
]);
function lessonSevenRussianKeys(value: unknown, field = '', result = new Set<string>()): Set<string> {
  if (typeof value === 'string') {
    if (NON_LOCALIZED_FIELDS.has(field)) return result;
    for (const part of value.split(/(<[^>]+>)/gu)) {
      const key = part.startsWith('<') ? '' : part.trim();
      if (/[А-Яа-яЁё]/u.test(key)) result.add(key);
    }
    return result;
  }
  if (Array.isArray(value)) value.forEach((item) => lessonSevenRussianKeys(item, field, result));
  else if (value && typeof value === 'object') Object.entries(value).forEach(([key, item]) => lessonSevenRussianKeys(item, key, result));
  return result;
}
const lessonSevenKeys = lessonSevenRussianKeys([
  LESSON_7,
  LESSONS_META.find((lesson) => lesson.number === 7),
  LESSON_TRANSLATION_MAP[7],
]);

test('Lesson 7 has complete Spanish coverage and a synchronized public subset', () => {
  assert.equal(lessonSevenKeys.size, 901);
  const publicKeys = [...lessonSevenKeys].filter((key) => key in publicEsTranslations);
  assert.equal(publicKeys.length, 42);
  for (const key of lessonSevenKeys) {
    assert.ok(key in esTranslations, `missing full Spanish translation: ${key}`);
    assert.doesNotMatch(esTranslations[key], /[А-Яа-яЁё]/u, key);
  }
  for (const key of publicKeys) assert.equal(publicEsTranslations[key], esTranslations[key], key);
});

test('Lesson 7 Spanish contains no known machine-translation residue', () => {
  const forbidden = /accusatory|objeto noun|The accusative|armonía confesional|vocal rota|Adivinos|altavoz|Localizaciones|nombre-calling|autorepresentación|subsuelo|coorioso|confiar en|Identificado0|\bPolite\b|objeto tercero|subjeto|no-objeto|contrasta automáticamente|AUDIDAD|Signal in text|Smack-Basket|compra de datos|final policial|Don't|formas de culpa|caso de vino|caso de la vaca|pataje de porte|\bAfter esta\b|relaciones sexuales/iu;
  const failures = [...lessonSevenKeys]
    .map((key) => [key, esTranslations[key]] as const)
    .filter(([, translation]) => forbidden.test(translation));
  assert.deepEqual(failures, []);
});

test('Lesson 7 Spanish preserves the core accusative rules', () => {
  assert.match(esTranslations['Главная цель 7.1 — научиться замечать прямое дополнение. В венгерском существительное-объект обычно имеет показатель -t; конкретные модели образования разбираются на 7.2.'], /objeto directo/u);
  assert.match(esTranslations['Гармония гласных помогает сузить выбор соединительной гласной, но не сообщает автоматически, нужна ли она вообще и какая точная форма получится. Особенно важно не выводить форму только по огублённости: könyv содержит ö, но правильно könyvet, а не könyvöt.'], /könyvet, no könyvöt/u);
  assert.match(esTranslations['Форма -lak/-lek одновременно показывает подлежащее первого лица единственного числа — «я» — и прямое дополнение второго лица — «тебя» или «вас» при неофициальном обращении.'], /sujeto de primera persona singular/u);
  assert.match(esTranslations['После числительного существительное остаётся в единственном числе:'], /permanece en singular/u);
});
