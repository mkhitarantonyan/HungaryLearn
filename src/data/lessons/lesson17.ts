import { Lesson, LessonActivity } from '../../types';

const L17_CP: LessonActivity = {
  kind: 'controlledPractice', id: 'l17-cp-contextual-weather', title: 'Контекстная практика: погода и планы', passCount: 11,
  exercises: [
    { kind: 'singleChoice', id: 'l17-context-1', prompt: 'Az égen nincsenek felhők, és világos van.', options: ['Süt a nap.', 'Esik az eső.', 'Esik a hó.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l17-context-2', prompt: 'A fák erősen mozognak.', options: ['Erősen fúj a szél.', 'Meleg van.', 'Felhős az ég.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l17-context-3', prompt: 'Télen fehér lesz az utca.', options: ['Esik a hó.', 'Süt a nap.', 'Köd van.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l17-context-4', prompt: 'Mit jelent: „Tizenkét fok van”?', options: ['Температура +12 °C.', 'Сейчас 12 часов.', 'Идёт дождь 12 минут.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l17-context-5', prompt: 'Reggel mínusz két fok van. Milyen az idő?', options: ['Hideg van.', 'Meleg van.', 'Harminc fok van.'], correctIndex: 0 },
    { kind: 'fillGap', id: 'l17-context-6', prompt: '___ gyakran virágoznak a fák. (tavasz)', accept: ['Tavasszal', 'tavasszal'], explanation: 'tavasz → tavasszal.' },
    { kind: 'fillGap', id: 'l17-context-7', prompt: '___ gyakran nagyon meleg van. (nyár)', accept: ['Nyáron', 'nyáron'], explanation: 'nyár → nyáron.' },
    { kind: 'singleChoice', id: 'l17-context-8', prompt: 'Hideg van és fúj a szél. Mit veszel fel?', options: ['Kabátot és sapkát.', 'Fürdőruhát.', 'Szandált.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l17-context-9', prompt: 'Délután eső várható. Mit vigyél magaddal?', options: ['Esernyőt.', 'Napszemüveget.', 'Fürdőruhát.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l17-context-10', prompt: 'Mit jelent: „Holnap eső várható”?', options: ['Завтра ожидается дождь.', 'Вчера шёл дождь.', 'Сейчас снег.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l17-context-11', prompt: 'Délután erős szél várható. Melyik program praktikusabb?', options: ['Bent maradni.', 'Piknikezni a parkban.', 'Csónakázni.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l17-context-12', prompt: 'Fejezd be: Ha esik, ...', options: ['nem megyünk kirándulni.', 'süt a nap.', 'nyár van.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l17-context-13', prompt: 'Hideg van, ezért ...', options: ['kabátot veszek fel.', 'otthon hagyom a kabátot.', 'fagyit viszek.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l17-context-14', prompt: 'Szombaton esik, vasárnap napos és 18 fok lesz. Melyik nap jobb a kirándulásra?', options: ['Vasárnap.', 'Szombat.', 'Mindegy.'], correctIndex: 0 },
  ],
};

const L17_READING: LessonActivity = {
  kind: 'reading', id: 'l17-reading-weekend-weather', title: 'Hétvégi program az időjárás szerint', instructions: 'Прочитай прогноз и план семьи, затем ответь по смыслу.',
  content: { type: 'prose', paragraphs: [
    'Kata és a családja péntek este vidékre utazik a nagyszülőkhöz. Pénteken enyhe idő lesz: délután tizennyolc fok várható, és csak kevés felhő lesz az égen. Este már hűvösebb lesz, ezért Kata könnyű kabátot is visz magával. A gyerekek örülnek, hogy az utazás alatt nem várható eső. A család pénteken csak sétál egy rövidet a faluban, utána együtt vacsoráznak.',
    'Szombatra eredetileg hosszú kirándulást és pikniket terveztek az erdőben. A reggeli előrejelzés azonban egész napos esőt és délután erős szelet ígér. Reggel még tizenkét fok lesz, délután pedig csak kilenc. A nagypapa szerint ilyen időben az erdei út csúszós lehet. A szél miatt a piknik sem lenne kellemes vagy biztonságos. Ezért megváltoztatják a programot: délelőtt elmennek egy közeli múzeumba, délután pedig otthon társasjátékoznak. Kata azt tanácsolja mindenkinek, hogy vigyen esernyőt és vegyen fel vízálló cipőt.',
    'Vasárnapra szerencsére jelentősen javul az idő. Reggel még felhős lesz az ég, de délután kisüt a nap, és tizenhét fokig emelkedik a hőmérséklet. A család úgy dönt, hogy ebéd után egy rövidebb tóparti sétát tesz. Ha az utak addigra megszáradnak, biciklit is bérelnek. Végül mindenki örül, mert a rossz szombati idő ellenére lesz közös szabadtéri programjuk is.',
  ]}, passCount: 6,
  questions: [
    { id: 'l17-read-1', question: 'Milyen idő várható péntek délután?', options: ['Enyhe, körülbelül 18 fokos.', 'Esős és 9 fokos.', 'Havas és hideg.'], correctIndex: 0 },
    { id: 'l17-read-2', question: 'Mi volt az eredeti szombati terv?', options: ['Erdei kirándulás és piknik.', 'Múzeum és társasjáték.', 'Tóparti biciklizés.'], correctIndex: 0 },
    { id: 'l17-read-3', question: 'Mit mond a szombati előrejelzés?', options: ['Egész napos esőt és erős szelet.', 'Napos időt és 20 fokot.', 'Havazást.'], correctIndex: 0 },
    { id: 'l17-read-4', question: 'Miért változtatják meg a szombati programot?', options: ['Az erdei út csúszós lehet.', 'A múzeum zárva lesz.', 'Nem érkeznek meg a nagyszülők.'], correctIndex: 0 },
    { id: 'l17-read-5', question: 'Mi lesz a szombati helyettesítő program?', options: ['Múzeum, majd társasjáték.', 'Bevásárlás, majd mozi.', 'Egész napos biciklizés.'], correctIndex: 0 },
    { id: 'l17-read-6', question: 'Hogyan változik az idő vasárnap?', options: ['Délután kisüt a nap, és 17 fok lesz.', 'Délután erősebb lesz a vihar.', 'Egész nap havazni fog.'], correctIndex: 0 },
    { id: 'l17-read-7', question: 'Mit ajánl Kata a szombati időre?', options: ['Esernyőt és vízálló cipőt.', 'Fürdőruhát és szandált.', 'Csak napszemüveget.'], correctIndex: 0 },
    { id: 'l17-read-8', question: 'Melyik nap a legjobb hosszabb szabadtéri programra?', options: ['Vasárnap délután.', 'Szombat délután.', 'Szombat reggel.'], correctIndex: 0 },
  ],
};

const L17_LISTENING: LessonActivity = {
  kind: 'listening', id: 'l17-listening-weather', title: 'Аудирование: короткий прогноз', assetId: 'l17_listening_weather', audioStatus: 'published', passCount: 4,
  transcript: 'Időjárás-jelentés. Ma Budapesten felhős az ég, tizenöt fok van. Délután esik az eső, este fúj a szél. Holnap napos idő lesz, húsz fok lesz.',
  questions: [
    { id: 'l17-list-1', question: 'Melyik városról szól az előrejelzés?', options: ['Budapestről', 'Bécsről', 'Szegedről'], correctIndex: 0 },
    { id: 'l17-list-2', question: 'Milyen ma az ég?', options: ['Felhős', 'Napos', 'Havas'], correctIndex: 0 },
    { id: 'l17-list-3', question: 'Hány fok van ma?', options: ['10', '15', '20'], correctIndex: 1 },
    { id: 'l17-list-4', question: 'Mi történik délután?', options: ['Esik az eső', 'Havazik', 'Süt a nap'], correctIndex: 0 },
    { id: 'l17-list-5', question: 'Milyen idő lesz holnap?', options: ['Napos', 'Felhős és esős', 'Havas'], correctIndex: 0 },
  ],
};

const L17_ROLEPLAY: LessonActivity = {
  kind: 'rolePlay', id: 'l17-roleplay-weather-plan', title: 'Ролевая игра: меняем субботний план', partnerLabel: 'Barát', completionMessage: 'Megbeszéltétek a hétvégi programot.', startTurnId: 'l17-rp-f1',
  turns: [
    { id: 'l17-rp-f1', speaker: 'waiter', prompt: 'Mit szólsz hozzá? Szombaton piknikezzünk a parkban!', next: 'l17-rp-l1' },
    { id: 'l17-rp-l1', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Согласись с исходной идеей и уточни время.', model: 'Jó ötlet! Mikor találkozzunk?', next: 'l17-rp-f2' },
    { id: 'l17-rp-f2', speaker: 'waiter', prompt: 'Tizenegykor jó lenne. Viszont most azt olvasom, hogy délután eső és erős szél várható.', next: 'l17-rp-l2' },
    { id: 'l17-rp-l2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Отреагируй и спроси о температуре.', model: 'Jaj, akkor a piknik nem jó ötlet. Hány fok lesz?', next: 'l17-rp-f3' },
    { id: 'l17-rp-f3', speaker: 'waiter', prompt: 'Csak tíz fok, és délelőtt is felhős lesz.', next: 'l17-rp-l3' },
    { id: 'l17-rp-l3', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Предложи indoor-альтернативу.', model: 'Ha esik, inkább menjünk moziba vagy egy kávézóba.', next: 'l17-rp-f4' },
    { id: 'l17-rp-f4', speaker: 'waiter', prompt: 'A mozi jó ötlet. Egyébként vasárnap napos és tizennyolc fok lesz, úgyhogy a sétát áttehetjük vasárnapra.', next: 'l17-rp-l4' },
    { id: 'l17-rp-l4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Сравни субботу и воскресенье.', model: 'Vasárnap jobb lesz a szabadtéri programhoz, mert melegebb és naposabb lesz.', next: 'l17-rp-f5' },
    { id: 'l17-rp-f5', speaker: 'waiter', prompt: 'Akkor legyen szombaton mozi, vasárnap pedig séta?', next: 'l17-rp-l5' },
    { id: 'l17-rp-l5', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Согласуй окончательный план.', model: 'Igen, szerintem ez jó megoldás.', next: 'l17-rp-f6' },
    { id: 'l17-rp-f6', speaker: 'waiter', prompt: 'Rendben. Hol és mikor találkozzunk szombaton?', next: 'l17-rp-l6' },
    { id: 'l17-rp-l6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Подтверди место и время.', model: 'Találkozzunk fél háromkor a mozi előtt.', next: 'l17-rp-f7' },
    { id: 'l17-rp-f7', speaker: 'waiter', prompt: 'Szuper, akkor ott találkozunk!', next: 'l17-rp-l7' },
    { id: 'l17-rp-l7', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Заверши разговор.', model: 'Szuper, akkor szombaton találkozunk. Szia!', next: 'l17-rp-f8' },
    { id: 'l17-rp-f8', speaker: 'waiter', prompt: 'Szia, akkor szombaton!' },
  ],
};

const L17_WRITING: LessonActivity = {
  kind: 'writing', id: 'l17-writing-weekend-plan', title: 'Письмо: погода и планы на выходные',
  prompt: 'Напиши другу 90–110 слов. Укажи прогноз, температуру, исходный план, возможное изменение и его причину, альтернативу, рекомендацию по одежде или нужной вещи и закончи конкретным предложением или вопросом.',
  modelAnswer: ['Szia, Bence! Szombaton eredetileg kirándulni szeretnénk, de az előrejelzés szerint délután esni fog, és erős szél várható. Csak tíz fok lesz, ezért lehet, hogy meg kell változtatnunk a programot. Ha rossz idő lesz, menjünk inkább a városi múzeumba, utána pedig igyunk egy kávét. Hozz magaddal esernyőt, és vegyél fel meleg, vízálló kabátot. Vasárnap már naposabb és melegebb időt mondanak, ezért akkor sétálhatnánk a parkban. Ha valóban kisüt a nap, délután együtt sétálhatnánk egy kellemes órát a közeli tó körül. Mit gondolsz? Találkozzunk szombaton tízkor az állomásnál? Írj, hogy neked jó-e!'],
  rubric: ['90–110 слов', 'прогноз и температура', 'исходный план и причина изменения', 'альтернатива', 'практическая рекомендация', 'финальное предложение или вопрос'],
};

const L17_SPEAKING = { title: 'Необязательная устная самопрактика', instructions: 'Говори около 2 минут. Это текстовая инструкция без микрофона, score и evidence.', prompt: 'Расскажи о любимом сезоне, типичной погоде, одежде и занятиях. Добавь один случай, когда погода меняет твои планы.', rubric: ['любимый сезон', 'погода и одежда', 'занятия', 'изменение плана из-за погоды'] };

const L17_EXIT: LessonActivity = { kind: 'exitCheck', id: 'l17-exit-check', title: 'Проверка целей урока', checks: [
  { objectiveId: 'l17_describe-weather', activityId: 'l17-cp-contextual-weather', evidenceKind: 'grammar', evidenceComponents: [{ activityId: 'l17-roleplay-weather-plan', evidenceKind: 'interaction' }] },
  { objectiveId: 'l17_name-seasons', activityId: 'l17-cp-contextual-weather', evidenceKind: 'reading' },
  { objectiveId: 'l17_use-seasonal-adverbials', activityId: 'l17-cp-contextual-weather', evidenceKind: 'grammar' },
  { objectiveId: 'l17_compare-seasons', activityId: 'l17-writing-weekend-plan', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l17-roleplay-weather-plan', evidenceKind: 'interaction' }] },
  { objectiveId: 'l17_understand-forecast', activityId: 'l17-listening-weather', evidenceKind: 'listening', evidenceComponents: [{ activityId: 'l17-reading-weekend-weather', evidenceKind: 'reading' }] },
] };

export const LESSON_17: Lesson = {
  id: 17, number: 17, level: 'A2', title: 'Урок 17 · Időjárás és évszakok', subtitle: 'Погода, сезоны и практические планы', description: 'Описание погоды и температуры, сезоны, понимание прогноза и изменение практического плана из-за погодных условий.', slidesCount: 11,
  slides: [
    { id: 1, eyebrow: 'УРОК 17 · 1/11 · CAN-DO', title: 'Milyen az idő?', subtitle: 'Погода как часть реального плана', body: `<p>После урока ты сможешь понять простой прогноз, описать погоду, подобрать одежду или занятие и изменить план с понятной причиной.</p><p><b>Süt a nap. Fúj a szél. Esik az eső. Esik a hó. Felhős az ég.</b></p>` },
    { id: 2, eyebrow: 'УРОК 17 · 2/11 · ТЕМПЕРАТУРА', title: 'Hány fok van?', subtitle: 'Текущая температура', body: `<p><b>Tíz fok van. Mínusz két fok van. Meleg van. Hideg van.</b></p><div class="note">В Meleg van / Hideg van слово van нужно. Сравни: Az idő meleg — здесь отдельной связки в настоящем времени нет.</div>` },
    { id: 3, eyebrow: 'УРОК 17 · 3/11 · СЕЗОНЫ', title: 'Évszakok', subtitle: 'Когда и какая погода', body: `<p><b>tavasz, nyár, ősz, tél</b></p><p>Частотные формы времени: <b>tavasszal, nyáron, ősszel, télen</b>. Tavasszal и ősszel повторяют ассимиляцию -val/-vel из L16.</p><p>Nyáron melegebb az idő, mint télen. Télen gyakran havazik.</p>` },
    { id: 4, eyebrow: 'УРОК 17 · 4/11 · ПРОГНОЗ', title: 'Időjárás és praktikus reakció', subtitle: '14 контекстных ситуаций', activities: [L17_CP], body: `<p><b>Holnap eső várható. Délután erős szél várható. Vigyél esernyőt! Vegyél fel kabátot!</b></p><p><b>Ha esik, nem megyünk kirándulni. Hideg van, ezért kabátot veszek fel.</b></p><div class="note">Будущее здесь служит пониманию прогноза; системно оно изучается в L19.</div>` },
    { id: 5, eyebrow: 'УРОК 17 · 5/11 · ЧТЕНИЕ', title: 'Hétvégi program az időjárás szerint', subtitle: 'Прогноз меняет планы', activities: [L17_READING], body: `<p>Сравни погоду в пятницу, субботу и воскресенье. Следи за температурой, причиной изменения и окончательным решением семьи.</p>` },
    { id: 6, eyebrow: 'УРОК 17 · 6/11 · АУДИРОВАНИЕ', title: 'Rövid időjárás-jelentés', subtitle: 'Место, время и детали прогноза', activities: [L17_LISTENING], body: `<p>Существующая запись проверяет место, облачность, температуру, дождь, ветер и погоду следующего дня.</p>` },
    { id: 7, eyebrow: 'УРОК 17 · 7/11 · ROLEPLAY', title: 'Mit csináljunk szombaton?', subtitle: 'Меняем план из-за прогноза', activities: [L17_ROLEPLAY], body: `<p>Уточни температуру и время, предложи indoor-вариант, сравни дни и согласуй окончательное место и время.</p><div class="note">RolePlay остаётся PARTIAL.</div>` },
    { id: 8, eyebrow: 'УРОК 17 · 8/11 · ПИСЬМО', title: 'Hétvégi terv egy barátnak', subtitle: 'Прогноз → причина → альтернатива', activities: [L17_WRITING], body: `<p>Напиши 90–110 слов о погоде, исходном плане, возможном изменении, альтернативе и практической рекомендации.</p>` },
    { id: 9, eyebrow: 'УРОК 17 · 9/11 · SPEAKING PRACTICE', title: 'A kedvenc évszakom', subtitle: 'Необязательная практика без записи', optionalSpeaking: L17_SPEAKING, body: `<p>Свяжи сезон, типичную погоду, одежду, занятия и один случай изменения планов.</p>` },
    { id: 10, eyebrow: 'УРОК 17 · 10/11 · ФУНКЦИОНАЛЬНЫЕ ФРАЗЫ', title: 'Időjárás → döntés', subtitle: 'От погоды к решению', body: `<ul class="tick"><li>Milyen idő van? Hány fok van?</li><li>Holnap eső várható.</li><li>Vigyél esernyőt! Vegyél fel kabátot!</li><li>Ha esik, inkább bent maradunk.</li><li>Rossz idő lesz, ezért megváltoztatjuk a programot.</li></ul>` },
    { id: 11, eyebrow: 'УРОК 17 · 11/11 · ИТОГ', title: 'Összefoglalás', subtitle: 'Честная проверка целей', activities: [L17_EXIT], body: `<p>Контекстная практика, Reading и опубликованный Listening могут дать DIRECT после порога. Writing и RolePlay остаются PARTIAL; speaking practice не создаёт evidence.</p>` },
  ],
  vocabulary: [
    { id: 'l17_v1', hu: 'tavasz', ru: 'весна', category: 'Времена года', exampleSentence: 'Tavasszal gyakran esik az eső.' }, { id: 'l17_v2', hu: 'nyár', ru: 'лето', category: 'Времена года', exampleSentence: 'Nyáron meleg van.' }, { id: 'l17_v3', hu: 'ősz', ru: 'осень', category: 'Времена года', exampleSentence: 'Ősszel hidegebb az idő, mint nyáron.' }, { id: 'l17_v4', hu: 'tél', ru: 'зима', category: 'Времена года', exampleSentence: 'Télen hideg van.' },
    { id: 'l17_v5', hu: 'eső', ru: 'дождь', category: 'Погода', exampleSentence: 'Esik az eső.' }, { id: 'l17_v6', hu: 'szél', ru: 'ветер', category: 'Погода', exampleSentence: 'Fúj a szél.' }, { id: 'l17_v7', hu: 'havazik', ru: 'идёт снег', category: 'Погода', exampleSentence: 'Télen gyakran havazik.' }, { id: 'l17_v8', hu: 'fok', ru: 'градус', category: 'Температура', exampleSentence: 'Húsz fok van.' },
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
    { id: 'l17_describe-weather', text: 'Описывать текущую погоду, температуру и практическую реакцию.', skills: ['speaking', 'writing', 'grammar'] },
    { id: 'l17_name-seasons', text: 'Называть времена года и понимать типичную сезонную погоду.', skills: ['speaking', 'reading'] },
    { id: 'l17_use-seasonal-adverbials', text: 'Употреблять tavasszal, nyáron, ősszel, télen в контексте.', skills: ['grammar', 'writing'] },
    { id: 'l17_compare-seasons', text: 'Сравнивать погодные условия и менять план по понятной причине.', skills: ['speaking', 'writing', 'interaction'] },
    { id: 'l17_understand-forecast', text: 'Понимать ключевые детали простого прогноза погоды.', skills: ['listening', 'reading'] },
  ],
};
