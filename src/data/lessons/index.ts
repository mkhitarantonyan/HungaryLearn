import { Lesson, LessonMeta } from '../../types';
import { LESSON_1 } from './lesson1';
import { LESSON_2 } from './lesson2';
import { apiFetch } from '../../lib/apiClient';

export const LESSONS_META: LessonMeta[] = [
  {
    id: 1,
    number: 1,
    level: 'A0',
    title: 'Урок 1 · Üdvözöllek! Алфавит и базовые звуки',
    subtitle: 'Алфавит, особые согласные, долгие гласные, ударение',
    description: 'Введение в 44 буквы/буквенные единицы венгерского алфавита, предсказуемое чтение, контрасты s/sz, gy/ty/ny и j/ly, гласные и начальное словесное ударение.',
    slidesCount: 11
  },
  {
    id: 2,
    number: 2,
    level: 'A0',
    title: 'Урок 2 · Köszönés & lenni',
    subtitle: 'Приветствия, личные местоимения, глагол «быть»',
    description: 'Официальные и неофициальные приветствия (Szia, Jó napot), личные местоимения (én, te, ő...), спряжение глагола lenni (vagyok, vagy, van) и первое знакомство.',
    slidesCount: 10
  },
  {
    id: 3,
    number: 3,
    level: 'A0',
    title: 'Урок 3 · Főnév, névelő, többes szám',
    subtitle: 'Существительное, артикли (a/az/egy), множественное число (-k)',
    description: 'Отсутствие рода, определенные (a/az) и неопределенные (egy) артикли, правила образования множественного числа (-k) и правило о числах.',
    slidesCount: 11
  },
  {
    id: 4,
    number: 4,
    level: 'A0',
    title: 'Урок 4 · Jelen idő',
    subtitle: 'Спряжение глаголов в настоящем времени',
    description: 'Неопределённое спряжение (alanyi ragozás) в настоящем времени, утвердительные и отрицательные предложения с nem, простые общие вопросы и ограниченное знакомство с частотными -ik глаголами.',
    slidesCount: 12
  },
  {
    id: 5,
    number: 5,
    level: 'A0',
    title: 'Урок 5 · Számok, idő, napok',
    subtitle: 'Числа 1–100, время, дни недели, месяцы и даты',
    description: 'Числа 1-100, выражение времени (Hány óra van?), -kor суффикс, дни недели, 12 месяцев, формат даты Год-Месяц-День и распорядок дня.',
    slidesCount: 12
  },
  {
    id: 6,
    number: 6,
    level: 'A0',
    title: 'Урок 6 · A0 összefoglaló',
    subtitle: 'Повторение и закрепление уровня A0',
    description: 'Спокойное повторение A0: чтение, четыре короткие станции, мини-аудирование, личный профиль и итоговая самопроверка. Без новой грамматики A1.',
    slidesCount: 10
  },
  {
    id: 7,
    number: 7,
    level: 'A1',
    title: 'Урок 7 · A tárgyeset',
    subtitle: 'Винительный падеж — суффикс -t',
    description: 'Прямое дополнение с -t в бытовых ситуациях: предметы, покупки, просьбы, доступное чтение и текстовая практика без преждевременной полной системы спряжения.',
    slidesCount: 11
  },
  {
    id: 8,
    number: 8,
    level: 'A1',
    title: 'Урок 8 · A család & Birtokos ragozás',
    subtitle: 'Семья и притяжательные формы: én, te, ő',
    description: 'Семья и принадлежность в раннем A1: формы одного обладаемого предмета для én/te/ő, понятное чтение, разговор и связное описание.',
    slidesCount: 11
  },
  {
    id: 9,
    number: 9,
    level: 'A1',
    title: 'Урок 9 · Melléknevek & Összehasonlítás',
    subtitle: 'Прилагательные и степени сравнения',
    description: 'Прилагательные и сравнение в раннем A1: понятные характеристики, выбор между двумя вариантами, причина предпочтения и открытая текстовая практика.',
    slidesCount: 11
  },
  {
    id: 10,
    number: 10,
    level: 'A1',
    title: 'Урок 10 · Helyhatározók I',
    subtitle: 'Внутренние местные падежи: где, куда, откуда',
    description: 'Единая система внутренних местных падежей: Hol? (-ban/-ben), Hová? (-ba/-be), Honnan? (-ból/-ből).',
    slidesCount: 11
  },
  {
    id: 11,
    number: 11,
    level: 'A1',
    title: 'Урок 11 · Helyhatározók II',
    subtitle: 'Поверхностная и конвенциональная местная семья: где, куда, откуда',
    description: 'Модель Hol? / Hová? / Honnan? для поверхностной и конвенциональной семьи, городских дел, простого маршрута и уточнения местоположения.',
    slidesCount: 11
  },
  {
    id: 12,
    number: 12,
    level: 'A1',
    title: 'Урок 12 · Helyhatározók III',
    subtitle: 'Hol? Hová? Honnan? — формы у/к/от',
    description: 'Интеграция форм -nál/-nél, -hoz/-hez/-höz и -tól/-től с транспортом, остановками, простыми маршрутами и восстановлением понимания.',
    slidesCount: 11
  },
  {
    id: 13,
    number: 13,
    level: 'A1',
    title: 'Урок 13 · A múlt idő',
    subtitle: 'Введение в прошедшее время: частотные формы и volt',
    description: 'Коммуникативное введение в прошедшее время: частотные формы, volt, вопросы, отрицание и простой связный рассказ о завершённых событиях.',
    slidesCount: 11
  },
  {
    id: 14,
    number: 14,
    level: 'A1',
    title: 'Урок 14 · Napi rutin',
    subtitle: 'Распорядок дня, частые -ik-глаголы и время',
    description: 'Интегрированный checkpoint конца A1: распорядок дня, время, частота, знакомая грамматика, Reading, Listening и открытая продукция без автоматической сертификации.',
    slidesCount: 11
  },
  {
    id: 15,
    number: 15,
    level: 'A2',
    title: 'Урок 15 · Ételek és étterem',
    subtitle: 'Ресторан, заказ и дательный падеж (-nak / -nek)',
    description: 'Полный базовый визит в ресторан: столик, заказ для себя и другого человека, состав блюда, небольшая проблема, счёт и полезные контексты -nak/-nek.',
    slidesCount: 11
  },
  {
    id: 16,
    number: 16,
    level: 'A2',
    title: 'Урок 16 · Vásárlás és eszközhatározó',
    subtitle: 'Покупки и -val/-vel: цена, выбор и обмен',
    description: 'Практическое употребление -val/-vel, цены и способы оплаты, выбор размера/цвета и решение простой проблемы с обменом.',
    slidesCount: 11
  },
  {
    id: 17,
    number: 17,
    level: 'A2',
    title: 'Урок 17 · Időjárás és évszakok',
    subtitle: 'Погода, сезоны и практические планы',
    description: 'Описание погоды и температуры, сезоны, понимание прогноза и изменение практического плана из-за погодных условий.',
    slidesCount: 11
  },
  {
    id: 18,
    number: 18,
    level: 'A2',
    title: 'Урок 18 · Módbeli segédigék',
    subtitle: 'Инфинитив и частотные модальные конструкции',
    description: 'Базовый инфинитив, ограниченная модель личного инфинитива с kell и различие kell, lehet, tud, szeretnék и akarok в практических ситуациях.',
    slidesCount: 12
  },
  {
    id: 19,
    number: 19,
    level: 'A2',
    title: 'Урок 19 · A jövő idő',
    subtitle: 'Будущее с fog + инфинитив и планы',
    description: 'Будущее с fog + инфинитив, неопределённая парадигма fog, отрицание, настоящее время для будущих планов, знакомство с определёнными формами, планы, прогнозы и различение времён.',
    slidesCount: 11
  },
  {
    id: 20,
    number: 20,
    level: 'A2',
    title: 'Урок 20 · A múlt idő',
    subtitle: 'Прошедшее время полностью',
    description: 'Показатели прошедшего времени (-t- / -ott / -ett / -ött), неопределённое и определённое спряжение, неправильные глаголы (volt, ment, evett...) и завершение уровня A2.',
    slidesCount: 12
  },
  {
    id: 21,
    number: 21,
    level: 'B1',
    title: 'Урок 21 · Alanyi és tárgyas ragozás II',
    subtitle: 'Определённое и неопределённое спряжение — углубление',
    description: 'Глубокий анализ видов спряжения, сложные случаи с местоимениями (engem, téged, titeket), форма -lak/-lek («я тебя...») и практические контрасты.',
    slidesCount: 11
  },
  {
    id: 22,
    number: 22,
    level: 'B1',
    title: 'Урок 22 · A felszólító mód',
    subtitle: 'Повелительное наклонение',
    description: 'Повелительное наклонение с суффиксом -j-, ассимиляция (s, sz, z, t + j), формы -j, -jál, -jad, неправильный глагол lenni (légy) и вежливые просьбы.',
    slidesCount: 11
  },
  {
    id: 23,
    number: 23,
    level: 'B1',
    title: 'Урок 23 · A feltételes mód',
    subtitle: 'Условное наклонение',
    description: 'Условное наклонение с суффиксами -na/-ne/-ná/-né, неопределённая и определённая парадигма, форма lenne (было бы), вежливые просьбы и условные предложения с ha.',
    slidesCount: 11
  },
  {
    id: 24,
    number: 24,
    level: 'B1',
    title: 'Урок 24 · Összetett mondatok',
    subtitle: 'Сложные предложения и союзы',
    description: 'Сочинительные и подчинительные союзы (és, de, vagy, ezért, mert, hogy, bár, ha), порядок слов и пунктуация сложных предложений.',
    slidesCount: 11
  },
  {
    id: 25,
    number: 25,
    level: 'B1',
    title: 'Урок 25 · Munka és karrier',
    subtitle: 'Работа, профессии и собеседование',
    description: 'Названия профессий, вопрос Mivel foglalkozol?, фразы для собеседования (állásinterjú), составление резюме и офисная лексика.',
    slidesCount: 11
  },
  {
    id: 26,
    number: 26,
    level: 'B1',
    title: 'Урок 26 · Egészség és orvos',
    subtitle: 'Здоровье, болезни и визит к врачу',
    description: 'Конструкция Fáj a... (болит...), части тела, описание симптомов (láz, köhögés), визит к врачу (az orvosnál) и покупка лекарств в аптеке (a gyógyszertárban).',
    slidesCount: 11
  },
  {
    id: 27,
    number: 27,
    level: 'B1',
    title: 'Урок 27 · Utazás és közlekedés',
    subtitle: 'Путешествия, транспорт и бронирование',
    description: 'Виды транспорта с творительным падежом (-val/-vel), покупка билетов (jegyvásárlás), отели и бронирование (szálloda, foglalás), вопросы проезда.',
    slidesCount: 11
  },
  {
    id: 28,
    number: 28,
    level: 'B1',
    title: 'Урок 28 · A B1 szint összefoglalása',
    subtitle: 'Итоговое повторение уровня B1',
    description: 'Финальный обзор всей грамматической системы венгерского языка от A1 до B1: падежи, спряжения, наклонения, приставки, союзы и рекомендации по дальнейшему изучению.',
    slidesCount: 11
  }
];

