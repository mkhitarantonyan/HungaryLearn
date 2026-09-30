import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_17 } from '../src/data/lessons/lesson17';
import { LESSONS_META } from '../src/data/lessons/index';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';

const es = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const pub = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.public.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const SKIP = new Set(['id', 'activityId', 'objectiveId', 'assetId', 'audioText', 'baseWord', 'cardId', 'hu', 'ipa', 'lexemeId', 'phonetic', 'targetPhonetic']);
function keys(value: unknown, field = '', result = new Set<string>()): Set<string> {
  if (typeof value === 'string') {
    if (SKIP.has(field)) return result;
    for (const part of value.split(/(<[^>]+>)/gu)) {
      const key = part.startsWith('<') ? '' : part.trim();
      if (/[А-Яа-яЁё]/u.test(key)) result.add(key);
    }
    return result;
  }
  if (Array.isArray(value)) value.forEach(item => keys(item, field, result));
  else if (value && typeof value === 'object') Object.entries(value).forEach(([key, item]) => keys(item, key, result));
  return result;
}

const lessonKeys = keys([LESSON_17, LESSONS_META.find(item => item.number === 17), LESSON_TRANSLATION_MAP[17]]);

test('Lesson 17 has complete Spanish coverage and a synchronized public subset', () => {
  assert.equal(lessonKeys.size, 444);
  const publicKeys = [...lessonKeys].filter(key => key in pub);
  assert.equal(publicKeys.length, 27);
  for (const key of lessonKeys) {
    assert.ok(key in es, `missing full Spanish translation: ${key}`);
    assert.doesNotMatch(es[key], /[А-Яа-яЁё]/u, key);
  }
  for (const key of publicKeys) assert.equal(pub[key], es[key], key);
});

test('Lesson 17 Spanish contains no known machine-translation residue', () => {
  const forbidden = /AUDITIZACIÓN|tres pasillos|gárgola|ephemeral|cielo-estado|bloqueo de tiempo|¶ Summer ¶|\b(?:ROLEPLAY|SPEAKING PRACTICE|model answer|indoor-alternative|post-consensualización)\b|producto de código abierto|trabajo de escritura de código abierto/iu;
  const failures = [...lessonKeys].map(key => [key, es[key]] as const).filter(([, value]) => forbidden.test(value));
  assert.deepEqual(failures, []);
});

test('Lesson 17 Spanish preserves weather, season, forecast, and assessment boundaries', () => {
  assert.match(es['Не путай два вопроса: общий вопрос о погоде и вопрос о количестве градусов. Они могут описывать одну ситуацию, но требуют разного ответа.'], /pregunta general por el tiempo.*número de grados.*respuestas diferentes/u);
  assert.match(es['Не строй механическую модель «добавить один и тот же суффикс ко всем сезонам». Две формы повторяют -val/-vel из Lesson 16, две образуются иначе.'], /mismo sufijo.*Dos formas.*-val\/-vel.*otras dos.*otra manera/u);
  assert.match(es['Здесь прогноз нужен для понимания и решения задачи. Полную систему будущего времени не изучаем: она будет отдельно в Lesson 19.'], /pronóstico.*comprender.*No estudiamos todo el sistema del futuro.*lección 19/u);
  assert.match(es['В реальном сценарии 7 реплик ученика. RolePlay остаётся PARTIAL evidence: система видит прохождение диалога, но не должна считать свободную речь полностью оценённой.'], /7 intervenciones.*evidencia PARCIAL.*no debe considerar.*evaluada por completo/u);
  assert.equal(es['☀️ лето'], '☀️ verano');
  assert.equal(es['🍂 осень'], '🍂 otoño');
  assert.equal(es['УРОК 17 · 6/11 · АУДИРОВАНИЕ'], 'LECCIÓN 17 · 6/11 · COMPRENSIÓN AUDITIVA');
  assert.equal(es['УРОК 17 · 8/11 · ПИСЬМО'], 'LECCIÓN 17 · 8/11 · ESCRITURA');
  assert.equal(es['УРОК 17 · 9/11 · SPEAKING PRACTICE'], 'LECCIÓN 17 · 9/11 · PRÁCTICA ORAL');
});
