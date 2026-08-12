import { Lesson } from '../../types';

export const LESSON_9: Lesson = {
  id: 9,
  number: 9,
  level: 'A1',
  title: 'Урок 9 · Melléknevek & Összehasonlítás',
  subtitle: 'Прилагательные и степени сравнения',
  description: 'Прилагательные, их место перед существительным, правило неспрягаемости в роли определения, степени сравнения (-bb, mint), противоположности и цвета.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 9 · 1/11 · ПРИЛАГАТЕЛЬНЫЕ",
      title: "Melléknevek",
      subtitle: "Прилагательные — основы",
      body: `
   <p>Прилагательные в венгерском языке ставятся <b>перед</b> существительным, к которому относятся, и (что отлично!) <b>не меняют свою форму</b> по числам и падежам, если стоят перед существительным.</p>
   <p><button class="speak-btn" data-speak-text="nagy ház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nagy ház</button> <span style="color:#8a7a68">(большой дом)</span></p>
   <p><button class="speak-btn" data-speak-text="nagy házak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nagy házak</button> <span style="color:#8a7a68">(большие дома)</span> — <i>обратите внимание: «nagy» не получило суффикс множественного числа -k!</i></p>
   <p><button class="speak-btn" data-speak-text="nagy házat" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nagy házat</button> <span style="color:#8a7a68">(большой дом - винительный)</span> — <i>«nagy» не получило суффикс -t!</i></p>
   <div class="note">Это одно из самых приятных правил венгерской грамматики: если прилагательное работает как определение («какой дом?»), оно абсолютно неизменяемо.</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 9 · 2/11 · ПАРЫ ПРОТИВОПОЛОЖНОСТЕЙ",
      title: "Ellentétek",
      subtitle: "Частые прилагательные парами",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="nagy" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nagy</button> (большой) ↔ <button class="speak-btn" data-speak-text="kis / kicsi" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kis / kicsi</button> (маленький)</p>
       <p><button class="speak-btn" data-speak-text="jó" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> jó</button> (хороший) ↔ <button class="speak-btn" data-speak-text="rossz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> rossz</button> (плохой)</p>
       <p><button class="speak-btn" data-speak-text="szép" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szép</button> (красивый) ↔ <button class="speak-btn" data-speak-text="csúnya" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> csúnya</button> (уродливый)</p>
       <p><button class="speak-btn" data-speak-text="új" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> új</button> (новый) ↔ <button class="speak-btn" data-speak-text="régi" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> régi</button> (старый)</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="meleg" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> meleg</button> (тёплый) ↔ <button class="speak-btn" data-speak-text="hideg" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hideg</button> (холодный)</p>
       <p><button class="speak-btn" data-speak-text="drága" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> drága</button> (дорогой) ↔ <button class="speak-btn" data-speak-text="olcsó" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> olcsó</button> (дешёвый)</p>
       <p><button class="speak-btn" data-speak-text="könnyű" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> könnyű</button> (лёгкий) ↔ <button class="speak-btn" data-speak-text="nehéz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nehéz</button> (трудный/тяжёлый)</p>
       <p><button class="speak-btn" data-speak-text="gyors" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> gyors</button> (быстрый) ↔ <button class="speak-btn" data-speak-text="lassú" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> lassú</button> (медленный)</p>
     </div>
   </div>
   <div class="note">Разница между <button class="speak-btn" data-speak-text="kis" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kis</button> и <button class="speak-btn" data-speak-text="kicsi" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kicsi</button>: <button class="speak-btn" data-speak-text="kis" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kis</button> используется ТОЛЬКО перед существительным (<button class="speak-btn" data-speak-text="egy kis ház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> egy kis ház</button>), а <button class="speak-btn" data-speak-text="kicsi" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kicsi</button> — когда оно сказуемое или стоит отдельно (<button class="speak-btn" data-speak-text="A ház kicsi." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A ház kicsi.</button>).</div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 9 · 3/11 · ЦВЕТА",
      title: "Színek",
      subtitle: "Названия цветов",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="piros / vörös" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> piros / vörös</button> — красный</p>
       <p><button class="speak-btn" data-speak-text="kék" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kék</button> — синий / голубой</p>
       <p><button class="speak-btn" data-speak-text="zöld" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> zöld</button> — зелёный</p>
       <p><button class="speak-btn" data-speak-text="sárga" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> sárga</button> — жёлтый</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="fehér" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fehér</button> — белый</p>
       <p><button class="speak-btn" data-speak-text="fekete" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fekete</button> — чёрный</p>
       <p><button class="speak-btn" data-speak-text="szürke" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szürke</button> — серый</p>
       <p><button class="speak-btn" data-speak-text="barna" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> barna</button> — коричневый</p>
     </div>
   </div>
   <div class="note">Интересный факт: в венгерском для красного цвета есть ДВА разных слова: <button class="speak-btn" data-speak-text="piros" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> piros</button> (для обычных предметов: яблоко, машина, платье) и <button class="speak-btn" data-speak-text="vörös" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vörös</button> (для глубокого/благородного красного: вино, кровь, закат, флаг).</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 9 · 4/11 · СРАВНИТЕЛЬНАЯ СТЕПЕНЬ",
      title: "Középfok (-bb)",
      subtitle: "Как сказать «больше», «красивее»",
      body: `
   <p>Сравнительная степень образуется добавлением суффикса <span class="hu-word">-bb</span> к прилагательному. Если слово оканчивается на согласный, перед -bb добавляется гласная (-abb/-ebb):</p>
   <p><button class="speak-btn" data-speak-text="nagy" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nagy</button> → <button class="speak-btn" data-speak-text="nagyobb" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nagyobb</button> <span style="color:#8a7a68">(больше)</span></p>
   <p><button class="speak-btn" data-speak-text="szép" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szép</button> → <button class="speak-btn" data-speak-text="szebb" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szebb</button> <span style="color:#8a7a68">(красивее)</span></p>
   <p><button class="speak-btn" data-speak-text="olcsó" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> olcsó</button> → <button class="speak-btn" data-speak-text="olcsóbb" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> olcsóbb</button> <span style="color:#8a7a68">(дешевле)</span></p>
   <p><button class="speak-btn" data-speak-text="drága" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> drága</button> → <button class="speak-btn" data-speak-text="drágább" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> drágább</button> <span style="color:#8a7a68">(дороже)</span></p>
   <div class="note">Единственное «неправильное» слово: <button class="speak-btn" data-speak-text="jó" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> jó</button> (хороший) → <button class="speak-btn" data-speak-text="jobb" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> jobb</button> (лучше). Всё остальное регулярно!</div>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 9 · 5/11 · СРАВНЕНИЕ «MINT»",
      title: "Összehasonlítás (mint)",
      subtitle: "Как сказать «чем» при сравнении",
      body: `
   <p>Слово «чем» передаётся союзом <b>mint</b>:</p>
   <p><button class="speak-btn" data-speak-text="Ez a ház nagyobb, mint az a ház." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Ez a ház nagyobb, mint az a ház.</button> <span style="color:#8a7a68">(Этот дом больше, чем тот дом)</span></p>
   <p><button class="speak-btn" data-speak-text="A kávé jobb, mint a tea." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A kávé jobb, mint a tea.</button> <span style="color:#8a7a68">(Кофе лучше, чем чай)</span></p>
   <p><button class="speak-btn" data-speak-text="A magyar nyelv nehezebb, mint az angol." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A magyar nyelv nehezebb, mint az angol.</button> <span style="color:#8a7a68">(Венгерский язык труднее, чем английский)</span></p>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 9 · 6/11 · ПРЕВОСХОДНАЯ СТЕПЕНЬ",
      title: "Felsőfok (leg-)",
      subtitle: "Как сказать «самый большой»",
      body: `
   <p>Превосходная степень образуется невероятно просто: к форме сравнительной степени спереди приставляется приставка <b>leg-</b>!</p>
   <p><button class="speak-btn" data-speak-text="legnagyobb" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> legnagyobb</button> <span style="color:#8a7a68">(самый большой)</span></p>
   <p><button class="speak-btn" data-speak-text="legszebb" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> legszebb</button> <span style="color:#8a7a68">(самый красивый)</span></p>
   <p><button class="speak-btn" data-speak-text="legjobb" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> legjobb</button> <span style="color:#8a7a68">(самый лучший)</span></p>
   <div class="note">Формула невероятно элегантная: <b>leg- + [слово+-bb]</b>. Запоминается за секунду!</div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 9 · 7/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "В магазине одежды",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Tetszik ez a piros kabát?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tetszik ez a piros kabát?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Szép, de a kék kabát szebb és olcsóbb." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szép, de a kék kabát szebb és olcsóbb.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Valóban! És a fekete kabát?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Valóban! És a fekete kabát?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Az a legdrágább. A kék a legjobb választás." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Az a legdrágább. A kék a legjobb választás.</button></p>
   <div class="task">Задание 1. Прочитайте диалог вслух и найдите в нём положительную, сравнительную и превосходную степени.</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 9 · 8/11 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      body: `
   <ol class="tasklist">
     <li>Образуйте сравнительную степень от: „új“, „régi“, „drága“, „jó“</li>
     <li>Образуйте превосходную степень от тех же слов</li>
     <li>Переведите: «Этот дом больше, чем тот дом»</li>
     <li>Переведите: «Будапешт — самый красивый город»</li>
     <li>Назовите 5 предметов вокруг вас и опишите их цвет и размер по-венгерски</li>
   </ol>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 9 · 9/11 · РАСШИРЕННЫЙ СЛОВАРЬ",
      title: "Kiegészítő szókincs",
      subtitle: "Дополнительные прилагательные",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="magas" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> magas</button> (высокий) ↔ <button class="speak-btn" data-speak-text="alacsony" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> alacsony</button> (низкий)</p>
       <p><button class="speak-btn" data-speak-text="fiatal" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fiatal</button> (молодой) ↔ <button class="speak-btn" data-speak-text="öreg / idős" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> öreg / idős</button> (пожилой/старый)</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="gazdag" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> gazdag</button> (богатый) ↔ <button class="speak-btn" data-speak-text="szegény" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szegény</button> (бедный)</p>
       <p><button class="speak-btn" data-speak-text="okos" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> okos</button> (умный) ↔ <button class="speak-btn" data-speak-text="buta" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> buta</button> (глупый)</p>
     </div>
   </div>
   <div class="note">Для людей вместо „öreg“ вежливее использовать слово <button class="speak-btn" data-speak-text="idős" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> idős</button> (в преклонном возрасте).</div>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 9 · 10/11 · ОСОБЫЙ СЛУЧАЙ",
      title: "Melléknév mint állítmány",
      subtitle: "Когда прилагательное сказуемое",
      body: `
   <p>Если прилагательное стои́т в предложении как <b>сказуемое</b> («дом какой? — большой»), оно согласуется в числе с подлежащим!</p>
   <p><button class="speak-btn" data-speak-text="A ház nagy." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A ház nagy.</button> <span style="color:#8a7a68">(Дом большой — ед.ч.)</span></p>
   <p><button class="speak-btn" data-speak-text="A házak nagyok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A házak nagyok.</button> <span style="color:#8a7a68">(Дома большие — мн.ч.: nagy + ok!)</span></p>
   <div class="warn">Сравните: <button class="speak-btn" data-speak-text="a nagy házak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> a nagy házak</button> (большие дома — перед существительным, НЕ меняется) vs <button class="speak-btn" data-speak-text="A házak nagyok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A házak nagyok.</button> (Дома большие — сказуемое, ДАЁТ -ok). Тонкое и важное различие!</div>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 9 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 9-го урока",
      body: `
   <ul class="tick">
     <li>Перед существительным прилагательное НЕ меняется ни в числе, ни в падежах</li>
     <li>Как сказуемое — согласуется во множественном числе (A házak nagyok)</li>
     <li>Сравнительная степень = суффикс <b>-bb</b>, союз сравнения = <b>mint</b></li>
     <li>Превосходная степень = приставка <b>leg-</b> + сравнительная степень (legnagyobb)</li>
     <li>Два слова для красного: piros (обычный) и vörös (глубокий)</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Сравните между собой два города или две страны на венгерском языке (5 предложений с использованием -bb, mint и leg-). В следующем уроке — «Система трёх измерений» местных падежей!</div>
 `
    }
  ],
  vocabulary: [
    { id: 'l9_v1', hu: 'nagy', ru: 'большой', category: 'Прилагательные' },
    { id: 'l9_v2', hu: 'kicsi', ru: 'маленький', category: 'Прилагательные' },
    { id: 'l9_v3', hu: 'jó', ru: 'хороший', category: 'Прилагательные' },
    { id: 'l9_v4', hu: 'rossz', ru: 'плохой', category: 'Прилагательные' },
    { id: 'l9_v5', hu: 'szép', ru: 'красивый', category: 'Прилагательные' },
    { id: 'l9_v6', hu: 'csúnya', ru: 'некрасивый', category: 'Прилагательные' },
    { id: 'l9_v7', hu: 'nagyobb', ru: 'больше', category: 'Сравнительная степень' },
    { id: 'l9_v8', hu: 'szebb', ru: 'красивее', category: 'Сравнительная степень' },
    { id: 'l9_v9', hu: 'legjobb', ru: 'самый лучший', category: 'Превосходная степень' },
    { id: 'l9_v10', hu: 'mint', ru: 'чем (при сравнении)', category: 'Союзы' },
    { id: 'l9_v11', hu: 'piros', ru: 'красный', category: 'Цвета' },
    { id: 'l9_v12', hu: 'kék', ru: 'синий', category: 'Цвета' },
    { id: 'l9_v13', hu: 'zöld', ru: 'зеленый', category: 'Цвета' },
    { id: 'l9_v14', hu: 'fehér', ru: 'белый', category: 'Цвета' },
    { id: 'l9_v15', hu: 'fekete', ru: 'черный', category: 'Цвета' },
    { id: 'l9_v16', hu: 'barna', ru: 'коричневый', category: 'Цвета' }
  ]
};
