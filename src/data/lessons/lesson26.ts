import { Lesson } from '../../types';
import { createMigrationActivities } from './migrationActivityFactory';

const L26_ACTIVITIES = createMigrationActivities({
  lessonId: 26,
  activitySequence: 'communication',
  controlledTitle: 'Симптомы, боль и советы врача',
  controlledPassCount: 10,
  controlledExercises: [
    { kind: 'singleChoice', id: 'l26-cp-1', prompt: 'A · Сообщи о боли в горле.', options: ['Fáj a torkom.', 'Fáj a torok én.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l26-cp-2', prompt: 'A · Сообщи о температуре.', options: ['Lázam van.', 'Láz vagyok.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l26-cp-3', prompt: 'A · Сообщи о кашле и головокружении.', options: ['Köhögök és szédülök.', 'Köhögés és szédülés vagyok.'], correctIndex: 0 },
    { kind: 'fillGap', id: 'l26-cp-4', prompt: 'B · ___ óta fáj a torkom. (со вчерашнего дня)', accept: ['Tegnap', 'tegnap'] },
    { kind: 'fillGap', id: 'l26-cp-5', prompt: 'B · Három napja ___. (кашляю)', accept: ['köhögök', 'Köhögök'] },
    { kind: 'singleChoice', id: 'l26-cp-6', prompt: 'C · Врач спрашивает о силе боли.', options: ['Mennyire erős a fájdalom?', 'Mennyi fájdalom erős?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l26-cp-7', prompt: 'C · Врач спрашивает о других лекарствах.', options: ['Szed valamilyen gyógyszert?', 'Gyógyszer valamilyen van?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l26-cp-8', prompt: 'D · Попроси рекомендацию без требования диагноза.', options: ['Mit javasol?', 'Mi a diagnózis biztosan?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l26-cp-9', prompt: 'D · Сообщи об изменении состояния.', options: ['Ma egy kicsit jobban vagyok.', 'Ma jobban van én.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l26-cp-10', prompt: 'E · В аптеке попроси средство от боли в горле.', options: ['Szeretnék valamit kérni torokfájás ellen.', 'Szeretnék jegyet a torokhoz.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l26-cp-11', prompt: 'E · Уточни частоту применения.', options: ['Hányszor kell bevennem?', 'Hányszor gyógyszer van?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l26-cp-12', prompt: 'E · Уточни связь с приёмом пищи.', options: ['Étkezés előtt vagy után?', 'Étkezés hol vagy mikor?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l26-cp-13', prompt: 'F · Вежливо попроси повторить.', options: ['Kérem, mondja még egyszer.', 'Mondja gyorsabban, most!'], correctIndex: 0 },
  ],
  readingTitle: 'Mit tegyünk megfázás esetén?',
  readingParagraphs: [
    'A megfázás általában néhány nap alatt javul, de közben fontos a pihenés és a megfelelő folyadékbevitel. Ha valaki köhög, fáj a torka vagy enyhe láza van, érdemes otthon maradnia és sok vizet vagy teát innia.',
    'A tüneteket egyszerű, vény nélkül kapható készítmények is enyhíthetik, de mindig el kell olvasni a használati útmutatót. Ha valaki rendszeresen szed más gyógyszert, vagy nem biztos abban, hogy mit használhat, kérdezze meg az orvost vagy a gyógyszerészt.',
    'Orvosi segítséget kell kérni, ha a tünetek erősek, több nap után sem javulnak, vagy nehézlégzés, nagyon magas láz vagy más szokatlan panasz jelentkezik.',
    'Antibiotikumot csak orvosi javaslatra szabad szedni, mert a megfázást gyakran vírus okozza, és ilyenkor az antibiotikum nem segít.',
  ],
  readingPassCount: 6,
  readingQuestions: [
    { id: 'l26-read-1', question: 'Általában mennyi idő alatt javul a megfázás?', options: ['Néhány nap alatt', 'Mindig egy óra alatt', 'Legalább egy év alatt'], correctIndex: 0 },
    { id: 'l26-read-2', question: 'Melyik két otthoni teendőt javasolja a szöveg?', options: ['Pihenést és sok víz vagy tea fogyasztását', 'Intenzív sportot és kevés alvást', 'Utazást és munkát'], correctIndex: 0 },
    { id: 'l26-read-3', question: 'Mit kell tenni vény nélkül kapható készítmény használata előtt?', options: ['Elolvasni a használati útmutatót', 'Más gyógyszerét kipróbálni', 'Figyelmen kívül hagyni a csomagolást'], correctIndex: 0 },
    { id: 'l26-read-4', question: 'Mikor kell megkérdezni az orvost vagy a gyógyszerészt?', options: ['Ha valaki más gyógyszert is szed, vagy nem biztos a használatban', 'Csak akkor, ha nincs otthon tea', 'Minden étkezés előtt'], correctIndex: 0 },
    { id: 'l26-read-5', question: 'Mikor javasolt orvosi segítséget kérni?', options: ['Erős, nem javuló vagy szokatlan tüneteknél', 'Enyhe éhségnél', 'Ha valaki pihenni szeretne'], correctIndex: 0 },
    { id: 'l26-read-6', question: 'Milyen szabály vonatkozik az antibiotikumra?', options: ['Csak orvosi javaslatra szabad szedni', 'Minden megfázásnál kötelező', 'Bárki ajánlhatja'], correctIndex: 0 },
    { id: 'l26-read-7', question: 'Miért nem segít mindig az antibiotikum megfázásnál?', options: ['Mert a megfázást gyakran vírus okozza', 'Mert csak folyadék', 'Mert mindig túl későn veszik be'], correctIndex: 0 },
    { id: 'l26-read-8', question: 'Mire következtethetünk a gyógyszerek biztonságos használatáról?', options: ['Az útmutatót el kell olvasni, bizonytalanság esetén pedig szakembert kell kérdezni', 'Minden készítmény ugyanúgy használható', 'A használati útmutató nem fontos'], correctIndex: 0 },
  ],
  listeningTitle: 'Аудирование: рекомендации врача',
  listeningTranscript: 'A torka piros, de a tüdeje tiszta. Maradjon otthon két napig, igyon sok teát, és vegye be ezt a gyógyszert naponta kétszer.',
  listeningPassCount: 2,
  listeningQuestions: [
    { id: 'l26-listen-1', question: 'Milyen a beteg torka?', options: ['Piros', 'Egészséges', 'Hideg'], correctIndex: 0 },
    { id: 'l26-listen-2', question: 'Mennyi ideig maradjon otthon?', options: ['Két napig', 'Egy hétig', 'Egy hónapig'], correctIndex: 0 },
    { id: 'l26-listen-3', question: 'Hányszor vegye be a gyógyszert?', options: ['Naponta egyszer', 'Naponta kétszer', 'Hetente kétszer'], correctIndex: 1 },
  ],
  rolePlay: {
    title: 'RolePlay 1: визит к врачу',
    partnerLabel: 'Врач',
    completionMessage: 'Языковая практика завершена. Это не медицинская оценка: проверь только полноту описания и уточнения.',
    startTurnId: 'l26-rp-1',
    turns: [
      { id: 'l26-rp-1', speaker: 'waiter', prompt: 'Jó napot! Mi a panasza?', next: 'l26-rp-2' },
      { id: 'l26-rp-2', speaker: 'learner', prompt: 'Опиши один-два вымышленных симптома.', responseMode: 'selfPractice', model: 'Fáj a torkom, és rosszul érzem magam.', next: 'l26-rp-3' },
      { id: 'l26-rp-3', speaker: 'waiter', prompt: 'Értem. Mióta érzi ezt?', next: 'l26-rp-4' },
      { id: 'l26-rp-4', speaker: 'learner', prompt: 'Назови продолжительность.', responseMode: 'selfPractice', model: 'Tegnap óta érzem.', next: 'l26-rp-5' },
      { id: 'l26-rp-5', speaker: 'waiter', prompt: 'Rendben. Van láza is?', next: 'l26-rp-6' },
      { id: 'l26-rp-6', speaker: 'learner', prompt: 'Ответь по вымышленному сценарию.', responseMode: 'selfPractice', model: 'Enyhe lázam van.', next: 'l26-rp-7' },
      { id: 'l26-rp-7', speaker: 'waiter', prompt: 'Értem. Köhög is?', next: 'l26-rp-8' },
      { id: 'l26-rp-8', speaker: 'learner', prompt: 'Ответь и при необходимости добавь изменение состояния.', responseMode: 'selfPractice', model: 'Igen, három napja köhögök, de ma egy kicsit jobban vagyok.', next: 'l26-rp-9' },
      { id: 'l26-rp-9', speaker: 'waiter', prompt: 'Rendben. Mennyire erős a fájdalom?', next: 'l26-rp-10' },
      { id: 'l26-rp-10', speaker: 'learner', prompt: 'Опиши базовую степень боли без диагноза.', responseMode: 'selfPractice', model: 'Nem nagyon erős, de kellemetlen.', next: 'l26-rp-11' },
      { id: 'l26-rp-11', speaker: 'waiter', prompt: 'Értem. Szed jelenleg valamilyen gyógyszert?', next: 'l26-rp-12' },
      { id: 'l26-rp-12', speaker: 'learner', prompt: 'Ответь в рамках вымышленного сценария.', responseMode: 'selfPractice', model: 'Nem, jelenleg nem szedek gyógyszert.', next: 'l26-rp-13' },
      { id: 'l26-rp-13', speaker: 'waiter', prompt: 'Ez csak nyelvgyakorló helyzet, nem diagnózis. A történet alapján pihenjen, igyon elegendő folyadékot, és olvassa el minden készítmény használati útmutatóját.', next: 'l26-rp-14' },
      { id: 'l26-rp-14', speaker: 'learner', prompt: 'Используй repair-реплику и попроси повторить или уточнить.', responseMode: 'selfPractice', model: 'Elnézést, kérem, mondja még egyszer. Nem értettem pontosan.', next: 'l26-rp-15' },
      { id: 'l26-rp-15', speaker: 'waiter', prompt: 'Pihenjen, igyon vizet vagy teát, és bizonytalanság esetén kérdezze meg az orvost vagy a gyógyszerészt.', next: 'l26-rp-16' },
      { id: 'l26-rp-16', speaker: 'learner', prompt: 'Подтверди, что понял(а), не добавляя диагноза.', responseMode: 'selfPractice', model: 'Rendben, értem: pihenek, folyadékot iszom, és ha nem vagyok biztos valamiben, szakembert kérdezek.' },
    ],
  },
  rolePlayB: {
    title: 'RolePlay 2: в аптеке',
    partnerLabel: 'Фармацевт',
    completionMessage: 'Аптечный диалог завершён. Конкретная дозировка намеренно не оценивается и не придумывается.',
    startTurnId: 'l26-rpb-1',
    turns: [
      { id: 'l26-rpb-1', speaker: 'waiter', prompt: 'Jó napot! Miben segíthetek?', next: 'l26-rpb-2' },
      { id: 'l26-rpb-2', speaker: 'learner', prompt: 'Попроси простое безрецептурное средство от вымышленного симптома и назови длительность.', responseMode: 'selfPractice', model: 'Jó napot! Három napja fáj a torkom. Szeretnék valamit kérni torokfájás ellen.', next: 'l26-rpb-3' },
      { id: 'l26-rpb-3', speaker: 'waiter', prompt: 'Értem. Szed valamilyen más gyógyszert?', next: 'l26-rpb-4' },
      { id: 'l26-rpb-4', speaker: 'learner', prompt: 'Ответь в рамках сценария.', responseMode: 'selfPractice', model: 'Nem, most nem szedek más gyógyszert.', next: 'l26-rpb-5' },
      { id: 'l26-rpb-5', speaker: 'waiter', prompt: 'Rendben. Ezt a vény nélkül kapható készítményt csak a csomagoláson lévő használati útmutató szerint használja. Ha bizonytalan, kérdezzen orvost vagy gyógyszerészt.', next: 'l26-rpb-6' },
      { id: 'l26-rpb-6', speaker: 'learner', prompt: 'Спроси о частоте и связи с едой.', responseMode: 'selfPractice', model: 'Értem. Hányszor kell használnom? Étkezés előtt vagy után?', next: 'l26-rpb-7' },
      { id: 'l26-rpb-7', speaker: 'waiter', prompt: 'A pontos gyakoriságot és időzítést a termék használati útmutatója tartalmazza; azt kövesse.', next: 'l26-rpb-8' },
      { id: 'l26-rpb-8', speaker: 'learner', prompt: 'Подтверди понимание и вежливо заверши.', responseMode: 'selfPractice', model: 'Rendben, elolvasom és követem az útmutatót. Köszönöm szépen a segítséget.' },
    ],
  },
  writingTitle: 'Письмо: сообщение в кабинет врача',
  writingPrompt: 'Напиши 100–120 слов в кабинет врача. Это языковая практика, а не реальная медицинская оценка. Опиши основные вымышленные симптомы, когда они начались, как менялись, что уже пробовал(а), задай один релевантный вопрос и попроси запись на приём.',
  writingModel: ['Tisztelt Rendelő!', 'Három napja köhögök, és tegnap óta fáj a torkom.', 'Szeretnék időpontot kérni egy vizsgálatra.'],
  writingRubric: ['100–120 слов', 'Названы основные вымышленные симптомы', 'Указаны начало и развитие состояния', 'Описано, что уже было сделано', 'Есть один релевантный вопрос', 'Есть просьба о записи', 'Текст не выдаёт языковую практику за медицинскую оценку'],
  objectiveChecks: [
    { objectiveId: 'l26_name-body-symptoms', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l26_express-pain', activity: 'writing', evidenceKind: 'writing' },
    {
      objectiveId: 'l26_doctor-dialogue',
      activity: 'roleplay',
      evidenceKind: 'interaction',
      evidenceComponents: [{ activity: 'listening', evidenceKind: 'listening' }],
    },
    {
      objectiveId: 'l26_pharmacy',
      activity: 'roleplayB',
      evidenceKind: 'interaction',
      evidenceComponents: [{ activity: 'controlled', evidenceKind: 'grammar' }],
    },
    { objectiveId: 'l26_understand-advice', activity: 'listening', evidenceKind: 'listening' },
  ],
});

const L26_OPTIONAL_SPEAKING = {
  title: 'Говорение: вымышленная проблема со здоровьем',
  instructions: 'Говори около 2 минут. Это языковая практика, не реальная медицинская оценка. Опиши недавнюю вымышленную проблему: симптомы, начало, что уже сделал(а), стало ли лучше или хуже и что спросил(а) бы у врача.',
  prompt: 'Három napja köhögök, tegnap óta fáj a torkom. Pihentem és teát ittam. Ma egy kicsit jobban vagyok. Az orvostól azt kérdezném: Mit javasol?',
  rubric: ['Около 2 минут', 'Ясно указано, что ситуация вымышленная', 'Есть симптомы и время начала', 'Описано предпринятое действие', 'Есть изменение состояния', 'Сформулирован вопрос врачу', 'Нет диагностических утверждений'],
};

export const LESSON_26: Lesson = {
  id: 26,
  number: 26,
  level: 'B1',
  title: 'Урок 26 · Egészség és orvos',
  subtitle: 'Здоровье, болезни и визит к врачу',
  description: 'Конструкция Fáj a... (болит...), части тела, описание симптомов (láz, köhögés), визит к врачу (az orvosnál) и покупка лекарств в аптеке (a gyógyszertárban).',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 26 · 1/11 · ТЕМА «ЗДОРОВЬЕ»",
      title: "Egészség és orvos",
      subtitle: "Как объяснить, что у вас болит и как вы себя чувствуете",
      body: `
   <p>Умение объяснить симптомы, записаться к врачу и купить нужные лекарства в аптеке — практическая необходимость при жизни в стране. В этом уроке освоим всю необходимую лексику и грамматику для темы здоровья.</p>
   <div class="note"><b>Can-Do:</b> описать вымышленные симптомы, их начало и изменение, ответить на уточняющие вопросы, понять простую рекомендацию, попросить повторить и задать практический вопрос в аптеке. Урок тренирует язык и не заменяет медицинскую консультацию.</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 26 · 2/11 · У МЕНЯ БОЛИТ...",
      title: "Fáj a...",
      subtitle: "Конструкция «У меня болит...»",
      body: `
   <p>Чтобы сказать «у меня болит [часть тела]», используется глагол <span class="hu-word">fáj</span> (единственное число) или <span class="hu-word">fájnak</span> (множественное число) + притяжательная форма части тела (сравните с притяжательными формами из 8-го урока):</p>
   <p><button class="speak-btn" data-speak-text="Fáj a fejem." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Fáj a fejem.</button> <span style="color:#8a7a68">(У меня болит голова — буквально «болит моя голова»)</span></p>
   <p><button class="speak-btn" data-speak-text="Fáj a torkom." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Fáj a torkom.</button> <span style="color:#8a7a68">(У меня болит горло)</span></p>
   <p><button class="speak-btn" data-speak-text="Fáj a hasam." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Fáj a hasam.</button> <span style="color:#8a7a68">(У меня болит живот)</span></p>
   <p><button class="speak-btn" data-speak-text="Fájnak a lábaim." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Fájnak a lábaim.</button> <span style="color:#8a7a68">(У меня болят ноги — множественное число fájnak!)</span></p>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 26 · 3/11 · ЧАСТИ ТЕЛА",
      title: "A test részei",
      subtitle: "Части тела и притяжательные формы 1-го лица",
      body: `
   <table class="conj">
     <tr><th>Слово</th><th>Своё (1-е лицо)</th><th>Значение</th></tr>
     <tr><td>fej</td><td><button class="speak-btn" data-speak-text="fejem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fejem</button></td><td>голова</td></tr>
     <tr><td>torok</td><td><button class="speak-btn" data-speak-text="torkom" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> torkom</button></td><td>горло (выпадение o!)</td></tr>
     <tr><td>has</td><td><button class="speak-btn" data-speak-text="hasam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hasam</button></td><td>живот</td></tr>
     <tr><td>hát</td><td><button class="speak-btn" data-speak-text="hátam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hátam</button></td><td>спина</td></tr>
     <tr><td>fog</td><td><button class="speak-btn" data-speak-text="fogam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fogam</button></td><td>зуб</td></tr>
     <tr><td>fül</td><td><button class="speak-btn" data-speak-text="fülem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fülem</button></td><td>ухо</td></tr>
     <tr><td>szem</td><td><button class="speak-btn" data-speak-text="szemem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szemem</button></td><td>глаз</td></tr>
   </table>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 26 · 4/11 · СИМПТОМЫ",
      title: "Tünetek és betegségek",
      subtitle: "Температура, кашель, простуда",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="Lázam van." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Lázam van.</button> — У меня температура</p>
       <p><button class="speak-btn" data-speak-text="Köhögök." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Köhögök.</button> — Я кашляю</p>
       <p><button class="speak-btn" data-speak-text="Fázom." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Fázom.</button> — Мне холодно / знобит</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="Megfáztam." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Megfáztam.</button> — Я простудился</p>
       <p><button class="speak-btn" data-speak-text="Náthás vagyok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Náthás vagyok.</button> — У меня насморк</p>
       <p><button class="speak-btn" data-speak-text="Szédülök." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szédülök.</button> — У меня кружится голова</p>
     </div>
   </div>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 26 · 5/11 · У ВРАЧА",
      title: "Az orvosnál",
      subtitle: "Разговор в кабинете врача",
      body: `
   <p>Врач спросит:</p>
   <p><button class="speak-btn" data-speak-text="Mi a panasz?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mi a panasz?</button> <span style="color:#8a7a68">(На что жалуетесь?)</span></p>
   <p><button class="speak-btn" data-speak-text="Mióta fáj?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mióta fáj?</button> <span style="color:#8a7a68">(Как долго болит?)</span></p>
   <p>Инструкции врача (повелительное наклонение из 22-го урока!):</p>
   <p><button class="speak-btn" data-speak-text="Nyissa ki a száját!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nyissa ki a száját!</button> <span style="color:#8a7a68">(Откройте рот!)</span></p>
   <p><button class="speak-btn" data-speak-text="Vegyen mély lélegzetet!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Vegyen mély lélegzetet!</button> <span style="color:#8a7a68">(Сделайте глубокий вдох!)</span></p>
   <p><button class="speak-btn" data-speak-text="Írok egy receptet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Írok egy receptet.</button> <span style="color:#8a7a68">(Я выпишу рецепт)</span></p>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 26 · 6/11 · В АПТЕКЕ",
      title: "A gyógyszertárban",
      subtitle: "Покупка лекарств",
      body: `
   <p><button class="speak-btn" data-speak-text="Szeretnék valamit fejfájás ellen." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretnék valamit fejfájás ellen.</button> <span style="color:#8a7a68">(Я хотел бы что-нибудь от головной боли — ellen = против/от)</span></p>
   <p><button class="speak-btn" data-speak-text="Hogyan kell bevenni ezt a gyógyszert?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Hogyan kell bevenni ezt a gyógyszert?</button> <span style="color:#8a7a68">(Как нужно принимать это лекарство?)</span></p>
   <p><span class="hu-word">Hányszor kell bevennem? Étkezés előtt vagy után?</span> <span style="color:#8a7a68">(Сколько раз принимать? До или после еды?)</span></p>
   <div class="note">Ответ зависит от конкретного препарата: следуйте его инструкции и уточняйте у врача или фармацевта. Урок не задаёт универсальную дозировку.</div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 26 · 7/11 · ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "Описание своего состояния",
      body: `
   <p><button class="speak-btn" data-speak-text="Tegnap óta fáj a torkom és lázam is van." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tegnap óta fáj a torkom és lázam is van.</button> <span style="color:#8a7a68">(Со вчерашнего дня у меня болит горло и есть температура)</span></p>
   <p><span class="hu-word">Három napja köhögök. Ma egy kicsit jobban vagyok.</span> <span style="color:#8a7a68">(Я кашляю три дня. Сегодня мне немного лучше.)</span></p>
   <div class="note"><b>Сравните:</b> <span class="hu-word">három napja</span> показывает, как давно началось продолжающееся состояние, а három napig означает «в течение трёх дней» и обозначает длительность.</div>
   <div class="note"><b>Функциональные реплики:</b> Mi a panasza? · Mióta érzi ezt? · Tegnap óta… · Három napja… · Fáj a… · Lázam van. · Köhögök. · Fáj a torkom. · Szédülök. · Rosszul érzem magam. · Jobban / rosszabbul vagyok. · Mennyire erős a fájdalom? · Szed valamilyen gyógyszert? · Mit javasol? · Hányszor kell bevennem? · Étkezés előtt vagy után? · Kérem, mondja még egyszer. · Nem értettem pontosan. · Van valami mellékhatása? · Szeretnék valamit kérni … ellen.</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 26 · 8/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "У врача",
      body: `
   <p><b>Orvos:</b> <button class="speak-btn" data-speak-text="Jó napot! Mi a panasz?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó napot! Mi a panasz?</button></p>
   <p><b>Beteg:</b> <button class="speak-btn" data-speak-text="Jó napot! Nagyon fáj a fejem és köhögök." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó napot! Nagyon fáj a fejem és köhögök.</button></p>
   <p><b>Orvos:</b> <button class="speak-btn" data-speak-text="Mióta? Láza is van?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mióta? Láza is van?</button></p>
   <p><b>Beteg:</b> <button class="speak-btn" data-speak-text="Két napja. Ma reggel 38 fokos lázam volt." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Két napja. Ma reggel 38 fokos lázam volt.</button></p>
   <p><b>Orvos:</b> <button class="speak-btn" data-speak-text="Rendben. Nyissa ki a száját, megnézem a torkát!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Rendben. Nyissa ki a száját, megnézem a torkát!</button></p>
   <div class="task">Задание 1. Ролевая игра: один смуделирует врача, второй — больного. Поменяйтесь ролями!</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 26 · 9/11 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      activities: L26_ACTIVITIES,
      optionalSpeaking: L26_OPTIONAL_SPEAKING,
      body: `
   <ol class="tasklist">
     <li>Скажите «У меня болит...» для слов: fej, torok, has, fog, hát</li>
     <li>Переведите: «У меня температура и насморк»</li>
     <li>Как попросить в аптеке «что-нибудь от кашля»?</li>
     <li>Переведите инструкцию врача: «Принимайте это лекарство два раза в день»</li>
     <li>Составьте диалог из 4 предложений между врачом и пациентом</li>
   </ol>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 26 · 10/11 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Что дальше",
      body: `
   <p>В следующем, 27-м уроке — третья важнейшая тема уровня B1: путешествия, транспорт, отели, бронирование и ориентация на местности.</p>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 26 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 26-го урока",
      body: `
   <ul class="tick">
     <li>Fáj a + [моя часть тела] (Fáj a fejem, torkom, hasam...)</li>
     <li>Симптомы: lázam van, köhögök, megfáztam, szédülök</li>
     <li>У врача: Mi a panasz?, Nyissa ki a száját!</li>
     <li>В аптеке: valamit [болезнь] ellen (от/против чего-то)</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Напишите короткое объяснение (4-5 предложений) для коллеги, почему вы сегодня не можете прийти на работу по болезни.</div>
 `
    }
  ],
  vocabulary: [
    { id: "l26_v1", hu: "fejfájás", ru: "головная боль", category: "Здоровье", exampleSentence: "Fejfájásom van.",
        ipa: "[fˈɛjfɒːjɒːʃ]"
    },
    { id: "l26_v2", hu: "gyógyszer", ru: "лекарство", category: "Здоровье", exampleSentence: "Beveszem a gyógyszert.",
        ipa: "[ɟˈoːɟʃɛr]"
    },
    { id: "l26_v3", hu: "recept", ru: "рецепт (медицинский)", category: "Здоровье", exampleSentence: "Az orvos receptet írt.",
        ipa: "[rˈɛtsɛpt]"
    },
    { id: "l26_v4", hu: "gyógyszertár", ru: "аптека", category: "Здоровье", exampleSentence: "A gyógyszertárban vagyok.",
        ipa: "[ɟˈoːɟʃɛrtɒːr]"
    }
  ],
    quiz: [
    {
      id: 2601,
      question: 'Как сказать «У меня болит голова» по-венгерски?',
      options: [
        'Fáj a fejem',
        'Fáj én fej',
        'Fej van fáj',
        'Nekem fej fáj'
      ],
      correctIndex: 0,
      explanation: 'Конструкция: Fáj + a + притяжательная форма части тела. fej → fejem (моя голова). Правильно: Fáj a fejem.'
    },
    {
      id: 2602,
      question: 'Что означает фраза «Lázam van» по-венгерски?',
      options: [
        'У меня температура',
        'У меня кружится голова',
        'Я простудился',
        'Я болен'
      ],
      correctIndex: 0,
      explanation: '«Lázam van» означает «У меня температура». Láz = жар/температура, -am = притяжательный суффикс 1-го лица (моя).'
    },
    {
      id: 2603,
      question: 'Как спросить у врача «На что жалуетесь?» по-венгерски?',
      options: [
        'Mi a panasz?',
        'Hogy van?',
        'Mit csinál?',
        'Hol fáj?'
      ],
      correctIndex: 0,
      explanation: '«Mi a panasz?» – стандартный вопрос врача о жалобах пациента, переводится как «На что жалуетесь?» (урок 26, слайд 5).'
    },
    {
      id: 2604,
      question: 'Как сказать «Я кашляю» по-венгерски?',
      options: [
        'Köhögök',
        'Köhög',
        'Köhögnék',
        'Köhögni'
      ],
      correctIndex: 0,
      explanation: 'Глагол «köhög» (кашлять) в 1-м лице единственного числа: köhög + ök = köhögök (я кашляю).'
    },
    {
      id: 2605,
      question: 'Какой вариант правильно использует ellen в просьбе о средстве от головной боли?',
      options: [
        'Szeretnék valamit fejfájás ellen.',
        'Szeretnék valamit fejfájástól.',
        'Szeretnék valamit fejfájásban.',
        'Szeretnék valamit fejfájással.'
      ],
      correctIndex: 0,
      explanation: 'Ellen означает «против / от»: fejfájás ellen. Форма fejfájásra тоже может звучать естественно в такой просьбе, поэтому она намеренно не используется как неправильный вариант.'
    },
    {
      id: 2606,
      question: 'Какое наклонение используется во фразе врача «Nyissa ki a száját!» (Откройте рот!)?',
      options: [
        'Повелительное наклонение (felszólító mód)',
        'Изъявительное настоящее',
        'Условное наклонение',
        'Прошедшее время'
      ],
      correctIndex: 0,
      explanation: '«Nyissa» – это повелительное наклонение от глагола «nyit» (открывать) с окончанием -ja (вежливая форма на «Вы»). Повелительное наклонение мы изучали в уроке 22.'
    }
  ],
  objectives: [
    { id: 'l26_name-body-symptoms', text: 'Описывать симптомы и части тела (Fáj a fejem).', skills: ['speaking', 'writing'] },
    { id: 'l26_express-pain', text: 'Выражать боль и недомогание (Fáj a…, lázam van).', skills: ['speaking', 'writing'] },
    { id: 'l26_doctor-dialogue', text: 'Вести диалог с врачом: отвечать на вопросы о состоянии.', skills: ['speaking', 'listening'] },
    { id: 'l26_pharmacy', text: 'Объяснять в аптеке, какое лекарство нужно (gyógyszertár).', skills: ['speaking', 'listening'] },
    { id: 'l26_understand-advice', text: 'Понимать рекомендации врача на слух.', skills: ['listening'] },
  ],
};
