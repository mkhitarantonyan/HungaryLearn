import { Lesson, LessonActivity } from '../../types';

const L18_CONTROLLED: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l18-cp-contextual-modals',
  title: 'Модальные конструкции в практических ситуациях',
  passCount: 11,
  exercises: [
    { kind: 'singleChoice', id: 'l18-p5-cp-1', prompt: 'A · Ты сообщаешь о навыке вождения.', options: ['Tudok vezetni.', 'Lehet vezetni.', 'Vezetnem kell.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l18-p5-cp-2', prompt: 'A · Сегодня ты не можешь уйти с работы раньше.', options: ['Ma nem tudok korábban elmenni.', 'Ma nem szabad korábban elmenni.', 'Ma nem akarok korábban elmenni.'], correctIndex: 0 },
    { kind: 'fillGap', id: 'l18-p5-cp-3', prompt: 'B · Holnap korán felkelnem ___.', accept: ['kell'] },
    { kind: 'singleChoice', id: 'l18-p5-cp-4', prompt: 'B · Совет уставшему другу: «Тебе нужно отдохнуть».', options: ['Pihenned kell.', 'Pihenni tudsz.', 'Lehet pihenni.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l18-p5-cp-5', prompt: 'C · Табличка запрещает парковку.', options: ['Itt nem szabad parkolni.', 'Itt nem tudok parkolni.', 'Itt nem akarok parkolni.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l18-p5-cp-6', prompt: 'C · В музее ты спрашиваешь разрешение фотографировать.', options: ['Lehet itt fényképezni?', 'Tudok itt fényképezni?', 'Fényképeznem kell?'], correctIndex: 0 },
    { kind: 'fillGap', id: 'l18-p5-cp-7', prompt: 'C · Itt nem ___ dohányozni. (нельзя по правилу)', accept: ['szabad'] },
    { kind: 'singleChoice', id: 'l18-p5-cp-8', prompt: 'D · Ты прямо сообщаешь о намерении сходить в магазин.', options: ['El akarok menni a boltba.', 'El tudok menni a boltba.', 'El kell mennem a boltba?'], correctIndex: 0 },
    { kind: 'fillGap', id: 'l18-p5-cp-9', prompt: 'D · El ___ kezdeni magyarul tanulni. (я хочу начать)', accept: ['akarok'] },
    { kind: 'singleChoice', id: 'l18-p5-cp-10', prompt: 'E · Вежливо попроси время на приём.', options: ['Szeretnék időpontot kérni.', 'Időpontot akarok.', 'Időpontot tudok kérni.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l18-p5-cp-11', prompt: 'E · Вежливо скажи, что хотел(а) бы поговорить с координатором.', options: ['Szeretnék beszélni a koordinátorral.', 'Beszélni akarok a koordinátorral.', 'Beszélnem szabad.'], correctIndex: 0 },
    { kind: 'textInput', id: 'l18-p5-cp-12', prompt: 'A · dolgozik → базовый инфинитив', accept: ['dolgozni'] },
    { kind: 'singleChoice', id: 'l18-p5-cp-13', prompt: 'B · Как сказать «Завтра мне нужно работать»?', options: ['Holnap dolgoznom kell.', 'Holnap dolgozni tudok.', 'Holnap lehet dolgozni.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l18-p5-cp-14', prompt: 'E · Какой вариант является вежливым, а не прямым желанием?', options: ['Szeretnék egy kicsit pihenni.', 'Pihenni akarok.', 'Pihennem kell.'], correctIndex: 0 },
  ],
};

const L18_READING: LessonActivity = {
  kind: 'reading',
  id: 'l18-reading-first-day',
  title: 'Az első nap egy új munkahelyen',
  instructions: 'Прочитай связный текст и ответь на вопросы по смыслу.',
  content: {
    type: 'prose',
    title: 'Az első nap egy új munkahelyen',
    paragraphs: [
      'Dóra hétfőn kezdi az új munkáját egy kis könyvesboltban. Az üzlet kilenc órakor nyit, de az első héten már fél kilencre meg kell érkeznie. A kabátját és a táskáját a dolgozói szobában hagyhatja, az értékeit pedig egy zárható szekrénybe teheti. A szekrény kulcsát reggel az üzletvezetőtől kell elkérnie, este pedig vissza kell adnia.',
      'Mielőtt dolgozni kezd, be kell jelentkeznie a pénztár melletti számítógépen, és meg kell néznie a napi feladatokat. Az első nap még nem tud egyedül dolgozni a pénztárnál, ezért Ágnes, egy tapasztalt kolléga segít neki. Ha Dóra valamit nem ért, nyugodtan kérdezhet tőle vagy az üzletvezetőtől.',
      'Ebédelni a dolgozói szobában lehet, de az üzlettérben nem szabad enni vagy inni. Dohányozni az épületben sehol sem szabad. A délelőtti szünetet tizenegy óra körül tarthatják, amikor nincs sok vásárló. Kávét és teát a kis konyhában lehet készíteni, de használat után mindenkinek rendet kell hagynia.',
      'Dóra örül az új munkának. Az első hetekben szeretné megtanulni a pénztár használatát, és jobban akarja ismerni a bolt könyveit. Már tud angolul beszélni, ezért a külföldi vásárlóknak is tud majd segíteni.',
    ],
  },
  passCount: 6,
  questions: [
    { id: 'l18-p5-read-1', question: 'Mikor kell Dórának megérkeznie az első héten?', options: ['Fél kilencre', 'Pont kilencre', 'Tíz órára'], correctIndex: 0 },
    { id: 'l18-p5-read-2', question: 'Hol hagyhatja a kabátját és a táskáját?', options: ['A dolgozói szobában', 'Az üzlettérben', 'A pénztár mellett'], correctIndex: 0 },
    { id: 'l18-p5-read-3', question: 'Mit kell tennie, mielőtt dolgozni kezd?', options: ['Be kell jelentkeznie és meg kell néznie a feladatokat', 'Ki kell nyitnia az üzletet', 'Ebédet kell készítenie'], correctIndex: 0 },
    { id: 'l18-p5-read-4', question: 'Miért nem tud még egyedül dolgozni a pénztárnál?', options: ['Mert ez az első napja', 'Mert nem tud olvasni', 'Mert nincs számítógép'], correctIndex: 0 },
    { id: 'l18-p5-read-5', question: 'Hol nem szabad enni, inni vagy dohányozni?', options: ['Az üzlettérben; dohányozni az egész épületben tilos', 'A dolgozói szobában', 'Az utcán'], correctIndex: 0 },
    { id: 'l18-p5-read-6', question: 'Mit szeretne Dóra megtanulni az első hetekben?', options: ['A pénztár használatát és a könyvek jobb ismeretét', 'Autót vezetni', 'Franciául beszélni'], correctIndex: 0 },
    { id: 'l18-p5-read-7', question: 'Miért tud majd külföldi vásárlóknak is segíteni?', options: ['Mert tud angolul beszélni', 'Mert minden könyvet elolvasott', 'Mert este is dolgozik'], correctIndex: 0 },
  ],
};

const L18_LISTENING: LessonActivity = {
  kind: 'listening',
  id: 'l18-listening-modals',
  title: 'Аудирование: что люди могут, должны и хотят?',
  assetId: 'l18_listening_modals',
  audioStatus: 'published',
  passCount: 4,
  transcript: 'A: Ma este szeretnék moziba menni, de előbb dolgoznom kell. Holnap tudok veled találkozni.\nB: Jó. Lehet a parkban sétálni?\nA: Igen. Péter nem tud jönni, mert tanulnia kell. Anna otthon akar maradni.',
  questions: [
    { id: 'l18-list-1', question: 'Mit szeretne az első beszélő ma este?', options: ['Moziba menni', 'Otthon maradni', 'Dolgozni egész este'], correctIndex: 0 },
    { id: 'l18-list-2', question: 'Mit kell tennie az első beszélőnek előbb?', options: ['Tanulnia kell', 'Dolgoznia kell', 'Sétálnia kell'], correctIndex: 1 },
    { id: 'l18-list-3', question: 'Mikor tud találkozni az első beszélő?', options: ['Ma reggel', 'Ma este', 'Holnap'], correctIndex: 2 },
    { id: 'l18-list-4', question: 'Miért nem tud Péter jönni?', options: ['Dolgoznia kell', 'Tanulnia kell', 'Otthon akar maradni'], correctIndex: 1 },
    { id: 'l18-list-5', question: 'Mit akar Anna?', options: ['Moziba menni', 'Otthon maradni', 'A parkban sétálni'], correctIndex: 1 },
  ],
};

const L18_WRITING: LessonActivity = {
  kind: 'writing',
  id: 'l18-writing-modal-responses',
  title: 'Письмо координатору курса',
  prompt: 'Напиши сообщение координатору курса объёмом 80–100 слов. Объясни, почему пишешь; укажи одно действие, которое не можешь выполнить; напиши, что должен/должна сделать вместо этого; спроси, возможны ли другое время или вариант; задай один практический вопрос и вежливо заверши сообщение.',
  modelAnswer: ['Kedves Koordinátor!', 'Azért írok, mert kedden nem tudok részt venni az órán.', 'Szeretném megkérdezni, hogy lehet-e másik időpontot választani.', 'Köszönöm a segítségét.'],
  rubric: ['80–100 слов', 'Объяснена причина сообщения', 'Есть nem tudok и необходимость с kell', 'Запрошено другое время или вариант', 'Есть практический вопрос', 'Есть вежливое завершение'],
};

const L18_ROLEPLAY: LessonActivity = {
  kind: 'rolePlay',
  id: 'l18-roleplay-course-rules',
  title: 'RolePlay: правила короткого курса',
  partnerLabel: 'Координатор курса',
  completionMessage: 'Разговор завершён. Проверь, использовал(а) ли ты kell, lehet, szabad и tud по функции.',
  startTurnId: 'l18-rp-1',
  turns: [
    { id: 'l18-rp-1', speaker: 'waiter', prompt: 'Jó napot! Üdvözlöm a rövid munkahelyi nyelvtanfolyamon. Miben segíthetek?', next: 'l18-rp-2' },
    { id: 'l18-rp-2', speaker: 'learner', prompt: 'Поприветствуй и спроси, к какому времени нужно приходить.', responseMode: 'selfPractice', model: 'Jó napot! Mikorra kell megérkeznem?', next: 'l18-rp-3' },
    { id: 'l18-rp-3', speaker: 'waiter', prompt: 'Az óra kilenckor kezdődik, úgyhogy tíz perccel korábban kell megérkeznie.', next: 'l18-rp-4' },
    { id: 'l18-rp-4', speaker: 'learner', prompt: 'Спроси, можно ли пользоваться ноутбуком.', responseMode: 'selfPractice', model: 'Lehet laptopot használni az órán?', next: 'l18-rp-5' },
    { id: 'l18-rp-5', speaker: 'waiter', prompt: 'Igen, lehet. Viszont telefonálni nem szabad az órán.', next: 'l18-rp-6' },
    { id: 'l18-rp-6', speaker: 'learner', prompt: 'Спроси, где можно есть или пить.', responseMode: 'selfPractice', model: 'Hol lehet enni vagy inni?', next: 'l18-rp-7' },
    { id: 'l18-rp-7', speaker: 'waiter', prompt: 'A szünetben igen: a konyhában lehet enni és inni.', next: 'l18-rp-8' },
    { id: 'l18-rp-8', speaker: 'learner', prompt: 'Попроси уточнить запрет на телефон.', responseMode: 'selfPractice', model: 'Elnézést, jól értem, hogy az órán nem szabad telefonálni?', next: 'l18-rp-9' },
    { id: 'l18-rp-9', speaker: 'waiter', prompt: 'Igen, pontosan. A szünetben viszont természetesen lehet.', next: 'l18-rp-10' },
    { id: 'l18-rp-10', speaker: 'learner', prompt: 'Объясни, что в среду не можешь прийти утром.', responseMode: 'selfPractice', model: 'Szerdán reggel nem tudok eljönni, mert dolgoznom kell.', next: 'l18-rp-11' },
    { id: 'l18-rp-11', speaker: 'waiter', prompt: 'Értem. Szerencsére délután van egy másik csoport.', next: 'l18-rp-12' },
    { id: 'l18-rp-12', speaker: 'learner', prompt: 'Спроси, можно ли прийти в другую группу.', responseMode: 'selfPractice', model: 'Lehet szerdán a délutáni csoportba menni?', next: 'l18-rp-13' },
    { id: 'l18-rp-13', speaker: 'waiter', prompt: 'Igen, ezt meg tudjuk oldani. A délutáni óra négykor kezdődik.', next: 'l18-rp-14' },
    { id: 'l18-rp-14', speaker: 'learner', prompt: 'Подтверди вариант и вежливо заверши разговор.', responseMode: 'selfPractice', model: 'Nagyon jó, négyre oda tudok érni. Akkor a délutáni csoportba megyek. Köszönöm szépen a segítséget!', next: 'l18-rp-15' },
    { id: 'l18-rp-15', speaker: 'waiter', prompt: 'Nagyon szívesen. Viszontlátásra!' },
  ],
};

const L18_SPEAKING = {
  title: 'Говорение: могу, нужно, можно, хочу',
  instructions: 'Говори примерно 1.5–2 минуты: что ты умеешь делать хорошо; чему хочешь научиться; что обязан(а) делать каждый день; чего делать не обязан(а); что запрещено в знакомом тебе месте. Это только текстовая опора для самостоятельной практики — без записи и оценки.',
  prompt: 'Jól tudok... Szeretnék megtanulni... Minden nap ... kell. Nem kell... Itt nem szabad...',
  rubric: ['1.5–2 минуты', 'Есть способность с tud', 'Есть желание или намерение', 'Есть kell и nem kell', 'Есть запрет с nem szabad'],
};

const L18_EXIT: LessonActivity = {
  kind: 'exitCheck',
  id: 'l18-exit-check',
  title: 'Проверка целей урока',
  checks: [
    { objectiveId: 'l18_form-infinitive', activityId: 'l18-cp-contextual-modals', evidenceKind: 'grammar' },
    { objectiveId: 'l18_use-modal-verbs', activityId: 'l18-cp-contextual-modals', evidenceKind: 'grammar', evidenceComponents: [{ activityId: 'l18-roleplay-course-rules', evidenceKind: 'interaction' }] },
    { objectiveId: 'l18_express-necessity', activityId: 'l18-reading-first-day', evidenceKind: 'reading', evidenceComponents: [{ activityId: 'l18-writing-modal-responses', evidenceKind: 'writing' }] },
    { objectiveId: 'l18_express-desire', activityId: 'l18-cp-contextual-modals', evidenceKind: 'grammar', evidenceComponents: [{ activityId: 'l18-writing-modal-responses', evidenceKind: 'writing' }] },
    { objectiveId: 'l18_understand-modals', activityId: 'l18-listening-modals', evidenceKind: 'listening' },
  ],
};

export const LESSON_18: Lesson = {
  id: 18,
  number: 18,
  level: 'A2',
  title: 'Урок 18 · Módbeli segédigék',
  subtitle: 'Инфинитив и частотные модальные конструкции',
  description: 'Базовый инфинитив, ограниченная модель личного инфинитива с kell и различие kell, lehet, tud, szeretnék и akarok в практических ситуациях.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: 'УРОК 18 · 1/11 · ИНФИНИТИВ',
      title: 'A főnévi igenév',
      subtitle: 'Сначала найди инфинитив: именно он нужен большинству модальных конструкций',
      type: 'grammar',
      note: 'Венгерская словарная форма глагола и инфинитив — не одно и то же. На этом слайде учим базовый инфинитив; личные формы с kell начнутся только на 18.3.',
      warn: 'Не используй правило «к любой словарной форме просто добавить -ni». Для частотных неправильных глаголов инфинитив нужно узнавать целиком.',
      task: 'Для каждого глагола сначала назови словарную форму, затем инфинитив. После этого проверь, можешь ли быстро узнать инфинитив внутри модальной конструкции.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Что такое инфинитив</h4>

        <p>
          <button class="speak-btn" data-speak-text="főnévi igenév" data-speak-lang="hu-HU">főnévi igenév</button>
          — венгерский термин для инфинитива.
        </p>

        <div class="note">
          Для большинства глаголов инфинитив легко узнать по окончанию <b>-ni</b>.
          Это форма действия без указания лица: «учиться», «читать», «готовить».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Прямой регулярный шаблон</h4>

        <table class="conj">
          <tr><th>Словарная форма</th><th>Инфинитив</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU">tanul</button></td>
            <td><button class="speak-btn" data-speak-text="tanulni" data-speak-lang="hu-HU">tanulni</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ír" data-speak-lang="hu-HU">ír</button></td>
            <td><button class="speak-btn" data-speak-text="írni" data-speak-lang="hu-HU">írni</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="olvas" data-speak-lang="hu-HU">olvas</button></td>
            <td><button class="speak-btn" data-speak-text="olvasni" data-speak-lang="hu-HU">olvasni</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="főz" data-speak-lang="hu-HU">főz</button></td>
            <td><button class="speak-btn" data-speak-text="főzni" data-speak-lang="hu-HU">főzni</button></td>
          </tr>
        </table>

        <div class="note">
          Здесь удобно видеть модель «основа + <b>-ni</b>».
          Но сначала убедись, что перед тобой действительно простая основа.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Что делать со словарной формой на -ik</h4>

        <p>
          <button class="speak-btn" data-speak-text="dolgozik" data-speak-lang="hu-HU">dolgozik</button>
          →
          <button class="speak-btn" data-speak-text="dolgozni" data-speak-lang="hu-HU">dolgozni</button>
        </p>

        <div class="note">
          В инфинитиве словарное <b>-ik</b> не сохраняется.
          Поэтому не получаем форму вроде <s>dolgozikni</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Частотные формы, которые лучше выучить целиком</h4>

        <table class="conj">
          <tr><th>Словарная форма</th><th>Инфинитив</th><th>Смысл</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="megy" data-speak-lang="hu-HU">megy</button></td>
            <td><button class="speak-btn" data-speak-text="menni" data-speak-lang="hu-HU">menni</button></td>
            <td>идти</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="eszik" data-speak-lang="hu-HU">eszik</button></td>
            <td><button class="speak-btn" data-speak-text="enni" data-speak-lang="hu-HU">enni</button></td>
            <td>есть</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="iszik" data-speak-lang="hu-HU">iszik</button></td>
            <td><button class="speak-btn" data-speak-text="inni" data-speak-lang="hu-HU">inni</button></td>
            <td>пить</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="van" data-speak-lang="hu-HU">van</button></td>
            <td><button class="speak-btn" data-speak-text="lenni" data-speak-lang="hu-HU">lenni</button></td>
            <td>быть</td>
          </tr>
        </table>

        <div class="warn">
          Не пытайся вывести эти четыре формы из одного школьного правила.
          Для уровня A2 надёжнее узнавать их сразу как готовые пары.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Зачем инфинитив нужен уже сейчас</h4>

        <p><button class="speak-btn" data-speak-text="Tudok vezetni." data-speak-lang="hu-HU">Tudok vezetni.</button></p>
        <p><button class="speak-btn" data-speak-text="Lehet itt parkolni?" data-speak-lang="hu-HU">Lehet itt parkolni?</button></p>
        <p><button class="speak-btn" data-speak-text="Szeretnék pihenni." data-speak-lang="hu-HU">Szeretnék pihenni.</button></p>

        <div class="note">
          Во всех трёх примерах действие стоит в базовом инфинитиве.
          На следующем слайде разберём, почему модальные слова выбираются по разному смыслу.
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка без ответов</summary>
          <p class="mt-3">Какой инфинитив у tanul?</p>
          <p>Какой инфинитив у dolgozik?</p>
          <p>Какой инфинитив у megy?</p>
          <p>Какие две формы из enni, inni, lenni ты можешь назвать без подсказки?</p>
        </details>

        <div class="note">
          Граница 18.1: пока только базовый инфинитив.
          Формы типа «мне нужно идти» с личным окончанием начнутся на 18.3.
        </div>
      `,
    },    {
      id: 2,
      eyebrow: 'УРОК 18 · 2/11 · КАРТА МОДАЛЬНЫХ ФУНКЦИЙ',
      title: 'Kell, lehet, szabad, tud, szeretnék, akarok',
      subtitle: 'Сначала выбери смысл: способность, необходимость, правило или желание',
      type: 'grammar',
      note: 'Это карта функций. Не учи шесть слов как взаимозаменяемые переводы русского «могу / надо / хочу». Сначала определи ситуацию, потом выбирай модель.',
      warn: 'На этом слайде не выводим полные парадигмы. Личный инфинитив с kell — следующий слайд; различие tud / lehet / szabad подробно закрепится на 18.4.',
      task: 'Для каждой из 6 ситуаций сначала назови функцию по-русски, затем выбери венгерскую модель и только после этого произнеси пример.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Карта из шести функций</h4>

        <table class="conj">
          <tr><th>Что хочешь выразить?</th><th>Модель</th><th>Пример</th></tr>

          <tr>
            <td><b>Я умею / способен</b></td>
            <td>tud + инфинитив</td>
            <td><button class="speak-btn" data-speak-text="Tudok vezetni." data-speak-lang="hu-HU">Tudok vezetni.</button></td>
          </tr>

          <tr>
            <td><b>Мне / кому-то нужно</b></td>
            <td>kell + личный инфинитив</td>
            <td><button class="speak-btn" data-speak-text="Holnap dolgoznom kell." data-speak-lang="hu-HU">Holnap dolgoznom kell.</button></td>
          </tr>

          <tr>
            <td><b>Можно по правилу / ситуации?</b></td>
            <td>lehet + инфинитив</td>
            <td><button class="speak-btn" data-speak-text="Lehet itt fényképezni?" data-speak-lang="hu-HU">Lehet itt fényképezni?</button></td>
          </tr>

          <tr>
            <td><b>Нельзя по правилу</b></td>
            <td>nem szabad + инфинитив</td>
            <td><button class="speak-btn" data-speak-text="Itt nem szabad dohányozni." data-speak-lang="hu-HU">Itt nem szabad dohányozni.</button></td>
          </tr>

          <tr>
            <td><b>Я хотел(а) бы — вежливо</b></td>
            <td>szeretnék + инфинитив</td>
            <td><button class="speak-btn" data-speak-text="Szeretnék időpontot kérni." data-speak-lang="hu-HU">Szeretnék időpontot kérni.</button></td>
          </tr>

          <tr>
            <td><b>Я хочу / намерен — прямо</b></td>
            <td>akarok + инфинитив</td>
            <td><button class="speak-btn" data-speak-text="El akarok menni a boltba." data-speak-lang="hu-HU">El akarok menni a boltba.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Быстрый выбор по ситуации</h4>

        <table class="conj">
          <tr><th>Вопрос к себе</th><th>Выбирай</th></tr>
          <tr><td>Есть навык или реальная способность?</td><td><b>tud</b></td></tr>
          <tr><td>Есть обязанность / необходимость конкретного человека?</td><td><b>kell</b></td></tr>
          <tr><td>Правило или ситуация разрешает действие?</td><td><b>lehet</b></td></tr>
          <tr><td>Правило запрещает действие?</td><td><b>nem szabad</b></td></tr>
          <tr><td>Нужно выразить просьбу или желание вежливо?</td><td><b>szeretnék</b></td></tr>
          <tr><td>Нужно прямо сообщить своё намерение?</td><td><b>akarok</b></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Где находится лицо</h4>

        <p><button class="speak-btn" data-speak-text="Tudok vezetni." data-speak-lang="hu-HU">Tudok vezetni.</button></p>
        <p><button class="speak-btn" data-speak-text="Szeretnék pihenni." data-speak-lang="hu-HU">Szeretnék pihenni.</button></p>
        <p><button class="speak-btn" data-speak-text="El akarok menni." data-speak-lang="hu-HU">El akarok menni.</button></p>

        <div class="note">
          В этих трёх моделях лицо уже видно по модальному слову, а действие остаётся в базовом инфинитиве.
        </div>

        <p class="mt-3"><button class="speak-btn" data-speak-text="Dolgoznom kell." data-speak-lang="hu-HU">Dolgoznom kell.</button></p>

        <div class="note">
          С <b>kell</b> при конкретном исполнителе лицо часто выражается на инфинитиве.
          Сейчас только узнай модель; окончания подробно разберём на 18.3.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Две особенно опасные пары</h4>

        <div class="warn">
          <b>tud ≠ lehet:</b> «я умею / могу физически» и «здесь можно по правилу» — разные функции.
          Подробное сравнение будет на 18.4.
        </div>

        <div class="warn">
          <b>szeretnék ≠ akarok:</b> первое удобно для вежливой просьбы или желания;
          второе звучит как прямое «хочу / намерен».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Мини-проверка без ответов</h4>

        <details class="note">
          <summary class="font-bold cursor-pointer">Открой после собственной попытки</summary>
          <p class="mt-3">Ты умеешь водить. Какую модель выберешь?</p>
          <p>Тебе завтра обязательно нужно работать. Какую?</p>
          <p>В музее спрашиваешь разрешение фотографировать. Какую?</p>
          <p>Табличка запрещает курить. Какую?</p>
          <p>Вежливо просишь время на приём. Какую?</p>
          <p>Прямо говоришь, что хочешь пойти в магазин. Какую?</p>
        </details>

        <div class="note">
          Граница 18.2: запомни функцию каждой модели.
          Формообразование с <b>kell</b> — на 18.3, тонкое различие возможности и разрешения — на 18.4.
        </div>
      `,
    },    {
      id: 3,
      eyebrow: 'УРОК 18 · 3/11 · KELL',
      title: 'Mennem kell',
      subtitle: 'Общая необходимость ≠ необходимость конкретного человека',
      type: 'grammar',
      note: 'С kell есть два полезных шаблона: общий безличный и личный. На A2 продуктивно тренируем прежде всего 1-е, 2-е и 3-е лицо единственного числа.',
      warn: 'Не разбирай mennem как menni + m. Личный инфинитив — отдельная форма; в ней меняется окончание и иногда вид основы.',
      task: 'Сначала реши: речь вообще о правиле/необходимости или о конкретном человеке? Затем выбери базовый или личный инфинитив.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Общая необходимость: кто именно не указан</h4>

        <p><button class="speak-btn" data-speak-text="Itt várni kell." data-speak-lang="hu-HU">Itt várni kell.</button></p>

        <div class="note">
          Здесь смысл общий: «здесь нужно ждать».
          Конкретный исполнитель не назван, поэтому используется базовый инфинитив.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Конкретный человек: личный инфинитив</h4>

        <table class="conj">
          <tr><th>Кому нужно?</th><th>Пример с menni</th><th>Смысл</th></tr>
          <tr>
            <td>мне</td>
            <td><button class="speak-btn" data-speak-text="mennem kell" data-speak-lang="hu-HU">mennem kell</button></td>
            <td>мне нужно идти</td>
          </tr>
          <tr>
            <td>тебе</td>
            <td><button class="speak-btn" data-speak-text="menned kell" data-speak-lang="hu-HU">menned kell</button></td>
            <td>тебе нужно идти</td>
          </tr>
          <tr>
            <td>ему / ей</td>
            <td><button class="speak-btn" data-speak-text="mennie kell" data-speak-lang="hu-HU">mennie kell</button></td>
            <td>ему / ей нужно идти</td>
          </tr>
        </table>

        <div class="note">
          На этом этапе запоминай эти три формы как рабочую мини-парадигму.
          Полную систему личного инфинитива не нужно выводить из одного окончания.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Та же функция с другим глаголом</h4>

        <table class="conj">
          <tr><th>Лицо</th><th>dolgozni + kell</th></tr>
          <tr><td>я</td><td><button class="speak-btn" data-speak-text="dolgoznom kell" data-speak-lang="hu-HU">dolgoznom kell</button></td></tr>
          <tr><td>ты</td><td><button class="speak-btn" data-speak-text="dolgoznod kell" data-speak-lang="hu-HU">dolgoznod kell</button></td></tr>
          <tr><td>он / она</td><td><button class="speak-btn" data-speak-text="dolgoznia kell" data-speak-lang="hu-HU">dolgoznia kell</button></td></tr>
        </table>

        <p class="mt-3"><button class="speak-btn" data-speak-text="Holnap dolgoznom kell." data-speak-lang="hu-HU">Holnap dolgoznom kell.</button></p>
        <p><button class="speak-btn" data-speak-text="Pihenned kell." data-speak-lang="hu-HU">Pihenned kell.</button></p>

        <div class="note">
          Эти два примера напрямую пригодятся в контекстной практике:
          необходимость для «я» и совет/необходимость для «ты».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Зачем иногда добавляют nekem</h4>

        <p><button class="speak-btn" data-speak-text="Nekem mennem kell." data-speak-lang="hu-HU">Nekem mennem kell.</button></p>

        <div class="note">
          <b>nekem</b> подчёркивает «именно мне».
          Но оно не заменяет личную форму: <b>mennem</b> всё равно остаётся.
        </div>

        <div class="warn">
          Ошибка: <s>Nekem menni kell</s> в значении «мне нужно идти» как основная личная модель.
          Для конкретного «мне» на этом уроке используй <b>Nekem mennem kell.</b>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Множественное число — пока только узнавать</h4>

        <p>
          <button class="speak-btn" data-speak-text="mennünk" data-speak-lang="hu-HU">mennünk</button>,
          <button class="speak-btn" data-speak-text="mennetek" data-speak-lang="hu-HU">mennetek</button>,
          <button class="speak-btn" data-speak-text="menniük" data-speak-lang="hu-HU">menniük</button>
        </p>

        <div class="note">
          Эти формы полезно узнавать в тексте и речи.
          Активно строить всю множественную парадигму на 18.3 не требуется.
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка без ответов</summary>
          <p class="mt-3">Как сказать общее «здесь нужно ждать»?</p>
          <p>Как сказать «мне нужно идти»?</p>
          <p>Как сказать «тебе нужно отдохнуть»?</p>
          <p>Как сказать «завтра мне нужно работать»?</p>
        </details>

        <div class="note">
          Граница 18.3: только необходимость с <b>kell</b>.
          На следующем слайде вернёмся к разнице между способностью, разрешением и запретом.
        </div>
      `,
    },    {
      id: 4,
      eyebrow: 'УРОК 18 · 4/11 · LEHET, SZABAD И TUD',
      title: 'Lehet / szabad ≠ tud',
      subtitle: '«Могу» как способность и «можно» как правило — разные венгерские модели',
      type: 'grammar',
      note: 'Русское «могу / можно» скрывает несколько смыслов. Перед выбором формы спроси: это способность человека, разрешение ситуации или запрет правила?',
      warn: 'Не заменяй tud и lehet друг другом только потому, что по-русски оба иногда переводятся словом «можно / могу».',
      task: 'Разбери каждую ситуацию по трём вопросам: человек способен? место/правило разрешает? правило запрещает?',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. tud — способность или реальная возможность человека</h4>

        <p><button class="speak-btn" data-speak-text="Tudok úszni." data-speak-lang="hu-HU">Tudok úszni.</button></p>
        <p><button class="speak-btn" data-speak-text="Ma nem tudok korábban elmenni." data-speak-lang="hu-HU">Ma nem tudok korábban elmenni.</button></p>

        <div class="note">
          В первом примере это навык.
          Во втором — человек реально не может сделать действие сегодня.
          В обоих случаях речь о возможности конкретного человека, а не о правиле места.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. lehet — ситуация допускает или делает действие возможным</h4>

        <p><button class="speak-btn" data-speak-text="Lehet itt úszni?" data-speak-lang="hu-HU">Lehet itt úszni?</button></p>
        <p><button class="speak-btn" data-speak-text="Lehet itt fényképezni?" data-speak-lang="hu-HU">Lehet itt fényképezni?</button></p>

        <div class="note">
          Такие вопросы естественны, когда нужно узнать, допускается ли действие здесь или в этой ситуации.
          Конкретное «я умею» они не выражают.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. szabad / nem szabad — разрешение и запрет правила</h4>

        <p><button class="speak-btn" data-speak-text="Szabad itt fényképezni?" data-speak-lang="hu-HU">Szabad itt fényképezni?</button></p>
        <p><button class="speak-btn" data-speak-text="Itt nem szabad dohányozni." data-speak-lang="hu-HU">Itt nem szabad dohányozni.</button></p>
        <p><button class="speak-btn" data-speak-text="Itt nem szabad parkolni." data-speak-lang="hu-HU">Itt nem szabad parkolni.</button></p>

        <div class="note">
          <b>szabad</b> подчёркивает разрешённость по правилу.
          Особенно важный готовый блок уровня A2 — <b>nem szabad + инфинитив</b> для запрета.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Один русский вопрос — три разных венгерских смысла</h4>

        <table class="conj">
          <tr><th>Ситуация</th><th>Что проверяем?</th><th>Модель</th></tr>
          <tr><td>Я умею плавать?</td><td>мой навык</td><td><b>tud</b></td></tr>
          <tr><td>Здесь можно плавать?</td><td>возможность / разрешение места</td><td><b>lehet</b></td></tr>
          <tr><td>Здесь запрещено плавать?</td><td>правило запрещает</td><td><b>nem szabad</b></td></tr>
        </table>

        <div class="warn">
          Типичная ошибка: увидеть русское «можно» и автоматически выбрать одну и ту же венгерскую форму.
          Сначала определи источник ограничения: человек или правило.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Контекстная практика уже проверяет это различие</h4>

        <p><button class="speak-btn" data-speak-text="Itt nem szabad parkolni." data-speak-lang="hu-HU">Itt nem szabad parkolni.</button></p>
        <p><button class="speak-btn" data-speak-text="Lehet itt fényképezni?" data-speak-lang="hu-HU">Lehet itt fényképezni?</button></p>
        <p><button class="speak-btn" data-speak-text="Ma nem tudok korábban elmenni." data-speak-lang="hu-HU">Ma nem tudok korábban elmenni.</button></p>

        <div class="note">
          Если в упражнении ошибся, не просто запоминай правильный вариант.
          Назови функцию: способность, разрешение/возможность или запрет.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Что пока не изучаем</h4>

        <p><button class="speak-btn" data-speak-text="Lehet, hogy..." data-speak-lang="hu-HU">Lehet, hogy...</button></p>

        <div class="note">
          Это другая конструкция со значением «возможно, что...».
          На 18.4 её достаточно узнавать; активно строить такие предложения пока не требуется.
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка без ответов</summary>
          <p class="mt-3">Ты умеешь водить. Какая модель?</p>
          <p>В музее спрашиваешь, можно ли фотографировать. Какая?</p>
          <p>Знак запрещает парковаться. Какая?</p>
          <p>Сегодня ты реально не можешь уйти раньше. Какая?</p>
        </details>

        <div class="note">
          Граница 18.4: различаем способность, разрешение/возможность и запрет.
          На 18.5 перейдём к вежливому желанию и прямому намерению.
        </div>
      `,
    },    {
      id: 5,
      eyebrow: 'УРОК 18 · 5/11 · ЖЕЛАНИЕ И ПРАКТИКА',
      title: 'Szeretnék és akarok',
      subtitle: 'Вежливое желание и прямое намерение: выбирай по ситуации, затем проверь все модальные функции',
      type: 'practice',
      activities: [L18_CONTROLLED],
      note: 'szeretnék здесь учим как готовую частотную форму для вежливого желания и просьбы. Полная система условного наклонения будет только в Lesson 23.',
      warn: 'akarok не является «неправильным» словом. Оно выражает прямое желание или намерение, поэтому в просьбе к сотруднику, врачу или координатору часто звучит слишком прямолинейно.',
      task: 'Сначала различи szeretnék и akarok, затем пройди 14 контекстных заданий. Порог Controlled Practice — минимум 11 правильных из 14.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Вежливое желание или просьба</h4>

        <p><button class="speak-btn" data-speak-text="Szeretnék pihenni." data-speak-lang="hu-HU">Szeretnék pihenni.</button></p>
        <p><button class="speak-btn" data-speak-text="Szeretnék időpontot kérni." data-speak-lang="hu-HU">Szeretnék időpontot kérni.</button></p>
        <p><button class="speak-btn" data-speak-text="Szeretnék beszélni a koordinátorral." data-speak-lang="hu-HU">Szeretnék beszélni a koordinátorral.</button></p>

        <div class="note">
          После <b>szeretnék</b> действие остаётся в базовом инфинитиве.
          Для этого урока форму лучше воспринимать целиком как «я хотел(а) бы».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Прямое желание или намерение</h4>

        <p><button class="speak-btn" data-speak-text="Pihenni akarok." data-speak-lang="hu-HU">Pihenni akarok.</button></p>
        <p><button class="speak-btn" data-speak-text="El akarok menni a boltba." data-speak-lang="hu-HU">El akarok menni a boltba.</button></p>
        <p><button class="speak-btn" data-speak-text="El akarok kezdeni magyarul tanulni." data-speak-lang="hu-HU">El akarok kezdeni magyarul tanulni.</button></p>

        <div class="note">
          <b>akarok</b> подходит, когда ты прямо сообщаешь своё собственное намерение.
          В нейтральном рассказе это нормально; в вежливой просьбе обычно выбирают другую модель.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Сравни одну ситуацию</h4>

        <table class="conj">
          <tr><th>Контекст</th><th>Естественный выбор</th></tr>
          <tr>
            <td>Ты рассказываешь другу о своём плане</td>
            <td><button class="speak-btn" data-speak-text="El akarok menni a boltba." data-speak-lang="hu-HU">El akarok menni a boltba.</button></td>
          </tr>
          <tr>
            <td>Ты вежливо просишь время на приём</td>
            <td><button class="speak-btn" data-speak-text="Szeretnék időpontot kérni." data-speak-lang="hu-HU">Szeretnék időpontot kérni.</button></td>
          </tr>
        </table>

        <div class="warn">
          Не выбирай форму только по русскому слову «хочу».
          Сначала спроси: я просто сообщаю намерение или обращаюсь к другому человеку вежливо?
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Что проверяют 14 контекстных заданий</h4>

        <table class="conj">
          <tr><th>Блок</th><th>Функция</th></tr>
          <tr><td>A</td><td>способность / реальная возможность человека + базовый инфинитив</td></tr>
          <tr><td>B</td><td>необходимость и совет с kell</td></tr>
          <tr><td>C</td><td>разрешение / возможность ситуации и запрет</td></tr>
          <tr><td>D</td><td>прямое намерение с akarok</td></tr>
          <tr><td>E</td><td>вежливое желание / просьба с szeretnék</td></tr>
        </table>

        <div class="note">
          Отдельно встретится проверка базового инфинитива.
          То есть практика собирает вместе материал 18.1–18.5, а не только два слова этого слайда.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Если ошибся — диагностируй функцию</h4>

        <ol class="tasklist">
          <li>неправильно выбрал способность и правило → повтори 18.4;</li>
          <li>ошибся в необходимости конкретного лица → повтори 18.3;</li>
          <li>перепутал прямое намерение и вежливую просьбу → сравни блоки 1–3 этого слайда;</li>
          <li>ошибся в инфинитиве → вернись к 18.1.</li>
        </ol>

        <div class="warn">
          Порог Controlled Practice: <b>11 из 14</b>.
          Цель — выбрать модель по функции, а не угадывать знакомое слово.
        </div>
      `,
    },    {
      id: 6,
      eyebrow: 'УРОК 18 · 6/11 · ЧТЕНИЕ',
      title: 'Az első nap egy új munkahelyen',
      subtitle: 'Читай рабочие правила по функции: нужно → можно → нельзя → может → хочет',
      type: 'reading',
      activities: [L18_READING],
      note: 'Текст длиннее предыдущих примеров и содержит формы, которые нужны только для понимания. Не пытайся разбирать каждое окончание: цель — извлечь практическую информацию.',
      warn: 'В тексте встретятся рецептивные формы вне продуктивной темы этого урока. Не выводи из них новую грамматику; используй контекст и уже знакомые модальные сигналы.',
      task: 'Прочитай текст в два прохода. Затем ответь на 7 вопросов; для прохождения нужно минимум 6 правильных.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Первый проход — рабочая ситуация</h4>

        <table class="conj">
          <tr><th>Что выяснить</th><th>Твоя заметка</th></tr>
          <tr><td>когда начинается рабочий день и что происходит до начала работы</td><td>...</td></tr>
          <tr><td>где сотрудник оставляет вещи</td><td>...</td></tr>
          <tr><td>кто помогает в первый день</td><td>...</td></tr>
          <tr><td>какие правила действуют во время работы и перерыва</td><td>...</td></tr>
          <tr><td>чему сотрудница хочет научиться</td><td>...</td></tr>
        </table>

        <div class="note">
          Не заполняй таблицу по памяти из вариантов ответа.
          Сначала найди доказательство в самом тексте.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Второй проход — пометь модальную функцию</h4>

        <table class="conj">
          <tr><th>Сигнал в тексте</th><th>Какую функцию ищем</th></tr>
          <tr><td><button class="speak-btn" data-speak-text="kell" data-speak-lang="hu-HU">kell</button></td><td>что обязательно / необходимо</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="nem tud" data-speak-lang="hu-HU">nem tud</button></td><td>что человек пока не может</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="lehet" data-speak-lang="hu-HU">lehet</button></td><td>что допускается ситуацией</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="nem szabad" data-speak-lang="hu-HU">nem szabad</button></td><td>что запрещено</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="szeretné" data-speak-lang="hu-HU">szeretné</button></td><td>чему она хотела бы научиться</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="akarja" data-speak-lang="hu-HU">akarja</button></td><td>что она прямо хочет лучше знать</td></tr>
        </table>

        <div class="note">
          Здесь встречаются не только формы первого лица из предыдущего слайда.
          В чтении важно узнавать функцию по контексту, даже если окончание другое.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Неизвестная форма — не повод останавливаться</h4>

        <p>
          В тексте есть формы со значением возможности вроде
          <button class="speak-btn" data-speak-text="hagyhatja" data-speak-lang="hu-HU">hagyhatja</button>,
          <button class="speak-btn" data-speak-text="teheti" data-speak-lang="hu-HU">teheti</button>,
          <button class="speak-btn" data-speak-text="kérdezhet" data-speak-lang="hu-HU">kérdezhet</button>.
        </p>

        <div class="warn">
          Сейчас не изучай образование этих форм.
          Для Reading достаточно понять из контекста, что они описывают доступное или разрешённое действие.
        </div>

        <p class="mt-3">
          Также может встретиться
          <button class="speak-btn" data-speak-text="tud majd segíteni" data-speak-lang="hu-HU">tud majd segíteni</button>.
        </p>

        <div class="note">
          Это рецептивный фрагмент текста. Системное будущее будет в следующем уроке;
          здесь достаточно понять общий смысл «сможет помочь».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Как отвечать на 7 вопросов</h4>

        <ol class="tasklist">
          <li>найди нужный абзац;</li>
          <li>определи функцию: необходимость, возможность, запрет, способность или желание;</li>
          <li>только потом сравни варианты ответа;</li>
          <li>если два варианта похожи, проверь конкретную деталь: время, место, причину или цель.</li>
        </ol>

        <div class="warn">
          Порог Reading: <b>6 из 7</b>.
          Цель — понять правила и намерения нового сотрудника, а не перевести текст слово в слово.
        </div>
      `,
    },    {
      id: 7,
      eyebrow: 'УРОК 18 · 7/11 · АУДИРОВАНИЕ',
      title: 'Mit kell, lehet, tud és akar?',
      subtitle: 'Сначала кто и когда, затем модальная функция и действие',
      type: 'listening',
      activities: [L18_LISTENING],
      note: 'Это опубликованное Listening. Не открывай transcript до первой собственной попытки: сначала поймай структуру разговора, а не отдельные слова.',
      warn: 'Не считай знакомое модальное слово готовым ответом. После него нужно услышать действие, время или причину.',
      task: 'Прослушай запись минимум два раза. Затем ответь на 5 вопросов; для прохождения нужно минимум 4 правильных.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Первый проход — кто и когда</h4>

        <p>
          <button class="speak-btn" data-speak-text="ma este" data-speak-lang="hu-HU">ma este</button>,
          <button class="speak-btn" data-speak-text="előbb" data-speak-lang="hu-HU">előbb</button>,
          <button class="speak-btn" data-speak-text="holnap" data-speak-lang="hu-HU">holnap</button>
        </p>

        <table class="conj">
          <tr><th>Кто?</th><th>Когда?</th><th>Что за функция?</th></tr>
          <tr><td>первый говорящий</td><td>сегодня вечером</td><td>...</td></tr>
          <tr><td>первый говорящий</td><td>сначала</td><td>...</td></tr>
          <tr><td>первый говорящий</td><td>завтра</td><td>...</td></tr>
          <tr><td>Петер</td><td>—</td><td>...</td></tr>
          <tr><td>Анна</td><td>—</td><td>...</td></tr>
        </table>

        <div class="note">
          На первом прослушивании не заполняй действия целыми предложениями.
          Достаточно связать человека и временной маркер.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Второй проход — услышь модальный сигнал</h4>

        <p>
          <button class="speak-btn" data-speak-text="szeretnék" data-speak-lang="hu-HU">szeretnék</button> —
          вежливое желание.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="kell" data-speak-lang="hu-HU">kell</button> —
          необходимость.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="tudok" data-speak-lang="hu-HU">tudok</button> /
          <button class="speak-btn" data-speak-text="nem tud" data-speak-lang="hu-HU">nem tud</button> —
          возможность или невозможность человека.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="lehet" data-speak-lang="hu-HU">lehet</button> —
          возможность ситуации.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="akar" data-speak-lang="hu-HU">akar</button> —
          прямое желание / намерение.
        </p>

        <div class="note">
          Услышал модальный сигнал — не останавливайся.
          Следующее действие часто находится в инфинитиве рядом с ним.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Отдельно слушай причину</h4>

        <p><button class="speak-btn" data-speak-text="mert" data-speak-lang="hu-HU">mert</button> — потому что.</p>

        <div class="note">
          Если вопрос спрашивает «почему человек не может?», после отрицательной возможности ищи причину после этого слова.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Третий проход — проверь 5 деталей</h4>

        <ol class="tasklist">
          <li>чего хочет первый говорящий;</li>
          <li>что ему/ей нужно сделать раньше;</li>
          <li>когда он/она может встретиться;</li>
          <li>почему другой человек не может прийти;</li>
          <li>чего хочет третий упомянутый человек.</li>
        </ol>

        <div class="warn">
          Порог Listening: <b>4 из 5</b>.
          Transcript открывай только после собственной попытки и используй его для разбора ошибки, а не вместо слушания.
        </div>
      `,
    },    {
      id: 8,
      eyebrow: 'УРОК 18 · 8/11 · ИНТЕРАКЦИЯ',
      title: 'A tanfolyam szabályai',
      subtitle: '7 реплик ученика: правило → уточнение → проблема → альтернатива',
      type: 'roleplay',
      activities: [L18_ROLEPLAY],
      note: 'В сценарии 15 ходов, из них 7 реплик ученика. RolePlay остаётся PARTIAL evidence: открытый ответ нельзя честно оценить полностью автоматически.',
      warn: 'Не заучивай model answer целиком. Сначала определи функцию своей реплики, затем собери собственную фразу из знакомых моделей.',
      task: 'Пройди 7 коммуникативных задач: время прихода → ноутбук → еда/напитки → запрет телефона → невозможность прийти → другая группа → подтверждение и завершение.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Карта 7 реплик ученика</h4>

        <table class="conj">
          <tr><th>Реплика</th><th>Коммуникативная задача</th><th>Главная функция</th></tr>
          <tr><td>1</td><td>поприветствовать и спросить, к какому времени нужно приходить</td><td>необходимость</td></tr>
          <tr><td>2</td><td>спросить, можно ли пользоваться ноутбуком</td><td>разрешение</td></tr>
          <tr><td>3</td><td>спросить, где можно есть или пить</td><td>разрешение / возможность</td></tr>
          <tr><td>4</td><td>уточнить, правильно ли понял запрет телефона</td><td>запрет</td></tr>
          <tr><td>5</td><td>объяснить, почему в конкретное время не можешь прийти</td><td>невозможность + причина</td></tr>
          <tr><td>6</td><td>спросить о другой группе</td><td>альтернатива / возможность</td></tr>
          <tr><td>7</td><td>подтвердить новый вариант и вежливо завершить</td><td>реальная возможность + завершение</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Спросить о необходимости и разрешении</h4>

        <p><button class="speak-btn" data-speak-text="Mikorra kell megérkeznem?" data-speak-lang="hu-HU">Mikorra kell megérkeznem?</button></p>
        <p><button class="speak-btn" data-speak-text="Lehet laptopot használni?" data-speak-lang="hu-HU">Lehet laptopot használni?</button></p>
        <p><button class="speak-btn" data-speak-text="Hol lehet enni vagy inni?" data-speak-lang="hu-HU">Hol lehet enni vagy inni?</button></p>

        <div class="note">
          Здесь не нужно строить новую грамматику.
          Ты переносишь уже изученные функции в реальный диалог.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Уточнить запрет</h4>

        <p><button class="speak-btn" data-speak-text="Jól értem, hogy itt nem szabad telefonálni?" data-speak-lang="hu-HU">Jól értem, hogy itt nem szabad telefonálni?</button></p>

        <div class="note">
          Полезная стратегия: сначала вежливо проверить, правильно ли ты понял правило,
          а не сразу спорить или повторять табличку.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Объяснить проблему: не могу + потому что нужно</h4>

        <p><button class="speak-btn" data-speak-text="Szerdán reggel nem tudok eljönni." data-speak-lang="hu-HU">Szerdán reggel nem tudok eljönni.</button></p>
        <p><button class="speak-btn" data-speak-text="Dolgoznom kell." data-speak-lang="hu-HU">Dolgoznom kell.</button></p>

        <div class="note">
          Это хороший функциональный контраст:
          сначала реальная невозможность человека, затем причина-необходимость.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Попросить альтернативу</h4>

        <p><button class="speak-btn" data-speak-text="Lehet másik csoportba menni?" data-speak-lang="hu-HU">Lehet másik csoportba menni?</button></p>

        <div class="note">
          В реальном сценарии группа конкретизирована.
          Здесь опора намеренно общая, чтобы не выдавать полный model answer.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Подтвердить и завершить</h4>

        <p><button class="speak-btn" data-speak-text="Oda tudok érni." data-speak-lang="hu-HU">Oda tudok érni.</button></p>
        <p><button class="speak-btn" data-speak-text="Köszönöm szépen a segítséget!" data-speak-lang="hu-HU">Köszönöm szépen a segítséget!</button></p>

        <div class="note">
          В последней реплике покажи, что новый вариант тебе реально подходит,
          и только потом заверши разговор.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Самопроверка после RolePlay</h4>

        <ol class="tasklist">
          <li>задал(а) вопрос о необходимости;</li>
          <li>дважды использовал(а) функцию разрешения / возможности;</li>
          <li>правильно уточнил(а) запрет;</li>
          <li>объяснил(а) невозможность через причину;</li>
          <li>договорился(-ась) об альтернативе;</li>
          <li>вежливо завершил(а) разговор.</li>
        </ol>

        <div class="warn">
          PARTIAL evidence означает не «плохо выполнено», а то, что свободную интеракцию
          нельзя полностью подтвердить автоматической проверкой.
        </div>
      `,
    },    {
      id: 9,
      eyebrow: 'УРОК 18 · 9/11 · ПИСЬМО',
      title: 'Üzenet a koordinátornak',
      subtitle: '80–100 слов: причина → не могу → должен(а) → альтернатива → вопрос → вежливый финал',
      type: 'writing',
      activities: [L18_WRITING],
      note: 'Это открытая письменная работа и она даёт PARTIAL evidence. Сначала составь план из 6 блоков, затем пиши связный текст.',
      warn: 'Не копируй полный образец до собственной попытки. Для запроса альтернативы достаточно прямого вопроса с lehet; новую конструкцию с вопросительной частицей здесь отдельно не изучаем.',
      task: 'Напиши 80–100 слов координатору курса. Проверь все 6 обязательных элементов рубрики перед отправкой.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. План сообщения из 6 блоков</h4>

        <table class="conj">
          <tr><th>Блок</th><th>Что должно быть</th></tr>
          <tr><td>1</td><td>приветствие + причина, почему ты пишешь</td></tr>
          <tr><td>2</td><td>что именно ты не можешь сделать</td></tr>
          <tr><td>3</td><td>что тебе нужно сделать вместо этого</td></tr>
          <tr><td>4</td><td>запрос другого времени или варианта</td></tr>
          <tr><td>5</td><td>один практический вопрос</td></tr>
          <tr><td>6</td><td>вежливое завершение</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Начало и причина сообщения</h4>

        <p><button class="speak-btn" data-speak-text="Kedves Koordinátor!" data-speak-lang="hu-HU">Kedves Koordinátor!</button></p>
        <p><button class="speak-btn" data-speak-text="Azért írok, mert..." data-speak-lang="hu-HU">Azért írok, mert...</button></p>

        <div class="note">
          После причины переходи сразу к проблеме.
          Для A2 лучше несколько коротких ясных предложений, чем одно длинное.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Не могу + должен(а)</h4>

        <p><button class="speak-btn" data-speak-text="Nem tudok..." data-speak-lang="hu-HU">Nem tudok...</button></p>
        <p><button class="speak-btn" data-speak-text="Dolgoznom kell." data-speak-lang="hu-HU">Dolgoznom kell.</button></p>

        <div class="note">
          Здесь соединяются две разные функции урока:
          реальная невозможность человека и необходимость выполнить другое действие.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Попросить другой вариант</h4>

        <p><button class="speak-btn" data-speak-text="Lehet másik időpontot választani?" data-speak-lang="hu-HU">Lehet másik időpontot választani?</button></p>

        <div class="note">
          Это прямой вопрос о возможности, который уже укладывается в грамматику Lesson 18.
          Не нужно усложнять письмо новой вопросительной конструкцией.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Добавить практический вопрос</h4>

        <p><button class="speak-btn" data-speak-text="Lehet laptopot használni?" data-speak-lang="hu-HU">Lehet laptopot használni?</button></p>
        <p><button class="speak-btn" data-speak-text="Mikorra kell megérkeznem?" data-speak-lang="hu-HU">Mikorra kell megérkeznem?</button></p>

        <div class="note">
          Выбери один вопрос, который логично подходит именно к твоей ситуации.
          Не вставляй обе фразы только ради объёма.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Вежливый финал</h4>

        <p><button class="speak-btn" data-speak-text="Köszönöm a segítségét." data-speak-lang="hu-HU">Köszönöm a segítségét.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Чек-лист перед отправкой</h4>

        <table class="conj">
          <tr><th>Есть?</th><th>Требование</th></tr>
          <tr><td>□</td><td>80–100 слов</td></tr>
          <tr><td>□</td><td>понятная причина сообщения</td></tr>
          <tr><td>□</td><td>одно действие, которое ты не можешь выполнить</td></tr>
          <tr><td>□</td><td>необходимость с kell</td></tr>
          <tr><td>□</td><td>другое время или вариант</td></tr>
          <tr><td>□</td><td>один практический вопрос</td></tr>
          <tr><td>□</td><td>вежливое завершение</td></tr>
        </table>

        <div class="warn">
          Если не хватает объёма, добавь конкретику о времени, причине или варианте.
          Не добавляй новую грамматику только ради количества слов.
        </div>
      `,
    },    {
      id: 10,
      eyebrow: 'УРОК 18 · 10/11 · OPTIONAL SPEAKING',
      title: 'Mondd el!',
      subtitle: '1,5–2 минуты: способность → желание → нужно → не нужно → запрещено',
      type: 'speaking',
      optionalSpeaking: L18_SPEAKING,
      note: 'Необязательная самопрактика: без микрофона, score и evidence. Ничего записывать, отправлять или автоматически оценивать не нужно.',
      warn: 'Не пиши полный монолог заранее. Подготовь 6–8 ключевых слов и говори по пяти смысловым блокам.',
      task: 'Говори 1,5–2 минуты: что умеешь, чему хочешь научиться, что обязан(а) делать, чего делать не обязан(а) и что запрещено в знакомом месте.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Карта монолога из 5 функций</h4>

        <table class="conj">
          <tr><th>Блок</th><th>Что сказать</th><th>Главная модель</th></tr>
          <tr><td>1</td><td>что ты умеешь делать хорошо</td><td><b>tud</b></td></tr>
          <tr><td>2</td><td>чему хочешь научиться / чего хотел(а) бы</td><td><b>szeretnék</b> или <b>akarok</b></td></tr>
          <tr><td>3</td><td>что тебе нужно делать регулярно</td><td><b>kell</b></td></tr>
          <tr><td>4</td><td>чего тебе делать не обязательно</td><td><b>nem kell</b></td></tr>
          <tr><td>5</td><td>что запрещено в знакомом месте</td><td><b>nem szabad</b></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Способность</h4>

        <p><button class="speak-btn" data-speak-text="Jól tudok főzni." data-speak-lang="hu-HU">Jól tudok főzni.</button></p>

        <div class="note">
          Замени действие на своё настоящее умение.
          Не обязательно использовать пример со слайда.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Желание или цель</h4>

        <p><button class="speak-btn" data-speak-text="Szeretnék megtanulni vezetni." data-speak-lang="hu-HU">Szeretnék megtanulni vezetni.</button></p>
        <p><button class="speak-btn" data-speak-text="El akarok kezdeni többet olvasni." data-speak-lang="hu-HU">El akarok kezdeni többet olvasni.</button></p>

        <div class="note">
          Достаточно одной из двух функций: вежливое желание или прямое личное намерение.
          Не вставляй обе конструкции только ради количества фраз.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Нужно и не нужно — не одно и то же, что запрет</h4>

        <p><button class="speak-btn" data-speak-text="Minden nap dolgoznom kell." data-speak-lang="hu-HU">Minden nap dolgoznom kell.</button></p>
        <p><button class="speak-btn" data-speak-text="Hétvégén nem kell dolgoznom." data-speak-lang="hu-HU">Hétvégén nem kell dolgoznom.</button></p>

        <div class="warn">
          <b>nem kell</b> = нет необходимости / не обязательно.
          Это НЕ означает «запрещено».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Запрет</h4>

        <p><button class="speak-btn" data-speak-text="Itt nem szabad dohányozni." data-speak-lang="hu-HU">Itt nem szabad dohányozni.</button></p>

        <div class="warn">
          <b>nem szabad</b> = нельзя по правилу / запрещено.
          Не заменяй эту функцию на <b>nem kell</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Если остановился</h4>

        <p><button class="speak-btn" data-speak-text="Egy pillanat..." data-speak-lang="hu-HU">Egy pillanat...</button></p>
        <p><button class="speak-btn" data-speak-text="Még egy dolog..." data-speak-lang="hu-HU">Még egy dolog...</button></p>

        <div class="note">
          Сделай короткую паузу и переходи к следующему смысловому блоку.
          Не начинай монолог заново из-за одной ошибки.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Самопроверка после речи</h4>

        <ol class="tasklist">
          <li>говорил(а) примерно 1,5–2 минуты;</li>
          <li>была способность с tud;</li>
          <li>было желание или намерение;</li>
          <li>были необходимость с kell и отсутствие необходимости с nem kell;</li>
          <li>был запрет с nem szabad;</li>
          <li>не перепутал(а) «не обязательно» и «запрещено».</li>
        </ol>

        <div class="note">
          Эта Speaking Practice не создаёт evidence и не меняет статус целей автоматически.
          Её задача — устно автоматизировать уже изученные функции.
        </div>
      `,
    },    {
      id: 11,
      eyebrow: 'УРОК 18 · 11/11 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Что должно работать после Lesson 18 — и чем это реально подтверждается',
      type: 'summary',
      activities: [L18_EXIT],
      note: 'Это учебный checkpoint Lesson 18, а не официальный сертификат уровня. DIRECT означает прямое автоматическое подтверждение после порога; PARTIAL — открытую продукцию, которую автоматика не может честно оценить полностью.',
      warn: 'Финальная типичная ошибка: nem kell = «не обязательно», а nem szabad = «запрещено». Эти функции нельзя менять местами.',
      task: 'Перед Exit Check выполни 5 действий без подсказки: назови инфинитив → выбери модальную функцию → вырази необходимость → различи можно/умею/нельзя → различи вежливое и прямое желание.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Базовый инфинитив</h4>

        <p>
          <button class="speak-btn" data-speak-text="tanulni" data-speak-lang="hu-HU">tanulni</button>,
          <button class="speak-btn" data-speak-text="dolgozni" data-speak-lang="hu-HU">dolgozni</button>,
          <button class="speak-btn" data-speak-text="menni" data-speak-lang="hu-HU">menni</button>
        </p>

        <div class="note">
          Ты должен(на) узнавать базовый инфинитив и не путать его с личной формой при конкретной необходимости.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Необходимость: общая и личная</h4>

        <p><button class="speak-btn" data-speak-text="Itt várni kell." data-speak-lang="hu-HU">Itt várni kell.</button></p>
        <p><button class="speak-btn" data-speak-text="Mennem kell." data-speak-lang="hu-HU">Mennem kell.</button></p>
        <p><button class="speak-btn" data-speak-text="Pihenned kell." data-speak-lang="hu-HU">Pihenned kell.</button></p>

        <div class="note">
          Общий шаблон не называет исполнителя; личный инфинитив показывает, кому именно нужно выполнить действие.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Способность, разрешение и запрет</h4>

        <p><button class="speak-btn" data-speak-text="Tudok úszni." data-speak-lang="hu-HU">Tudok úszni.</button></p>
        <p><button class="speak-btn" data-speak-text="Lehet itt parkolni?" data-speak-lang="hu-HU">Lehet itt parkolni?</button></p>
        <p><button class="speak-btn" data-speak-text="Itt nem szabad dohányozni." data-speak-lang="hu-HU">Itt nem szabad dohányozni.</button></p>

        <div class="note">
          Сначала определи источник возможности: способность человека или правило/ситуация.
          Запрет правила выражается отдельной моделью.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Вежливое желание и прямое намерение</h4>

        <p><button class="speak-btn" data-speak-text="Szeretnék pihenni." data-speak-lang="hu-HU">Szeretnék pihenni.</button></p>
        <p><button class="speak-btn" data-speak-text="Pihenni akarok." data-speak-lang="hu-HU">Pihenni akarok.</button></p>

        <div class="note">
          Первое — удобный вежливый блок; второе — прямое сообщение о собственном желании или намерении.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Не нужно ≠ запрещено</h4>

        <p><button class="speak-btn" data-speak-text="Hétvégén nem kell dolgoznom." data-speak-lang="hu-HU">Hétvégén nem kell dolgoznom.</button></p>
        <p><button class="speak-btn" data-speak-text="Itt nem szabad dohányozni." data-speak-lang="hu-HU">Itt nem szabad dohányozni.</button></p>

        <div class="warn">
          В первом случае действие не обязательно.
          Во втором случае действие запрещено правилом.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Что реально подтверждают задания</h4>

        <table class="conj">
          <tr><th>Цель</th><th>Основное evidence</th><th>Статус</th></tr>
          <tr><td>узнавать и образовывать изученные инфинитивы</td><td>Controlled Practice</td><td><b>DIRECT</b> после порога</td></tr>
          <tr><td>выбирать модальную модель по функции</td><td>Controlled Practice + RolePlay</td><td><b>DIRECT + PARTIAL</b></td></tr>
          <tr><td>выражать необходимость / возможность</td><td>Reading + Writing</td><td><b>DIRECT + PARTIAL</b></td></tr>
          <tr><td>различать вежливое и прямое желание</td><td>Controlled Practice + Writing</td><td><b>DIRECT + PARTIAL</b></td></tr>
          <tr><td>понимать модальные функции на слух</td><td>Published Listening</td><td><b>DIRECT</b> после порога</td></tr>
        </table>

        <div class="note">
          Пороги: Controlled Practice — <b>11/14</b>, Reading — <b>6/7</b>, Published Listening — <b>4/5</b>.
          Writing и RolePlay дают PARTIAL evidence.
          Optional Speaking Practice evidence не создаёт.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Финальная самопроверка</h4>

        <details class="note">
          <summary class="font-bold cursor-pointer">Открой после собственной попытки</summary>
          <p class="mt-3">Можешь быстро назвать инфинитив у знакомого глагола?</p>
          <p>Можешь сказать, что тебе нужно сделать?</p>
          <p>Можешь различить «я могу» и «здесь можно»?</p>
          <p>Можешь отличить «не обязательно» от «запрещено»?</p>
          <p>Можешь выбрать между вежливым желанием и прямым намерением?</p>
        </details>

        <div class="warn">
          Прохождение quiz и автоматических заданий не означает полного коммуникативного владения.
          Следующий урок перейдёт к планам и прогнозам на будущее.
        </div>
      `,
    }
  ],
  vocabulary: [    { id: 'l18_v1', hu: 'tanulni', ru: 'учиться', category: 'Инфинитив', exampleSentence: 'Magyarul szeretnék tanulni.' },
    { id: 'l18_v2', hu: 'dolgozni', ru: 'работать', category: 'Инфинитив', exampleSentence: 'Holnap dolgoznom kell.' },
    { id: 'l18_v3', hu: 'menni', ru: 'идти', category: 'Инфинитив', exampleSentence: 'Mennem kell.' },
    { id: 'l18_v4', hu: 'mennem kell', ru: 'мне нужно идти', category: 'Модальная модель', exampleSentence: 'Most mennem kell.' },
    { id: 'l18_v5', hu: 'lehet', ru: 'можно / возможно', category: 'Модальная модель', exampleSentence: 'Itt lehet parkolni.' },
    { id: 'l18_v6', hu: 'tudok', ru: 'я умею / могу', category: 'Модальная модель', exampleSentence: 'Tudok úszni.' },
    { id: 'l18_v7', hu: 'szeretnék', ru: 'я хотел(а) бы', category: 'Вежливый блок', exampleSentence: 'Szeretnék pihenni.' },
    { id: 'l18_v8', hu: 'akarok', ru: 'я хочу', category: 'Желание / намерение', exampleSentence: 'Otthon akarok maradni.' },
  ],
  quiz: [
    { id: 1801, question: 'Какой инфинитив соответствует глаголу tanul («учиться»)?', options: ['tanulni', 'tanulok', 'tanulom', 'tanulnom'], correctIndex: 0, explanation: 'Базовый инфинитив: tanul → tanulni. Tanulnom — личный инфинитив, например Tanulnom kell.' },
    { id: 1802, question: 'Как сказать «Мне нужно идти» без явного nekem?', options: ['Menni kell.', 'Mennem kell.', 'Megyek kell.', 'Menni tudok.'], correctIndex: 1, explanation: 'С kell конкретное лицо выражает личный инфинитив: mennem kell — «мне нужно идти».' },
    { id: 1803, question: 'Какой контраст между tud и lehet тренируется в L18?', options: ['tud — способность субъекта; lehet + инфинитив — разрешение/ситуационная возможность', 'tud — прошлое; lehet — будущее', 'это полные синонимы', 'lehet используется только с людьми'], correctIndex: 0, explanation: 'Tudok úszni описывает способность человека; Lehet itt úszni? спрашивает, разрешено/возможно ли действие в ситуации.' },
    { id: 1804, question: 'Какой готовый блок вежливо выражает «я хотел(а) бы»?', options: ['akarok', 'szeretnék', 'kell', 'tudok'], correctIndex: 1, explanation: 'Szeretnék — частотный вежливый блок. Полная система условного наклонения будет изучаться позже, в L23.' },
    { id: 1805, question: 'Как сказать «Здесь можно парковаться» в изученной модели?', options: ['Itt tudok parkolni.', 'Itt lehet parkolni.', 'Itt parkolnom kell.', 'Itt parkolni akarok.'], correctIndex: 1, explanation: 'Lehet + инфинитив выражает разрешение или ситуационную возможность: Itt lehet parkolni.' },
    { id: 1806, question: 'Какой вариант прямо выражает «Я хочу отдохнуть»?', options: ['Pihenni akarok.', 'Szeretnék pihenni.', 'Pihennem kell.', 'Tudok pihenni.'], correctIndex: 0, explanation: 'Pihenni akarok — прямое желание. Szeretnék pihenni — более вежливое «я хотел(а) бы отдохнуть».' },
  ],
  objectives: [
    { id: 'l18_form-infinitive', text: 'Образовывать и узнавать изученные базовые инфинитивы на -ni.', skills: ['grammar', 'writing'] },
    { id: 'l18_use-modal-verbs', text: 'Выбирать и использовать изученные модели kell, lehet, tud, szeretnék и akarok с инфинитивом.', skills: ['grammar', 'speaking', 'writing'] },
    { id: 'l18_express-necessity', text: 'Выражать необходимость, способность и разрешение/ситуационную возможность в изученных моделях kell, tud и lehet.', skills: ['speaking', 'writing'] },
    { id: 'l18_express-desire', text: 'Различать и выражать вежливое и прямое желание через szeretnék + инфинитив и akarok + инфинитив.', skills: ['speaking', 'writing'] },
    { id: 'l18_understand-modals', text: 'Понимать функции изученных модальных конструкций в коротком диалоге на слух.', skills: ['listening'] },
  ],
};
