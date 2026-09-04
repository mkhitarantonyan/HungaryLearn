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
      subtitle: "Связываем мысли в единую речь",
      body: `
   <p>Чтобы говорить красиво на уровне B1, мало простых предложений — нужно уметь связывать их в логические цепочки: «я не пришёл, <b>потому что</b> болел», «он сказал, <b>что</b> приедет», «мы пошли, <b>хотя</b> шёл дождь». В этом уроке разберём главные союзы и правила их употребления.</p>
   <div class="note">Запятая в венгерском определяется прежде всего границами частей предложения, а не самим словом-союзом. В сложном предложении граница между частями обычно обозначается запятой. Но перед <b>és</b> и другими союзами между однородными членами запятая не ставится.</div>
   <div class="note"><b>Can-Do:</b> строить высказывание по цепочке: позиция → причина → пример → контраргумент → условие → вывод.</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 24 · 2/11 · СОЧИНИТЕЛЬНЫЕ СОЮЗЫ",
      title: "Mellérendelő kötőszavak",
      subtitle: "Союзы, связывающие равноправные части",
      body: `
   <table class="conj">
     <tr><th>Союз</th><th>Значение</th><th>Пример</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="és / s" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> és / s</button></td><td>и / а</td><td><button class="speak-btn" data-speak-text="Péter tanul, én pedig olvasok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Péter tanul, én pedig olvasok.</button></td></tr>
     <tr><td><button class="speak-btn" data-speak-text="de" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> de</button></td><td>но / однако</td><td><button class="speak-btn" data-speak-text="Szeretnék menni, de nincs időm." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretnék menni, de nincs időm.</button></td></tr>
     <tr><td><button class="speak-btn" data-speak-text="vagy" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vagy</button></td><td>или</td><td><button class="speak-btn" data-speak-text="Kávét kérsz, vagy teát?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Kávét kérsz, vagy teát?</button></td></tr>
     <tr><td><button class="speak-btn" data-speak-text="ezért" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ezért</button></td><td>поэтому</td><td><button class="speak-btn" data-speak-text="Esik az eső, ezért itthon maradunk." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Esik az eső, ezért itthon maradunk.</button></td></tr>
     <tr><td><button class="speak-btn" data-speak-text="így" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> így</button></td><td>так что / таким образом</td><td><button class="speak-btn" data-speak-text="Kész vagyok, így elmehetek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Kész vagyok, így elmehetek.</button></td></tr>
   </table>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 24 · 3/11 · МЕРТ",
      title: "Alárendelő kötőszavak: mert",
      subtitle: "Причинный союз mert — «потому что»",
      body: `
   <p><span class="hu-word">mert</span> вводит причину действия («потому что» / «так как»):</p>
   <p><button class="speak-btn" data-speak-text="Nem jöttem, mert beteg voltam." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem jöttem, mert beteg voltam.</button> <span style="color:#8a7a68">(Я не пришёл, потому что был болен)</span></p>
   <p><button class="speak-btn" data-speak-text="Azért tanulok magyarul, mert Budapesten élek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Azért tanulok magyarul, mert Budapesten élek.</button> <span style="color:#8a7a68">(Я учу венгерский, потому что живу в Будапеште)</span></p>
   <div class="note">Парная конструкция <span class="hu-word">azért..., mert...</span> («потому..., что...») делает акцент на причине ещё более упругим и четким.</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 24 · 4/11 · ХОДЬ",
      title: "Alárendelő kötőszavak: hogy",
      subtitle: "Изъяснительный и целевой союз hogy — «что» / «чтобы»",
      body: `
   <p><span class="hu-word">hogy</span> имеет два основных значения в зависимости от контекста и наклонения глагола:</p>
   <p><b>1. «что» (с изъявительным наклонением)</b> — передаёт мысли, слова, факты:</p>
   <p><button class="speak-btn" data-speak-text="Tudom, hogy itt vagy." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tudom, hogy itt vagy.</button> <span style="color:#8a7a68">(Знаю, что ты здесь)</span></p>
   <p><button class="speak-btn" data-speak-text="Azt mondta, hogy holnap jön." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Azt mondta, hogy holnap jön.</button> <span style="color:#8a7a68">(Он сказал, что придёт завтра)</span></p>
   <p><b>2. «чтобы» (с повелительным наклонением из 22-го урока!)</b> — передаёт цель или приказ:</p>
   <p><button class="speak-btn" data-speak-text="Azért jöttem, hogy segítsek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Azért jöttem, hogy segítsek.</button> <span style="color:#8a7a68">(Я пришёл [для того], чтобы помочь — segítsek = повелительное наклонение 1-го лица!)</span></p>
   <div class="warn"><b>Критическое правило:</b> В значении «чтобы» глагол в придаточном предложении ОБЯЗАТЕЛЬНО ставится в повелительное наклонение (felszólító mód)! Инфинитив, как в русском «чтобы помочь», тут использовать нельзя.</div>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 24 · 5/11 · БАР И ХА",
      title: "Alárendelő kötőszavak: bár / ha",
      subtitle: "Уступительный bár («хотя») и условный ha («если»)",
      body: `
   <p><span class="hu-word">bár / habár</span> — «хотя / несмотря на то что»:</p>
   <p><button class="speak-btn" data-speak-text="Elmentem, bár fáradt voltam." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Elmentem, bár fáradt voltam.</button> <span style="color:#8a7a68">(Я пошёл, хотя был уставшим)</span></p>
   <p><span class="hu-word">ha</span> — «если» (реальное или гипотетическое условие):</p>
   <p><button class="speak-btn" data-speak-text="Ha ráérsz, gyere át!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Ha ráérsz, gyere át!</button> <span style="color:#8a7a68">(Если свободен, приходи ко мне!)</span></p>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 24 · 6/11 · ПОРЯДОК СЛОВ",
      title: "Szórend összetett mondatokban",
      subtitle: "Как ведут себя глагольные приставки в придаточных",
      body: `
   <p>Само придаточное предложение не заставляет глагольную приставку отделяться. Внутри него действуют обычные правила фокуса, вопроса и отрицания; сравните со знакомыми приставочными глаголами из 14-го урока:</p>
   <p><button class="speak-btn" data-speak-text="Tudom, hol van a bolt." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tudom, hol van a bolt.</button></p>
   <p><button class="speak-btn" data-speak-text="Azt mondta, hogy nem jön el." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Azt mondta, hogy nem jön el.</button> <span style="color:#8a7a68">(nem оторвало el от jön)</span></p>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 24 · 7/11 · ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "Тренировка союзов",
      body: `
   <p><button class="speak-btn" data-speak-text="Nem mentem dolgozni, mert beteg voltam, ezért itthon maradtam." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem mentem dolgozni, mert beteg voltam, ezért itthon maradtam.</button> <span style="color:#8a7a68">(Я не пошёл работать, потому что был болен, поэтому остался дома)</span></p>
   <p><button class="speak-btn" data-speak-text="Azt akarom, hogy sokat tanulj." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Azt akarom, hogy sokat tanulj.</button> <span style="color:#8a7a68">(Я хочу, чтобы ты много учился — hogy + повелительное tanulj!)</span></p>
   <div class="note"><b>Функциональные связки:</b> Szerintem… · Úgy gondolom, hogy… · Azért gondolom így, mert… · Egyrészt… · Másrészt… · Például… · Ezért… · Viszont… · Bár… · Ennek ellenére… · Ha… · Végül… · Összességében…</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 24 · 8/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Объяснение причин",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Miért nem jöttél tegnap a buliba?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Miért nem jöttél tegnap a buliba?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Azért nem mentem, mert sokat kellett tanulnom, hogy átmenjek a vizsgán." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Azért nem mentem, mert sokat kellett tanulnom, hogy átmenjek a vizsgán.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Értem. És sikerült a vizsga?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Értem. És sikerült a vizsga?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Igen, sikerült, így most nagyon boldog vagyok!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Igen, sikerült, így most nagyon boldog vagyok!</button></p>
   <div class="task">Задание 1. Найдите все союзы в диалоге (mert, hogy, így) и объясните роль каждого.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 24 · 9/11 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      activities: L24_ACTIVITIES,
      optionalSpeaking: L24_OPTIONAL_SPEAKING,
      body: `
   <ol class="tasklist">
     <li>Соедините два предложения с помощью mert: „Nem jöttem“ + „Sok dolgom volt“</li>
     <li>Соедините с помощью ezért: „Esik az eső“ + „Nem megyünk ki“</li>
     <li>Переведите: «Он пришёл, чтобы помочь» (помните про hogy + повелительное наклонение!)</li>
     <li>Переведите: «Я знаю, что ты здесь»</li>
     <li>Составьте сложное предложение с 2 союзами (например, mert и ezért)</li>
   </ol>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 24 · 10/11 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Что дальше",
      body: `
   <p>Теперь вы умеете свободно строить сложные предложения. В следующих 4 уроках (25-28) мы перейдём к лексическому обогащению речи уровня B1: работа и карьера (25-й), здоровье и врач (26-й), путешествия и транспорт (27-й) и итоговое повторение всей грамматики (28-й).</p>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 24 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 24-го урока",
      body: `
   <ul class="tick">
     <li>Запятая обычно разделяет части сложного предложения; союз между однородными членами сам по себе не требует запятой</li>
     <li>Сочинительные: és, de, vagy, ezért (поэтому), így (так что)</li>
     <li>mert — «потому что» (причина)</li>
     <li>hogy + изъявительное = «что», hogy + повелительное = «чтобы»</li>
     <li>bár = «хотя», ha = «если»</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Напишите мини-рассказ из 6 сложных предложений с союзами mert, hogy, de, ezért, bár, ha.</div>
 `
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
