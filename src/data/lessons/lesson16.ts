import { Lesson, LessonActivity } from '../../types';

const cp = (id: string, title: string, passCount: number, exercises: Extract<LessonActivity, { kind: 'controlledPractice' }>['exercises']): LessonActivity => ({ kind: 'controlledPractice', id, title, passCount, exercises });

const L16_CP_FORMS = cp('l16-cp-val-vel-forms', 'Формы с -val/-vel', 8, [
  { kind: 'textInput', id: 'l16-forms-1', prompt: 'autó → ?', accept: ['autóval'], explanation: 'После долгой ó присоединяем -val: autóval.' },
  { kind: 'textInput', id: 'l16-forms-2', prompt: 'kutya → ?', accept: ['kutyával'], explanation: 'Краткая конечная a удлиняется: kutyával.' },
  { kind: 'textInput', id: 'l16-forms-3', prompt: 'kávé → ?', accept: ['kávéval'], explanation: 'Конечная é уже долгая: kávéval.' },
  { kind: 'textInput', id: 'l16-forms-4', prompt: 'vonat → ?', accept: ['vonattal'], explanation: 'v уподобляется t: vonattal.' },
  { kind: 'textInput', id: 'l16-forms-5', prompt: 'kés → ?', accept: ['késsel'], explanation: 'v уподобляется s: késsel.' },
  { kind: 'textInput', id: 'l16-forms-6', prompt: 'toll → ?', accept: ['tollal'], explanation: 'Уже долгий l не утраивается: tollal.' },
  { kind: 'textInput', id: 'l16-forms-7', prompt: 'kanál → ?', accept: ['kanállal'], explanation: 'v уподобляется l: kanállal.' },
  { kind: 'textInput', id: 'l16-forms-8', prompt: 'busz → ?', accept: ['busszal'], explanation: 'Долгий диграф sz пишется ssz: busszal.' },
  { kind: 'textInput', id: 'l16-forms-9', prompt: 'barát → ?', accept: ['baráttal'], explanation: 'barát + val → baráttal.' },
  { kind: 'textInput', id: 'l16-forms-10', prompt: 'készpénz → ?', accept: ['készpénzzel'], explanation: 'v уподобляется z: készpénzzel.' },
]);

const L16_CP_ASSIMILATION = cp('l16-cp-assimilation', 'Ассимиляция и написание', 8, [
  { kind: 'singleChoice', id: 'l16-assim-1', prompt: 'vonat + -val', options: ['vonattal', 'vonatval', 'vonatal'], correctIndex: 0, explanation: 'v уподобляется t; долгий t пишется tt.' },
  { kind: 'singleChoice', id: 'l16-assim-2', prompt: 'kés + -vel', options: ['késvel', 'késsel', 'késssel'], correctIndex: 1, explanation: 'v уподобляется s: késsel.' },
  { kind: 'singleChoice', id: 'l16-assim-3', prompt: 'toll + -val', options: ['tollval', 'tolllal', 'tollal'], correctIndex: 2, explanation: 'Долгий l уже написан как ll; третья l не добавляется.' },
  { kind: 'singleChoice', id: 'l16-assim-4', prompt: 'kanál + -val', options: ['kanállal', 'kanálval', 'kanálllal'], correctIndex: 0, explanation: 'v уподобляется l: kanállal.' },
  { kind: 'singleChoice', id: 'l16-assim-5', prompt: 'busz + -val', options: ['buszszal', 'busszal', 'buszval'], correctIndex: 1, explanation: 'sz — диграф; его долгая запись здесь ssz.' },
  { kind: 'textInput', id: 'l16-assim-6', prompt: 'barátom + val → ?', accept: ['barátommal'], explanation: 'Форма заканчивается на m: v → m, поэтому barátommal.' },
  { kind: 'textInput', id: 'l16-assim-7', prompt: 'pénz + vel → ?', accept: ['pénzzel'] },
  { kind: 'textInput', id: 'l16-assim-8', prompt: 'kéz + vel → ?', accept: ['kézzel'] },
  { kind: 'textInput', id: 'l16-assim-9', prompt: 'barát + val → ?', accept: ['baráttal'] },
  { kind: 'textInput', id: 'l16-assim-10', prompt: 'asztal + val → ?', accept: ['asztallal'] },
]);

