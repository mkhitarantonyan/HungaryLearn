import { Lesson, VocabularyItem, QuizQuestion, TranslationItem } from '../types';
import { LESSON_TRANSLATION_MAP } from '../data/lessonTranslations';
import { LESSON_VOCABULARY_MAP } from '../data/vocabularyCatalog';

export { LESSON_TRANSLATION_MAP };
export { LESSON_VOCABULARY_MAP };

let _quizMap: Record<number, QuizQuestion[]> | null = null;
const LESSON_QUIZ_MAP: Record<number, QuizQuestion[]> = new Proxy({} as Record<number, QuizQuestion[]>, {
  get: (_, k) => {
    if (!_quizMap) _quizMap = buildQuizMap();
    return _quizMap[k as unknown as number];
  },
  has: (_, k) => {
    if (!_quizMap) _quizMap = buildQuizMap();
    return k in _quizMap;
  },
});

function buildQuizMap(): Record<number, QuizQuestion[]> { return {
  1: [
    {
      id: 1,
      question: "Как в венгерском языке произносится отдельная буква «s»?",
      options: ["Как русский звук [с]", "Как русский звук [ш]", "Как англо-венгерский [з]", "Как мягкий [сь]"],
      correctIndex: 1,
      explanation: "Буква «s» в венгерском языке ВСЕГДА читается как [ш] (sok = шок). А звук [с] записывается комбинацией «sz»!"
    },
    {
      id: 2,
      question: "Какое сочетание букв передает звук [с]?",
      options: ["s", "sz", "zs", "cs"],
      correctIndex: 1,
      explanation: "Буквосочетание «sz» даёт звук [с] (например, szép = сэ̄п)."
    },
    {
      id: 3,
      question: "На какой слог ВСЕГДА падает ударение в венгерских словах?",
      options: ["На последний слог", "На слог с долгой гласной", "На первый слог", "Зависит от части речи"],
      correctIndex: 2,
      explanation: "Золотое правило венгерской фонетики: ударение всегда падает на ПЕРВЫЙ слог."
    },
    {
      id: 4,
      question: "Как произносится буквосочетание «ly» в современном венгерском?",
      options: ["Как мягкое [ль]", "Как звук [й] (так же, как j)", "Как глухое [х]", "Как двойное [лл]"],
      correctIndex: 1,
      explanation: "В современном венгерском «ly» и «j» произносятся одинаково — как звук [й] (hely = хэй)."
    },
    {
      id: 5,
      question: "Какой звук передает сочетание «gy» в слове «gyerek»?",
      options: ["Глухой [т]", "Смягчённый звонкий [дь]", "Твёрдый [г]", "Звук [ж]"],
      correctIndex: 1,
      explanation: "Сочетание «gy» передает мягкий звук [дь] (gyerek = дьэрэк)."
    }
  ],
  2: [
    {
      id: 1,
      question: "Какое из следующих приветствий является официальным?",
      options: ["Szia", "Szevasz", "Jó napot", "Cső"],
      correctIndex: 2,
      explanation: "«Jó napot» (Добрый день) — официальное вежливое приветствие."
    },
    {
      id: 2,
      question: "Что означает местоимение «ő» в венгерском языке?",
      options: ["Только он", "Только она", "И он, и она (род грамматически не разграничивается)", "Оно"],
      correctIndex: 2,
      explanation: "В венгерском языке нет грамматического рода. «Ő» означает и «он», и «она»."
    },
    {
      id: 3,
      question: "Какая форма глагола lenni (быть) соответствует 1-му лицу единственного числа (én)?",
      options: ["vagy", "vagyok", "van", "vagyunk"],
      correctIndex: 1,
      explanation: "«én vagyok» = «я есть» (например, Diák vagyok = Я студент)."
    },
    {
      id: 4,
      question: "Как правильно сказать «Она красивая» по-венгерски?",
      options: ["Ő van szép", "Ő szép", "Ő vagyok szép", "Szép van ő"],
      correctIndex: 1,
      explanation: "В 3-м лице с прилагательными глагол «van» опускается: «Ő szép»."
    },
    {
      id: 5,
      question: "Как сказать «До свидания» в официальной обстановке?",
      options: ["Szia", "Viszontlátásra", "Jó estét", "Köszönöm"],
      correctIndex: 1,
      explanation: "«Viszontlátásra» — общепринятая официальная формула прощания."
    }
  ],
  3: [
    {
      id: 1,
      question: "Какой определенный артикль используется перед словом, начинающимся с гласного звука (например, alma)?",
      options: ["a", "az", "egy", "не используется"],
      correctIndex: 1,
      explanation: "Перед словами, начинающимися с гласной буквы, используется артикль «az» (az alma)."
    },
    {
      id: 2,
      question: "Какой показатель/буква отвечает за множественное число венгерских существительных?",
      options: ["-s", "-t", "-k", "-n"],
      correctIndex: 2,
      explanation: "Множественное число образуется прибавлением суффикса «-k» (например, ház -> házak)."
    },
    {
      id: 3,
      question: "Что происходит с конечной краткой гласной «a» (например, macska) при прибавлении -k?",
      options: ["Она выпадает", "Она удлиняется в «á» (macskák)", "Она превращается в «o»", "Остается без изменений"],
      correctIndex: 1,
      explanation: "Конечные гласные -a/-e удлиняются при присоединении суффиксов: macska -> macskák."
    },
    {
      id: 4,
      question: "В каком числе стоит существительное после числительного (например, «5 человек»)?",
      options: ["Во множественном числе (öt emberek)", "В единственном числе (öt ember)", "В родительном падеже", "Зависит от контекста"],
      correctIndex: 1,
      explanation: "После числительных существительное ВСЕГДА употребляется в единственном числе: öt ember (пять человек)."
    },
    {
      id: 5,
      question: "Что означает венгерское слово «egy»?",
      options: ["Только число 1", "И число 1, и неопределенный артикль (как a/an)", "Определенный артикль", "Множественное число"],
      correctIndex: 1,
      explanation: "«Egy» используется и как числительное «один», и как неопределенный артикль."
    }
  ],
  4: [
    {
      id: 1,
      question: "Когда используется неопределенное спряжение (alanyi ragozás)?",
      options: ["Всегда для любых глаголов", "Когда нет прямого дополнения или оно неопределенное", "Только с прошедшим временем", "Только с непереходными глаголами"],
      correctIndex: 1,
      explanation: "Неопределенное спряжение применяется, когда дополнение отсутствует или выражено неопределенно."
    },
    {
      id: 2,
      question: "Каковы личные окончания 1-го лица ед.ч. (én) в неопределенном спряжении?",
      options: ["-sz", "-ok / -ek / -ök", "-unk / -ünk", "-nak / -nek"],
      correctIndex: 1,
      explanation: "Для «én» используются окончания -ok / -ek / -ök в зависимости от гласных основы (tanulok, olvasok, ülök)."
    },
    {
      id: 3,
      question: "Какова особенность так называемых «-ik» глаголов (например, dolgozik, eszik)?",
      options: ["Они не имеют прошедшего времени", "В 3-м лице единственного числа словарная форма оканчивается на -ik", "Они спрягаются только во множественном числе", "Они не подчиняются гармонии гласных"],
      correctIndex: 1,
      explanation: "-ik глаголы в 3-м лице ед.ч. имеют окончание -ik (dolgozik, alszik)."
    },
    {
      id: 4,
      question: "Что такое гармония гласных в венгерском языке?",
      options: ["Совпадение ударения во всех словах", "Правило, по которому суффиксы выбирают заднеязычные или переднеязычные гласные под стать основе", "Чередование согласных в корне", "Использование рифмы в предложении"],
      correctIndex: 1,
      explanation: "Гармония гласных требует, чтобы суффиксы гармонировали с гласными звуками в корне слова."
    }
  ]
}; }