const lessonCache: Record<number, Lesson> = {};

export class LessonLoadError extends Error {
  constructor(
    message: string,
    readonly status?: number
  ) {
    super(message);
    this.name = 'LessonLoadError';
  }
}

interface LessonApiResponse {
  success?: boolean;
  lesson?: Lesson;
  message?: string;
}

interface LessonLoadOptions {
  admin?: boolean;
}

const freeLessons: Record<number, Lesson> = {
  1: LESSON_1,
  2: LESSON_2,
};

async function loadLessonOnServer(id: number): Promise<Lesson | null> {
  // Vite must not follow this server-only boundary into browser chunks.
  const serverModulePath = '../../server/lessonLoader';
  const { loadServerLesson } = await import(/* @vite-ignore */ serverModulePath) as {
    loadServerLesson: (lessonNumber: number) => Promise<Lesson | null>;
  };
  return loadServerLesson(id);
}

export async function loadLesson(id: number, options: LessonLoadOptions = {}): Promise<Lesson | null> {
  if (lessonCache[id]) {
    return lessonCache[id];
  }

  if (!Number.isInteger(id) || id < 1 || id > 28) return null;

  const freeLesson = freeLessons[id];
  if (freeLesson) {
    lessonCache[id] = freeLesson;
    return freeLesson;
  }

  if (typeof window === 'undefined') {
    const lesson = await loadLessonOnServer(id);
    if (lesson) lessonCache[id] = lesson;
    return lesson;
  }

  const endpoint = options.admin ? `/api/admin/lessons/${id}` : `/api/lessons/${id}`;
  let response: Response;
  try {
    response = await apiFetch(endpoint, {
      headers: { Accept: 'application/json' },
    });
  } catch {
    throw new LessonLoadError('Не удалось связаться с сервером. Попробуйте ещё раз.');
  }

  const payload = await response.json().catch(() => ({})) as LessonApiResponse;
  if (!response.ok || !payload.lesson) {
    throw new LessonLoadError(
      payload.message || 'Урок сейчас недоступен.',
      response.status
    );
  }

  return payload.lesson;
}

export function getLessonMetaById(id: number): LessonMeta | undefined {
  return LESSONS_META.find(l => l.id === id);
}