const L16_CP_USE = cp('l16-cp-means-companionship', 'Средство или сопровождение?', 6, [
  { kind: 'singleChoice', id: 'l16-use-1', prompt: 'Tollal írok.', options: ['средство', 'сопровождение'], correctIndex: 0 },
  { kind: 'singleChoice', id: 'l16-use-2', prompt: 'A barátommal megyek.', options: ['средство', 'сопровождение'], correctIndex: 1 },
  { kind: 'singleChoice', id: 'l16-use-3', prompt: 'Vonattal megyek Budapestre.', options: ['средство передвижения', 'сопровождение'], correctIndex: 0 },
  { kind: 'singleChoice', id: 'l16-use-4', prompt: 'Velem jössz?', options: ['средство', 'сопровождение'], correctIndex: 1 },
  { kind: 'singleChoice', id: 'l16-use-5', prompt: 'Kártyával fizetek.', options: ['средство оплаты', 'сопровождение'], correctIndex: 0 },
  { kind: 'singleChoice', id: 'l16-use-6', prompt: 'A testvéremmel vásárolok.', options: ['средство', 'сопровождение'], correctIndex: 1 },
  { kind: 'textInput', id: 'l16-use-7', prompt: '«Я пишу ручкой».', accept: ['Tollal írok.', 'Tollal írok', 'tollal írok'] },
  { kind: 'textInput', id: 'l16-use-8', prompt: '«Я иду с другом».', accept: ['A barátommal megyek.', 'A barátommal megyek', 'Barátommal megyek.', 'Barátommal megyek'] },
]);

const L16_CP_PRICES = cp('l16-cp-prices', 'Практические цены', 6, [
  { kind: 'singleChoice', id: 'l16-price-1', prompt: 'Ez 500 forint.', options: ['500 Ft', '1000 Ft', '1500 Ft'], correctIndex: 0 },
  { kind: 'singleChoice', id: 'l16-price-2', prompt: 'Ez 1000 forint.', options: ['500 Ft', '1000 Ft', '2000 Ft'], correctIndex: 1 },
  { kind: 'singleChoice', id: 'l16-price-3', prompt: '1500 forintba kerül.', options: ['1500 Ft', '2000 Ft', '2500 Ft'], correctIndex: 0 },
  { kind: 'singleChoice', id: 'l16-price-4', prompt: 'Ez 2000 forint.', options: ['1000 Ft', '1500 Ft', '2000 Ft'], correctIndex: 2 },
  { kind: 'singleChoice', id: 'l16-price-5', prompt: '2500 forintba kerül.', options: ['500 Ft', '2000 Ft', '2500 Ft'], correctIndex: 2 },
  { kind: 'textInput', id: 'l16-price-6', prompt: 'Ez ezerötszáz forint. Введи цифрами.', accept: ['1500', '1500 Ft', '1500 forint'] },
  { kind: 'textInput', id: 'l16-price-7', prompt: 'Ez kétezer forint. Введи цифрами.', accept: ['2000', '2000 Ft', '2000 forint'] },
  { kind: 'textInput', id: 'l16-price-8', prompt: 'Ez kétezer-ötszáz forint. Введи цифрами.', accept: ['2500', '2500 Ft', '2500 forint'] },
]);

