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
    { id: 'l16-rp-s2', speaker: 'waiter', prompt: 'Értem. Mi a probléma a kabáttal?', next: 'l16-rp-l2' },
    { id: 'l16-rp-l2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Объясни проблему с размером.', model: 'Sajnos túl kicsi. Egy nagyobbat szeretnék.', next: 'l16-rp-s3' },
    { id: 'l16-rp-s3', speaker: 'waiter', prompt: 'Rendben. Van blokkja?', next: 'l16-rp-l3' },
    { id: 'l16-rp-l3', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Скажи, что чек у тебя и ты платил картой.', model: 'Igen, itt van. Kártyával fizettem.', next: 'l16-rp-s4' },
    { id: 'l16-rp-s4', speaker: 'waiter', prompt: 'Értem. Ebben a méretben sajnos nincs kék, de van fekete, vagy választhat egy másik modellt.', next: 'l16-rp-l4' },
    { id: 'l16-rp-l4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Задай вопрос о размере или другом цвете.', model: 'A fekete milyen méretben van? Van esetleg másik színben?', next: 'l16-rp-s5' },
    { id: 'l16-rp-s5', speaker: 'waiter', prompt: 'A fekete megfelelő méretű és ugyanannyiba kerül. A másik modell viszont ötezer forinttal drágább.', next: 'l16-rp-l5' },
    { id: 'l16-rp-l5', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Сравни варианты и задай практический вопрос.', model: 'A másik túl drága. Felpróbálhatom a fekete kabátot?', next: 'l16-rp-s6' },
    { id: 'l16-rp-s6', speaker: 'waiter', prompt: 'Persze. A próbafülke jobbra van.', next: 'l16-rp-l6' },
    { id: 'l16-rp-l6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'После примерки выбери решение.', model: 'Ez kényelmes, és jó a mérete. Akkor a fekete kabátot választom.', next: 'l16-rp-s7' },
    { id: 'l16-rp-s7', speaker: 'waiter', prompt: 'Rendben, akkor ezt azonnal kicserélem. Nincs árkülönbözet.', next: 'l16-rp-l7' },
    { id: 'l16-rp-l7', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Уточни документ об обмене.', model: 'Köszönöm. Kapok új blokkot is a cseréről?', next: 'l16-rp-s8' },
    { id: 'l16-rp-s8', speaker: 'waiter', prompt: 'Igen, természetesen. Itt az új blokk.', next: 'l16-rp-l8' },
    { id: 'l16-rp-l8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Вежливо заверши разговор.', model: 'Nagyon köszönöm a segítséget. Viszontlátásra!', next: 'l16-rp-s9' },
    { id: 'l16-rp-s9', speaker: 'waiter', prompt: 'Nagyon szívesen. Viszontlátásra!' },
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
    {
      id: 1,
      eyebrow: 'УРОК 16 · 1/11 · CAN-DO',
      title: 'Vásárlás magyarul',
      subtitle: 'От вопроса о цене до обмена: карта практических действий',
      type: 'overview',
      note: 'На этом слайде фразы учим как готовые коммуникативные блоки. Форму -val/-vel начнём разбирать на 16.2, а ассимиляцию после согласных — только на 16.3.',
      warn: 'Не пытайся сейчас разбирать каждое окончание внутри вежливых фраз. Сначала пойми, КОГДА фраза нужна в магазине.',
      task: 'Пройди мысленно покупку по шагам: цена → размер/цвет → примерка → оплата → возможный обмен. Для каждого шага выбери одну венгерскую фразу.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Спросить цену</h4>

        <p>
          <button class="speak-btn" data-speak-text="Mennyibe kerül?" data-speak-lang="hu-HU">Mennyibe kerül?</button>
          — Сколько стоит?
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Найти подходящий вариант</h4>

        <p>
          <button class="speak-btn" data-speak-text="Milyen méretben van?" data-speak-lang="hu-HU">Milyen méretben van?</button>
          — В каком размере есть?
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Van ebből nagyobb?" data-speak-lang="hu-HU">Van ebből nagyobb?</button>
          — Есть размер побольше?
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Van másik színben?" data-speak-lang="hu-HU">Van másik színben?</button>
          — Есть в другом цвете?
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Примерить</h4>

        <p>
          <button class="speak-btn" data-speak-text="Felpróbálhatom?" data-speak-lang="hu-HU">Felpróbálhatom?</button>
          — Можно примерить?
        </p>

        <div class="note">
          Эта форма пока нужна как готовая вежливая фраза.
          Отдельную грамматику возможности здесь не вводим.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Сказать способ оплаты</h4>

        <p>
          <button class="speak-btn" data-speak-text="Kártyával fizetek." data-speak-lang="hu-HU">Kártyával fizetek.</button>
          — Я плачу картой.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Készpénzzel fizetek." data-speak-lang="hu-HU">Készpénzzel fizetek.</button>
          — Я плачу наличными.
        </p>

        <div class="note">
          Именно в таких фразах новая форма Lesson 16 показывает средство / способ:
          чем или с помощью чего выполняется действие.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Если товар нужно обменять</h4>

        <p>
          <button class="speak-btn" data-speak-text="Ki szeretném cserélni." data-speak-lang="hu-HU">Ki szeretném cserélni.</button>
          — Я хотел(а) бы обменять.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Van blokkja?" data-speak-lang="hu-HU">Van blokkja?</button>
          — У вас есть чек?
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Вторая функция новой формы: «с кем?»</h4>

        <p>
          <button class="speak-btn" data-speak-text="Annával jöttem." data-speak-lang="hu-HU">Annával jöttem.</button>
          — Я пришёл / пришла с Анной.
        </p>

        <div class="note">
          На 16.2 сравним две функции: средство действия и сопровождение.
          Формы после согласной специально оставляем для 16.3.
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка сценария</summary>
          <p class="mt-3">Ты не знаешь цену — какую фразу выберешь?</p>
          <p>Размер мал — что спросишь дальше?</p>
          <p>Хочешь платить картой — какая фраза нужна?</p>
          <p>Товар не подходит — как начать просьбу об обмене?</p>
        </details>
      `,
    },    {
      id: 2,
      eyebrow: 'УРОК 16 · 2/11 · -VAL/-VEL',
      title: 'Средство и сопровождение',
      subtitle: 'Две функции + образование после гласной',
      type: 'grammar',
      note: 'На 16.2 работаем только со словами, которые заканчиваются гласной. Если слово заканчивается согласной, пока не присоединяй суффикс механически — это тема 16.3.',
      warn: 'Не путай с дательным падежом прошлого урока: здесь вопрос не «кому?», а «чем / с помощью чего?» или «с кем?».',
      task: 'Сначала определи функцию через вопрос. Потом выбери вариант суффикса по гармонии гласных. После этого проверь, не нужно ли удлинить конечные a/e.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Два диагностических вопроса</h4>

        <table class="conj">
          <tr><th>Функция</th><th>Вопрос</th><th>Смысл</th></tr>
          <tr>
            <td>средство / способ</td>
            <td><button class="speak-btn" data-speak-text="Mivel?" data-speak-lang="hu-HU">Mivel?</button></td>
            <td>чем? с помощью чего?</td>
          </tr>
          <tr>
            <td>сопровождение</td>
            <td><button class="speak-btn" data-speak-text="Kivel?" data-speak-lang="hu-HU">Kivel?</button></td>
            <td>с кем?</td>
          </tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="Kártyával fizetek." data-speak-lang="hu-HU">Kártyával fizetek.</button>
          — способ оплаты.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Annával jöttem." data-speak-lang="hu-HU">Annával jöttem.</button>
          — сопровождение.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Как выбрать вариант суффикса</h4>

        <table class="conj">
          <tr><th>Гармония знакомого слова</th><th>Выбор</th><th>Пример</th></tr>
          <tr><td>задний ряд: a, á, o, ó, u, ú</td><td><b>-val</b></td><td><button class="speak-btn" data-speak-text="autóval" data-speak-lang="hu-HU">autóval</button></td></tr>
          <tr><td>передний ряд: e, é, i, í, ö, ő, ü, ű</td><td><b>-vel</b></td><td><button class="speak-btn" data-speak-text="cipővel" data-speak-lang="hu-HU">cipővel</button></td></tr>
        </table>

        <div class="note">
          Для первого прохода используем знакомые прозрачные формы.
          Смешанные и заимствованные слова не нужны, чтобы понять базовый принцип.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Краткие конечные a/e удлиняются</h4>

        <table class="conj">
          <tr><th>Основа</th><th>Форма</th><th>Что изменилось</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kártya" data-speak-lang="hu-HU">kártya</button></td>
            <td><button class="speak-btn" data-speak-text="kártyával" data-speak-lang="hu-HU">kártyával</button></td>
            <td>a → á</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kefe" data-speak-lang="hu-HU">kefe</button></td>
            <td><button class="speak-btn" data-speak-text="kefével" data-speak-lang="hu-HU">kefével</button></td>
            <td>e → é</td>
          </tr>
        </table>

        <div class="warn">
          Ошибки: <s>kártyaval</s>, <s>kefevel</s>.
          Перед новым суффиксом конечные краткие a/e не остаются краткими.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Уже долгую конечную гласную не удлиняем ещё раз</h4>

        <p>
          <button class="speak-btn" data-speak-text="autó" data-speak-lang="hu-HU">autó</button>
          →
          <button class="speak-btn" data-speak-text="autóval" data-speak-lang="hu-HU">autóval</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="cipő" data-speak-lang="hu-HU">cipő</button>
          →
          <button class="speak-btn" data-speak-text="cipővel" data-speak-lang="hu-HU">cipővel</button>
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Алгоритм</h4>

        <ol class="tasklist">
          <li>спроси: «чем?» или «с кем?»;</li>
          <li>выбери гармонический вариант;</li>
          <li>если конец a/e — сделай á/é;</li>
          <li>если конечная гласная уже долгая — сохрани её;</li>
          <li><b>если слово заканчивается согласной — остановись: правило меняется на 16.3.</b></li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка</summary>
          <p class="mt-3">карта как способ оплаты → какая функция?</p>
          <p>Анна как спутник → какая функция?</p>
          <p>у слова на конечную a → что произойдёт перед суффиксом?</p>
        </details>
      `,
    },    {
      id: 3,
      eyebrow: 'УРОК 16 · 3/11 · АССИМИЛЯЦИЯ',
      title: 'Слова на согласную',
      subtitle: 'Последний согласный удваивается: как получить и правильно записать форму',
      type: 'grammar',
      note: 'Сначала всё равно выбираем гармонический вариант суффикса. Затем начальный v полностью уподобляется последнему согласному звуку основы.',
      warn: 'Не пиши механически *vonatval, *késvel или *pénzvel. После согласной видим результат ассимиляции, а не отдельную букву v.',
      task: 'Для каждой основы сделай четыре шага: гармония → последний согласный → ассимиляция → проверка орфографии долгого согласного.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Главная схема</h4>

        <div class="note">
          <b>основа на согласную + выбранный вариант суффикса → v становится тем же согласным → пишем долгий согласный</b>
        </div>

        <table class="conj">
          <tr><th>Основа</th><th>Выбор</th><th>Результат</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="vonat" data-speak-lang="hu-HU">vonat</button></td>
            <td>-val</td>
            <td><button class="speak-btn" data-speak-text="vonattal" data-speak-lang="hu-HU">vonattal</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kés" data-speak-lang="hu-HU">kés</button></td>
            <td>-vel</td>
            <td><button class="speak-btn" data-speak-text="késsel" data-speak-lang="hu-HU">késsel</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="cukor" data-speak-lang="hu-HU">cukor</button></td>
            <td>-val</td>
            <td><button class="speak-btn" data-speak-text="cukorral" data-speak-lang="hu-HU">cukorral</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="pénz" data-speak-lang="hu-HU">pénz</button></td>
            <td>-vel</td>
            <td><button class="speak-btn" data-speak-text="pénzzel" data-speak-lang="hu-HU">pénzzel</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Посмотри на изменение, а не запоминай слово целиком</h4>

        <p>
          <button class="speak-btn" data-speak-text="vonat → vonattal" data-speak-lang="hu-HU">vonat → vonattal</button>
          — конечный согласный становится долгим.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="pénz → pénzzel" data-speak-lang="hu-HU">pénz → pénzzel</button>
          — тот же принцип с другим согласным.
        </p>

        <div class="warn">
          Гармония никуда не исчезла: в первой форме сохраняется гласная заднего ряда суффикса,
          во второй — переднего ряда. Ассимилируется именно начальный согласный суффикса.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Диграф: отдельное правило написания</h4>

        <p>
          <button class="speak-btn" data-speak-text="busz → busszal" data-speak-lang="hu-HU">busz → busszal</button>
        </p>

        <div class="note">
          Конечный венгерский диграф обозначает один согласный звук.
          Его долгий вариант пишется по венгерской орфографии:
          <b>sz → ssz</b>. Поэтому не <s>buszszal</s> и не <s>buszval</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Если согласный уже долгий</h4>

        <p>
          <button class="speak-btn" data-speak-text="toll → tollal" data-speak-lang="hu-HU">toll → tollal</button>
        </p>

        <div class="warn">
          В обычном венгерском написании три одинаковые согласные подряд не оставляют:
          не <s>tolllal</s>, а <b>tollal</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Суффикс после притяжательной формы</h4>

        <p>
          <button class="speak-btn" data-speak-text="barátom → barátommal" data-speak-lang="hu-HU">barátom → barátommal</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="A barátommal jöttem." data-speak-lang="hu-HU">A barátommal jöttem.</button>
          — Я пришёл / пришла с моим другом или подругой.
        </p>

        <div class="note">
          Смотри на фактический конец уже готовой формы:
          здесь основа перед новым суффиксом заканчивается на <b>m</b>, поэтому получаем долгий <b>m</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Одна полезная личная форма</h4>

        <p>
          <button class="speak-btn" data-speak-text="Velem jössz?" data-speak-lang="hu-HU">Velem jössz?</button>
          — Ты идёшь со мной?
        </p>

        <div class="note">
          Эту форму пока запомни как готовый блок «со мной».
          Полный ряд личных форм здесь не нужен.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Алгоритм перед упражнением</h4>

        <ol class="tasklist">
          <li>определи функцию и выбери гармонический вариант;</li>
          <li>посмотри на последний согласный основы;</li>
          <li>замени начальный согласный суффикса этим звуком;</li>
          <li>запиши долгий согласный по правилам венгерской орфографии;</li>
          <li>отдельно проверь диграфы и уже долгие согласные.</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка</summary>
          <p class="mt-3">Почему после основы на согласную нельзя просто приписать видимый вариант суффикса?</p>
          <p>Почему в форме от слова «автобус» появляется особое написание долгого диграфа?</p>
          <p>Почему после уже долгого согласного не появляются три одинаковые буквы?</p>
        </details>
      `,
    },    {
      id: 4,
      eyebrow: 'УРОК 16 · 4/11 · КОНТЕКСТ',
      title: 'Форма и решение задачи',
      subtitle: '14 ситуаций: сначала грамматика, затем реальное решение в магазине',
      type: 'practice',
      activities: [L16_CP],
      note: 'Первые задания проверяют образование новой формы, остальные — выбор подходящей магазинной реплики. Не решай все 14 одним способом.',
      warn: 'Если задание просит форму слова, работай по алгоритму 16.2–16.3. Если это ситуация в магазине, сначала пойми цель разговора и только потом выбирай фразу.',
      task: 'Пройди 14 ситуаций. Для зачёта нужно минимум 11 правильных. После ошибки назови её тип: гармония, ассимиляция, орфография или неверная коммуникативная функция.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Два режима работы</h4>

        <table class="conj">
          <tr><th>Если видишь...</th><th>Что делать</th></tr>
          <tr><td>слово в скобках и пропуск</td><td>построить форму по правилам предыдущих двух слайдов</td></tr>
          <tr><td>описание магазинной ситуации</td><td>определить цель и выбрать естественную реплику</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Грамматическая дорожка</h4>

        <ol class="tasklist">
          <li>слово заканчивается гласной или согласной?</li>
          <li>какой гармонический вариант нужен?</li>
          <li>если конец краткий a/e — удлини его;</li>
          <li>если конец согласный — выполни ассимиляцию;</li>
          <li>проверь диграф или уже долгий согласный.</li>
        </ol>

        <p>
          <button class="speak-btn" data-speak-text="Kártyával fizetek." data-speak-lang="hu-HU">Kártyával fizetek.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Busszal jöttem." data-speak-lang="hu-HU">Busszal jöttem.</button>
        </p>

        <div class="note">
          Эти два примера напоминают разные механизмы:
          форма после гласной и форма после согласного диграфа.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Магазинная дорожка: размер, цвет, примерка</h4>

        <p>
          <button class="speak-btn" data-speak-text="Milyen méretben van?" data-speak-lang="hu-HU">Milyen méretben van?</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Van ebből nagyobb?" data-speak-lang="hu-HU">Van ebből nagyobb?</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Van másik színben?" data-speak-lang="hu-HU">Van másik színben?</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Felpróbálhatom?" data-speak-lang="hu-HU">Felpróbálhatom?</button>
        </p>

        <div class="note">
          Здесь не анализируй каждое окончание.
          Цель — быстро распознать коммуникативную функцию готовой фразы.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Если товар не подходит</h4>

        <p>
          <button class="speak-btn" data-speak-text="Sajnos ez túl kicsi." data-speak-lang="hu-HU">Sajnos ez túl kicsi.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Inkább egy nagyobbat szeretnék." data-speak-lang="hu-HU">Inkább egy nagyobbat szeretnék.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Ki szeretném cserélni." data-speak-lang="hu-HU">Ki szeretném cserélni.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Van blokkja?" data-speak-lang="hu-HU">Van blokkja?</button>
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Цена и выбор между вариантами</h4>

        <p>
          <button class="speak-btn" data-speak-text="Melyik olcsóbb?" data-speak-lang="hu-HU">Melyik olcsóbb?</button>
          — Какой дешевле?
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Ez drágább." data-speak-lang="hu-HU">Ez drágább.</button>
          — Это дороже.
        </p>

        <div class="note">
          На этом слайде эти сравнительные слова нужны для понимания выбора между ценами.
          Полную систему сравнения прилагательных здесь не вводим.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. После каждой ошибки — диагноз</h4>

        <table class="conj">
          <tr><th>Ошибка</th><th>Что повторить</th></tr>
          <tr><td>не тот вариант суффикса</td><td>гармонию</td></tr>
          <tr><td>сохранил v после согласной</td><td>ассимиляцию</td></tr>
          <tr><td>неверно записал долгий согласный</td><td>орфографию</td></tr>
          <tr><td>выбрал грамматически возможную, но нелогичную фразу</td><td>коммуникативную функцию</td></tr>
        </table>

        <div class="warn">
          Порог: <b>11 из 14</b>. Если не прошёл, не повторяй весь урок:
          вернись именно к типу ошибки из таблицы.
        </div>
      `,
    },    {
      id: 5,
      eyebrow: 'УРОК 16 · 5/11 · ЧТЕНИЕ',
      title: 'Egy kabát, amit ki kellett cserélni',
      subtitle: 'История покупки и обмена: читай по хронологии, а не по отдельным словам',
      type: 'reading',
      activities: [L16_READING],
      note: 'В тексте три смысловых этапа: покупка → проблема дома → возврат в магазин и решение. Сначала восстанови эту последовательность, затем отвечай на вопросы.',
      warn: 'Не ищи ответ по одному совпавшему слову. Для каждого вопроса найди целое предложение или связку предложений, которые подтверждают выбор.',
      task: 'Прочитай текст в три прохода. После этого ответь на 8 вопросов; для прохождения нужно минимум 6 правильных.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. До чтения: шесть ориентиров</h4>

        <table class="conj">
          <tr><th>Ориентир</th><th>Что отслеживать</th></tr>
          <tr><td>скидка / акция</td><td>почему покупатель обратил внимание на товар</td></tr>
          <tr><td>первоначальный выбор</td><td>цвет, размер и впечатление в примерочной</td></tr>
          <tr><td>оплата</td><td>как была завершена покупка</td></tr>
          <tr><td>проблема дома</td><td>что оказалось неудобным после повторной примерки</td></tr>
          <tr><td>возврат</td><td>что покупатель принёс обратно и чего хотел</td></tr>
          <tr><td>решение</td><td>какие варианты предложили и чем всё закончилось</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Полезные слова для узнавания</h4>

        <p>
          <button class="speak-btn" data-speak-text="kedvezmény" data-speak-lang="hu-HU">kedvezmény</button>
          — скидка.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="próbafülke" data-speak-lang="hu-HU">próbafülke</button>
          — примерочная.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="blokk" data-speak-lang="hu-HU">blokk</button>
          — чек.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="méret" data-speak-lang="hu-HU">méret</button>
          — размер.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="árkülönbözet" data-speak-lang="hu-HU">árkülönbözet</button>
          — разница в цене.
        </p>

        <div class="note">
          Эти слова нужны прежде всего для понимания истории.
          Не нужно превращать их все в отдельную грамматическую тему.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Первый проход — только хронология</h4>

        <ol class="tasklist">
          <li>что произошло в магазине при первой покупке;</li>
          <li>что выяснилось после возвращения домой;</li>
          <li>зачем покупатель пришёл снова;</li>
          <li>какие варианты появились в конце.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Второй проход — ищи доказательства</h4>

        <table class="conj">
          <tr><th>Категория вопроса</th><th>Что искать в тексте</th></tr>
          <tr><td>причина</td><td>слова, объясняющие «почему»</td></tr>
          <tr><td>выбор</td><td>конкретное действие покупателя</td></tr>
          <tr><td>проблема</td><td>описание того, что оказалось неудобным</td></tr>
          <tr><td>варианты</td><td>перечень предложений продавца</td></tr>
          <tr><td>финал</td><td>последнее принятое решение</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Третий проход — 8 вопросов</h4>

        <div class="note">
          На каждый ответ найди текстовое доказательство.
          Если два варианта кажутся возможными, перечитай именно тот фрагмент,
          где меняется ситуация: покупка, дом или обмен.
        </div>

        <div class="warn">
          Порог Reading: <b>6 из 8</b>. Если ошибся, сначала проверь хронологию,
          а не переводи весь текст слово за словом.
        </div>
      `,
    },    {
      id: 6,
      eyebrow: 'УРОК 16 · 6/11 · АУДИРОВАНИЕ',
      title: 'Rövid vásárlás',
      subtitle: 'Слушай четыре детали: товар → количество → цена → способ оплаты',
      type: 'listening',
      activities: [L16_LISTENING],
      note: 'Это короткая опубликованная запись. Сначала слушай без транскрипта. Второй проход используй только для проверки четырёх деталей.',
      warn: 'Не пытайся понять каждое слово. Если услышал товар, количество, цену и способ оплаты, основная задача уже решена.',
      task: 'Прослушай запись максимум два раза перед ответами. В Listening 4 вопроса; для прохождения нужно минимум 3 правильных.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Четыре вопроса, которые держим в голове</h4>

        <table class="conj">
          <tr><th>Деталь</th><th>Вопрос-сигнал</th></tr>
          <tr>
            <td>товар</td>
            <td><button class="speak-btn" data-speak-text="Mit kér?" data-speak-lang="hu-HU">Mit kér?</button></td>
          </tr>
          <tr>
            <td>количество</td>
            <td><button class="speak-btn" data-speak-text="Hány darabot kér?" data-speak-lang="hu-HU">Hány darabot kér?</button></td>
          </tr>
          <tr>
            <td>цена</td>
            <td><button class="speak-btn" data-speak-text="Mennyibe kerül?" data-speak-lang="hu-HU">Mennyibe kerül?</button></td>
          </tr>
          <tr>
            <td>оплата</td>
            <td><button class="speak-btn" data-speak-text="Hogyan fizet?" data-speak-lang="hu-HU">Hogyan fizet?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Первый проход — только смысл</h4>

        <ol class="tasklist">
          <li>кто говорит: покупатель или продавец;</li>
          <li>что происходит: выбор, вопрос о цене, количество или оплата;</li>
          <li>не останавливайся из-за одного незнакомого слова.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Второй проход — четыре отметки</h4>

        <table class="conj">
          <tr><th>Что услышал</th><th>Твоя заметка</th></tr>
          <tr><td>товар</td><td>...</td></tr>
          <tr><td>количество</td><td>...</td></tr>
          <tr><td>цена</td><td>...</td></tr>
          <tr><td>способ оплаты</td><td>...</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Как не потерять число</h4>

        <div class="note">
          Если слышишь цену или количество, не пытайся одновременно переводить соседние слова.
          Сначала зафиксируй число, затем продолжай слушать.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. После прослушивания</h4>

        <div class="note">
          Ответь на 4 вопроса только по тому, что реально услышал.
          Не подставляй информацию из Reading или RolePlay: это другая ситуация.
        </div>

        <div class="warn">
          Порог Listening: <b>3 из 4</b>.
          Транскрипт не нужен до первой собственной попытки.
        </div>
      `,
    },    {
      id: 7,
      eyebrow: 'УРОК 16 · 7/11 · ROLEPLAY',
      title: 'Termékcsere',
      subtitle: '8 реплик ученика: от просьбы об обмене до нового чека',
      type: 'roleplay',
      activities: [L16_ROLEPLAY],
      note: 'RolePlay проверяет открытую коммуникацию и даёт PARTIAL evidence. Система видит прохождение сценария, но не должна притворяться, будто полностью оценила качество свободной речи.',
      warn: 'Не читай готовые model-реплики подряд. На слайде только опоры: пойми функцию своей очереди и сформулируй ответ самостоятельно.',
      task: 'Пройди 8 реплик ученика: обмен → проблема с размером → чек и оплата → вопрос о варианте → примерка/сравнение → выбор → новый чек → вежливое завершение.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Карта разговора из 8 шагов</h4>

        <table class="conj">
          <tr><th>Шаг</th><th>Что должен сделать ученик</th></tr>
          <tr><td>1</td><td>поприветствовать и сказать, что хочет обменять товар</td></tr>
          <tr><td>2</td><td>объяснить проблему с размером</td></tr>
          <tr><td>3</td><td>показать чек и назвать способ оплаты</td></tr>
          <tr><td>4</td><td>спросить о другом размере или цвете</td></tr>
          <tr><td>5</td><td>сравнить варианты и попросить примерку</td></tr>
          <tr><td>6</td><td>после примерки выбрать решение</td></tr>
          <tr><td>7</td><td>уточнить новый документ об обмене</td></tr>
          <tr><td>8</td><td>поблагодарить и завершить разговор</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Опоры для начала реплики</h4>

        <p>
          <button class="speak-btn" data-speak-text="Jó napot!" data-speak-lang="hu-HU">Jó napot!</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Ki szeretném cserélni." data-speak-lang="hu-HU">Ki szeretném cserélni.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Sajnos túl kicsi." data-speak-lang="hu-HU">Sajnos túl kicsi.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Kártyával fizettem." data-speak-lang="hu-HU">Kártyával fizettem.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Van másik színben?" data-speak-lang="hu-HU">Van másik színben?</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Felpróbálhatom?" data-speak-lang="hu-HU">Felpróbálhatom?</button>
        </p>

        <div class="note">
          Эти фразы — точки старта, а не полный ответ для каждой очереди.
          Добавляй конкретный товар, размер, цвет или решение по ситуации.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Что важно понимать от продавца</h4>

        <p>
          <button class="speak-btn" data-speak-text="Mi a probléma a kabáttal?" data-speak-lang="hu-HU">Mi a probléma a kabáttal?</button>
          — в чём проблема с курткой?
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Van blokkja?" data-speak-lang="hu-HU">Van blokkja?</button>
          — у вас есть чек?
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Nincs kék, de van fekete." data-speak-lang="hu-HU">Nincs kék, de van fekete.</button>
          — синего варианта нет, но есть чёрный.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Ötezer forinttal drágább." data-speak-lang="hu-HU">Ötezer forinttal drágább.</button>
          — дороже на пять тысяч форинтов.
        </p>

        <div class="note">
          Здесь новая форма урока помогает понимать разницу в цене:
          сумма + новая форма показывает «на сколько дороже».
          Полную тему сравнительных конструкций здесь не расширяем.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Как выбрать решение после примерки</h4>

        <p>
          <button class="speak-btn" data-speak-text="Ez kényelmes." data-speak-lang="hu-HU">Ez kényelmes.</button>
          — это удобно.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Ezt választom." data-speak-lang="hu-HU">Ezt választom.</button>
          — выбираю это.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Завершение обмена</h4>

        <p>
          <button class="speak-btn" data-speak-text="Kapok új blokkot?" data-speak-lang="hu-HU">Kapok új blokkot?</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Nagyon köszönöm a segítséget." data-speak-lang="hu-HU">Nagyon köszönöm a segítséget.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Viszontlátásra!" data-speak-lang="hu-HU">Viszontlátásra!</button>
        </p>

        <div class="warn">
          Цель RolePlay — не повторить модель слово в слово, а пройти все 8 функций разговора
          и сохранить смысл даже при небольшой грамматической ошибке.
        </div>
      `,
    },    {
      id: 8,
      eyebrow: 'УРОК 16 · 8/11 · ПИСЬМО',
      title: 'Üzenet az üzletnek',
      subtitle: '80–100 слов: понятная просьба об обмене без копирования образца',
      type: 'writing',
      activities: [L16_WRITING],
      note: 'Это открытая письменная работа и она даёт PARTIAL evidence. Автоматическая система может зафиксировать выполнение, но не должна считать свободный текст полностью проверенным.',
      warn: 'Не открывай model answer до своей попытки. Сначала составь сообщение по структуре, затем проверь содержание и только потом сравнивай с образцом.',
      task: 'Напиши 80–100 слов: что/когда купил → как заплатил → проблема → какую замену хочешь → есть ли чек → один практический вопрос → вежливое завершение.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Структура сообщения из 7 блоков</h4>

        <table class="conj">
          <tr><th>Блок</th><th>Что написать</th></tr>
          <tr><td>1</td><td>что и когда ты купил(а)</td></tr>
          <tr><td>2</td><td>как заплатил(а)</td></tr>
          <tr><td>3</td><td>в чём проблема</td></tr>
          <tr><td>4</td><td>какую замену хочешь</td></tr>
          <tr><td>5</td><td>есть ли у тебя чек</td></tr>
          <tr><td>6</td><td>один практический вопрос магазину</td></tr>
          <tr><td>7</td><td>вежливое завершение</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Короткие опоры — не готовое письмо</h4>

        <p>
          <button class="speak-btn" data-speak-text="Szombaton vettem..." data-speak-lang="hu-HU">Szombaton vettem...</button>
          — в субботу я купил(а)...
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Kártyával fizettem." data-speak-lang="hu-HU">Kártyával fizettem.</button>
          — я заплатил(а) картой.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Sajnos túl kicsi." data-speak-lang="hu-HU">Sajnos túl kicsi.</button>
          — к сожалению, слишком мало.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Egy nagyobbat szeretnék." data-speak-lang="hu-HU">Egy nagyobbat szeretnék.</button>
          — я хотел(а) бы вариант побольше.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Van blokkom." data-speak-lang="hu-HU">Van blokkom.</button>
          — у меня есть чек.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Van ebből nagyobb?" data-speak-lang="hu-HU">Van ebből nagyobb?</button>
          — есть вариант побольше?
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Köszönöm a segítséget." data-speak-lang="hu-HU">Köszönöm a segítséget.</button>
          — спасибо за помощь.
        </p>

        <div class="note">
          Используй эти опоры только там, где они подходят к твоей истории.
          Добавь конкретный товар, цвет, размер и дату самостоятельно.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Связность: достаточно простых связок</h4>

        <p>
          <button class="speak-btn" data-speak-text="Sajnos..." data-speak-lang="hu-HU">Sajnos...</button>
          →
          <button class="speak-btn" data-speak-text="Ezért..." data-speak-lang="hu-HU">Ezért...</button>
          →
          <button class="speak-btn" data-speak-text="Köszönöm..." data-speak-lang="hu-HU">Köszönöm...</button>
        </p>

        <div class="note">
          Для A2 лучше несколько коротких ясных предложений,
          чем одно длинное предложение с новой грамматикой.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Грамматическая самопроверка</h4>

        <ol class="tasklist">
          <li>покупка уже произошла → используй знакомое прошедшее время;</li>
          <li>способ оплаты → проверь новую форму этого урока;</li>
          <li>размер и цвет → используй уже знакомые магазинные фразы;</li>
          <li>не добавляй сложную новую грамматику ради формальности;</li>
          <li>проверь, что практический вопрос действительно является вопросом.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Чек-лист перед отправкой</h4>

        <table class="conj">
          <tr><th>Есть?</th><th>Требование</th></tr>
          <tr><td>□</td><td>80–100 слов</td></tr>
          <tr><td>□</td><td>товар + когда куплен</td></tr>
          <tr><td>□</td><td>способ оплаты</td></tr>
          <tr><td>□</td><td>проблема</td></tr>
          <tr><td>□</td><td>желаемая замена</td></tr>
          <tr><td>□</td><td>информация о чеке</td></tr>
          <tr><td>□</td><td>один практический вопрос</td></tr>
          <tr><td>□</td><td>вежливое завершение</td></tr>
        </table>

        <div class="warn">
          Если текст короче 80 слов, не добавляй бессмысленные фразы:
          лучше уточни товар, обстоятельства проблемы или желаемую замену.
        </div>
      `,
    },    {
      id: 9,
      eyebrow: 'УРОК 16 · 9/11 · SPEAKING PRACTICE',
      title: 'Egy vásárlás története',
      subtitle: '1,5–2 минуты: расскажи о покупке по опорной карте, а не по готовому тексту',
      type: 'speaking',
      optionalSpeaking: L16_SPEAKING,
      note: 'Необязательная самопрактика: без микрофона, score и evidence. Ничего записывать или отправлять не нужно.',
      warn: 'Не пиши полный монолог заранее. Подготовь 6–8 ключевых слов: товар, спутник, цена, оплата, проблема, решение, итог.',
      task: 'Говори 1,5–2 минуты. Используй 6 смысловых блоков и хотя бы одну форму с -val/-vel в естественном контексте.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Карта рассказа из 6 блоков</h4>

        <table class="conj">
          <tr><th>Блок</th><th>О чём сказать</th></tr>
          <tr><td>1</td><td>что ты хотел(а) купить и зачем</td></tr>
          <tr><td>2</td><td>с кем пришёл / пришла</td></tr>
          <tr><td>3</td><td>сколько стоил товар и как ты заплатил(а)</td></tr>
          <tr><td>4</td><td>какая возникла проблема или развилка</td></tr>
          <tr><td>5</td><td>какое решение ты выбрал(а)</td></tr>
          <tr><td>6</td><td>чем закончилась история и доволен(на) ли ты</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Стартовые опоры</h4>

        <p><button class="speak-btn" data-speak-text="Tegnap vásárolni mentem." data-speak-lang="hu-HU">Tegnap vásárolni mentem.</button></p>
        <p><button class="speak-btn" data-speak-text="A barátommal mentem." data-speak-lang="hu-HU">A barátommal mentem.</button></p>
        <p><button class="speak-btn" data-speak-text="Tizenkétezer forintba került." data-speak-lang="hu-HU">Tizenkétezer forintba került.</button></p>
        <p><button class="speak-btn" data-speak-text="Kártyával fizettem." data-speak-lang="hu-HU">Kártyával fizettem.</button></p>
        <p><button class="speak-btn" data-speak-text="Sajnos..." data-speak-lang="hu-HU">Sajnos...</button></p>
        <p><button class="speak-btn" data-speak-text="Végül..." data-speak-lang="hu-HU">Végül...</button></p>

        <div class="note">
          Эти опоры помогают начать блок, но не составляют готовый рассказ.
          Меняй товар, цену, спутника и проблему под свою историю.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Где естественно использовать новую форму</h4>

        <table class="conj">
          <tr><th>Смысл</th><th>Пример</th></tr>
          <tr>
            <td>с кем</td>
            <td><button class="speak-btn" data-speak-text="A barátommal mentem." data-speak-lang="hu-HU">A barátommal mentem.</button></td>
          </tr>
          <tr>
            <td>чем / каким способом</td>
            <td><button class="speak-btn" data-speak-text="Kártyával fizettem." data-speak-lang="hu-HU">Kártyával fizettem.</button></td>
          </tr>
        </table>

        <div class="warn">
          Не вставляй форму искусственно ради галочки.
          Она должна реально означать сопровождение или способ действия.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Если остановился</h4>

        <p><button class="speak-btn" data-speak-text="Egy pillanat..." data-speak-lang="hu-HU">Egy pillanat...</button></p>
        <p><button class="speak-btn" data-speak-text="Azt szeretném mondani, hogy..." data-speak-lang="hu-HU">Azt szeretném mondani, hogy...</button></p>

        <div class="note">
          Короткая пауза лучше, чем переход на русский.
          Продолжай с ближайшего смыслового блока.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Самопроверка после рассказа</h4>

        <ol class="tasklist">
          <li>говорил(а) примерно 1,5–2 минуты;</li>
          <li>назвал(а) цель покупки и спутника;</li>
          <li>назвал(а) цену и способ оплаты;</li>
          <li>описал(а) проблему или выбор;</li>
          <li>объяснил(а) решение;</li>
          <li>завершил(а) итогом истории.</li>
        </ol>

        <div class="warn">
          Эта практика не создаёт evidence и не меняет статус целей автоматически.
          Она нужна для устной автоматизации уже изученного материала.
        </div>
      `,
    },    {
      id: 10,
      eyebrow: 'УРОК 16 · 10/11 · ПОВТОРЕНИЕ',
      title: 'Hasznos mondatok',
      subtitle: 'Не список для чтения, а 5 ситуаций, на которые нужно быстро ответить',
      type: 'review',
      note: 'Повторение перед итогом: сначала представь ситуацию по-русски, затем попробуй произнести венгерскую фразу без подсказки и только потом открой вариант.',
      warn: 'Не добавляем новую грамматику. Цель — быстро извлекать уже изученные фразы из реальной ситуации.',
      task: 'Пройди 5 ситуаций. В каждой сначала скажи фразу вслух сам, затем нажми на венгерский вариант и сравни произношение.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Цена и выбор товара</h4>

        <p><button class="speak-btn" data-speak-text="Mennyibe kerül?" data-speak-lang="hu-HU">Mennyibe kerül?</button></p>
        <p><button class="speak-btn" data-speak-text="Milyen méretben van?" data-speak-lang="hu-HU">Milyen méretben van?</button></p>
        <p><button class="speak-btn" data-speak-text="Van ebből nagyobb?" data-speak-lang="hu-HU">Van ebből nagyobb?</button></p>
        <p><button class="speak-btn" data-speak-text="Van másik színben?" data-speak-lang="hu-HU">Van másik színben?</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Примерка</h4>

        <p><button class="speak-btn" data-speak-text="Felpróbálhatom?" data-speak-lang="hu-HU">Felpróbálhatom?</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Оплата и сопровождение</h4>

        <p><button class="speak-btn" data-speak-text="Kártyával fizetek." data-speak-lang="hu-HU">Kártyával fizetek.</button></p>
        <p><button class="speak-btn" data-speak-text="Készpénzzel fizetek." data-speak-lang="hu-HU">Készpénzzel fizetek.</button></p>
        <p><button class="speak-btn" data-speak-text="A barátommal jöttem." data-speak-lang="hu-HU">A barátommal jöttem.</button></p>

        <div class="note">
          Здесь быстро проверь две функции новой формы:
          способ действия и сопровождение.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Проблема и обмен</h4>

        <p><button class="speak-btn" data-speak-text="Sajnos ez túl kicsi." data-speak-lang="hu-HU">Sajnos ez túl kicsi.</button></p>
        <p><button class="speak-btn" data-speak-text="Inkább egy nagyobbat szeretnék." data-speak-lang="hu-HU">Inkább egy nagyobbat szeretnék.</button></p>
        <p><button class="speak-btn" data-speak-text="Ki szeretném cserélni." data-speak-lang="hu-HU">Ki szeretném cserélni.</button></p>
        <p><button class="speak-btn" data-speak-text="Van blokkja?" data-speak-lang="hu-HU">Van blokkja?</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Быстрая проверка формы</h4>

        <table class="conj">
          <tr><th>Смысл</th><th>Форма</th></tr>
          <tr>
            <td>картой</td>
            <td><button class="speak-btn" data-speak-text="kártyával" data-speak-lang="hu-HU">kártyával</button></td>
          </tr>
          <tr>
            <td>наличными</td>
            <td><button class="speak-btn" data-speak-text="készpénzzel" data-speak-lang="hu-HU">készpénzzel</button></td>
          </tr>
          <tr>
            <td>автобусом</td>
            <td><button class="speak-btn" data-speak-text="busszal" data-speak-lang="hu-HU">busszal</button></td>
          </tr>
          <tr>
            <td>с моим другом</td>
            <td><button class="speak-btn" data-speak-text="barátommal" data-speak-lang="hu-HU">barátommal</button></td>
          </tr>
        </table>

        <div class="note">
          Не выводи правило заново. Просто проверь, узнаёшь ли правильное написание автоматически.
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-челлендж без подсказки</summary>
          <p class="mt-3">Не знаешь цену. Что скажешь?</p>
          <p>Вещь мала. Как попросишь больший вариант?</p>
          <p>Хочешь примерить. Какая фраза нужна?</p>
          <p>Платишь картой. Какая форма?</p>
          <p>Хочешь обменять товар и у продавца нужен чек. Какие две реплики могут прозвучать?</p>
        </details>

        <div class="warn">
          Если одна ситуация не вспоминается, повтори только соответствующий блок.
          Следующий слайд — итоговая проверка целей Lesson 16.
        </div>
      `,
    },    {
      id: 11,
      eyebrow: 'УРОК 16 · 11/11 · ИТОГ',
      title: 'Összefoglalás',
      subtitle: 'Что уже должно работать после Lesson 16 — и чем это подтверждается',
      type: 'summary',
      activities: [L16_EXIT],
      note: 'Это учебный checkpoint Lesson 16, а не официальный сертификат уровня. DIRECT означает прямое подтверждение внутри автоматического задания после выполнения его порога; PARTIAL — открытая продукция, которую нельзя полностью оценить автоматически.',
      warn: 'Не путай три вещи: выбор -val/-vel по гармонии, ассимиляцию после согласной и коммуникативную функцию «чем / с кем». Это связанные, но разные шаги.',
      task: 'Перед Exit Check попробуй без подсказки выполнить 5 действий: построить форму, объяснить ассимиляцию, сказать способ оплаты/спутника, решить проблему обмена и понять сравнение цен.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Форма после гласной</h4>

        <table class="conj">
          <tr><th>Что проверяем</th><th>Пример</th></tr>
          <tr>
            <td>гармония + конечная краткая гласная</td>
            <td><button class="speak-btn" data-speak-text="kártya → kártyával" data-speak-lang="hu-HU">kártya → kártyával</button></td>
          </tr>
          <tr>
            <td>уже долгая конечная гласная</td>
            <td><button class="speak-btn" data-speak-text="autó → autóval" data-speak-lang="hu-HU">autó → autóval</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Форма после согласной</h4>

        <p>
          <button class="speak-btn" data-speak-text="vonat → vonattal" data-speak-lang="hu-HU">vonat → vonattal</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="busz → busszal" data-speak-lang="hu-HU">busz → busszal</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="barátom → barátommal" data-speak-lang="hu-HU">barátom → barátommal</button>
        </p>

        <div class="note">
          После согласной начальный согласный суффикса уподобляется конечному звуку основы,
          а написание долгого согласного нужно проверить отдельно.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Две коммуникативные функции</h4>

        <table class="conj">
          <tr><th>Смысл</th><th>Пример</th></tr>
          <tr>
            <td>чем / каким способом</td>
            <td><button class="speak-btn" data-speak-text="Kártyával fizetek." data-speak-lang="hu-HU">Kártyával fizetek.</button></td>
          </tr>
          <tr>
            <td>с кем</td>
            <td><button class="speak-btn" data-speak-text="A barátommal jöttem." data-speak-lang="hu-HU">A barátommal jöttem.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Реальная покупка и обмен</h4>

        <p><button class="speak-btn" data-speak-text="Mennyibe kerül?" data-speak-lang="hu-HU">Mennyibe kerül?</button></p>
        <p><button class="speak-btn" data-speak-text="Van ebből nagyobb?" data-speak-lang="hu-HU">Van ebből nagyobb?</button></p>
        <p><button class="speak-btn" data-speak-text="Felpróbálhatom?" data-speak-lang="hu-HU">Felpróbálhatom?</button></p>
        <p><button class="speak-btn" data-speak-text="Ki szeretném cserélni." data-speak-lang="hu-HU">Ki szeretném cserélni.</button></p>
        <p><button class="speak-btn" data-speak-text="Van blokkja?" data-speak-lang="hu-HU">Van blokkja?</button></p>

        <div class="note">
          Цель — не воспроизвести список, а выбрать правильную фразу по ситуации:
          цена, размер, примерка, обмен или чек.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Цена и сравнение</h4>

        <p>
          <button class="speak-btn" data-speak-text="Melyik olcsóbb?" data-speak-lang="hu-HU">Melyik olcsóbb?</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Ötezer forinttal drágább." data-speak-lang="hu-HU">Ötezer forinttal drágább.</button>
        </p>

        <div class="note">
          Здесь достаточно понимать простое сравнение цены и разницу в сумме.
          Полную новую тему сравнительных конструкций не вводим.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Что реально подтверждают задания</h4>

        <table class="conj">
          <tr><th>Навык</th><th>Основное доказательство</th><th>Статус</th></tr>
          <tr><td>образование -val/-vel</td><td>Controlled Practice</td><td><b>DIRECT</b> после порога</td></tr>
          <tr><td>ассимиляция после согласной</td><td>Controlled Practice</td><td><b>DIRECT</b> после порога</td></tr>
          <tr><td>средство / сопровождение</td><td>Controlled Practice + Writing</td><td><b>DIRECT + PARTIAL</b></td></tr>
          <tr><td>магазинный диалог / обмен</td><td>Listening + RolePlay + Writing</td><td><b>DIRECT + PARTIAL</b></td></tr>
          <tr><td>цены и простой выбор</td><td>Reading + Listening</td><td><b>DIRECT</b> после порога</td></tr>
        </table>

        <div class="note">
          RolePlay и Writing остаются открытой продукцией, поэтому сами по себе дают PARTIAL evidence.
          Необязательная Speaking Practice не создаёт evidence.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Финальная самопроверка</h4>

        <details class="note">
          <summary class="font-bold cursor-pointer">Открой после собственной попытки</summary>
          <p class="mt-3">Можешь построить одну форму после гласной и одну после согласной?</p>
          <p>Можешь объяснить, почему в форме «автобусом» меняется написание?</p>
          <p>Можешь сказать, чем платишь и с кем пришёл?</p>
          <p>Можешь спросить цену, больший размер, примерку и обмен?</p>
          <p>Можешь понять, какой товар дешевле и на сколько другой дороже?</p>
        </details>

        <div class="warn">
          Если открытая задача имеет статус PARTIAL, это не означает «не выучено».
          Это означает только, что автоматическая система не должна выдавать полную оценку свободной речи или письма.
        </div>
      `,
    }
  ],
  vocabulary: [    { id: 'l16_v1', hu: 'pénz', ru: 'деньги', category: 'Ядро', exampleSentence: 'Van elég pénzem.' }, { id: 'l16_v2', hu: 'ár', ru: 'цена', category: 'Ядро', exampleSentence: 'Mi az ára?' }, { id: 'l16_v3', hu: 'bankkártya', ru: 'банковская карта', category: 'Ядро', exampleSentence: 'Kártyával fizetek.' }, { id: 'l16_v4', hu: 'nyugta', ru: 'чек', category: 'Ядро', exampleSentence: 'Kérem a nyugtát.' }, { id: 'l16_v5', hu: 'méret', ru: 'размер', category: 'Ядро', exampleSentence: 'Milyen méret?' }, { id: 'l16_v6', hu: 'szín', ru: 'цвет', category: 'Ядро', exampleSentence: 'Szép szín.' }, { id: 'l16_v7', hu: 'kedvezmény', ru: 'скидка', category: 'Расширение', exampleSentence: 'Van kedvezmény?' }, { id: 'l16_v8', hu: 'próbafülke', ru: 'примерочная', category: 'Расширение', exampleSentence: 'Hol van a próbafülke?' },
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
