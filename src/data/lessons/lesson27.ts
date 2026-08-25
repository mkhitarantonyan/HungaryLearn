import { Lesson } from '../../types';
import { createMigrationActivities } from './migrationActivityFactory';

const L27_ACTIVITIES = createMigrationActivities({
  lessonId: 27,
  controlledTitle: 'Поездка: транспорт, билет, отель и дорога',
  controlledPassCount: 4,
  controlledExercises: [
    { kind: 'fillGap', id: 'l27-cp-1', prompt: 'busz + -val/-vel', accept: ['busszal'] },
    { kind: 'singleChoice', id: 'l27-cp-2', prompt: 'Попроси билет туда и обратно.', options: ['Egy retúrjegyet kérek.', 'Egy szobát kérek.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l27-cp-3', prompt: 'Сообщи о бронировании.', options: ['Van egy foglalásom.', 'Fáj a fejem.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l27-cp-4', prompt: 'Спроси, где остановка.', options: ['Hol van a megálló?', 'Mikor reggelizik?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l27-cp-5', prompt: 'Указание: «Идите прямо».', options: ['Menjen egyenesen.', 'Jöjjön tegnap.'], correctIndex: 0 },
  ],
  readingTitle: 'Чтение: информация о поездке',
  readingParagraphs: ['A vonat 9:10-kor indul Budapestről, és 11:35-kor érkezik Pécsre. A jegy a második osztályra szól. Pécsen a 3-as helyi busszal lehet a szállodához menni.'],
  readingPassCount: 2,
  readingQuestions: [
    { id: 'l27-read-1', question: 'Mikor indul a vonat?', options: ['9:10-kor', '11:35-kor', '3-kor'], correctIndex: 0 },
    { id: 'l27-read-2', question: 'Hová érkezik?', options: ['Pécsre', 'Szegedre', 'Bécsbe'], correctIndex: 0 },
    { id: 'l27-read-3', question: 'Melyik busszal lehet a szállodához menni?', options: ['A 2-essel', 'A 3-assal', 'A 10-essel'], correctIndex: 1 },
  ],
  listeningTitle: 'Аудирование: на рецепции отеля',
  listeningTranscript: 'Vendég: Jó estét! Van egy foglalásom Kovács névre, két éjszakára.\nRecepciós: Igen, látom. A szobája a második emeleten van, a reggeli hét és tíz óra között.',
  listeningPassCount: 2,
  listeningQuestions: [
    { id: 'l27-listen-1', question: 'Milyen névre szól a foglalás?', options: ['Kovács', 'Nagy', 'Szabó'], correctIndex: 0 },
    { id: 'l27-listen-2', question: 'Hány éjszakára?', options: ['Egy', 'Kettő', 'Három'], correctIndex: 1 },
    { id: 'l27-listen-3', question: 'Mikor van reggeli?', options: ['7 és 10 között', '10 és 12 között', 'Egész nap'], correctIndex: 0 },
  ],
  writingTitle: 'Письмо: запрос в гостиницу',
  writingPrompt: 'Напиши короткий запрос в гостиницу: даты, число гостей, тип номера и один вопрос об услуге или транспорте.',
  writingModel: ['Kétágyas szobát szeretnék foglalni június 10-től 12-ig.', 'Két vendég érkezik.', 'Van parkoló a szállodánál?'],
  writingRubric: ['Указаны даты и гости', 'Назван тип номера', 'Есть практический вопрос'],
  recordingTitle: 'Говорение: билет, заселение и дорога',
  recordingInstructions: 'Запиши три короткие ситуации: покупка билета, заселение по бронированию и вопрос о дороге.',
  recordingTarget: 'Egy retúrjegyet kérek Pécsre. Van egy foglalásom Kovács névre. Elnézést, hol van a buszmegálló?',
  objectiveChecks: [
    { objectiveId: 'l27_name-transport', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l27_buy-tickets', activity: 'recording', evidenceKind: 'speaking' },
    { objectiveId: 'l27_book-room', activity: 'writing', evidenceKind: 'writing' },
    { objectiveId: 'l27_ask-directions', activity: 'recording', evidenceKind: 'speaking' },
    { objectiveId: 'l27_travel-dialogue', activity: 'listening', evidenceKind: 'listening' },
  ],
});

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
