import { Lesson, LessonActivity } from '../../types';

const cp = (
  id: string,
  title: string,
  passCount: number,
  exercises: Extract<LessonActivity, { kind: 'controlledPractice' }>['exercises'],
): LessonActivity => ({ kind: 'controlledPractice', id, title, passCount, exercises });

const L17_CP_SEASONS_MONTHS = cp('l17-cp-seasons-months', 'Времена года и месяцы', 10, [
  { kind: 'singleChoice', id: 'l17-month-1', prompt: 'január', options: ['tél', 'tavasz', 'nyár', 'ősz'], correctIndex: 0 },
  { kind: 'singleChoice', id: 'l17-month-2', prompt: 'február', options: ['tavasz', 'tél', 'ősz', 'nyár'], correctIndex: 1 },
  { kind: 'singleChoice', id: 'l17-month-3', prompt: 'március', options: ['nyár', 'ősz', 'tavasz', 'tél'], correctIndex: 2 },
  { kind: 'singleChoice', id: 'l17-month-4', prompt: 'április', options: ['tavasz', 'nyár', 'tél', 'ősz'], correctIndex: 0 },
  { kind: 'singleChoice', id: 'l17-month-5', prompt: 'május', options: ['ősz', 'tavasz', 'nyár', 'tél'], correctIndex: 1 },
  { kind: 'singleChoice', id: 'l17-month-6', prompt: 'június', options: ['tél', 'tavasz', 'nyár', 'ősz'], correctIndex: 2 },
  { kind: 'singleChoice', id: 'l17-month-7', prompt: 'július', options: ['nyár', 'ősz', 'tél', 'tavasz'], correctIndex: 0 },
  { kind: 'singleChoice', id: 'l17-month-8', prompt: 'augusztus', options: ['tavasz', 'nyár', 'ősz', 'tél'], correctIndex: 1 },
  { kind: 'singleChoice', id: 'l17-month-9', prompt: 'szeptember', options: ['tél', 'nyár', 'ősz', 'tavasz'], correctIndex: 2 },
  { kind: 'singleChoice', id: 'l17-month-10', prompt: 'október', options: ['ősz', 'tavasz', 'nyár', 'tél'], correctIndex: 0 },
  { kind: 'singleChoice', id: 'l17-month-11', prompt: 'november', options: ['nyár', 'ősz', 'tél', 'tavasz'], correctIndex: 1 },
  { kind: 'singleChoice', id: 'l17-month-12', prompt: 'december', options: ['tavasz', 'ősz', 'tél', 'nyár'], correctIndex: 2 },
]);

const L17_CP_ADVERBIALS = cp('l17-cp-seasonal-adverbials', 'Когда? Сезонные формы', 5, [
  { kind: 'textInput', id: 'l17-adv-1', prompt: 'tavasz → «весной»', accept: ['tavasszal'], explanation: 'tavasz + -val → tavasszal: v уподобляется sz, долгий sz пишется ssz.' },
  { kind: 'textInput', id: 'l17-adv-2', prompt: 'nyár → «летом»', accept: ['nyáron'], explanation: 'nyár + -on → nyáron.' },
  { kind: 'textInput', id: 'l17-adv-3', prompt: 'ősz → «осенью»', accept: ['ősszel'], explanation: 'ősz + -vel → ősszel: v уподобляется sz.' },
  { kind: 'textInput', id: 'l17-adv-4', prompt: 'tél → «зимой»', accept: ['télen'], explanation: 'tél + -en → télen.' },
  { kind: 'fillGap', id: 'l17-adv-5', prompt: '___ gyakran esik az eső. (tavasz)', accept: ['Tavasszal', 'tavasszal'] },
  { kind: 'fillGap', id: 'l17-adv-6', prompt: '___ meleg van. (nyár)', accept: ['Nyáron', 'nyáron'] },
]);

const L17_WRITING_WEATHER: LessonActivity = {
  kind: 'writing',
  id: 'l17-writing-current-weather',
  title: 'Письмо: погода сегодня',
  prompt: 'Напиши 4 коротких предложения о погоде сегодня или о вымышленной погоде. Укажи минимум одно погодное явление, температуру и ещё две детали. Открытый текст требует проверки.',
  modelAnswer: ['Ma süt a nap.', 'Húsz fok van.', 'Fúj a szél.', 'Nem esik az eső.'],
  rubric: ['4 предложения', 'есть погодное явление', 'есть температура', 'есть ещё две погодные детали'],
};

