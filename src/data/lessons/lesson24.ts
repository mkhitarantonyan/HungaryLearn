import { Lesson } from '../../types';
import { createMigrationActivities } from './migrationActivityFactory';

const L24_ACTIVITIES = createMigrationActivities({
  lessonId: 24,
  controlledTitle: 'Дискурс: выбор, объединение и порядок',
  controlledPassCount: 11,
  controlledExercises: [
    { kind: 'singleChoice', id: 'l24-cp-1', prompt: '1 · Nem megyek el, ___ fáradt vagyok.', options: ['mert', 'ezért', 'például'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l24-cp-2', prompt: '1 · Fáradt vagyok, ___ befejezem a munkát.', options: ['viszont', 'mert', 'hogy'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l24-cp-3', prompt: '1 · Sokat utazom, ___ ismerem a tömegközlekedést.', options: ['ezért', 'bár', 'hogy'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l24-cp-4', prompt: '1 · ___ az utazás időt vesz igénybe, sokan szeretnek irodában dolgozni.', options: ['Bár', 'Ezért', 'Például'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l24-cp-5', prompt: '1 · ___ a munkáltató rugalmas, működhet a hibrid rendszer.', options: ['Ha', 'Viszont', 'Mert'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l24-cp-6', prompt: '1 · Több megoldás létezik. ___ a hibrid munka jó kompromisszum lehet.', options: ['Például', 'Bár', 'Hogy'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l24-cp-7', prompt: '2 · Объедини причину: Otthon dolgozom. Nem kell utaznom.', options: ['Otthon dolgozom, mert nem kell utaznom.', 'Otthon dolgozom, ezért nem kell utaznom.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l24-cp-8', prompt: '2 · Объедини результат: Nem kell utaznom. Több időm marad.', options: ['Nem kell utaznom, ezért több időm marad.', 'Nem kell utaznom, bár több időm marad.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l24-cp-9', prompt: '2 · Объедини уступку: Az iroda messze van. Szeretek ott dolgozni.', options: ['Bár az iroda messze van, szeretek ott dolgozni.', 'Mert az iroda messze van, szeretek ott dolgozni.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l24-cp-10', prompt: '2 · Объедини условие: A munkáltató rugalmas. Működik a rendszer.', options: ['Ha a munkáltató rugalmas, működik a rendszer.', 'Viszont a munkáltató rugalmas, működik a rendszer.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l24-cp-11', prompt: '3 · Выбери логичный порядок аргумента.', options: ['Szerintem… → azért…, mert… → például… → összességében…', 'Például… → összességében… → szerintem… → mert…'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l24-cp-12', prompt: '3 · Что естественно следует после первого аргумента?', options: ['Másrészt…', 'Végül…', 'Összességében…'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l24-cp-13', prompt: '3 · Где логично поставить контраргумент?', options: ['После причин и примера, перед ответом на него', 'После заключения', 'До формулировки позиции'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l24-cp-14', prompt: '3 · Выбери полную дискурсивную цепочку.', options: ['позиция → причина → пример → контраргумент → ответ → вывод', 'пример → вывод → тема → причина → позиция'], correctIndex: 0 },
  ],
  readingTitle: 'Jobb otthon dolgozni vagy irodában?',
  readingParagraphs: [
    'Az otthoni munkának sok előnye van, de nem mindenkinek ez a legjobb megoldás. Sokan azért szeretnek otthonról dolgozni, mert nem kell minden reggel utazniuk, így több idejük marad a családjukra vagy a pihenésre. Emellett otthon gyakran nyugodtabb környezetben lehet dolgozni.',
    'Mások viszont jobban érzik magukat az irodában. Ott könnyebb gyorsan kérdezni a kollégáktól, és a közös munka is egyszerűbb lehet. Bár az utazás időt vesz igénybe, néhány embernek fontos, hogy munka után fizikailag is elhagyja a munkahelyét.',
    'Szerintem a hibrid rendszer jó kompromisszum lehet, mert az ember néhány napot otthon, néhány napot pedig az irodában dolgozhat. Ha a munkáltató és a dolgozó is rugalmas, mindenki megtalálhatja a számára megfelelő megoldást. Természetesen ez nem minden szakmában lehetséges, ezért nincs egyetlen tökéletes válasz.',
  ],
  readingPassCount: 6,
  readingQuestions: [
    { id: 'l24-read-1', question: 'Mi a szöveg fő gondolata?', options: ['Mindkét munkamódnak vannak előnyei, és nincs egyetlen jó válasz', 'Mindenkinek otthon kell dolgoznia', 'Az iroda mindig jobb'], correctIndex: 0 },
    { id: 'l24-read-2', question: 'Melyik két előnyt említi a szöveg az otthoni munkáról?', options: ['Kevesebb utazás és nyugodtabb környezet', 'Több utazás és több iroda', 'Magasabb fizetés és rövidebb munkaidő'], correctIndex: 0 },
    { id: 'l24-read-3', question: 'Mi az irodai munka egyik előnye?', options: ['Könnyebb gyorsan kérdezni a kollégáktól', 'Nem kell utazni', 'Mindig csendesebb'], correctIndex: 0 },
    { id: 'l24-read-4', question: 'Mit gondol a szerző?', options: ['A hibrid rendszer jó kompromisszum lehet', 'Csak az otthoni munka működik', 'A kérdésnek nincs jelentősége'], correctIndex: 0 },
    { id: 'l24-read-5', question: 'Milyen feltétellel működhet jól a hibrid rendszer?', options: ['Ha a munkáltató és a dolgozó is rugalmas', 'Ha senki nem kérdez', 'Ha mindenki ugyanabban a szakmában dolgozik'], correctIndex: 0 },
    { id: 'l24-read-6', question: 'Miért nincs egyetlen tökéletes válasz?', options: ['Mert a hibrid munka nem minden szakmában lehetséges', 'Mert minden iroda zárva van', 'Mert senki sem szeret pihenni'], correctIndex: 0 },
    { id: 'l24-read-7', question: 'Mi a bár szerepe a második bekezdésben?', options: ['Ellentétes vagy engedő szempontot vezet be', 'Okot vezet be', 'Időrendet jelöl'], correctIndex: 0 },
    { id: 'l24-read-8', question: 'Melyik szó jelöli a következményt az utolsó mondatban?', options: ['ezért', 'bár', 'mert'], correctIndex: 0 },
  ],
  listeningTitle: 'Аудирование: мнение и причина',
  listeningTranscript: 'Szerintem jó ez a lakás, mert világos és közel van a munkámhoz. Bár kicsi, mégis kényelmes. Megnézem még egyszer, és utána döntök.',
  listeningPassCount: 2,
  listeningQuestions: [
    { id: 'l24-listen-1', question: 'Miért tetszik a lakás?', options: ['Világos és közel van', 'Nagy és olcsó', 'Új és csendes'], correctIndex: 0 },
    { id: 'l24-listen-2', question: 'Mi a lakás hátránya?', options: ['Sötét', 'Kicsi', 'Messze van'], correctIndex: 1 },
    { id: 'l24-listen-3', question: 'Mikor dönt a beszélő?', options: ['Azonnal', 'Egy újabb megtekintés után', 'Jövőre'], correctIndex: 1 },
  ],
  listeningB: {
    title: 'Аудирование B: центр или окраина',
    assetId: 'l24_listening_b_city_or_suburbs',
    audioStatus: 'published',
    transcript: 'Eszter: Én biztosan a belvárosban maradnék. Szeretem, hogy szinte minden közel van, és nem kell sok időt utazással töltenem.\nGábor: Én viszont szívesebben költöznék a város szélére. A belváros kényelmes, de szerintem túl zajos, és a lakások is nagyon drágák.\nEszter: Ez igaz, bár nekem fontosabb a jó közlekedés. Innen tíz perc alatt beérek a munkahelyemre, este pedig könnyen találkozom a barátaimmal.\nGábor: Nekem most majdnem egy órába telik hazajutni, mégis szeretem, hogy nyugodtabb környéken lakom. Ráadásul nagyobb lakást tudtam bérelni ugyanannyi pénzért.\nEszter: Viszont ha este programod van a központban, sokkal nehezebb hazamenned.\nGábor: Igen, ez valóban hátrány. Másrészt nem járok minden este a belvárosba. Hétvégén pedig inkább otthon vagy a természetben vagyok.\nEszter: Akkor valószínűleg mások az igényeink. Én most még nem szeretnék kiköltözni.\nGábor: Én sem mondom, hogy mindenkinek jobb. Ha valaki minden nap bent dolgozik, és sok programra jár, a belváros praktikusabb lehet.\nEszter: Ebben egyetértek. Szerintem végül az a fontos, hogy az ember tudja, mi fontos neki: a nyugalom, az ár vagy az, hogy minden közel legyen.\nGábor: Pontosan. Nincs olyan megoldás, amely mindenkinek tökéletes.',
    passCount: 6,
    questions: [
      { id: 'l24-listen-b-1', question: 'Miért szeret Eszter a belvárosban lakni?', options: ['Mert szinte minden közel van, és keveset kell utaznia.', 'Mert ott nagyobb lakást bérelhet.', 'Mert ott csendesebb a környék.'], correctIndex: 0 },
      { id: 'l24-listen-b-2', question: 'Mi Gábor két fő érve a külsőbb kerület mellett?', options: ['Nyugodtabb, és ugyanannyi pénzért nagyobb lakást bérelhet.', 'Közelebb van a munkahelyéhez, és több program van.', 'Jobb a közlekedés, és olcsóbbak az éttermek.'], correctIndex: 0 },
      { id: 'l24-listen-b-3', question: 'Milyen hátrányt ismer el Gábor?', options: ['Este nehezebb hazajutni a központból.', 'Nincs elég nagy lakása.', 'Nem találkozhat a barátaival.'], correctIndex: 0 },
      { id: 'l24-listen-b-4', question: 'Miben különbözik Eszter és Gábor életmódja?', options: ['Eszternek fontos a központ és a gyakori programok; Gábor inkább otthon vagy a természetben tölti a hétvégét.', 'Eszter otthon dolgozik; Gábor minden nap külföldre utazik.', 'Eszter nem jár dolgozni; Gábor a belvárosban dolgozik.'], correctIndex: 0 },
      { id: 'l24-listen-b-5', question: 'Miben értenek egyet a végén?', options: ['A jó választás az egyéni igényektől és fontossági sorrendtől függ.', 'Mindenkinek a belvárosban kell laknia.', 'A város szélén mindig olcsóbb az élet.'], correctIndex: 0 },
      { id: 'l24-listen-b-6', question: 'Ki állítja azt, hogy a belváros mindenkinek jobb?', options: ['Eszter.', 'Gábor.', 'Egyikük sem.'], correctIndex: 2 },
      { id: 'l24-listen-b-7', question: 'Mi a beszélgetés fő következtetése?', options: ['Nincs mindenki számára tökéletes megoldás.', 'A közlekedés az egyetlen fontos szempont.', 'A nagyobb lakás mindig jobb választás.'], correctIndex: 0 },
    ],
  },
  rolePlay: {
    title: 'Discussion: удалённая работа или офис',
    partnerLabel: 'Собеседник',
    completionMessage: 'Обсуждение завершено. Прослушай, есть ли позиция, ответ на аргумент и вывод.',
    startTurnId: 'l24-rp-1',
    turns: [
      { id: 'l24-rp-1', speaker: 'waiter', prompt: 'Szerintem jobb az irodában dolgozni, mert ott könnyebb együttműködni.', next: 'l24-rp-2' },
      { id: 'l24-rp-2', speaker: 'learner', prompt: 'Сформулируй свою позицию и первую причину.', responseMode: 'selfPractice', model: 'Szerintem viszont az otthoni munka jobb, mert nem kell utazni.', next: 'l24-rp-3' },
      { id: 'l24-rp-3', speaker: 'waiter', prompt: 'Ez igaz, viszont otthon nehezebb gyorsan kérdezni a kollégáktól.', next: 'l24-rp-4' },
      { id: 'l24-rp-4', speaker: 'learner', prompt: 'Ответь на аргумент: частично согласись или не согласись.', responseMode: 'selfPractice', model: 'Ebben részben egyetértek, viszont online is lehet kérdezni.', next: 'l24-rp-5' },
      { id: 'l24-rp-5', speaker: 'waiter', prompt: 'Értem. Mondanál egy példát?', next: 'l24-rp-6' },
      { id: 'l24-rp-6', speaker: 'learner', prompt: 'Дай пример и вторую причину.', responseMode: 'selfPractice', model: 'Például otthon nyugodtabban dolgozom. Másrészt több időm marad.', next: 'l24-rp-7' },
      { id: 'l24-rp-7', speaker: 'waiter', prompt: 'Aha. Akkor szerinted mi lenne a legjobb megoldás?', next: 'l24-rp-8' },
      { id: 'l24-rp-8', speaker: 'learner', prompt: 'Сделай вывод.', responseMode: 'selfPractice', model: 'Összességében szerintem a hibrid rendszer lenne a legjobb megoldás.' },
    ],
  },
  writingTitle: 'Письмо: большой город или небольшой город',
  writingPrompt: 'Напиши 120–140 слов на тему: Is it better to live in a large city or a smaller town? Вырази позицию, причины, пример, контраргумент, ответ и вывод.',
  writingModel: ['Szerintem egy kisebb városban jobb élni, mert nyugodtabb.', 'Például kevesebb időt kell utazással tölteni.', 'Bár egy nagyvárosban több lehetőség van, összességében a kisebb várost választanám.'],
  writingRubric: ['Выполнение задачи: 120–140 слов и ясная позиция', 'Связность и логический порядок', 'Диапазон коннекторов', 'Грамматический контроль', 'Диапазон лексики', 'Понятность'],
  objectiveChecks: [
    { objectiveId: 'l24_use-conjunctions', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l24_build-complex-sentences', activity: 'writing', evidenceKind: 'writing' },
    { objectiveId: 'l24_express-cause', activity: 'writing', evidenceKind: 'writing' },
    { objectiveId: 'l24_express-contrast', activity: 'writing', evidenceKind: 'writing' },
    {
      objectiveId: 'l24_connect-ideas',
      activity: 'roleplay',
      evidenceKind: 'interaction',
      evidenceComponents: [{ activity: 'listeningB', evidenceKind: 'listening' }],
    },
  ],
});

const L24_OPTIONAL_SPEAKING = {
  title: 'Говорение: аргументированное сравнение',
  instructions: 'Говори 2–3 минуты. Выбери тему: большой или малый город; дом или офис; автомобиль или общественный транспорт; самостоятельное обучение или преподаватель. Построй ответ: позиция → причина → пример → вторая причина → контраргумент → ответ → вывод.',
  prompt: 'Szerintem… Azért gondolom így, mert… Például… Másrészt… Bár… Ennek ellenére… Összességében…',
  rubric: ['2–3 минуты', 'Есть позиция, две причины и пример', 'Есть контраргумент и ответ на него', 'Есть заключение', 'Коннекторы разнообразны и уместны', 'Речь понятна'],
};

export const LESSON_24: Lesson = {
  id: 24,
  number: 24,
  level: 'B1',
  title: 'Урок 24 · Összetett mondatok',
  subtitle: 'Сложные предложения и союзы',
  description: 'Сочинительные и подчинительные союзы (és, de, vagy, ezért, mert, hogy, bár, ha), логика связного высказывания, порядок слов и точная пунктуация на границах частей предложения.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 24 · 1/11 · ВВЕДЕНИЕ",
      title: "Összetett mondatok",
      subtitle: "Сначала найди части предложения, затем установи связь между ними",
      note: 'Сложное предложение состоит минимум из двух частей — tagmondatok. У каждой части есть собственное сказуемое или предикативный центр.',
      warn: 'Не считай только видимые глаголы. В венгерском настоящего времени сказуемое иногда выражается без van: Péter fáradt. — полноценная часть предложения.',
      task: 'В каждом примере найди сказуемые, проведи границу между частями и назови логическое отношение.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Простое или сложное?</h4>
        <table class="conj">
          <tr><th>Пример</th><th>Сказуемые</th><th>Структура</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kávét és teát kérek." data-speak-lang="hu-HU">Kávét és teát kérek.</button></td>
            <td><button class="speak-btn" data-speak-text="kérek" data-speak-lang="hu-HU">kérek</button></td>
            <td>одна часть; два однородных объекта</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kávét kérek, Anna pedig teát választ." data-speak-lang="hu-HU">Kávét kérek, Anna pedig teát választ.</button></td>
            <td>
              <button class="speak-btn" data-speak-text="kérek" data-speak-lang="hu-HU">kérek</button>,
              <button class="speak-btn" data-speak-text="választ" data-speak-lang="hu-HU">választ</button>
            </td>
            <td>две равноправные части</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Péter fáradt, de tovább dolgozik." data-speak-lang="hu-HU">Péter fáradt, de tovább dolgozik.</button></td>
            <td>
              <button class="speak-btn" data-speak-text="fáradt" data-speak-lang="hu-HU">fáradt</button>,
              <button class="speak-btn" data-speak-text="dolgozik" data-speak-lang="hu-HU">dolgozik</button>
            </td>
            <td>первая часть имеет именное сказуемое без видимого van</td>
          </tr>
        </table>

        <div class="note">
          Надёжный первый шаг: найди, что сообщается в каждой части.
          Подлежащее может быть выражено или опущено, поэтому одной проверки «сколько существительных» недостаточно.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Два основных типа связи</h4>
        <table class="conj">
          <tr><th>Тип</th><th>Как устроен</th><th>Пример</th></tr>
          <tr>
            <td><b>mellérendelés</b><br>сочинение</td>
            <td>части равноправны; вторая добавляет, противопоставляет, предлагает выбор или результат</td>
            <td><button class="speak-btn" data-speak-text="Péter tanul, én pedig olvasok." data-speak-lang="hu-HU">Péter tanul, én pedig olvasok.</button></td>
          </tr>
          <tr>
            <td><b>alárendelés</b><br>подчинение</td>
            <td>одна часть раскрывает причину, содержание, условие, уступку или другую функцию относительно главной части</td>
            <td><button class="speak-btn" data-speak-text="Nem mentem el, mert beteg voltam." data-speak-lang="hu-HU">Nem mentem el, mert beteg voltam.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Карта логических отношений урока</h4>
        <table class="conj">
          <tr><th>Отношение</th><th>Связующее слово</th><th>Мини-пример</th></tr>
          <tr>
            <td>добавление</td>
            <td><button class="speak-btn" data-speak-text="és" data-speak-lang="hu-HU">és</button></td>
            <td><button class="speak-btn" data-speak-text="Dolgozom, és magyarul tanulok." data-speak-lang="hu-HU">Dolgozom, és magyarul tanulok.</button></td>
          </tr>
          <tr>
            <td>противопоставление</td>
            <td><button class="speak-btn" data-speak-text="de" data-speak-lang="hu-HU">de</button></td>
            <td><button class="speak-btn" data-speak-text="Fáradt vagyok, de tanulok." data-speak-lang="hu-HU">Fáradt vagyok, de tanulok.</button></td>
          </tr>
          <tr>
            <td>причина</td>
            <td><button class="speak-btn" data-speak-text="mert" data-speak-lang="hu-HU">mert</button></td>
            <td><button class="speak-btn" data-speak-text="Otthon maradok, mert esik." data-speak-lang="hu-HU">Otthon maradok, mert esik.</button></td>
          </tr>
          <tr>
            <td>содержание</td>
            <td><button class="speak-btn" data-speak-text="hogy" data-speak-lang="hu-HU">hogy</button></td>
            <td><button class="speak-btn" data-speak-text="Azt mondta, hogy késik." data-speak-lang="hu-HU">Azt mondta, hogy késik.</button></td>
          </tr>
          <tr>
            <td>уступка</td>
            <td><button class="speak-btn" data-speak-text="bár" data-speak-lang="hu-HU">bár</button></td>
            <td><button class="speak-btn" data-speak-text="Bár esett, elindultunk." data-speak-lang="hu-HU">Bár esett, elindultunk.</button></td>
          </tr>
          <tr>
            <td>условие</td>
            <td><button class="speak-btn" data-speak-text="ha" data-speak-lang="hu-HU">ha</button></td>
            <td><button class="speak-btn" data-speak-text="Ha lesz időm, elmegyek." data-speak-lang="hu-HU">Ha lesz időm, elmegyek.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Запятая: сначала граница, потом союз</h4>
        <p>Запятая обычно разделяет части сложного предложения; между однородными членами союз сам по себе не требует запятой.</p>
        <table class="conj">
          <tr><th>Структура</th><th>Пример</th><th>Запятая</th></tr>
          <tr>
            <td>одна часть, однородные объекты</td>
            <td><button class="speak-btn" data-speak-text="Kávét és teát kérek." data-speak-lang="hu-HU">Kávét és teát kérek.</button></td>
            <td>перед és нет</td>
          </tr>
          <tr>
            <td>две части</td>
            <td><button class="speak-btn" data-speak-text="Kávét kérek, és Anna teát választ." data-speak-lang="hu-HU">Kávét kérek, és Anna teát választ.</button></td>
            <td>перед és есть</td>
          </tr>
          <tr>
            <td>одна часть, выбор объекта</td>
            <td><button class="speak-btn" data-speak-text="Kávét vagy teát kérsz?" data-speak-lang="hu-HU">Kávét vagy teát kérsz?</button></td>
            <td>перед vagy нет</td>
          </tr>
          <tr>
            <td>две части с выбором действий</td>
            <td><button class="speak-btn" data-speak-text="Kávét kérsz, vagy inkább teát választasz?" data-speak-lang="hu-HU">Kávét kérsz, vagy inkább teát választasz?</button></td>
            <td>перед vagy есть</td>
          </tr>
        </table>

        <div class="warn">
          На границе частей сложного предложения запятая обычно ставится даже перед
          <button class="speak-btn" data-speak-text="és" data-speak-lang="hu-HU">és</button>,
          <b>s</b>,
          <b>meg</b> и
          <button class="speak-btn" data-speak-text="vagy" data-speak-lang="hu-HU">vagy</button>.
          Между однородными членами перед этими словами запятая обычно не ставится.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Маршрут урока</h4>
        <ol class="tasklist">
          <li>Научиться видеть границы частей.</li>
          <li>Соединять равноправные части.</li>
          <li>Различать причину и результат.</li>
          <li>Строить содержание, условие и уступку.</li>
          <li>Создавать связную цепочку: позиция → причина → пример → контраргумент → вывод.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>Сколько частей в каждом из четырёх примеров из блока о запятой?</li>
          <li>Почему перед одним и тем же союзом запятая иногда есть, а иногда нет?</li>
          <li>Какая связь равноправная, а какая подчинительная?</li>
          <li>Составь одно сложное предложение из двух простых.</li>
        </ol>

        <div class="note">
          Граница 24.1: здесь мы учимся распознавать структуру.
          Подробные значения и позиции конкретных союзов начинаются на следующем слайде.
        </div>
      `,
    },
    {
      id: 2,
      eyebrow: "УРОК 24 · 2/11 · СОЧИНИТЕЛЬНЫЕ СВЯЗИ",
      title: "Mellérendelő kötőszavak",
      subtitle: "Добавление, параллельный контраст, выбор и результат",
      note: 'При сочинении части равноправны. Сначала выбери логическое отношение, затем подходящее связующее слово.',
      warn: 'Не переводи связующее слово изолированно. Одно русское «а» может передаваться через és, pedig, viszont или de в зависимости от отношения между частями.',
      task: 'Для каждого примера назови отношение, положение связующего слова и причину постановки или отсутствия запятой.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Добавление</h4>
        <table class="conj">
          <tr><th>Связующее слово</th><th>Пример</th><th>Употребление</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="és" data-speak-lang="hu-HU">és</button></td>
            <td><button class="speak-btn" data-speak-text="Péter dolgozik, és Anna tanul." data-speak-lang="hu-HU">Péter dolgozik, és Anna tanul.</button></td>
            <td>нейтральное добавление второй части</td>
          </tr>
          <tr>
            <td><b>s</b></td>
            <td><button class="speak-btn" data-speak-text="Péter dolgozik, s Anna tanul." data-speak-lang="hu-HU">Péter dolgozik, s Anna tanul.</button></td>
            <td>краткий вариант; чаще встречается в письменной или стилистически более компактной речи</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="meg" data-speak-lang="hu-HU">meg</button></td>
            <td><button class="speak-btn" data-speak-text="Én főzök, te meg mosogatsz." data-speak-lang="hu-HU">Én főzök, te meg mosogatsz.</button></td>
            <td>разговорное добавление или сопоставление</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Параллельные темы и противопоставление</h4>
        <table class="conj">
          <tr><th>Связующее слово</th><th>Пример</th><th>Что подчёркивает</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="pedig" data-speak-lang="hu-HU">pedig</button></td>
            <td><button class="speak-btn" data-speak-text="Péter tanul, én pedig olvasok." data-speak-lang="hu-HU">Péter tanul, én pedig olvasok.</button></td>
            <td>сопоставляет две темы; обычно стоит после темы второй части</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="de" data-speak-lang="hu-HU">de</button></td>
            <td><button class="speak-btn" data-speak-text="Szeretnék menni, de nincs időm." data-speak-lang="hu-HU">Szeretnék menni, de nincs időm.</button></td>
            <td>прямое противоречие или препятствие</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="viszont" data-speak-lang="hu-HU">viszont</button></td>
            <td><button class="speak-btn" data-speak-text="Péter korán kel, Anna viszont sokáig alszik." data-speak-lang="hu-HU">Péter korán kel, Anna viszont sokáig alszik.</button></td>
            <td>контрастирует вторую тему с первой</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="hanem" data-speak-lang="hu-HU">hanem</button></td>
            <td><button class="speak-btn" data-speak-text="Nem kávét kérek, hanem teát." data-speak-lang="hu-HU">Nem kávét kérek, hanem teát.</button></td>
            <td>исправляет отрицавшийся вариант: не это, а другое</td>
          </tr>
        </table>

        <div class="warn">
          В конструкции с
          <button class="speak-btn" data-speak-text="hanem" data-speak-lang="hu-HU">hanem</button>
          первая часть обычно содержит отрицание:
          <button class="speak-btn" data-speak-text="Nem busszal megyek, hanem villamossal." data-speak-lang="hu-HU">Nem busszal megyek, hanem villamossal.</button>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Выбор</h4>
        <table class="conj">
          <tr><th>Структура</th><th>Пример</th><th>Запятая</th></tr>
          <tr>
            <td>одна часть, выбор объекта</td>
            <td><button class="speak-btn" data-speak-text="Kávét vagy teát kérsz?" data-speak-lang="hu-HU">Kávét vagy teát kérsz?</button></td>
            <td>нет</td>
          </tr>
          <tr>
            <td>две части, выбор действия</td>
            <td><button class="speak-btn" data-speak-text="Kávét kérsz, vagy inkább teát választasz?" data-speak-lang="hu-HU">Kávét kérsz, vagy inkább teát választasz?</button></td>
            <td>есть на границе частей</td>
          </tr>
          <tr>
            <td>парная конструкция</td>
            <td><button class="speak-btn" data-speak-text="Vagy most indulunk, vagy otthon maradunk." data-speak-lang="hu-HU">Vagy most indulunk, vagy otthon maradunk.</button></td>
            <td>перед вторым элементом парной конструкции</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Результат и вывод</h4>
        <table class="conj">
          <tr><th>Связующее слово</th><th>Пример</th><th>Оттенок</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ezért" data-speak-lang="hu-HU">ezért</button></td>
            <td><button class="speak-btn" data-speak-text="Esik az eső, ezért itthon maradunk." data-speak-lang="hu-HU">Esik az eső, ezért itthon maradunk.</button></td>
            <td>прямое следствие причины: поэтому</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="így" data-speak-lang="hu-HU">így</button></td>
            <td><button class="speak-btn" data-speak-text="Befejeztem a munkát, így elmehetek." data-speak-lang="hu-HU">Befejeztem a munkát, így elmehetek.</button></td>
            <td>так, таким образом, вследствие этого</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tehát" data-speak-lang="hu-HU">tehát</button></td>
            <td><button class="speak-btn" data-speak-text="Késő van, tehát indulnunk kell." data-speak-lang="hu-HU">Késő van, tehát indulnunk kell.</button></td>
            <td>логический вывод: итак, следовательно</td>
          </tr>
        </table>

        <div class="note">
          Слово
          <button class="speak-btn" data-speak-text="így" data-speak-lang="hu-HU">így</button>
          может обозначать и способ действия:
          <button class="speak-btn" data-speak-text="Így csináld!" data-speak-lang="hu-HU">Így csináld!</button>
          В сложном предложении контекст показывает значение «таким образом».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Запятая: четыре надёжные модели</h4>
        <table class="conj">
          <tr><th>Модель</th><th>Пример</th></tr>
          <tr>
            <td>однородные члены с és — без запятой</td>
            <td><button class="speak-btn" data-speak-text="Kávét és teát kérek." data-speak-lang="hu-HU">Kávét és teát kérek.</button></td>
          </tr>
          <tr>
            <td>две части с és — с запятой</td>
            <td><button class="speak-btn" data-speak-text="Kávét kérek, és Anna teát választ." data-speak-lang="hu-HU">Kávét kérek, és Anna teát választ.</button></td>
          </tr>
          <tr>
            <td>противопоставление с de — с запятой</td>
            <td><button class="speak-btn" data-speak-text="A lakás olcsó, de kényelmes." data-speak-lang="hu-HU">A lakás olcsó, de kényelmes.</button></td>
          </tr>
          <tr>
            <td>исправление с hanem — с запятой</td>
            <td><button class="speak-btn" data-speak-text="Nem ma indulunk, hanem holnap." data-speak-lang="hu-HU">Nem ma indulunk, hanem holnap.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Причина</th></tr>
          <tr>
            <td>Kávét, vagy teát kérsz?</td>
            <td><button class="speak-btn" data-speak-text="Kávét vagy teát kérsz?" data-speak-lang="hu-HU">Kávét vagy teát kérsz?</button></td>
            <td>однородные объекты в одной части</td>
          </tr>
          <tr>
            <td>Péter dolgozik és Anna tanul.</td>
            <td><button class="speak-btn" data-speak-text="Péter dolgozik, és Anna tanul." data-speak-lang="hu-HU">Péter dolgozik, és Anna tanul.</button></td>
            <td>граница двух частей</td>
          </tr>
          <tr>
            <td>Nem kávét kérek, de teát.</td>
            <td><button class="speak-btn" data-speak-text="Nem kávét kérek, hanem teát." data-speak-lang="hu-HU">Nem kávét kérek, hanem teát.</button></td>
            <td>исправление отрицавшегося варианта</td>
          </tr>
          <tr>
            <td>Péter tanul, pedig én olvasok.</td>
            <td><button class="speak-btn" data-speak-text="Péter tanul, én pedig olvasok." data-speak-lang="hu-HU">Péter tanul, én pedig olvasok.</button></td>
            <td>в нейтральной модели pedig следует за темой второй части</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>Соедини два параллельных действия через pedig.</li>
          <li>Вырази препятствие через de.</li>
          <li>Предложи выбор между двумя предметами и между двумя действиями.</li>
          <li>Преобразуй причину в результат через ezért.</li>
          <li>Сделай логический вывод через tehát.</li>
        </ol>

        <details>
          <summary><b>Проверить возможные модели</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="Anna dolgozik, Péter pedig tanul." data-speak-lang="hu-HU">Anna dolgozik, Péter pedig tanul.</button><br>
            <button class="speak-btn" data-speak-text="Elmennék, de nincs időm." data-speak-lang="hu-HU">Elmennék, de nincs időm.</button><br>
            <button class="speak-btn" data-speak-text="Kávét vagy teát kérsz?" data-speak-lang="hu-HU">Kávét vagy teát kérsz?</button><br>
            <button class="speak-btn" data-speak-text="Kávét kérsz, vagy inkább teát választasz?" data-speak-lang="hu-HU">Kávét kérsz, vagy inkább teát választasz?</button><br>
            <button class="speak-btn" data-speak-text="Esik az eső, ezért itthon maradunk." data-speak-lang="hu-HU">Esik az eső, ezért itthon maradunk.</button><br>
            <button class="speak-btn" data-speak-text="Késő van, tehát indulnunk kell." data-speak-lang="hu-HU">Késő van, tehát indulnunk kell.</button>
          </p>
        </details>

        <div class="note">
          Граница 24.2: здесь изучены основные сочинительные отношения.
          Причина, содержание, уступка и условие как подчинительные связи рассматриваются на следующих слайдах.
        </div>
      `,
    },
    {
      id: 3,
      eyebrow: "УРОК 24 · 3/11 · ПРИЧИНА",
      title: "Okhatározói mellékmondat: mert",
      subtitle: "Ответ на вопрос Miért? и связь причины с результатом",
      note: 'Главная часть сообщает действие или результат, а придаточная с mert называет причину. Между частями ставится запятая.',
      warn: 'Не путай mert и ezért: mert вводит причину — «потому что», ezért указывает на результат — «поэтому».',
      task: 'В каждом примере найди результат и причину, задай вопрос Miért?, затем перестрой предложение через ezért.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Начни с вопроса</h4>
        <table class="conj">
          <tr><th>Вопрос</th><th>Краткий ответ</th><th>Полное предложение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Miért nem jöttél?" data-speak-lang="hu-HU">Miért nem jöttél?</button></td>
            <td><button class="speak-btn" data-speak-text="Mert beteg voltam." data-speak-lang="hu-HU">Mert beteg voltam.</button></td>
            <td><button class="speak-btn" data-speak-text="Nem jöttem el, mert beteg voltam." data-speak-lang="hu-HU">Nem jöttem el, mert beteg voltam.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Miért tanulsz magyarul?" data-speak-lang="hu-HU">Miért tanulsz magyarul?</button></td>
            <td><button class="speak-btn" data-speak-text="Mert Budapesten élek." data-speak-lang="hu-HU">Mert Budapesten élek.</button></td>
            <td><button class="speak-btn" data-speak-text="Magyarul tanulok, mert Budapesten élek." data-speak-lang="hu-HU">Magyarul tanulok, mert Budapesten élek.</button></td>
          </tr>
        </table>
        <div class="note">Magyarul tanulok, mert Budapesten élek. — Я учу венгерский, потому что живу в Будапеште.</div>

        <div class="note">
          В самостоятельном ответе на вопрос причина может начинаться со слова
          <button class="speak-btn" data-speak-text="Mert" data-speak-lang="hu-HU">Mert</button>.
          В полном предложении перед причинной частью ставится запятая.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Результат → причина</h4>
        <table class="conj">
          <tr><th>Результат в главной части</th><th>Причина после mert</th><th>Полная модель</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Otthon maradok" data-speak-lang="hu-HU">Otthon maradok</button></td>
            <td><button class="speak-btn" data-speak-text="esik az eső" data-speak-lang="hu-HU">esik az eső</button></td>
            <td><button class="speak-btn" data-speak-text="Otthon maradok, mert esik az eső." data-speak-lang="hu-HU">Otthon maradok, mert esik az eső.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Segítséget kérek" data-speak-lang="hu-HU">Segítséget kérek</button></td>
            <td><button class="speak-btn" data-speak-text="nem értem a feladatot" data-speak-lang="hu-HU">nem értem a feladatot</button></td>
            <td><button class="speak-btn" data-speak-text="Segítséget kérek, mert nem értem a feladatot." data-speak-lang="hu-HU">Segítséget kérek, mert nem értem a feladatot.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Korán lefekszem" data-speak-lang="hu-HU">Korán lefekszem</button></td>
            <td><button class="speak-btn" data-speak-text="holnap korán kelek" data-speak-lang="hu-HU">holnap korán kelek</button></td>
            <td><button class="speak-btn" data-speak-text="Korán lefekszem, mert holnap korán kelek." data-speak-lang="hu-HU">Korán lefekszem, mert holnap korán kelek.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Коррелятивная конструкция azért…, mert…</h4>
        <table class="conj">
          <tr><th>Нейтральная причина</th><th>Причина выделена сильнее</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Magyarul tanulok, mert Budapesten élek." data-speak-lang="hu-HU">Magyarul tanulok, mert Budapesten élek.</button></td>
            <td><button class="speak-btn" data-speak-text="Azért tanulok magyarul, mert Budapesten élek." data-speak-lang="hu-HU">Azért tanulok magyarul, mert Budapesten élek.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Otthon maradok, mert esik az eső." data-speak-lang="hu-HU">Otthon maradok, mert esik az eső.</button></td>
            <td><button class="speak-btn" data-speak-text="Azért maradok otthon, mert esik az eső." data-speak-lang="hu-HU">Azért maradok otthon, mert esik az eső.</button></td>
          </tr>
        </table>

        <div class="note">
          Слово
          <button class="speak-btn" data-speak-text="azért" data-speak-lang="hu-HU">azért</button>
          находится в главной части и заранее указывает: причина будет раскрыта после
          <button class="speak-btn" data-speak-text="mert" data-speak-lang="hu-HU">mert</button>.
          В нейтральной фразе azért часто можно опустить.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Причина и результат — два направления</h4>
        <table class="conj">
          <tr><th>Через причину</th><th>Через результат</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Nem megyek el, mert fáradt vagyok." data-speak-lang="hu-HU">Nem megyek el, mert fáradt vagyok.</button></td>
            <td><button class="speak-btn" data-speak-text="Fáradt vagyok, ezért nem megyek el." data-speak-lang="hu-HU">Fáradt vagyok, ezért nem megyek el.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Lekéstük a vonatot, mert későn indultunk." data-speak-lang="hu-HU">Lekéstük a vonatot, mert későn indultunk.</button></td>
            <td><button class="speak-btn" data-speak-text="Későn indultunk, ezért lekéstük a vonatot." data-speak-lang="hu-HU">Későn indultunk, ezért lekéstük a vonatot.</button></td>
          </tr>
        </table>

        <div class="warn">
          При перестройке меняется порядок мыслей:
          с mert сначала сообщается результат, затем причина;
          с ezért сначала причина, затем следствие.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Причина</th></tr>
          <tr>
            <td>Nem jöttem el, ezért beteg voltam.</td>
            <td><button class="speak-btn" data-speak-text="Nem jöttem el, mert beteg voltam." data-speak-lang="hu-HU">Nem jöttem el, mert beteg voltam.</button></td>
            <td>вторая часть объясняет причину</td>
          </tr>
          <tr>
            <td>Azért tanulok magyarul, ezért Budapesten élek.</td>
            <td><button class="speak-btn" data-speak-text="Azért tanulok magyarul, mert Budapesten élek." data-speak-lang="hu-HU">Azért tanulok magyarul, mert Budapesten élek.</button></td>
            <td>после azért причина раскрывается через mert</td>
          </tr>
          <tr>
            <td>Nem megyek el mert fáradt vagyok.</td>
            <td><button class="speak-btn" data-speak-text="Nem megyek el, mert fáradt vagyok." data-speak-lang="hu-HU">Nem megyek el, mert fáradt vagyok.</button></td>
            <td>между частями нужна запятая</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>Ответь полным предложением: почему ты учишь венгерский?</li>
          <li>Выдели причину с помощью парной конструкции.</li>
          <li>Преобразуй предложение с mert в предложение с ezért.</li>
          <li>Исправь пунктуацию в предложении без запятой.</li>
        </ol>

        <details>
          <summary><b>Проверить возможные модели</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="Magyarul tanulok, mert Magyarországon élek." data-speak-lang="hu-HU">Magyarul tanulok, mert Magyarországon élek.</button><br>
            <button class="speak-btn" data-speak-text="Azért tanulok magyarul, mert Magyarországon élek." data-speak-lang="hu-HU">Azért tanulok magyarul, mert Magyarországon élek.</button><br>
            <button class="speak-btn" data-speak-text="Magyarországon élek, ezért magyarul tanulok." data-speak-lang="hu-HU">Magyarországon élek, ezért magyarul tanulok.</button><br>
            <button class="speak-btn" data-speak-text="Otthon maradok, mert esik az eső." data-speak-lang="hu-HU">Otthon maradok, mert esik az eső.</button>
          </p>
        </details>

        <div class="note">Граница 24.3: здесь рассматриваются причина и её связь с результатом. Содержание, цель и желаемое действие с hogy изучаются на следующем слайде.</div>
      `,
    },
    {
      id: 4,
      eyebrow: "УРОК 24 · 4/11 · СОДЕРЖАНИЕ, ЖЕЛАНИЕ И ЦЕЛЬ",
      title: "Alárendelő kötőszavak: hogy",
      subtitle: "Функция главной части определяет смысл и форму придаточного",
      note: 'Hogy вводит личную придаточную часть. Перевод «что» или «чтобы» и наклонение глагола зависят от функции всей конструкции, а не от союза самого по себе.',
      warn: 'Форма повелительного наклонения внутри придаточной части не обязательно является прямым приказом. Она может выражать желание, просьбу, необходимость или цель.',
      task: 'Для каждого примера назови функцию главной части, исполнителя придаточного действия, наклонение и возможный русский перевод.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Содержание мысли, речи или восприятия</h4>
        <table class="conj">
          <tr><th>Главная часть</th><th>Придаточная часть</th><th>Полная модель</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Tudom" data-speak-lang="hu-HU">Tudom</button></td>
            <td><button class="speak-btn" data-speak-text="itt vagy" data-speak-lang="hu-HU">itt vagy</button></td>
            <td><button class="speak-btn" data-speak-text="Tudom, hogy itt vagy." data-speak-lang="hu-HU">Tudom, hogy itt vagy.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Azt mondta" data-speak-lang="hu-HU">Azt mondta</button></td>
            <td><button class="speak-btn" data-speak-text="holnap jön" data-speak-lang="hu-HU">holnap jön</button></td>
            <td><button class="speak-btn" data-speak-text="Azt mondta, hogy holnap jön." data-speak-lang="hu-HU">Azt mondta, hogy holnap jön.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Látom" data-speak-lang="hu-HU">Látom</button></td>
            <td><button class="speak-btn" data-speak-text="dolgozol" data-speak-lang="hu-HU">dolgozol</button></td>
            <td><button class="speak-btn" data-speak-text="Látom, hogy dolgozol." data-speak-lang="hu-HU">Látom, hogy dolgozol.</button></td>
          </tr>
        </table>

        <div class="note">
          Здесь придаточная часть сообщает факт или содержание.
          Обычно используются формы изъявительного наклонения, а по-русски hogy чаще переводится как «что».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Желаемое, требуемое или необходимое действие</h4>
        <table class="conj">
          <tr><th>Функция главной части</th><th>Пример</th><th>Кто выполняет действие</th></tr>
          <tr>
            <td>желание</td>
            <td><button class="speak-btn" data-speak-text="Azt szeretném, hogy gyere el." data-speak-lang="hu-HU">Azt szeretném, hogy gyere el.</button></td>
            <td>собеседник</td>
          </tr>
          <tr>
            <td>просьба</td>
            <td><button class="speak-btn" data-speak-text="Arra kérlek, hogy várj itt." data-speak-lang="hu-HU">Arra kérlek, hogy várj itt.</button></td>
            <td>собеседник</td>
          </tr>
          <tr>
            <td>формальная просьба</td>
            <td><button class="speak-btn" data-speak-text="Arra kérem, hogy várjon itt." data-speak-lang="hu-HU">Arra kérem, hogy várjon itt.</button></td>
            <td>формальный собеседник</td>
          </tr>
          <tr>
            <td>важность или необходимость</td>
            <td><button class="speak-btn" data-speak-text="Fontos, hogy időben érkezz." data-speak-lang="hu-HU">Fontos, hogy időben érkezz.</button></td>
            <td>собеседник</td>
          </tr>
        </table>

        <div class="warn">
          Формы
          <button class="speak-btn" data-speak-text="gyere" data-speak-lang="hu-HU">gyere</button>,
          <button class="speak-btn" data-speak-text="várj" data-speak-lang="hu-HU">várj</button>,
          <button class="speak-btn" data-speak-text="várjon" data-speak-lang="hu-HU">várjon</button>
          и
          <button class="speak-btn" data-speak-text="érkezz" data-speak-lang="hu-HU">érkezz</button>
          совпадают с формами повелительного наклонения, но внутри этих сложных предложений выражают зависимое желаемое действие.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Цель действия</h4>
        <table class="conj">
          <tr><th>Основное действие</th><th>Цель</th><th>Полное предложение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Azért jöttem" data-speak-lang="hu-HU">Azért jöttem</button></td>
            <td><button class="speak-btn" data-speak-text="segítsek" data-speak-lang="hu-HU">segítsek</button></td>
            <td><button class="speak-btn" data-speak-text="Azért jöttem, hogy segítsek." data-speak-lang="hu-HU">Azért jöttem, hogy segítsek.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Elmentem a boltba" data-speak-lang="hu-HU">Elmentem a boltba</button></td>
            <td><button class="speak-btn" data-speak-text="kenyeret vegyek" data-speak-lang="hu-HU">kenyeret vegyek</button></td>
            <td><button class="speak-btn" data-speak-text="Elmentem a boltba, hogy kenyeret vegyek." data-speak-lang="hu-HU">Elmentem a boltba, hogy kenyeret vegyek.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kinyitottam az ablakot" data-speak-lang="hu-HU">Kinyitottam az ablakot</button></td>
            <td><button class="speak-btn" data-speak-text="bejöjjön a friss levegő" data-speak-lang="hu-HU">bejöjjön a friss levegő</button></td>
            <td><button class="speak-btn" data-speak-text="Kinyitottam az ablakot, hogy bejöjjön a friss levegő." data-speak-lang="hu-HU">Kinyitottam az ablakot, hogy bejöjjön a friss levegő.</button></td>
          </tr>
        </table>

        <div class="note">
          В целевой конструкции после hogy используется личная форма:
          видно, кто должен выполнить действие.
          Это может быть тот же исполнитель или другой участник ситуации.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Указательные слова в главной части</h4>
        <table class="conj">
          <tr><th>Пара</th><th>Типичная функция</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="azt, hogy" data-speak-lang="hu-HU">azt, hogy</button></td>
            <td>содержание или желаемый объект мысли</td>
            <td><button class="speak-btn" data-speak-text="Azt szeretném, hogy maradj itt." data-speak-lang="hu-HU">Azt szeretném, hogy maradj itt.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="arra, hogy" data-speak-lang="hu-HU">arra, hogy</button></td>
            <td>просьба или направленность</td>
            <td><button class="speak-btn" data-speak-text="Arra kérlek, hogy segíts." data-speak-lang="hu-HU">Arra kérlek, hogy segíts.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="azért, hogy" data-speak-lang="hu-HU">azért, hogy</button></td>
            <td>цель</td>
            <td><button class="speak-btn" data-speak-text="Azért jöttem, hogy beszéljünk." data-speak-lang="hu-HU">Azért jöttem, hogy beszéljünk.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Одна главная часть — два разных смысла</h4>
        <table class="conj">
          <tr><th>Сообщение</th><th>Переданная инструкция</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Azt mondta, hogy Péter holnap jön." data-speak-lang="hu-HU">Azt mondta, hogy Péter holnap jön.</button></td>
            <td><button class="speak-btn" data-speak-text="Azt mondta Péternek, hogy holnap jöjjön." data-speak-lang="hu-HU">Azt mondta Péternek, hogy holnap jöjjön.</button></td>
          </tr>
          <tr>
            <td>сообщил, что Пётр придёт</td>
            <td>сказал Петру прийти</td>
          </tr>
        </table>

        <div class="note">
          Наклонение меняет функцию придаточной части:
          факт или переданное содержание противопоставляется желаемому либо требуемому действию.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Инфинитив: точное правило</h4>
        <table class="conj">
          <tr><th>Конструкция</th><th>Пример</th><th>Оценка</th></tr>
          <tr>
            <td>hogy + личная форма</td>
            <td><button class="speak-btn" data-speak-text="Azért jöttem, hogy segítsek." data-speak-lang="hu-HU">Azért jöttem, hogy segítsek.</button></td>
            <td>правильно</td>
          </tr>
          <tr>
            <td>hogy + инфинитив</td>
            <td><span class="line-through">Azért jöttem, hogy segíteni.</span></td>
            <td>неправильно</td>
          </tr>
          <tr>
            <td>отдельная инфинитивная конструкция без hogy</td>
            <td><button class="speak-btn" data-speak-text="Segíteni jöttem." data-speak-lang="hu-HU">Segíteni jöttem.</button></td>
            <td>возможна при подходящем смысле</td>
          </tr>
        </table>

        <div class="warn">
          Точное правило: инфинитив нельзя ставить непосредственно после hogy вместо личной формы.
          Но цель иногда можно выразить другой конструкцией без hogy.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Причина</th></tr>
          <tr>
            <td>Tudom, hogy itt legyél.</td>
            <td><button class="speak-btn" data-speak-text="Tudom, hogy itt vagy." data-speak-lang="hu-HU">Tudom, hogy itt vagy.</button></td>
            <td>сообщается известный факт</td>
          </tr>
          <tr>
            <td>Azt szeretném, hogy itt vagy.</td>
            <td><button class="speak-btn" data-speak-text="Azt szeretném, hogy itt legyél." data-speak-lang="hu-HU">Azt szeretném, hogy itt legyél.</button></td>
            <td>выражается желаемое действие или состояние</td>
          </tr>
          <tr>
            <td>Azért jöttem, hogy segíteni.</td>
            <td><button class="speak-btn" data-speak-text="Azért jöttem, hogy segítsek." data-speak-lang="hu-HU">Azért jöttem, hogy segítsek.</button></td>
            <td>после hogy нужна личная форма</td>
          </tr>
          <tr>
            <td>Azt mondta Péternek, hogy holnap jön, если смысл — приказ Петру.</td>
            <td><button class="speak-btn" data-speak-text="Azt mondta Péternek, hogy holnap jöjjön." data-speak-lang="hu-HU">Azt mondta Péternek, hogy holnap jöjjön.</button></td>
            <td>передаётся требуемое действие</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>Передай факт: «Я знаю, что он дома».</li>
          <li>Вырази желание: «Я хочу, чтобы ты остался».</li>
          <li>Назови цель: «Я пришёл, чтобы поговорить».</li>
          <li>Передай инструкцию третьему лицу.</li>
          <li>Преобразуй целевое предложение в инфинитивную конструкцию без hogy, если это возможно.</li>
        </ol>

        <details>
          <summary><b>Проверить возможные модели</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="Tudom, hogy otthon van." data-speak-lang="hu-HU">Tudom, hogy otthon van.</button><br>
            <button class="speak-btn" data-speak-text="Azt szeretném, hogy maradj itt." data-speak-lang="hu-HU">Azt szeretném, hogy maradj itt.</button><br>
            <button class="speak-btn" data-speak-text="Azért jöttem, hogy beszéljünk." data-speak-lang="hu-HU">Azért jöttem, hogy beszéljünk.</button><br>
            <button class="speak-btn" data-speak-text="Azt mondta Annának, hogy várjon kint." data-speak-lang="hu-HU">Azt mondta Annának, hogy várjon kint.</button><br>
            <button class="speak-btn" data-speak-text="Beszélni jöttem." data-speak-lang="hu-HU">Beszélni jöttem.</button>
          </p>
        </details>

        <div class="note">Граница 24.4: здесь изучены содержание, желаемое действие и цель с hogy. Другие типы придаточных и более сложные случаи опущения союза будут рассматриваться отдельно.</div>
      `,
    },
    {
      id: 5,
      eyebrow: "УРОК 24 · 5/11 · УСТУПКА И УСЛОВИЕ",
      title: "Bár / habár és ha",
      subtitle: "Действие вопреки препятствию или результат при определённом условии",
      note: 'Bár и habár вводят препятствие, которое не отменяет результат. Ha вводит условие, от которого результат зависит.',
      warn: 'Не выбирай союз только по русскому переводу. Сначала спроси: результат уже происходит вопреки обстоятельству или он наступит только при выполнении условия?',
      task: 'В каждом примере назови препятствие или условие, результат, тип глагольной формы и причину постановки запятой.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Главное смысловое различие</h4>
        <table class="conj">
          <tr><th>Связь</th><th>Пример</th><th>Логика</th></tr>
          <tr>
            <td>уступка с <button class="speak-btn" data-speak-text="bár" data-speak-lang="hu-HU">bár</button></td>
            <td><button class="speak-btn" data-speak-text="Bár esik az eső, elindulunk." data-speak-lang="hu-HU">Bár esik az eső, elindulunk.</button></td>
            <td>дождь мешает, но мы всё равно отправляемся</td>
          </tr>
          <tr>
            <td>условие с <button class="speak-btn" data-speak-text="ha" data-speak-lang="hu-HU">ha</button></td>
            <td><button class="speak-btn" data-speak-text="Ha esik az eső, otthon maradunk." data-speak-lang="hu-HU">Ha esik az eső, otthon maradunk.</button></td>
            <td>решение остаться дома зависит от дождя</td>
          </tr>
        </table>

        <div class="note">
          Уступительная часть отвечает на вопрос «несмотря на что?»,
          условная — «при каком условии?».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Bár и habár</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Пример</th><th>Комментарий</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="bár" data-speak-lang="hu-HU">bár</button></td>
            <td><button class="speak-btn" data-speak-text="Elmentem, bár fáradt voltam." data-speak-lang="hu-HU">Elmentem, bár fáradt voltam.</button></td>
            <td>частая нейтральная уступительная связь</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="habár" data-speak-lang="hu-HU">habár</button></td>
            <td><button class="speak-btn" data-speak-text="Habár késő volt, tovább beszélgettünk." data-speak-lang="hu-HU">Habár késő volt, tovább beszélgettünk.</button></td>
            <td>близкий по значению вариант</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Усиление результата через mégis</h4>
        <p><button class="speak-btn" data-speak-text="Bár fáradt voltam, mégis elmentem." data-speak-lang="hu-HU">Bár fáradt voltam, mégis elmentem.</button></p>
        <p><button class="speak-btn" data-speak-text="Habár esett az eső, mégis sétáltunk." data-speak-lang="hu-HU">Habár esett az eső, mégis sétáltunk.</button></p>
        <div class="note">
          Слово
          <button class="speak-btn" data-speak-text="mégis" data-speak-lang="hu-HU">mégis</button>
          подчёркивает значение «всё-таки», но в нейтральной фразе не всегда обязательно.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Реальное и гипотетическое условие</h4>
        <table class="conj">
          <tr><th>Тип</th><th>Пример</th><th>Как говорящий оценивает ситуацию</th></tr>
          <tr>
            <td>реальное или открытое</td>
            <td><button class="speak-btn" data-speak-text="Ha ráérsz, gyere át!" data-speak-lang="hu-HU">Ha ráérsz, gyere át!</button></td>
            <td>свободное время считается реальной возможностью</td>
          </tr>
          <tr>
            <td>реальное будущее</td>
            <td><button class="speak-btn" data-speak-text="Ha holnap jó idő lesz, kirándulni megyünk." data-speak-lang="hu-HU">Ha holnap jó idő lesz, kirándulni megyünk.</button></td>
            <td>условие ещё не известно, но вполне возможно</td>
          </tr>
          <tr>
            <td>гипотетическое</td>
            <td><button class="speak-btn" data-speak-text="Ha több időm lenne, többet olvasnék." data-speak-lang="hu-HU">Ha több időm lenne, többet olvasnék.</button></td>
            <td>говорящий воображает другую ситуацию</td>
          </tr>
        </table>

        <div class="warn">
          Сам союз
          <button class="speak-btn" data-speak-text="ha" data-speak-lang="hu-HU">ha</button>
          не требует условного наклонения автоматически.
          Формы зависят от того, реальным или гипотетическим представлено условие.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Порядок частей и запятая</h4>
        <table class="conj">
          <tr><th>Условная или уступительная часть сначала</th><th>Главная часть сначала</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Bár fáradt voltam, elmentem." data-speak-lang="hu-HU">Bár fáradt voltam, elmentem.</button></td>
            <td><button class="speak-btn" data-speak-text="Elmentem, bár fáradt voltam." data-speak-lang="hu-HU">Elmentem, bár fáradt voltam.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ha lesz időm, felhívlak." data-speak-lang="hu-HU">Ha lesz időm, felhívlak.</button></td>
            <td><button class="speak-btn" data-speak-text="Felhívlak, ha lesz időm." data-speak-lang="hu-HU">Felhívlak, ha lesz időm.</button></td>
          </tr>
        </table>

        <div class="note">
          Обе позиции возможны. Между частями сложного предложения ставится запятая.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Сравнение похожих ситуаций</h4>
        <table class="conj">
          <tr><th>Уступка</th><th>Условие</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Bár kevés időm van, tanulok." data-speak-lang="hu-HU">Bár kevés időm van, tanulok.</button></td>
            <td><button class="speak-btn" data-speak-text="Ha van időm, tanulok." data-speak-lang="hu-HU">Ha van időm, tanulok.</button></td>
          </tr>
          <tr>
            <td>учусь несмотря на нехватку времени</td>
            <td>учусь при наличии времени</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Bár drága, megveszem." data-speak-lang="hu-HU">Bár drága, megveszem.</button></td>
            <td><button class="speak-btn" data-speak-text="Ha olcsóbb lesz, megveszem." data-speak-lang="hu-HU">Ha olcsóbb lesz, megveszem.</button></td>
          </tr>
          <tr>
            <td>покупаю вопреки высокой цене</td>
            <td>покупка зависит от снижения цены</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Причина</th></tr>
          <tr>
            <td>Bár fáradt voltam elmentem.</td>
            <td><button class="speak-btn" data-speak-text="Bár fáradt voltam, elmentem." data-speak-lang="hu-HU">Bár fáradt voltam, elmentem.</button></td>
            <td>между частями нужна запятая</td>
          </tr>
          <tr>
            <td>Ha lenne időm, többet olvasok.</td>
            <td><button class="speak-btn" data-speak-text="Ha lenne időm, többet olvasnék." data-speak-lang="hu-HU">Ha lenne időm, többet olvasnék.</button></td>
            <td>гипотетический результат тоже условный</td>
          </tr>
          <tr>
            <td>Bár esik az eső, ezért elindulunk.</td>
            <td><button class="speak-btn" data-speak-text="Bár esik az eső, elindulunk." data-speak-lang="hu-HU">Bár esik az eső, elindulunk.</button></td>
            <td>дождь является препятствием, а не причиной отправления</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>Скажи: «Хотя я устал, я продолжу работать».</li>
          <li>Скажи реальное условие с инструкцией.</li>
          <li>Сделай то же условие гипотетическим.</li>
          <li>Поставь условную часть после результата.</li>
          <li>Добавь mégis в уступительное предложение.</li>
        </ol>

        <details>
          <summary><b>Проверить возможные модели</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="Bár fáradt vagyok, tovább dolgozom." data-speak-lang="hu-HU">Bár fáradt vagyok, tovább dolgozom.</button><br>
            <button class="speak-btn" data-speak-text="Ha megérkezel, hívj fel!" data-speak-lang="hu-HU">Ha megérkezel, hívj fel!</button><br>
            <button class="speak-btn" data-speak-text="Ha több időd lenne, gyakrabban hívnál fel." data-speak-lang="hu-HU">Ha több időd lenne, gyakrabban hívnál fel.</button><br>
            <button class="speak-btn" data-speak-text="Felhívlak, ha megérkezem." data-speak-lang="hu-HU">Felhívlak, ha megérkezem.</button><br>
            <button class="speak-btn" data-speak-text="Bár fáradt vagyok, mégis tovább dolgozom." data-speak-lang="hu-HU">Bár fáradt vagyok, mégis tovább dolgozom.</button>
          </p>
        </details>

        <div class="note">
          Граница 24.5: здесь различаются уступка и условие.
          Прошедшие нереальные условия и дополнительные уступительные конструкции в этот слайд не входят.
        </div>
      `,
    },
    {
      id: 6,
      eyebrow: "УРОК 24 · 6/11 · ПОРЯДОК СЛОВ",
      title: "Igekötők a mellékmondatban",
      subtitle: "Придаточная часть не отделяет приставку сама по себе",
      note: 'Внутри придаточной части действуют обычные правила нейтрального утверждения, отрицания, фокуса и вопросительного слова. Для зависимых форм, совпадающих с повелительными, дополнительно важна функция: желание, необходимость или переданная просьба.',
      warn: 'Не ставь приставку после глагола только потому, что перед частью стоит hogy, ha, bár или вопросительное слово главной части.',
      task: 'В каждой строке найди элемент непосредственно перед спрягаемым глаголом и объясни, почему приставка стоит перед глаголом или после него.',
      body: `
        <div class="note">Само придаточное предложение не заставляет глагольную приставку отделяться. Порядок определяют отрицание, фокус, вопрос или функция формы внутри придаточной части.</div>
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Один глагол в пяти контекстах</h4>
        <table class="conj">
          <tr><th>Контекст</th><th>Пример</th><th>Положение приставки</th></tr>
          <tr>
            <td>нейтральное утверждение</td>
            <td><button class="speak-btn" data-speak-text="Azt mondta, hogy eljön." data-speak-lang="hu-HU">Azt mondta, hogy eljön.</button></td>
            <td><button class="speak-btn" data-speak-text="eljön" data-speak-lang="hu-HU">eljön</button>: приставка перед глаголом</td>
          </tr>
          <tr>
            <td>отрицание</td>
            <td><button class="speak-btn" data-speak-text="Azt mondta, hogy nem jön el." data-speak-lang="hu-HU">Azt mondta, hogy nem jön el.</button></td>
            <td><button class="speak-btn" data-speak-text="nem jön el" data-speak-lang="hu-HU">nem jön el</button>: отрицание занимает позицию перед глаголом</td>
          </tr>
          <tr>
            <td>контрастивный фокус</td>
            <td><button class="speak-btn" data-speak-text="Azt mondta, hogy Péter jön el." data-speak-lang="hu-HU">Azt mondta, hogy Péter jön el.</button></td>
            <td><button class="speak-btn" data-speak-text="Péter jön el" data-speak-lang="hu-HU">Péter jön el</button>: выделено, что придёт именно Пётр</td>
          </tr>
          <tr>
            <td>косвенный вопрос</td>
            <td><button class="speak-btn" data-speak-text="Nem tudom, mikor jön el." data-speak-lang="hu-HU">Nem tudom, mikor jön el.</button></td>
            <td><button class="speak-btn" data-speak-text="mikor jön el" data-speak-lang="hu-HU">mikor jön el</button>: вопросительное слово стоит перед глаголом</td>
          </tr>
          <tr>
            <td>зависимое желаемое действие</td>
            <td><button class="speak-btn" data-speak-text="Azt szeretném, hogy eljöjjön." data-speak-lang="hu-HU">Azt szeretném, hogy eljöjjön.</button></td>
            <td><button class="speak-btn" data-speak-text="eljöjjön" data-speak-lang="hu-HU">eljöjjön</button>: в недирективном зависимом употреблении приставка остаётся перед глаголом</td>
          </tr>
        </table>

        <div class="note">
          Союз
          <button class="speak-btn" data-speak-text="hogy" data-speak-lang="hu-HU">hogy</button>
          присутствует в нескольких примерах, но сам союз не определяет порядок.
          Решение зависит от отрицания, фокуса, вопросительного слова и от того,
          выражает ли зависимая форма желание либо прямую просьбу.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Та же система с felhívni</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Пример</th></tr>
          <tr>
            <td>нейтральный факт</td>
            <td><button class="speak-btn" data-speak-text="Tudom, hogy felhívja Annát." data-speak-lang="hu-HU">Tudom, hogy felhívja Annát.</button></td>
          </tr>
          <tr>
            <td>отрицание</td>
            <td><button class="speak-btn" data-speak-text="Tudom, hogy nem hívja fel Annát." data-speak-lang="hu-HU">Tudom, hogy nem hívja fel Annát.</button></td>
          </tr>
          <tr>
            <td>фокус на исполнителе</td>
            <td><button class="speak-btn" data-speak-text="Tudom, hogy Péter hívja fel Annát." data-speak-lang="hu-HU">Tudom, hogy Péter hívja fel Annát.</button></td>
          </tr>
          <tr>
            <td>вопрос о времени</td>
            <td><button class="speak-btn" data-speak-text="Nem tudom, mikor hívja fel Annát." data-speak-lang="hu-HU">Nem tudom, mikor hívja fel Annát.</button></td>
          </tr>
          <tr>
            <td>формальная просьба</td>
            <td><button class="speak-btn" data-speak-text="Arra kérem, hogy hívja fel Annát." data-speak-lang="hu-HU">Arra kérem, hogy hívja fel Annát.</button></td>
          </tr>
        </table>

        <div class="warn">
          В предложении
          <button class="speak-btn" data-speak-text="Tudom, hogy Péter hívja fel Annát." data-speak-lang="hu-HU">Tudom, hogy Péter hívja fel Annát.</button>
          имя перед глаголом несёт контраст: именно Пётр, а не другой человек, звонит Анне.
          Для нейтрального сообщения естественнее:
          <button class="speak-btn" data-speak-text="Tudom, hogy Péter felhívja Annát." data-speak-lang="hu-HU">Tudom, hogy Péter felhívja Annát.</button>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Зависимое желание и переданная просьба</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Пример</th><th>Типичный порядок</th></tr>
          <tr>
            <td>желание или ожидаемый результат</td>
            <td><button class="speak-btn" data-speak-text="Azt szeretném, hogy eljöjjön." data-speak-lang="hu-HU">Azt szeretném, hogy eljöjjön.</button></td>
            <td>приставка перед зависимой формой</td>
          </tr>
          <tr>
            <td>необходимость</td>
            <td><button class="speak-btn" data-speak-text="Fontos, hogy időben megérkezzen." data-speak-lang="hu-HU">Fontos, hogy időben megérkezzen.</button></td>
            <td>приставка перед зависимой формой</td>
          </tr>
          <tr>
            <td>прямая переданная просьба</td>
            <td><button class="speak-btn" data-speak-text="Arra kérem, hogy jöjjön el." data-speak-lang="hu-HU">Arra kérem, hogy jöjjön el.</button></td>
            <td>порядок команды: глагол + приставка</td>
          </tr>
          <tr>
            <td>просьба выполнить конкретное действие</td>
            <td><button class="speak-btn" data-speak-text="Arra kérem, hogy hívja fel Annát." data-speak-lang="hu-HU">Arra kérem, hogy hívja fel Annát.</button></td>
            <td>порядок команды: глагол + приставка</td>
          </tr>
        </table>

        <div class="warn">
          Формы, совпадающие с повелительным наклонением, ведут себя не одинаково во всех придаточных.
          В недирективном желании или необходимости приставка часто остаётся перед глаголом:
          <button class="speak-btn" data-speak-text="eljöjjön, megérkezzen" data-speak-lang="hu-HU">eljöjjön, megérkezzen</button>.
          В просьбе, близкой к переданной команде, часто используется порядок
          <button class="speak-btn" data-speak-text="jöjjön el, hívja fel" data-speak-lang="hu-HU">jöjjön el, hívja fel</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Приставка в условной и уступительной части</h4>
        <table class="conj">
          <tr><th>Нейтрально</th><th>Отрицание или фокус</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ha megérkezik, felhív." data-speak-lang="hu-HU">Ha megérkezik, felhív.</button></td>
            <td><button class="speak-btn" data-speak-text="Ha nem érkezik meg, nem hív fel." data-speak-lang="hu-HU">Ha nem érkezik meg, nem hív fel.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Bár elolvasta a levelet, nem válaszolt." data-speak-lang="hu-HU">Bár elolvasta a levelet, nem válaszolt.</button></td>
            <td><button class="speak-btn" data-speak-text="Bár csak tegnap olvasta el a levelet, már válaszolt." data-speak-lang="hu-HU">Bár csak tegnap olvasta el a levelet, már válaszolt.</button></td>
          </tr>
        </table>

        <div class="note">
          Союзы условной и уступительной связи тоже не задают положение приставки.
          Его определяет отрицание, фокус, вопрос или наклонение внутри соответствующей части.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Косвенный вопрос: kérdőszó + ige + igekötő</h4>
        <table class="conj">
          <tr><th>Прямой вопрос</th><th>Косвенный вопрос</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mikor indul el a vonat?" data-speak-lang="hu-HU">Mikor indul el a vonat?</button></td>
            <td><button class="speak-btn" data-speak-text="Nem tudom, mikor indul el a vonat." data-speak-lang="hu-HU">Nem tudom, mikor indul el a vonat.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hol szállsz le?" data-speak-lang="hu-HU">Hol szállsz le?</button></td>
            <td><button class="speak-btn" data-speak-text="Mondd meg, hol szállsz le!" data-speak-lang="hu-HU">Mondd meg, hol szállsz le!</button></td>
          </tr>
        </table>

        <div class="note">
          Косвенный вопрос сохраняет вопросительное слово перед глаголом.
          Приставка поэтому остаётся после глагола, как и в соответствующем прямом вопросе.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Причина</th></tr>
          <tr>
            <td>Azt mondta, hogy jön el.</td>
            <td><button class="speak-btn" data-speak-text="Azt mondta, hogy eljön." data-speak-lang="hu-HU">Azt mondta, hogy eljön.</button></td>
            <td>нейтральное утверждение не отделяет приставку</td>
          </tr>
          <tr>
            <td>Azt mondta, hogy nem eljön.</td>
            <td><button class="speak-btn" data-speak-text="Azt mondta, hogy nem jön el." data-speak-lang="hu-HU">Azt mondta, hogy nem jön el.</button></td>
            <td>после отрицания приставка стоит после глагола</td>
          </tr>
          <tr>
            <td>Nem tudom, mikor eljön.</td>
            <td><button class="speak-btn" data-speak-text="Nem tudom, mikor jön el." data-speak-lang="hu-HU">Nem tudom, mikor jön el.</button></td>
            <td>вопросительное слово занимает предглагольную позицию</td>
          </tr>
          <tr>
            <td>Arra kérem, hogy felhívja Annát.</td>
            <td><button class="speak-btn" data-speak-text="Arra kérem, hogy hívja fel Annát." data-speak-lang="hu-HU">Arra kérem, hogy hívja fel Annát.</button></td>
            <td>в зависимой просьбе используется положительная повелительная форма</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>Преобразуй нейтральное утверждение с eljön в отрицательное.</li>
          <li>Выдели, что придёт именно Анна.</li>
          <li>Сделай косвенный вопрос о времени прибытия.</li>
          <li>Сформулируй формальную просьбу позвонить Анне.</li>
          <li>Объясни положение приставок в условном предложении.</li>
        </ol>

        <details>
          <summary><b>Проверить возможные модели</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="Azt mondta, hogy nem jön el." data-speak-lang="hu-HU">Azt mondta, hogy nem jön el.</button><br>
            <button class="speak-btn" data-speak-text="Azt mondta, hogy Anna jön el." data-speak-lang="hu-HU">Azt mondta, hogy Anna jön el.</button><br>
            <button class="speak-btn" data-speak-text="Nem tudom, mikor jön el." data-speak-lang="hu-HU">Nem tudom, mikor jön el.</button><br>
            <button class="speak-btn" data-speak-text="Arra kérem, hogy hívja fel Annát." data-speak-lang="hu-HU">Arra kérem, hogy hívja fel Annát.</button><br>
            <button class="speak-btn" data-speak-text="Ha nem érkezik meg, nem hív fel." data-speak-lang="hu-HU">Ha nem érkezik meg, nem hív fel.</button>
          </p>
        </details>

        <div class="note">
          Граница 24.6: здесь повторяются основные позиции приставки.
          Полная теория венгерского фокуса и все стилистические варианты порядка слов в этот слайд не входят.
        </div>
      `,
    },
    {
      id: 7,
      eyebrow: "УРОК 24 · 7/11 · СВЯЗНЫЙ АБЗАЦ",
      title: "Kötőszavak és szövegkapcsoló elemek",
      subtitle: "Не список выражений, а логическая структура текста",
      note: 'Не все связующие элементы являются союзами. Одни соединяют части предложения, другие показывают позицию автора, пример, переход или итог.',
      warn: 'Связность не означает использовать как можно больше связок. Каждое выражение должно выполнять понятную функцию и не дублировать соседнее.',
      task: 'Прочитай модель абзаца, определи функцию каждой связки, затем напиши собственный текст из шести–восьми предложений.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Связующие элементы по функциям</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Полезные модели</th><th>Мини-пример</th></tr>
          <tr>
            <td>позиция автора</td>
            <td>
              <button class="speak-btn" data-speak-text="Szerintem" data-speak-lang="hu-HU">Szerintem</button>,
              <button class="speak-btn" data-speak-text="Úgy gondolom, hogy" data-speak-lang="hu-HU">Úgy gondolom, hogy</button>
            </td>
            <td><button class="speak-btn" data-speak-text="Szerintem érdemes minden nap gyakorolni." data-speak-lang="hu-HU">Szerintem érdemes minden nap gyakorolni.</button></td>
          </tr>
          <tr>
            <td>причина</td>
            <td>
              <button class="speak-btn" data-speak-text="mert" data-speak-lang="hu-HU">mert</button>,
              <button class="speak-btn" data-speak-text="Azért gondolom így, mert" data-speak-lang="hu-HU">Azért gondolom így, mert</button>
            </td>
            <td><button class="speak-btn" data-speak-text="Azért gondolom így, mert a rendszeres gyakorlás hatékony." data-speak-lang="hu-HU">Azért gondolom így, mert a rendszeres gyakorlás hatékony.</button></td>
          </tr>
          <tr>
            <td>два аргумента</td>
            <td>
              <button class="speak-btn" data-speak-text="Egyrészt" data-speak-lang="hu-HU">Egyrészt</button>,
              <button class="speak-btn" data-speak-text="másrészt" data-speak-lang="hu-HU">másrészt</button>
            </td>
            <td><button class="speak-btn" data-speak-text="Egyrészt hasznos, másrészt érdekes." data-speak-lang="hu-HU">Egyrészt hasznos, másrészt érdekes.</button></td>
          </tr>
          <tr>
            <td>пример</td>
            <td><button class="speak-btn" data-speak-text="például" data-speak-lang="hu-HU">például</button></td>
            <td><button class="speak-btn" data-speak-text="Például tegnap egy hivatalos levelet olvastam." data-speak-lang="hu-HU">Például tegnap egy hivatalos levelet olvastam.</button></td>
          </tr>
          <tr>
            <td>противопоставление</td>
            <td>
              <button class="speak-btn" data-speak-text="de" data-speak-lang="hu-HU">de</button>,
              <button class="speak-btn" data-speak-text="viszont" data-speak-lang="hu-HU">viszont</button>
            </td>
            <td><button class="speak-btn" data-speak-text="A nyelvtan nehéz, viszont érdekes." data-speak-lang="hu-HU">A nyelvtan nehéz, viszont érdekes.</button></td>
          </tr>
          <tr>
            <td>уступка</td>
            <td>
              <button class="speak-btn" data-speak-text="bár" data-speak-lang="hu-HU">bár</button>,
              <button class="speak-btn" data-speak-text="ennek ellenére" data-speak-lang="hu-HU">ennek ellenére</button>
            </td>
            <td><button class="speak-btn" data-speak-text="Bár fáradt vagyok, mégis gyakorlok." data-speak-lang="hu-HU">Bár fáradt vagyok, mégis gyakorlok.</button></td>
          </tr>
          <tr>
            <td>условие</td>
            <td><button class="speak-btn" data-speak-text="ha" data-speak-lang="hu-HU">ha</button></td>
            <td><button class="speak-btn" data-speak-text="Ha nem értek valamit, segítséget kérek." data-speak-lang="hu-HU">Ha nem értek valamit, segítséget kérek.</button></td>
          </tr>
          <tr>
            <td>результат</td>
            <td>
              <button class="speak-btn" data-speak-text="ezért" data-speak-lang="hu-HU">ezért</button>,
              <button class="speak-btn" data-speak-text="így" data-speak-lang="hu-HU">így</button>
            </td>
            <td><button class="speak-btn" data-speak-text="Sokat gyakoroltam, ezért jobban értem a szabályt." data-speak-lang="hu-HU">Sokat gyakoroltam, ezért jobban értem a szabályt.</button></td>
          </tr>
          <tr>
            <td>завершение</td>
            <td>
              <button class="speak-btn" data-speak-text="végül" data-speak-lang="hu-HU">végül</button>,
              <button class="speak-btn" data-speak-text="összességében" data-speak-lang="hu-HU">összességében</button>
            </td>
            <td><button class="speak-btn" data-speak-text="Összességében lassan, de biztosan haladok." data-speak-lang="hu-HU">Összességében lassan, de biztosan haladok.</button></td>
          </tr>
        </table>

        <div class="note">
          <b>Kötőszó</b> соединяет слова или части предложения:
          <button class="speak-btn" data-speak-text="mert, de, bár, ha" data-speak-lang="hu-HU">mert, de, bár, ha</button>.
          <b>Szövegkapcsoló elem</b> организует более широкий текст:
          <button class="speak-btn" data-speak-text="szerintem, például, végül, összességében" data-speak-lang="hu-HU">szerintem, például, végül, összességében</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Модель связного абзаца</h4>
        <div class="dialogue">
          <p><button class="speak-btn" data-speak-text="Szerintem érdemes minden nap magyarul tanulni." data-speak-lang="hu-HU">Szerintem érdemes minden nap magyarul tanulni.</button></p>
          <p><button class="speak-btn" data-speak-text="Egyrészt könnyebben intézem az ügyeimet, másrészt jobban megértem az embereket." data-speak-lang="hu-HU">Egyrészt könnyebben intézem az ügyeimet, másrészt jobban megértem az embereket.</button></p>
          <p><button class="speak-btn" data-speak-text="Bár a nyelvtan néha nehéz, mégis rendszeresen gyakorlok." data-speak-lang="hu-HU">Bár a nyelvtan néha nehéz, mégis rendszeresen gyakorlok.</button></p>
          <p><button class="speak-btn" data-speak-text="Ha nem értek valamit, segítséget kérek." data-speak-lang="hu-HU">Ha nem értek valamit, segítséget kérek.</button></p>
          <p><button class="speak-btn" data-speak-text="Például tegnap arra kértem a tanáromat, hogy magyarázza el még egyszer a szabályt." data-speak-lang="hu-HU">Például tegnap arra kértem a tanáromat, hogy magyarázza el még egyszer a szabályt.</button></p>
          <p><button class="speak-btn" data-speak-text="Így ma már jobban értem." data-speak-lang="hu-HU">Így ma már jobban értem.</button></p>
          <p><button class="speak-btn" data-speak-text="Összességében lassan, de biztosan haladok." data-speak-lang="hu-HU">Összességében lassan, de biztosan haladok.</button></p>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как устроен абзац</h4>
        <table class="conj">
          <tr><th>Шаг</th><th>Функция</th><th>Связка из модели</th></tr>
          <tr><td>1</td><td>позиция автора</td><td><button class="speak-btn" data-speak-text="Szerintem" data-speak-lang="hu-HU">Szerintem</button></td></tr>
          <tr><td>2</td><td>два аргумента</td><td><button class="speak-btn" data-speak-text="Egyrészt, másrészt" data-speak-lang="hu-HU">Egyrészt, másrészt</button></td></tr>
          <tr><td>3</td><td>препятствие и действие вопреки ему</td><td><button class="speak-btn" data-speak-text="Bár, mégis" data-speak-lang="hu-HU">Bár, mégis</button></td></tr>
          <tr><td>4</td><td>условие и реакция</td><td><button class="speak-btn" data-speak-text="Ha" data-speak-lang="hu-HU">Ha</button></td></tr>
          <tr><td>5</td><td>конкретный пример</td><td><button class="speak-btn" data-speak-text="Például" data-speak-lang="hu-HU">Például</button></td></tr>
          <tr><td>6</td><td>результат</td><td><button class="speak-btn" data-speak-text="Így" data-speak-lang="hu-HU">Így</button></td></tr>
          <tr><td>7</td><td>итог</td><td><button class="speak-btn" data-speak-text="Összességében" data-speak-lang="hu-HU">Összességében</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Не перегружай предложение</h4>
        <table class="conj">
          <tr><th>Перегружено</th><th>Лучше</th></tr>
          <tr>
            <td>Одна фраза содержит причину, результат, уступку и пример одновременно.</td>
            <td>Раздели мысль на два–три предложения и дай каждой связке одну функцию.</td>
          </tr>
          <tr>
            <td><span class="line-through">Bár nehéz, ennek ellenére mégis gyakorlok.</span></td>
            <td>
              <button class="speak-btn" data-speak-text="Bár nehéz, mégis gyakorlok." data-speak-lang="hu-HU">Bár nehéz, mégis gyakorlok.</button><br>
              или<br>
              <button class="speak-btn" data-speak-text="Nehéz. Ennek ellenére gyakorlok." data-speak-lang="hu-HU">Nehéz. Ennek ellenére gyakorlok.</button>
            </td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Причина</th></tr>
          <tr>
            <td>Szerintem, érdemes gyakorolni.</td>
            <td><button class="speak-btn" data-speak-text="Szerintem érdemes gyakorolni." data-speak-lang="hu-HU">Szerintem érdemes gyakorolni.</button></td>
            <td>в нейтральной позиции после szerintem запятая не нужна</td>
          </tr>
          <tr>
            <td>Egyrészt hasznos. Másrészt érdekes.</td>
            <td><button class="speak-btn" data-speak-text="Egyrészt hasznos, másrészt érdekes." data-speak-lang="hu-HU">Egyrészt hasznos, másrészt érdekes.</button></td>
            <td>парная структура оформляется как единое сопоставление</td>
          </tr>
          <tr>
            <td>Azt akarom, hogy sokat tanulj, если нужна мягкая просьба.</td>
            <td><button class="speak-btn" data-speak-text="Azt szeretném, hogy sokat tanulj." data-speak-lang="hu-HU">Azt szeretném, hogy sokat tanulj.</button></td>
            <td>akarom звучит значительно более категорично</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Самостоятельный абзац</h4>
        <div class="task">
          Выбери тему: изучение языка, работа, жизнь в городе или путешествия.
          Напиши шесть–восемь предложений:
          позиция автора, два аргумента, пример, противопоставление или уступка,
          условие либо результат и итог.
        </div>

        <div class="note">
          Самопроверка: каждая связка имеет отдельную функцию; нет ненужных повторов;
          запятые стоят на границах частей; текст можно прочитать как один логический абзац.
        </div>
      `,
    },
    {
      id: 8,
      eyebrow: "УРОК 24 · 8/11 · ДИАЛОГ",
      title: "Miért nem jöttél?",
      subtitle: "Причина, цель, уступка, результат и новая договорённость",
      note: 'Диалог начинается с объяснения прошлого решения, а заканчивается новым реальным планом. Не все части поэтому стоят в одном наклонении или времени.',
      warn: 'Не называй mert, hogy и ezért взаимозаменяемыми. Они показывают разные звенья: причину, цель и результат.',
      task: 'Прослушай диалог по ролям, восстанови логическую цепочку и затем разыграй собственную ситуацию.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Диалог</h4>
        <div class="dialogue">
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Miért nem jöttél tegnap a buliba?" data-speak-lang="hu-HU">Miért nem jöttél tegnap a buliba?</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Azért nem mentem el, mert sokat kellett tanulnom, hogy sikerüljön a vizsgám." data-speak-lang="hu-HU">Azért nem mentem el, mert sokat kellett tanulnom, hogy sikerüljön a vizsgám.</button></p>
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Értem. Bár biztosan fáradt voltál, megérte otthon maradni." data-speak-lang="hu-HU">Értem. Bár biztosan fáradt voltál, megérte otthon maradni.</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Igen. Reggel még izgultam, de végül jól sikerült a vizsga, ezért most nagyon boldog vagyok." data-speak-lang="hu-HU">Igen. Reggel még izgultam, de végül jól sikerült a vizsga, ezért most nagyon boldog vagyok.</button></p>
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Gratulálok! Azért hívtalak, hogy gratuláljak." data-speak-lang="hu-HU">Gratulálok! Azért hívtalak, hogy gratuláljak.</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Köszönöm. Ha ráérsz délután, találkozhatnánk egy kávézóban." data-speak-lang="hu-HU">Köszönöm. Ha ráérsz délután, találkozhatnánk egy kávézóban.</button></p>
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Jó ötlet. Délután felhívlak, és megbeszéljük, hol találkozunk." data-speak-lang="hu-HU">Jó ötlet. Délután felhívlak, és megbeszéljük, hol találkozunk.</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Rendben, várom a hívásodat." data-speak-lang="hu-HU">Rendben, várom a hívásodat.</button></p>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Логическая цепочка</h4>
        <table class="conj">
          <tr><th>Звено</th><th>Фрагмент</th><th>Функция</th></tr>
          <tr>
            <td>вопрос о причине</td>
            <td><button class="speak-btn" data-speak-text="Miért nem jöttél?" data-speak-lang="hu-HU">Miért nem jöttél?</button></td>
            <td>запрос объяснения</td>
          </tr>
          <tr>
            <td>выделенная причина</td>
            <td><button class="speak-btn" data-speak-text="Azért nem mentem el, mert sokat kellett tanulnom." data-speak-lang="hu-HU">Azért nem mentem el, mert sokat kellett tanulnom.</button></td>
            <td>решение не идти объясняется необходимостью учиться</td>
          </tr>
          <tr>
            <td>цель</td>
            <td><button class="speak-btn" data-speak-text="hogy sikerüljön a vizsgám" data-speak-lang="hu-HU">hogy sikerüljön a vizsgám</button></td>
            <td>учёба должна привести к успешному экзамену</td>
          </tr>
          <tr>
            <td>уступка</td>
            <td><button class="speak-btn" data-speak-text="Bár biztosan fáradt voltál" data-speak-lang="hu-HU">Bár biztosan fáradt voltál</button></td>
            <td>усталость не отменяет положительную оценку решения</td>
          </tr>
          <tr>
            <td>контраст и итог</td>
            <td><button class="speak-btn" data-speak-text="Reggel még izgultam, de végül jól sikerült a vizsga." data-speak-lang="hu-HU">Reggel még izgultam, de végül jól sikerült a vizsga.</button></td>
            <td>волнение противопоставлено успешному результату</td>
          </tr>
          <tr>
            <td>следствие</td>
            <td><button class="speak-btn" data-speak-text="ezért most nagyon boldog vagyok" data-speak-lang="hu-HU">ezért most nagyon boldog vagyok</button></td>
            <td>успех объясняет нынешнюю радость</td>
          </tr>
          <tr>
            <td>новая цель звонка</td>
            <td><button class="speak-btn" data-speak-text="Azért hívtalak, hogy gratuláljak." data-speak-lang="hu-HU">Azért hívtalak, hogy gratuláljak.</button></td>
            <td>звонок совершается с целью поздравить</td>
          </tr>
          <tr>
            <td>условное предложение</td>
            <td><button class="speak-btn" data-speak-text="Ha ráérsz délután, találkozhatnánk egy kávézóban." data-speak-lang="hu-HU">Ha ráérsz délután, találkozhatnánk egy kávézóban.</button></td>
            <td>реальное условие и мягкое предложение</td>
          </tr>
          <tr>
            <td>реальный следующий шаг</td>
            <td><button class="speak-btn" data-speak-text="Délután felhívlak." data-speak-lang="hu-HU">Délután felhívlak.</button></td>
            <td>конкретное обещание</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Причина, цель и результат</h4>
        <table class="conj">
          <tr><th>Вопрос</th><th>Ответ из диалога</th></tr>
          <tr>
            <td>Почему не пошёл?</td>
            <td><button class="speak-btn" data-speak-text="Mert sokat kellett tanulnom." data-speak-lang="hu-HU">Mert sokat kellett tanulnom.</button></td>
          </tr>
          <tr>
            <td>С какой целью учился?</td>
            <td><button class="speak-btn" data-speak-text="Hogy sikerüljön a vizsgám." data-speak-lang="hu-HU">Hogy sikerüljön a vizsgám.</button></td>
          </tr>
          <tr>
            <td>Каков результат?</td>
            <td><button class="speak-btn" data-speak-text="Jól sikerült a vizsga, ezért nagyon boldog vagyok." data-speak-lang="hu-HU">Jól sikerült a vizsga, ezért nagyon boldog vagyok.</button></td>
          </tr>
        </table>

        <div class="warn">
          Одна и та же ситуация может содержать несколько логических связей,
          но каждое связующее слово отвечает на свой вопрос:
          причина — почему, цель — для чего, результат — что произошло вследствие этого.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Косвенный вопрос в конце диалога</h4>
        <p><button class="speak-btn" data-speak-text="Megbeszéljük, hol találkozunk." data-speak-lang="hu-HU">Megbeszéljük, hol találkozunk.</button></p>
        <div class="note">
          Здесь
          <button class="speak-btn" data-speak-text="hol" data-speak-lang="hu-HU">hol</button>
          вводит содержание обсуждения. Это вопросительное слово, а не союз из списка причин и результатов.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Проверка понимания</h4>
        <ol class="tasklist">
          <li>Почему собеседник не пришёл на вечеринку?</li>
          <li>Какова была цель учёбы?</li>
          <li>Как прошёл экзамен?</li>
          <li>Зачем первый собеседник позвонил?</li>
          <li>Какое условие связано со встречей?</li>
          <li>Какая реплика является реальным обещанием?</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Преобразуй диалог</h4>
        <ol class="tasklist">
          <li>Замени причину: работа, болезнь или семейное дело.</li>
          <li>Добавь новую цель через hogy.</li>
          <li>Добавь уступку через bár.</li>
          <li>Заверши разговор условным предложением и конкретным обещанием.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">RolePlay: пропущенная встреча</h4>
        <div class="task">
          Один человек не пришёл на встречу, занятие или праздник.
          Построй диалог минимум из восьми реплик.
          Используй вопрос о причине, azért…mert, цель с hogy, уступку,
          результат с ezért или így, условие с ha и реальный следующий шаг.
        </div>

        <div class="note">
          Самопроверка: два собеседника говорят естественно; причина не перепутана с результатом;
          форма после hogy соответствует цели; разговор заканчивается новой договорённостью.
        </div>
      `,
    },
    {
      id: 9,
      eyebrow: "УРОК 24 · 9/11 · ИТОГОВАЯ ПРАКТИКА",
      title: "Integrált gyakorlás",
      subtitle: "Связь → граница частей → форма → пунктуация → связный текст",
      activities: L24_ACTIVITIES,
      optionalSpeaking: L24_OPTIONAL_SPEAKING,
      note: 'Не ограничивайся выбором союза. Для каждого ответа объясни, какие части соединены и какое логическое отношение между ними.',
      warn: 'Не добавляй mert и ezért в одну цепочку автоматически. Сначала реши, где причина и где результат; иногда мысль лучше разделить на два предложения.',
      task: 'Выполни шесть этапов, проверь себя по рубрике, затем переходи к встроенным интерактивным заданиям и устной практике.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Этап 1. Определи логическую связь</h4>
        <table class="conj">
          <tr><th>Предложение</th><th>Связь</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Nem jöttem el, mert beteg voltam." data-speak-lang="hu-HU">Nem jöttem el, mert beteg voltam.</button></td>
            <td>причина</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Beteg voltam, ezért otthon maradtam." data-speak-lang="hu-HU">Beteg voltam, ezért otthon maradtam.</button></td>
            <td>результат</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Bár fáradt voltam, elmentem." data-speak-lang="hu-HU">Bár fáradt voltam, elmentem.</button></td>
            <td>уступка</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ha lesz időm, felhívlak." data-speak-lang="hu-HU">Ha lesz időm, felhívlak.</button></td>
            <td>реальное или открытое условие</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Tudom, hogy itt vagy." data-speak-lang="hu-HU">Tudom, hogy itt vagy.</button></td>
            <td>содержание известного факта</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Azt szeretném, hogy maradj itt." data-speak-lang="hu-HU">Azt szeretném, hogy maradj itt.</button></td>
            <td>желаемое действие</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Этап 2. Соедини две мысли</h4>
        <table class="conj">
          <tr><th>Исходные предложения</th><th>Связная модель</th></tr>
          <tr>
            <td>У меня было много дел. Я не пришёл.</td>
            <td><button class="speak-btn" data-speak-text="Nem jöttem el, mert sok dolgom volt." data-speak-lang="hu-HU">Nem jöttem el, mert sok dolgom volt.</button></td>
          </tr>
          <tr>
            <td>Идёт дождь. Мы не выходим.</td>
            <td><button class="speak-btn" data-speak-text="Esik az eső, ezért nem megyünk ki." data-speak-lang="hu-HU">Esik az eső, ezért nem megyünk ki.</button></td>
          </tr>
          <tr>
            <td>Он устал. Он продолжает работать.</td>
            <td><button class="speak-btn" data-speak-text="Bár fáradt, tovább dolgozik." data-speak-lang="hu-HU">Bár fáradt, tovább dolgozik.</button></td>
          </tr>
          <tr>
            <td>Ты свободен. Приходи ко мне.</td>
            <td><button class="speak-btn" data-speak-text="Ha ráérsz, gyere át!" data-speak-lang="hu-HU">Ha ráérsz, gyere át!</button></td>
          </tr>
          <tr>
            <td>Он пришёл. Он хотел помочь.</td>
            <td><button class="speak-btn" data-speak-text="Azért jött, hogy segítsen." data-speak-lang="hu-HU">Azért jött, hogy segítsen.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Этап 3. Поставь запятую по структуре</h4>
        <table class="conj">
          <tr><th>Тип структуры</th><th>Правильная модель</th></tr>
          <tr>
            <td>одна часть, два объекта</td>
            <td><button class="speak-btn" data-speak-text="Kávét és teát kérek." data-speak-lang="hu-HU">Kávét és teát kérek.</button></td>
          </tr>
          <tr>
            <td>две равноправные части</td>
            <td><button class="speak-btn" data-speak-text="Kávét kérek, és Anna teát választ." data-speak-lang="hu-HU">Kávét kérek, és Anna teát választ.</button></td>
          </tr>
          <tr>
            <td>главная и причинная часть</td>
            <td><button class="speak-btn" data-speak-text="Otthon maradok, mert esik az eső." data-speak-lang="hu-HU">Otthon maradok, mert esik az eső.</button></td>
          </tr>
          <tr>
            <td>условная часть перед результатом</td>
            <td><button class="speak-btn" data-speak-text="Ha megérkezel, hívj fel!" data-speak-lang="hu-HU">Ha megérkezel, hívj fel!</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Этап 4. Различи близкие модели</h4>
        <table class="conj">
          <tr><th>Первая модель</th><th>Вторая модель</th><th>Различие</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Azt mondta, hogy Anna holnap jön." data-speak-lang="hu-HU">Azt mondta, hogy Anna holnap jön.</button></td>
            <td><button class="speak-btn" data-speak-text="Azt mondta Annának, hogy holnap jöjjön." data-speak-lang="hu-HU">Azt mondta Annának, hogy holnap jöjjön.</button></td>
            <td>сообщение о будущем действии / переданная инструкция</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Bár drága, megveszem." data-speak-lang="hu-HU">Bár drága, megveszem.</button></td>
            <td><button class="speak-btn" data-speak-text="Ha olcsóbb lesz, megveszem." data-speak-lang="hu-HU">Ha olcsóbb lesz, megveszem.</button></td>
            <td>покупка вопреки цене / покупка зависит от цены</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Nem megyek el, mert fáradt vagyok." data-speak-lang="hu-HU">Nem megyek el, mert fáradt vagyok.</button></td>
            <td><button class="speak-btn" data-speak-text="Fáradt vagyok, ezért nem megyek el." data-speak-lang="hu-HU">Fáradt vagyok, ezért nem megyek el.</button></td>
            <td>результат → причина / причина → результат</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Этап 5. Исправь ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Причина</th></tr>
          <tr>
            <td>Nem jöttem el, ezért beteg voltam.</td>
            <td><button class="speak-btn" data-speak-text="Nem jöttem el, mert beteg voltam." data-speak-lang="hu-HU">Nem jöttem el, mert beteg voltam.</button></td>
            <td>вторая часть объясняет причину</td>
          </tr>
          <tr>
            <td>Azért jöttem, hogy segíteni.</td>
            <td><button class="speak-btn" data-speak-text="Azért jöttem, hogy segítsek." data-speak-lang="hu-HU">Azért jöttem, hogy segítsek.</button></td>
            <td>после hogy нужна личная форма</td>
          </tr>
          <tr>
            <td>Bár esik az eső ezért elindulunk.</td>
            <td><button class="speak-btn" data-speak-text="Bár esik az eső, mégis elindulunk." data-speak-lang="hu-HU">Bár esik az eső, mégis elindulunk.</button></td>
            <td>уступка и запятая между частями</td>
          </tr>
          <tr>
            <td>Kávét, vagy teát kérsz?</td>
            <td><button class="speak-btn" data-speak-text="Kávét vagy teát kérsz?" data-speak-lang="hu-HU">Kávét vagy teát kérsz?</button></td>
            <td>однородные объекты в одной части</td>
          </tr>
          <tr>
            <td>Tudom, hogy itt legyél.</td>
            <td><button class="speak-btn" data-speak-text="Tudom, hogy itt vagy." data-speak-lang="hu-HU">Tudom, hogy itt vagy.</button></td>
            <td>сообщается известный факт</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Этап 6. Связный итоговый абзац</h4>
        <div class="task">
          Напиши семь–девять предложений на тему «Почему я изучаю венгерский».
          Включи позицию автора, причину, цель, один пример, уступку,
          условие или результат и итог.
        </div>

        <p><button class="speak-btn" data-speak-text="Szerintem fontos magyarul tanulnom, mert Magyarországon élek." data-speak-lang="hu-HU">Szerintem fontos magyarul tanulnom, mert Magyarországon élek.</button></p>
        <p><button class="speak-btn" data-speak-text="Azért gyakorlok minden nap, hogy magabiztosabban beszéljek." data-speak-lang="hu-HU">Azért gyakorlok minden nap, hogy magabiztosabban beszéljek.</button></p>
        <p><button class="speak-btn" data-speak-text="Bár néha nehéz, mégis folytatom." data-speak-lang="hu-HU">Bár néha nehéz, mégis folytatom.</button></p>
        <p><button class="speak-btn" data-speak-text="Ha nem értek valamit, segítséget kérek." data-speak-lang="hu-HU">Ha nem értek valamit, segítséget kérek.</button></p>
        <p><button class="speak-btn" data-speak-text="Összességében lassan, de biztosan fejlődöm." data-speak-lang="hu-HU">Összességében lassan, de biztosan fejlődöm.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Рубрика самопроверки</h4>
        <table class="conj">
          <tr><th>Критерий</th><th>Проверка</th></tr>
          <tr><td>структура</td><td>в каждой сложной фразе найдены две части и их сказуемые</td></tr>
          <tr><td>логика</td><td>причина, цель, результат, уступка и условие не перепутаны</td></tr>
          <tr><td>форма</td><td>после hogy выбрана личная форма с нужным значением</td></tr>
          <tr><td>пунктуация</td><td>запятые стоят на границах частей, а не перед каждым союзом автоматически</td></tr>
          <tr><td>связность</td><td>текст имеет позицию, развитие и итог</td></tr>
        </table>

        <div class="note">
          После самопроверки выполни встроенные задания и устную практику.
          Ответ считается усвоенным, если ты можешь объяснить не только форму, но и логическую связь.
        </div>
      `,
    },
    {
      id: 10,
      eyebrow: "УРОК 24 · 10/11 · ПЕРЕХОД К 25–28",
      title: "Előretekintés",
      subtitle: "Грамматическая связь становится инструментом практического общения",
      note: 'После урока 24 ты умеешь строить и анализировать базовые сложные предложения в изученных моделях. Свободность развивается через дальнейшую практику, а не появляется после одного слайда.',
      warn: 'Следующие уроки не являются простыми списками слов. В каждом нужно читать, слушать, говорить и писать, используя уже изученную грамматику.',
      task: 'Пройди карту переноса навыков, выбери одну приоритетную тему и составь личный план подготовки.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Что уже должно быть доступно</h4>
        <table class="conj">
          <tr><th>Навык</th><th>Контрольная модель</th></tr>
          <tr>
            <td>видеть границу частей</td>
            <td><button class="speak-btn" data-speak-text="Kávét kérek, és Anna teát választ." data-speak-lang="hu-HU">Kávét kérek, és Anna teát választ.</button></td>
          </tr>
          <tr>
            <td>объяснять причину и результат</td>
            <td><button class="speak-btn" data-speak-text="Fáradt vagyok, ezért otthon maradok." data-speak-lang="hu-HU">Fáradt vagyok, ezért otthon maradok.</button></td>
          </tr>
          <tr>
            <td>передавать содержание и цель</td>
            <td><button class="speak-btn" data-speak-text="Azért jöttem, hogy segítsek." data-speak-lang="hu-HU">Azért jöttem, hogy segítsek.</button></td>
          </tr>
          <tr>
            <td>различать уступку и условие</td>
            <td><button class="speak-btn" data-speak-text="Bár nehéz, folytatom. Ha lesz időm, gyakorlok." data-speak-lang="hu-HU">Bár nehéz, folytatom. Ha lesz időm, gyakorlok.</button></td>
          </tr>
          <tr>
            <td>строить связный абзац</td>
            <td><button class="speak-btn" data-speak-text="Szerintem hasznos, mert a mindennapi életben is segít." data-speak-lang="hu-HU">Szerintem hasznos, mert a mindennapi életben is segít.</button></td>
          </tr>
        </table>

        <div class="note">
          Это базовая рабочая компетенция, а не завершение всей темы сложного синтаксиса.
          Более редкие союзы, стилистика и сложные многоуровневые структуры требуют дальнейшей практики.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Урок 25 · Работа и собеседование</h4>
        <table class="conj">
          <tr><th>Практическая задача</th><th>Языковая модель</th><th>Что переносим из урока 24</th></tr>
          <tr>
            <td>описать опыт и обязанности</td>
            <td><button class="speak-btn" data-speak-text="Két évig egy szállodában dolgoztam." data-speak-lang="hu-HU">Két évig egy szállodában dolgoztam.</button></td>
            <td>связный рассказ о прошлом</td>
          </tr>
          <tr>
            <td>объяснить мотивацию</td>
            <td><button class="speak-btn" data-speak-text="Azért szeretnék itt dolgozni, mert érdekel az ügyfélszolgálat." data-speak-lang="hu-HU">Azért szeretnék itt dolgozni, mert érdekel az ügyfélszolgálat.</button></td>
            <td>причина и парная конструкция</td>
          </tr>
          <tr>
            <td>ответить на ситуационный вопрос</td>
            <td><button class="speak-btn" data-speak-text="Ha egy ügyfél mérges lenne, nyugodtan meghallgatnám." data-speak-lang="hu-HU">Ha egy ügyfél mérges lenne, nyugodtan meghallgatnám.</button></td>
            <td>гипотетическое условие</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Урок 26 · Здоровье, врач и аптека</h4>
        <table class="conj">
          <tr><th>Практическая задача</th><th>Языковая модель</th><th>Что переносим</th></tr>
          <tr>
            <td>описать симптом</td>
            <td><button class="speak-btn" data-speak-text="Tegnap óta fáj a torkom." data-speak-lang="hu-HU">Tegnap óta fáj a torkom.</button></td>
            <td>точное сообщение о состоянии и времени</td>
          </tr>
          <tr>
            <td>понять рекомендацию</td>
            <td><button class="speak-btn" data-speak-text="Maradjon otthon, és igyon sok folyadékot." data-speak-lang="hu-HU">Maradjon otthon, és igyon sok folyadékot.</button></td>
            <td>сочинение и побуждение</td>
          </tr>
          <tr>
            <td>условие для обращения за помощью</td>
            <td><button class="speak-btn" data-speak-text="Ha a tünetek nem javulnak, kérjen orvosi segítséget." data-speak-lang="hu-HU">Ha a tünetek nem javulnak, kérjen orvosi segítséget.</button></td>
            <td>реальное условие и инструкция</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Урок 27 · Поездка, транспорт и отель</h4>
        <table class="conj">
          <tr><th>Практическая задача</th><th>Языковая модель</th><th>Что переносим</th></tr>
          <tr>
            <td>уточнить отправление</td>
            <td><button class="speak-btn" data-speak-text="Melyik vágányról indul a vonat?" data-speak-lang="hu-HU">Melyik vágányról indul a vonat?</button></td>
            <td>вопросительная структура</td>
          </tr>
          <tr>
            <td>объяснить проблему</td>
            <td><button class="speak-btn" data-speak-text="Lekéstem a csatlakozást, mert késett a vonat." data-speak-lang="hu-HU">Lekéstem a csatlakozást, mert késett a vonat.</button></td>
            <td>причина</td>
          </tr>
          <tr>
            <td>проверить бронирование</td>
            <td><button class="speak-btn" data-speak-text="Van egy foglalásom Kovács névre." data-speak-lang="hu-HU">Van egy foglalásom Kovács névre.</button></td>
            <td>практический диалог и вежливая просьба</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Урок 28 · Интегрированное повторение</h4>
        <table class="conj">
          <tr><th>Практическая задача</th><th>Языковая модель</th><th>Что проверяется</th></tr>
          <tr>
            <td>связать прошлое, настоящее и план</td>
            <td><button class="speak-btn" data-speak-text="Két éve kezdtem magyarul tanulni, és most már sok mindent megértek." data-speak-lang="hu-HU">Két éve kezdtem magyarul tanulni, és most már sok mindent megértek.</button></td>
            <td>времена и связь мыслей</td>
          </tr>
          <tr>
            <td>объяснить учебную цель</td>
            <td><button class="speak-btn" data-speak-text="Azért gyakorlok, mert folyékonyabban szeretnék beszélni." data-speak-lang="hu-HU">Azért gyakorlok, mert folyékonyabban szeretnék beszélni.</button></td>
            <td>причина и желание</td>
          </tr>
          <tr>
            <td>сформулировать будущий план</td>
            <td><button class="speak-btn" data-speak-text="Ha több időm lesz, hetente kétszer beszélgetek majd magyarul." data-speak-lang="hu-HU">Ha több időm lesz, hetente kétszer beszélgetek majd magyarul.</button></td>
            <td>реальное будущее условие</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Карта переноса навыков</h4>
        <table class="conj">
          <tr><th>Из урока 24</th><th>Где понадобится</th></tr>
          <tr><td>причина и результат</td><td>мотивация на собеседовании, симптомы и последствия, транспортная проблема</td></tr>
          <tr><td>содержание и цель с hogy</td><td>обязанности, рекомендации, просьбы и планы</td></tr>
          <tr><td>условие</td><td>ситуационный вопрос, обращение к врачу, изменение поездки, будущий план</td></tr>
          <tr><td>связный абзац</td><td>письмо работодателю и итоговый текст</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Проверка готовности</h4>
        <ol class="tasklist">
          <li>Объясни причину своего интереса к работе.</li>
          <li>Сформулируй реальное условие, при котором нужно обратиться к врачу.</li>
          <li>Объясни причину транспортной проблемы.</li>
          <li>Соедини прошлый опыт, нынешнее состояние и будущий план.</li>
          <li>Выбери тему, где тебе требуется больше словарной практики.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Личный план</h4>
        <div class="task">
          Выбери одну тему: работа, здоровье или путешествие.
          Запиши пять слов, три готовые реплики и одно сложное предложение,
          которое потребуется тебе в реальной ситуации.
        </div>

        <div class="note">
          Граница 24.10: урок 24 завершает базовый блок о связях между частями предложения.
          Уроки 25–28 переносят эти связи в практическое общение и интегрированное повторение.
        </div>
      `,
    },
    {
      id: 11,
      eyebrow: "УРОК 24 · 11/11 · ИТОГ",
      title: "Összefoglalás",
      subtitle: "Алгоритм построения сложной мысли и итоговая самопроверка",
      note: 'Сначала определи смысловую связь и границы частей. Только после этого выбирай союз, форму глагола, порядок слов и запятую.',
      warn: 'Не учи формулы механически: один русский перевод может соответствовать разным венгерским конструкциям, а один союз может выполнять несколько функций.',
      task: 'Пройди алгоритм, объясни контрольные пары своими словами и напиши итоговый текст по рубрике.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Алгоритм из пяти шагов</h4>
        <table class="conj">
          <tr><th>Шаг</th><th>Вопрос к себе</th><th>Что проверить</th></tr>
          <tr><td>1</td><td>Сколько предикативных частей?</td><td>найди сказуемое или именную основу каждой части</td></tr>
          <tr><td>2</td><td>Какая логическая связь?</td><td>добавление, противопоставление, выбор, причина, результат, содержание, цель, уступка или условие</td></tr>
          <tr><td>3</td><td>Какая форма глагола нужна?</td><td>факт, желаемое действие, просьба, цель, реальное или гипотетическое условие</td></tr>
          <tr><td>4</td><td>Что стоит перед глаголом?</td><td>отрицание, фокус, вопросительное слово или нейтральная позиция приставки</td></tr>
          <tr><td>5</td><td>Где граница частей?</td><td>поставь запятую между частями, но не перед союзом автоматически</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Сочинение: равноправные части</h4>
        <table class="conj">
          <tr><th>Связь</th><th>Основные средства</th><th>Контрольный пример</th></tr>
          <tr>
            <td>добавление</td>
            <td><button class="speak-btn" data-speak-text="és, s, meg" data-speak-lang="hu-HU">és, s, meg</button></td>
            <td><button class="speak-btn" data-speak-text="Péter dolgozik, és Anna tanul." data-speak-lang="hu-HU">Péter dolgozik, és Anna tanul.</button></td>
          </tr>
          <tr>
            <td>противопоставление или сопоставление</td>
            <td><button class="speak-btn" data-speak-text="de, viszont, pedig, hanem" data-speak-lang="hu-HU">de, viszont, pedig, hanem</button></td>
            <td><button class="speak-btn" data-speak-text="Szeretnék menni, de nincs időm." data-speak-lang="hu-HU">Szeretnék menni, de nincs időm.</button></td>
          </tr>
          <tr>
            <td>выбор</td>
            <td><button class="speak-btn" data-speak-text="vagy" data-speak-lang="hu-HU">vagy</button></td>
            <td><button class="speak-btn" data-speak-text="Kávét kérsz, vagy inkább teát választasz?" data-speak-lang="hu-HU">Kávét kérsz, vagy inkább teát választasz?</button></td>
          </tr>
          <tr>
            <td>результат или вывод</td>
            <td><button class="speak-btn" data-speak-text="ezért, így, tehát" data-speak-lang="hu-HU">ezért, így, tehát</button></td>
            <td><button class="speak-btn" data-speak-text="Esik az eső, ezért otthon maradunk." data-speak-lang="hu-HU">Esik az eső, ezért otthon maradunk.</button></td>
          </tr>
        </table>

        <div class="note">
          Сравни:
          <button class="speak-btn" data-speak-text="Kávét és teát kérek." data-speak-lang="hu-HU">Kávét és teát kérek.</button>
          — одна часть и два объекта, запятой нет;
          <button class="speak-btn" data-speak-text="Kávét kérek, és Anna teát választ." data-speak-lang="hu-HU">Kávét kérek, és Anna teát választ.</button>
          — две части, поэтому нужна запятая.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Подчинение: функция придаточной части</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Средство</th><th>Контрольный пример</th></tr>
          <tr>
            <td>причина</td>
            <td><button class="speak-btn" data-speak-text="mert" data-speak-lang="hu-HU">mert</button></td>
            <td><button class="speak-btn" data-speak-text="Nem megyek el, mert fáradt vagyok." data-speak-lang="hu-HU">Nem megyek el, mert fáradt vagyok.</button></td>
          </tr>
          <tr>
            <td>содержание факта или сообщения</td>
            <td><button class="speak-btn" data-speak-text="hogy" data-speak-lang="hu-HU">hogy</button></td>
            <td><button class="speak-btn" data-speak-text="Tudom, hogy itt vagy." data-speak-lang="hu-HU">Tudom, hogy itt vagy.</button></td>
          </tr>
          <tr>
            <td>желаемое или требуемое действие</td>
            <td><button class="speak-btn" data-speak-text="hogy" data-speak-lang="hu-HU">hogy</button> + личная форма</td>
            <td><button class="speak-btn" data-speak-text="Azt szeretném, hogy maradj itt." data-speak-lang="hu-HU">Azt szeretném, hogy maradj itt.</button></td>
          </tr>
          <tr>
            <td>цель</td>
            <td><button class="speak-btn" data-speak-text="azért, hogy" data-speak-lang="hu-HU">azért, hogy</button></td>
            <td><button class="speak-btn" data-speak-text="Azért jöttem, hogy segítsek." data-speak-lang="hu-HU">Azért jöttem, hogy segítsek.</button></td>
          </tr>
          <tr>
            <td>уступка</td>
            <td><button class="speak-btn" data-speak-text="bár, habár" data-speak-lang="hu-HU">bár, habár</button></td>
            <td><button class="speak-btn" data-speak-text="Bár fáradt vagyok, mégis folytatom." data-speak-lang="hu-HU">Bár fáradt vagyok, mégis folytatom.</button></td>
          </tr>
          <tr>
            <td>реальное или открытое условие</td>
            <td><button class="speak-btn" data-speak-text="ha" data-speak-lang="hu-HU">ha</button></td>
            <td><button class="speak-btn" data-speak-text="Ha lesz időm, felhívlak." data-speak-lang="hu-HU">Ha lesz időm, felhívlak.</button></td>
          </tr>
          <tr>
            <td>гипотетическое условие</td>
            <td><button class="speak-btn" data-speak-text="ha" data-speak-lang="hu-HU">ha</button> + условные формы</td>
            <td><button class="speak-btn" data-speak-text="Ha több időm lenne, többet olvasnék." data-speak-lang="hu-HU">Ha több időm lenne, többet olvasnék.</button></td>
          </tr>
        </table>

        <div class="warn">
          Неверная формула: «после
          <button class="speak-btn" data-speak-text="hogy" data-speak-lang="hu-HU">hogy</button>
          всегда одна и та же форма».
          Сначала определи функцию главной части:
          сообщение о факте, желание, просьба, необходимость или цель.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Причина и результат: направление мысли</h4>
        <table class="conj">
          <tr><th>Результат → причина</th><th>Причина → результат</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Nem megyek el, mert fáradt vagyok." data-speak-lang="hu-HU">Nem megyek el, mert fáradt vagyok.</button></td>
            <td><button class="speak-btn" data-speak-text="Fáradt vagyok, ezért nem megyek el." data-speak-lang="hu-HU">Fáradt vagyok, ezért nem megyek el.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Lekéstük a vonatot, mert későn indultunk." data-speak-lang="hu-HU">Lekéstük a vonatot, mert későn indultunk.</button></td>
            <td><button class="speak-btn" data-speak-text="Későn indultunk, ezért lekéstük a vonatot." data-speak-lang="hu-HU">Későn indultunk, ezért lekéstük a vonatot.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Приставка зависит от внутренней структуры</h4>
        <table class="conj">
          <tr><th>Контекст</th><th>Пример</th></tr>
          <tr>
            <td>нейтральное утверждение</td>
            <td><button class="speak-btn" data-speak-text="Azt mondta, hogy eljön." data-speak-lang="hu-HU">Azt mondta, hogy eljön.</button></td>
          </tr>
          <tr>
            <td>отрицание</td>
            <td><button class="speak-btn" data-speak-text="Azt mondta, hogy nem jön el." data-speak-lang="hu-HU">Azt mondta, hogy nem jön el.</button></td>
          </tr>
          <tr>
            <td>косвенный вопрос</td>
            <td><button class="speak-btn" data-speak-text="Nem tudom, mikor jön el." data-speak-lang="hu-HU">Nem tudom, mikor jön el.</button></td>
          </tr>
          <tr>
            <td>переданная просьба</td>
            <td><button class="speak-btn" data-speak-text="Arra kérem, hogy jöjjön el." data-speak-lang="hu-HU">Arra kérem, hogy jöjjön el.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Связный текст: функция каждого перехода</h4>
        <p>
          <button class="speak-btn" data-speak-text="Szerintem érdemes minden nap gyakorolni." data-speak-lang="hu-HU">Szerintem érdemes minden nap gyakorolni.</button>
        </p>
        <p>
          <button class="speak-btn" data-speak-text="Egyrészt könnyebben intézem az ügyeimet, másrészt jobban megértem az embereket." data-speak-lang="hu-HU">Egyrészt könnyebben intézem az ügyeimet, másrészt jobban megértem az embereket.</button>
        </p>
        <p>
          <button class="speak-btn" data-speak-text="Bár a nyelvtan néha nehéz, mégis rendszeresen gyakorlok." data-speak-lang="hu-HU">Bár a nyelvtan néha nehéz, mégis rendszeresen gyakorlok.</button>
        </p>
        <p>
          <button class="speak-btn" data-speak-text="Ha nem értek valamit, segítséget kérek." data-speak-lang="hu-HU">Ha nem értek valamit, segítséget kérek.</button>
        </p>
        <p>
          <button class="speak-btn" data-speak-text="Összességében lassan, de biztosan fejlődöm." data-speak-lang="hu-HU">Összességében lassan, de biztosan fejlődöm.</button>
        </p>

        <div class="note">
          Выражения
          <button class="speak-btn" data-speak-text="szerintem, egyrészt, másrészt, például, végül, összességében" data-speak-lang="hu-HU">szerintem, egyrészt, másrészt, például, végül, összességében</button>
          организуют текст, но не все являются союзами.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки финальной проверки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Nem jöttem el, ezért beteg voltam.</td>
            <td><button class="speak-btn" data-speak-text="Nem jöttem el, mert beteg voltam." data-speak-lang="hu-HU">Nem jöttem el, mert beteg voltam.</button></td>
          </tr>
          <tr>
            <td>Azért jöttem, hogy segíteni.</td>
            <td><button class="speak-btn" data-speak-text="Azért jöttem, hogy segítsek." data-speak-lang="hu-HU">Azért jöttem, hogy segítsek.</button></td>
          </tr>
          <tr>
            <td>Tudom, hogy itt legyél.</td>
            <td><button class="speak-btn" data-speak-text="Tudom, hogy itt vagy." data-speak-lang="hu-HU">Tudom, hogy itt vagy.</button></td>
          </tr>
          <tr>
            <td>Kávét, vagy teát kérsz?</td>
            <td><button class="speak-btn" data-speak-text="Kávét vagy teát kérsz?" data-speak-lang="hu-HU">Kávét vagy teát kérsz?</button></td>
          </tr>
          <tr>
            <td>Ha lenne időm, többet olvasok.</td>
            <td><button class="speak-btn" data-speak-text="Ha lenne időm, többet olvasnék." data-speak-lang="hu-HU">Ha lenne időm, többet olvasnék.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Can-Do: урок усвоен, если ты можешь</h4>
        <ul class="tick">
          <li>найти части сложного предложения и их сказуемые;</li>
          <li>объяснить разницу между причиной, результатом, целью, уступкой и условием;</li>
          <li>выбрать форму после hogy по функции конструкции;</li>
          <li>различить реальное и гипотетическое условие с ha;</li>
          <li>объяснить положение глагольной приставки;</li>
          <li>поставить запятую по границе частей;</li>
          <li>построить связный абзац с позицией, аргументом, примером и итогом.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Домашнее задание</h4>
        <div class="task">
          Напиши восемь–десять предложений на одну тему:
          изучение венгерского, работа, жизнь в Будапеште или путешествие.
          Используй минимум пять разных функций:
          причину, результат, содержание или цель, уступку, условие,
          а также один текстовый переход и итог.
        </div>

        <table class="conj">
          <tr><th>Рубрика</th><th>Требование</th></tr>
          <tr><td>логика</td><td>каждая связка соответствует смыслу</td></tr>
          <tr><td>форма</td><td>личные формы после hogy и условные формы выбраны осознанно</td></tr>
          <tr><td>пунктуация</td><td>границы частей отмечены запятыми</td></tr>
          <tr><td>связность</td><td>есть начало, развитие и вывод</td></tr>
          <tr><td>самопроверка</td><td>подчеркни сказуемые и подпиши функцию каждой связки</td></tr>
        </table>

        <div class="note">
          Граница урока 24: освоены основные модели связи на уровне B1.
          Более редкие типы придаточных, стилистические варианты и многоуровневые конструкции требуют дальнейшего изучения.
        </div>
      `,
    }
  ],
  vocabulary: [
    { id: "l24_v1", hu: "ezért", ru: "поэтому", category: "Союзы", exampleSentence: "Esik az eső, ezért nem megyünk.",
        ipa: "[ˈɛzɛːrt]"
    },
    { id: "l24_v2", hu: "mert", ru: "потому что", category: "Союзы", exampleSentence: "Azért jöttem, mert szeretem.",
        ipa: "[mˈɛrt]"
    },
    { id: "l24_v3", hu: "hogy", ru: "что / чтобы", category: "Союзы", exampleSentence: "Tudom, hogy itt vagy.",
        ipa: "[hˈoɟ]"
    },
    { id: "l24_v4", hu: "bár", ru: "хотя", category: "Союзы", exampleSentence: "Elmegyek, bár fáradt vagyok.",
        ipa: "[bɒːr]"
    }
  ],
    quiz: [
    {
      id: 2401,
      question: 'Какая форма наклонения глагола требуется после союза "hogy" в значении «чтобы»?',
      options: [
        'Повелительное наклонение (felszólító mód)',
        'Изъявительное настоящее',
        'Прошедшее время',
        'Условное наклонение'
      ],
      correctIndex: 0,
      explanation: 'В конструкциях цели с "hogy" смысл «чтобы» реализуется повелительным наклонением: "Azért jöttem, hogy segítsek." (Я пришёл, чтобы помочь). "Segítsek" – это повелительное наклонение 1-го лица.'
    },
    {
      id: 2402,
      question: 'Как переводится союз "mert" в венгерском языке?',
      options: ['поэтому', 'потому что', 'хотя', 'если'],
      correctIndex: 1,
      explanation: '"Mert" – это причинный союз, переводится как «потому что» или «так как»: "Nem jöttem, mert beteg voltam." (Я не пришёл, потому что болел).'
    },
    {
      id: 2403,
      question: 'Когда перед союзом "és" в венгерском языке ставится запятая?',
      options: [
        'Когда "és" соединяет части сложного предложения',
        'Когда "és" соединяет однородные члены',
        'Перед "és" запятая никогда не ставится',
        'Перед "és" запятая ставится всегда'
      ],
      correctIndex: 0,
      explanation: 'Запятая ставится на границе частей сложного предложения. Между однородными членами, соединёнными "és", запятая обычно не нужна (урок 24, слайд 1).'
    },
    {
      id: 2404,
      question: 'Какое слово означает «хотя» в венгерском языке?',
      options: ['mert', 'ezért', 'bár', 'ha'],
      correctIndex: 2,
      explanation: '"Bár" (или "habár") переводится как «хотя» / «несмотря на то что»: "Elmentem, bár fáradt voltam." (Я пошёл, хотя был уставшим).'
    },
    {
      id: 2405,
      question: 'В чём разница между "ezért" и "mert" в венгерском языке?',
      options: [
        'ezért – причина, mert – следствие',
        'ezért – следствие (поэтому), mert – причина (потому что)',
        'Разницы нет, это синонимы',
        'ezért – только в начале предложения, mert – в середине'
      ],
      correctIndex: 1,
      explanation: '"Ezért" означает «поэтому» и указывает на следствие: "Esik az eső, ezért itthon maradunk." (Идёт дождь, поэтому мы остаёмся дома). "Mert" – «потому что» и указывает на причину: "Nem jöttem, mert beteg voltam." (Я не пришёл, потому что болел).'
    },
    {
      id: 2406,
      question: 'В каком из этих предложений "hogy" переводится как «чтобы» (а не «что»)?',
      options: [
        'Tudom, hogy itt vagy. (Я знаю, что ты здесь)',
        'Azt mondta, hogy holnap jön. (Он сказал, что придёт завтра)',
        'Azért jöttem, hogy segítsek. (Я пришёл, чтобы помочь)',
        'Látom, hogy dolgozol. (Я вижу, что ты работаешь)'
      ],
      correctIndex: 2,
      explanation: '"Hogy" + повелительное наклонение = «чтобы»: "Azért jöttem, hogy segítsek." (Я пришёл, чтобы помочь). Во всех остальных примерах "hogy" + изъявительное наклонение = «что».'
    }
  ],
  objectives: [
    { id: 'l24_use-conjunctions', text: 'Использовать союзы és, de, mert, hogy, bár, ha для соединения предложений.', skills: ['grammar', 'writing'] },
    { id: 'l24_build-complex-sentences', text: 'Строить сложносочинённые и сложноподчинённые предложения.', skills: ['grammar', 'writing', 'speaking'] },
    { id: 'l24_express-cause', text: 'Выражать причину с помощью союза mert.', skills: ['grammar', 'speaking', 'writing'] },
    { id: 'l24_express-contrast', text: 'Выражать противопоставление с de и уступку с bár.', skills: ['grammar', 'speaking', 'writing'] },
    { id: 'l24_connect-ideas', text: 'Связывать мысли в устном рассказе с помощью союзов.', skills: ['speaking', 'writing'] },
  ],
};
