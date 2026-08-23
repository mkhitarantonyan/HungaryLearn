import type { Lesson, LessonActivity } from '../../types';

const PAST_FORMS: LessonActivity = {
  kind: 'controlledPractice', id: 'l13-cp-past-forms', title: 'Частотные формы прошедшего времени', passCount: 8,
  exercises: [
    ['vár', 'vártam'], ['mond', 'mondtam'], ['nyit', 'nyitottam'], ['fut', 'futottam'], ['tanul → én', 'tanultam'],
    ['tanul → te', 'tanultál'], ['tanul → ő', 'tanult'], ['dolgozik → én', 'dolgoztam'], ['dolgozik → ő', 'dolgozott'], ['sétál', 'sétáltam'],
  ].map(([prompt, answer], index) => ({ kind: 'textInput' as const, id: `l13-past-${index + 1}`, prompt: `${prompt} (прошедшее время)`, accept: [answer] })),
};

const VOLT_CONTEXTS: LessonActivity = {
  kind: 'controlledPractice', id: 'l13-cp-volt-contexts', title: 'Формы volt в контексте', passCount: 5,
  exercises: [
    { kind: 'singleChoice', id: 'l13-volt-1', prompt: 'Tegnap én otthon ___.', options: ['voltam', 'voltál', 'volt'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l13-volt-2', prompt: 'Tegnap te fáradt ___.', options: ['voltak', 'voltál', 'voltunk'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l13-volt-3', prompt: 'Péter orvos ___.', options: ['voltam', 'voltatok', 'volt'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l13-volt-4', prompt: 'Mi Budapesten ___.', options: ['voltunk', 'voltak', 'voltál'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l13-volt-5', prompt: 'Ti a moziban ___.', options: ['voltam', 'voltatok', 'volt'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l13-volt-6', prompt: 'A barátaim otthon ___.', options: ['voltunk', 'voltak', 'voltál'], correctIndex: 1 },
  ],
};

const TENSE_READING: LessonActivity = {
  kind: 'reading', id: 'l13-reading-tense-contrast', title: 'Чтение: сейчас или вчера?', passCount: 5,
  instructions: 'Определи по форме, времени и смыслу, какие события происходят сейчас, а какие произошли вчера.',
  content: { type: 'prose', title: 'Ma és tegnap', paragraphs: [
    'Ma Anna otthon van és magyarul tanul. A barátja most a parkban sétál.',
    'Tegnap Anna a könyvtárban volt, és két órát tanult. A barátja tegnap dolgozott.',
    'Este együtt voltak a moziban. Most a filmről beszélnek.',
  ] },
  questions: [
    { id: 'l13-reading-q1', question: 'Когда Анна находится дома?', options: ['сегодня', 'вчера', 'в прошлом году'], correctIndex: 0 },
    { id: 'l13-reading-q2', question: 'Какое событие относится к прошлому?', options: ['Anna magyarul tanul.', 'A barátja sétál.', 'Anna a könyvtárban volt.'], correctIndex: 2 },
    { id: 'l13-reading-q3', question: 'Что друг Анны делал вчера?', options: ['dolgozott', 'sétál', 'beszél'], correctIndex: 0 },
    { id: 'l13-reading-q4', question: '„Most a filmről beszélnek” описывает…', options: ['настоящее', 'прошлое', 'будущее'], correctIndex: 0 },
    { id: 'l13-reading-q5', question: 'Где они были вечером?', options: ['otthon', 'a moziban', 'a könyvtárban'], correctIndex: 1 },
    { id: 'l13-reading-q6', question: 'Какая пара показывает настоящее и прошлое?', options: ['tanul — tanult', 'volt — van', 'dolgozott — tegnap'], correctIndex: 0 },
  ],
};

const TENSE_LISTENING: LessonActivity = {
  kind: 'listening', id: 'l13-listening-tense-contrast', title: 'Аудирование: сейчас и вчера',
  assetId: 'l13_listening_tense_contrast', audioStatus: 'missing', passCount: 4,
  transcript: 'Ma Péter otthon dolgozik. Tegnap nem dolgozott: délelőtt a parkban sétált, délután pedig a barátaival volt. Este filmet néztek.',
  questions: [
    { id: 'l13-listening-q1', question: 'Что Петер делает сегодня?', options: ['otthon dolgozik', 'a parkban sétált', 'filmet nézett'], correctIndex: 0 },
    { id: 'l13-listening-q2', question: 'Работал ли он вчера?', options: ['да', 'нет', 'не сказано'], correctIndex: 1 },
    { id: 'l13-listening-q3', question: 'Где он гулял утром?', options: ['otthon', 'a parkban', 'a moziban'], correctIndex: 1 },
    { id: 'l13-listening-q4', question: 'С кем он был днём?', options: ['a családjával', 'egyedül', 'a barátaival'], correctIndex: 2 },
    { id: 'l13-listening-q5', question: 'Какой маркер указывает на прошлое?', options: ['ma', 'tegnap', 'most'], correctIndex: 1 },
  ],
};

const PAST_WRITING: LessonActivity = {
  kind: 'writing', id: 'l13-writing-past-story', title: 'Письмо: короткая история о прошлом',
  prompt: 'Напиши 4–5 связанных простых предложений о вчерашнем или недавнем событии. Назови события в понятном порядке и используй минимум один маркер прошлого времени.',
  modelAnswer: ['Tegnap otthon voltam.', 'Reggel dolgoztam.', 'Délután a parkban sétáltam.', 'Este a barátaimmal filmet néztem.'],
  rubric: ['Есть 4–5 связанных простых предложений', 'События даны в понятном порядке', 'Есть минимум один маркер прошлого времени'],
};

const PAST_RECORDING: LessonActivity = {
  kind: 'recording', id: 'l13-recording-past-story', title: 'Говорение: что было вчера?',
  instructions: 'Запиши 4–5 простых связанных фраз о прошлом событии. Запись остаётся PARTIAL evidence и требует проверки человеком.',
  targetText: 'Tegnap otthon voltam. Reggel dolgoztam. Délután a parkban sétáltam. Este filmet néztem.',
  targetTranslation: 'Вчера я был дома. Утром работал. Днём гулял в парке. Вечером смотрел фильм.',
  rubric: ['Есть 4–5 связанных фраз', 'Использован маркер прошлого', 'Использованы изученные формы прошлого'],
};

const EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck', id: 'l13-exit-check', title: 'Exit check — цели урока 13', checks: [
    { objectiveId: 'l13_form-past', activityId: 'l13-cp-past-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l13_use-volt', activityId: 'l13-cp-volt-contexts', evidenceKind: 'grammar' },
    { objectiveId: 'l13_distinguish-present-past', activityId: 'l13-reading-tense-contrast', evidenceKind: 'reading', evidenceComponents: [{ activityId: 'l13-listening-tense-contrast', evidenceKind: 'listening' }] },
    { objectiveId: 'l13_tell-past', activityId: 'l13-writing-past-story', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l13-recording-past-story', evidenceKind: 'speaking' }] },
  ],
};

export const LESSON_13: Lesson = {
  id: 13, number: 13, level: 'A1', title: 'Урок 13 · A múlt idő',
  subtitle: 'Введение в прошедшее время: частотные формы и volt',
  description: 'Введение в венгерское прошедшее время: частотные базовые формы, volt, распознавание настоящего и прошлого и короткий рассказ о прошедшем событии.',
  slidesCount: 12,
  slides: [
    { id: 1, eyebrow: 'УРОК 13 · 1/12 · ВВЕДЕНИЕ', title: 'A múlt idő', subtitle: 'Прошедшее время и контекст', body: `
      <p><b>Это ограниченное введение.</b> В современном стандартном венгерском есть одно продуктивное морфологическое прошедшее время.</p>
      <p>Видовые оттенки не исчезают: значение уточняют сам глагол, глагольные приставки и контекст.</p>
      <div class="note">В L13 учим частотные базовые формы. Полные правила и систематическое противопоставление спряжений относятся к уроку 20.</div>` },
    { id: 2, eyebrow: 'УРОК 13 · 2/12 · ЧАСТОТНЫЕ ФОРМЫ', title: 'Gyakori alakok', subtitle: 'Изученные модели', body: `
      <p>Прошедшее время содержит показатель <b>-t/-tt</b>, иногда с соединительной гласной. Запоминаем частые формы:</p>
      <ul class="tick"><li>vár → <b>vártam</b>; mond → <b>mondtam</b></li><li>nyit → <b>nyitottam</b>; fut → <b>futottam</b></li><li>tanul → <b>tanultam</b>; dolgozik → <b>dolgoztam / dolgozott</b></li></ul>
      <div class="note">Это изученные модели, а не правило для механического образования формы любого глагола. Полная система будет в уроке 20.</div>`, activities: [PAST_FORMS] },
    { id: 3, eyebrow: 'УРОК 13 · 3/12 · ОПОРНАЯ МОДЕЛЬ', title: 'Tanul — múlt idő', subtitle: 'Частотная базовая парадигма', body: `
      <table class="conj"><tr><th>Лицо</th><th>Форма</th></tr><tr><td>én</td><td>tanultam</td></tr><tr><td>te</td><td>tanultál</td></tr><tr><td>ő</td><td>tanult</td></tr><tr><td>mi</td><td>tanultunk</td></tr><tr><td>ti</td><td>tanultatok</td></tr><tr><td>ők</td><td>tanultak</td></tr></table>
      <p>Это первая опорная модель, а не замена полных правил урока 20.</p>` },
    { id: 4, eyebrow: 'УРОК 13 · 4/12 · LENNI', title: 'A „lenni” múlt ideje', subtitle: 'voltam, voltál, volt, voltunk, voltatok, voltak', body: `
      <table class="conj"><tr><td>én</td><td>voltam</td><td>te</td><td>voltál</td></tr><tr><td>ő</td><td>volt</td><td>mi</td><td>voltunk</td></tr><tr><td>ti</td><td>voltatok</td><td>ők</td><td>voltak</td></tr></table>
      <p>В настоящем именном предложении третьего лица <b>van</b> обычно опускается: <b>Péter orvos.</b> В соответствующем прошедшем предложении: <b>Péter orvos volt.</b></p>`, activities: [VOLT_CONTEXTS] },
    { id: 5, eyebrow: 'УРОК 13 · 5/12 · ОТРИЦАНИЕ', title: 'Tagadás', subtitle: 'nem + прошедшая форма', body: `<p><b>Nem voltam otthon.</b> — Я не был дома.</p><p><b>Péter nem dolgozott tegnap.</b> — Петер вчера не работал.</p><p><b>Nem láttam semmit.</b> — Я ничего не видел.</p><p><b>Nem volt időm.</b> — У меня не было времени.</p>` },
    { id: 6, eyebrow: 'УРОК 13 · 6/12 · ВРЕМЯ', title: 'Időhatározók', subtitle: 'Маркеры прошлого', body: `<div class="grid2"><div><p><b>tegnap</b> — вчера</p><p><b>tegnapelőtt</b> — позавчера</p><p><b>a múlt héten</b> — на прошлой неделе</p></div><div><p><b>a múlt hónapban</b> — в прошлом месяце</p><p><b>tavaly</b> — в прошлом году</p><p><b>régebben</b> — раньше (дополнительно)</p></div></div><p><b>Tavaly Budapestre utaztam.</b></p>` },
    { id: 7, eyebrow: 'УРОК 13 · 7/12 · ДИАЛОГ', title: 'Mit csináltál tegnap?', subtitle: 'Вчерашний день', body: `<p><b>A:</b> Szia! Mit csináltál tegnap?</p><p><b>B:</b> Tegnap reggel dolgoztam, délután pedig a parkban sétáltam. És te?</p><p><b>A:</b> A moziban voltam a barátaimmal. Egy jó filmet néztünk.</p><p><b>B:</b> Jó volt a film?</p><p><b>A:</b> Igen, nagyon tetszett!</p><div class="note"><b>tetszett</b> — готовая частотная фраза, не новая продуктивная модель.</div>`, activities: [TENSE_READING] },
    { id: 8, eyebrow: 'УРОК 13 · 8/12 · АУДИРОВАНИЕ', title: 'Ma vagy tegnap?', subtitle: 'Настоящее и прошлое на слух', body: `<p>Отличи сегодняшнее действие от вчерашнего и услышь маркер времени.</p><div class="note">Отдельная assessment-запись ещё не опубликована. Озвучка слайда не заменяет MP3 и не создаёт listening evidence.</div>`, activities: [TENSE_LISTENING] },
    { id: 9, eyebrow: 'УРОК 13 · 9/12 · PREVIEW', title: 'Kitekintés: tárgyas ragozás', subtitle: 'Необязательный анонс', body: `<p><b>Предварительный обзор, вне оцениваемых целей:</b> определённость дополнения может влиять на спряжение.</p><p>В некоторых лицах формы совпадают: <b>Olvastam egy könyvet / Olvastam a könyvet</b> не показывает различие парадигм.</p><div class="note">Здесь нет продуктивного или оцениваемого задания. Полная система относится к уроку 20.</div>` },
    { id: 10, eyebrow: 'УРОК 13 · 10/12 · ПИСЬМО', title: 'Mi történt tegnap?', subtitle: 'Мини-история', body: `<p>Соедини формы и маркер времени. Открытый ответ требует проверки.</p>`, activities: [PAST_WRITING] },
    { id: 11, eyebrow: 'УРОК 13 · 11/12 · ГОВОРЕНИЕ', title: 'Mesélj a tegnapról!', subtitle: 'Устный рассказ', body: `<p>Расскажи о прошлом событии. Сам факт записи не доказывает языковую правильность.</p>`, activities: [PAST_RECORDING] },
    { id: 12, eyebrow: 'УРОК 13 · 12/12 · ИТОГИ', title: 'Összefoglalás', subtitle: 'Впереди урок 14', body: `<ul class="tick"><li>Частотные формы прошлого</li><li>Формы volt в контексте</li><li>Настоящее и прошлое в тексте</li><li>Короткий рассказ о прошлом</li></ul><div class="note">Урок 14 завершит уровень A1. Полная система прошедшего времени будет в уроке 20.</div>`, activities: [EXIT_CHECK] },
  ],
  vocabulary: [
    ['múlt idő', 'прошедшее время', 'Грамматика'], ['tanultam', 'я учился', 'Прошедшее время'], ['tanultál', 'ты учился', 'Прошедшее время'], ['tanult', 'он/она учился(-ась)', 'Прошедшее время'],
    ['voltam', 'я был', 'Lenni в прошлом'], ['volt', 'он/она был(-а)', 'Lenni в прошлом'], ['voltak', 'они были', 'Lenni в прошлом'], ['nem volt', 'не был / не было', 'Отрицание'],
    ['tegnap', 'вчера', 'Маркеры времени'], ['tegnapelőtt', 'позавчера', 'Маркеры времени'], ['tavaly', 'в прошлом году', 'Маркеры времени'], ['a múlt héten', 'на прошлой неделе', 'Маркеры времени'],
    ['dolgoztam', 'я работал', 'Прошедшее время'], ['utaztam', 'я путешествовал', 'Прошедшее время'], ['láttam', 'я видел', 'Прошедшее время'], ['tetszett', 'понравился / понравилось', 'Лексическая фраза'],
  ].map(([hu, ru, category], index) => ({ id: `l13_v${index + 1}`, hu, ru, category })),
  quiz: [
    { id: 1301, question: 'Выбери изученную форму: vár → én в прошедшем времени.', options: ['vártam', 'vártal', 'várottam', 'vártok'], correctIndex: 0, explanation: 'В изученном наборе vár → vártam. Полные правила будут в уроке 20.' },
    { id: 1302, question: 'Выбери изученную форму: dolgozik → ő в прошедшем времени.', options: ['dolgozik', 'dolgoztam', 'dolgozott', 'dolgozol'], correctIndex: 2, explanation: 'Форма третьего лица: dolgozott.' },
    { id: 1303, question: 'Как сказать «Петер был врачом»?', options: ['Péter orvos volt.', 'Péter orvos van.', 'Péter orvos voltam.', 'Péter orvos voltál.'], correctIndex: 0, explanation: 'В прошедшем именном предложении нужна форма третьего лица volt.' },
    { id: 1304, question: 'Как сказать «Я не был дома»?', options: ['Nem voltam otthon.', 'Nem voltál otthon.', 'Nem volt otthon.', 'Otthon voltam.'], correctIndex: 0, explanation: 'Для én используется voltam, а nem стоит перед глаголом.' },
    { id: 1305, question: 'Какое предложение описывает прошлое?', options: ['Most otthon vagyok.', 'Tegnap otthon voltam.', 'Ma magyarul tanulok.', 'Most a parkban sétálok.'], correctIndex: 1, explanation: 'Tegnap и voltam указывают на прошлое.' },
    { id: 1306, question: 'Какое предложение правильно соединяет маркер прошлого и форму?', options: ['Tegnap dolgoztam.', 'Tegnap dolgozom.', 'Most dolgoztam holnap.', 'Holnap voltam otthon.'], correctIndex: 0, explanation: 'Tegnap dolgoztam — «Вчера я работал».' },
  ],
  objectives: [
    { id: 'l13_form-past', text: 'Образовывать частотные базовые формы прошедшего времени по изученным моделям -t/-tt.', skills: ['grammar', 'writing'] },
    { id: 'l13_use-volt', text: 'Употреблять формы глагола lenni в прошедшем времени в простых контекстах.', skills: ['grammar', 'writing'] },
    { id: 'l13_distinguish-present-past', text: 'Различать настоящее и прошедшее время на слух и в тексте.', skills: ['listening', 'reading'] },
    { id: 'l13_tell-past', text: 'Рассказывать о прошедших событиях в коротких связанных предложениях.', skills: ['speaking', 'writing'] },
  ],
};