/**
 * Returns vocabulary for the specified lesson.
 * Checks localStorage overrides from admin panel first, then falls back to built-in data.
 */
export function getLessonVocabulary(lesson: Lesson): VocabularyItem[] {
  if (lesson.vocabulary && lesson.vocabulary.length > 0) {
    return lesson.vocabulary;
  }

  // Check admin overrides in localStorage
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem('admin_content_vocab_overrides');
      if (raw) {
        const overrides: Record<number, VocabularyItem[]> = JSON.parse(raw);
        if (lesson.number in overrides) {
          return overrides[lesson.number];
        }
      }
    } catch { /* ignore */ }
  }

  if (LESSON_VOCABULARY_MAP[lesson.number]) {
    return LESSON_VOCABULARY_MAP[lesson.number];
  }

  return [];
}

/**
 * Returns quiz questions tailored for the specified lesson.
 */
export function getLessonQuiz(lesson: Lesson): QuizQuestion[] {
  if (lesson.quiz?.length) return lesson.quiz;
  return LESSON_QUIZ_MAP[lesson.number] ?? [];
}

/**
 * Returns translation exercises for the specified lesson.
 * Checks localStorage overrides from admin panel first, then falls back to built-in data.
 */
export function getLessonTranslations(lesson: Lesson): TranslationItem[] {
  // Check admin overrides in localStorage
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem('admin_content_trans_overrides');
      if (raw) {
        const overrides: Record<number, TranslationItem[]> = JSON.parse(raw);
        if (lesson.number in overrides) {
          return overrides[lesson.number];
        }
      }
    } catch { /* ignore */ }
  }

  return LESSON_TRANSLATION_MAP[lesson.number] ?? [];
}
