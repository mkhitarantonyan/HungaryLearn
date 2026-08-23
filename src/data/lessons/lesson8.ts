import type { Lesson, LessonActivity } from '../../types';

const FAMILY_VOCABULARY: LessonActivity = {
  kind: 'controlledPractice', id: 'l8-cp-family-vocabulary', title: 'A család — базовая лексика', passCount: 6,
  exercises: [
    { kind: 'singleChoice', id: 'l8-family-1', prompt: 'apa', options: ['отец', 'мать', 'ребёнок'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l8-family-2', prompt: 'anya', options: ['бабушка', 'мать', 'дочь'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l8-family-3', prompt: 'Брат / сестра; sibling без указания пола', options: ['testvér', 'fiú', 'férj'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l8-family-4', prompt: 'feleség', options: ['дочь', 'жена', 'сестра'], correctIndex: 1 },
    { kind: 'textInput', id: 'l8-family-5', prompt: 'ребёнок', accept: ['gyerek'] },
    { kind: 'textInput', id: 'l8-family-6', prompt: 'бабушка', accept: ['nagymama'] },
    { kind: 'textInput', id: 'l8-family-7', prompt: 'дедушка', accept: ['nagypapa'] },
    { kind: 'textInput', id: 'l8-family-8', prompt: 'муж', accept: ['férj'] },
  ],
};

const SINGULAR_POSSESSIVES: LessonActivity = {
  kind: 'controlledPractice', id: 'l8-cp-singular-possessives', title: 'Один предмет: én, te, ő', passCount: 8,
  exercises: [
    { kind: 'textInput', id: 'l8-possessive-1', prompt: 'ház → мой дом', accept: ['házam'] },
    { kind: 'textInput', id: 'l8-possessive-2', prompt: 'ház → твой дом', accept: ['házad'] },
    { kind: 'textInput', id: 'l8-possessive-3', prompt: 'ház → его/её дом', accept: ['háza'] },
    { kind: 'textInput', id: 'l8-possessive-4', prompt: 'anya → моя мать', accept: ['anyám'] },
    { kind: 'textInput', id: 'l8-possessive-5', prompt: 'anya → твоя мать', accept: ['anyád'] },
    { kind: 'textInput', id: 'l8-possessive-6', prompt: 'anya → его/её мать', accept: ['anyja'] },
    { kind: 'textInput', id: 'l8-possessive-7', prompt: 'apa → мой отец', accept: ['apám'] },
    { kind: 'textInput', id: 'l8-possessive-8', prompt: 'apa → твой отец', accept: ['apád'] },
    { kind: 'textInput', id: 'l8-possessive-9', prompt: 'apa → его/её отец', accept: ['apja'] },
    { kind: 'textInput', id: 'l8-possessive-10', prompt: 'testvér → мой брат / моя сестра', accept: ['testvérem'] },
  ],
};

const FAMILY_READING: LessonActivity = {
  kind: 'reading', id: 'l8-reading-family-profile', title: 'Чтение: Anna családja',
  instructions: 'Прочитай описание и ответь по смыслу: кто кому приходится родственником и кому что принадлежит.', passCount: 4,
  content: { type: 'prose', title: 'Anna családja', paragraphs: [
    'Anna vagyok. Van egy testvérem: Péter.',
    'Anyám neve Éva, apám neve Gábor.',
    'Péter háza nagy. Az én házam kicsi.',
    'Én vagyok Péter testvére.',
  ] },
  questions: [
    { id: 'l8-reading-q1', question: 'Кем Петер приходится Анне?', options: ['её братом', 'её отцом', 'её мужем'], correctIndex: 0 },
    { id: 'l8-reading-q2', question: 'Кто мать Анны?', options: ['Петер', 'Ева', 'Габор'], correctIndex: 1 },
    { id: 'l8-reading-q3', question: 'Чей дом большой?', options: ['Анны', 'Петера', 'Габора'], correctIndex: 1 },
    { id: 'l8-reading-q4', question: 'Чей дом маленький?', options: ['Анны', 'Петера', 'Евы'], correctIndex: 0 },
    { id: 'l8-reading-q5', question: 'Кем Анна приходится Петеру?', options: ['его матерью', 'его сестрой', 'его женой'], correctIndex: 1 },
  ],
};

const OWNER_TEXT: LessonActivity = {
  kind: 'controlledPractice', id: 'l8-cp-owner-text', title: 'Кто владелец: én, te или ő?', passCount: 6,
  exercises: [
    { kind: 'singleChoice', id: 'l8-owner-1', prompt: 'házam', options: ['én', 'te', 'ő'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l8-owner-2', prompt: 'házad', options: ['én', 'te', 'ő'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l8-owner-3', prompt: 'háza', options: ['én', 'te', 'ő'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l8-owner-4', prompt: 'anyám', options: ['én', 'te', 'ő'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l8-owner-5', prompt: 'anyád', options: ['én', 'te', 'ő'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l8-owner-6', prompt: 'anyja', options: ['én', 'te', 'ő'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l8-owner-7', prompt: 'testvéred', options: ['én', 'te', 'ő'], correctIndex: 1 },
  ],
};

const POSSESSIVE_LISTENING: LessonActivity = {
  kind: 'listening', id: 'l8-listening-possessives', title: 'Аудирование: кто владелец?',
  assetId: 'l8_listening_possessives', audioStatus: 'missing', passCount: 4,
  transcript: 'Az én nevem Anna. Anyám tanár, apám orvos. Péter a testvérem. Péter háza nagy, az én házam kicsi. A te családod nagy?',
  questions: [
    { id: 'l8-listening-q1', question: 'Чья мать — учительница?', options: ['Анны', 'Петера', 'слушателя'], correctIndex: 0 },
    { id: 'l8-listening-q2', question: 'Кто врач?', options: ['отец Анны', 'брат Анны', 'отец слушателя'], correctIndex: 0 },
    { id: 'l8-listening-q3', question: 'Чей дом большой?', options: ['Анны', 'Петера', 'слушателя'], correctIndex: 1 },
    { id: 'l8-listening-q4', question: 'О чьей семье спрашивает Анна?', options: ['о своей', 'о семье Петера', 'о семье слушателя'], correctIndex: 2 },
  ],
};

const FAMILY_CAPTIONS: LessonActivity = {
  kind: 'controlledPractice', id: 'l8-cp-family-captions', title: 'Короткие предложения о семье', passCount: 4,
  exercises: [
    { kind: 'textInput', id: 'l8-caption-1', prompt: 'Мой отец — врач.', accept: ['Apám orvos.', 'Az apám orvos.'] },
    { kind: 'textInput', id: 'l8-caption-2', prompt: 'Твоя мать — учительница.', accept: ['Anyád tanár.', 'Az anyád tanár.'] },
    { kind: 'textInput', id: 'l8-caption-3', prompt: 'Его/её дом большой.', accept: ['A háza nagy.', 'Háza nagy.'] },
    { kind: 'textInput', id: 'l8-caption-4', prompt: 'Моего брата / мою сестру зовут Алекс.', accept: ['A testvérem neve Alex.', 'Testvérem neve Alex.'] },
    { kind: 'textInput', id: 'l8-caption-5', prompt: 'Твой брат / твоя сестра умный/умная.', accept: ['A testvéred okos.', 'Testvéred okos.'] },
  ],
};

const FAMILY_WRITING: LessonActivity = {
  kind: 'writing', id: 'l8-writing-family-description', title: 'Письмо: моя семья',
  prompt: 'Напиши связное описание семьи из 4–5 предложений. Используй минимум две подходящие притяжательные формы.',
  modelAnswer: ['Anna vagyok.', 'Van egy testvérem.', 'A testvérem neve Alex.', 'Anyám tanár.', 'Apám orvos.'],
  rubric: ['Написано 4–5 связанных предложений', 'Использованы минимум две подходящие притяжательные формы', 'Родственники названы по смыслу'],
};

const FAMILY_RECORDING: LessonActivity = {
  kind: 'recording', id: 'l8-record-family-description', title: 'Говорение: коротко о семье',
  instructions: 'Запиши короткое описание. Наличие записи остаётся PARTIAL evidence и не доказывает правильность без проверки.',
  targetText: 'Anna vagyok. Van egy testvérem. Anyám tanár, apám orvos. A testvérem neve Alex.',
  targetTranslation: 'Я Анна. У меня есть брат или сестра. Моя мать — учительница, мой отец — врач. Моего брата или мою сестру зовут Алекс.',
  rubric: ['Произнесены 4–5 связанных предложений', 'Есть минимум две притяжательные формы', 'Понятно, кто кому приходится родственником'],
};

const EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck', id: 'l8-exit-check', title: 'Exit check — цели урока 8', checks: [
    { objectiveId: 'l8_name-family', activityId: 'l8-cp-family-vocabulary', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l8-record-family-description', evidenceKind: 'speaking' }] },
    { objectiveId: 'l8_form-possessive', activityId: 'l8-cp-singular-possessives', evidenceKind: 'grammar' },
    { objectiveId: 'l8_use-possessive', activityId: 'l8-cp-family-captions', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l8-writing-family-description', evidenceKind: 'writing' }, { activityId: 'l8-record-family-description', evidenceKind: 'speaking' }] },
    { objectiveId: 'l8_distinguish-possessors', activityId: 'l8-cp-owner-text', evidenceKind: 'grammar', evidenceComponents: [{ activityId: 'l8-listening-possessives', evidenceKind: 'listening' }] },
    { objectiveId: 'l8_describe-family', activityId: 'l8-writing-family-description', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l8-record-family-description', evidenceKind: 'speaking' }] },
  ],
};

export const LESSON_8: Lesson = {
  id: 8,
  number: 8,
  level: 'A1',
  title: 'Урок 8 · A család & Birtokos ragozás',
  subtitle: 'Семья и притяжательные формы: én, te, ő',
  description: 'Базовая лексика семьи, формы одного обладаемого предмета при владельцах én/te/ő и короткое связное описание семьи.',
  slidesCount: 12,
  slides: [
    {
      id: 1,
      eyebrow: 'УРОК 8 · 1/12 · СЕМЬЯ',
      title: 'A család',
      subtitle: 'Базовая лексика семьи',
      body: `
        <p><b>apa</b> — отец; <b>anya</b> — мать; <b>fiú</b> — сын / мальчик; <b>lány</b> — дочь / девочка.</p>
        <p><b>testvér</b> — брат / сестра; sibling без указания пола. Для уточнения: <b>fiútestvér</b>, <b>lánytestvér</b>.</p>
        <p><b>nagymama</b> — бабушка; <b>nagypapa</b> — дедушка; <b>feleség</b> — жена; <b>férj</b> — муж; <b>gyerek</b> — ребёнок.</p>
      `,
      activities: [FAMILY_VOCABULARY],
    },
    {
      id: 2,
      eyebrow: 'УРОК 8 · 2/12 · МОДЕЛЬ',
      title: 'A birtokos személyrag',
      subtitle: 'Владелец отмечается на существительном',
      body: `
        <p>Венгерский показывает владельца прежде всего суффиксом на существительном: <b>ház → házam / házad / háza</b>.</p>
        <p>Обычно достаточно <b>házam</b>. Явные местоимения служат главным образом контрасту: <b>az én házam</b>, <b>a te házad</b>, <b>az ő háza</b>.</p>
        <div class=note>Не добавляй én, te или ő автоматически: суффикс уже сообщает владельца.</div>
      `,
    },
    {
      id: 3,
      eyebrow: 'УРОК 8 · 3/12 · ФОРМЫ',
      title: 'Egy birtok: én, te, ő',
      subtitle: 'Один предмет и три владельца',
      body: `
        <table class=conj><tr><th>Владелец</th><th>ház</th><th>Значение</th></tr><tr><td>én</td><td>házam</td><td>мой дом</td></tr><tr><td>te</td><td>házad</td><td>твой дом</td></tr><tr><td>ő</td><td>háza</td><td>его/её дом</td></tr></table>
        <p>У слов на согласный бывают разные соединительные гласные: <b>házam/házad</b>, но <b>testvérem/testvéred</b>. Учи их как проверенные модели.</p>
        <div class=note>Нельзя вывести все формы из одного механического правила.</div>
      `,
      activities: [SINGULAR_POSSESSIVES],
    },
    {
      id: 4,
      eyebrow: 'УРОК 8 · 4/12 · СЕМЕЙНЫЕ ФОРМЫ',
      title: 'Anya, apa, testvér',
      subtitle: 'Частые проверенные модели',
      body: `
        <table class=conj><tr><th>Владелец</th><th>anya</th><th>apa</th><th>testvér</th></tr><tr><td>én</td><td>anyám</td><td>apám</td><td>testvérem</td></tr><tr><td>te</td><td>anyád</td><td>apád</td><td>testvéred</td></tr><tr><td>ő</td><td>anyja</td><td>apja</td><td>testvére</td></tr></table>
        <p>Конечные a/e перед многими окончаниями удлиняются: <b>apa → apám/apád</b>, <b>anya → anyám/anyád</b>.</p>
        <p>В 3-м лице встречаются <b>-a/-e</b> и <b>-ja/-je</b>: <b>háza, testvére, anyja, apja</b>. На A1 запоминай эти частые формы.</p>
      `,
    },
    {
      id: 5,
      eyebrow: 'УРОК 8 · 5/12 · ВЛАДЕЛЕЦ',
      title: 'Kié?',
      subtitle: 'Форма показывает én, te или ő',
      body: `
        <p><b>anyám</b> указывает на én, <b>anyád</b> — на te, <b>anyja</b> — на ő.</p>
        <p>Контраст: <b>Az én házam nagy, a te házad kicsi.</b> — Мой дом большой, а твой маленький.</p>
      `,
      activities: [OWNER_TEXT],
    },
    {
      id: 6,
      eyebrow: 'УРОК 8 · 6/12 · ЧТЕНИЕ',
      title: 'Anna családja',
      subtitle: 'Понимание семьи и отношений',
      body: '<p>Определи родственников и владельцев по смыслу, а не просто по окончаниям.</p>',
      activities: [FAMILY_READING],
    },
    {
      id: 7,
      eyebrow: 'УРОК 8 · 7/12 · ПРЕДЛОЖЕНИЯ',
      title: 'Mondatok a családról',
      subtitle: 'Естественные короткие фразы',
      body: `
        <p><b>Anyám tanár.</b> — Моя мать — учительница. <b>Apám orvos.</b> — Мой отец — врач.</p>
        <p><b>A testvérem neve Alex.</b> — Моего брата / мою сестру зовут Алекс.</p>
        <p><b>Van egy testvérem.</b> — У меня есть брат или сестра.</p>
        <div class=note><b>Van egy testvérem</b> — готовая фраза. Полную конструкцию с nekem/neked/neki изучим позже; это не цель L8.</div>
      `,
      activities: [FAMILY_CAPTIONS],
    },
    {
      id: 8,
      eyebrow: 'УРОК 8 · 8/12 · ПИСЬМО',
      title: 'Írás: a családom',
      subtitle: 'Описание из 4–5 предложений',
      body: '<p>Используй минимум две притяжательные формы. Открытый ответ остаётся PARTIAL и требует проверки.</p>',
      activities: [FAMILY_WRITING],
    },
    {
      id: 9,
      eyebrow: 'УРОК 8 · 9/12 · ГОВОРЕНИЕ',
      title: 'Beszéd: a családom',
      subtitle: 'Короткое устное описание',
      body: '<p>Наличие записи не доказывает языковую правильность без проверки.</p>',
      activities: [FAMILY_RECORDING],
    },
    {
      id: 10,
      eyebrow: 'УРОК 8 · 10/12 · АУДИРОВАНИЕ',
      title: 'Hallásértés',
      subtitle: 'Только по специальной записи',
      body: '<p>Файл <b>l8_listening_possessives.mp3</b> отсутствует: аудио недоступно, listening evidence — NONE. Озвучивание слайдов не подменяет проверку.</p>',
      activities: [POSSESSIVE_LISTENING],
    },
    {
      id: 11,
      eyebrow: 'УРОК 8 · 11/12 · ДОПОЛНИТЕЛЬНО',
      title: 'Opcionális kitekintés',
      subtitle: 'Необязательное узнавание',
      body: '<p><b>Необязательно:</b> позже встретится <b>házaim</b> — «мои дома». Форма не входит в продуктивные задания, критерии прохождения или итог L8.</p>',
    },
    {
      id: 12,
      eyebrow: 'УРОК 8 · 12/12 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Проверь пять целей',
      body: '<ul class=tick><li>Продуктивная тема: один предмет и владельцы én/te/ő.</li><li>Владелец отмечается на существительном: házam, házad, háza.</li><li>Семейные формы: anyám/anyád/anyja, apám/apád/apja, testvérem/testvéred/testvére.</li><li>Явное местоимение служит контрасту.</li><li>Описание семьи: 4–5 предложений и минимум две притяжательные формы.</li></ul>',
      activities: [EXIT_CHECK],
    },
  ],
  vocabulary: [
    { id: 'l8_v1', hu: 'apa', ru: 'отец', category: 'Семья' },
    { id: 'l8_v2', hu: 'anya', ru: 'мать', category: 'Семья' },
    { id: 'l8_v3', hu: 'fiú', ru: 'сын / мальчик', category: 'Семья' },
    { id: 'l8_v4', hu: 'lány', ru: 'дочь / девочка', category: 'Семья' },
    { id: 'l8_v5', hu: 'testvér', ru: 'брат / сестра; sibling', category: 'Семья' },
    { id: 'l8_v6', hu: 'nagymama', ru: 'бабушка', category: 'Семья' },
    { id: 'l8_v7', hu: 'nagypapa', ru: 'дедушка', category: 'Семья' },
    { id: 'l8_v8', hu: 'feleség', ru: 'жена', category: 'Семья' },
    { id: 'l8_v9', hu: 'férj', ru: 'муж', category: 'Семья' },
    { id: 'l8_v10', hu: 'gyerek', ru: 'ребёнок', category: 'Семья' },
  ],
  quiz: [
    { id: 801, question: 'Как сказать «мой дом»?', options: ['házam', 'házad', 'háza', 'házem'], correctIndex: 0, explanation: 'Для én используется форма házam. Явное én обычно не требуется.' },
    { id: 802, question: 'Как сказать «твой отец»?', options: ['apám', 'apád', 'apja', 'apa'], correctIndex: 1, explanation: 'Форма для te — apád: apa → apád. Конечная a удлиняется: a → á.' },
    { id: 803, question: 'Как сказать «его/её мать»?', options: ['anyám', 'anyád', 'anyja', 'anya'], correctIndex: 2, explanation: 'Форма 3-го лица единственного числа anyja означает «его/её мать».' },
    { id: 804, question: 'Как подчеркнуть: именно МОЙ дом?', options: ['házam', 'az én házam', 'én házam', 'az én háza'], correctIndex: 1, explanation: 'Для контраста добавляется az én: az én házam. Обычно достаточно házam; суффикс сохраняется.' },
    { id: 805, question: 'Какая форма означает «твой брат / твоя сестра»?', options: ['testvérem', 'testvéred', 'testvére', 'testvér'], correctIndex: 1, explanation: 'Для te используется testvéred.' },
    { id: 806, question: 'Какое слово означает «брат / сестра» без указания пола?', options: ['testvér', 'fiú', 'lány', 'gyerek'], correctIndex: 0, explanation: 'Testvér — брат или сестра; само слово не указывает пол.' },
  ],
  objectives: [
    { id: 'l8_name-family', text: 'Называть членов семьи по-венгерски.', skills: ['speaking', 'reading', 'writing'] },
    { id: 'l8_form-possessive', text: 'Образовывать притяжательные формы 1-го, 2-го и 3-го лица единственного числа (házam, házad, háza).', skills: ['grammar', 'writing'] },
    { id: 'l8_use-possessive', text: 'Употреблять притяжательные суффиксы «мой», «твой», «его» в описании семьи.', skills: ['speaking', 'writing'] },
    { id: 'l8_distinguish-possessors', text: 'Различать на слух и в тексте, к какому лицу относится притяжательная форма.', skills: ['listening', 'reading', 'grammar'] },
    { id: 'l8_describe-family', text: 'Составлять связное описание своей семьи с притяжательными формами.', skills: ['speaking', 'writing'] },
  ],
};
