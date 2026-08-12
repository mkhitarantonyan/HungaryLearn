import { Lesson } from '../../types';

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
     <tr><td>busz (автобус)</td><td><button class="speak-btn" data-speak-text="buszzal" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> buszzal</button> <span class="pron">(ассимиляция v→z!)</span></td></tr>
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
       <p><button class="speak-btn" data-speak-text="vágány" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vágány</button> — путь / платформа</p>
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
   <p><button class="speak-btn" data-speak-text="Retúr jegyet kérek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Retúr jegyet kérek.</button> <span style="color:#8a7a68">(Билет туда и обратно)</span></p>
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
     <li>Транспорт: buszzal, vonattal, repülővel, metróval, gyalog</li>
     <li>Касса: egy útra (в одну сторону) / retúr (туда-обратно)</li>
     <li>Отель: szobát foglalni, éjszakára (на скольких ночей)</li>
     <li>Ориентация: menjen egyenesen, forduljon jobbra/balra</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Опишите ваш идеальный план путешествия в Венгрию — 6-8 предложений. В следующем уроке — финал курса!</div>
 `
    }
  ],
  vocabulary: [
    { id: "l27_v1", hu: "pályaudvar", ru: "ж/д вокзал", category: "Транспорт", exampleSentence: "A Keleti pályaudvaron vagyok." },
    { id: "l27_v2", hu: "repülőtér", ru: "аэропорт", category: "Транспорт", exampleSentence: "Kint vagyok a repülőtéren." },
    { id: "l27_v3", hu: "szálloda", ru: "отель / гостиница", category: "Путешествия", exampleSentence: "Szép szállodában lakunk." },
    { id: "l27_v4", hu: "foglalás", ru: "бронирование", category: "Путешествия", exampleSentence: "Megvan a foglalásom." }
  ],
  quiz: [
    {
      id: 2701,
      question: "Как по-венгерски сказать «на автобусе»?",
      options: ["buszzal", "buszban", "buszon", "buszra"],
      correctIndex: 0,
      explanation: "Для транспорта используется творительный падеж -val / -vel (с ассимиляцией v->z): buszzal."
    },
    {
      id: 2702,
      question: "Какое выражение означает билет «туда и обратно»?",
      options: ["retúr jegy", "egy útra jegy", "olcsó jegy", "diákjegy"],
      correctIndex: 0,
      explanation: "Билет туда-обратно называется retúr jegy."
    },
    {
      id: 2703,
      question: "Какое слово означает «бронирование»?",
      options: ["foglalás", "késés", "vágány", "átszállás"],
      correctIndex: 0,
      explanation: "«Foglalás» означает бронирование (например, номера в отеле или столика)."
    }
  ]
};