const L17_RECORDING_WEATHER_SEASONS: LessonActivity = {
  kind: 'recording',
  id: 'l17-recording-weather-seasons',
  title: 'Говорение: сезоны и погода',
  instructions: 'Назови четыре времени года, затем запиши 2–3 фразы о погоде. Запись требует проверки.',
  targetText: 'Tavasz, nyár, ősz, tél. Ma süt a nap. Húsz fok van.',
  targetTranslation: 'Весна, лето, осень, зима. Сегодня светит солнце. Двадцать градусов.',
  rubric: ['названы 4 сезона', 'есть описание погоды', 'есть температура или дополнительная погодная деталь'],
};

const L17_LISTENING: LessonActivity = {
  kind: 'listening',
  id: 'l17-listening-weather',
  title: 'Аудирование: короткий прогноз',
  assetId: 'l17_listening_weather',
  audioStatus: 'published',
  passCount: 4,
  transcript: 'Időjárás-jelentés. Ma Budapesten felhős az ég, tizenöt fok van. Délután esik az eső, este fúj a szél. Holnap napos idő lesz, húsz fok lesz.',
  questions: [
    { id: 'l17-list-1', question: 'Melyik városról szól az előrejelzés?', options: ['Budapestről', 'Bécsről', 'Szegedről'], correctIndex: 0 },
    { id: 'l17-list-2', question: 'Milyen ma az ég?', options: ['Felhős', 'Napos', 'Havas'], correctIndex: 0 },
    { id: 'l17-list-3', question: 'Hány fok van ma?', options: ['10', '15', '20'], correctIndex: 1 },
    { id: 'l17-list-4', question: 'Mi történik délután?', options: ['Esik az eső', 'Havazik', 'Süt a nap'], correctIndex: 0 },
    { id: 'l17-list-5', question: 'Milyen idő lesz holnap?', options: ['Napos', 'Felhős és esős', 'Havas'], correctIndex: 0 },
  ],
};

const L17_WRITING_COMPARE: LessonActivity = {
  kind: 'writing',
  id: 'l17-writing-season-comparison',
  title: 'Письмо: сравниваем сезоны',
  prompt: 'Напиши 3–5 предложений и сравни минимум два времени года по трём признакам погоды. Используй знакомую модель из L9: -bb + mint, минимум два раза. Открытый текст требует проверки.',
  modelAnswer: [
    'Nyáron melegebb az idő, mint télen.',
    'Télen hidegebb az idő, mint tavasszal.',
    'Tavasszal gyakran esik az eső, nyáron pedig gyakran süt a nap.',
    'Ősszel hidegebb az idő, mint nyáron.',
  ],
  rubric: ['минимум 2 сезона', 'минимум 3 погодных признака', 'минимум 2 сравнения с -bb и mint'],
};

const L17_RECORDING_COMPARE: LessonActivity = {
  kind: 'recording',
  id: 'l17-recording-season-comparison',
  title: 'Говорение: сравнение сезонов',
  instructions: 'Запиши 3–4 фразы, сравнивая минимум два сезона. Используй минимум два сравнения с -bb и mint. Запись требует проверки.',
  targetText: 'Nyáron melegebb az idő, mint télen. Télen hidegebb az idő, mint tavasszal. Tavasszal gyakran esik az eső.',
  targetTranslation: 'Летом погода теплее, чем зимой. Зимой холоднее, чем весной. Весной часто идёт дождь.',
  rubric: ['минимум 2 сезона', 'минимум 2 сравнения', 'погодная лексика урока'],
};