const L16_LISTENING: LessonActivity = {
  kind: 'listening', id: 'l16-listening-shopping', title: 'Аудирование: покупка', assetId: 'l16_listening_shopping', audioStatus: 'published', passCount: 3,
  transcript: 'Vásárló: Jó napot! Egy pulóvert kérek. Mennyibe kerül?\nEladó: Ezerötszáz forint.\nVásárló: Kérek két darabot. Fizethetek kártyával?\nEladó: Igen, természetesen.',
  questions: [
    { id: 'l16-list-1', question: 'Mit kér a vásárló?', options: ['Egy pulóvert', 'Vonatjegyet', 'Kávét'], correctIndex: 0 },
    { id: 'l16-list-2', question: 'Hány darabot kér?', options: ['Egyet', 'Kettőt', 'Ötöt'], correctIndex: 1 },
    { id: 'l16-list-3', question: 'Mennyibe kerül?', options: ['500 Ft', '1500 Ft', '2500 Ft'], correctIndex: 1 },
    { id: 'l16-list-4', question: 'Hogyan szeretne fizetni?', options: ['Készpénzzel', 'Kártyával', 'Nem fizet'], correctIndex: 1 },
  ],
};

const L16_ROLEPLAY: LessonActivity = {
  kind: 'rolePlay', id: 'l16-roleplay-shopping', title: 'Ролевая игра: покупка', partnerLabel: 'Eladó', completionMessage: 'A vásárlás kész.', startTurnId: 'l16-rp-s1',
  turns: [
    { id: 'l16-rp-s1', speaker: 'waiter', prompt: 'Jó napot! Segíthetek?', next: 'l16-rp-l1' },
    { id: 'l16-rp-l1', speaker: 'learner', responseMode: 'recorded', prompt: 'Поприветствуй продавца и спроси цену.', model: 'Jó napot! Egy pulóvert kérek. Mennyibe kerül?', next: 'l16-rp-s2' },
    { id: 'l16-rp-s2', speaker: 'waiter', prompt: 'Ezerötszáz forint.', next: 'l16-rp-l2' },
    { id: 'l16-rp-l2', speaker: 'learner', responseMode: 'recorded', prompt: 'Подтверди цену вслух и попроси две штуки.', model: 'Ezerötszáz forint? Rendben. Kérek két darabot.', next: 'l16-rp-s3' },
    { id: 'l16-rp-s3', speaker: 'waiter', prompt: 'Rendben. Hogyan fizet?', next: 'l16-rp-l3' },
    { id: 'l16-rp-l3', speaker: 'learner', responseMode: 'recorded', prompt: 'Назови способ оплаты.', model: 'Kártyával fizetek.', next: 'l16-rp-s4' },
    { id: 'l16-rp-s4', speaker: 'waiter', prompt: 'Köszönöm. Viszontlátásra!' },
  ],
};

const L16_RECORDING: LessonActivity = { kind: 'recording', id: 'l16-recording-means-companionship', title: 'Говорение: средство и сопровождение', instructions: 'Запиши одну фразу со средством и одну с сопровождением. Запись требует проверки.', targetText: 'Tollal írok. A barátommal megyek a boltba.', targetTranslation: 'Я пишу ручкой. Я иду с другом в магазин.', rubric: ['пример средства/способа', 'пример сопровождения', 'понятные формы -val/-vel'] };

const L16_EXIT: LessonActivity = { kind: 'exitCheck', id: 'l16-exit-check', title: 'Проверка целей урока', checks: [
  { objectiveId: 'l16_form-instrumental', activityId: 'l16-cp-val-vel-forms', evidenceKind: 'grammar' },
  { objectiveId: 'l16_apply-assimilation', activityId: 'l16-cp-assimilation', evidenceKind: 'grammar' },
  { objectiveId: 'l16_use-instrumental', activityId: 'l16-cp-means-companionship', evidenceKind: 'grammar', evidenceComponents: [{ activityId: 'l16-recording-means-companionship', evidenceKind: 'speaking' }] },
  { objectiveId: 'l16_shop-dialogue', activityId: 'l16-listening-shopping', evidenceKind: 'listening', evidenceComponents: [{ activityId: 'l16-roleplay-shopping', evidenceKind: 'interaction' }] },
  { objectiveId: 'l16_count-money', activityId: 'l16-cp-prices', evidenceKind: 'reading', evidenceComponents: [{ activityId: 'l16-listening-shopping', evidenceKind: 'listening' }, { activityId: 'l16-roleplay-shopping', evidenceKind: 'speaking' }] },
] };

