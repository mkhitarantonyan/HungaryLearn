import { Lesson } from '../../types';

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
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 26 · 2/11 · У МЕНЯ БОЛИТ...",
      title: "Fáj a...",
      subtitle: "Конструкция «У меня болит...»",
      body: `
   <p>Чтобы сказать «у меня болит [часть тела]», используется глагол <span class="hu-word">fáj</span> (единственное число) или <span class="hu-word">fájnak</span> (множественное число) + притяжательная форма части тела (из 15-го урока!):</p>
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
   <p><button class="speak-btn" data-speak-text="Naponta kétszer, evés után." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Naponta kétszer, evés után.</button> <span style="color:#8a7a68">(Дважды в день, после еды)</span></p>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 26 · 7/11 · ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "Описание своего состояния",
      body: `
   <p><button class="speak-btn" data-speak-text="Tegnap óta fáj a torkom és lázam is van." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tegnap óta fáj a torkom és lázam is van.</button> <span style="color:#8a7a68">(Со вчерашнего дня у меня болит горло и есть температура)</span></p>
   <p><button class="speak-btn" data-speak-text="Szedje ezt a gyógyszert három napig!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szedje ezt a gyógyszert három napig!</button> <span style="color:#8a7a68">(Принимайте это лекарство три дня! — суффикс -ig из 11-го урока!)</span></p>
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
    { id: "l26_v1", hu: "fejfájás", ru: "головная боль", category: "Здоровье", exampleSentence: "Fejfájásom van." },
    { id: "l26_v2", hu: "gyógyszer", ru: "лекарство", category: "Здоровье", exampleSentence: "Beveszem a gyógyszert." },
    { id: "l26_v3", hu: "recept", ru: "рецепт (медицинский)", category: "Здоровье", exampleSentence: "Az orvos receptet írt." },
    { id: "l26_v4", hu: "gyógyszertár", ru: "аптека", category: "Здоровье", exampleSentence: "A gyógyszertárban vagyok." }
  ],
  quiz: [
    {
      id: 2601,
      question: "Как правильнее сказать по-венгерски «У меня болит голова»?",
      options: ["Fáj a fejem", "Fáj én fej", "Fej van fáj", "Nekem fej fáj"],
      correctIndex: 0,
      explanation: "Используется конструкция Fáj a + притяжательная форма части тела: Fáj a fejem."
    },
    {
      id: 2602,
      question: "Что означает словосочетание «lázam van»?",
      options: ["У меня температура", "У меня кружится голова", "Я простудился", "Я болен"],
      correctIndex: 0,
      explanation: "Lázam van означает «у меня температура»."
    },
    {
      id: 2603,
      question: "Какое послелог/предлог используется для выражения «лекарство ОТ [чего-то]»?",
      options: ["ellen", "után", "előtt", "mellett"],
      correctIndex: 0,
      explanation: "Послелог ellen означает «против/от» (например, fejfájás ellen — от головной боли)."
    }
  ]
};
