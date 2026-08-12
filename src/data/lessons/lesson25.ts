import { Lesson } from '../../types';

export const LESSON_25: Lesson = {
  id: 25,
  number: 25,
  level: 'B1',
  title: 'Урок 25 · Munka és karrier',
  subtitle: 'Работа, профессии и собеседование',
  description: 'Названия профессий, вопрос Mivel foglalkozol?, фразы для собеседования (állásinterjú), составление резюме и офисная лексика.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 25 · 1/11 · ТЕМА «РАБОТА»",
      title: "Munka és karrier",
      subtitle: "Разговоры о профессии и трудоустройстве",
      body: `
   <p>Тема работы — одна из самых частых при знакомстве и на уровне B1. В этом уроке научимся говорить о своей специальности, обсуждать обязанностей на рабочем месте, проходить собеседование и писать резюме по-венгерски.</p>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 25 · 2/11 · КЕМ ТЫ РАБОТАЕШЬ?",
      title: "Mivel foglalkozol?",
      subtitle: "Как спросить и ответить о профессии",
      body: `
   <p>Главный вопрос о роде занятий:</p>
   <p><button class="speak-btn" data-speak-text="Mivel foglalkozol?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mivel foglalkozol?</button> <span style="color:#8a7a68">(Чем ты занимаешься? / Кем работаешь?)</span></p>
   <p><button class="speak-btn" data-speak-text="Mivel foglalkozik?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mivel foglalkozik?</button> <span style="color:#8a7a68">(на «Вы»)</span></p>
   <p>Способы ответа (вспомните 9-й урок — пропуск van при существительном-сказуемом!):</p>
   <p><button class="speak-btn" data-speak-text="Mérnök vagyok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mérnök vagyok.</button> <span style="color:#8a7a68">(Я инженер)</span></p>
   <p><button class="speak-btn" data-speak-text="Informatikusként dolgozom." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Informatikusként dolgozom.</button> <span style="color:#8a7a68">(Работаю в качестве айтишника/программиста — суффикс -ként из 16-го урока!)</span></p>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 25 · 3/11 · РАБОЧЕЕ МЕСТО",
      title: "A munkahelyen",
      subtitle: "Офис, коллеги, задачи",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="munkahely" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> munkahely</button> — место работы</p>
       <p><button class="speak-btn" data-speak-text="kolléga / munkatárs" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kolléga / munkatárs</button> — коллега</p>
       <p><button class="speak-btn" data-speak-text="főnök" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> főnök</button> — начальник / босс</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="iroda" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> iroda</button> — офис</p>
       <p><button class="speak-btn" data-speak-text="fizetés" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fizetés</button> — зарплата</p>
       <p><button class="speak-btn" data-speak-text="értekezlet / megbeszélés" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> értekezlet / megbeszélés</button> — собрание / совещание</p>
     </div>
   </div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 25 · 4/11 · СОБЕСЕДОВАНИЕ",
      title: "Állásinterjú",
      subtitle: "Ключевые вопросы и фразы",
      body: `
   <p><button class="speak-btn" data-speak-text="Szeretnék jelentkezni erre az állásra." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretnék jelentkezni erre az állásra.</button> <span style="color:#8a7a68">(Я хотел бы подать заявку на эту вакансию)</span></p>
   <p><button class="speak-btn" data-speak-text="Milyen tapasztalata van?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Milyen tapasztalata van?</button> <span style="color:#8a7a68">(Какой у вас опыт?)</span></p>
   <p><button class="speak-btn" data-speak-text="Öt év tapasztalatom van ebben a munkában." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Öt év tapasztalatom van ebben a munkában.</button> <span style="color:#8a7a68">(У меня 5 лет опыта в этой работе)</span></p>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 25 · 5/11 · РЕЗЮМЕ",
      title: "Önéletrajz",
      subtitle: "Составление CV по-венгерски",
      body: `
   <p>Основные разделы венгерского резюме (<span class="hu-word">önéletrajz</span>):</p>
   <ul class="tick">
     <li><b>Személyes adatok</b> — Личные данные</li>
     <li><b>Tanulmányok</b> — Образование / учёба</li>
     <li><b>Munkatapasztalat</b> — Опыт работы</li>
     <li><b>Nyelvismeret</b> — Знание языков (например: <button class="speak-btn" data-speak-text="angol középfok, magyar alapfok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> angol középfok, magyar alapfok</button>)</li>
     <li><b>Készségek</b> — Навыки / умения</li>
   </ul>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 25 · 6/11 · ОФИСНЫЕ ФРАЗЫ",
      title: "Munkahelyi kifejezések",
      subtitle: "Рабочая переписка и устное общение",
      body: `
   <p><button class="speak-btn" data-speak-text="Küldök egy e-mailt." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Küldök egy e-mailt.</button> <span style="color:#8a7a68">(Я отправлю имейл)</span></p>
   <p><button class="speak-btn" data-speak-text="Mikorra lesz kész a projekt?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mikorra lesz kész a projekt?</button> <span style="color:#8a7a68">(К какому сроку будет готов проект?)</span></p>
   <p><button class="speak-btn" data-speak-text="Péntekre kész lesz." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Péntekre kész lesz.</button> <span style="color:#8a7a68">(К пятнице будет готов — суффикс -ra/re для срока!)</span></p>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 25 · 7/11 · ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "Разговор о работе",
      body: `
   <p><button class="speak-btn" data-speak-text="Szeretem a munkámat, mert nagyon érdekes." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretem a munkámat, mert nagyon érdekes.</button> <span style="color:#8a7a68">(Я люблю свою работу, потому что она очень интересная — союз mert из 24-го урока!)</span></p>
   <p><button class="speak-btn" data-speak-text="A kollégáim nagyon kedvesek és segítőkészek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A kollégáim nagyon kedvesek és segítőkészek.</button> <span style="color:#8a7a68">(Мои коллеги очень милые и отзывчивые)</span></p>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 25 · 8/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Фрагмент собеседования",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Jó napot! Miért szeretne nálunk dolgozni?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó napot! Miért szeretne nálunk dolgozni?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Mert ez a cég nagyon sikeres, és szeretnék új dolgokat tanulni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mert ez a cég nagyon sikeres, és szeretnék új dolgokat tanulni.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Milyen nyelveken beszél?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Milyen nyelveken beszél?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Folyékonyan beszélek angolul és oroszul, és tanulok magyarul." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Folyékonyan beszélek angolul és oroszul, és tanulok magyarul.</button></p>
   <div class="task">Задание 1. Ответьте на вопрос «Milyen nyelveken beszél?» своими реальными знаниями языков.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 25 · 9/11 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      body: `
   <ol class="tasklist">
     <li>Ответьте на вопрос „Mivel foglalkozol?“ двумя способами (через або через -ként)</li>
     <li>Назовите 5 офисных терминов (коллега, зарплата, совещание, офис, начальник)</li>
     <li>Переведите: «У меня 3 года опыта в сфере программирования»</li>
     <li>Переведите: «Проект будет готов к понедельнику»</li>
     <li>Составьте краткое устное резюме из 4 предложений про себя</li>
   </ol>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 25 · 10/11 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Что дальше",
      body: `
   <p>В следующем, 26-м уроке — еще одна важнейшая бытовая и социальная тема: здоровье, самочувствие, визит к врачу (orvosnál) и описание симптомов.</p>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 25 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 25-го урока",
      body: `
   <ul class="tick">
     <li>Вопрос Mivel foglalkozol? / Mivel foglalkozik?</li>
     <li>Ответ: [профессия] vagyok или [профессия]-ként dolgozom</li>
     <li>Собеседование: állásinterjú, munkatapasztalat, jelentkezni</li>
     <li>Резюме: önéletrajz (tanulmányok, készségek, nyelvismeret)</li>
     <li>Сроки: péntekre (к пятнице) — суффикс -ra/re</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Напишите мини-резюме про себя по 5 разделам (раздел önéletrajz) по-венгерски.</div>
 `
    }
  ],
  vocabulary: [
    { id: "l25_v1", hu: "munkahely", ru: "место работы / офис", category: "Работа", exampleSentence: "A munkahelyem a belvárosban van." },
    { id: "l25_v2", hu: "kolléga", ru: "коллега", category: "Работа", exampleSentence: "Jó kollégáim vannak." },
    { id: "l25_v3", hu: "fizetés", ru: "зарплата", category: "Работа", exampleSentence: "Hónap elején van fizetés." },
    { id: "l25_v4", hu: "megbeszélés", ru: "совещание", category: "Работа", exampleSentence: "Tíz órakor megbeszélés lesz." }
  ],
  quiz: [
    {
      id: 2501,
      question: "Как по-венгерски спросить «Чем ты занимаешься / Кем работаешь?»?",
      options: ["Mivel foglalkozol?", "Hol laksz?", "Hogy hívnak?", "Hány éves vagy?"],
      correctIndex: 0,
      explanation: "«Mivel foglalkozol?» переводится как «Чем ты занимаешься / Кем работаешь?»."
    },
    {
      id: 2502,
      question: "Какое слово означает «резюме» по-венгерски?",
      options: ["önéletrajz", "munkahely", "fizetés", "értekezlet"],
      correctIndex: 0,
      explanation: "«Önéletrajz» означает резюме / CV."
    },
    {
      id: 2503,
      question: "Какое окончание используется для обозначения срока («к понедельнику» — hétfő...)?",
      options: ["-ra / -re", "-ban / -ben", "-nak / -nek", "-tól / -től"],
      correctIndex: 0,
      explanation: "Для срока действия или завершения используется суффикс -ra / -re (например, hétfőre — к понедельнику, péntekre — к пятнице)."
    }
  ]
};
