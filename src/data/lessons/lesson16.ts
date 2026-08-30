import { Lesson, LessonActivity } from '../../types';

const L16_CP: LessonActivity = {
  kind: 'controlledPractice', id: 'l16-cp-contextual-shopping', title: 'Контекстная практика: -val/-vel и покупки', passCount: 11,
  exercises: [
    { kind: 'fillGap', id: 'l16-context-1', prompt: 'Ezzel a ___ szeretnék fizetni. (kártya)', accept: ['kártyával'], explanation: 'kártya → kártyával: конечная a удлиняется.' },
    { kind: 'fillGap', id: 'l16-context-2', prompt: 'Ma ___ fizetek. (készpénz)', accept: ['készpénzzel'], explanation: 'készpénz → készpénzzel: v уподобляется z.' },
    { kind: 'fillGap', id: 'l16-context-3', prompt: 'A ___ jöttem vásárolni. (barát)', accept: ['baráttal'], explanation: 'barát → baráttal: v уподобляется t.' },
    { kind: 'fillGap', id: 'l16-context-4', prompt: 'Reggel ___ megyünk a boltba. (busz)', accept: ['busszal'], explanation: 'busz → busszal: долгий sz пишется ssz.' },
    { kind: 'fillGap', id: 'l16-context-5', prompt: 'A kenyeret ___ vágom. (kés)', accept: ['késsel'], explanation: 'kés → késsel: долгий s пишется ss.' },
    { kind: 'fillGap', id: 'l16-context-6', prompt: 'A kávét ___ kérem. (cukor)', accept: ['cukorral'], explanation: 'cukor → cukorral: v уподобляется r.' },
    { kind: 'singleChoice', id: 'l16-context-7', prompt: 'Ты ищешь другой размер. Что спросишь?', options: ['Milyen méretben van?', 'Milyen idő van?', 'Mikor indul?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l16-context-8', prompt: 'Куртка мала. Как попросить больший вариант?', options: ['Van ebből nagyobb?', 'Van ebből olcsó?', 'Van blokkja?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l16-context-9', prompt: 'Ты хочешь примерить вещь. Что скажешь?', options: ['Felpróbálhatom?', 'Megkóstolhatom?', 'Elolvashatom?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l16-context-10', prompt: 'Sajnos ez túl kicsi. Что логично сказать дальше?', options: ['Inkább egy nagyobbat szeretnék.', 'Készpénzzel jöttem.', 'Tíz fok van.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l16-context-11', prompt: 'Ты хочешь обменять товар. Какая фраза подходит?', options: ['Ki szeretném cserélni.', 'Külön fizetünk.', 'Forduljon balra.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l16-context-12', prompt: 'Продавец спрашивает о чеке. Что он скажет?', options: ['Van blokkja?', 'Van asztala?', 'Van esernyője?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l16-context-13', prompt: 'A kabát 18 000 forint, a pulóver 12 000. Melyik olcsóbb?', options: ['A pulóver.', 'A kabát.', 'Ugyanannyiba kerülnek.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l16-context-14', prompt: 'A kék méret nincs, de van fekete. Что спросить об альтернативе?', options: ['Van másik színben?', 'Mennyit esik?', 'Kinek adja?'], correctIndex: 0 },
  ],
};

const L16_READING: LessonActivity = {
  kind: 'reading', id: 'l16-reading-jacket-exchange', title: 'Egy kabát, amit ki kellett cserélni', instructions: 'Прочитай практическую историю и ответь на вопросы по смыслу.',
  content: { type: 'prose', paragraphs: [
    'Dóra péntek délután egy bevásárlóközpontban meglátott egy ruhaboltot, ahol minden téli kabátra harminc százalék kedvezményt adtak. Régóta keresett egy meleg kabátot, ezért bement. Az eladó megmutatta neki az akciós modelleket, és segített megtalálni a megfelelő polcot. Egy sötétkék modellt választott közepes méretben. A próbafülkében kényelmesnek tűnt, és a színe is tetszett neki. A kabátot bankkártyával fizette ki, a blokkot pedig betette a táskájába.',
    'Otthon azonban vastag pulóverrel is felpróbálta a kabátot. Így már túl szűk volt a vállánál, és nehezen tudta bezárni. Mozgás közben az ujja is rövidnek bizonyult. Másnap visszament a boltba a kabáttal és a blokkal. Az eladó megkérdezte, mi a probléma. Dóra elmondta, hogy ugyanebből a sötétkék modellből nagyobb méretet szeretne.',
    'Sajnos a kért méret sötétkékben már elfogyott. Az eladó két lehetőséget ajánlott: ugyanazt a kabátot fekete színben, nagyobb méretben, vagy egy másik, valamivel drágább modellt. Azt is mondta, hogy Dóra visszakaphatja a pénzt. Dóra felpróbálta a fekete kabátot. Ez kényelmes volt, jól állt neki, és nem kellett árkülönbözetet fizetnie. Az eladó új blokkot adott a cseréről, és megköszönte a türelmét. Végül ezt választotta, és elégedetten ment haza.',
  ]}, passCount: 6,
  questions: [
    { id: 'l16-read-1', question: 'Miért figyelt fel Dóra a kabátra?', options: ['Harminc százalék kedvezmény volt rá.', 'Ajándékba kapta.', 'Csak ez az egy kabát volt.'], correctIndex: 0 },
    { id: 'l16-read-2', question: 'Milyen kabátot választott először?', options: ['Sötétkék, közepes méretűt.', 'Fekete, nagy méretűt.', 'Piros, kis méretűt.'], correctIndex: 0 },
    { id: 'l16-read-3', question: 'Hogyan fizetett?', options: ['Bankkártyával.', 'Készpénzzel.', 'Ajándékkártyával.'], correctIndex: 0 },
    { id: 'l16-read-4', question: 'Mi derült ki otthon?', options: ['Pulóverrel túl szűk volt a kabát.', 'A kabát színe megváltozott.', 'Hiányzott egy gomb.'], correctIndex: 0 },
    { id: 'l16-read-5', question: 'Mit vitt vissza Dóra a boltba?', options: ['A kabátot és a blokkot.', 'Csak a bankkártyát.', 'Egy másik pulóvert.'], correctIndex: 0 },
    { id: 'l16-read-6', question: 'Miért nem kapott pontosan ugyanolyan cserét?', options: ['A nagyobb méret sötétkékben elfogyott.', 'Nem volt nála blokk.', 'Az akció már véget ért.'], correctIndex: 0 },
    { id: 'l16-read-7', question: 'Milyen lehetőségeket ajánlott az eladó?', options: ['Fekete kabátot, másik modellt vagy pénzvisszatérítést.', 'Csak javítást.', 'Csak kisebb méretet.'], correctIndex: 0 },
    { id: 'l16-read-8', question: 'Mit választott végül Dóra?', options: ['A nagyobb fekete kabátot.', 'A drágább modellt.', 'A pénzvisszatérítést.'], correctIndex: 0 },
  ],
};

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
  kind: 'rolePlay', id: 'l16-roleplay-shopping', title: 'Ролевая игра: обмен товара', partnerLabel: 'Eladó', completionMessage: 'Sikerült megoldani a cserét.', startTurnId: 'l16-rp-s1',
  turns: [
    { id: 'l16-rp-s1', speaker: 'waiter', prompt: 'Jó napot! Segíthetek?', next: 'l16-rp-l1' },
    { id: 'l16-rp-l1', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Поприветствуй продавца и скажи, что хочешь обменять куртку.', model: 'Jó napot! Ezt a kabátot szeretném kicserélni.', next: 'l16-rp-s2' },
    { id: 'l16-rp-s2', speaker: 'waiter', prompt: 'Mi a probléma a kabáttal?', next: 'l16-rp-l2' },
    { id: 'l16-rp-l2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Объясни проблему с размером.', model: 'Sajnos túl kicsi. Egy nagyobbat szeretnék.', next: 'l16-rp-s3' },
    { id: 'l16-rp-s3', speaker: 'waiter', prompt: 'Van blokkja?', next: 'l16-rp-l3' },
    { id: 'l16-rp-l3', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Скажи, что чек у тебя и ты платил картой.', model: 'Igen, itt van. Kártyával fizettem.', next: 'l16-rp-s4' },
    { id: 'l16-rp-s4', speaker: 'waiter', prompt: 'Ebben a méretben sajnos nincs kék. Van fekete, vagy választhat egy másik modellt.', next: 'l16-rp-l4' },
    { id: 'l16-rp-l4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Задай вопрос о размере или другом цвете.', model: 'A fekete milyen méretben van? Van esetleg másik színben?', next: 'l16-rp-s5' },
    { id: 'l16-rp-s5', speaker: 'waiter', prompt: 'A fekete jó méretű és ugyanannyiba kerül. A másik modell ötezer forinttal drágább.', next: 'l16-rp-l5' },
    { id: 'l16-rp-l5', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Сравни варианты и задай практический вопрос.', model: 'A másik túl drága. Felpróbálhatom a fekete kabátot?', next: 'l16-rp-s6' },
    { id: 'l16-rp-s6', speaker: 'waiter', prompt: 'Természetesen. A próbafülke jobbra van.', next: 'l16-rp-l6' },
    { id: 'l16-rp-l6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'После примерки выбери решение.', model: 'Ez kényelmes és jó a mérete. A fekete kabátot választom.', next: 'l16-rp-s7' },
    { id: 'l16-rp-s7', speaker: 'waiter', prompt: 'Rendben. Nincs árkülönbözet, azonnal kicserélem.', next: 'l16-rp-l7' },
    { id: 'l16-rp-l7', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Уточни документ об обмене.', model: 'Köszönöm. Kapok új blokkot a cseréről?', next: 'l16-rp-s8' },
    { id: 'l16-rp-s8', speaker: 'waiter', prompt: 'Igen, itt az új blokk.', next: 'l16-rp-l8' },
    { id: 'l16-rp-l8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Вежливо заверши разговор.', model: 'Nagyon köszönöm a segítséget. Viszontlátásra!', next: 'l16-rp-s9' },
    { id: 'l16-rp-s9', speaker: 'waiter', prompt: 'Szívesen. Viszontlátásra!' },
  ],
};

const L16_WRITING: LessonActivity = {
  kind: 'writing', id: 'l16-writing-exchange-message', title: 'Письмо: просьба об обмене',
  prompt: 'Напиши 80–100 слов магазину или службе поддержки. Укажи, что и когда ты купил, как заплатил, в чём проблема, какую замену хочешь, есть ли чек, задай один практический вопрос и закончи сообщение вежливо.',
  modelAnswer: ['Jó napot kívánok! Szombaton vettem önöknél egy kék kabátot, és bankkártyával fizettem. Otthon vettem észre, hogy a kabát túl kicsi, ezért szeretném kicserélni. Egy nagyobb méretet szeretnék, lehetőleg ugyanebben a színben. A blokk megvan, és a kabátot még nem használtam. Van ebből a modellből nagyobb méret? Ha nincs kék, fekete szín is megfelel. Szeretném gyorsan megoldani a cserét, mert a kabátra a jövő héten szükségem lesz. Kérem, írják meg, mikor vihetem vissza a kabátot. Köszönöm szépen a segítséget. Üdvözlettel: Anna'],
  rubric: ['80–100 слов', 'покупка, дата и способ оплаты', 'проблема и желаемая замена', 'информация о чеке', 'практический вопрос', 'вежливое завершение'],
};

const L16_SPEAKING = { title: 'Необязательная устная самопрактика', instructions: 'Говори 1.5–2 минуты о вымышленной покупке. Это текстовая инструкция без микрофона, score и evidence.', prompt: 'Расскажи, что хотел купить, с кем пришёл, сколько это стоило, как заплатил, какая возникла проблема или развилка и чем всё закончилось.', rubric: ['цель покупки и спутник', 'цена и способ оплаты', 'проблема или решение', 'итог истории'] };

const L16_EXIT: LessonActivity = { kind: 'exitCheck', id: 'l16-exit-check', title: 'Проверка целей урока', checks: [
  { objectiveId: 'l16_form-instrumental', activityId: 'l16-cp-contextual-shopping', evidenceKind: 'grammar' },
  { objectiveId: 'l16_apply-assimilation', activityId: 'l16-cp-contextual-shopping', evidenceKind: 'grammar' },
  { objectiveId: 'l16_use-instrumental', activityId: 'l16-cp-contextual-shopping', evidenceKind: 'grammar', evidenceComponents: [{ activityId: 'l16-writing-exchange-message', evidenceKind: 'writing' }] },
  { objectiveId: 'l16_shop-dialogue', activityId: 'l16-roleplay-shopping', evidenceKind: 'interaction', evidenceComponents: [{ activityId: 'l16-listening-shopping', evidenceKind: 'listening' }, { activityId: 'l16-writing-exchange-message', evidenceKind: 'writing' }] },
  { objectiveId: 'l16_count-money', activityId: 'l16-reading-jacket-exchange', evidenceKind: 'reading', evidenceComponents: [{ activityId: 'l16-listening-shopping', evidenceKind: 'listening' }] },
] };

export const LESSON_16: Lesson = {
  id: 16, number: 16, level: 'A2', title: 'Урок 16 · Vásárlás és eszközhatározó', subtitle: 'Покупки и -val/-vel: цена, выбор и обмен', description: 'Практическое употребление -val/-vel, цены и способы оплаты, выбор размера/цвета и решение простой проблемы с обменом.', slidesCount: 11,
  slides: [
    { id: 1, eyebrow: 'УРОК 16 · 1/11 · CAN-DO', title: 'Vásárlás magyarul', subtitle: 'Покупка как практическая задача', body: `<p>После урока ты сможешь спросить о товаре, цене, размере и цвете, назвать способ оплаты и решить простую проблему с обменом.</p><p><b>Mennyibe kerül? Milyen méretben van? Van ebből nagyobb? Van másik színben? Felpróbálhatom?</b></p><div class="note">Суффикс <b>-val/-vel</b> нужен здесь в реальных фразах: Kártyával fizetek. A barátommal jöttem.</div>` },
    { id: 2, eyebrow: 'УРОК 16 · 2/11 · -VAL/-VEL', title: 'Средство и сопровождение', subtitle: 'Две практические функции', body: `<p><b>-val/-vel</b> выражает средство или способ: Tollal írok. Vonattal megyek. Kártyával fizetek. Он также выражает сопровождение: A barátommal jöttem. Velem jössz?</p><p>После кратких конечных a/e они удлиняются: kutya → kutyával, kefe → kefével. Уже долгие гласные сохраняются: kávé → kávéval.</p>` },
    { id: 3, eyebrow: 'УРОК 16 · 3/11 · АССИМИЛЯЦИЯ', title: 'Слова на согласную', subtitle: 'Звук и написание', body: `<p>После согласной <b>v</b> полностью уподобляется последнему согласному звуку: vonat → <b>vonattal</b>, kés → <b>késsel</b>, cukor → <b>cukorral</b>, pénz → <b>pénzzel</b>.</p><p>В <b>busszal</b> долгий диграф sz пишется ssz. В <b>tollal</b> третья l не появляется.</p>` },
    { id: 4, eyebrow: 'УРОК 16 · 4/11 · КОНТЕКСТ', title: 'Форма и решение задачи', subtitle: '14 ситуаций покупки', activities: [L16_CP], body: `<p>Сначала выбери правильную форму -val/-vel, затем решай практические задачи: размер, цвет, цена, примерка и обмен.</p><p><b>Ki szeretném cserélni. Van blokkja? Sajnos ez túl kicsi. Inkább egy nagyobbat szeretnék.</b></p>` },
    { id: 5, eyebrow: 'УРОК 16 · 5/11 · ЧТЕНИЕ', title: 'Egy kabát, amit ki kellett cserélni', subtitle: 'Скидка → проблема → решение', activities: [L16_READING], body: `<p>Следи за последовательностью: выбор товара, способ оплаты, обнаруженная дома проблема, варианты продавца и окончательное решение покупателя.</p>` },
    { id: 6, eyebrow: 'УРОК 16 · 6/11 · АУДИРОВАНИЕ', title: 'Rövid vásárlás', subtitle: 'Цена, количество и оплата', activities: [L16_LISTENING], body: `<p>Существующая короткая запись проверяет базовую транзакцию: товар, количество, цену и оплату картой.</p>` },
    { id: 7, eyebrow: 'УРОК 16 · 7/11 · ROLEPLAY', title: 'Termékcsere', subtitle: 'Обмен товара в магазине', activities: [L16_ROLEPLAY], body: `<p>Объясни проблему, покажи чек, спроси о размере или цвете, сравни две альтернативы и выбери решение.</p><div class="note">RolePlay даёт только PARTIAL evidence.</div>` },
    { id: 8, eyebrow: 'УРОК 16 · 8/11 · ПИСЬМО', title: 'Üzenet az üzletnek', subtitle: 'Просьба об обмене', activities: [L16_WRITING], body: `<p>Напиши связное сообщение на 80–100 слов: покупка, оплата, проблема, желаемая замена, чек, вопрос и вежливое завершение.</p>` },
    { id: 9, eyebrow: 'УРОК 16 · 9/11 · SPEAKING PRACTICE', title: 'Egy vásárlás története', subtitle: 'Необязательная практика без записи', optionalSpeaking: L16_SPEAKING, body: `<p>Свяжи цель покупки, спутника, цену, способ оплаты, проблему и результат в короткую историю.</p>` },
    { id: 10, eyebrow: 'УРОК 16 · 10/11 · ПОВТОРЕНИЕ', title: 'Hasznos mondatok', subtitle: 'Фразы для реального магазина', body: `<ul class="tick"><li>Kártyával / készpénzzel fizetek.</li><li>Milyen méretben van? Van ebből nagyobb?</li><li>Van másik színben? Felpróbálhatom?</li><li>Ki szeretném cserélni. Van blokkja?</li></ul>` },
    { id: 11, eyebrow: 'УРОК 16 · 11/11 · ИТОГ', title: 'Összefoglalás', subtitle: 'Честная проверка целей', activities: [L16_EXIT], body: `<p>Автоматические задания могут дать DIRECT после порога. RolePlay и Writing остаются PARTIAL; speaking practice не создаёт evidence.</p>` },
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
    { id: 'l16_use-instrumental', text: 'Использовать -val/-vel для способа оплаты, средства и сопровождения.', skills: ['grammar', 'speaking', 'writing'] },
    { id: 'l16_shop-dialogue', text: 'Совершать покупку и решать простую проблему с обменом товара.', skills: ['speaking', 'listening', 'interaction', 'writing'] },
    { id: 'l16_count-money', text: 'Понимать цены и сравнивать простые варианты в магазине.', skills: ['speaking', 'reading', 'listening'] },
  ],
};
