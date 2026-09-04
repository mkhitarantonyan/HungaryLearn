import type { Lesson, LessonActivity } from '../../types';

const NEAR_MEANINGS: LessonActivity = {
  kind: 'controlledPractice', id: 'l12-cp-near-meanings', title: 'Контекстная практика: транспорт и маршрут', passCount: 11,
  exercises: [
    ['Ты уже у врача. Что скажешь?', ['Az orvosnál vagyok.', 'Az orvoshoz megyek.', 'Az orvostól jövök.'], 0],
    ['Ты направляешься к Анне.', ['Annánál vagyok.', 'Annához megyek.', 'Annától jövök.'], 1],
    ['Ты возвращаешься от Петера.', ['Péternél vagyok.', 'Péterhez megyek.', 'Pétertől jövök.'], 2],
    ['Как спросить дорогу к библиотеке?', ['Hogyan jutok el a könyvtárhoz?', 'Hol jövök a könyvtártól?', 'Kinél van a könyvtár?'], 0],
    ['Ты спрашиваешь, где остановка.', ['Hol van a megálló?', 'Hová van a megálló?', 'Honnan a megálló?'], 0],
    ['Какой транспорт выбрать?', ['Melyik busszal menjek?', 'Melyik busznál vagyok?', 'Melyik busztól jövök?'], 0],
    ['Инструкция: сядьте на автобус.', ['Szálljon fel a buszra.', 'Szálljon le a buszról.', 'Forduljon balra.'], 0],
    ['Инструкция: выйдите на следующей остановке.', ['Szálljon fel a következő megállónál.', 'Szálljon le a következő megállónál.', 'Menjen a megállótól.'], 1],
    ['Нужно ли делать пересадку?', ['Át kell szállni?', 'Hol kell állni?', 'Kihez kell menni?'], 0],
    ['Уточни, где выходить.', ['Hol kell leszállnom?', 'Honnan kell felszállnom?', 'Kinél kell lennem?'], 0],
    ['После остановки нужно идти прямо.', ['A megállótól menjen egyenesen.', 'A megállóhoz szálljon fel.', 'A megállónál forduljon vissza busszal.'], 0],
    ['Остановка находится перед аптекой.', ['A megálló a gyógyszertár előtt van.', 'A megálló a gyógyszertárhoz megy.', 'A megálló a gyógyszertártól jön.'], 0],
    ['Ты не понял и просишь повторить.', ['Elnézést, még egyszer, kérem.', 'Köszönöm, nem kell.', 'Jól van a megálló.'], 0],
    ['Проверь, правильно ли понял конечное направление.', ['Jól értem, hogy a banknál jobbra fordulok?', 'Hol értem a bankot?', 'A banktól értem.'], 0],
  ].map(([prompt, options, correctIndex], index) => ({ kind: 'singleChoice' as const, id: `l12-meaning-${index + 1}`, prompt: prompt as string, options: options as string[], correctIndex: correctIndex as number })),
};

const READING: LessonActivity = {
  kind: 'reading', id: 'l12-reading-library-route', title: 'Чтение: дорога в библиотеку', passCount: 6,
  instructions: 'Прочитай маршрут Анны и ответь по смыслу: транспорт, последовательность, ошибка и исправление.',
  content: { type: 'prose', title: 'Hogyan jut el Anna a könyvtárba?', paragraphs: [
    'Anna délelőtt a Nyugati pályaudvarnál van. Egy új könyvtárhoz szeretne eljutni, mert egy magyar könyvet keres a tanfolyamához. Nem ismeri ezt a városrészt. Az információs pultnál megkérdezi, melyik busszal menjen. Az ügyintéző azt mondja, hogy szálljon fel a 9-es buszra, és a negyedik megállónál szálljon le. Átszállni nem kell.',
    'Anna felszáll a buszra, de úgy érti, hogy a harmadik megállónál kell leszállnia. Ott nem lát könyvtárat, csak egy nagy gyógyszertárat. Megnézi a címet a telefonján, és látja, hogy rossz helyen van. Megkérdez egy nőt: „Elnézést, hol van a könyvtár?” A nő elmagyarázza, hogy Anna egy megállóval korábban szállt le. A könyvtár a következő megállónál van.',
    'Anna újra buszra száll, és most jó helyen száll le. A megállótól egyenesen megy, a második utcánál balra fordul. Elmegy egy pékség mellett, majd meglát egy kis parkot. A könyvtár a parknál, a posta előtt van. Anna még egyszer ellenőrzi a címet, azután bemegy az épületbe. Örül, hogy végül megtalálta a helyes utat, és még időben érkezett.',
  ] },
  questions: [
    { id: 'l12-reading-q1', question: 'Где Анна находится в начале?', options: ['у вокзала Ньюгати', 'у библиотеки', 'у почты'], correctIndex: 0 },
    { id: 'l12-reading-q2', question: 'На каком транспорте она едет?', options: ['на метро', 'на автобусе 9', 'на трамвае'], correctIndex: 1 },
    { id: 'l12-reading-q3', question: 'На какой остановке ей нужно выйти?', options: ['на третьей', 'на четвёртой', 'на пятой'], correctIndex: 1 },
    { id: 'l12-reading-q4', question: 'Какую ошибку совершает Анна?', options: ['садится не в тот автобус', 'выходит на остановку раньше', 'поворачивает направо'], correctIndex: 1 },
    { id: 'l12-reading-q5', question: 'Что она видит после ошибочного выхода?', options: ['аптеку', 'библиотеку', 'пекарню'], correctIndex: 0 },
    { id: 'l12-reading-q6', question: 'Как исправляется маршрут?', options: ['она идёт обратно к вокзалу', 'садится снова и едет ещё одну остановку', 'берёт такси'], correctIndex: 1 },
    { id: 'l12-reading-q7', question: 'Какой ориентир находится перед библиотекой?', options: ['рынок', 'почта', 'вокзал'], correctIndex: 1 },
    { id: 'l12-reading-q8', question: 'Какова последняя часть маршрута?', options: ['прямо, затем налево у второй улицы', 'направо у первой улицы', 'только одна остановка пешком'], correctIndex: 0 },
  ],
};

