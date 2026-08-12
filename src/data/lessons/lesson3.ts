import { Lesson } from '../../types';

export const LESSON_3: Lesson = {
  id: 3,
  number: 3,
  level: 'A0',
  title: 'Урок 3 · Főnév, névelő, többes szám',
  subtitle: 'Существительное, артикли (a/az/egy), множественное число (-k)',
  description: 'Отсутствие рода, определенные (a/az) и неопределенные (egy) артикли, правила образования множественного числа (-k) и правило о числах.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 3 · 1/11 · СУЩЕСТВИТЕЛЬНОЕ",
      title: "A főnév",
      subtitle: "Основы венгерского существительного",
      body: `
   <p>Хорошая новость: венгерское существительное гораздо проще, чем, например, немецкое или русское.</p>
   <ul class="tick">
     <li><b>Нет грамматического рода</b> — ни одно существительное не является «женским» или «мужским»</li>
     <li>Существительные не изменяются в зависимости от прилагательного (прилагательное остается неизменным)</li>
     <li>Множественное число и падежи добавляются к концу слова (агглютинация)</li>
   </ul>
   <div class="note">Венгерский — «агглютинативный» язык. Это значит, что к слову «приклеиваются» суффиксы в ряд, каждый со своим четким значением. Этот принцип нам очень пригодится в последующих уроках о падежах.</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 3 · 2/11 · ОПРЕДЕЛЕННЫЙ АРТИКЛЬ",
      title: "A határozott névelő",
      subtitle: "«a» и «az» — определенный артикль",
      body: `
   <p>В венгерском языке есть определенный артикль, эквивалент английского «the», который ставится <b>перед</b> существительным.</p>
   <table class="conj">
     <tr><th>Правило</th><th>Пример</th></tr>
     <tr><td><b>a</b> — перед словом, начинающимся с согласной</td><td><button class="speak-btn" data-speak-text="a ház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> a ház</button> (этот дом)</td></tr>
     <tr><td><b>az</b> — перед словом, начинающимся с гласной</td><td><button class="speak-btn" data-speak-text="az alma" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> az alma</button> (это яблоко)</td></tr>
   </table>
   <p><button class="speak-btn" data-speak-text="A ház nagy." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A ház nagy.</button> <span style="color:#8a7a68">(Этот дом большой)</span></p>
   <div class="note">Выбор зависит от <b>первого звука следующего слова</b>, а не от грамматического признака слова — это очень простое и механическое правило.</div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 3 · 3/11 · НЕОПРЕДЕЛЕННЫЙ АРТИКЛЬ",
      title: "Az egy",
      subtitle: "«egy» — и «один», и неопределенный артикль",
      body: `
   <p><span class="hu-word">egy</span> означает и число «один», и служит в качестве неопределенного артикля («a/an» в английском).</p>
   <p><button class="speak-btn" data-speak-text="egy ház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> egy ház</button> <span style="color:#8a7a68">(какой-то дом / один дом)</span></p>
   <p><button class="speak-btn" data-speak-text="egy könyv" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> egy könyv</button> <span style="color:#8a7a68">(какая-то книга)</span></p>
   <div class="warn">Когда говорят в общем или во множественном смысле (без конкретизации), артикль вообще не ставится: <button class="speak-btn" data-speak-text="Szeretem a könyveket." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretem a könyveket.</button> = «Я люблю книги» (в общем, не конкретные книги).</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 3 · 4/11 · МНОЖЕСТВЕННОЕ ЧИСЛО",
      title: "A többes szám",
      subtitle: "Множественное число — основная закономерность",
      body: `
   <p>Множественное число образуется с помощью суффикса <span class="hu-word">-k</span>. В словах, оканчивающихся на согласную, часто нужна соединительная гласная (по гармонии): <span class="hu-word">-ok / -ek / -ök</span>.</p>
   <table class="conj">
     <tr><th>Единственное</th><th>Множественное</th><th>Значение</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="asztal" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> asztal</button></td><td><button class="speak-btn" data-speak-text="asztalok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> asztalok</button></td><td>стол(ы)</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="kert" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kert</button></td><td><button class="speak-btn" data-speak-text="kertek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kertek</button></td><td>сад(ы)</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="gyümölcs" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> gyümölcs</button></td><td><button class="speak-btn" data-speak-text="gyümölcsök" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> gyümölcsök</button></td><td>фрукт(ы)</td></tr>
   </table>
   <p>Если слово оканчивается на <b>гласную a или e</b>, то эта гласная удлиняется (a→á, e→é) и просто добавляется -k.</p>
   <table class="conj">
     <tr><th>Единственное</th><th>Множественное</th><th>Значение</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="kutya" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kutya</button></td><td><button class="speak-btn" data-speak-text="kutyák" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kutyák</button></td><td>собака(и)</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="alma" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> alma</button></td><td><button class="speak-btn" data-speak-text="almák" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> almák</button></td><td>яблоко(и)</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="kefe" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kefe</button></td><td><button class="speak-btn" data-speak-text="kefék" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kefék</button></td><td>щетка(и)</td></tr>
   </table>
   <p>К словам, оканчивающимся на другие гласные (i, í, o, ó, u, ú, ö, ő, ü, ű), просто добавляется -k, без изменений.</p>
   <p><button class="speak-btn" data-speak-text="autó" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> autó</button> → <button class="speak-btn" data-speak-text="autók" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> autók</button> <span style="color:#8a7a68">(машина(ы))</span></p>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 3 · 5/11 · ИСКЛЮЧЕНИЯ",
      title: "Kivételek",
      subtitle: "Когда вместо -ok ставится -ak",
      body: `
   <p>Для слов с задними гласными (a, á, o, u), оканчивающихся на согласную, выбор между <b>-ok</b> и <b>-ak</b> не всегда предсказуем — некоторые часто используемые, особенно односложные, слова принимают -ak.</p>
   <table class="conj">
     <tr><th>Единственное</th><th>Множественное</th><th>Значение</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="ház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ház</button></td><td><button class="speak-btn" data-speak-text="házak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> házak</button></td><td>дом(а)</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="láb" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> láb</button></td><td><button class="speak-btn" data-speak-text="lábak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> lábak</button></td><td>нога(и)</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="nap" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nap</button></td><td><button class="speak-btn" data-speak-text="napok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> napok</button></td><td>день(дни) / солнце(а)</td></tr>
   </table>
   <div class="warn">Множественное число слов этой группы лучше всего учить как словарный запас — вместе со словом, а не вычислять по правилу. Смотря в словарь, всегда обращайте внимание на форму множественного числа.</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 3 · 6/11 · ЧИСЛА И МНОЖЕСТВЕННОЕ ЧИСЛО",
      title: "Számok és a főnév",
      subtitle: "Важное правило: после числительного существительное остается в единственном числе",
      body: `
   <div class="warn"><b>Один из главных сюрпризов:</b> когда перед существительным стоит конкретное число, существительное остается в <b>ЕДИНСТВЕННОМ ЧИСЛЕ</b>, а не во множественном — в отличие от русского и английского.</p>
   <p><button class="speak-btn" data-speak-text="két könyv" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> két könyv</button> <span style="color:#8a7a68">(две книги — не «книг»)</span></p>
   <p><button class="speak-btn" data-speak-text="három ház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> három ház</button> <span style="color:#8a7a68">(три дома — не «домов»)</span></p>
   <div class="note">Логика: само число уже указывает на количество, поэтому суффикс множественного числа был бы излишним. Это очень последовательное правило: оно работает всегда, без исключений.</div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 3 · 7/11 · СЛОВАРНЫЙ ЗАПАС",
      title: "Otthoni tárgyak",
      subtitle: "Домашние предметы — словарный запас",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="asztal" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> asztal</button> — стол</p>
       <p><button class="speak-btn" data-speak-text="szék" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szék</button> — стул</p>
       <p><button class="speak-btn" data-speak-text="ablak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ablak</button> — окно</p>
       <p><button class="speak-btn" data-speak-text="ajtó" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ajtó</button> — дверь</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="ágy" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ágy</button> — кровать</p>
       <p><button class="speak-btn" data-speak-text="lámpa" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> lámpa</button> — лампа</p>
       <p><button class="speak-btn" data-speak-text="tükör" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tükör</button> — зеркало</p>
       <p><button class="speak-btn" data-speak-text="szőnyeg" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szőnyeg</button> — ковер</p>
     </div>
   </div>
   <div class="task">Задание 1. Образуйте множественное число для каждого из 6 слов выше (не подглядывая), затем проверьте себя с помощью кнопок 🔊.</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 3 · 8/11 · ПРЕДЛОЖЕНИЯ",
      title: "Egyszerű mondatok",
      subtitle: "Простые предложения с «van/vannak»",
      body: `
   <p><button class="speak-btn" data-speak-text="Itt van egy asztal." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Itt van egy asztal.</button> <span style="color:#8a7a68">(Здесь есть стол)</span></p>
   <p><button class="speak-btn" data-speak-text="Itt vannak a székek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Itt vannak a székek.</button> <span style="color:#8a7a68">(Здесь есть стулья)</span></p>
   <p><button class="speak-btn" data-speak-text="A könyv az asztalon van." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A könyv az asztalon van.</button> <span style="color:#8a7a68">(Эта книга на столе — падеж «-on» мы изучим в 11-м уроке)</span></p>
   <div class="note"><b>van</b> = «есть» (ед.ч.), <b>vannak</b> = «есть/имеются» (мн.ч.) — согласуется с числом подлежащего, как в русском.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 3 · 9/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "В квартире",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Szia! Milyen szép a lakásod! Hány szoba van?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia! Milyen szép a lakásod! Hány szoba van?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Köszönöm! Két szoba van, egy konyha és egy fürdőszoba." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Köszönöm! Két szoba van, egy konyha és egy fürdőszoba.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="És hány ablak van a nappaliban?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> És hány ablak van a nappaliban?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Három nagy ablak van, nagyon világos a szoba." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Három nagy ablak van, nagyon világos a szoba.</button></p>
   <div class="task">Задание 2. Прочитайте диалог вслух, обращая внимание на произношение множественного числа (окончание -k часто приглушается в быстрой речи, но должно оставаться четко слышимым).</div>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 3 · 10/11 · УПРАЖНЕНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверь себя",
      body: `
   <ol class="tasklist">
     <li>Поставьте правильный артикль (a/az): ___ ablak (окно), ___ szék (стул)</li>
     <li>Образуйте множественное число: „kert“, „alma“, „autó“, „ház“</li>
     <li>Переведите: «Здесь есть три стула» (помните: после числа — единственное число!)</li>
     <li>Объясните на русском, почему говорят „két könyv“, а не „két könyvek“</li>
     <li>Составьте 3 предложения с «van/vannak» о предметах в вашей комнате</li>
   </ol>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 3 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Краткое содержание 3-го урока",
      body: `
   <ul class="tick">
     <li>Венгерское существительное не имеет рода</li>
     <li>Определенный артикль: <b>a</b> (перед согласной) / <b>az</b> (перед гласной)</li>
     <li>Неопределенный артикль: <b>egy</b> (также «один»)</li>
     <li>Множественное число: <b>-k</b>, с соединительной гласной (-ok/-ek/-ök) или с удлинением a→á/e→é</li>
     <li>Некоторые слова имеют неправильное множественное число (группа -ak) — учить отдельно</li>
     <li>После числа существительное остается в <b>единственном числе</b></li>
   </ul>
   <div class="note"><b>Домашнее задание:</b> запишите 10 предметов из вашего дома в единственном и множественном числе, рядом друг с другом. В следующем уроке мы перейдем к спряжению в настоящем времени — это первый шаг к построению полноценных предложений.</div>
 `
    }
  ]
};
