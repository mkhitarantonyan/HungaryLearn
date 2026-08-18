import { Lesson } from '../../types';

export const LESSON_19: Lesson = {
  id: 19,
  number: 19,
  level: 'A2',
  title: 'Урок 19 · A jövő idő',
  subtitle: 'Будущее время (fog + инфинитив)',
  description: 'Образование будущего времени с помощью вспомогательного глагола fog и инфинитива, два спряжения fog (fogok / fogom), отрицание и маркеры времени.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 19 · 1/11 · КОНСТРУКЦИЯ",
      title: "A jövő idő",
      subtitle: "Будущее время — инфинитив + fog",
      body: `
   <p>Будущее время строится из двух частей: <b>инфинитив</b> смыслового глагола (18-й урок, суффикс -ni) + вспомогательный глагол <span class="hu-word">fog</span> (буквально «ловить/хватать», но здесь — чисто грамматический показатель будущего), который спрягается по лицам.</p>
   <p><button class="speak-btn" data-speak-text="Tanulni fogok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tanulni fogok.</button> <span style="color:#8a7a68">(Я буду учиться / я выучу)</span></p>
   <div class="note">Обычный порядок слов — инфинитив, затем fog: „tanulni fogok“, а не „fogok tanulni“ (хотя второй вариант тоже иногда встречается и понятен).</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 19 · 2/11 · СПРЯЖЕНИЕ FOG",
      title: "A fog ragozása",
      subtitle: "У fog тоже два спряжения — как у обычного глагола",
      body: `
   <p><button class="speak-btn" data-speak-text="fog" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fog</button> — обычный глагол (задние гласные, как <button class="speak-btn" data-speak-text="vár" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vár</button> из 4-го и 13-го уроков), и у него, как у любого другого глагола, <b>есть оба типа спряжения</b> — в зависимости от того, определённое ли дополнение у смыслового глагола.</p>
   <table class="conj">
     <tr><th>Кто</th><th>Неопределённое</th><th>Определённое</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="fogok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fogok</button></td><td><button class="speak-btn" data-speak-text="fogom" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fogom</button></td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="fogsz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fogsz</button></td><td><button class="speak-btn" data-speak-text="fogod" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fogod</button></td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="fog" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fog</button></td><td><button class="speak-btn" data-speak-text="fogja" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fogja</button></td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="fogunk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fogunk</button></td><td><button class="speak-btn" data-speak-text="fogjuk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fogjuk</button></td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="fogtok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fogtok</button></td><td><button class="speak-btn" data-speak-text="fogjátok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fogjátok</button></td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="fognak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fognak</button></td><td><button class="speak-btn" data-speak-text="fogják" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fogják</button></td></tr>
   </table>
   <div class="note">Это отличная новость: правило то же самое, что вы уже знаете из 13-го урока — конкретное дополнение → определённая форма, здесь она просто «переезжает» с инфинитива на fog, потому что сам инфинитив никогда не меняется.</div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 19 · 3/11 · ПРИМЕРЫ",
      title: "Példák",
      subtitle: "Будущее время в действии",
      body: `
   <p><button class="speak-btn" data-speak-text="Holnap iskolába fogok menni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Holnap iskolába fogok menni.</button> <span style="color:#8a7a68">(Завтра пойду в школу)</span></p>
   <p><button class="speak-btn" data-speak-text="Hétfőn fogunk dolgozni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Hétfőn fogunk dolgozni.</button> <span style="color:#8a7a68">(Мы будем работать в понедельник)</span></p>
   <p><button class="speak-btn" data-speak-text="Autót fog venni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Autót fog venni.</button> <span style="color:#8a7a68">(Она купит машину)</span></p>
   <p><button class="speak-btn" data-speak-text="El fogják olvasni ezt a könyvet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> El fogják olvasni ezt a könyvet.</button> <span style="color:#8a7a68">(Они прочитают эту книгу — дополнение конкретное, поэтому fog здесь в определённой форме „fogják”)</span></p>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 19 · 4/11 · ОТРИЦАНИЕ",
      title: "Tagadás",
      subtitle: "«Не буду...»",
      body: `
   <p>Отрицание <button class="speak-btn" data-speak-text="nem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nem</button> ставится прямо перед <span class="hu-word">fog</span>:</p>
   <p><button class="speak-btn" data-speak-text="Nem fogok dolgozni holnap." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem fogok dolgozni holnap.</button> <span style="color:#8a7a68">(Я не буду завтра работать)</span></p>
   <p><button class="speak-btn" data-speak-text="Nem fog eljönni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem fog eljönni.</button> <span style="color:#8a7a68">(Он не придёт)</span></p>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 19 · 5/11 · АЛЬТЕРНАТИВА",
      title: "Jelen idő jövő értelemben",
      subtitle: "Настоящее время в значении ближайшего будущего",
      body: `
   <p>Как и в русском («завтра еду в Будапешт» вместо «поеду»), венгерский часто использует <b>настоящее время</b> с указанием времени для близкого, запланированного будущего — особенно с глаголами движения:</p>
   <p><button class="speak-btn" data-speak-text="Holnap Budapestre megyek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Holnap Budapestre megyek.</button> <span style="color:#8a7a68">(Завтра еду в Будапешт — настоящее время, но смысл будущего)</span></p>
   <div class="note">Оба варианта — с „fog“ и с настоящим временем — грамматически верны; выбор часто зависит от степени уверенности и разговорного стиля, а не от строгого правила.</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 19 · 6/11 · СЛОВАРЬ",
      title: "Jövőre utaló szavak",
      subtitle: "Слова, указывающие на будущее",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="holnap" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> holnap</button> — завтра (повтор из 5-го урока)</p>
       <p><button class="speak-btn" data-speak-text="holnapután" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> holnapután</button> — послезавтра</p>
       <p><button class="speak-btn" data-speak-text="jövő héten" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> jövő héten</button> — на следующей неделе</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="jövő hónapban" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> jövő hónapban</button> — в следующем месяце</p>
       <p><button class="speak-btn" data-speak-text="jövőre" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> jövőre</button> — в следующем году</p>
       <p><button class="speak-btn" data-speak-text="hamarosan" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hamarosan</button> — скоро</p>
     </div>
   </div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 19 · 7/11 · ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "Собираем всё вместе",
      body: `
   <p><button class="speak-btn" data-speak-text="Jövőre Örményországba fogok menni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jövőre Örményországba fogok menni.</button> <span style="color:#8a7a68">(В следующем году я поеду в Армению)</span></p>
   <p><button class="speak-btn" data-speak-text="Hamarosan találkozunk." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Hamarosan találkozunk.</button> <span style="color:#8a7a68">(Скоро мы увидимся)</span></p>
   <p><button class="speak-btn" data-speak-text="Jövő héten sokat kell majd dolgoznom." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jövő héten sokat kell majd dolgoznom.</button> <span style="color:#8a7a68">(На следующей неделе мне нужно будет много работать)</span></p>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 19 · 8/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Планы на будущее",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Mit fogsz csinálni a hétvégén?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mit fogsz csinálni a hétvégén?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Szeretnék pihenni, talán moziba fogok menni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretnék pihenni, talán moziba fogok menni.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Én jövő héten Budapestre fogok utazni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Én jövő héten Budapestre fogok utazni.</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Az jó lesz, sok szerencsét az utazáshoz!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Az jó lesz, sok szerencsét az utazáshoz!</button></p>
   <div class="task">Задание 1. Прочитайте диалог, затем расскажите о своих реальных планах на следующую неделю по-венгерски.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 19 · 9/11 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      body: `
   <ol class="tasklist">
     <li>Поставьте в будущее время: „tanulok“, „dolgozom“, „megyek“</li>
     <li>Переведите: «Мы не будем сегодня учиться»</li>
     <li>Составьте предложение о планах на следующий год</li>
     <li>Объясните, почему в „El fogják olvasni a könyvet” используется именно определённая форма fog</li>
     <li>Переведите одно и то же предложение двумя способами: с fog и настоящим временем</li>
   </ol>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 19 · 10/11 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Что дальше",
      body: `
   <p>Теперь у вас есть все три времени в общих чертах: настоящее (4-й и 13-й уроки), будущее (этот урок) — и осталось только прошедшее. В следующем уроке разберём прошедшее время полностью и подробно, с обоими типами спряжения.</p>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 19 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 19-го урока",
      body: `
   <ul class="tick">
     <li>Будущее время: инфинитив (-ni) + спрягаемый fog</li>
     <li>fog имеет оба спряжения (неопределённое/определённое) — так же, как обычный глагол из 4-го и 13-го уроков</li>
     <li>Отрицание — nem перед fog</li>
     <li>Настоящее время + указание времени — тоже частый способ выразить ближайшее будущее</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Опишите свои планы на следующую неделю — минимум 5 предложений с fog. В следующем уроке — прошедшее время полностью.</div>
 `
    }
  ],
  vocabulary: [
    { id: "l19_v1", hu: "holnapután", ru: "послезавтра", category: "Время", exampleSentence: "Holnapután találkozunk.",
        ipa: "[hˈolnɒputɒːn]"
    },
    { id: "l19_v2", hu: "jövő héten", ru: "на следующей неделе", category: "Время", exampleSentence: "Jövő héten utazom.",
        ipa: "[jˈøvøː hɛːtɛn]"
    },
    { id: "l19_v3", hu: "jövő hónapban", ru: "в следующем месяце", category: "Время", exampleSentence: "Jövő hónapban vizsgázom.",
        ipa: "[jˈøvøː hoːnɒpbɒn]"
    },
    { id: "l19_v4", hu: "jövőre", ru: "в следующем году", category: "Время", exampleSentence: "Jövőre Budapestre megyek.",
        ipa: "[jˈøvøːrɛ]"
    },
    { id: "l19_v5", hu: "hamarosan", ru: "скоро", category: "Время", exampleSentence: "Hamarosan kezdünk.",
        ipa: "[hɒmɒrˈoʃɒn]"
    }
  ],
    quiz: [
    {
      id: 1901,
      question: 'Из чего состоит сложное будущее время в венгерском языке?',
      options: [
        'Инфинитив смыслового глагола + спрягаемый fog',
        'Настоящее время + fog',
        'Прошедшее время + fog',
        'Инфинитив + van'
      ],
      correctIndex: 0,
      explanation: 'Будущее время образуется сочетанием инфинитива смыслового глагола (например, tanulni) и спрягаемой формы глагола fog (fogok, fogsz, fog...).'
    },
    {
      id: 1902,
      question: 'Какая форма глагола fog используется с определённым дополнением в 1-м лице единственного числа (én)?',
      options: ['fogok', 'fogom', 'fogsz', 'fogja'],
      correctIndex: 1,
      explanation: 'Для определённого спряжения в 1-м лице используется форма fogom: El fogom olvasni a könyvet. (Я прочитаю эту книгу).'
    },
    {
      id: 1903,
      question: 'Как образуется отрицание в будущем времени с глаголом fog?',
      options: [
        'Nem fogok dolgozni (nem перед fog)',
        'Fogok nem dolgozni',
        'Dolgozni nem fogok',
        'Nem dolgozni fogok'
      ],
      correctIndex: 0,
      explanation: 'Отрицание ставится перед вспомогательным глаголом fog: Nem fogok dolgozni (Я не буду работать).'
    },
    {
      id: 1904,
      question: 'Какое слово означает "послезавтра" по-венгерски?',
      options: ['holnapután', 'holnap', 'jövő héten', 'tegnapelőtt'],
      correctIndex: 0,
      explanation: '«Послезавтра» – holnapután. Holnap – завтра, jövő héten – на следующей неделе, tegnapelőtt – позавчера (урок 19, слайд 6).'
    },
    {
      id: 1905,
      question: 'Какая форма fog используется в предложении "Autót fog venni" (Она купит машину)?',
      options: ['fog (неопределённое спряжение, 3-е лицо)', 'fogja (определённое спряжение, 3-е лицо)', 'fogok (1-е лицо)', 'fogunk (1-е лицо мн.ч.)'],
      correctIndex: 0,
      explanation: '"Autót" – неопределённое дополнение (какую-то машину), поэтому используется неопределённое спряжение: fog. Если бы было "az autót" (эту конкретную машину), использовалось бы fogja.'
    },
    {
      id: 1906,
      question: 'Можно ли использовать настоящее время для выражения будущего действия в венгерском языке?',
      options: [
        'Да, особенно с глаголами движения и указанием времени',
        'Нет, только будущее время с fog',
        'Только в прошедшем времени',
        'Только в условном наклонении'
      ],
      correctIndex: 0,
      explanation: 'Да, венгерский часто использует настоящее время с указанием времени для близкого будущего, особенно с глаголами движения: Holnap Budapestre megyek. (Завтра еду в Будапешт) – настоящее время, но смысл будущего (урок 19, слайд 5).'
    }
  ],
  objectives: [
    { id: 'l19_form-future', text: 'Образовывать будущее время с помощью fog + инфинитив.', skills: ['grammar', 'writing'] },
    { id: 'l19_conjugate-fog', text: 'Спрягать вспомогательный глагол fog по лицам.', skills: ['grammar', 'writing'] },
    { id: 'l19_use-future-plans', text: 'Рассказывать о планах и намерениях в будущем времени.', skills: ['speaking', 'writing'] },
    { id: 'l19_distinguish-tenses', text: 'Различать настоящее, прошедшее и будущее время на слух и в тексте.', skills: ['listening', 'reading'] },
    { id: 'l19_make-predictions', text: 'Делать прогнозы и предположения о будущем.', skills: ['speaking', 'writing'] },
  ],
};
