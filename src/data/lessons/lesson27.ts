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
      { id: 'l27-rp-3', speaker: 'waiter', prompt: 'Értem. Sajnos a rendszerben csak egy éjszaka szerepel.', next: 'l27-rp-4' },
      { id: 'l27-rp-4', speaker: 'learner', prompt: 'Объясни правильные вымышленные даты/длительность и попроси проверить ещё раз.', responseMode: 'selfPractice', model: 'Értem, de június 10-től 12-ig, két éjszakára foglaltam. Meg tudná nézni még egyszer?', next: 'l27-rp-5' },
      { id: 'l27-rp-5', speaker: 'waiter', prompt: 'Megnéztem még egyszer. Viszont a kért szobatípus a második éjszakára nem elérhető.', next: 'l27-rp-6' },
      { id: 'l27-rp-6', speaker: 'learner', prompt: 'Попроси предложить альтернативу.', responseMode: 'selfPractice', model: 'Értem. Van esetleg másik szabad szoba vagy más megoldás?', next: 'l27-rp-7' },
      { id: 'l27-rp-7', speaker: 'waiter', prompt: 'Igen. Tudunk adni egy másik szobát mindkét éjszakára, felár nélkül.', next: 'l27-rp-8' },
      { id: 'l27-rp-8', speaker: 'learner', prompt: 'Задай один практический вопрос о цене, завтраке или времени выезда.', responseMode: 'selfPractice', model: 'Köszönöm. És a reggeli benne van az árban?', next: 'l27-rp-9' },
      { id: 'l27-rp-9', speaker: 'waiter', prompt: 'Igen, ebben a csomagban a reggeli is benne van az árban.', next: 'l27-rp-10' },
      { id: 'l27-rp-10', speaker: 'learner', prompt: 'Прими или отклони вариант вежливо.', responseMode: 'selfPractice', model: 'Rendben, akkor elfogadom ezt a megoldást.', next: 'l27-rp-11' },
      { id: 'l27-rp-11', speaker: 'waiter', prompt: 'Rendben, módosítottam a foglalást két éjszakára. Van még kérdése?', next: 'l27-rp-12' },
      { id: 'l27-rp-12', speaker: 'learner', prompt: 'Вежливо заверши.', responseMode: 'selfPractice', model: 'Nincs több kérdésem, köszönöm szépen a segítséget. Viszontlátásra!' },
    ],
  },
  rolePlayB: {
    title: 'RolePlay 2: задержка поезда и пропущенная пересадка',
    partnerLabel: 'Сотрудник вокзала',
    completionMessage: 'Маршрут после задержки уточнён: новое время, путь, альтернатива и подтверждение решения.',
    startTurnId: 'l27-rpb-1',
    turns: [
      { id: 'l27-rpb-1', speaker: 'waiter', prompt: 'Sajnos a vonata harminc percet késik, ezért valószínűleg lekési a csatlakozást.', next: 'l27-rpb-2' },
      { id: 'l27-rpb-2', speaker: 'learner', prompt: 'Спроси о новом времени и следующей пересадке.', responseMode: 'selfPractice', model: 'Értem. Mikor indul tovább a vonat, és melyik csatlakozást érhetem el?', next: 'l27-rpb-3' },
      { id: 'l27-rpb-3', speaker: 'waiter', prompt: 'A következő csatlakozás 13:20-kor indul.', next: 'l27-rpb-4' },
      { id: 'l27-rpb-4', speaker: 'learner', prompt: 'Спроси, с какого пути он отправляется.', responseMode: 'selfPractice', model: 'Rendben. Melyik vágányról indul?', next: 'l27-rpb-5' },
      { id: 'l27-rpb-5', speaker: 'waiter', prompt: 'A hatodik vágányról indul.', next: 'l27-rpb-6' },
      { id: 'l27-rpb-6', speaker: 'learner', prompt: 'Уточни, есть ли другой поезд.', responseMode: 'selfPractice', model: 'Értem. Van esetleg másik vonat, amellyel hamarabb odaérhetek?', next: 'l27-rpb-7' },
      { id: 'l27-rpb-7', speaker: 'waiter', prompt: 'Igen, van egy másik vonat: 13:05-kor indul a negyedik vágányról, de át kell szállnia.', next: 'l27-rpb-8' },
      { id: 'l27-rpb-8', speaker: 'learner', prompt: 'Подтверди выбранное решение своими словами.', responseMode: 'selfPractice', model: 'Jól értem? A 13:05-ös vonatot választom a negyedik vágányról, és át kell szállnom.', next: 'l27-rpb-9' },
      { id: 'l27-rpb-9', speaker: 'waiter', prompt: 'Igen, pontosan. Ez a leggyorsabb lehetőség ebben a helyzetben.', next: 'l27-rpb-10' },
      { id: 'l27-rpb-10', speaker: 'learner', prompt: 'Вежливо поблагодари.', responseMode: 'selfPractice', model: 'Rendben, köszönöm szépen a segítséget.' },
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
      eyebrow: "УРОК 27 · 1/11 · ПУТЕШЕСТВИЯ",
      title: "Utazás és közlekedés",
      subtitle: "Карта урока: транспорт, билет, задержка, отель и дорога",
      note: 'Цель урока — решить типичные задачи поездки: выбрать транспорт, купить или изменить билет, уточнить задержку, заселиться в отель и спросить дорогу.',
      warn: 'Используй вымышленные даты, имена бронирования и маршруты. Реальные тарифы и условия перевозчика или отеля проверяются отдельно.',
      task: 'Выбери один вымышленный маршрут и используй одинаковые данные во всех упражнениях урока.',
      body: `
        <p>Практический разговор в поездке строится вокруг цели, точной детали, одного вопроса и подтверждения решения.</p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Шесть ситуаций урока</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Задача</th><th>Модель</th></tr>
          <tr><td>транспорт</td><td>сказать, на чём едешь</td><td><button class="speak-btn" data-speak-text="Vonattal utazom Pécsre." data-speak-lang="hu-HU">Vonattal utazom Pécsre.</button></td></tr>
          <tr><td>билет</td><td>назвать направление и тип билета</td><td><button class="speak-btn" data-speak-text="Egy retúrjegyet kérek Pécsre." data-speak-lang="hu-HU">Egy retúrjegyet kérek Pécsre.</button></td></tr>
          <tr><td>отправление</td><td>уточнить время и путь</td><td><button class="speak-btn" data-speak-text="Mikor indul, és melyik vágányról?" data-speak-lang="hu-HU">Mikor indul, és melyik vágányról?</button></td></tr>
          <tr><td>задержка и пересадка</td><td>сообщить проблему и попросить альтернативу</td><td><button class="speak-btn" data-speak-text="Lekéstem a csatlakozást. Van esetleg másik vonat?" data-speak-lang="hu-HU">Lekéstem a csatlakozást. Van esetleg másik vonat?</button></td></tr>
          <tr><td>отель</td><td>назвать имя и длительность бронирования</td><td><button class="speak-btn" data-speak-text="Van egy foglalásom Kovács névre, két éjszakára." data-speak-lang="hu-HU">Van egy foglalásom Kovács névre, két éjszakára.</button></td></tr>
          <tr><td>дорога</td><td>спросить маршрут и понять последовательность</td><td><button class="speak-btn" data-speak-text="Hogyan jutok el a pályaudvarra?" data-speak-lang="hu-HU">Hogyan jutok el a pályaudvarra?</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Маршрут обучения</h4>
        <table class="conj">
          <tr><th>Этап</th><th>Что осваиваем</th><th>Пример</th></tr>
          <tr><td>1</td><td>средство передвижения и ассимиляция</td><td><button class="speak-btn" data-speak-text="busszal, vonattal, repülővel" data-speak-lang="hu-HU">busszal, vonattal, repülővel</button></td></tr>
          <tr><td>2</td><td>билет и цена</td><td><button class="speak-btn" data-speak-text="Mennyibe kerül a jegy?" data-speak-lang="hu-HU">Mennyibe kerül a jegy?</button></td></tr>
          <tr><td>3</td><td>время, путь и задержка</td><td><button class="speak-btn" data-speak-text="Mennyit késik a vonat?" data-speak-lang="hu-HU">Mennyit késik a vonat?</button></td></tr>
          <tr><td>4</td><td>бронирование и условия отеля</td><td><button class="speak-btn" data-speak-text="A reggeli benne van az árban?" data-speak-lang="hu-HU">A reggeli benne van az árban?</button></td></tr>
          <tr><td>5</td><td>ошибка и повторная проверка</td><td><button class="speak-btn" data-speak-text="Meg tudná nézni még egyszer?" data-speak-lang="hu-HU">Meg tudná nézni még egyszer?</button></td></tr>
          <tr><td>6</td><td>маршрут и ориентиры</td><td><button class="speak-btn" data-speak-text="Menjen egyenesen, aztán forduljon balra." data-speak-lang="hu-HU">Menjen egyenesen, aztán forduljon balra.</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Стратегия практического разговора</h4>
        <table class="conj">
          <tr><th>Шаг</th><th>Действие</th><th>Модель</th></tr>
          <tr><td>1</td><td>назвать цель</td><td><button class="speak-btn" data-speak-text="Szeretnék jegyet venni." data-speak-lang="hu-HU">Szeretnék jegyet venni.</button></td></tr>
          <tr><td>2</td><td>добавить точную деталь</td><td><button class="speak-btn" data-speak-text="Holnap reggel szeretnék indulni." data-speak-lang="hu-HU">Holnap reggel szeretnék indulni.</button></td></tr>
          <tr><td>3</td><td>задать практический вопрос</td><td><button class="speak-btn" data-speak-text="Mennyibe kerül a jegy?" data-speak-lang="hu-HU">Mennyibe kerül a jegy?</button></td></tr>
          <tr><td>4</td><td>уточнить непонятное</td><td><button class="speak-btn" data-speak-text="Kérem, mondja még egyszer." data-speak-lang="hu-HU">Kérem, mondja még egyszer.</button></td></tr>
          <tr><td>5</td><td>подтвердить решение</td><td><button class="speak-btn" data-speak-text="Rendben, akkor ezt választom." data-speak-lang="hu-HU">Rendben, akkor ezt választom.</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Вежливые формы</h4>
        <table class="conj">
          <tr><th>Нейтрально</th><th>Вежливо</th></tr>
          <tr><td><button class="speak-btn" data-speak-text="Nézd meg még egyszer." data-speak-lang="hu-HU">Nézd meg még egyszer.</button></td><td><button class="speak-btn" data-speak-text="Meg tudná nézni még egyszer?" data-speak-lang="hu-HU">Meg tudná nézni még egyszer?</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="Mondd meg, mikor indul." data-speak-lang="hu-HU">Mondd meg, mikor indul.</button></td><td><button class="speak-btn" data-speak-text="Meg tudná mondani, mikor indul?" data-speak-lang="hu-HU">Meg tudná mondani, mikor indul?</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Can-Do после урока</h4>
        <ul class="tick">
          <li>назвать транспорт и сказать, на чём еду;</li>
          <li>купить билет и уточнить цену, время и путь;</li>
          <li>объяснить задержку или пропущенную пересадку;</li>
          <li>назвать данные бронирования и уточнить условия отеля;</li>
          <li>сообщить об ошибке и попросить проверить ещё раз;</li>
          <li>спросить дорогу и понять последовательность действий.</li>
        </ul>

        <div class="note">Граница урока: тарифы, визовые требования и юридические условия бронирования нужно проверять по актуальным официальным источникам.</div>
      `,
    },
    {
      id: 2,
      eyebrow: "УРОК 27 · 2/11 · ТРАНСПОРТ",
      title: "Közlekedési eszközök",
      subtitle: "Средство передвижения: гармония гласных, ассимиляция и выбор конструкции",
      note: 'Для значения «на чём?» используется окончание -val/-vel. Сначала выбери вариант по гармонии гласных, затем проверь конечный звук слова.',
      warn: 'Не смешивай средство, место и направление: busszal — на автобусе как способом; buszon — в автобусе; buszra — на автобус, направление посадки.',
      task: 'Составь восемь предложений: четыре о средстве передвижения, два вопроса, одно с gyalog и одно сравнение трёх форм.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Шаг 1. Гармония гласных</h4>
        <table class="conj">
          <tr><th>Тип слова</th><th>Окончание</th><th>Пример</th></tr>
          <tr><td>гласные заднего ряда</td><td><span class="hu-word">-val</span></td><td><button class="speak-btn" data-speak-text="autóval" data-speak-lang="hu-HU">autóval</button></td></tr>
          <tr><td>гласные переднего ряда</td><td><span class="hu-word">-vel</span></td><td><button class="speak-btn" data-speak-text="repülővel" data-speak-lang="hu-HU">repülővel</button></td></tr>
        </table>
        <div class="note">После гласной начальный согласный окончания сохраняется: <button class="speak-btn" data-speak-text="autóval, metróval, repülővel, taxival" data-speak-lang="hu-HU">autóval, metróval, repülővel, taxival</button>.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Шаг 2. Полная ассимиляция после согласной</h4>
        <p>Начальный согласный окончания уподобляется конечному согласному основы, который на письме удваивается.</p>
        <table class="conj">
          <tr><th>Слово</th><th>Разбор</th><th>Форма</th></tr>
          <tr><td><button class="speak-btn" data-speak-text="busz" data-speak-lang="hu-HU">busz</button></td><td><span class="hu-word">busz + -val</span></td><td><button class="speak-btn" data-speak-text="busszal" data-speak-lang="hu-HU">busszal</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="vonat" data-speak-lang="hu-HU">vonat</button></td><td><span class="hu-word">vonat + -val</span></td><td><button class="speak-btn" data-speak-text="vonattal" data-speak-lang="hu-HU">vonattal</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="villamos" data-speak-lang="hu-HU">villamos</button></td><td><span class="hu-word">villamos + -val</span></td><td><button class="speak-btn" data-speak-text="villamossal" data-speak-lang="hu-HU">villamossal</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="kerékpár" data-speak-lang="hu-HU">kerékpár</button></td><td><span class="hu-word">kerékpár + -ral</span></td><td><button class="speak-btn" data-speak-text="kerékpárral" data-speak-lang="hu-HU">kerékpárral</button></td></tr>
        </table>
        <div class="note">В <button class="speak-btn" data-speak-text="busszal" data-speak-lang="hu-HU">busszal</button> конечный звук слова <button class="speak-btn" data-speak-text="busz" data-speak-lang="hu-HU">busz</button> становится долгим; на письме используется <span class="hu-word">ssz</span>.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Транспорт в предложении</h4>
        <table class="conj">
          <tr><th>Транспорт</th><th>Форма</th><th>Пример</th></tr>
          <tr><td><button class="speak-btn" data-speak-text="busz" data-speak-lang="hu-HU">busz</button></td><td><button class="speak-btn" data-speak-text="busszal" data-speak-lang="hu-HU">busszal</button></td><td><button class="speak-btn" data-speak-text="Busszal megyek munkába." data-speak-lang="hu-HU">Busszal megyek munkába.</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="vonat" data-speak-lang="hu-HU">vonat</button></td><td><button class="speak-btn" data-speak-text="vonattal" data-speak-lang="hu-HU">vonattal</button></td><td><button class="speak-btn" data-speak-text="Vonattal utazom Bécsbe." data-speak-lang="hu-HU">Vonattal utazom Bécsbe.</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="villamos" data-speak-lang="hu-HU">villamos</button></td><td><button class="speak-btn" data-speak-text="villamossal" data-speak-lang="hu-HU">villamossal</button></td><td><button class="speak-btn" data-speak-text="Villamossal megyünk a belvárosba." data-speak-lang="hu-HU">Villamossal megyünk a belvárosba.</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="metró" data-speak-lang="hu-HU">metró</button></td><td><button class="speak-btn" data-speak-text="metróval" data-speak-lang="hu-HU">metróval</button></td><td><button class="speak-btn" data-speak-text="Metróval gyorsabb." data-speak-lang="hu-HU">Metróval gyorsabb.</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="autó" data-speak-lang="hu-HU">autó</button></td><td><button class="speak-btn" data-speak-text="autóval" data-speak-lang="hu-HU">autóval</button></td><td><button class="speak-btn" data-speak-text="Autóval érkeztem." data-speak-lang="hu-HU">Autóval érkeztem.</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="repülő" data-speak-lang="hu-HU">repülő</button></td><td><button class="speak-btn" data-speak-text="repülővel" data-speak-lang="hu-HU">repülővel</button></td><td><button class="speak-btn" data-speak-text="Repülővel utazunk." data-speak-lang="hu-HU">Repülővel utazunk.</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="taxi" data-speak-lang="hu-HU">taxi</button></td><td><button class="speak-btn" data-speak-text="taxival" data-speak-lang="hu-HU">taxival</button></td><td><button class="speak-btn" data-speak-text="Taxival megyek a szállodába." data-speak-lang="hu-HU">Taxival megyek a szállodába.</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="kerékpár" data-speak-lang="hu-HU">kerékpár</button></td><td><button class="speak-btn" data-speak-text="kerékpárral" data-speak-lang="hu-HU">kerékpárral</button></td><td><button class="speak-btn" data-speak-text="Kerékpárral járok dolgozni." data-speak-lang="hu-HU">Kerékpárral járok dolgozni.</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Пешком</h4>
        <p><button class="speak-btn" data-speak-text="Gyalog megyek." data-speak-lang="hu-HU">Gyalog megyek.</button></p>
        <p><button class="speak-btn" data-speak-text="A szálloda gyalog tíz percre van." data-speak-lang="hu-HU">A szálloda gyalog tíz percre van.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как спросить</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Вопрос</th><th>Ответ</th></tr>
          <tr><td>неформально</td><td><button class="speak-btn" data-speak-text="Mivel mész?" data-speak-lang="hu-HU">Mivel mész?</button></td><td><button class="speak-btn" data-speak-text="Busszal megyek." data-speak-lang="hu-HU">Busszal megyek.</button></td></tr>
          <tr><td>вежливо</td><td><button class="speak-btn" data-speak-text="Mivel utazik?" data-speak-lang="hu-HU">Mivel utazik?</button></td><td><button class="speak-btn" data-speak-text="Vonattal utazom." data-speak-lang="hu-HU">Vonattal utazom.</button></td></tr>
          <tr><td>прошедшая поездка</td><td><button class="speak-btn" data-speak-text="Mivel jöttél?" data-speak-lang="hu-HU">Mivel jöttél?</button></td><td><button class="speak-btn" data-speak-text="Autóval jöttem." data-speak-lang="hu-HU">Autóval jöttem.</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Средство, место или направление</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Значение</th><th>Пример</th></tr>
          <tr><td><button class="speak-btn" data-speak-text="busszal" data-speak-lang="hu-HU">busszal</button></td><td>средство</td><td><button class="speak-btn" data-speak-text="Busszal megyek." data-speak-lang="hu-HU">Busszal megyek.</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="buszon" data-speak-lang="hu-HU">buszon</button></td><td>место</td><td><button class="speak-btn" data-speak-text="A buszon vagyok." data-speak-lang="hu-HU">A buszon vagyok.</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="buszra" data-speak-lang="hu-HU">buszra</button></td><td>направление посадки</td><td><button class="speak-btn" data-speak-text="Felszállok a buszra." data-speak-lang="hu-HU">Felszállok a buszra.</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr><td>buszval</td><td><button class="speak-btn" data-speak-text="busszal" data-speak-lang="hu-HU">busszal</button></td></tr>
          <tr><td>vonatval</td><td><button class="speak-btn" data-speak-text="vonattal" data-speak-lang="hu-HU">vonattal</button></td></tr>
          <tr><td>repülőval</td><td><button class="speak-btn" data-speak-text="repülővel" data-speak-lang="hu-HU">repülővel</button></td></tr>
          <tr><td>gyaloggal</td><td><button class="speak-btn" data-speak-text="gyalog" data-speak-lang="hu-HU">gyalog</button></td></tr>
          <tr><td>Busszal vagyok. — если имеется в виду местонахождение</td><td><button class="speak-btn" data-speak-text="A buszon vagyok." data-speak-lang="hu-HU">A buszon vagyok.</button></td></tr>
          <tr><td>Buszon megyek munkába. — если важно средство</td><td><button class="speak-btn" data-speak-text="Busszal megyek munkába." data-speak-lang="hu-HU">Busszal megyek munkába.</button></td></tr>
        </table>
      `,
    },
    {
      id: 3,
      eyebrow: "УРОК 27 · 3/11 · ВОКЗАЛ И АЭРОПОРТ",
      title: "A pályaudvaron és a repülőtéren",
      subtitle: "Информация об отправлении, задержке, пересадке и выходе на посадку",
      note: 'Сначала определи тип места: железнодорожный вокзал, станция или аэропорт. Затем ищи четыре ключевых элемента: время, номер пути или выхода, задержка и необходимость пересадки.',
      warn: 'Номер пути, выход на посадку и расписание могут измениться. В реальной поездке проверяй электронное табло и объявления.',
      task: 'Разыграй две ситуации: задержка поезда с пропущенной пересадкой и изменение выхода на посадку в аэропорту.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Места и информационные точки</h4>
        <table class="conj">
          <tr><th>Венгерское слово</th><th>Значение</th><th>Рабочая модель</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="pályaudvar" data-speak-lang="hu-HU">pályaudvar</button></td>
            <td>крупный железнодорожный вокзал</td>
            <td><button class="speak-btn" data-speak-text="A Keleti pályaudvarról indulunk." data-speak-lang="hu-HU">A Keleti pályaudvarról indulunk.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="vasútállomás" data-speak-lang="hu-HU">vasútállomás</button></td>
            <td>железнодорожная станция</td>
            <td><button class="speak-btn" data-speak-text="A vasútállomás a városközpont mellett van." data-speak-lang="hu-HU">A vasútállomás a városközpont mellett van.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="repülőtér" data-speak-lang="hu-HU">repülőtér</button></td>
            <td>аэропорт</td>
            <td><button class="speak-btn" data-speak-text="Mikor kell kiérni a repülőtérre?" data-speak-lang="hu-HU">Mikor kell kiérni a repülőtérre?</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kijelző" data-speak-lang="hu-HU">kijelző</button></td>
            <td>электронное табло или дисплей</td>
            <td><button class="speak-btn" data-speak-text="Ellenőrizze a kijelzőt." data-speak-lang="hu-HU">Ellenőrizze a kijelzőt.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Путь, платформа и выход на посадку</h4>
        <table class="conj">
          <tr><th>Слово</th><th>Что обозначает</th><th>Вопрос</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="vágány" data-speak-lang="hu-HU">vágány</button></td>
            <td>железнодорожный путь / номер пути</td>
            <td><button class="speak-btn" data-speak-text="Melyik vágányról indul a vonat?" data-speak-lang="hu-HU">Melyik vágányról indul a vonat?</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="peron" data-speak-lang="hu-HU">peron</button></td>
            <td>платформа, где стоят пассажиры</td>
            <td><button class="speak-btn" data-speak-text="Hol van a peron?" data-speak-lang="hu-HU">Hol van a peron?</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="beszállókapu" data-speak-lang="hu-HU">beszállókapu</button></td>
            <td>выход на посадку в аэропорту</td>
            <td><button class="speak-btn" data-speak-text="Hányas kaputól indul a járat?" data-speak-lang="hu-HU">Hányas kaputól indul a járat?</button></td>
          </tr>
        </table>

        <div class="note">
          Сравни:
          <button class="speak-btn" data-speak-text="A vonat a harmadik vágányról indul." data-speak-lang="hu-HU">A vonat a harmadik vágányról indul.</button>
          —
          <button class="speak-btn" data-speak-text="A vonat a harmadik vágányon áll." data-speak-lang="hu-HU">A vonat a harmadik vágányon áll.</button>
          Первая форма отвечает на вопрос «откуда отправляется», вторая — «где находится».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Отправление и прибытие</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Модель</th></tr>
          <tr>
            <td>спросить время отправления</td>
            <td><button class="speak-btn" data-speak-text="Mikor indul a vonat?" data-speak-lang="hu-HU">Mikor indul a vonat?</button></td>
          </tr>
          <tr>
            <td>спросить время прибытия</td>
            <td><button class="speak-btn" data-speak-text="Mikor érkezik meg?" data-speak-lang="hu-HU">Mikor érkezik meg?</button></td>
          </tr>
          <tr>
            <td>уточнить пункт назначения</td>
            <td><button class="speak-btn" data-speak-text="Hová megy ez a járat?" data-speak-lang="hu-HU">Hová megy ez a járat?</button></td>
          </tr>
          <tr>
            <td>уточнить исходный пункт</td>
            <td><button class="speak-btn" data-speak-text="Honnan indul?" data-speak-lang="hu-HU">Honnan indul?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Járat: рейс, маршрут или регулярное сообщение</h4>
        <p><button class="speak-btn" data-speak-text="Melyik járattal utazik?" data-speak-lang="hu-HU">Melyik járattal utazik?</button></p>
        <p><button class="speak-btn" data-speak-text="A járat húsz perc késéssel indul." data-speak-lang="hu-HU">A járat húsz perc késéssel indul.</button></p>
        <p><button class="speak-btn" data-speak-text="Megváltozott a beszállókapu." data-speak-lang="hu-HU">Megváltozott a beszállókapu.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Задержка: существительное и глагол</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Употребление</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="késés" data-speak-lang="hu-HU">késés</button></td>
            <td>существительное «задержка»</td>
            <td><button class="speak-btn" data-speak-text="Mennyi a késés?" data-speak-lang="hu-HU">Mennyi a késés?</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="késik" data-speak-lang="hu-HU">késik</button></td>
            <td>глагол «опаздывает»</td>
            <td><button class="speak-btn" data-speak-text="A vonat huszonöt percet késik." data-speak-lang="hu-HU">A vonat huszonöt percet késik.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="késéssel" data-speak-lang="hu-HU">késéssel</button></td>
            <td>«с задержкой»</td>
            <td><button class="speak-btn" data-speak-text="A járat késéssel érkezik." data-speak-lang="hu-HU">A járat késéssel érkezik.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Пересадка и пропущенное соединение</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Реплика</th></tr>
          <tr>
            <td>спросить, нужна ли пересадка</td>
            <td><button class="speak-btn" data-speak-text="Át kell szállni?" data-speak-lang="hu-HU">Át kell szállni?</button></td>
          </tr>
          <tr>
            <td>спросить место пересадки</td>
            <td><button class="speak-btn" data-speak-text="Hol kell átszállni?" data-speak-lang="hu-HU">Hol kell átszállni?</button></td>
          </tr>
          <tr>
            <td>назвать пересадку существительным</td>
            <td><button class="speak-btn" data-speak-text="Az átszállás Pécsen lesz." data-speak-lang="hu-HU">Az átszállás Pécsen lesz.</button></td>
          </tr>
          <tr>
            <td>сообщить о пропущенном соединении</td>
            <td><button class="speak-btn" data-speak-text="Lekéstem a csatlakozást." data-speak-lang="hu-HU">Lekéstem a csatlakozást.</button></td>
          </tr>
          <tr>
            <td>попросить альтернативу</td>
            <td><button class="speak-btn" data-speak-text="Van esetleg másik vonat?" data-speak-lang="hu-HU">Van esetleg másik vonat?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Практический диалог на вокзале</h4>
        <div class="dialogue">
          <p><b>Utas:</b> <button class="speak-btn" data-speak-text="Elnézést, mennyit késik a pécsi vonat?" data-speak-lang="hu-HU">Elnézést, mennyit késik a pécsi vonat?</button></p>
          <p><b>Dolgozó:</b> <button class="speak-btn" data-speak-text="Várhatóan huszonöt percet késik." data-speak-lang="hu-HU">Várhatóan huszonöt percet késik.</button></p>
          <p><b>Utas:</b> <button class="speak-btn" data-speak-text="Akkor valószínűleg lekésem a csatlakozást. Van esetleg másik vonat?" data-speak-lang="hu-HU">Akkor valószínűleg lekésem a csatlakozást. Van esetleg másik vonat?</button></p>
          <p><b>Dolgozó:</b> <button class="speak-btn" data-speak-text="Igen. A következő vonat tizenhárom óra öt perckor indul a negyedik vágányról." data-speak-lang="hu-HU">Igen. A következő vonat tizenhárom óra öt perckor indul a negyedik vágányról.</button></p>
          <p><b>Utas:</b> <button class="speak-btn" data-speak-text="Jól értem? A negyedik vágányról indul?" data-speak-lang="hu-HU">Jól értem? A negyedik vágányról indul?</button></p>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Melyik vágányon indul a vonat?</td>
            <td><button class="speak-btn" data-speak-text="Melyik vágányról indul a vonat?" data-speak-lang="hu-HU">Melyik vágányról indul a vonat?</button></td>
          </tr>
          <tr>
            <td>Mennyibe késik a vonat?</td>
            <td><button class="speak-btn" data-speak-text="Mennyit késik a vonat?" data-speak-lang="hu-HU">Mennyit késik a vonat?</button></td>
          </tr>
          <tr>
            <td>Hol átszállni?</td>
            <td><button class="speak-btn" data-speak-text="Hol kell átszállni?" data-speak-lang="hu-HU">Hol kell átszállni?</button></td>
          </tr>
          <tr>
            <td>Lekéstem az átszállást. — если речь о следующем поезде</td>
            <td><button class="speak-btn" data-speak-text="Lekéstem a csatlakozást." data-speak-lang="hu-HU">Lekéstem a csatlakozást.</button></td>
          </tr>
          <tr>
            <td>Melyik vágány a repülő?</td>
            <td><button class="speak-btn" data-speak-text="Hányas kaputól indul a járat?" data-speak-lang="hu-HU">Hányas kaputól indul a járat?</button></td>
          </tr>
        </table>
      `,
    },
    {
      id: 4,
      eyebrow: "УРОК 27 · 4/11 · БИЛЕТЫ",
      title: "Jegyvásárlás",
      subtitle: "Маршрут покупки: направление, дата, тип билета, пассажир и оплата",
      note: 'Хорошая покупка билета строится по порядку: куда → когда → в одну сторону или туда-обратно → кто едет → класс → цена → способ оплаты → подтверждение.',
      warn: 'Названия тарифов, скидок, возврата и изменения билета зависят от перевозчика. На слайде тренируется язык диалога, а не конкретные коммерческие правила.',
      task: 'Разыграй покупку билета по вымышленному маршруту. Измени пункт назначения, дату, тип билета и пассажира, но сохрани структуру разговора.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Начало покупки</h4>
        <table class="conj">
          <tr><th>Кассир</th><th>Пассажир</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Jó napot kívánok! Hová szeretne utazni?" data-speak-lang="hu-HU">Jó napot kívánok! Hová szeretne utazni?</button></td>
            <td><button class="speak-btn" data-speak-text="Jó napot kívánok! Pécsre szeretnék utazni." data-speak-lang="hu-HU">Jó napot kívánok! Pécsre szeretnék utazni.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как попросить билет</h4>
        <p><button class="speak-btn" data-speak-text="Egy jegyet kérek Budapestre." data-speak-lang="hu-HU">Egy jegyet kérek Budapestre.</button></p>
        <p><button class="speak-btn" data-speak-text="Budapestre szeretnék egy jegyet." data-speak-lang="hu-HU">Budapestre szeretnék egy jegyet.</button></p>
        <p><button class="speak-btn" data-speak-text="Egy retúrjegyet kérek Pécsre." data-speak-lang="hu-HU">Egy retúrjegyet kérek Pécsre.</button></p>

        <div class="note">
          Формы направления запоминай вместе с названием города:
          <button class="speak-btn" data-speak-text="Budapestre, Pécsre, Debrecenbe, Bécsbe" data-speak-lang="hu-HU">Budapestre, Pécsre, Debrecenbe, Bécsbe</button>.
          Нельзя автоматически использовать одно окончание со всеми городами.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">В одну сторону или туда-обратно</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Употребление</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Egy útra vagy retúr?" data-speak-lang="hu-HU">Egy útra vagy retúr?</button></td>
            <td>короткий естественный вопрос кассира</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Egy útra vagy retúrjegyet szeretne?" data-speak-lang="hu-HU">Egy útra vagy retúrjegyet szeretne?</button></td>
            <td>полный вежливый вопрос</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Egy útra szóló jegyet kérek." data-speak-lang="hu-HU">Egy útra szóló jegyet kérek.</button></td>
            <td>билет в одну сторону</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Retúrjegyet kérek." data-speak-lang="hu-HU">Retúrjegyet kérek.</button></td>
            <td>обычное слово для билета туда и обратно</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Menettérti jegyet kérek." data-speak-lang="hu-HU">Menettérti jegyet kérek.</button></td>
            <td>более формальный вариант</td>
          </tr>
        </table>

        <div class="note">
          <button class="speak-btn" data-speak-text="retúrjegy" data-speak-lang="hu-HU">retúrjegy</button>
          пишется слитно.
          В сочетании
          <button class="speak-btn" data-speak-text="menettérti jegy" data-speak-lang="hu-HU">menettérti jegy</button>
          два слова.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Дата и время поездки</h4>
        <table class="conj">
          <tr><th>Кассир</th><th>Пассажир</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mikor szeretne utazni?" data-speak-lang="hu-HU">Mikor szeretne utazni?</button></td>
            <td><button class="speak-btn" data-speak-text="Holnap reggel szeretnék indulni." data-speak-lang="hu-HU">Holnap reggel szeretnék indulni.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mikor szeretne visszajönni?" data-speak-lang="hu-HU">Mikor szeretne visszajönni?</button></td>
            <td><button class="speak-btn" data-speak-text="Vasárnap este szeretnék visszajönni." data-speak-lang="hu-HU">Vasárnap este szeretnék visszajönni.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Melyik vonattal szeretne utazni?" data-speak-lang="hu-HU">Melyik vonattal szeretne utazni?</button></td>
            <td><button class="speak-btn" data-speak-text="A kilenc óra tíz perces vonattal." data-speak-lang="hu-HU">A kilenc óra tíz perces vonattal.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Пассажир и класс</h4>
        <table class="conj">
          <tr><th>Задача</th><th>Реплика</th></tr>
          <tr>
            <td>один взрослый</td>
            <td><button class="speak-btn" data-speak-text="Egy felnőttjegyet kérek." data-speak-lang="hu-HU">Egy felnőttjegyet kérek.</button></td>
          </tr>
          <tr>
            <td>взрослый и ребёнок</td>
            <td><button class="speak-btn" data-speak-text="Egy felnőtt- és egy gyerekjegyet kérek." data-speak-lang="hu-HU">Egy felnőtt- és egy gyerekjegyet kérek.</button></td>
          </tr>
          <tr>
            <td>уточнить возраст ребёнка</td>
            <td><button class="speak-btn" data-speak-text="Hány éves a gyerek?" data-speak-lang="hu-HU">Hány éves a gyerek?</button></td>
          </tr>
          <tr>
            <td>второй класс</td>
            <td><button class="speak-btn" data-speak-text="Másodosztályra kérem." data-speak-lang="hu-HU">Másodosztályra kérem.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Цена и оплата</h4>
        <p><button class="speak-btn" data-speak-text="Mennyibe kerül a jegy?" data-speak-lang="hu-HU">Mennyibe kerül a jegy?</button></p>
        <p><button class="speak-btn" data-speak-text="Lehet bankkártyával fizetni?" data-speak-lang="hu-HU">Lehet bankkártyával fizetni?</button></p>
        <p><button class="speak-btn" data-speak-text="Kérek számlát is." data-speak-lang="hu-HU">Kérek számlát is.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Полный учебный диалог</h4>
        <div class="dialogue">
          <p><b>Pénztáros:</b> <button class="speak-btn" data-speak-text="Jó napot kívánok! Hová szeretne utazni?" data-speak-lang="hu-HU">Jó napot kívánok! Hová szeretne utazni?</button></p>
          <p><b>Utas:</b> <button class="speak-btn" data-speak-text="Jó napot kívánok! Pécsre szeretnék utazni. Egy retúrjegyet kérek." data-speak-lang="hu-HU">Jó napot kívánok! Pécsre szeretnék utazni. Egy retúrjegyet kérek.</button></p>
          <p><b>Pénztáros:</b> <button class="speak-btn" data-speak-text="Mikor szeretne utazni, és mikor jönne vissza?" data-speak-lang="hu-HU">Mikor szeretne utazni, és mikor jönne vissza?</button></p>
          <p><b>Utas:</b> <button class="speak-btn" data-speak-text="Holnap reggel indulnék, és vasárnap este jönnék vissza." data-speak-lang="hu-HU">Holnap reggel indulnék, és vasárnap este jönnék vissza.</button></p>
          <p><b>Pénztáros:</b> <button class="speak-btn" data-speak-text="Egy felnőtt részére, másodosztályra?" data-speak-lang="hu-HU">Egy felnőtt részére, másodosztályra?</button></p>
          <p><b>Utas:</b> <button class="speak-btn" data-speak-text="Igen. Mennyibe kerül a jegy?" data-speak-lang="hu-HU">Igen. Mennyibe kerül a jegy?</button></p>
          <p><b>Utas:</b> <button class="speak-btn" data-speak-text="Lehet bankkártyával fizetni?" data-speak-lang="hu-HU">Lehet bankkártyával fizetni?</button></p>
          <p><b>Utas:</b> <button class="speak-btn" data-speak-text="Jól értem? Holnap reggel indulok, és vasárnap este jövök vissza." data-speak-lang="hu-HU">Jól értem? Holnap reggel indulok, és vasárnap este jövök vissza.</button></p>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Если нужно уточнить или изменить</h4>
        <p><button class="speak-btn" data-speak-text="Kérem, mondja még egyszer." data-speak-lang="hu-HU">Kérem, mondja még egyszer.</button></p>
        <p><button class="speak-btn" data-speak-text="Meg tudná mutatni a kijelzőn?" data-speak-lang="hu-HU">Meg tudná mutatni a kijelzőn?</button></p>
        <p><button class="speak-btn" data-speak-text="Szeretném megváltoztatni az indulás időpontját." data-speak-lang="hu-HU">Szeretném megváltoztatni az indulás időpontját.</button></p>
        <p><button class="speak-btn" data-speak-text="Milyen feltételekkel módosítható a jegy?" data-speak-lang="hu-HU">Milyen feltételekkel módosítható a jegy?</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Egy jegy kérek.</td>
            <td><button class="speak-btn" data-speak-text="Egy jegyet kérek." data-speak-lang="hu-HU">Egy jegyet kérek.</button></td>
          </tr>
          <tr>
            <td>Budapestbe szeretnék utazni.</td>
            <td><button class="speak-btn" data-speak-text="Budapestre szeretnék utazni." data-speak-lang="hu-HU">Budapestre szeretnék utazni.</button></td>
          </tr>
          <tr>
            <td>Bécsre szeretnék utazni.</td>
            <td><button class="speak-btn" data-speak-text="Bécsbe szeretnék utazni." data-speak-lang="hu-HU">Bécsbe szeretnék utazni.</button></td>
          </tr>
          <tr>
            <td>retúr jegyet kérek</td>
            <td><button class="speak-btn" data-speak-text="Retúrjegyet kérek." data-speak-lang="hu-HU">Retúrjegyet kérek.</button></td>
          </tr>
          <tr>
            <td>Egy útra jegyet kérek.</td>
            <td><button class="speak-btn" data-speak-text="Egy útra szóló jegyet kérek." data-speak-lang="hu-HU">Egy útra szóló jegyet kérek.</button></td>
          </tr>
          <tr>
            <td>Mennyi kerül a jegy?</td>
            <td><button class="speak-btn" data-speak-text="Mennyibe kerül a jegy?" data-speak-lang="hu-HU">Mennyibe kerül a jegy?</button></td>
          </tr>
        </table>
      `,
    },
    {
      id: 5,
      eyebrow: "УРОК 27 · 5/11 · ОТЕЛЬ",
      title: "A szállodában",
      subtitle: "Бронирование, заезд, условия проживания и исправление ошибки",
      note: 'Сначала определи ситуацию: ты бронируешь новый номер или заселяешься по существующей брони. Затем сообщи даты, количество ночей, число гостей и тип номера.',
      warn: 'Условия отмены, изменения, оплаты и включённых услуг зависят от конкретного отеля и тарифа. На слайде тренируется язык уточнения.',
      task: 'Разыграй две ситуации: обычное заселение и ошибка в бронировании. Используй одни и те же вымышленные имя, даты и количество гостей.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Новая бронь или существующее бронирование</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Реплика</th></tr>
          <tr>
            <td>хочу забронировать номер</td>
            <td><button class="speak-btn" data-speak-text="Szobát szeretnék foglalni." data-speak-lang="hu-HU">Szobát szeretnék foglalni.</button></td>
          </tr>
          <tr>
            <td>спросить о наличии</td>
            <td><button class="speak-btn" data-speak-text="Van szabad szobájuk június tizedikétől tizenkettedikéig?" data-speak-lang="hu-HU">Van szabad szobájuk június tizedikétől tizenkettedikéig?</button></td>
          </tr>
          <tr>
            <td>сообщить о существующей брони</td>
            <td><button class="speak-btn" data-speak-text="Van egy foglalásom Kovács névre." data-speak-lang="hu-HU">Van egy foglalásom Kovács névre.</button></td>
          </tr>
          <tr>
            <td>я бронировал на своё имя</td>
            <td><button class="speak-btn" data-speak-text="Kovács névre foglaltam." data-speak-lang="hu-HU">Kovács névre foglaltam.</button></td>
          </tr>
        </table>

        <div class="note">
          <button class="speak-btn" data-speak-text="névre" data-speak-lang="hu-HU">névre</button>
          означает «на имя».
          Название или фамилия ставится перед этой формой:
          <button class="speak-btn" data-speak-text="Kovács névre" data-speak-lang="hu-HU">Kovács névre</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Даты, ночи и гости</h4>
        <table class="conj">
          <tr><th>Вопрос администратора</th><th>Ответ гостя</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mettől meddig szeretne maradni?" data-speak-lang="hu-HU">Mettől meddig szeretne maradni?</button></td>
            <td><button class="speak-btn" data-speak-text="Június tizedikétől tizenkettedikéig." data-speak-lang="hu-HU">Június tizedikétől tizenkettedikéig.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hány éjszakára?" data-speak-lang="hu-HU">Hány éjszakára?</button></td>
            <td><button class="speak-btn" data-speak-text="Két éjszakára." data-speak-lang="hu-HU">Két éjszakára.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hány főre?" data-speak-lang="hu-HU">Hány főre?</button></td>
            <td><button class="speak-btn" data-speak-text="Két főre." data-speak-lang="hu-HU">Két főre.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hány felnőtt és hány gyerek érkezik?" data-speak-lang="hu-HU">Hány felnőtt és hány gyerek érkezik?</button></td>
            <td><button class="speak-btn" data-speak-text="Két felnőtt és egy gyerek érkezik." data-speak-lang="hu-HU">Két felnőtt és egy gyerek érkezik.</button></td>
          </tr>
        </table>

        <div class="note">
          Окончание <span class="hu-word">-ra/-re</span> здесь используется в двух близких функциях:
          <button class="speak-btn" data-speak-text="két éjszakára" data-speak-lang="hu-HU">két éjszakára</button>
          — на срок в две ночи;
          <button class="speak-btn" data-speak-text="két főre" data-speak-lang="hu-HU">két főre</button>
          — на двух человек.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Тип номера</h4>
        <table class="conj">
          <tr><th>Тип</th><th>Реплика</th></tr>
          <tr>
            <td>одноместный номер</td>
            <td><button class="speak-btn" data-speak-text="Egyágyas szobát szeretnék." data-speak-lang="hu-HU">Egyágyas szobát szeretnék.</button></td>
          </tr>
          <tr>
            <td>двухместный номер</td>
            <td><button class="speak-btn" data-speak-text="Kétágyas szobát szeretnék." data-speak-lang="hu-HU">Kétágyas szobát szeretnék.</button></td>
          </tr>
          <tr>
            <td>номер с двуспальной кроватью</td>
            <td><button class="speak-btn" data-speak-text="Franciaágyas szobát szeretnék." data-speak-lang="hu-HU">Franciaágyas szobát szeretnék.</button></td>
          </tr>
          <tr>
            <td>спросить альтернативу</td>
            <td><button class="speak-btn" data-speak-text="Van esetleg másik szabad szoba?" data-speak-lang="hu-HU">Van esetleg másik szabad szoba?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Заселение и выезд</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Вопрос или ответ</th></tr>
          <tr>
            <td>время заселения</td>
            <td><button class="speak-btn" data-speak-text="Mikortól lehet elfoglalni a szobát?" data-speak-lang="hu-HU">Mikortól lehet elfoglalni a szobát?</button></td>
          </tr>
          <tr>
            <td>ответ о заселении</td>
            <td><button class="speak-btn" data-speak-text="A szobát tizennégy órától lehet elfoglalni." data-speak-lang="hu-HU">A szobát tizennégy órától lehet elfoglalni.</button></td>
          </tr>
          <tr>
            <td>время выезда</td>
            <td><button class="speak-btn" data-speak-text="Meddig kell kijelentkezni?" data-speak-lang="hu-HU">Meddig kell kijelentkezni?</button></td>
          </tr>
          <tr>
            <td>предъявить документ</td>
            <td><button class="speak-btn" data-speak-text="Itt van az útlevelem." data-speak-lang="hu-HU">Itt van az útlevelem.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Цена и услуги</h4>
        <p><button class="speak-btn" data-speak-text="Mennyibe kerül egy éjszaka?" data-speak-lang="hu-HU">Mennyibe kerül egy éjszaka?</button></p>
        <p><button class="speak-btn" data-speak-text="A reggeli benne van az árban?" data-speak-lang="hu-HU">A reggeli benne van az árban?</button></p>
        <p><button class="speak-btn" data-speak-text="Mikor van reggeli?" data-speak-lang="hu-HU">Mikor van reggeli?</button></p>
        <p><button class="speak-btn" data-speak-text="Van ingyenes wifi a szobában?" data-speak-lang="hu-HU">Van ingyenes wifi a szobában?</button></p>
        <p><button class="speak-btn" data-speak-text="Lehet bankkártyával fizetni?" data-speak-lang="hu-HU">Lehet bankkártyával fizetni?</button></p>

        <div class="note">
          Утверждение:
          <button class="speak-btn" data-speak-text="A reggeli benne van az árban." data-speak-lang="hu-HU">A reggeli benne van az árban.</button>
          Вопрос:
          <button class="speak-btn" data-speak-text="A reggeli benne van az árban?" data-speak-lang="hu-HU">A reggeli benne van az árban?</button>
          Разницу создаёт интонация и вопросительный знак.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Если в бронировании ошибка</h4>
        <table class="conj">
          <tr><th>Шаг</th><th>Реплика</th></tr>
          <tr>
            <td>сообщить проблему</td>
            <td><button class="speak-btn" data-speak-text="Sajnos probléma van a foglalással." data-speak-lang="hu-HU">Sajnos probléma van a foglalással.</button></td>
          </tr>
          <tr>
            <td>назвать расхождение</td>
            <td><button class="speak-btn" data-speak-text="Két éjszakára foglaltam, de a rendszerben csak egy éjszaka szerepel." data-speak-lang="hu-HU">Két éjszakára foglaltam, de a rendszerben csak egy éjszaka szerepel.</button></td>
          </tr>
          <tr>
            <td>попросить проверить</td>
            <td><button class="speak-btn" data-speak-text="Meg tudná nézni még egyszer?" data-speak-lang="hu-HU">Meg tudná nézni még egyszer?</button></td>
          </tr>
          <tr>
            <td>попросить решение</td>
            <td><button class="speak-btn" data-speak-text="Van esetleg másik szabad szoba vagy más megoldás?" data-speak-lang="hu-HU">Van esetleg másik szabad szoba vagy más megoldás?</button></td>
          </tr>
          <tr>
            <td>принять вариант</td>
            <td><button class="speak-btn" data-speak-text="Rendben, akkor elfogadom ezt a megoldást." data-speak-lang="hu-HU">Rendben, akkor elfogadom ezt a megoldást.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Полный учебный диалог</h4>
        <div class="dialogue">
          <p><b>Recepciós:</b> <button class="speak-btn" data-speak-text="Jó estét kívánok! Miben segíthetek?" data-speak-lang="hu-HU">Jó estét kívánok! Miben segíthetek?</button></p>
          <p><b>Vendég:</b> <button class="speak-btn" data-speak-text="Jó estét kívánok! Van egy foglalásom Kovács névre, két éjszakára." data-speak-lang="hu-HU">Jó estét kívánok! Van egy foglalásom Kovács névre, két éjszakára.</button></p>
          <p><b>Recepciós:</b> <button class="speak-btn" data-speak-text="A rendszerben csak egy éjszaka szerepel." data-speak-lang="hu-HU">A rendszerben csak egy éjszaka szerepel.</button></p>
          <p><b>Vendég:</b> <button class="speak-btn" data-speak-text="Értem, de június tizedikétől tizenkettedikéig foglaltam. Meg tudná nézni még egyszer?" data-speak-lang="hu-HU">Értem, de június tizedikétől tizenkettedikéig foglaltam. Meg tudná nézni még egyszer?</button></p>
          <p><b>Recepciós:</b> <button class="speak-btn" data-speak-text="Tudunk adni egy másik szobát mindkét éjszakára, felár nélkül." data-speak-lang="hu-HU">Tudunk adni egy másik szobát mindkét éjszakára, felár nélkül.</button></p>
          <p><b>Vendég:</b> <button class="speak-btn" data-speak-text="Rendben, akkor elfogadom. A reggeli benne van az árban?" data-speak-lang="hu-HU">Rendben, akkor elfogadom. A reggeli benne van az árban?</button></p>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Szoba szeretnék foglalni.</td>
            <td><button class="speak-btn" data-speak-text="Szobát szeretnék foglalni." data-speak-lang="hu-HU">Szobát szeretnék foglalni.</button></td>
          </tr>
          <tr>
            <td>Két éjszaka.</td>
            <td><button class="speak-btn" data-speak-text="Két éjszakára." data-speak-lang="hu-HU">Két éjszakára.</button></td>
          </tr>
          <tr>
            <td>Kovács névben foglaltam.</td>
            <td><button class="speak-btn" data-speak-text="Kovács névre foglaltam." data-speak-lang="hu-HU">Kovács névre foglaltam.</button></td>
          </tr>
          <tr>
            <td>Benne van reggeli az ár?</td>
            <td><button class="speak-btn" data-speak-text="A reggeli benne van az árban?" data-speak-lang="hu-HU">A reggeli benne van az árban?</button></td>
          </tr>
          <tr>
            <td>Mikor kell kijelentkezés?</td>
            <td><button class="speak-btn" data-speak-text="Meddig kell kijelentkezni?" data-speak-lang="hu-HU">Meddig kell kijelentkezni?</button></td>
          </tr>
        </table>
      `,
    },
    {
      id: 6,
      eyebrow: "УРОК 27 · 6/11 · ОРИЕНТАЦИЯ",
      title: "Útbaigazítás",
      subtitle: "Как спросить маршрут, понять последовательность и проверить себя",
      note: 'Слушай маршрут блоками: исходная точка → движение прямо → поворот → ориентир → конечная точка. После объяснения повтори путь своими словами.',
      warn: 'Форма направления зависит от типа места: múzeumba, pályaudvarra, szállodához. Не подставляй одно окончание ко всем названиям.',
      task: 'Составь маршрут из пяти шагов и разыграй диалог: вопрос, объяснение, уточнение времени и проверка понимания.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Два основных вопроса</h4>
        <table class="conj">
          <tr><th>Цель</th><th>Вопрос</th></tr>
          <tr>
            <td>узнать, где находится место</td>
            <td><button class="speak-btn" data-speak-text="Hol van a múzeum?" data-speak-lang="hu-HU">Hol van a múzeum?</button></td>
          </tr>
          <tr>
            <td>узнать, как добраться</td>
            <td><button class="speak-btn" data-speak-text="Hogyan jutok el a múzeumba?" data-speak-lang="hu-HU">Hogyan jutok el a múzeumba?</button></td>
          </tr>
          <tr>
            <td>вежливое начало</td>
            <td><button class="speak-btn" data-speak-text="Elnézést, meg tudná mondani, hogyan jutok el a múzeumba?" data-speak-lang="hu-HU">Elnézést, meg tudná mondani, hogyan jutok el a múzeumba?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Формы направления нужно учить вместе с местом</h4>
        <table class="conj">
          <tr><th>Место</th><th>Куда?</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="múzeum" data-speak-lang="hu-HU">múzeum</button></td>
            <td><button class="speak-btn" data-speak-text="múzeumba" data-speak-lang="hu-HU">múzeumba</button></td>
            <td><button class="speak-btn" data-speak-text="Hogyan jutok el a múzeumba?" data-speak-lang="hu-HU">Hogyan jutok el a múzeumba?</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="pályaudvar" data-speak-lang="hu-HU">pályaudvar</button></td>
            <td><button class="speak-btn" data-speak-text="pályaudvarra" data-speak-lang="hu-HU">pályaudvarra</button></td>
            <td><button class="speak-btn" data-speak-text="Hogyan jutok el a pályaudvarra?" data-speak-lang="hu-HU">Hogyan jutok el a pályaudvarra?</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szálloda" data-speak-lang="hu-HU">szálloda</button></td>
            <td><button class="speak-btn" data-speak-text="szállodához" data-speak-lang="hu-HU">szállodához</button></td>
            <td><button class="speak-btn" data-speak-text="Melyik busszal jutok el a szállodához?" data-speak-lang="hu-HU">Melyik busszal jutok el a szállodához?</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Deák Ferenc tér" data-speak-lang="hu-HU">Deák Ferenc tér</button></td>
            <td><button class="speak-btn" data-speak-text="Deák Ferenc térre" data-speak-lang="hu-HU">Deák Ferenc térre</button></td>
            <td><button class="speak-btn" data-speak-text="Hogyan jutok el a Deák Ferenc térre?" data-speak-lang="hu-HU">Hogyan jutok el a Deák Ferenc térre?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Вежливые команды для маршрута</h4>
        <table class="conj">
          <tr><th>Действие</th><th>Форма</th></tr>
          <tr>
            <td>идите прямо</td>
            <td><button class="speak-btn" data-speak-text="Menjen egyenesen." data-speak-lang="hu-HU">Menjen egyenesen.</button></td>
          </tr>
          <tr>
            <td>поверните направо</td>
            <td><button class="speak-btn" data-speak-text="Forduljon jobbra." data-speak-lang="hu-HU">Forduljon jobbra.</button></td>
          </tr>
          <tr>
            <td>поверните налево</td>
            <td><button class="speak-btn" data-speak-text="Forduljon balra." data-speak-lang="hu-HU">Forduljon balra.</button></td>
          </tr>
          <tr>
            <td>перейдите улицу</td>
            <td><button class="speak-btn" data-speak-text="Menjen át az úton." data-speak-lang="hu-HU">Menjen át az úton.</button></td>
          </tr>
          <tr>
            <td>сядьте на автобус</td>
            <td><button class="speak-btn" data-speak-text="Szálljon fel a hatos buszra." data-speak-lang="hu-HU">Szálljon fel a hatos buszra.</button></td>
          </tr>
          <tr>
            <td>выйдите на третьей остановке</td>
            <td><button class="speak-btn" data-speak-text="Szálljon le a harmadik megállónál." data-speak-lang="hu-HU">Szálljon le a harmadik megállónál.</button></td>
          </tr>
        </table>

        <div class="note">
          У глаголов с приставкой в повелительной форме приставка часто стоит после глагола:
          <button class="speak-btn" data-speak-text="átmegy, menjen át" data-speak-lang="hu-HU">átmegy → menjen át</button>;
          <button class="speak-btn" data-speak-text="felszáll, szálljon fel" data-speak-lang="hu-HU">felszáll → szálljon fel</button>;
          <button class="speak-btn" data-speak-text="leszáll, szálljon le" data-speak-lang="hu-HU">leszáll → szálljon le</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Последовательность и ориентиры</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Форма</th></tr>
          <tr>
            <td>сначала</td>
            <td><button class="speak-btn" data-speak-text="először" data-speak-lang="hu-HU">először</button></td>
          </tr>
          <tr>
            <td>затем</td>
            <td><button class="speak-btn" data-speak-text="aztán" data-speak-lang="hu-HU">aztán</button></td>
          </tr>
          <tr>
            <td>после этого</td>
            <td><button class="speak-btn" data-speak-text="utána" data-speak-lang="hu-HU">utána</button></td>
          </tr>
          <tr>
            <td>на второй улице</td>
            <td><button class="speak-btn" data-speak-text="a második utcánál" data-speak-lang="hu-HU">a második utcánál</button></td>
          </tr>
          <tr>
            <td>у светофора</td>
            <td><button class="speak-btn" data-speak-text="a lámpánál" data-speak-lang="hu-HU">a lámpánál</button></td>
          </tr>
          <tr>
            <td>рядом с банком</td>
            <td><button class="speak-btn" data-speak-text="a bank mellett" data-speak-lang="hu-HU">a bank mellett</button></td>
          </tr>
          <tr>
            <td>напротив почты</td>
            <td><button class="speak-btn" data-speak-text="a postával szemben" data-speak-lang="hu-HU">a postával szemben</button></td>
          </tr>
        </table>

        <p><button class="speak-btn" data-speak-text="Menjen egyenesen, aztán a második utcánál forduljon jobbra." data-speak-lang="hu-HU">Menjen egyenesen, aztán a második utcánál forduljon jobbra.</button></p>
        <p><button class="speak-btn" data-speak-text="A múzeum a bank mellett, a postával szemben van." data-speak-lang="hu-HU">A múzeum a bank mellett, a postával szemben van.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Расстояние и время</h4>
        <table class="conj">
          <tr><th>Вопрос</th><th>Ответ</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Messze van?" data-speak-lang="hu-HU">Messze van?</button></td>
            <td><button class="speak-btn" data-speak-text="Nincs messze." data-speak-lang="hu-HU">Nincs messze.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mennyi idő gyalog?" data-speak-lang="hu-HU">Mennyi idő gyalog?</button></td>
            <td><button class="speak-btn" data-speak-text="Gyalog csak öt perc." data-speak-lang="hu-HU">Gyalog csak öt perc.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mennyi idő busszal?" data-speak-lang="hu-HU">Mennyi idő busszal?</button></td>
            <td><button class="speak-btn" data-speak-text="Busszal körülbelül tíz perc." data-speak-lang="hu-HU">Busszal körülbelül tíz perc.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Если объяснение непонятно</h4>
        <p><button class="speak-btn" data-speak-text="Kérem, mondja lassabban." data-speak-lang="hu-HU">Kérem, mondja lassabban.</button></p>
        <p><button class="speak-btn" data-speak-text="Meg tudná mutatni a térképen?" data-speak-lang="hu-HU">Meg tudná mutatni a térképen?</button></p>
        <p><button class="speak-btn" data-speak-text="Jól értem? Először egyenesen megyek, aztán jobbra fordulok?" data-speak-lang="hu-HU">Jól értem? Először egyenesen megyek, aztán jobbra fordulok?</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Полный учебный диалог</h4>
        <div class="dialogue">
          <p><b>Utas:</b> <button class="speak-btn" data-speak-text="Elnézést, hogyan jutok el a múzeumba?" data-speak-lang="hu-HU">Elnézést, hogyan jutok el a múzeumba?</button></p>
          <p><b>Járókelő:</b> <button class="speak-btn" data-speak-text="Menjen egyenesen, aztán a második utcánál forduljon jobbra." data-speak-lang="hu-HU">Menjen egyenesen, aztán a második utcánál forduljon jobbra.</button></p>
          <p><b>Járókelő:</b> <button class="speak-btn" data-speak-text="Menjen át a lámpánál, és a múzeum a bank mellett lesz." data-speak-lang="hu-HU">Menjen át a lámpánál, és a múzeum a bank mellett lesz.</button></p>
          <p><b>Utas:</b> <button class="speak-btn" data-speak-text="Jól értem? A második utcánál jobbra fordulok, majd átmegyek a lámpánál?" data-speak-lang="hu-HU">Jól értem? A második utcánál jobbra fordulok, majd átmegyek a lámpánál?</button></p>
          <p><b>Járókelő:</b> <button class="speak-btn" data-speak-text="Igen, pontosan. Gyalog csak öt perc." data-speak-lang="hu-HU">Igen, pontosan. Gyalog csak öt perc.</button></p>
          <p><b>Utas:</b> <button class="speak-btn" data-speak-text="Köszönöm szépen a segítséget." data-speak-lang="hu-HU">Köszönöm szépen a segítséget.</button></p>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Hogyan jutok el a múzeum?</td>
            <td><button class="speak-btn" data-speak-text="Hogyan jutok el a múzeumba?" data-speak-lang="hu-HU">Hogyan jutok el a múzeumba?</button></td>
          </tr>
          <tr>
            <td>Menjen egyenes.</td>
            <td><button class="speak-btn" data-speak-text="Menjen egyenesen." data-speak-lang="hu-HU">Menjen egyenesen.</button></td>
          </tr>
          <tr>
            <td>Forduljon a jobbra.</td>
            <td><button class="speak-btn" data-speak-text="Forduljon jobbra." data-speak-lang="hu-HU">Forduljon jobbra.</button></td>
          </tr>
          <tr>
            <td>Szálljon a buszra fel.</td>
            <td><button class="speak-btn" data-speak-text="Szálljon fel a buszra." data-speak-lang="hu-HU">Szálljon fel a buszra.</button></td>
          </tr>
          <tr>
            <td>Mennyi gyalog idő?</td>
            <td><button class="speak-btn" data-speak-text="Mennyi idő gyalog?" data-speak-lang="hu-HU">Mennyi idő gyalog?</button></td>
          </tr>
          <tr>
            <td>Nincs messze, gyalog is öt perc. — как основная учебная модель</td>
            <td><button class="speak-btn" data-speak-text="Nincs messze. Gyalog csak öt perc." data-speak-lang="hu-HU">Nincs messze. Gyalog csak öt perc.</button></td>
          </tr>
        </table>
      `,
    },
    {
      id: 7,
      eyebrow: "УРОК 27 · 7/11 · ИНТЕГРИРОВАННАЯ ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "От транспорта к отелю: шесть этапов связной практики",
      note: 'Используй один вымышленный маршрут во всех заданиях. Данные должны совпадать: город, транспорт, дата, время, пересадка, имя бронирования и количество ночей.',
      warn: 'Не превращай список реплик в механическое чтение. На каждом этапе сначала определяй коммуникативную задачу, затем выбирай форму.',
      task: 'Выполни шесть этапов и подготовь связный рассказ о поездке из восьми–десяти предложений.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Транспорт и направление</h4>
        <table class="conj">
          <tr><th>Задача</th><th>Контрольная модель</th></tr>
          <tr>
            <td>сказать, на чём едешь</td>
            <td><button class="speak-btn" data-speak-text="Vonattal utazom Pécsre." data-speak-lang="hu-HU">Vonattal utazom Pécsre.</button></td>
          </tr>
          <tr>
            <td>спросить средство передвижения</td>
            <td><button class="speak-btn" data-speak-text="Mivel utazik?" data-speak-lang="hu-HU">Mivel utazik?</button></td>
          </tr>
          <tr>
            <td>сказать, что идёшь пешком</td>
            <td><button class="speak-btn" data-speak-text="Gyalog megyek a szállodába." data-speak-lang="hu-HU">Gyalog megyek a szállodába.</button></td>
          </tr>
        </table>

        <div class="note">
          Проверь две вещи:
          форма транспорта —
          <button class="speak-btn" data-speak-text="vonattal" data-speak-lang="hu-HU">vonattal</button>;
          форма направления —
          <button class="speak-btn" data-speak-text="Pécsre" data-speak-lang="hu-HU">Pécsre</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Покупка билета</h4>
        <table class="conj">
          <tr><th>Шаг</th><th>Реплика</th></tr>
          <tr>
            <td>направление</td>
            <td><button class="speak-btn" data-speak-text="Pécsre szeretnék utazni." data-speak-lang="hu-HU">Pécsre szeretnék utazni.</button></td>
          </tr>
          <tr>
            <td>тип билета</td>
            <td><button class="speak-btn" data-speak-text="Egy retúrjegyet kérek." data-speak-lang="hu-HU">Egy retúrjegyet kérek.</button></td>
          </tr>
          <tr>
            <td>дата и время</td>
            <td><button class="speak-btn" data-speak-text="Holnap reggel szeretnék indulni." data-speak-lang="hu-HU">Holnap reggel szeretnék indulni.</button></td>
          </tr>
          <tr>
            <td>цена</td>
            <td><button class="speak-btn" data-speak-text="Mennyibe kerül a jegy?" data-speak-lang="hu-HU">Mennyibe kerül a jegy?</button></td>
          </tr>
          <tr>
            <td>оплата</td>
            <td><button class="speak-btn" data-speak-text="Lehet bankkártyával fizetni?" data-speak-lang="hu-HU">Lehet bankkártyával fizetni?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Вокзал, задержка и пересадка</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Реплика</th></tr>
          <tr>
            <td>время отправления</td>
            <td><button class="speak-btn" data-speak-text="Mikor indul a vonat?" data-speak-lang="hu-HU">Mikor indul a vonat?</button></td>
          </tr>
          <tr>
            <td>путь отправления</td>
            <td><button class="speak-btn" data-speak-text="Melyik vágányról indul?" data-speak-lang="hu-HU">Melyik vágányról indul?</button></td>
          </tr>
          <tr>
            <td>длительность задержки</td>
            <td><button class="speak-btn" data-speak-text="Mennyit késik a vonat?" data-speak-lang="hu-HU">Mennyit késik a vonat?</button></td>
          </tr>
          <tr>
            <td>ответ о задержке</td>
            <td><button class="speak-btn" data-speak-text="A vonat tíz percet késik." data-speak-lang="hu-HU">A vonat tíz percet késik.</button></td>
          </tr>
          <tr>
            <td>пересадка</td>
            <td><button class="speak-btn" data-speak-text="Hol kell átszállni?" data-speak-lang="hu-HU">Hol kell átszállni?</button></td>
          </tr>
          <tr>
            <td>пропущенное соединение</td>
            <td><button class="speak-btn" data-speak-text="Lekéstem a csatlakozást." data-speak-lang="hu-HU">Lekéstem a csatlakozást.</button></td>
          </tr>
          <tr>
            <td>альтернатива</td>
            <td><button class="speak-btn" data-speak-text="Van esetleg másik vonat?" data-speak-lang="hu-HU">Van esetleg másik vonat?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Отель: бронь, проблема и решение</h4>
        <table class="conj">
          <tr><th>Шаг</th><th>Реплика</th></tr>
          <tr>
            <td>имя бронирования</td>
            <td><button class="speak-btn" data-speak-text="Van egy foglalásom Kovács névre." data-speak-lang="hu-HU">Van egy foglalásom Kovács névre.</button></td>
          </tr>
          <tr>
            <td>длительность</td>
            <td><button class="speak-btn" data-speak-text="Két éjszakára foglaltam." data-speak-lang="hu-HU">Két éjszakára foglaltam.</button></td>
          </tr>
          <tr>
            <td>сообщить об ошибке</td>
            <td><button class="speak-btn" data-speak-text="Sajnos probléma van a foglalással." data-speak-lang="hu-HU">Sajnos probléma van a foglalással.</button></td>
          </tr>
          <tr>
            <td>попросить проверить</td>
            <td><button class="speak-btn" data-speak-text="Meg tudná nézni még egyszer?" data-speak-lang="hu-HU">Meg tudná nézni még egyszer?</button></td>
          </tr>
          <tr>
            <td>попросить альтернативу</td>
            <td><button class="speak-btn" data-speak-text="Van esetleg másik szabad szoba?" data-speak-lang="hu-HU">Van esetleg másik szabad szoba?</button></td>
          </tr>
          <tr>
            <td>уточнить завтрак</td>
            <td><button class="speak-btn" data-speak-text="A reggeli benne van az árban?" data-speak-lang="hu-HU">A reggeli benne van az árban?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Дорога до места</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Реплика</th></tr>
          <tr>
            <td>спросить ближайшую станцию метро</td>
            <td><button class="speak-btn" data-speak-text="Hol van a legközelebbi metróállomás?" data-speak-lang="hu-HU">Hol van a legközelebbi metróállomás?</button></td>
          </tr>
          <tr>
            <td>спросить маршрут</td>
            <td><button class="speak-btn" data-speak-text="Hogyan jutok el a szállodához?" data-speak-lang="hu-HU">Hogyan jutok el a szállodához?</button></td>
          </tr>
          <tr>
            <td>дать первые шаги</td>
            <td><button class="speak-btn" data-speak-text="Menjen egyenesen, aztán forduljon balra." data-speak-lang="hu-HU">Menjen egyenesen, aztán forduljon balra.</button></td>
          </tr>
          <tr>
            <td>уточнить время пешком</td>
            <td><button class="speak-btn" data-speak-text="Mennyi idő gyalog?" data-speak-lang="hu-HU">Mennyi idő gyalog?</button></td>
          </tr>
          <tr>
            <td>ответить о расстоянии</td>
            <td><button class="speak-btn" data-speak-text="Gyalog csak öt perc." data-speak-lang="hu-HU">Gyalog csak öt perc.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Уточнение и подтверждение</h4>
        <p><button class="speak-btn" data-speak-text="Kérem, mondja még egyszer." data-speak-lang="hu-HU">Kérem, mondja még egyszer.</button></p>
        <p><button class="speak-btn" data-speak-text="Meg tudná mutatni a kijelzőn?" data-speak-lang="hu-HU">Meg tudná mutatni a kijelzőn?</button></p>
        <p><button class="speak-btn" data-speak-text="Jól értem? A negyedik vágányról indul?" data-speak-lang="hu-HU">Jól értem? A negyedik vágányról indul?</button></p>
        <p><button class="speak-btn" data-speak-text="Rendben, akkor ezt választom." data-speak-lang="hu-HU">Rendben, akkor ezt választom.</button></p>
        <p><button class="speak-btn" data-speak-text="Köszönöm szépen a segítséget." data-speak-lang="hu-HU">Köszönöm szépen a segítséget.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Исправь ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Vonatval utazom.</td>
            <td><button class="speak-btn" data-speak-text="Vonattal utazom." data-speak-lang="hu-HU">Vonattal utazom.</button></td>
          </tr>
          <tr>
            <td>Egy retúr jegyet kérek.</td>
            <td><button class="speak-btn" data-speak-text="Egy retúrjegyet kérek." data-speak-lang="hu-HU">Egy retúrjegyet kérek.</button></td>
          </tr>
          <tr>
            <td>Melyik vágányon indul?</td>
            <td><button class="speak-btn" data-speak-text="Melyik vágányról indul?" data-speak-lang="hu-HU">Melyik vágányról indul?</button></td>
          </tr>
          <tr>
            <td>Mennyibe késik a vonat?</td>
            <td><button class="speak-btn" data-speak-text="Mennyit késik a vonat?" data-speak-lang="hu-HU">Mennyit késik a vonat?</button></td>
          </tr>
          <tr>
            <td>Foglalásom van Kovács névben.</td>
            <td><button class="speak-btn" data-speak-text="Van egy foglalásom Kovács névre." data-speak-lang="hu-HU">Van egy foglalásom Kovács névre.</button></td>
          </tr>
          <tr>
            <td>Hogyan jutok el a szálloda?</td>
            <td><button class="speak-btn" data-speak-text="Hogyan jutok el a szállodához?" data-speak-lang="hu-HU">Hogyan jutok el a szállodához?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Модель связного рассказа</h4>
        <p><button class="speak-btn" data-speak-text="Holnap vonattal utazom Pécsre, ezért egy retúrjegyet kérek." data-speak-lang="hu-HU">Holnap vonattal utazom Pécsre, ezért egy retúrjegyet kérek.</button></p>
        <p><button class="speak-btn" data-speak-text="A vonat tíz percet késik, de nem kell átszállnom." data-speak-lang="hu-HU">A vonat tíz percet késik, de nem kell átszállnom.</button></p>
        <p><button class="speak-btn" data-speak-text="A szállodában van egy foglalásom Kovács névre, két éjszakára." data-speak-lang="hu-HU">A szállodában van egy foglalásom Kovács névre, két éjszakára.</button></p>
        <p><button class="speak-btn" data-speak-text="A pályaudvarról gyalog megyek a szállodához, mert csak öt percre van." data-speak-lang="hu-HU">A pályaudvarról gyalog megyek a szállodához, mert csak öt percre van.</button></p>
      `,
    },
    {
      id: 8,
      eyebrow: "УРОК 27 · 8/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Полный заезд: бронь, документ, номер, завтрак и проверка понимания",
      note: 'Первый голос — администратор, второй — гость. Все имя, даты и номер комнаты вымышленные и используются только для языковой практики.',
      warn: 'Номер документа, реальные данные бронирования и платёжные сведения нельзя использовать в учебном сценарии.',
      task: 'Ответь на вопросы по диалогу, затем замени имя, даты, количество ночей и номер комнаты и разыграй обе роли.',
      body: `
        <div class="dialogue">
          <p><b>Vendég:</b> <button class="speak-btn" data-speak-text="Jó estét kívánok! Van egy foglalásom Kovács névre." data-speak-lang="hu-HU">Jó estét kívánok! Van egy foglalásom Kovács névre.</button></p>

          <p><b>Recepciós:</b> <button class="speak-btn" data-speak-text="Jó estét kívánok! Igen, megtaláltam. Június tizedikétől tizenkettedikéig, két éjszakára foglalt." data-speak-lang="hu-HU">Jó estét kívánok! Igen, megtaláltam. Június tizedikétől tizenkettedikéig, két éjszakára foglalt.</button></p>

          <p><b>Vendég:</b> <button class="speak-btn" data-speak-text="Igen, egy egyágyas szobát foglaltam." data-speak-lang="hu-HU">Igen, egy egyágyas szobát foglaltam.</button></p>

          <p><b>Recepciós:</b> <button class="speak-btn" data-speak-text="Kérem az útlevelét vagy a személyi igazolványát." data-speak-lang="hu-HU">Kérem az útlevelét vagy a személyi igazolványát.</button></p>

          <p><b>Vendég:</b> <button class="speak-btn" data-speak-text="Tessék, itt van az útlevelem." data-speak-lang="hu-HU">Tessék, itt van az útlevelem.</button></p>

          <p><b>Recepciós:</b> <button class="speak-btn" data-speak-text="Köszönöm. A háromszáznégyes szoba a harmadik emeleten van." data-speak-lang="hu-HU">Köszönöm. A háromszáznégyes szoba a harmadik emeleten van.</button></p>

          <p><b>Recepciós:</b> <button class="speak-btn" data-speak-text="Itt van a kulcsa. A lift a recepció mellett található." data-speak-lang="hu-HU">Itt van a kulcsa. A lift a recepció mellett található.</button></p>

          <p><b>Vendég:</b> <button class="speak-btn" data-speak-text="Köszönöm. A reggeli benne van az árban?" data-speak-lang="hu-HU">Köszönöm. A reggeli benne van az árban?</button></p>

          <p><b>Recepciós:</b> <button class="speak-btn" data-speak-text="Igen. A reggeli hét és tíz óra között van az étteremben." data-speak-lang="hu-HU">Igen. A reggeli hét és tíz óra között van az étteremben.</button></p>

          <p><b>Vendég:</b> <button class="speak-btn" data-speak-text="Meddig kell kijelentkezni?" data-speak-lang="hu-HU">Meddig kell kijelentkezni?</button></p>

          <p><b>Recepciós:</b> <button class="speak-btn" data-speak-text="Legkésőbb tizenegy óráig." data-speak-lang="hu-HU">Legkésőbb tizenegy óráig.</button></p>

          <p><b>Vendég:</b> <button class="speak-btn" data-speak-text="Jól értem? A szoba a harmadik emeleten van, a reggeli pedig hét és tíz között?" data-speak-lang="hu-HU">Jól értem? A szoba a harmadik emeleten van, a reggeli pedig hét és tíz között?</button></p>

          <p><b>Recepciós:</b> <button class="speak-btn" data-speak-text="Igen, pontosan. Kellemes pihenést kívánok!" data-speak-lang="hu-HU">Igen, pontosan. Kellemes pihenést kívánok!</button></p>

          <p><b>Vendég:</b> <button class="speak-btn" data-speak-text="Köszönöm szépen." data-speak-lang="hu-HU">Köszönöm szépen.</button></p>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Что делает каждый блок</h4>
        <table class="conj">
          <tr><th>Блок</th><th>Функция</th></tr>
          <tr><td>имя бронирования</td><td>помочь администратору найти запись</td></tr>
          <tr><td>даты и ночи</td><td>подтвердить основные данные</td></tr>
          <tr><td>документ</td><td>понять просьбу предъявить документ</td></tr>
          <tr><td>номер и этаж</td><td>понять расположение комнаты</td></tr>
          <tr><td>ключ и лифт</td><td>получить практическую информацию</td></tr>
          <tr><td>завтрак и выезд</td><td>уточнить условия проживания</td></tr>
          <tr><td>повтор данных</td><td>проверить понимание перед завершением</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Важные модели</h4>
        <table class="conj">
          <tr><th>Модель</th><th>Комментарий</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Van egy foglalásom Kovács névre." data-speak-lang="hu-HU">Van egy foglalásom Kovács névre.</button></td>
            <td>полная и прозрачная модель бронирования</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Két éjszakára foglaltam." data-speak-lang="hu-HU">Két éjszakára foglaltam.</button></td>
            <td>полное предложение вместо фрагмента</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Itt van a kulcsa." data-speak-lang="hu-HU">Itt van a kulcsa.</button></td>
            <td>естественная передача ключа гостю</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hányas a szoba?" data-speak-lang="hu-HU">Hányas a szoba?</button></td>
            <td>вопрос о номере комнаты</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A háromszáznégyes szoba a harmadik emeleten van." data-speak-lang="hu-HU">A háromszáznégyes szoba a harmadik emeleten van.</button></td>
            <td>номер комнаты и этаж</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Проверь понимание</h4>
        <ol class="tasklist">
          <li>На какое имя оформлена бронь?</li>
          <li>Какие даты и сколько ночей подтверждает администратор?</li>
          <li>Какой тип номера забронирован?</li>
          <li>Какой документ просит администратор?</li>
          <li>Какой номер комнаты и на каком она этаже?</li>
          <li>Где находится лифт?</li>
          <li>Когда подают завтрак?</li>
          <li>До какого времени нужно выехать?</li>
          <li>Как гость проверяет понимание?</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Если не понял</h4>
        <p><button class="speak-btn" data-speak-text="Kérem, mondja még egyszer a szobaszámot." data-speak-lang="hu-HU">Kérem, mondja még egyszer a szobaszámot.</button></p>
        <p><button class="speak-btn" data-speak-text="Meg tudná mutatni, hol van a lift?" data-speak-lang="hu-HU">Meg tudná mutatni, hol van a lift?</button></p>
        <p><button class="speak-btn" data-speak-text="Le tudná írni a reggeli időpontját?" data-speak-lang="hu-HU">Le tudná írni a reggeli időpontját?</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Foglalásom van Kovács névben.</td>
            <td><button class="speak-btn" data-speak-text="Van egy foglalásom Kovács névre." data-speak-lang="hu-HU">Van egy foglalásom Kovács névre.</button></td>
          </tr>
          <tr>
            <td>Két éjszaka egyágyas szobában.</td>
            <td><button class="speak-btn" data-speak-text="Két éjszakára foglaltam egy egyágyas szobát." data-speak-lang="hu-HU">Két éjszakára foglaltam egy egyágyas szobát.</button></td>
          </tr>
          <tr>
            <td>Kérem az útlevél.</td>
            <td><button class="speak-btn" data-speak-text="Kérem az útlevelét." data-speak-lang="hu-HU">Kérem az útlevelét.</button></td>
          </tr>
          <tr>
            <td>A kulcs.</td>
            <td><button class="speak-btn" data-speak-text="Itt van a kulcsa." data-speak-lang="hu-HU">Itt van a kulcsa.</button></td>
          </tr>
          <tr>
            <td>Hány a szoba?</td>
            <td><button class="speak-btn" data-speak-text="Hányas a szoba?" data-speak-lang="hu-HU">Hányas a szoba?</button></td>
          </tr>
          <tr>
            <td>A szoba harmadik emelet.</td>
            <td><button class="speak-btn" data-speak-text="A szoba a harmadik emeleten van." data-speak-lang="hu-HU">A szoba a harmadik emeleten van.</button></td>
          </tr>
        </table>

        <div class="task">
          Замени в диалоге имя, даты, количество ночей, тип и номер комнаты.
          Сохрани все функции: бронирование, документ, этаж, завтрак,
          время выезда, проверка понимания и благодарность.
        </div>
      `,
    },
    {
      id: 9,
      eyebrow: "УРОК 27 · 9/11 · ИТОГОВЫЕ ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Итоговый контроль: транспорт, билет, задержка, отель и маршрут",
      note: 'Используй один вымышленный маршрут во всех заданиях. Город, дата, транспорт, время, имя бронирования и количество ночей должны совпадать.',
      warn: 'Тарифы, расписание, путь отправления и условия отеля в реальной поездке проверяются отдельно. Здесь оценивается только язык решения задачи.',
      task: 'Выполни семь этапов. Сначала отвечай самостоятельно, затем сравни с контрольными моделями и исправь только реальные ошибки.',
      activities: L27_ACTIVITIES,
      optionalSpeaking: L27_OPTIONAL_SPEAKING,
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Транспорт: образуй форму и выбери значение</h4>
        <ol class="tasklist">
          <li>Образуй формы средства передвижения от слов: <span class="hu-word">busz</span>, <span class="hu-word">vonat</span>, <span class="hu-word">villamos</span>, <span class="hu-word">repülő</span>, <span class="hu-word">kerékpár</span>.</li>
          <li>Скажи, что едешь поездом в Печ, а в отель идёшь пешком.</li>
          <li>Различи средство, местонахождение и направление посадки для автобуса.</li>
        </ol>

        <table class="conj">
          <tr><th>Контрольная модель</th><th>Что проверяется</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="busszal, vonattal, villamossal, repülővel, kerékpárral" data-speak-lang="hu-HU">busszal, vonattal, villamossal, repülővel, kerékpárral</button></td>
            <td>гармония и полная ассимиляция</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Vonattal utazom Pécsre, a szállodába pedig gyalog megyek." data-speak-lang="hu-HU">Vonattal utazom Pécsre, a szállodába pedig gyalog megyek.</button></td>
            <td>средство, направление и gyalog</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Busszal megyek. A buszon vagyok. Felszállok a buszra." data-speak-lang="hu-HU">Busszal megyek. A buszon vagyok. Felszállok a buszra.</button></td>
            <td>средство, место и направление</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Покупка билета</h4>
        <p>Купи вымышленный билет туда и обратно до Печа: отправление завтра утром, возвращение в воскресенье вечером, один взрослый, второй класс.</p>
        <ol class="tasklist">
          <li>Назови пункт назначения и тип билета.</li>
          <li>Назови время отправления и возвращения.</li>
          <li>Уточни цену и возможность оплаты картой.</li>
          <li>Повтори основные данные для проверки.</li>
        </ol>

        <p><button class="speak-btn" data-speak-text="Pécsre szeretnék utazni. Egy retúrjegyet kérek." data-speak-lang="hu-HU">Pécsre szeretnék utazni. Egy retúrjegyet kérek.</button></p>
        <p><button class="speak-btn" data-speak-text="Holnap reggel indulnék, és vasárnap este jönnék vissza." data-speak-lang="hu-HU">Holnap reggel indulnék, és vasárnap este jönnék vissza.</button></p>
        <p><button class="speak-btn" data-speak-text="Egy felnőtt részére, másodosztályra kérem." data-speak-lang="hu-HU">Egy felnőtt részére, másodosztályra kérem.</button></p>
        <p><button class="speak-btn" data-speak-text="Mennyibe kerül a jegy, és lehet bankkártyával fizetni?" data-speak-lang="hu-HU">Mennyibe kerül a jegy, és lehet bankkártyával fizetni?</button></p>
        <p><button class="speak-btn" data-speak-text="Jól értem? Holnap reggel indulok, és vasárnap este jövök vissza." data-speak-lang="hu-HU">Jól értem? Holnap reggel indulok, és vasárnap este jövök vissza.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Вокзал: путь, задержка и пересадка</h4>
        <table class="conj">
          <tr><th>Задача</th><th>Контрольная модель</th></tr>
          <tr>
            <td>поезд отправляется со второго пути</td>
            <td><button class="speak-btn" data-speak-text="A vonat a második vágányról indul." data-speak-lang="hu-HU">A vonat a második vágányról indul.</button></td>
          </tr>
          <tr>
            <td>спросить длительность задержки</td>
            <td><button class="speak-btn" data-speak-text="Mennyit késik a vonat?" data-speak-lang="hu-HU">Mennyit késik a vonat?</button></td>
          </tr>
          <tr>
            <td>сообщить о задержке</td>
            <td><button class="speak-btn" data-speak-text="A vonat huszonöt percet késik." data-speak-lang="hu-HU">A vonat huszonöt percet késik.</button></td>
          </tr>
          <tr>
            <td>спросить, где пересаживаться</td>
            <td><button class="speak-btn" data-speak-text="Hol kell átszállni?" data-speak-lang="hu-HU">Hol kell átszállni?</button></td>
          </tr>
          <tr>
            <td>сообщить о пропущенном соединении</td>
            <td><button class="speak-btn" data-speak-text="Lekéstem a csatlakozást." data-speak-lang="hu-HU">Lekéstem a csatlakozást.</button></td>
          </tr>
          <tr>
            <td>попросить альтернативу</td>
            <td><button class="speak-btn" data-speak-text="Van esetleg másik vonat, amellyel hamarabb odaérhetek?" data-speak-lang="hu-HU">Van esetleg másik vonat, amellyel hamarabb odaérhetek?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Отель: заселение и ошибка в бронировании</h4>
        <ol class="tasklist">
          <li>Сообщи вымышленное имя бронирования и две ночи.</li>
          <li>Назови точные даты.</li>
          <li>Объясни, что в системе указана только одна ночь.</li>
          <li>Попроси проверить повторно и предложить альтернативу.</li>
          <li>Уточни завтрак и время выезда.</li>
        </ol>

        <p><button class="speak-btn" data-speak-text="Van egy foglalásom Kovács névre, két éjszakára." data-speak-lang="hu-HU">Van egy foglalásom Kovács névre, két éjszakára.</button></p>
        <p><button class="speak-btn" data-speak-text="Június tizedikétől tizenkettedikéig foglaltam." data-speak-lang="hu-HU">Június tizedikétől tizenkettedikéig foglaltam.</button></p>
        <p><button class="speak-btn" data-speak-text="A rendszerben csak egy éjszaka szerepel, pedig két éjszakára foglaltam." data-speak-lang="hu-HU">A rendszerben csak egy éjszaka szerepel, pedig két éjszakára foglaltam.</button></p>
        <p><button class="speak-btn" data-speak-text="Meg tudná nézni még egyszer? Van esetleg másik szabad szoba vagy más megoldás?" data-speak-lang="hu-HU">Meg tudná nézni még egyszer? Van esetleg másik szabad szoba vagy más megoldás?</button></p>
        <p><button class="speak-btn" data-speak-text="A reggeli benne van az árban, és meddig kell kijelentkezni?" data-speak-lang="hu-HU">A reggeli benne van az árban, és meddig kell kijelentkezni?</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Спроси дорогу и проверь понимание</h4>
        <p><button class="speak-btn" data-speak-text="Elnézést, hogyan jutok el a legközelebbi metróállomásra?" data-speak-lang="hu-HU">Elnézést, hogyan jutok el a legközelebbi metróállomásra?</button></p>
        <p><button class="speak-btn" data-speak-text="Menjen egyenesen, aztán a második utcánál forduljon balra." data-speak-lang="hu-HU">Menjen egyenesen, aztán a második utcánál forduljon balra.</button></p>
        <p><button class="speak-btn" data-speak-text="Mennyi idő gyalog?" data-speak-lang="hu-HU">Mennyi idő gyalog?</button></p>
        <p><button class="speak-btn" data-speak-text="Jól értem? Először egyenesen megyek, aztán a második utcánál balra fordulok?" data-speak-lang="hu-HU">Jól értem? Először egyenesen megyek, aztán a második utcánál balra fordulok?</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Фразы для уточнения и решения</h4>
        <p><button class="speak-btn" data-speak-text="Kérem, mondja még egyszer." data-speak-lang="hu-HU">Kérem, mondja még egyszer.</button></p>
        <p><button class="speak-btn" data-speak-text="Meg tudná mutatni a kijelzőn?" data-speak-lang="hu-HU">Meg tudná mutatni a kijelzőn?</button></p>
        <p><button class="speak-btn" data-speak-text="Meg tudná mutatni a térképen?" data-speak-lang="hu-HU">Meg tudná mutatni a térképen?</button></p>
        <p><button class="speak-btn" data-speak-text="Rendben, akkor ezt választom." data-speak-lang="hu-HU">Rendben, akkor ezt választom.</button></p>
        <p><button class="speak-btn" data-speak-text="Köszönöm szépen a segítséget." data-speak-lang="hu-HU">Köszönöm szépen a segítséget.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Итоговые продукты</h4>
        <table class="conj">
          <tr><th>Устно</th><th>Письменно</th></tr>
          <tr>
            <td>рассказ о поездке примерно на две минуты</td>
            <td>сообщение в отель или перевозчику объёмом сто–сто двадцать слов</td>
          </tr>
          <tr>
            <td>маршрут, билет, задержка или пересадка, отель и дорога</td>
            <td>цель, точные данные, проблема, просьба о решении и практический вопрос</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Самопроверка</h4>
        <ul class="tick">
          <li>я правильно образую формы транспорта с -val/-vel;</li>
          <li>я различаю средство, местонахождение и направление;</li>
          <li>я покупаю билет и подтверждаю основные данные;</li>
          <li>я уточняю путь, задержку и пересадку;</li>
          <li>я сообщаю о пропущенном соединении и прошу альтернативу;</li>
          <li>я называю данные бронирования и объясняю расхождение;</li>
          <li>я спрашиваю дорогу и повторяю маршрут своими словами;</li>
          <li>я отделяю языковой сценарий от актуальных правил поездки.</li>
        </ul>
      `,
    },
    {
      id: 10,
      eyebrow: "УРОК 27 · 10/11 · ПЕРЕХОД К ФИНАЛУ",
      title: "Előretekintés",
      subtitle: "Переход к итоговому уроку: система языка, интеграция навыков и дальнейший план",
      note: 'Урок 28 не вводит ещё одну бытовую тему. Он собирает уже изученные формы в единую систему и проверяет, можешь ли ты использовать их в связной речи.',
      warn: 'На этом слайде примеры только показывают направление итогового повторения. Полные таблицы, задания и критерии находятся в уроке 28.',
      task: 'Отметь, какие блоки уже уверенные, а какие требуют повторения перед финальным уроком.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Что действительно будет в уроке 28</h4>
        <table class="conj">
          <tr><th>Блок</th><th>Что проверяется</th></tr>
          <tr>
            <td>архитектура языка</td>
            <td>агглютинация, гармония гласных и последовательность окончаний</td>
          </tr>
          <tr>
            <td>падежи и принадлежность</td>
            <td>направление, местонахождение, исходная точка и притяжательные формы</td>
          </tr>
          <tr>
            <td>глагольная система</td>
            <td>настоящее, прошедшее, будущее, повелительное и условное наклонения</td>
          </tr>
          <tr>
            <td>два спряжения</td>
            <td>неопределённый и определённый объект</td>
          </tr>
          <tr>
            <td>связная речь</td>
            <td>причина, контраст, условие и логический переход между мыслями</td>
          </tr>
          <tr>
            <td>интеграция навыков</td>
            <td>чтение, аудирование, письмо, говорение и самооценка</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как материал поездки ведёт к общей системе</h4>
        <table class="conj">
          <tr><th>Из урока 27</th><th>Что увидим как часть системы</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="vonattal" data-speak-lang="hu-HU">vonattal</button></td>
            <td>гармония гласных и полная ассимиляция</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="pályaudvarra, pályaudvaron, pályaudvarról" data-speak-lang="hu-HU">pályaudvarra, pályaudvaron, pályaudvarról</button></td>
            <td>пространственная триада: куда, где, откуда</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Lekéstem a csatlakozást." data-speak-lang="hu-HU">Lekéstem a csatlakozást.</button></td>
            <td>прошедшее время и определённый объект</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Menjen egyenesen." data-speak-lang="hu-HU">Menjen egyenesen.</button></td>
            <td>вежливое повелительное наклонение</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ha lenne időm, tovább maradnék." data-speak-lang="hu-HU">Ha lenne időm, tovább maradnék.</button></td>
            <td>условие и гипотетический результат</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Vonattal utazom, mert gyorsabb, de ma késik." data-speak-lang="hu-HU">Vonattal utazom, mert gyorsabb, de ma késik.</button></td>
            <td>причина и контраст в одном связном высказывании</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Четыре итоговых продукта</h4>
        <table class="conj">
          <tr><th>Навык</th><th>Результат</th></tr>
          <tr>
            <td>чтение</td>
            <td>понять связный текст о личном опыте изучения языка</td>
          </tr>
          <tr>
            <td>аудирование</td>
            <td>понять планы дальнейшего обучения и ключевые детали</td>
          </tr>
          <tr>
            <td>письмо</td>
            <td>описать прошлый опыт, настоящее, мнение и будущий план</td>
          </tr>
          <tr>
            <td>говорение</td>
            <td>дать связный рассказ продолжительностью одну–две минуты</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Предварительная модель итогового рассказа</h4>
        <p><button class="speak-btn" data-speak-text="Két éve kezdtem magyarul tanulni." data-speak-lang="hu-HU">Két éve kezdtem magyarul tanulni.</button></p>
        <p><button class="speak-btn" data-speak-text="Most már sok mindent megértek, de még szeretnék folyékonyabban beszélni." data-speak-lang="hu-HU">Most már sok mindent megértek, de még szeretnék folyékonyabban beszélni.</button></p>
        <p><button class="speak-btn" data-speak-text="Minden nap gyakorlok, mert magabiztosabban szeretnék kommunikálni." data-speak-lang="hu-HU">Minden nap gyakorlok, mert magabiztosabban szeretnék kommunikálni.</button></p>
        <p><button class="speak-btn" data-speak-text="Ha lesz időm, jövőre nyelvvizsgát teszek." data-speak-lang="hu-HU">Ha lesz időm, jövőre nyelvvizsgát teszek.</button></p>

        <div class="note">
          Эта модель объединяет прошлое, настоящее, причину, контраст,
          желание и будущий план с условием. Подробный разбор выполняется в уроке 28.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Подготовка к финальному уроку</h4>
        <ol class="tasklist">
          <li>Повтори основные пространственные триады падежей.</li>
          <li>Проверь настоящее, прошедшее и будущее время.</li>
          <li>Повтори вежливое повелительное и условное наклонения.</li>
          <li>Сравни неопределённое и определённое спряжение.</li>
          <li>Подготовь четыре–шесть предложений о своём опыте изучения языка.</li>
          <li>Назови одну сильную сторону и одну тему для дальнейшей работы.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Готовность к переходу</h4>
        <ul class="tick">
          <li>я распознаю цепочку окончаний в слове;</li>
          <li>я выбираю форму направления, места и исходной точки;</li>
          <li>я различаю основные времена и наклонения;</li>
          <li>я понимаю, когда объект определён;</li>
          <li>я связываю мысли причиной, контрастом и условием;</li>
          <li>я могу рассказать о прошлом, настоящем и будущем плане;</li>
          <li>я умею оценить свой результат без ожидания абсолютной безошибочности.</li>
        </ul>

        <div class="note">
          Урок 28 — итог уровня, а не обещание автоматически владеть всеми ситуациями без ошибок.
          Его задача — собрать знания, показать устойчивые навыки и определить следующий учебный шаг.
        </div>
      `,
    },
    {
      id: 11,
      eyebrow: "УРОК 27 · 11/11 · ИТОГ",
      title: "Összefoglalás",
      subtitle: "Итоговая карта самостоятельного путешествия",
      note: 'Главный результат урока — способность провести один согласованный маршрут: выбрать транспорт, купить билет, решить проблему на вокзале, заселиться в отель и уточнить дорогу.',
      warn: 'Расписание, тарифы, правила изменения билета и условия бронирования могут меняться. В реальной поездке проверяй их у перевозчика или отеля.',
      task: 'Пройди итоговую карту и составь один вымышленный план поездки. Во всех разделах должны совпадать город, даты, транспорт, имя бронирования и количество ночей.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Транспорт и движение</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Модель</th></tr>
          <tr>
            <td>автобусом</td>
            <td><button class="speak-btn" data-speak-text="Busszal megyek." data-speak-lang="hu-HU">Busszal megyek.</button></td>
          </tr>
          <tr>
            <td>поездом в Печ</td>
            <td><button class="speak-btn" data-speak-text="Vonattal utazom Pécsre." data-speak-lang="hu-HU">Vonattal utazom Pécsre.</button></td>
          </tr>
          <tr>
            <td>самолётом</td>
            <td><button class="speak-btn" data-speak-text="Repülővel utazunk." data-speak-lang="hu-HU">Repülővel utazunk.</button></td>
          </tr>
          <tr>
            <td>пешком до отеля</td>
            <td><button class="speak-btn" data-speak-text="Gyalog megyek a szállodába." data-speak-lang="hu-HU">Gyalog megyek a szállodába.</button></td>
          </tr>
        </table>

        <div class="note">
          Не смешивай три значения:
          <button class="speak-btn" data-speak-text="Busszal megyek." data-speak-lang="hu-HU">Busszal megyek.</button>
          —
          <button class="speak-btn" data-speak-text="A buszon vagyok." data-speak-lang="hu-HU">A buszon vagyok.</button>
          —
          <button class="speak-btn" data-speak-text="Felszállok a buszra." data-speak-lang="hu-HU">Felszállok a buszra.</button>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Покупка билета</h4>
        <table class="conj">
          <tr><th>Шаг</th><th>Реплика</th></tr>
          <tr>
            <td>направление</td>
            <td><button class="speak-btn" data-speak-text="Pécsre szeretnék utazni." data-speak-lang="hu-HU">Pécsre szeretnék utazni.</button></td>
          </tr>
          <tr>
            <td>в одну сторону</td>
            <td><button class="speak-btn" data-speak-text="Egy útra szóló jegyet kérek." data-speak-lang="hu-HU">Egy útra szóló jegyet kérek.</button></td>
          </tr>
          <tr>
            <td>туда и обратно</td>
            <td><button class="speak-btn" data-speak-text="Retúrjegyet kérek." data-speak-lang="hu-HU">Retúrjegyet kérek.</button></td>
          </tr>
          <tr>
            <td>даты</td>
            <td><button class="speak-btn" data-speak-text="Holnap reggel indulnék, és vasárnap este jönnék vissza." data-speak-lang="hu-HU">Holnap reggel indulnék, és vasárnap este jönnék vissza.</button></td>
          </tr>
          <tr>
            <td>цена</td>
            <td><button class="speak-btn" data-speak-text="Mennyibe kerül a jegy?" data-speak-lang="hu-HU">Mennyibe kerül a jegy?</button></td>
          </tr>
          <tr>
            <td>оплата</td>
            <td><button class="speak-btn" data-speak-text="Lehet bankkártyával fizetni?" data-speak-lang="hu-HU">Lehet bankkártyával fizetni?</button></td>
          </tr>
          <tr>
            <td>проверка данных</td>
            <td><button class="speak-btn" data-speak-text="Jól értem? Holnap reggel indulok, és vasárnap este jövök vissza." data-speak-lang="hu-HU">Jól értem? Holnap reggel indulok, és vasárnap este jövök vissza.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Вокзал и аэропорт</h4>
        <table class="conj">
          <tr><th>Задача</th><th>Реплика</th></tr>
          <tr>
            <td>время отправления</td>
            <td><button class="speak-btn" data-speak-text="Mikor indul a vonat?" data-speak-lang="hu-HU">Mikor indul a vonat?</button></td>
          </tr>
          <tr>
            <td>номер пути</td>
            <td><button class="speak-btn" data-speak-text="Melyik vágányról indul?" data-speak-lang="hu-HU">Melyik vágányról indul?</button></td>
          </tr>
          <tr>
            <td>выход на посадку</td>
            <td><button class="speak-btn" data-speak-text="Hányas kaputól indul a járat?" data-speak-lang="hu-HU">Hányas kaputól indul a járat?</button></td>
          </tr>
          <tr>
            <td>длительность задержки</td>
            <td><button class="speak-btn" data-speak-text="Mennyit késik a vonat?" data-speak-lang="hu-HU">Mennyit késik a vonat?</button></td>
          </tr>
          <tr>
            <td>место пересадки</td>
            <td><button class="speak-btn" data-speak-text="Hol kell átszállni?" data-speak-lang="hu-HU">Hol kell átszállni?</button></td>
          </tr>
          <tr>
            <td>пропущенное соединение</td>
            <td><button class="speak-btn" data-speak-text="Lekéstem a csatlakozást." data-speak-lang="hu-HU">Lekéstem a csatlakozást.</button></td>
          </tr>
          <tr>
            <td>альтернатива</td>
            <td><button class="speak-btn" data-speak-text="Van esetleg másik vonat, amellyel hamarabb odaérhetek?" data-speak-lang="hu-HU">Van esetleg másik vonat, amellyel hamarabb odaérhetek?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Отель</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Реплика</th></tr>
          <tr>
            <td>имя и длительность бронирования</td>
            <td><button class="speak-btn" data-speak-text="Van egy foglalásom Kovács névre, két éjszakára." data-speak-lang="hu-HU">Van egy foglalásom Kovács névre, két éjszakára.</button></td>
          </tr>
          <tr>
            <td>точные даты</td>
            <td><button class="speak-btn" data-speak-text="Június tizedikétől tizenkettedikéig foglaltam." data-speak-lang="hu-HU">Június tizedikétől tizenkettedikéig foglaltam.</button></td>
          </tr>
          <tr>
            <td>документ</td>
            <td><button class="speak-btn" data-speak-text="Itt van az útlevelem." data-speak-lang="hu-HU">Itt van az útlevelem.</button></td>
          </tr>
          <tr>
            <td>номер и этаж</td>
            <td><button class="speak-btn" data-speak-text="A háromszáznégyes szoba a harmadik emeleten van." data-speak-lang="hu-HU">A háromszáznégyes szoba a harmadik emeleten van.</button></td>
          </tr>
          <tr>
            <td>завтрак</td>
            <td><button class="speak-btn" data-speak-text="A reggeli benne van az árban?" data-speak-lang="hu-HU">A reggeli benne van az árban?</button></td>
          </tr>
          <tr>
            <td>выезд</td>
            <td><button class="speak-btn" data-speak-text="Meddig kell kijelentkezni?" data-speak-lang="hu-HU">Meddig kell kijelentkezni?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Если данные бронирования не совпадают</h4>
        <p><button class="speak-btn" data-speak-text="A rendszerben csak egy éjszaka szerepel, pedig két éjszakára foglaltam." data-speak-lang="hu-HU">A rendszerben csak egy éjszaka szerepel, pedig két éjszakára foglaltam.</button></p>
        <p><button class="speak-btn" data-speak-text="Meg tudná nézni még egyszer?" data-speak-lang="hu-HU">Meg tudná nézni még egyszer?</button></p>
        <p><button class="speak-btn" data-speak-text="Van esetleg másik szabad szoba vagy más megoldás?" data-speak-lang="hu-HU">Van esetleg másik szabad szoba vagy más megoldás?</button></p>
        <p><button class="speak-btn" data-speak-text="Rendben, akkor elfogadom ezt a megoldást." data-speak-lang="hu-HU">Rendben, akkor elfogadom ezt a megoldást.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Ориентация</h4>
        <table class="conj">
          <tr><th>Задача</th><th>Реплика</th></tr>
          <tr>
            <td>спросить дорогу</td>
            <td><button class="speak-btn" data-speak-text="Elnézést, hogyan jutok el a pályaudvarra?" data-speak-lang="hu-HU">Elnézést, hogyan jutok el a pályaudvarra?</button></td>
          </tr>
          <tr>
            <td>идти прямо и повернуть</td>
            <td><button class="speak-btn" data-speak-text="Menjen egyenesen, aztán forduljon jobbra." data-speak-lang="hu-HU">Menjen egyenesen, aztán forduljon jobbra.</button></td>
          </tr>
          <tr>
            <td>сесть на автобус</td>
            <td><button class="speak-btn" data-speak-text="Szálljon fel a hatos buszra." data-speak-lang="hu-HU">Szálljon fel a hatos buszra.</button></td>
          </tr>
          <tr>
            <td>выйти на остановке</td>
            <td><button class="speak-btn" data-speak-text="Szálljon le a harmadik megállónál." data-speak-lang="hu-HU">Szálljon le a harmadik megállónál.</button></td>
          </tr>
          <tr>
            <td>уточнить время пешком</td>
            <td><button class="speak-btn" data-speak-text="Mennyi idő gyalog?" data-speak-lang="hu-HU">Mennyi idő gyalog?</button></td>
          </tr>
          <tr>
            <td>повторить маршрут</td>
            <td><button class="speak-btn" data-speak-text="Jól értem? Először egyenesen megyek, aztán jobbra fordulok?" data-speak-lang="hu-HU">Jól értem? Először egyenesen megyek, aztán jobbra fordulok?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Если не понял</h4>
        <p><button class="speak-btn" data-speak-text="Kérem, mondja még egyszer." data-speak-lang="hu-HU">Kérem, mondja még egyszer.</button></p>
        <p><button class="speak-btn" data-speak-text="Kérem, mondja lassabban." data-speak-lang="hu-HU">Kérem, mondja lassabban.</button></p>
        <p><button class="speak-btn" data-speak-text="Meg tudná mutatni a kijelzőn?" data-speak-lang="hu-HU">Meg tudná mutatni a kijelzőn?</button></p>
        <p><button class="speak-btn" data-speak-text="Meg tudná mutatni a térképen?" data-speak-lang="hu-HU">Meg tudná mutatni a térképen?</button></p>
        <p><button class="speak-btn" data-speak-text="Le tudná írni?" data-speak-lang="hu-HU">Le tudná írni?</button></p>
        <p><button class="speak-btn" data-speak-text="Köszönöm szépen a segítséget." data-speak-lang="hu-HU">Köszönöm szépen a segítséget.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Контрольные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>buszal</td>
            <td><button class="speak-btn" data-speak-text="busszal" data-speak-lang="hu-HU">busszal</button></td>
          </tr>
          <tr>
            <td>Egy útra. — как самостоятельная просьба о билете</td>
            <td><button class="speak-btn" data-speak-text="Egy útra szóló jegyet kérek." data-speak-lang="hu-HU">Egy útra szóló jegyet kérek.</button></td>
          </tr>
          <tr>
            <td>Retúr. — как полная просьба</td>
            <td><button class="speak-btn" data-speak-text="Retúrjegyet kérek." data-speak-lang="hu-HU">Retúrjegyet kérek.</button></td>
          </tr>
          <tr>
            <td>Melyik vágányon indul?</td>
            <td><button class="speak-btn" data-speak-text="Melyik vágányról indul?" data-speak-lang="hu-HU">Melyik vágányról indul?</button></td>
          </tr>
          <tr>
            <td>Mennyibe késik a vonat?</td>
            <td><button class="speak-btn" data-speak-text="Mennyit késik a vonat?" data-speak-lang="hu-HU">Mennyit késik a vonat?</button></td>
          </tr>
          <tr>
            <td>Szobát foglalni, éjszakára.</td>
            <td><button class="speak-btn" data-speak-text="Szobát szeretnék foglalni két éjszakára." data-speak-lang="hu-HU">Szobát szeretnék foglalni két éjszakára.</button></td>
          </tr>
          <tr>
            <td>Foglalásom van Kovács névben.</td>
            <td><button class="speak-btn" data-speak-text="Van egy foglalásom Kovács névre." data-speak-lang="hu-HU">Van egy foglalásom Kovács névre.</button></td>
          </tr>
          <tr>
            <td>Forduljon jobra.</td>
            <td><button class="speak-btn" data-speak-text="Forduljon jobbra." data-speak-lang="hu-HU">Forduljon jobbra.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Урок усвоен, если ты можешь</h4>
        <ul class="tick">
          <li>правильно назвать транспорт и направление;</li>
          <li>купить билет и подтвердить основные данные;</li>
          <li>уточнить отправление, путь, задержку и пересадку;</li>
          <li>сообщить о пропущенном соединении и попросить альтернативу;</li>
          <li>назвать данные бронирования и объяснить расхождение;</li>
          <li>уточнить завтрак, номер комнаты и время выезда;</li>
          <li>спросить дорогу и повторить маршрут своими словами;</li>
          <li>попросить повторить, показать или записать информацию;</li>
          <li>вежливо принять решение и завершить разговор.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Финальное задание</h4>
        <div class="task">
          Опиши идеальную вымышленную поездку по Венгрии в восьми–десяти предложениях.
          Обязательно включи транспорт, пункт назначения, билет, время отправления,
          одну проблему или задержку, бронирование на определённое число ночей,
          вопрос о дороге и одну фразу для проверки понимания.
        </div>

        <div class="note">
          Граница урока 27: освоен язык типичных ситуаций поездки уровня B1.
          Реальная самостоятельность также требует проверки актуальных правил,
          расписания, документов и условий конкретной услуги.
        </div>
      `,
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
