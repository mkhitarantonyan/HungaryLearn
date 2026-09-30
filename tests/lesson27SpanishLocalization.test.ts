import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_27 } from '../src/data/lessons/lesson27';
import { LESSONS_META } from '../src/data/lessons/index';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';

const es = JSON.parse(
  readFileSync(new URL('../src/i18n/lessonTranslations.es.json', import.meta.url), 'utf8'),
) as Record<string, string>;
const publicEs = JSON.parse(
  readFileSync(new URL('../src/i18n/lessonTranslations.public.es.json', import.meta.url), 'utf8'),
) as Record<string, string>;

const skippedFields = new Set([
  'id', 'activityId', 'objectiveId', 'assetId', 'audioText', 'baseWord',
  'cardId', 'hu', 'ipa', 'lexemeId', 'phonetic', 'targetPhonetic',
]);

function collectKeys(value: unknown, field = '', result = new Set<string>()): Set<string> {
  if (typeof value === 'string') {
    if (skippedFields.has(field)) return result;
    for (const part of value.split(/(<[^>]+>)/gu)) {
      const text = part.startsWith('<') ? '' : part.trim();
      if (/[А-Яа-яЁё]/u.test(text)) result.add(text);
    }
    return result;
  }
  if (Array.isArray(value)) value.forEach((item) => collectKeys(item, field, result));
  else if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, item]) => collectKeys(item, key, result));
  }
  return result;
}

const lessonKeys = collectKeys([
  LESSON_27,
  LESSONS_META.find((item) => item.number === 27),
  LESSON_TRANSLATION_MAP[27],
]);

test('Lesson 27 has complete Spanish coverage and a synchronized public subset', () => {
  assert.equal(lessonKeys.size, 545);
  const publicKeys = [...lessonKeys].filter((key) => key in publicEs);
  assert.equal(publicKeys.length, 30);
  for (const key of lessonKeys) {
    assert.ok(key in es, `missing full Spanish translation: ${key}`);
    assert.doesNotMatch(es[key], /[А-Яа-яЁё]/u, key);
  }
  for (const key of publicKeys) assert.equal(publicEs[key], es[key], key);
});

test('Lesson 27 Spanish contains no known machine-translation residue', () => {
  const forbidden = /Seis lecciones en el aula|Dime lo que estás pasando|c\) Hora|Formas políticas|transferencia perdida|Lecciones de la Lecciones|Congregación de las vocales|después del consentimiento|finalismo|aterrizaje-way|\btrasplante\b|\bdeprimido\b|cuestión de la educación política|uno-way|\bliquidación\b|\bRattle\b|\bLevántate\b|Equipos de polito|Ve y ve|Puestos de destino|\bquery\b|B título|C Informe|Confeccionar|\bportaaviones\b|Destinguir|sistema de idiomas|\binclinaciones\b|\bautoestima\b|pomponesidad|\bExacto\b|y adelante|c c cita|voucher y ticket|botón de envío|caso creativo|Pregúntale y explíquelo/iu;
  const failures = [...lessonKeys]
    .map((key) => [key, es[key]] as const)
    .filter(([, value]) => forbidden.test(value));
  assert.deepEqual(failures, []);
});

test('Lesson 27 Spanish preserves transport, booking, and real-world safety distinctions', () => {
  assert.match(
    es['Для значения «на чём?» используется окончание -val/-vel. Сначала выбери вариант по гармонии гласных, затем проверь конечный звук слова.'],
    /-val\/-vel.*armonía vocálica.*sonido final/u,
  );
  assert.match(
    es['Не смешивай средство, место и направление: busszal — на автобусе как способом; buszon — в автобусе; buszra — на автобус, направление посадки.'],
    /busszal.*medio de transporte.*buszon.*ubicación.*buszra.*dirección de subida/u,
  );
  assert.equal(es['Путь, платформа и выход на посадку'], 'Vía, andén y puerta de embarque');
  assert.match(
    es['Хорошая покупка билета строится по порядку: куда → когда → в одну сторону или туда-обратно → кто едет → класс → цена → способ оплаты → подтверждение.'],
    /destino → fecha y hora → ida o ida y vuelta → pasajero → clase → precio → forma de pago → confirmación/u,
  );
  assert.match(
    es['Номер документа, реальные данные бронирования и платёжные сведения нельзя использовать в учебном сценарии.'],
    /No utilices números de documentos reales, datos reales de reservas ni información de pago/u,
  );
  assert.match(
    es['Правильное слитное написание: retúrjegy (билет туда и обратно). "Egy útra" – билет в одну сторону. "Menetjegy" – просто билет (без указания направления).'],
    /una sola palabra.*retúrjegy.*ida y vuelta.*Egy útra.*billete de ida.*Menetjegy.*simplemente «billete»/u,
  );
  assert.equal(es['УРОК 27 · 9/11 · ИТОГОВЫЕ ЗАДАНИЯ'], 'LECCIÓN 27 · 9/11 · TAREAS FINALES');
  assert.equal(es['УРОК 27 · 11/11 · ИТОГ'], 'LECCIÓN 27 · 11/11 · RESUMEN');
});