const L17_EXIT: LessonActivity = {
  kind: 'exitCheck',
  id: 'l17-exit-check',
  title: 'Проверка целей урока',
  checks: [
    { objectiveId: 'l17_describe-weather', activityId: 'l17-writing-current-weather', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l17-recording-weather-seasons', evidenceKind: 'speaking' }] },
    { objectiveId: 'l17_name-seasons', activityId: 'l17-cp-seasons-months', evidenceKind: 'reading', evidenceComponents: [{ activityId: 'l17-recording-weather-seasons', evidenceKind: 'speaking' }] },
    { objectiveId: 'l17_use-seasonal-adverbials', activityId: 'l17-cp-seasonal-adverbials', evidenceKind: 'grammar' },
    { objectiveId: 'l17_compare-seasons', activityId: 'l17-writing-season-comparison', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l17-recording-season-comparison', evidenceKind: 'speaking' }] },
    { objectiveId: 'l17_understand-forecast', activityId: 'l17-listening-weather', evidenceKind: 'listening' },
  ],
};

export const LESSON_17: Lesson = {
  id: 17,
  number: 17,
  level: 'A2',
  title: 'Урок 17 · Időjárás és évszakok',
  subtitle: 'Погода, времена года и месяцы',
  description: 'Базовое описание погоды и температуры, четыре времени года, месяцы, формы tavasszal/nyáron/ősszel/télen, сравнение сезонов и короткий прогноз на слух.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: 'УРОК 17 · 1/11 · ПОГОДА',
      title: 'Milyen az idő?',
      subtitle: 'Как описать погоду',
      body: `<p>Слово <span class="hu-word">idő</span> может означать «время» или «погода» — значение определяется контекстом. В погодных фразах используются разные модели: иногда есть обычное подлежащее, а иногда достаточно одного глагола.</p><table class="conj"><tr><th>Венгерский</th><th>Значение</th></tr><tr><td>Süt a nap.</td><td>Светит солнце</td></tr><tr><td>Esik az eső.</td><td>Идёт дождь</td></tr><tr><td>Fúj a szél.</td><td>Дует ветер</td></tr><tr><td>Havazik.</td><td>Идёт снег</td></tr><tr><td>Felhős az ég.</td><td>Небо облачное / облачно</td></tr></table><div class="note">В Süt a nap, Esik az eső и Fúj a szél есть подлежащее: nap, eső, szél. Havazik употребляется без отдельного подлежащего.</div>`,
    },
    {
      id: 2,
      eyebrow: 'УРОК 17 · 2/11 · ТЕМПЕРАТУРА',
      title: 'Hány fok van?',
      subtitle: 'Спрашиваем и называем температуру',
      body: `<p><b>Hány fok van?</b> — Сколько градусов?</p><p><b>Húsz fok van.</b> — Двадцать градусов.</p><p><b>Meleg van.</b> — Тепло. <b>Hideg van.</b> — Холодно.</p><div class="note">В погодных выражениях Meleg van / Hideg van слово <b>van</b> нужно. Сравни с L9: <b>Az idő meleg.</b> — «Погода тёплая», где в 3-м лице настоящего времени отдельная связка не ставится.</div>`,
    },
    {
      id: 3,
      eyebrow: 'УРОК 17 · 3/11 · ВРЕМЕНА ГОДА',
      title: 'Évszakok',
      subtitle: 'Времена года',
      body: `<div class="grid2"><div><p><b>tavasz</b> — весна</p><p><b>nyár</b> — лето</p></div><div><p><b>ősz</b> — осень</p><p><b>tél</b> — зима</p></div></div>`,
    },
    {
      id: 4,
      eyebrow: 'УРОК 17 · 4/11 · «ВЕСНОЙ, ЛЕТОМ...»',
      title: 'Tavasszal, nyáron, ősszel, télen',
      subtitle: 'Четыре частотные формы времени',
      activities: [L17_CP_ADVERBIALS],
      body: `<p>Чтобы сказать «весной / летом / осенью / зимой», запомни четыре частотные формы целиком. При этом их строение связано с уже знакомыми суффиксами.</p><table class="conj"><tr><th>Сезон</th><th>Когда?</th><th>Связь с прошлой темой</th></tr><tr><td>tavasz</td><td><b>tavasszal</b></td><td>-val; v уподобляется sz, долгий sz пишется ssz</td></tr><tr><td>nyár</td><td><b>nyáron</b></td><td>-on</td></tr><tr><td>ősz</td><td><b>ősszel</b></td><td>-vel; v уподобляется sz</td></tr><tr><td>tél</td><td><b>télen</b></td><td>-en</td></tr></table><div class="note">Это не четыре «случайных исключения»: tavasszal/ősszel повторяют модель -val/-vel из L16, а nyáron/télen используют знакомые -on/-en. Для свободной речи сами четыре сезонные формы всё равно полезно запомнить как готовый набор.</div>`,
    },
    {
      id: 5,
      eyebrow: 'УРОК 17 · 5/11 · МЕСЯЦЫ',
      title: 'Hónapok és évszakok',
      subtitle: '12 месяцев по сезонам',
      activities: [L17_CP_SEASONS_MONTHS],
      body: `<table class="conj"><tr><th>Сезон</th><th>Месяцы</th></tr><tr><td><b>tél</b></td><td>december, január, február</td></tr><tr><td><b>tavasz</b></td><td>március, április, május</td></tr><tr><td><b>nyár</b></td><td>június, július, augusztus</td></tr><tr><td><b>ősz</b></td><td>szeptember, október, november</td></tr></table><div class="note">Это повторение названий месяцев из L5: теперь нужно быстро соотносить их с четырьмя сезонами. Формы дат и порядковые числительные сюда не входят.</div>`,
    },
    {
      id: 6,
      eyebrow: 'УРОК 17 · 6/11 · ОПИСАНИЕ ПОГОДЫ',
      title: 'Milyen ma az idő?',
      subtitle: 'Собираем короткое описание',
      activities: [L17_WRITING_WEATHER, L17_RECORDING_WEATHER_SEASONS],
      body: `<p><b>Ma süt a nap.</b> — Сегодня светит солнце.</p><p><b>Húsz fok van.</b> — Двадцать градусов.</p><p><b>Fúj a szél.</b> — Дует ветер.</p><p><b>Nem esik az eső.</b> — Дождь не идёт.</p><div class="note">Для короткого A2-описания достаточно 3–4 простых погодных деталей. Письменный и устный открытые ответы сохраняются как PARTIAL evidence и требуют проверки.</div>`,
    },
    {
      id: 7,
      eyebrow: 'УРОК 17 · 7/11 · ПРОГНОЗ ПОГОДЫ',
      title: 'Időjárás-jelentés',
      subtitle: 'Понимаем короткий прогноз на слух',
      activities: [L17_LISTENING],
      body: `<p>В коротком прогнозе ищи пять вещей: <b>место, день, облачность/осадки, температуру и ещё одну погодную деталь</b>.</p><p>Полезные опоры: <b>ma</b> — сегодня, <b>holnap</b> — завтра, <b>délután</b> — после полудня, <b>este</b> — вечером, <b>napos</b> — солнечный.</p><div class="note"><b>Holnap ... lesz</b> встречается здесь как готовая форма для понимания прогноза. Будущее время с fog + инфинитив будет в L19.</div>`,
    },
    {
      id: 8,
      eyebrow: 'УРОК 17 · 8/11 · СРАВНЕНИЕ',
      title: 'Évszakok összehasonlítása',
      subtitle: 'Повторяем сравнительную степень из L9',
      activities: [L17_WRITING_COMPARE, L17_RECORDING_COMPARE],
      body: `<p><b>Nyáron melegebb az idő, mint télen.</b> — Летом погода теплее, чем зимой.</p><p><b>Télen hidegebb az idő, mint tavasszal.</b> — Зимой холоднее, чем весной.</p><p><b>Tavasszal gyakran esik az eső, nyáron pedig gyakran süt a nap.</b> — Весной часто идёт дождь, а летом часто светит солнце.</p><div class="note">Здесь нет новой модели сравнения: используется уже знакомая из L9 схема сравнительной степени <b>-bb + mint</b>, теперь с погодой и сезонами.</div>`,
    },
    {
      id: 9,
      eyebrow: 'УРОК 17 · 9/11 · РАСШИРЕННЫЙ СЛОВАРЬ',
      title: 'Kiegészítő szókincs',
      subtitle: 'Ещё погодные слова для узнавания',
      body: `<div class="grid2"><div><p><b>vihar</b> — буря / шторм</p><p><b>köd</b> — туман</p></div><div><p><b>szivárvány</b> — радуга</p><p><b>hőség</b> — жара</p></div></div><div class="note">Это расширение словаря. Эти четыре слова не являются отдельной обязательной целью L17.</div>`,
    },
    {
      id: 10,
      eyebrow: 'УРОК 17 · 10/11 · ГРАНИЦЫ УРОКА',
      title: 'Mit nem tanulunk még?',
      subtitle: 'Что пока только узнаём',
      body: `<p>L17 учит говорить о текущей погоде, сезонах и простом сравнении. В прогнозе можно встретить готовое <b>holnap ... lesz</b>, но продуктивное будущее время здесь не является целью.</p><p>Следующий урок L18 посвящён инфинитиву и модальным конструкциям; системное будущее с <b>fog + инфинитив</b> будет позже, в L19.</p>`,
    },
    {
      id: 11,
      eyebrow: 'УРОК 17 · 11/11 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Проверка целей 17-го урока',
      activities: [L17_EXIT],
      body: `<ul class="tick"><li>Базовые погодные модели: Süt a nap, Esik az eső, Fúj a szél, Havazik</li><li>Температура: Hány fok van? / Húsz fok van; Meleg van / Hideg van</li><li>Сезоны и 12 месяцев</li><li>tavasszal, nyáron, ősszel, télen</li><li>Сравнение сезонов через знакомую модель -bb + mint</li><li>Короткий прогноз на слух станет доступен после публикации отдельной записи</li></ul><div class="note"><b>Домашнее задание.</b> Напиши и запиши 3–5 предложений, сравнивая погоду минимум в двух сезонах.</div>`,
    },
  ],
  vocabulary: [
    { id: 'l17_v1', hu: 'tavasz', ru: 'весна', category: 'Времена года', exampleSentence: 'Tavasszal gyakran esik az eső.' },
    { id: 'l17_v2', hu: 'nyár', ru: 'лето', category: 'Времена года', exampleSentence: 'Nyáron meleg van.' },
    { id: 'l17_v3', hu: 'ősz', ru: 'осень', category: 'Времена года', exampleSentence: 'Ősszel hidegebb az idő, mint nyáron.' },
    { id: 'l17_v4', hu: 'tél', ru: 'зима', category: 'Времена года', exampleSentence: 'Télen hideg van.' },
    { id: 'l17_v5', hu: 'eső', ru: 'дождь', category: 'Погода', exampleSentence: 'Esik az eső.' },
    { id: 'l17_v6', hu: 'szél', ru: 'ветер', category: 'Погода', exampleSentence: 'Fúj a szél.' },
    { id: 'l17_v7', hu: 'havazik', ru: 'идёт снег', category: 'Погода', exampleSentence: 'Télen gyakran havazik.' },
    { id: 'l17_v8', hu: 'fok', ru: 'градус', category: 'Температура', exampleSentence: 'Húsz fok van.' },
  ],
  quiz: [
    { id: 1701, question: 'Как по-венгерски сказать «Светит солнце»?', options: ['Süt a nap', 'Esik az eső', 'Fúj a szél', 'Havazik'], correctIndex: 0, explanation: 'Süt a nap — «Светит солнце»; a nap здесь является подлежащим.' },
    { id: 1702, question: 'Какой короткий глагол означает «идёт снег»?', options: ['Havazik', 'Fúj a szél', 'Esik az eső', 'Süt a nap'], correctIndex: 0, explanation: 'Havazik — частотный глагол «идёт снег / снег идёт».' },
    { id: 1703, question: 'Как переводится вопрос «Hány fok van?»', options: ['Сколько времени?', 'Какая погода?', 'Сколько градусов?', 'Который час?'], correctIndex: 2, explanation: 'Hány fok van? — «Сколько градусов?» Например: Húsz fok van.' },
    { id: 1704, question: 'Как сказать «летом»?', options: ['nyárval', 'nyáron', 'nyárban', 'nyáral'], correctIndex: 1, explanation: 'nyár + -on → nyáron. Это одна из четырёх изученных сезонных форм.' },
    { id: 1705, question: 'Как сказать «осенью»?', options: ['őszben', 'ősszel', 'őszön', 'őszre'], correctIndex: 1, explanation: 'ősz + -vel → ősszel: v уподобляется конечному sz, как в модели -val/-vel из L16.' },
    { id: 1706, question: 'Какой месяц относится к осени (ősz)?', options: ['április', 'július', 'október', 'január'], correctIndex: 2, explanation: 'Сентябрь, октябрь и ноябрь относятся к осени: szeptember, október, november.' },
  ],
  objectives: [
    { id: 'l17_describe-weather', text: 'Описывать текущую погоду в 3–4 простых фразах.', skills: ['speaking', 'writing'] },
    { id: 'l17_name-seasons', text: 'Называть четыре времени года и соотносить 12 месяцев с сезонами.', skills: ['speaking', 'reading'] },
    { id: 'l17_use-seasonal-adverbials', text: 'Употреблять формы tavasszal, nyáron, ősszel, télen в изученных контекстах.', skills: ['grammar', 'writing'] },
    { id: 'l17_compare-seasons', text: 'Сравнивать погоду минимум в двух сезонах, используя знакомую модель -bb + mint.', skills: ['speaking', 'writing'] },
    { id: 'l17_understand-forecast', text: 'Понимать ключевые детали короткого прогноза погоды на слух.', skills: ['listening'] },
  ],
};