const LISTENING: LessonActivity = {
  kind: 'listening', id: 'l12-listening-near-locations', title: 'Аудирование: у кого, к кому, от кого?',
  assetId: 'l12_listening_near_locations', audioStatus: 'published', passCount: 4,
  transcript: 'Anna Péterhez megy. Péter most az orvosnál van. Az orvostól jön, utána Annához megy egy könyvért.',
  questions: [
    { id: 'l12-listening-q1', question: 'К кому идёт Анна?', options: ['Péterhez', 'az orvoshoz', 'a testvéréhez'], correctIndex: 0 },
    { id: 'l12-listening-q2', question: 'Где сейчас Петер?', options: ['Annánál', 'az orvosnál', 'otthon'], correctIndex: 1 },
    { id: 'l12-listening-q3', question: 'Откуда он идёт?', options: ['az orvostól', 'Pétertől', 'Annától'], correctIndex: 0 },
    { id: 'l12-listening-q4', question: 'К кому он идёт после врача?', options: ['az orvoshoz', 'Annához', 'Péterhez'], correctIndex: 1 },
    { id: 'l12-listening-q5', question: 'Какие отношения звучат?', options: ['только Hol?', 'Hová?, Hol? и Honnan?', 'только Honnan?'], correctIndex: 1 },
  ],
};