export const LESSON_16: Lesson = {
  id: 16, number: 16, level: 'A2', title: 'Урок 16 · Vásárlás és eszközhatározó', subtitle: 'Покупки и -val/-vel: средство и сопровождение', description: 'Изученные формы -val/-vel, ассимиляция v в письме, средство и сопровождение, базовая покупка, оплата и ограниченный набор практических цен.', slidesCount: 12,
  slides: [
    { id: 1, eyebrow: 'УРОК 16 · 1/12 · -VAL/-VEL', title: 'Средство и сопровождение', subtitle: 'Две практические функции', activities: [L16_CP_FORMS], body: `<p><b>-val/-vel</b> выражает средство/способ («чем, на чём») и сопровождение («с кем»). По функциям он шире русского творительного падежа и не всегда переводится одинаково.</p><p><b>Средство:</b> Tollal írok. Vonattal megyek. Kártyával fizetek.</p><p><b>Сопровождение:</b> A barátommal megyek. Velem jössz?</p>` },
    { id: 2, eyebrow: 'УРОК 16 · 2/12 · ГЛАСНАЯ', title: 'Слова на гласную', subtitle: 'Сохраняем долготу', body: `<table class="conj"><tr><th>Слово</th><th>Форма</th><th>Значение</th></tr><tr><td>autó</td><td>autóval</td><td>на машине / автомобилем</td></tr><tr><td>kutya</td><td>kutyával</td><td>с собакой</td></tr><tr><td>kávé</td><td>kávéval</td><td>с кофе</td></tr></table><div class="note">Только <b>краткие конечные a/e</b> удлиняются: a→á, e→é. В kávé гласная é уже долгая.</div>` },
    { id: 3, eyebrow: 'УРОК 16 · 3/12 · АССИМИЛЯЦИЯ', title: 'Слова на согласную', subtitle: 'Звук и написание', activities: [L16_CP_ASSIMILATION], body: `<p>У основ на согласную <b>v</b> суффикса полностью уподобляется последнему согласному звуку. На письме долгий согласный оформляется по обычным правилам венгерской орфографии.</p><p>vonat → <b>vonattal</b>; kés → <b>késsel</b>; toll → <b>tollal</b>; kanál → <b>kanállal</b>; busz → <b>busszal</b>.</p><div class="note">В tollal нет третьей l. В busszal диграф sz получает долгую запись ssz: это не механическое копирование последней буквы.</div>` },
    { id: 4, eyebrow: 'УРОК 16 · 4/12 · ЛИЧНЫЕ ФОРМЫ', title: 'Velem, veled, vele', subtitle: 'Полезные формы', body: `<p>У -val/-vel есть личные формы: <b>velem</b> «со мной», <b>veled</b> «с тобой», <b>vele</b> «с ним/ней» — ядро для узнавания.</p><p><b>Для расширения:</b> velünk «с нами», veletek «с вами», velük «с ними». Весь ряд не является отдельной целью.</p><p><b>Gyere velem!</b> — готовый полезный блок. Повелительное наклонение здесь не изучается и не проверяется.</p>` },
    { id: 5, eyebrow: 'УРОК 16 · 5/12 · УПОТРЕБЛЕНИЕ', title: 'Средство или сопровождение?', subtitle: 'Значение в контексте', activities: [L16_CP_USE], body: `<p>Tollal írok — инструмент; Vonattal megyek Budapestre — транспорт; Kártyával fizetek — средство оплаты.</p><p>A barátommal megyek a boltba и Velem jössz? — сопровождение.</p><div class="note">Краткое повторение L8: barát → barátom; затем <b>barátom + val → barátommal</b>. Готовая форма заканчивается на m: v→m, получается mm.</div>` },
    { id: 6, eyebrow: 'УРОК 16 · 6/12 · МАГАЗИН', title: 'Базовый словарь', subtitle: 'Ядро и расширение', body: `<p><b>Ядро:</b> pénz — деньги; ár — цена; bankkártya — банковская карта; nyugta — чек; méret — размер; szín — цвет.</p><p><b>Для расширения:</b> kedvezmény — скидка; próbafülke — примерочная; olcsó — дешёвый; kirakat — витрина; eladó — продавец; vásárló — покупатель.</p>` },
    { id: 7, eyebrow: 'УРОК 16 · 7/12 · ЦЕНЫ', title: 'Практические цены', subtitle: 'Ограниченный набор', activities: [L16_CP_PRICES], body: `<p>Работаем только с ценами <b>500, 1000, 1500, 2000 и 2500 Ft</b>. Это не полная система больших чисел.</p><table class="conj"><tr><th>Цена</th><th>Как сказать</th></tr><tr><td>500 Ft</td><td>ötszáz forint</td></tr><tr><td>1000 Ft</td><td>ezer forint</td></tr><tr><td>1500 Ft</td><td>ezerötszáz forint</td></tr><tr><td>2000 Ft</td><td>kétezer forint</td></tr><tr><td>2500 Ft</td><td>kétezer-ötszáz forint</td></tr></table><p>Mennyibe kerül? Ez 1500 forint. 1500 forintba kerül.</p><div class="note">После числительного forint остаётся в единственном числе. Здесь нужно узнавать и произносить только эти изученные суммы; свободное образование любых больших чисел не проверяется.</div>` },
    { id: 8, eyebrow: 'УРОК 16 · 8/12 · ФРАЗЫ', title: 'Количество и оплата', subtitle: 'Готовые транзакционные блоки', activities: [L16_LISTENING], body: `<p>Egy pulóvert kérek. — Свитер, пожалуйста. Kérek egyet. — Один, пожалуйста. Kérek két darabot. — Две штуки, пожалуйста.</p><p>Mennyibe kerül ez? Ez túl drága.</p><p>Kártyával fizetek. — Я плачу картой. Készpénzzel fizetek. — Я плачу наличными.</p><div class="note">Fizethetek kártyával? — готовый транзакционный блок. Продуктивное образование -hat/-het здесь не изучается и не проверяется.</div>` },
    { id: 9, eyebrow: 'УРОК 16 · 9/12 · ДИАЛОГ', title: 'Покупка', subtitle: 'Цена → количество → оплата', activities: [L16_ROLEPLAY], body: `<p><b>Eladó:</b> Jó napot! Segíthetek?</p><p><b>Vásárló:</b> Jó napot! Egy pulóvert kérek. Mennyibe kerül?</p><p><b>Eladó:</b> Ezerötszáz forint.</p><p><b>Vásárló:</b> Ezerötszáz forint? Rendben. Kérek két darabot.</p><p><b>Eladó:</b> Rendben. Hogyan fizet?</p><p><b>Vásárló:</b> Kártyával fizetek.</p><div class="note">В ролевой игре ученик сам произносит цену, количество и способ оплаты. Открытая речь требует проверки; условное наклонение и продуктивное -hat/-het не являются целями.</div>` },
    { id: 10, eyebrow: 'УРОК 16 · 10/12 · ГОВОРЕНИЕ', title: 'Два значения -val/-vel', subtitle: 'Запись для проверки', activities: [L16_RECORDING], body: `<p>Скажи одну фразу о средстве/способе и одну о сопровождении. Например: Tollal írok. A barátommal megyek a boltba.</p><div class="note">Сам факт записи не подтверждает правильность: открытый ответ требует проверки.</div>` },
    { id: 11, eyebrow: 'УРОК 16 · 11/12 · ПОВТОРЕНИЕ', title: 'Что важно удержать', subtitle: 'Границы урока', body: `<ul class="tick"><li>-val/-vel: средство/способ или сопровождение</li><li>краткие конечные a/e → á/é</li><li>v уподобляется конечному согласному звуку; написание следует орфографии</li><li>покупка: цена, небольшое количество, оплата</li><li>только изученный набор цен 500–2500 Ft</li></ul>` },
    { id: 12, eyebrow: 'УРОК 16 · 12/12 · ИТОГ', title: 'Összefoglalás', subtitle: 'Проверка целей', activities: [L16_EXIT], body: `<p>Ты потренировал формы -val/-vel, письменную ассимиляцию, средство и сопровождение, а также короткую покупку с ценой, количеством и оплатой.</p><p>В следующем уроке — погода и времена года.</p>` },
  ],
  vocabulary: [
    { id: 'l16_v1', hu: 'pénz', ru: 'деньги', category: 'Ядро', exampleSentence: 'Van elég pénzem.' }, { id: 'l16_v2', hu: 'ár', ru: 'цена', category: 'Ядро', exampleSentence: 'Mi az ára?' }, { id: 'l16_v3', hu: 'bankkártya', ru: 'банковская карта', category: 'Ядро', exampleSentence: 'Kártyával fizetek.' }, { id: 'l16_v4', hu: 'nyugta', ru: 'чек', category: 'Ядро', exampleSentence: 'Kérem a nyugtát.' }, { id: 'l16_v5', hu: 'méret', ru: 'размер', category: 'Ядро', exampleSentence: 'Milyen méret?' }, { id: 'l16_v6', hu: 'szín', ru: 'цвет', category: 'Ядро', exampleSentence: 'Szép szín.' }, { id: 'l16_v7', hu: 'kedvezmény', ru: 'скидка', category: 'Расширение', exampleSentence: 'Van kedvezmény?' }, { id: 'l16_v8', hu: 'próbafülke', ru: 'примерочная', category: 'Расширение', exampleSentence: 'Hol van a próbafülke?' },
  ],
  quiz: [
    { id: 1601, question: 'Какая письменная форма vonat + -val правильная?', options: ['vonattal', 'vonatval', 'vonatal', 'vonatvallal'], correctIndex: 0, explanation: 'v уподобляется конечному t, а долгий согласный пишется tt: vonattal.' },
    { id: 1602, question: 'Как сказать «со мной» по-венгерски?', options: ['énnel', 'velem', 'énval', 'velgem'], correctIndex: 1, explanation: 'Velem — полезная личная форма «со мной»; весь ряд здесь не проверяется.' },
    { id: 1603, question: 'Как переводится «Mennyibe kerül ez?»', options: ['Где это продаётся?', 'Сколько это стоит?', 'Есть ли скидка?', 'Какого это цвета?'], correctIndex: 1, explanation: 'Это стандартный вопрос о цене.' },
    { id: 1604, question: 'Как сказать «Я плачу картой»?', options: ['Bankkártya fizetek', 'Kártyával fizetek', 'Kártyának fizetek', 'Kártyában fizetek'], correctIndex: 1, explanation: 'kártya → kártyával: краткая конечная a удлиняется до á. Fizetek — настоящее время.' },
    { id: 1605, question: 'Как сказать «с моим другом»?', options: ['barátommal', 'barátomval', 'baráttal', 'barátommel'], correctIndex: 0, explanation: 'barát → barátom; barátom + val → barátommal. Форма заканчивается на m, поэтому m+v → mm.' },
    { id: 1606, question: 'Что происходит с краткими конечными a/e перед -val/-vel?', options: ['Удлиняются до á/é: kutya → kutyával', 'Всегда исчезают', 'Не меняются', 'Превращаются в o/ö'], correctIndex: 0, explanation: 'Краткие конечные a/e удлиняются: a→á, e→é. Например, kutya → kutyával.' },
  ],
  objectives: [
    { id: 'l16_form-instrumental', text: 'Образовывать изученные формы с суффиксом -val/-vel.', skills: ['grammar', 'writing'] },
    { id: 'l16_apply-assimilation', text: 'Применять ассимиляцию v в изученных письменных формах с -val/-vel.', skills: ['grammar', 'writing'] },
    { id: 'l16_use-instrumental', text: 'Различать и использовать -val/-vel для средства/способа и сопровождения.', skills: ['grammar', 'speaking'] },
    { id: 'l16_shop-dialogue', text: 'Выполнять базовую покупку: спросить цену, назвать количество и выбрать способ оплаты.', skills: ['speaking', 'listening', 'interaction'] },
    { id: 'l16_count-money', text: 'Понимать и называть изученные практические суммы в форинтах.', skills: ['speaking', 'reading', 'listening'] },
  ],
};
