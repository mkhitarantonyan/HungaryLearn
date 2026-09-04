import type { Lesson, LessonActivity } from '../../types';

const PAST_FORMS: LessonActivity = {
  kind: 'controlledPractice', id: 'l13-cp-past-forms', title: 'Контекстная практика: что было вчера?', passCount: 11,
  exercises: [
    { kind: 'fillGap', id: 'l13-past-1', prompt: 'Tegnap otthon ___. (én, lenni)', accept: ['voltam'] },
    { kind: 'fillGap', id: 'l13-past-2', prompt: 'Szombaton egész nap ___. (én, dolgozik)', accept: ['dolgoztam'] },
    { kind: 'fillGap', id: 'l13-past-3', prompt: 'Délután a parkban ___. (én, sétál)', accept: ['sétáltam'] },
    { kind: 'singleChoice', id: 'l13-past-4', prompt: 'Как спросить друга, что он делал вчера?', options: ['Mit csináltál tegnap?', 'Mit csinálsz holnap?', 'Hol vagy most?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l13-past-5', prompt: 'Ответ на вопрос Hol voltál?', options: ['Otthon voltam.', 'Otthon vagyok.', 'Otthon leszek.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l13-past-6', prompt: 'Выбери отрицательное событие прошлого.', options: ['Nem dolgoztam.', 'Nem dolgozom.', 'Nem fogok dolgozni.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l13-past-7', prompt: 'Куда ты ходил вчера?', options: ['Tegnap boltba mentem.', 'Ma boltba megyek.', 'Holnap boltba megyek.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l13-past-8', prompt: 'С кем ты встретился?', options: ['Annával találkoztam.', 'Annánál voltam.', 'Annához megyek.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l13-past-9', prompt: 'Поставь события в естественном порядке.', options: ['Reggel dolgoztam, délután sétáltam, este filmet néztem.', 'Este reggeliztem, reggel lefeküdtem.', 'Végül először boltba mentem.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l13-past-10', prompt: 'План не состоялся.', options: ['Nem mentem sehova.', 'Nem megyek sehova.', 'Sehova megyek tegnap.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l13-past-11', prompt: 'Что делал Петер вечером?', options: ['Péter este filmet nézett.', 'Péter este filmet néz.', 'Péter holnap filmet nézett.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l13-past-12', prompt: 'Какой маркер продолжает последовательность?', options: ['Utána találkoztam Annával.', 'Holnap találkoztam Annával.', 'Most találkoztam tegnap.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l13-past-13', prompt: 'Выбери вопрос о спутнике в прошлом.', options: ['Kivel találkoztál?', 'Kivel találkozol most?', 'Hová mész holnap?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l13-past-14', prompt: 'Финальная оценка прошедшего дня.', options: ['Végül hazamentem. Jó nap volt.', 'Végül hazamegyek tegnap.', 'Jó nap van múlt héten.'], correctIndex: 0 },
  ],
};

const TENSE_READING: LessonActivity = {
  kind: 'reading', id: 'l13-reading-tense-contrast', title: 'Чтение: насыщенная суббота', passCount: 6,
  instructions: 'Прочитай простой рассказ о завершённых событиях и восстанови последовательность дня.',
  content: { type: 'prose', title: 'Egy mozgalmas szombat', paragraphs: [
    'Múlt szombaton korán keltem fel, mert sok dolgom volt. Reggel nyolckor reggeliztem, azután a piacra mentem. Gyümölcsöt, kenyeret és sajtot vettem. A piacon sok ember volt, ezért lassan haladtam. Találkoztam a szomszédommal, Évával. Röviden beszélgettünk, és megmutatta, hol van egy olcsó zöldséges. Ezután a postára mentem, mert egy levelet küldtem a testvéremnek.',
    'Délben a városközpontban találkoztam a barátommal, Gáborral. Régen nem láttuk egymást, ezért sok témáról beszéltünk. Egy kis étteremben ebédeltünk. Én levest kértem, Gábor pedig tésztát evett. Az étel finom volt, de sokat vártunk rá. Ebéd után a folyóhoz sétáltunk, majd fényképeket készítettünk a főtéren. Délután még egy régi könyvesboltba is bementünk néhány percre együtt.',
    'Délután moziba akartunk menni, de nem kaptunk jegyet, mert minden hely foglalt volt. Ezért nem néztük meg a filmet. Helyette beültünk egy kávézóba, ahol én teát ittam, Gábor pedig kávét kért. Este hétkor hazamentem. Otthon még magyarul tanultam egy órát, azután vacsorát készítettem és zenét hallgattam. Tíz óra után már fáradt voltam, ezért korán lefeküdtem. A nap hosszú volt, de nagyon jól éreztem magam.',
  ] },
  questions: [
    { id: 'l13-reading-q1', question: 'Что рассказчик сделал утром после завтрака?', options: ['пошёл на рынок', 'пошёл в кино', 'лёг спать'], correctIndex: 0 },
    { id: 'l13-reading-q2', question: 'Куда он пошёл после рынка?', options: ['на почту', 'домой', 'в библиотеку'], correctIndex: 0 },
    { id: 'l13-reading-q3', question: 'С кем он встретился в центре?', options: ['с Евой', 'с Габором', 'с братом'], correctIndex: 1 },
    { id: 'l13-reading-q4', question: 'Что друзья делали после обеда?', options: ['работали', 'гуляли и фотографировали', 'покупали продукты'], correctIndex: 1 },
    { id: 'l13-reading-q5', question: 'Какой план не состоялся?', options: ['поход в кино', 'обед', 'поход на рынок'], correctIndex: 0 },
    { id: 'l13-reading-q6', question: 'Почему они не посмотрели фильм?', options: ['не было билетов', 'шёл дождь', 'они устали'], correctIndex: 0 },
    { id: 'l13-reading-q7', question: 'Что рассказчик делал дома вечером?', options: ['готовил обед', 'учил венгерский и слушал музыку', 'смотрел фильм'], correctIndex: 1 },
    { id: 'l13-reading-q8', question: 'Как он оценивает день?', options: ['долгий, но приятный', 'короткий и скучный', 'трудный и неудачный'], correctIndex: 0 },
  ],
};

const TENSE_LISTENING: LessonActivity = {
  kind: 'listening', id: 'l13-listening-tense-contrast', title: 'Аудирование: сейчас и вчера',
  assetId: 'l13_listening_tense_contrast', audioStatus: 'published', passCount: 4,
  transcript: 'Ma Péter otthon dolgozik. Tegnap nem dolgozott: délelőtt a parkban sétált, délután pedig a barátaival volt. Este filmet néztek.',
  questions: [
    { id: 'l13-listening-q1', question: 'Что Петер делает сегодня?', options: ['otthon dolgozik', 'a parkban sétált', 'filmet nézett'], correctIndex: 0 },
    { id: 'l13-listening-q2', question: 'Работал ли он вчера?', options: ['да', 'нет', 'не сказано'], correctIndex: 1 },
    { id: 'l13-listening-q3', question: 'Где он гулял утром?', options: ['otthon', 'a parkban', 'a moziban'], correctIndex: 1 },
    { id: 'l13-listening-q4', question: 'С кем он был днём?', options: ['a családjával', 'egyedül', 'a barátaival'], correctIndex: 2 },
    { id: 'l13-listening-q5', question: 'Какой маркер указывает на прошлое?', options: ['ma', 'tegnap', 'most'], correctIndex: 1 },
  ],
};

const PAST_ROLEPLAY: LessonActivity = {
  kind: 'rolePlay', id: 'l13-roleplay-weekend', title: 'Ролевая игра: разговор о выходных', partnerLabel: 'Barát', completionMessage: 'Elmeséltétek a hétvégét.', startTurnId: 'l13-rp-s1',
  turns: [
    { id: 'l13-rp-s1', speaker: 'waiter', prompt: 'Szia! Mit csináltál szombaton?', next: 'l13-rp-l1' },
    { id: 'l13-rp-l1', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови два утренних события.', model: 'Reggel még otthon voltam, aztán a piacra mentem.', next: 'l13-rp-s2' },
    { id: 'l13-rp-s2', speaker: 'waiter', prompt: 'Értem. Hol voltál délután?', next: 'l13-rp-l2' },
    { id: 'l13-rp-l2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови место и действие.', model: 'Délután a parkban sétáltam.', next: 'l13-rp-s3' },
    { id: 'l13-rp-s3', speaker: 'waiter', prompt: 'Aha. Kivel találkoztál?', next: 'l13-rp-l3' },
    { id: 'l13-rp-l3', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови человека.', model: 'A barátommal, Annával találkoztam.', next: 'l13-rp-s4' },
    { id: 'l13-rp-s4', speaker: 'waiter', prompt: 'Jól hangzik. Mit csináltatok együtt?', next: 'l13-rp-l4' },
    { id: 'l13-rp-l4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови совместное действие.', model: 'Egy kávézóban beszélgettünk, aztán filmet néztünk.', next: 'l13-rp-s5' },
    { id: 'l13-rp-s5', speaker: 'waiter', prompt: 'Értem. Volt valami probléma?', next: 'l13-rp-l5' },
    { id: 'l13-rp-l5', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Скажи, что один план не состоялся, и почему.', model: 'Igen. Kirándulni is akartunk, de nem mentünk, mert esett az eső.', next: 'l13-rp-s6' },
    { id: 'l13-rp-s6', speaker: 'waiter', prompt: 'Kár. És mit csináltál este?', next: 'l13-rp-l6' },
    { id: 'l13-rp-l6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Заверши рассказ вечерним событием и мнением.', model: 'Este otthon vacsoráztam és zenét hallgattam. Jó nap volt.', next: 'l13-rp-s7' },
    { id: 'l13-rp-s7', speaker: 'waiter', prompt: 'Elég mozgalmas nap volt!', next: 'l13-rp-l7' },
    { id: 'l13-rp-l7', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Задай собеседнику вопрос о его выходных.', model: 'És te? Mit csináltál vasárnap?', next: 'l13-rp-s8' },
    { id: 'l13-rp-s8', speaker: 'waiter', prompt: 'Én a családommal voltam, elég nyugodt nap volt. Jó volt beszélgetni. Szia!' },
  ],
};

const PAST_WRITING: LessonActivity = {
  kind: 'writing', id: 'l13-writing-past-story', title: 'Письмо: короткая история о прошлом',
  prompt: 'Напиши 80–100 слов о вымышленном вчерашнем дне или выходном. Укажи когда и где всё происходило, 3–4 действия, одного человека, одно отрицательное предложение в прошлом, понятную хронологию и итоговое мнение.',
  modelAnswer: ['Tegnap szabadnapom volt. Reggel nyolckor felkeltem és otthon nyugodtan reggeliztem. Azután a piacra mentem, ahol friss gyümölcsöt és kenyeret vettem. Délben találkoztam a barátommal, Péterrel. Egy kis étteremben ebédeltünk, majd a parkban sétáltunk. Sok ember volt a parkban, de találtunk egy csendes helyet. Délután moziba akartunk menni, de nem kaptunk jegyet, ezért nem néztünk filmet. Helyette egy közeli kávézóban sokáig beszélgettünk, és én teát ittam. Este hétkor hazamentem, vacsorát készítettem és zenét hallgattam. Fáradt voltam, de nagyon jól éreztem magam.'],
  rubric: ['80–100 слов', '3–4 завершённых действия', 'одно отрицательное предложение', 'человек и место', 'хронологический порядок', 'финальное мнение'],
};

const PAST_SPEAKING = {
  title: 'Необязательная устная самопрактика',
  instructions: 'Говори 1.5–2 минуты о вчерашнем дне: утро → день → вечер. Это текстовая инструкция без микрофона, score и evidence.',
  prompt: 'Расскажи, где ты был, что делал, с кем встречался, чего не делал и как оцениваешь день.',
  rubric: ['утро, день и вечер', 'несколько форм прошлого', 'одно отрицание', 'финальное мнение'],
};

const EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck', id: 'l13-exit-check', title: 'Проверка целей урока 13', checks: [
    { objectiveId: 'l13_form-past', activityId: 'l13-cp-past-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l13_use-volt', activityId: 'l13-cp-past-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l13_distinguish-present-past', activityId: 'l13-reading-tense-contrast', evidenceKind: 'reading', evidenceComponents: [{ activityId: 'l13-listening-tense-contrast', evidenceKind: 'listening' }] },
    { objectiveId: 'l13_tell-past', activityId: 'l13-writing-past-story', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l13-roleplay-weekend', evidenceKind: 'interaction' }] },
  ],
};

export const LESSON_13: Lesson = {
  id: 13, number: 13, level: 'A1', title: 'Урок 13 · A múlt idő',
  subtitle: 'Введение в прошедшее время: частотные формы и volt',
  description: 'Коммуникативное введение в прошедшее время: частотные формы, volt, вопросы, отрицание и простой связный рассказ о завершённых событиях.',
  slidesCount: 11,
  slides: [
    { id: 1, eyebrow: 'УРОК 13 · 1/11 · ВВЕДЕНИЕ', title: 'A múlt idő', subtitle: 'Прошедшее время и контекст', body: `
      <p><b>Это ограниченное введение.</b> В современном стандартном венгерском есть одно продуктивное морфологическое прошедшее время.</p>
      <p>Видовые оттенки не исчезают: значение уточняют сам глагол, глагольные приставки и контекст.</p>
      <div class="note">В L13 учим частотные базовые формы. Полные правила и систематическое противопоставление спряжений относятся к уроку 20.</div>` },
    { id: 2, eyebrow: 'УРОК 13 · 2/11 · ЧАСТОТНЫЕ ФОРМЫ', title: 'Gyakori alakok', subtitle: 'Изученные модели', body: `
      <p>Прошедшее время содержит показатель <b>-t/-tt</b>, иногда с соединительной гласной. Запоминаем частые формы:</p>
      <ul class="tick"><li>vár → <b>vártam</b>; mond → <b>mondtam</b></li><li>nyit → <b>nyitottam</b>; fut → <b>futottam</b></li><li>tanul → <b>tanultam</b>; dolgozik → <b>dolgoztam / dolgozott</b></li></ul>
      <div class="note">Это изученные модели, а не правило для механического образования формы любого глагола. Полная система будет в уроке 20.</div>` },
    { id: 3, eyebrow: 'УРОК 13 · 3/11 · ОПОРНАЯ МОДЕЛЬ', title: 'Tanul és lenni', subtitle: 'Частотные базовые формы', body: `
      <table class="conj"><tr><th>Лицо</th><th>Форма</th></tr><tr><td>én</td><td>tanultam</td></tr><tr><td>te</td><td>tanultál</td></tr><tr><td>ő</td><td>tanult</td></tr><tr><td>mi</td><td>tanultunk</td></tr><tr><td>ti</td><td>tanultatok</td></tr><tr><td>ők</td><td>tanultak</td></tr></table>
      <table class="conj"><tr><td>én</td><td>voltam</td><td>te</td><td>voltál</td></tr><tr><td>ő</td><td>volt</td><td>mi</td><td>voltunk</td></tr><tr><td>ti</td><td>voltatok</td><td>ők</td><td>voltak</td></tr></table>
      <p>Это первая опорная модель, а не замена полных правил урока 20. В настоящем <b>Péter orvos.</b>, в прошлом — <b>Péter orvos volt.</b></p>` },
    { id: 4, eyebrow: 'УРОК 13 · 4/11 · ОТРИЦАНИЕ И ПОСЛЕДОВАТЕЛЬНОСТЬ', title: 'Nem… · reggel → végül', subtitle: 'Простая история вместо изолированных форм', body: `<p><b>Nem voltam otthon. Nem dolgoztam. Nem mentem sehova.</b></p><p><b>reggel, délelőtt, délután, este, azután, utána, végül</b></p><p><b>Mit csináltál tegnap? Hol voltál? Kivel találkoztál?</b></p>` },
    { id: 5, eyebrow: 'УРОК 13 · 5/11 · КОНТРОЛИРУЕМАЯ ПРАКТИКА', title: 'Mi történt tegnap?', subtitle: 'Формы, вопросы, отрицание и порядок', body: `<p>Четырнадцать ситуаций проверяют частые формы в контексте, а не полную морфологическую систему.</p>`, activities: [PAST_FORMS] },
    { id: 6, eyebrow: 'УРОК 13 · 6/11 · ЧТЕНИЕ', title: 'Egy mozgalmas szombat', subtitle: 'Завершённые события в последовательности', body: `<p>Проследи утро, встречу, несостоявшийся план, вечер и итоговое мнение.</p>`, activities: [TENSE_READING] },
    { id: 7, eyebrow: 'УРОК 13 · 7/11 · АУДИРОВАНИЕ', title: 'Ma vagy tegnap?', subtitle: 'Существующая синхронизированная запись', body: `<p>Прослушай запись, отличи сегодняшнее действие от вчерашнего и услышь маркер времени. Транскрипт и вопросы не изменены.</p>`, activities: [TENSE_LISTENING] },
    { id: 8, eyebrow: 'УРОК 13 · 8/11 · ВЗАИМОДЕЙСТВИЕ', title: 'Mit csináltál hétvégén?', subtitle: 'Разговор друзей в понедельник', body: `<p>Ответь на вопросы о выходных, назови проблему и задай собеседнику хотя бы один вопрос.</p>`, activities: [PAST_ROLEPLAY] },
    { id: 9, eyebrow: 'УРОК 13 · 9/11 · ПИСЬМО', title: 'Mi történt tegnap?', subtitle: 'Связный рассказ о прошлом', body: `<p>Открытый текст остаётся PARTIAL до квалифицированной проверки.</p>`, activities: [PAST_WRITING] },
    { id: 10, eyebrow: 'УРОК 13 · 10/11 · УСТНАЯ САМОПРАКТИКА', title: 'Mesélj a tegnapról!', subtitle: 'Утро → день → вечер', body: `<p>Самопрактика не использует микрофон, не оценивается и не создаёт evidence.</p>`, optionalSpeaking: PAST_SPEAKING },
    { id: 11, eyebrow: 'УРОК 13 · 11/11 · ИТОГИ', title: 'Összefoglalás', subtitle: 'Впереди A1 checkpoint', body: `<ul class="tick"><li>Частотные формы прошлого и volt</li><li>Простое отрицание</li><li>Вопросы о завершённых событиях</li><li>Хронологический рассказ</li><li>Writing и RolePlay остаются PARTIAL</li></ul><div class="note">L14 станет интегрированным checkpoint конца A1. Полная система прошедшего времени остаётся в L20.</div>`, activities: [EXIT_CHECK] },
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
