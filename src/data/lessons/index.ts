import { Lesson, LessonMeta } from '../../types';

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
    description: 'Низкострессовое повторение A0: чтение, четыре короткие станции, мини-аудирование, личный профиль и рефлексия по evidence. Без новой грамматики A1.',
    slidesCount: 10
  },
  {
    id: 7,
    number: 7,
    level: 'A1',
    title: 'Урок 7 · Притяжательные суффиксы (Birtokos jel I)',
    subtitle: 'Принадлежность «мой / твой / его» и единичные предметы',
    description: 'Образование притяжательных форм существительных для одного владельца (-m, -d, -ja/-je), изменение конечных гласных -a/-e -> -á/-é, и конструкция «у меня есть» (van + dative).',
    slidesCount: 11
  },
  {
    id: 8,
    number: 8,
    level: 'A1',
    title: 'Урок 8 · Притяжательность II и множ. число предметов',
    subtitle: '«Мои / твои / его» предметы (-im, -id, -jai/-jei)',
    description: 'Принадлежность нескольких предметов (мои книги, твои друзья), множественные притяжательные суффиксы и конструкции с несколькими обладателями.',
    slidesCount: 12
  },
  {
    id: 9,
    number: 9,
    level: 'A1',
    title: 'Урок 9 · Глагольные приставки (Igekötők)',
    subtitle: 'Направление движения (be-, ki-, fel-, le-, el-, meg-)',
    description: 'Система глагольных приставок (igekötők), изменение значения глаголов, отделение приставок при отрицании и модальных глаголах.',
    slidesCount: 11
  },
  {
    id: 10,
    number: 10,
    level: 'A1',
    title: 'Урок 10 · Helyhatározók I — Внутри',
    subtitle: 'Местные падежи I — группа «Внутри» (-ban/-ben, -ba/-be, -ból/-ből)',
    description: 'Фундаментальная система трёх измерений (Где?, Куда?, Откуда?) и группа "Внутри" (-ban/-ben, -ba/-be, -ból/-ből). Правило гармонии гласных.',
    slidesCount: 11
  },
  {
    id: 11,
    number: 11,
    level: 'A1',
    title: 'Урок 11 · Helyhatározók II',
    subtitle: 'Местные падежи II — группа «На поверхности» (-n/-on/-en/-ön, -ra/-re, -ról/-ről) и венгерские города',
    description: 'Группа "На поверхности" (на столе, на улицу, с балкона), правила употребления с Венгрией (Magyarország) и венгерскими городами (Budapesten, Szegeden).',
    slidesCount: 11
  },
  {
    id: 12,
    number: 12,
    level: 'A1',
    title: 'Урок 12 · Helyhatározók III',
    subtitle: 'Местные падежи III — группа «Около/рядом» (-nál/-nél, -hoz/-hez/-höz, -tól/-től) и послелоги (alatt, felett, mellett)',
    description: 'Группа "Около/рядом" (у врача, к другу, от учителя), послелоги времени и места (alatt, felett, mellett, előtt, mögött) и притяжательные формы местоимений.',
    slidesCount: 11
  },
  {
    id: 13,
    number: 13,
    level: 'A1',
    title: 'Урок 13 · A múlt idő',
    subtitle: 'Прошедшее время глаголов — суффикс -t/-tt',
    description: 'Образование прошедшего времени (Múlt idő) с суффиксом -t/-tt, спряжение глаголов в прошедшем времени, особенности lenni в прошедшем (volt) и временные маркеры tegnap, tavaly.',
    slidesCount: 12
  },
  {
    id: 14,
    number: 14,
    level: 'A1',
    title: 'Урок 14 · Napi rutin',
    subtitle: 'Распорядок дня и возвратные глаголы (-kodik/-kedik/-ködik)',
    description: 'Завершающий урок уровня A1! Глаголы повседневных действий (умываться, одеваться, завтракать), спряжение ik-глаголов, время и возвратное местоимение magam.',
    slidesCount: 11
  },
  {
    id: 15,
    number: 15,
    level: 'A2',
    title: 'Урок 15 · Ételek és étterem',
    subtitle: 'Еда и дательный падеж (-nak / -nek)',
    description: 'Дательный падеж (-nak/-nek), конструкция «у меня есть» (nekem van), отрицание обладания (nincs), словарь блюд и заказ в ресторане.',
    slidesCount: 12
  },
  {
    id: 16,
    number: 16,
    level: 'A2',
    title: 'Урок 16 · Vásárlás és eszközhatározó',
    subtitle: 'Покупки и творительный падеж (-val / -vel)',
    description: 'Творительный падеж (-val/-vel), полная фонетическая ассимиляция с согласными, формы велема/веледа, покупка товаров и оплаты картой.',
    slidesCount: 12
  },
  {
    id: 17,
    number: 17,
    level: 'A2',
    title: 'Урок 17 · Időjárás és évszakok',
    subtitle: 'Погода и времена года',
    description: 'Описание погоды (Süt a nap, esik az eső), температура (Hány fok van?), времена года и их особые суффиксы (tavasszal, nyáron, ősszel, télen), части дня.',
    slidesCount: 11
  },
  {
    id: 18,
    number: 18,
    level: 'A2',
    title: 'Урок 18 · Módbeli segédigék',
    subtitle: 'Модальные глаголы и инфинитив',
    description: 'Образование инфинитива (-ni), глагол kell с личным инфинитивом (mennem kell), lehet (можно), tud (уметь), szeretne (хотел бы) и akar (хотеть).',
    slidesCount: 12
  },
  {
    id: 19,
    number: 19,
    level: 'A2',
    title: 'Урок 19 · A jövő idő',
    subtitle: 'Будущее время (fog + инфинитив)',
    description: 'Образование будущего времени с помощью вспомогательного глагола fog и инфинитива, два спряжения fog (fogok / fogom), отрицание и маркеры времени.',
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

type LessonModule = { default?: Lesson; [key: string]: unknown };

const lessonLoaders: Record<number, () => Promise<LessonModule>> = {
  1: () => import('./lesson1'),
  2: () => import('./lesson2'),
  3: () => import('./lesson3'),
  4: () => import('./lesson4'),
  5: () => import('./lesson5'),
  6: () => import('./lesson6'),
  7: () => import('./lesson7'),
  8: () => import('./lesson8'),
  9: () => import('./lesson9'),
  10: () => import('./lesson10'),
  11: () => import('./lesson11'),
  12: () => import('./lesson12'),
  13: () => import('./lesson13'),
  14: () => import('./lesson14'),
  15: () => import('./lesson15'),
  16: () => import('./lesson16'),
  17: () => import('./lesson17'),
  18: () => import('./lesson18'),
  19: () => import('./lesson19'),
  20: () => import('./lesson20'),
  21: () => import('./lesson21'),
  22: () => import('./lesson22'),
  23: () => import('./lesson23'),
  24: () => import('./lesson24'),
  25: () => import('./lesson25'),
  26: () => import('./lesson26'),
  27: () => import('./lesson27'),
  28: () => import('./lesson28'),
};

const lessonCache: Record<number, Lesson> = {};

export async function loadLesson(id: number): Promise<Lesson | null> {
  if (lessonCache[id]) {
    return lessonCache[id];
  }
  const loader = lessonLoaders[id];
  if (!loader) return null;
  try {
    const mod = await loader();
    const lesson = (mod.default || mod[`LESSON_${id}`]) as Lesson | undefined;
    if (lesson) {
      lessonCache[id] = lesson;
      return lesson;
    }
  } catch (err) {
    console.error(`Failed to load lesson ${id}`, err);
  }
  return null;
}

export function getLessonMetaById(id: number): LessonMeta | undefined {
  return LESSONS_META.find(l => l.id === id);
}
