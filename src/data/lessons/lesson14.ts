import type { Lesson, LessonActivity } from '../../types';

const ROUTINE_FORMS: LessonActivity = {
  kind: 'controlledPractice', id: 'l14-cp-routine-forms', title: 'A1 checkpoint: язык повседневного дня', passCount: 13,
  exercises: [
    { kind: 'fillGap', id: 'l14-forms-1', prompt: 'Reggel ___. (én, mosakodik)', accept: ['mosakodom'] },
    { kind: 'fillGap', id: 'l14-forms-2', prompt: 'Reggel gyorsan ___. (én, felöltözik)', accept: ['felöltözöm'] },
    { kind: 'fillGap', id: 'l14-forms-3', prompt: 'Este tizenegykor ___. (én, lefekszik)', accept: ['lefekszem'] },
    { kind: 'fillGap', id: 'l14-forms-4', prompt: 'Délben levest ___. (én, eszik)', accept: ['eszem'] },
    { kind: 'singleChoice', id: 'l14-forms-5', prompt: 'Типичное начало буднего дня.', options: ['Hétköznap hatkor kelek.', 'Este hatkor reggelizem.', 'Délben lefekszem.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-6', prompt: 'Как сказать время завтрака?', options: ['Hét órakor reggelizem.', 'Hét órában reggelizem.', 'Hét órára eszem tegnap.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-7', prompt: 'Куда ты идёшь к восьми?', options: ['Nyolcra megyek dolgozni.', 'Nyolcon vagyok dolgozni.', 'Nyolctól jövök dolgozni.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-8', prompt: 'Выбери естественное выражение частоты.', options: ['Általában busszal megyek.', 'Általában tegnap megyek.', 'Busszal általában voltam holnap.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-9', prompt: 'Что происходит после работы?', options: ['Munka után bevásárolok.', 'Munka előtt hazajöttem holnap.', 'Délben felébredek este.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-10', prompt: 'Как спросить о распорядке другого человека?', options: ['Mikor kelsz fel hétköznap?', 'Mikor keltem fel tegnap én?', 'Hová órakor vagy?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-11', prompt: 'Укажи знакомый объект в винительном падеже.', options: ['Reggel kávét iszom.', 'Reggel kávé van iszom.', 'Reggel kávéhoz jövök.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-12', prompt: 'Место учёбы и время.', options: ['Nyolckor az iskolában vagyok.', 'Nyolckor az iskolára vagyok.', 'Nyolckor az iskolából megyek be.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-13', prompt: 'Выбери логичную последовательность.', options: ['Felkelek, reggelizem, majd dolgozni megyek.', 'Lefekszem, felkelek, azután reggelizem este.', 'Vacsorázom, majd reggel felébredek.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-14', prompt: 'Выбери корректное описание редкой привычки.', options: ['Ritkán nézek tévét este.', 'Ritkán tegnap néztem mindig.', 'Néha ritkán mindig tévét.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-15', prompt: 'Как противопоставить будни и выходные?', options: ['Hétköznap korán kelek, hétvégén viszont tovább alszom.', 'Hétköznap hétvégén mindig tegnap.', 'Hétvégéről korán kelek.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-16', prompt: 'Какой вопрос естественно задать собеседнику?', options: ['És te hogyan mész dolgozni?', 'És te hol dolgoztam?', 'És te mikor vagy tegnap?'], correctIndex: 0 },
  ],
};

const DAILY_ROUTINE_READING: LessonActivity = {
  kind: 'reading', id: 'l14-reading-daily-routine', title: 'Чтение: два разных будних дня',
  instructions: 'Сравни два распорядка: время, транспорт, работу/учёбу, частоту и вечерние занятия.', passCount: 6,
  content: { type: 'prose', title: 'Két különböző hétköznap', paragraphs: [
    'Anna hétköznap fél hétkor ébred fel. Gyorsan mosakodik, fogat mos és felöltözik, majd hét órakor reggelizik. Általában teát iszik és egy szendvicset eszik. Fél nyolckor busszal indul a munkahelyére. Az út húsz perc, ezért ritkán késik el. Nyolctól négyig egy irodában dolgozik. Délben a kollégáival ebédel, és ebéd után néha röviden sétál. Munka után gyakran bevásárol, kedden és csütörtökön pedig magyarórára megy. Este vacsorát készít, kicsit olvas, és fél tizenegykor lefekszik.',
    'Bence később kezdi a napot. Hét órakor kel fel, de otthon ritkán reggelizik. Csak egy kávét iszik, majd negyed nyolckor kerékpárral megy az egyetemre, ahol nyolc órától tanul. Délelőtt három órája van. Ebédet általában az egyetemi étteremben eszik a barátaival. Délután háromkor hazamegy, majd egy órát pihen. Hetente kétszer kosárlabdázik a barátaival, más napokon pedig a könyvtárban tanul. Este gyakran filmet néz vagy zenét hallgat, ezért csak éjfél körül fekszik le.',
    'Anna korábban kel és korábban fekszik le, mint Bence. Anna busszal jár, Bence pedig kerékpárral. Mindketten sokat dolgoznak vagy tanulnak, de másképp pihennek. Hétvégén egyiküknek sem kell korán kelnie: Anna a családjával találkozik, Bence pedig gyakran kirándul. Vasárnap este mindketten otthon készülnek a következő hétre, és időben összepakolják a táskájukat.',
  ] },
  questions: [
    { id: 'l14-reading-q1', question: 'Кто просыпается раньше?', options: ['Анна', 'Бенце', 'оба одновременно'], correctIndex: 0 },
    { id: 'l14-reading-q2', question: 'Что Анна обычно ест на завтрак?', options: ['бутерброд', 'суп', 'ничего'], correctIndex: 0 },
    { id: 'l14-reading-q3', question: 'Как Анна добирается на работу?', options: ['на велосипеде', 'на автобусе', 'пешком'], correctIndex: 1 },
    { id: 'l14-reading-q4', question: 'Где Бенце обычно обедает?', options: ['дома', 'в университетском ресторане', 'в офисе'], correctIndex: 1 },
    { id: 'l14-reading-q5', question: 'Что Бенце делает дважды в неделю?', options: ['ходит на венгерский', 'играет в баскетбол', 'делает покупки'], correctIndex: 1 },
    { id: 'l14-reading-q6', question: 'Кто ложится спать позже?', options: ['Анна', 'Бенце', 'не сказано'], correctIndex: 1 },
    { id: 'l14-reading-q7', question: 'Какое важное различие в транспорте?', options: ['Анна едет автобусом, Бенце — велосипедом', 'оба едут автобусом', 'Анна идёт пешком, Бенце едет поездом'], correctIndex: 0 },
    { id: 'l14-reading-q8', question: 'Какой вывод поддерживает текст?', options: ['их дни одинаковы', 'у обоих есть работа/учёба, но разный отдых', 'Бенце никогда не отдыхает'], correctIndex: 1 },
  ],
};

const ROUTINE_LISTENING: LessonActivity = {
  kind: 'listening', id: 'l14-listening-routine', title: 'Аудирование: распорядок Анны',
  assetId: 'l14_listening_routine', audioStatus: 'published',
  transcript: 'Anna reggel fél hétkor felébred. Hét órakor reggelizik. Nyolckor dolgozni megy. Délben ebédel. Este hatkor hazamegy, és tizenegykor lefekszik.',
  passCount: 4,
  questions: [
    { id: 'l14-listening-q1', question: 'Когда Анна просыпается?', options: ['fél hétkor', 'hét órakor', 'nyolckor'], correctIndex: 0 },
    { id: 'l14-listening-q2', question: 'Что она делает в семь?', options: ['reggelizik', 'ebédel', 'hazamegy'], correctIndex: 0 },
    { id: 'l14-listening-q3', question: 'Куда она идёт в восемь?', options: ['haza', 'dolgozni', 'aludni'], correctIndex: 1 },
    { id: 'l14-listening-q4', question: 'Когда она возвращается домой?', options: ['délben', 'este hatkor', 'tizenegykor'], correctIndex: 1 },
    { id: 'l14-listening-q5', question: 'Какое действие завершает распорядок?', options: ['felébred', 'reggelizik', 'lefekszik'], correctIndex: 2 },
  ],
};

const ROUTINE_ROLEPLAY: LessonActivity = {
  kind: 'rolePlay', id: 'l14-roleplay-routine-comparison', title: 'Ролевая игра: сравниваем распорядок', partnerLabel: 'Új kolléga', completionMessage: 'Összehasonlítottátok a napirendeteket.', startTurnId: 'l14-rp-s1',
  turns: [
    { id: 'l14-rp-s1', speaker: 'waiter', prompt: 'Szia! Mikor kelsz fel hétköznap?', next: 'l14-rp-l1' },
    { id: 'l14-rp-l1', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови время подъёма и задай встречный вопрос.', model: 'Hétköznap fél hétkor kelek fel. És te mikor kelsz?', next: 'l14-rp-s2' },
    { id: 'l14-rp-s2', speaker: 'waiter', prompt: 'Én hétkor kelek. Mit reggelizel általában?', next: 'l14-rp-l2' },
    { id: 'l14-rp-l2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Расскажи о завтраке.', model: 'Általában szendvicset eszem és teát iszom.', next: 'l14-rp-s3' },
    { id: 'l14-rp-s3', speaker: 'waiter', prompt: 'Értem. Mikor kezdődik a munkád vagy az iskolád?', next: 'l14-rp-l3' },
    { id: 'l14-rp-l3', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови время начала и транспорт.', model: 'Nyolckor kezdek, és busszal megyek dolgozni.', next: 'l14-rp-s4' },
    { id: 'l14-rp-s4', speaker: 'waiter', prompt: 'Én kerékpárral járok. És hol ebédelsz?', next: 'l14-rp-l4' },
    { id: 'l14-rp-l4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови место и время обеда, затем задай второй встречный вопрос.', model: 'Délben a kollégáimmal ebédelek. Te hol ebédelsz?', next: 'l14-rp-s5' },
    { id: 'l14-rp-s5', speaker: 'waiter', prompt: 'Általában az egyetemen ebédelek. Mit csinálsz munka után?', next: 'l14-rp-l5' },
    { id: 'l14-rp-l5', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Опиши действие после работы.', model: 'Munka után gyakran bevásárolok, aztán hazamegyek.', next: 'l14-rp-s6' },
    { id: 'l14-rp-s6', speaker: 'waiter', prompt: 'Értem. És mit csinálsz este?', next: 'l14-rp-l6' },
    { id: 'l14-rp-l6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Опиши вечер и частоту.', model: 'Este általában olvasok, de néha filmet nézek.', next: 'l14-rp-s7' },
    { id: 'l14-rp-s7', speaker: 'waiter', prompt: 'Hétvégén is ilyen a napod, vagy más?', next: 'l14-rp-l7' },
    { id: 'l14-rp-l7', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови отличие выходного дня.', model: 'Nem, hétvégén tovább alszom, ezért később reggelizem.', next: 'l14-rp-s8' },
    { id: 'l14-rp-s8', speaker: 'waiter', prompt: 'Értem. Mikor fekszel le hétköznap?', next: 'l14-rp-l8' },
    { id: 'l14-rp-l8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови время и вежливо заверши.', model: 'Általában fél tizenegykor fekszem le. Jó volt összehasonlítani a napunkat!', next: 'l14-rp-s9' },
    { id: 'l14-rp-s9', speaker: 'waiter', prompt: 'Szerintem is. Szia!' },
  ],
};

const DAILY_ROUTINE_WRITING: LessonActivity = {
  kind: 'writing', id: 'l14-writing-daily-routine', title: 'Письмо: мой распорядок дня',
  prompt: 'Напиши 90–110 слов о вымышленном обычном буднем дне. Укажи подъём, завтрак, время начала, дорогу, работу/учёбу, обед, вторую половину дня, вечер, выражения частоты и одно отличие от выходных.',
  modelAnswer: ['Hétköznap általában fél hétkor ébredek fel. Felkelek, mosakodom és gyorsan felöltözöm. Hét órakor reggelizem: szendvicset eszem és teát iszom. Fél nyolckor busszal indulok a munkahelyemre, mert nyolckor kezdek dolgozni. Az út körülbelül húsz perc, és ritkán kések el. Délben a kollégáimmal ebédelek. Délután négyig dolgozom, azután gyakran bevásárolok. Este otthon vacsorát készítek, majd magyarul tanulok vagy egy rövid könyvet is olvasok. Ritkán nézek tévét, de néha zenét hallgatok a szobámban. Tizenegy óra előtt lefekszem, mert reggel korán kelek. Hétvégén viszont tovább alszom, később reggelizem, és több időt töltök a barátaimmal.'],
  rubric: ['90–110 слов', 'полный будний распорядок', 'время и транспорт', 'выражения частоты', 'контраст с выходным', 'понятная последовательность'],
};

const DAILY_ROUTINE_SPEAKING = {
  title: 'Необязательная устная самопрактика',
  instructions: 'Говори около 2 минут о типичном буднем дне и сравни его с выходным. Это текстовая инструкция без микрофона, score и evidence.',
  prompt: 'Назови время, действия, транспорт, частоту, вечер и одно отличие выходного дня.',
  rubric: ['будний распорядок', 'время и частота', 'вечер', 'контраст с выходным'],
};

const EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck', id: 'l14-exit-check', title: 'Проверка целей урока 14', checks: [
    { objectiveId: 'l14_describe-routine', activityId: 'l14-reading-daily-routine', evidenceKind: 'reading', evidenceComponents: [{ activityId: 'l14-writing-daily-routine', evidenceKind: 'writing' }] },
    { objectiveId: 'l14_form-reflexive', activityId: 'l14-cp-routine-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l14_use-reflexive', activityId: 'l14-cp-routine-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l14_tell-routine-time', activityId: 'l14-listening-routine', evidenceKind: 'listening', evidenceComponents: [{ activityId: 'l14-roleplay-routine-comparison', evidenceKind: 'interaction' }] },
  ],
};

export const LESSON_14: Lesson = {
  id: 14, number: 14, level: 'A1',
  title: 'Урок 14 · Napi rutin',
  subtitle: 'Распорядок дня, частые -ik-глаголы и время',
  description: 'Интегрированный checkpoint конца A1: распорядок дня, время, частота, знакомая грамматика, Reading, Listening и открытая продукция без автоматической сертификации.',
  slidesCount: 11,
  slides: [
    { id: 1, eyebrow: 'УРОК 14 · 1/11 · A1 CHECKPOINT', title: 'Napi rutin', subtitle: 'Распорядок дня и знакомый класс -ik', body: `<p>Из L4 мы помним: форма на <b>-ik</b> в 3-м лице обозначает класс спряжения, а не автоматическое значение «делать с собой».</p><p><b>reggelizik, vacsorázik, eszik</b> — -ik-глаголы, но не возвратные действия. <b>mosakodik, fésülködik, felöltözik</b> по значению соответствуют некоторым русским глаголам с «-ся».</p><div class="note">Окончания -kodik/-kedik/-ködik не являются формулой создания новых глаголов. L14 проверяет интеграцию знакомого A1-языка и не выдаёт CEFR-сертификат.</div>` },
    { id: 2, eyebrow: 'УРОК 14 · 2/11 · СЛОВАРЬ', title: 'Napi cselekvések', subtitle: 'Действия от утра до вечера', body: `<div class="grid2"><div><p><b>felébred, felkel</b></p><p><b>mosakodik, fésülködik</b></p><p><b>felöltözik, fogat mos</b></p><p><b>reggelizik, eszik, iszik</b></p></div><div><p><b>dolgozik, tanul</b></p><p><b>ebédel, hazamegy</b></p><p><b>találkozik, vacsorázik</b></p><p><b>lefekszik, elalszik</b></p></div></div>` },
    { id: 3, eyebrow: 'УРОК 14 · 3/11 · ФОРМЫ И ВРЕМЯ', title: 'Mikor és milyen gyakran?', subtitle: 'Знакомые модели в связном дне', body: `<p>Стандартные формы курса: <b>mosakodom, felöltözöm, lefekszem, eszem</b>. Разговорные варианты некоторых -ik-глаголов не объявляются «невозможным венгерским».</p><p><b>Hét órakor reggelizem. Nyolcra megyek dolgozni. Délben ebédelek. Munka után hazamegyek.</b></p><p><b>általában, gyakran, néha, ritkán, hétvégén</b></p><div class="note"><b>öltözködik</b> остаётся дополнительным словом; в основных заданиях используется <b>felöltözik</b>.</div>` },
    { id: 4, eyebrow: 'УРОК 14 · 4/11 · LANGUAGE USE', title: 'Integrált A1 gyakorlat', subtitle: 'Не только -ik-спряжение', body: `<p>Шестнадцать контекстов соединяют действия дня, формы -ik-глаголов, время, частоту, винительный падеж и знакомые формы места.</p>`, activities: [ROUTINE_FORMS] },
    { id: 5, eyebrow: 'УРОК 14 · 5/11 · ЧТЕНИЕ', title: 'Két különböző hétköznap', subtitle: 'Сравнение двух распорядков', body: `<p>Понимание проверяется по деталям, хронологии, частоте, различиям и одному простому выводу.</p>`, activities: [DAILY_ROUTINE_READING] },
    { id: 6, eyebrow: 'УРОК 14 · 6/11 · АУДИРОВАНИЕ', title: 'Anna napirendje', subtitle: 'Существующая синхронизированная запись', body: `<p>Прослушай расписание Анны. Asset, транскрипт и вопросы сохранены без изменений.</p>`, activities: [ROUTINE_LISTENING] },
    { id: 7, eyebrow: 'УРОК 14 · 7/11 · ВЗАИМОДЕЙСТВИЕ', title: 'Milyen a napod?', subtitle: 'Сравнение распорядка с новым коллегой', body: `<p>Ответь о восьми частях дня и задай собеседнику минимум два встречных вопроса.</p>`, activities: [ROUTINE_ROLEPLAY] },
    { id: 8, eyebrow: 'УРОК 14 · 8/11 · ПИСЬМО', title: 'Az én hétköznapom', subtitle: 'Будний день и отличие выходного', body: `<p>Открытый текст остаётся PARTIAL до квалифицированной проверки.</p>`, activities: [DAILY_ROUTINE_WRITING] },
    { id: 9, eyebrow: 'УРОК 14 · 9/11 · УСТНАЯ САМОПРАКТИКА', title: 'Hétköznap és hétvégén', subtitle: 'Только текстовая инструкция', body: `<p>Самопрактика не использует микрофон, не оценивается и не создаёт evidence.</p>`, optionalSpeaking: DAILY_ROUTINE_SPEAKING },
    { id: 10, eyebrow: 'УРОК 14 · 10/11 · A1 CHECKPOINT MODEL', title: 'Mit igazolnak az eredmények?', subtitle: 'Доказательства, а не сертификат', body: `<ul class="tick"><li><b>Language Use</b>: DIRECT после порога Controlled Practice</li><li><b>Reading</b>: DIRECT после порога</li><li><b>Listening</b>: DIRECT после порога и успешной загрузки MP3</li><li><b>Writing</b>: PARTIAL</li><li><b>Interaction</b>: PARTIAL</li><li><b>Optional Speaking</b>: NO evidence</li></ul><div class="note">Прохождение Quiz или завершение урока не означает автоматически «A1 achieved» и не является CEFR-сертификацией.</div>` },
    { id: 11, eyebrow: 'УРОК 14 · 11/11 · ИТОГИ', title: 'Összefoglalás', subtitle: 'Честный итог конца A1', body: `<ul class="tick"><li>Распорядок, время и частота</li><li>Изученные -ik/routine-формы</li><li>Понимание расписания в тексте и аудио</li><li>Открытая продукция требует проверки</li></ul>`, activities: [EXIT_CHECK] },
  ],
  vocabulary: [
    { id: 'l14_v1', hu: 'napi rutin', ru: 'ежедневный распорядок', category: 'Тема урока' },
    { id: 'l14_v2', hu: 'felébred', ru: 'просыпаться', category: 'Глаголы дня' },
    { id: 'l14_v3', hu: 'felkel', ru: 'вставать', category: 'Глаголы дня' },
    { id: 'l14_v4', hu: 'mosakodik', ru: 'умываться / мыться', category: 'Глаголы дня' },
    { id: 'l14_v5', hu: 'fésülködik', ru: 'причёсываться', category: 'Глаголы дня' },
    { id: 'l14_v6', hu: 'felöltözik', ru: 'одеться / одеваться', category: 'Глаголы дня' },
    { id: 'l14_v7', hu: 'fogat mos', ru: 'чистить зубы', category: 'Глаголы дня' },
    { id: 'l14_v8', hu: 'reggelizik', ru: 'завтракать', category: 'Глаголы дня' },
    { id: 'l14_v9', hu: 'ebédel', ru: 'обедать', category: 'Глаголы дня' },
    { id: 'l14_v10', hu: 'vacsorázik', ru: 'ужинать', category: 'Глаголы дня' },
    { id: 'l14_v11', hu: 'hazamegy', ru: 'идти домой', category: 'Глаголы дня' },
    { id: 'l14_v12', hu: 'lefekszik', ru: 'ложиться спать', category: 'Глаголы дня' },
    { id: 'l14_v13', hu: 'elalszik', ru: 'засыпать', category: 'Глаголы дня' },
    { id: 'l14_v14', hu: 'eszik', ru: 'есть', category: 'Повторение -ik' },
  ],
  quiz: [
    { id: 1401, question: 'Какая стандартная форма курса означает «я умываюсь»?', options: ['mosakodom', 'mosakodik', 'mosakodsz', 'mosakodunk'], correctIndex: 0, explanation: 'Изученная форма: mosakodik → én mosakodom.' },
    { id: 1402, question: 'Какая стандартная форма курса означает «я ем»?', options: ['eszik', 'eszem', 'eszel', 'eszünk'], correctIndex: 1, explanation: 'Частый -ik-глагол имеет изученную форму eszik → eszem. Его значение не является возвратным.' },
    { id: 1403, question: 'Как сказать «Я просыпаюсь в семь часов»?', options: ['Hét órakor felébredek.', 'Hét órán felébredek.', 'Hét órában felébredek.', 'Hét órára felébredek.'], correctIndex: 0, explanation: 'Точное время действия выражается формой hét órakor; felébred → felébredek.' },
    { id: 1404, question: 'Как сказать «Утром я одеваюсь» стандартной формой курса?', options: ['Reggel felöltözik.', 'Reggel felöltözöm.', 'Reggel felöltözünk.', 'Reggel felöltözöl.'], correctIndex: 1, explanation: 'Для én используется изученная стандартная форма felöltözöm.' },
    { id: 1405, question: 'Как сказать «Я завтракаю в половине восьмого»?', options: ['Fél nyolckor reggelizem.', 'Fél nyolcban reggelizem.', 'Fél nyolcra ebédelek.', 'Nyolc félkor reggelizem.'], correctIndex: 0, explanation: 'По-венгерски 7:30 — fél nyolc; время действия получает -kor: fél nyolckor.' },
    { id: 1406, question: 'Как естественно сказать «Обычно я ложусь около полуночи»?', options: ['Általában éjfél körül fekszem le.', 'Általában éjfél körül fekszik le.', 'Általában éjfél körül kelek fel.', 'Éjfél körül reggelizem.'], correctIndex: 0, explanation: 'Простая модель настоящего времени: általában + время + fekszem le.' },
  ],
  objectives: [
    { id: 'l14_describe-routine', text: 'Описывать распорядок дня с временными выражениями.', skills: ['speaking', 'writing'] },
    { id: 'l14_form-reflexive', text: 'Правильно образовывать формы изученных возвратных/средних глаголов распорядка дня в настоящем времени.', skills: ['grammar', 'writing'] },
    { id: 'l14_use-reflexive', text: 'Употреблять изученные возвратные/средние глаголы распорядка дня в контексте настоящего времени.', skills: ['grammar', 'speaking'] },
    { id: 'l14_tell-routine-time', text: 'Сообщать, во сколько и что делает человек, используя время и действие.', skills: ['speaking', 'listening'] },
  ],
};
