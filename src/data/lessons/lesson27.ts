import { Lesson } from '../../types';
import { createMigrationActivities } from './migrationActivityFactory';

const L27_ACTIVITIES = createMigrationActivities({
  lessonId: 27,
  activitySequence: 'communication',
  controlledTitle: 'Поездка: транспорт, билет, отель и дорога',
  controlledPassCount: 11,
  controlledExercises: [
    { kind: 'singleChoice', id: 'l27-cp-1', prompt: 'A · Попроси билет туда и обратно.', options: ['Egy retúrjegyet kérek.', 'Egy szobát kérek.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l27-cp-2', prompt: 'A · Уточни время отправления.', options: ['Mikor indul?', 'Mikor foglal?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l27-cp-3', prompt: 'B · Уточни путь отправления.', options: ['Melyik vágányról indul?', 'Melyik szobából indul?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l27-cp-4', prompt: 'B · Спроси о задержке.', options: ['Mennyit késik a vonat?', 'Mennyibe kerül a késés?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l27-cp-5', prompt: 'C · Сообщи о пропущенной пересадке.', options: ['Lekéstem a csatlakozást.', 'Elkéstem a szállodát.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l27-cp-6', prompt: 'C · Уточни необходимость пересадки.', options: ['Át kell szállni?', 'Át kell foglalni?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l27-cp-7', prompt: 'D · Сообщи имя бронирования.', options: ['Van egy foglalásom Kovács névre.', 'Kovács egy foglalásban van.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l27-cp-8', prompt: 'D · Уточни длительность бронирования.', options: ['Két éjszakára foglaltam.', 'Két éjszaka foglal engem.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l27-cp-9', prompt: 'F · Попроси повторно проверить бронирование.', options: ['Meg tudná nézni még egyszer?', 'Nézi másik tegnap?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l27-cp-10', prompt: 'F · Спроси об альтернативном номере.', options: ['Van másik szabad szoba?', 'Másik szoba késik?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l27-cp-11', prompt: 'D · Уточни завтрак.', options: ['A reggeli benne van az árban?', 'A reggeli melyik vágányon van?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l27-cp-12', prompt: 'E · Спроси дорогу до вокзала.', options: ['Hogyan jutok el a pályaudvarra?', 'Hogyan indul a pályaudvar?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l27-cp-13', prompt: 'E · Дай первую часть маршрута.', options: ['Menjen egyenesen, aztán forduljon balra.', 'Menjen tegnap, aztán késik.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l27-cp-14', prompt: 'F · Вежливо заверши помощь.', options: ['Köszönöm a segítséget.', 'Köszönöm a problémát.'], correctIndex: 0 },
  ],
  readingTitle: 'Utazás Pécsre — fontos információk',
  readingParagraphs: [
    'A Budapest-Keleti pályaudvarról Pécsre induló 9:10-es vonat műszaki probléma miatt várhatóan 25 percet késik. Az utasokat arra kérjük, hogy indulás előtt ellenőrizzék a kijelzőket, mert a vonat vágánya megváltozhat.',
    'Azok az utasok, akik Pécsen helyi buszra szeretnének átszállni, a vasútállomás előtti megállóból induló 3-as vagy 6-os járatot használhatják. A menetjegyet a buszon bankkártyával is meg lehet vásárolni.',
    'A Hotel Centrum a pályaudvartól körülbelül húsz perc alatt érhető el tömegközlekedéssel. A recepción 14 órától lehet elfoglalni a szobákat. Ha a vendég 20 óra után érkezik, érdemes előre értesíteni a szállodát.',
    'A reggeli nincs benne minden szoba árában, ezért foglaláskor ellenőrizni kell a választott csomagot. A foglalás dátuma érkezés előtt legkésőbb két nappal módosítható díjmentesen.',
  ],
  readingPassCount: 6,
  readingQuestions: [
    { id: 'l27-read-1', question: 'Mennyit késik várhatóan a 9:10-es vonat?', options: ['25 percet', '10 percet', 'Egy órát'], correctIndex: 0 },
    { id: 'l27-read-2', question: 'Miért kell indulás előtt ellenőrizni a kijelzőket?', options: ['Mert a vágány megváltozhat', 'Mert a szálloda bezárhat', 'Mert a jegy ára változik'], correctIndex: 0 },
    { id: 'l27-read-3', question: 'Melyik helyi buszok használhatók Pécsen?', options: ['A 3-as vagy a 6-os', 'Csak a 2-es', 'A 10-es vagy a 12-es'], correctIndex: 0 },
    { id: 'l27-read-4', question: 'Hogyan lehet a buszon menetjegyet vásárolni?', options: ['Bankkártyával is', 'Csak készpénzzel a szállodában', 'Kizárólag előző nap'], correctIndex: 0 },
    { id: 'l27-read-5', question: 'Mennyi idő alatt érhető el a Hotel Centrum tömegközlekedéssel?', options: ['Körülbelül húsz perc alatt', 'Öt perc alatt', 'Két óra alatt'], correctIndex: 0 },
    { id: 'l27-read-6', question: 'Mikortól lehet elfoglalni a szobákat?', options: ['14 órától', '9:10-től', '20 órától'], correctIndex: 0 },
    { id: 'l27-read-7', question: 'Mit érdemes tenni, ha a vendég 20 óra után érkezik?', options: ['Előre értesíteni a szállodát', 'Új vonatjegyet venni', 'Másik városba menni'], correctIndex: 0 },
    { id: 'l27-read-8', question: 'Meddig módosítható a foglalás dátuma díjmentesen?', options: ['Érkezés előtt legkésőbb két nappal', 'Csak érkezés után', 'Bármikor korlátozás nélkül'], correctIndex: 0 },
  ],
  listeningTitle: 'Аудирование: на рецепции отеля',
  listeningTranscript: 'Vendég: Jó estét! Van egy foglalásom Kovács névre, két éjszakára.\nRecepciós: Igen, látom. A szobája a második emeleten van, a reggeli hét és tíz óra között.',
  listeningPassCount: 2,
  listeningQuestions: [
    { id: 'l27-listen-1', question: 'Milyen névre szól a foglalás?', options: ['Kovács', 'Nagy', 'Szabó'], correctIndex: 0 },
    { id: 'l27-listen-2', question: 'Hány éjszakára?', options: ['Egy', 'Kettő', 'Három'], correctIndex: 1 },
    { id: 'l27-listen-3', question: 'Mikor van reggeli?', options: ['7 és 10 között', '10 és 12 között', 'Egész nap'], correctIndex: 0 },
  ],
  rolePlay: {
    title: 'RolePlay 1: ошибка в бронировании отеля',
    partnerLabel: 'Администратор отеля',
    completionMessage: 'Проблема с бронированием обработана. Проверь объяснение дат, запрос альтернативы и практический вопрос.',
    startTurnId: 'l27-rp-1',
    turns: [
      { id: 'l27-rp-1', speaker: 'waiter', prompt: 'Jó estét! Miben segíthetek?', next: 'l27-rp-2' },
      { id: 'l27-rp-2', speaker: 'learner', prompt: 'Поздоровайся и сообщи вымышленное имя бронирования и две ночи.', responseMode: 'selfPractice', model: 'Jó estét! Van egy foglalásom Kovács névre, két éjszakára.', next: 'l27-rp-3' },
      { id: 'l27-rp-3', speaker: 'waiter', prompt: 'Sajnos a rendszerben csak egy éjszaka szerepel.', next: 'l27-rp-4' },
      { id: 'l27-rp-4', speaker: 'learner', prompt: 'Объясни правильные вымышленные даты/длительность и попроси проверить ещё раз.', responseMode: 'selfPractice', model: 'Június 10-től 12-ig, két éjszakára foglaltam. Meg tudná nézni még egyszer?', next: 'l27-rp-5' },
      { id: 'l27-rp-5', speaker: 'waiter', prompt: 'Megnéztem, de a kért szobatípus a második éjszakára nem elérhető.', next: 'l27-rp-6' },
      { id: 'l27-rp-6', speaker: 'learner', prompt: 'Попроси предложить альтернативу.', responseMode: 'selfPractice', model: 'Van másik szabad szoba vagy más megoldás?', next: 'l27-rp-7' },
      { id: 'l27-rp-7', speaker: 'waiter', prompt: 'Tudunk adni egy másik szobát mindkét éjszakára, felár nélkül.', next: 'l27-rp-8' },
      { id: 'l27-rp-8', speaker: 'learner', prompt: 'Задай один практический вопрос о цене, завтраке или времени выезда.', responseMode: 'selfPractice', model: 'Köszönöm. A reggeli benne van az árban?', next: 'l27-rp-9' },
      { id: 'l27-rp-9', speaker: 'waiter', prompt: 'Igen, ebben a csomagban a reggeli benne van az árban.', next: 'l27-rp-10' },
      { id: 'l27-rp-10', speaker: 'learner', prompt: 'Прими или отклони вариант вежливо.', responseMode: 'selfPractice', model: 'Rendben, elfogadom ezt a megoldást.', next: 'l27-rp-11' },
      { id: 'l27-rp-11', speaker: 'waiter', prompt: 'Módosítottam a foglalást két éjszakára. Van még kérdése?', next: 'l27-rp-12' },
      { id: 'l27-rp-12', speaker: 'learner', prompt: 'Вежливо заверши.', responseMode: 'selfPractice', model: 'Nincs, köszönöm szépen a segítséget. Viszontlátásra!' },
    ],
  },
  rolePlayB: {
    title: 'RolePlay 2: задержка поезда и пропущенная пересадка',
    partnerLabel: 'Сотрудник вокзала',
    completionMessage: 'Маршрут после задержки уточнён: новое время, путь, альтернатива и подтверждение решения.',
    startTurnId: 'l27-rpb-1',
    turns: [
      { id: 'l27-rpb-1', speaker: 'waiter', prompt: 'A vonata harminc percet késik, ezért valószínűleg lekési a csatlakozást.', next: 'l27-rpb-2' },
      { id: 'l27-rpb-2', speaker: 'learner', prompt: 'Спроси о новом времени и следующей пересадке.', responseMode: 'selfPractice', model: 'Mikor indul tovább a vonat, és melyik csatlakozást érhetem el?', next: 'l27-rpb-3' },
      { id: 'l27-rpb-3', speaker: 'waiter', prompt: 'A következő csatlakozás 13:20-kor indul.', next: 'l27-rpb-4' },
      { id: 'l27-rpb-4', speaker: 'learner', prompt: 'Спроси, с какого пути он отправляется.', responseMode: 'selfPractice', model: 'Melyik vágányról indul?', next: 'l27-rpb-5' },
      { id: 'l27-rpb-5', speaker: 'waiter', prompt: 'A hatodik vágányról indul.', next: 'l27-rpb-6' },
      { id: 'l27-rpb-6', speaker: 'learner', prompt: 'Уточни, есть ли другой поезд.', responseMode: 'selfPractice', model: 'Van másik vonat, amellyel hamarabb odaérhetek?', next: 'l27-rpb-7' },
      { id: 'l27-rpb-7', speaker: 'waiter', prompt: 'Igen, 13:05-kor indul egy másik vonat a negyedik vágányról, de át kell szállnia.', next: 'l27-rpb-8' },
      { id: 'l27-rpb-8', speaker: 'learner', prompt: 'Подтверди выбранное решение своими словами.', responseMode: 'selfPractice', model: 'Értem. A 13:05-ös vonatot választom a negyedik vágányról, és át kell szállnom.', next: 'l27-rpb-9' },
      { id: 'l27-rpb-9', speaker: 'waiter', prompt: 'Igen, ez a leggyorsabb lehetőség ebben a helyzetben.', next: 'l27-rpb-10' },
      { id: 'l27-rpb-10', speaker: 'learner', prompt: 'Вежливо поблагодари.', responseMode: 'selfPractice', model: 'Rendben, köszönöm a segítséget.' },
    ],
  },
  writingTitle: 'Письмо: проблема с бронированием',
  writingPrompt: 'Напиши 100–130 слов в отель о проблеме с вымышленным бронированием. Укажи имя бронирования, даты, ожидаемый тип номера или число гостей, что именно неверно, желаемое решение, один практический вопрос и вежливое завершение.',
  writingModel: ['Tisztelt Hotel Centrum!', 'Kovács névre foglaltam június 10-től 12-ig.', 'Kérem, ellenőrizzék és javítsák a foglalást.'],
  writingRubric: ['100–130 слов', 'Есть имя бронирования и даты', 'Указаны ожидаемый номер или число гостей', 'Проблема описана ясно', 'Запрошено конкретное решение', 'Есть практический вопрос', 'Есть вежливое завершение'],
  objectiveChecks: [
    { objectiveId: 'l27_name-transport', activity: 'controlled', evidenceKind: 'grammar' },
    {
      objectiveId: 'l27_buy-tickets',
      activity: 'roleplayB',
      evidenceKind: 'interaction',
      evidenceComponents: [{ activity: 'controlled', evidenceKind: 'grammar' }],
    },
    {
      objectiveId: 'l27_book-room',
      activity: 'writing',
      evidenceKind: 'writing',
      evidenceComponents: [{ activity: 'roleplay', evidenceKind: 'interaction' }],
    },
    {
      objectiveId: 'l27_travel-dialogue',
      activity: 'roleplay',
      evidenceKind: 'interaction',
      evidenceComponents: [{ activity: 'roleplayB', evidenceKind: 'interaction' }, { activity: 'listening', evidenceKind: 'listening' }],
    },
  ],
});

const L27_OPTIONAL_SPEAKING = {
  title: 'Говорение: вымышленная поездка с проблемой',
  instructions: 'Говори 2–3 минуты о вымышленной поездке: пункт назначения, транспорт, расписание, одна проблема, как она была решена, гостиница/проживание и общая оценка. Используй прошедшее время, маркеры последовательности, мнение и причину.',
  prompt: 'Először vonattal utaztam Pécsre. A vonat késett, ezért lekéstem a csatlakozást, de találtam egy másik járatot. A szállodában két éjszakát töltöttem. Összességében tetszett az út, mert sikerült megoldani a problémát.',
  rubric: ['2–3 минуты', 'Есть пункт назначения, транспорт и расписание', 'Использовано прошедшее время', 'Есть маркеры последовательности', 'Описаны одна проблема и одно решение', 'Упомянуто проживание', 'Есть мнение и причина'],
};

export const LESSON_27: Lesson = {
  id: 27,
  number: 27,
  level: 'B1',
  title: 'Урок 27 · Utazás és közlekedés',
  subtitle: 'Путешествия, транспорт и бронирование',
  description: 'Виды транспорта с творительным падежом (-val/-vel), покупка билетов (jegyvásárlás), отели и бронирование (szálloda, foglalás), вопросы проезда.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 27 · 1/11 · ТЕМА «ПУТЕШЕСТВИЯ»",
      title: "Utazás és közlekedés",
      subtitle: "Всё для поездок, транспорта и отдыха",
      body: `
   <p>Путешествия — отличная возможность применить венгерский язык на практике! В этом уроке освоим транспортные средства, покупку билетов, бронирование номеров в отеле и спрашивание дороги у прохожих.</p>
   <div class="note"><b>Can-Do:</b> понять практическую информацию, купить или изменить билет, объяснить проблему с поездкой, уточнить задержку/путь/время, заселиться в отель, исправить ошибку бронирования, спросить дорогу и согласовать простую альтернативу.</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 27 · 2/11 · ТРАНСПОРТ",
      title: "Közlekedési eszközök",
      subtitle: "На чём мы ездим — суффикс -val/-vel (из 16-го урока!)",
      body: `
   <p>Для поездки на транспорте используется творительный падеж <span class="hu-word">-val / -vel</span> (вспомните 16-й урок):</p>
   <table class="conj">
     <tr><th>Транспорт</th><th>«Ехать на...»</th></tr>
     <tr><td>busz (автобус)</td><td><button class="speak-btn" data-speak-text="busszal" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> busszal</button> <span class="pron">(ассимиляция v→z!)</span></td></tr>
     <tr><td>vonat (поезд)</td><td><button class="speak-btn" data-speak-text="vonattal" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vonattal</button> <span class="pron">(ассимиляция v→t!)</span></td></tr>
     <tr><td>villamos (трамвай)</td><td><button class="speak-btn" data-speak-text="villamossal" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> villamossal</button></td></tr>
     <tr><td>repülő (самолёт)</td><td><button class="speak-btn" data-speak-text="repülővel" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> repülővel</button></td></tr>
     <tr><td>autó (машина)</td><td><button class="speak-btn" data-speak-text="autóval" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> autóval</button></td></tr>
     <tr><td>metro (метро)</td><td><button class="speak-btn" data-speak-text="metróval" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> metróval</button></td></tr>
     <tr><td>gyalog (пешком)</td><td><button class="speak-btn" data-speak-text="gyalog" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> gyalog</button> <span class="pron">(наречие, без суффикса!)</span></td></tr>
   </table>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 27 · 3/11 · ВОКЗАЛ И АЭРОПОРТ",
      title: "A pályaudvaron és a repülőtéren",
      subtitle: "Вокзалы и аэропорты",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="pályaudvar" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> pályaudvar</button> — ж/д вокзал</p>
       <p><button class="speak-btn" data-speak-text="repülőtér" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> repülőtér</button> — аэропорт</p>
       <p><button class="speak-btn" data-speak-text="vágány" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vágány</button> — железнодорожный путь / номер пути</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="járat" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> járat</button> — рейс / маршрут</p>
       <p><button class="speak-btn" data-speak-text="késés" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> késés</button> — опоздание / задержка</p>
       <p><button class="speak-btn" data-speak-text="átszállás" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> átszállás</button> — пересадка</p>
     </div>
   </div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 27 · 4/11 · БИЛЕТЫ",
      title: "Jegyvásárlás",
      subtitle: "Покупка билетов в кассе",
      body: `
   <p><button class="speak-btn" data-speak-text="Egy jegyet kérek Budapestre." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Egy jegyet kérek Budapestre.</button> <span style="color:#8a7a68">(Один билет в Будапешт, пожалуйста)</span></p>
   <p><button class="speak-btn" data-speak-text="Egy útra vagy retúr?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Egy útra vagy retúr?</button> <span style="color:#8a7a68">(В одну сторону или туда-обратно?)</span></p>
   <p><button class="speak-btn" data-speak-text="Retúrjegyet kérek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Retúrjegyet kérek.</button> <span style="color:#8a7a68">(Билет туда и обратно)</span></p>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 27 · 5/11 · ОТЕЛЬ",
      title: "A szállodában",
      subtitle: "Бронирование и заезд в отель",
      body: `
   <p><button class="speak-btn" data-speak-text="Szobát szeretnék foglalni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szobát szeretnék foglalni.</button> <span style="color:#8a7a68">(Я хотел бы забронировать номер)</span></p>
   <p><button class="speak-btn" data-speak-text="Hány éjszakára?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Hány éjszakára?</button> <span style="color:#8a7a68">(На сколько ночей? — суффикс -ra/re!)</span></p>
   <p><button class="speak-btn" data-speak-text="Két éjszakára, egy főre." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Két éjszakára, egy főre.</button> <span style="color:#8a7a68">(На две ночи, на одного человека)</span></p>
   <p><button class="speak-btn" data-speak-text="Benne van a reggeli az árban?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Benne van a reggeli az árban?</button> <span style="color:#8a7a68">(Завтрак включён в стоимость?)</span></p>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 27 · 6/11 · ОРИЕНТАЦИЯ",
      title: "Útbaigazítás",
      subtitle: "Как спросить и показать дорогу",
      body: `
   <p><button class="speak-btn" data-speak-text="Hogyan jutok el a múzeumba?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Hogyan jutok el a múzeumba?</button> <span style="color:#8a7a68">(Как мне добраться до музея?)</span></p>
   <p><button class="speak-btn" data-speak-text="Menjen egyenesen, aztán a második utcánál forduljon jobbra." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Menjen egyenesen, aztán a második utcánál forduljon jobbra.</button> <span style="color:#8a7a68">(Идите прямо, затем на второй улице поверните направо)</span></p>
   <p><button class="speak-btn" data-speak-text="Nincs messze, gyalog is öt perc." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nincs messze, gyalog is öt perc.</button> <span style="color:#8a7a68">(Это недалеко, пешком всего пять минут)</span></p>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 27 · 7/11 · ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "Собираем всё вместе",
      body: `
   <p><button class="speak-btn" data-speak-text="A vonat tíz percet késik." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A vonat tíz percet késik.</button> <span style="color:#8a7a68">(Поезд опаздывает на 10 минут)</span></p>
   <p><button class="speak-btn" data-speak-text="Hol van a legközelebbi metróállomás?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Hol van a legközelebbi metróállomás?</button> <span style="color:#8a7a68">(Где ближайшая станция метро?)</span></p>
   <div class="note"><b>Функциональные реплики:</b> Egy retúrjegyet kérek… · Mikor indul? · Mikor érkezik? · Melyik vágányról indul? · Át kell szállni? · Késik a vonat? · Mennyit késik? · Lekéstem a csatlakozást. · Van egy foglalásom … névre. · Két éjszakára foglaltam. · Szeretném megváltoztatni a foglalást. · Sajnos probléma van a foglalással. · Meg tudná nézni még egyszer? · Van másik szabad szoba? · Mennyibe kerül? · A reggeli benne van az árban? · Hol van a megálló? · Hogyan jutok el …? · Menjen egyenesen… · Forduljon… · Köszönöm a segítséget.</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 27 · 8/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "На рецепции отеля",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Jó napot kívánok! Foglalásom van Kovács névre." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó napot kívánok! Foglalásom van Kovács névre.</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Igen, megvan. Két éjszaka egyágyas szobában. Kérem az útlevelét!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Igen, megvan. Két éjszaka egyágyas szobában. Kérem az útlevelét!</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Tessék, itt van. Hányas a szoba?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tessék, itt van. Hányas a szoba?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="A 304-es szoba a harmadik emeleten. A kulcs. Kellemes pihenést!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A 304-es szoba a harmadik emeleten. A kulcs. Kellemes pihenést!</button></p>
   <div class="task">Задание 1. Разыграйте диалог заезда в отель со своими данными.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 27 · 9/11 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      activities: L27_ACTIVITIES,
      optionalSpeaking: L27_OPTIONAL_SPEAKING,
      body: `
   <ol class="tasklist">
     <li>Назовите 5 видов транспорта с суффиксом -val/-vel</li>
     <li>Купите в кассе билет туда-обратно до Будапешта</li>
     <li>Забронируйте номер в отеле на 3 ночи для 2 человек</li>
     <li>Спросите дорогу у прохожего до ближайшего метро</li>
     <li>Переведите: «Поезд отправляется со 2-го пути»</li>
   </ol>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 27 · 10/11 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Что дальше — заключительный урок!",
      body: `
   <p>В следующем, 28-м уроке мы подведём <b>грандиозный итог всего курса</b> от A1 до B1! Вас ждёт полный обзор грамматической системы венгерского языка и итоговый тест.</p>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 27 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 27-го урока",
      body: `
   <ul class="tick">
     <li>Транспорт: busszal, vonattal, repülővel, metróval, gyalog</li>
     <li>Касса: egy útra (в одну сторону) / retúrjegy (туда-обратно; также menettérti jegy — более формальный вариант)</li>
     <li>Отель: szobát foglalni, éjszakára (на скольких ночей)</li>
     <li>Ориентация: menjen egyenesen, forduljon jobbra/balra</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Опишите ваш идеальный план путешествия в Венгрию — 6-8 предложений. В следующем уроке — финал курса!</div>
 `
    }
  ],
  vocabulary: [
    { id: "l27_v1", hu: "pályaudvar", ru: "ж/д вокзал", category: "Транспорт", exampleSentence: "A Keleti pályaudvaron vagyok.",
        ipa: "[pɒːjɒˈudvɒr]"
    },
    { id: "l27_v2", hu: "repülőtér", ru: "аэропорт", category: "Транспорт", exampleSentence: "Kint vagyok a repülőtéren.",
        ipa: "[rˈɛpyløːtɛːr]"
    },
    { id: "l27_v3", hu: "szálloda", ru: "отель / гостиница", category: "Путешествия", exampleSentence: "Szép szállodában lakunk.",
        ipa: "[ʃɒːllˈodɒ]"
    },
    { id: "l27_v4", hu: "foglalás", ru: "бронирование", category: "Путешествия", exampleSentence: "Megvan a foglalásom.",
        ipa: "[fˈoglɒlɒːʃ]"
    }
  ],
    quiz: [
    {
      id: 2701,
      question: 'Как сказать «на автобусе» по-венгерски?',
      options: ['busszal', 'buszban', 'buszon', 'buszra'],
      correctIndex: 0,
      explanation: 'busz + -val → busszal. Звук v полностью уподобляется конечному согласному /s/, который в слове busz записывается как sz; долгий /sː/ в busszal передаётся сочетанием ssz.'
    },
    {
      id: 2702,
      question: 'Как сказать «на поезде» по-венгерски?',
      options: ['vonattal', 'vonatban', 'vonaton', 'vonatra'],
      correctIndex: 0,
      explanation: 'vonat + -val → vonattal. Ассимиляция: t + v → tt (vonatval → vonattal).'
    },
    {
      id: 2703,
      question: 'Как сказать «билет туда и обратно» по-венгерски?',
      options: ['retúrjegy', 'egy útra jegy', 'retúr jegy', 'menetjegy'],
      correctIndex: 0,
      explanation: 'Правильное слитное написание: retúrjegy (билет туда и обратно). "Egy útra" – билет в одну сторону. "Menetjegy" – просто билет (без указания направления).'
    },
    {
      id: 2704,
      question: 'Что означает слово «foglalás» в контексте путешествий?',
      options: [
        'бронирование (номера в отеле, столика и т.д.)',
        'опоздание / задержка',
        'пересадка',
        'рейс / маршрут'
      ],
      correctIndex: 0,
      explanation: '«Foglalás» – это бронирование. Например: "Szobát szeretnék foglalni." (Я хотел бы забронировать номер). "Késés" – опоздание, "átszállás" – пересадка, "járat" – рейс (урок 27, слайд 5).'
    },
    {
      id: 2705,
      question: 'Как спросить «Как мне добраться до музея?» по-венгерски?',
      options: [
        'Hogyan jutok el a múzeumba?',
        'Hol van a múzeum?',
        'Mikor nyit a múzeum?',
        'Mennyibe kerül a múzeum?'
      ],
      correctIndex: 0,
      explanation: '«Hogyan jutok el a múzeumba?» – стандартный вопрос о том, как добраться до места. "Jutok el" – форма глагола "eljut" (добраться) с приставкой "el" (урок 27, слайд 6).'
    },
    {
      id: 2706,
      question: 'Какой падеж используется для указания средства передвижения в венгерском языке (например, "на автобусе", "на поезде")?',
      options: [
        'Творительный падеж (-val/-vel)',
        'Дательный падеж (-nak/-nek)',
        'Винительный падеж (-t)',
        'Местный падеж (-ban/-ben)'
      ],
      correctIndex: 0,
      explanation: 'Для указания средства передвижения используется творительный падеж (-val/-vel): busszal (на автобусе), vonattal (на поезде). Этот падеж мы изучали в уроке 16.'
    }
  ],
  objectives: [
    { id: 'l27_name-transport', text: 'Называть виды транспорта и использовать творительный падеж (busszal).', skills: ['speaking', 'grammar', 'writing'] },
    { id: 'l27_buy-tickets', text: 'Покупать билеты (retúrjegy, menetjegy) и уточнять детали поездки.', skills: ['speaking', 'listening'] },
    { id: 'l27_book-room', text: 'Бронировать номер в гостинице (foglalás).', skills: ['speaking', 'writing'] },
    { id: 'l27_ask-directions', text: 'Спрашивать и объяснять дорогу.', skills: ['speaking', 'listening'] },
    { id: 'l27_travel-dialogue', text: 'Вести диалог на вокзале и в гостинице.', skills: ['speaking', 'listening'] },
  ],
};