const ROLEPLAY: LessonActivity = {
  kind: 'rolePlay', id: 'l12-roleplay-public-route', title: 'Ролевая игра: как доехать до библиотеки', partnerLabel: 'Információ', completionMessage: 'Sikerült pontosítani az útvonalat.', startTurnId: 'l12-rp-s1',
  turns: [
    { id: 'l12-rp-s1', speaker: 'waiter', prompt: 'Jó napot kívánok! Segíthetek?', next: 'l12-rp-l1' },
    { id: 'l12-rp-l1', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Спроси, как добраться до библиотеки.', model: 'Jó napot! Hogyan jutok el a könyvtárhoz?', next: 'l12-rp-s2' },
    { id: 'l12-rp-s2', speaker: 'waiter', prompt: 'Persze. Menjen a 9-es busszal.', next: 'l12-rp-l2' },
    { id: 'l12-rp-l2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Спроси, где находится автобусная остановка.', model: 'Hol van a buszmegálló?', next: 'l12-rp-s3' },
    { id: 'l12-rp-s3', speaker: 'waiter', prompt: 'A megálló a gyógyszertár előtt van. Ott szálljon fel a 9-es buszra.', next: 'l12-rp-l3' },
    { id: 'l12-rp-l3', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Спроси, где выходить.', model: 'Hol kell leszállnom?', next: 'l12-rp-s4' },
    { id: 'l12-rp-s4', speaker: 'waiter', prompt: 'A negyedik megállónál szálljon le.', next: 'l12-rp-l4' },
    { id: 'l12-rp-l4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Покажи непонимание и попроси повторить.', model: 'Elnézést, nem értettem. A harmadik megállónál? Még egyszer, kérem.', next: 'l12-rp-s5' },
    { id: 'l12-rp-s5', speaker: 'waiter', prompt: 'A negyedik megállónál, nem a harmadiknál. Ott kell leszállnia.', next: 'l12-rp-l5' },
    { id: 'l12-rp-l5', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Подтверди исправленную остановку и спроси об ориентире.', model: 'Jól értem, hogy a negyedik megállónál szállok le? Mit látok ott?', next: 'l12-rp-s6' },
    { id: 'l12-rp-s6', speaker: 'waiter', prompt: 'Igen, pontosan. Ott lát majd egy pékséget.', next: 'l12-rp-l6' },
    { id: 'l12-rp-l6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Спроси о последнем пешем отрезке.', model: 'És a pékségtől merre menjek?', next: 'l12-rp-s7' },
    { id: 'l12-rp-s7', speaker: 'waiter', prompt: 'A pékségtől menjen egyenesen, majd a második utcánál forduljon balra. A könyvtár a parknál van.', next: 'l12-rp-l7' },
    { id: 'l12-rp-l7', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Повтори финальную часть маршрута.', model: 'Tehát a pékségtől egyenesen megyek, majd balra fordulok, és a parknál keresem a könyvtárat.', next: 'l12-rp-s8' },
    { id: 'l12-rp-s8', speaker: 'waiter', prompt: 'Pontosan, így van.', next: 'l12-rp-l8' },
    { id: 'l12-rp-l8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Поблагодари и заверши разговор.', model: 'Köszönöm szépen a segítséget. Viszontlátásra!', next: 'l12-rp-s9' },
    { id: 'l12-rp-s9', speaker: 'waiter', prompt: 'Nagyon szívesen. Viszontlátásra!' },
  ],
};

const WRITING: LessonActivity = {
  kind: 'writing', id: 'l12-writing-near-exchange', title: 'Письмо: простой маршрут',
  prompt: 'Напиши 70–90 слов с маршрутом от вымышленной начальной точки до нужного места. Укажи транспорт, остановку, где выйти, два пеших указания, ориентир и конечное местоположение.',
  modelAnswer: ['A pályaudvartól a városi múzeumhoz a 7-es busszal lehet eljutni. A buszmegálló a pályaudvar előtt van. Szálljon fel a 7-es buszra, és az ötödik megállónál szálljon le. Ott lát egy nagy bankot. A banktól menjen egyenesen, majd az első utcánál forduljon jobbra. Menjen el egy pékség mellett. A múzeum a kis parknál, a posta mellett van. Ha a könyvtárhoz érkezik, túl messz ment. Az út körülbelül húsz perc, és átszállni nem kell.'],
  rubric: ['70–90 слов', 'транспорт и остановка', 'место выхода', 'два пеших указания', 'ориентир и конечное местоположение'],
};

const SPEAKING = {
  title: 'Необязательная устная самопрактика',
  instructions: 'Говори около 1.5 минуты о дороге от дома или станции до знакомого места. Это текстовая инструкция без микрофона, score и evidence.',
  prompt: 'Назови транспорт, остановку, место выхода, пешую часть и ориентир.',
  rubric: ['транспорт', 'остановка', 'пешая часть', 'ориентир'],
};

const EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck', id: 'l12-exit-check', title: 'Проверка целей урока 12', checks: [
    { objectiveId: 'l12_distinguish-near-cases', activityId: 'l12-cp-near-meanings', evidenceKind: 'grammar' },
    { objectiveId: 'l12_form-adessive', activityId: 'l12-cp-near-meanings', evidenceKind: 'grammar' },
    { objectiveId: 'l12_form-allative', activityId: 'l12-cp-near-meanings', evidenceKind: 'grammar' },
    { objectiveId: 'l12_form-ablative', activityId: 'l12-cp-near-meanings', evidenceKind: 'grammar' },
    { objectiveId: 'l12_use-near-cases', activityId: 'l12-reading-library-route', evidenceKind: 'reading', evidenceComponents: [{ activityId: 'l12-listening-near-locations', evidenceKind: 'listening' }, { activityId: 'l12-roleplay-public-route', evidenceKind: 'interaction' }, { activityId: 'l12-writing-near-exchange', evidenceKind: 'writing' }] },
  ],
};

export const LESSON_12: Lesson = {
  id: 12, number: 12, level: 'A1', title: 'Урок 12 · Helyhatározók III',
  subtitle: 'Hol? Hová? Honnan? — формы у/к/от',
  description: 'Интеграция форм -nál/-nél, -hoz/-hez/-höz и -tól/-től с транспортом, остановками, простыми маршрутами и восстановлением понимания.',
  slidesCount: 11,
  slides: [
    { id: 1, eyebrow: 'УРОК 12 · 1/11 · СИСТЕМА', title: 'Hol? Hová? Honnan?', subtitle: 'У, к и от человека или объекта', body: `<p><b>Hol?</b> — <b>Annánál vagyok.</b> <b>Hová?</b> — <b>Péterhez megyek.</b> <b>Honnan?</b> — <b>Az orvostól jövök.</b></p><div class="note">L12 сохраняет точную семью -nál/-nél, -hoz/-hez/-höz, -tól/-től и соединяет её с уже знакомыми формами места из L10–L11.</div>` },
    { id: 2, eyebrow: 'УРОК 12 · 2/11 · ФОРМЫ', title: '-nál/-nél · -hoz/-hez/-höz · -tól/-től', subtitle: 'Три отношения как связанные модели', body: `<table class="conj"><tr><th></th><th>Hol?</th><th>Hová?</th><th>Honnan?</th></tr><tr><td>orvos</td><td>orvosnál</td><td>orvoshoz</td><td>orvostól</td></tr><tr><td>Péter</td><td>Péternél</td><td>Péterhez</td><td>Pétertől</td></tr><tr><td>Anna</td><td>Annánál</td><td>Annához</td><td>Annától</td></tr></table><div class="note"><b>testvér</b> означает брат или сестра. Формы выбираются по гармонии гласных и учатся в частых сочетаниях.</div>` },
    { id: 3, eyebrow: 'УРОК 12 · 3/11 · ИНТЕГРАЦИЯ', title: 'Három gyakori helycsalád', subtitle: 'Знакомые системы работают вместе', body: `<table class="conj"><tr><th>Отношение</th><th>Hol?</th><th>Hová?</th><th>Honnan?</th></tr><tr><td>внутри</td><td>-ban/-ben</td><td>-ba/-be</td><td>-ból/-ből</td></tr><tr><td>поверхность/место</td><td>-n/-on/-en/-ön</td><td>-ra/-re</td><td>-ról/-ről</td></tr><tr><td>у / к / от</td><td>-nál/-nél</td><td>-hoz/-hez/-höz</td><td>-tól/-től</td></tr></table><p>Дополнительное распознавание: <b>nálam, hozzám, tőlem</b>. Это учебная модель, а не полное описание пространства.</p>` },
    { id: 4, eyebrow: 'УРОК 12 · 4/11 · ФУНКЦИОНАЛЬНЫЙ ЯЗЫК', title: 'Hogyan jutok el...?', subtitle: 'Транспорт, остановка и уточнение', body: `<div class="grid2"><div><p><b>Hol van a megálló?</b></p><p><b>Melyik busszal menjek?</b></p><p><b>Hol kell leszállnom?</b></p><p><b>Át kell szállni?</b></p></div><div><p><b>Menjen egyenesen.</b></p><p><b>Forduljon jobbra/balra.</b></p><p><b>Elnézést, még egyszer, kérem.</b></p><p><b>Jól értem, hogy...?</b></p></div></div><div class="note">Императивные формы здесь используются как готовые маршрутные chunks; систематическое образование императива относится к L22.</div>` },
    { id: 5, eyebrow: 'УРОК 12 · 5/11 · КОНТРОЛИРУЕМАЯ ПРАКТИКА', title: 'Közlekedés és útvonal', subtitle: 'От формы к практическому маршруту', body: `<p>Четырнадцать ситуаций охватывают выбор транспорта, направление, местонахождение, посадку, выход, пересадку и восстановление понимания.</p>`, activities: [NEAR_MEANINGS] },
    { id: 6, eyebrow: 'УРОК 12 · 6/11 · ЧТЕНИЕ', title: 'Hogyan jut el Anna a könyvtárba?', subtitle: 'Ошибка и исправленный маршрут', body: `<p>Следи за транспортом, остановками, ориентиром и тем, как Анна исправляет ошибку.</p>`, activities: [READING] },
    { id: 7, eyebrow: 'УРОК 12 · 7/11 · АУДИРОВАНИЕ', title: 'Kihez? Kinél? Kitől?', subtitle: 'Существующая синхронизированная запись', body: `<p>Запись сохраняет короткую проверку базовой семьи у/к/от. Транскрипт и вопросы не изменены.</p>`, activities: [LISTENING] },
    { id: 8, eyebrow: 'УРОК 12 · 8/11 · ВЗАИМОДЕЙСТВИЕ', title: 'Útbaigazítás', subtitle: 'Маршрут с одной ошибкой понимания', body: `<p>Спроси дорогу, транспорт и место выхода, попроси повторить и подтверди исправленный маршрут.</p>`, activities: [ROLEPLAY] },
    { id: 9, eyebrow: 'УРОК 12 · 9/11 · ПИСЬМО', title: 'Írj egy útvonalat!', subtitle: 'Связные указания от старта до цели', body: `<p>Открытый маршрут остаётся PARTIAL до квалифицированной проверки.</p>`, activities: [WRITING] },
    { id: 10, eyebrow: 'УРОК 12 · 10/11 · УСТНАЯ САМОПРАКТИКА', title: 'Ismerős útvonal', subtitle: 'Только текстовая инструкция', body: `<p>По желанию объясни знакомую дорогу. Упражнение не использует микрофон и не создаёт evidence.</p>`, optionalSpeaking: SPEAKING },
    { id: 11, eyebrow: 'УРОК 12 · 11/11 · ИТОГИ', title: 'Összefoglalás', subtitle: 'Формы работают внутри маршрута', body: `<ul class="tick"><li>Hol? — -nál/-nél</li><li>Hová? — -hoz/-hez/-höz</li><li>Honnan? — -tól/-től</li><li>Транспорт, остановка, ориентир и уточнение образуют практический маршрут</li><li>RolePlay и Writing остаются PARTIAL</li></ul>`, activities: [EXIT_CHECK] },
  ],
  vocabulary: [
    ['orvosnál', 'у врача'], ['orvoshoz', 'к врачу'], ['orvostól', 'от врача'], ['Péternél', 'у Петера'], ['Péterhez', 'к Петеру'], ['Pétertől', 'от Петера'],
    ['Annánál', 'у Анны'], ['Annához', 'к Анне'], ['Annától', 'от Анны'], ['alatt', 'под'], ['felett', 'над'], ['mellett', 'рядом с'], ['előtt', 'перед'], ['mögött', 'позади'], ['között', 'между'], ['nálam', 'у меня'],
  ].map(([hu, ru], index) => ({ id: `l12_v${index + 1}`, hu, ru, category: index < 9 ? 'Основные формы' : 'Дополнительно' })),
  quiz: [
    { id: 1201, question: 'Как сказать «у врача» (Hol?)?', options: ['orvosnál', 'orvoshoz', 'orvostól', 'orvosban'], correctIndex: 0, explanation: 'Для местонахождения у врача используется orvosnál.' },
    { id: 1202, question: 'Как сказать «к Петеру» (Hová?)?', options: ['Péternél', 'Péterhez', 'Pétertől', 'Péterben'], correctIndex: 1, explanation: 'Для направления к Петеру используется Péterhez.' },
    { id: 1203, question: 'Как сказать «от врача» (Honnan?)?', options: ['orvosnál', 'orvoshoz', 'orvostól', 'orvosban'], correctIndex: 2, explanation: 'Для движения от врача используется orvostól.' },
    { id: 1204, question: 'Ты находишься у Анны. Какая форма подходит?', options: ['Annánál', 'Annához', 'Annától', 'Annában'], correctIndex: 0, explanation: 'Статическое местонахождение у Анны: Annánál.' },
    { id: 1205, question: 'Ты идёшь к брату или сестре. Какая форма подходит?', options: ['testvérnél', 'testvérhez', 'testvértől', 'testvérben'], correctIndex: 1, explanation: 'Направление к брату или сестре: testvérhez.' },
    { id: 1206, question: 'Какой ответ естественно подходит к вопросу „Honnan jössz?”', options: ['Az orvostól jövök.', 'Az orvoshoz megyek.', 'Az orvosnál vagyok.', 'Péterhez megyek.'], correctIndex: 0, explanation: 'Honnan? спрашивает об источнике: Az orvostól jövök.' },
  ],
  objectives: [
    { id: 'l12_distinguish-near-cases', text: 'Различать значения местонахождения, направления к цели и движения от источника в группе -nál/-nél, -hoz/-hez/-höz, -tól/-től.', skills: ['grammar'] },
    { id: 'l12_form-adessive', text: 'Образовывать формы -nál/-nél для местонахождения у/около человека или объекта.', skills: ['grammar', 'writing'] },
    { id: 'l12_form-allative', text: 'Образовывать формы -hoz/-hez/-höz для направления к человеку или объекту.', skills: ['grammar', 'writing'] },
    { id: 'l12_form-ablative', text: 'Образовывать формы -tól/-től для движения или происхождения от человека или объекта.', skills: ['grammar', 'writing'] },
    { id: 'l12_use-near-cases', text: 'Использовать три изученные группы форм в коротких практических обменах.', skills: ['speaking', 'listening', 'writing'] },
  ],
};
