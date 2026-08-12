import { Lesson } from '../../types';

export const LESSON_16: Lesson = {
  id: 16,
  number: 16,
  level: 'A2',
  title: 'Урок 16 · Vásárlás és eszközhatározó',
  subtitle: 'Покупки и творительный падеж (-val / -vel)',
  description: 'Творительный падеж (-val/-vel), полная фонетическая ассимиляция с согласными, формы велема/веледа, покупка товаров и оплаты картой.',
  slidesCount: 12,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 16 · 1/12 · ТВОРИТЕЛЬНЫЙ ПАДЕЖ",
      title: "Az eszközhatározó",
      subtitle: "-val/-vel — «с», «посредством»",
      body: `
   <p>Суффикс <span class="hu-word">-val/-vel</span> соответствует русскому творительному падежу («с кем/чем», «при помощи чего»). У него одна из самых необычных фонетических особенностей во всём венгерском языке — <b>полная ассимиляция</b>.</p>
   <div class="note">Прежде чем разбираться в деталях, запомните главное: если слово оканчивается на согласный, „v“ суффикса <b>превращается в точную копию</b> этого согласного.</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 16 · 2/12 · ГЛАСНЫЙ ФИНАЛ",
      title: "Magánhangzóra végződő szavak",
      subtitle: "Слова на гласную — просто присоединяем",
      body: `
   <table class="conj">
     <tr><th>Слово</th><th>+ -val/-vel</th><th>Значение</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="autó" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> autó</button></td><td><button class="speak-btn" data-speak-text="autóval" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> autóval</button></td><td>с машиной</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="kutya" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kutya</button></td><td><button class="speak-btn" data-speak-text="kutyával" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kutyával</button></td><td>с собакой</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="kávé" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kávé</button></td><td><button class="speak-btn" data-speak-text="kávéval" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kávéval</button></td><td>с кофе</td></tr>
   </table>
   <div class="note">Как обычно, a/e на конце слова удлиняется (a→á) перед добавлением суффикса — уже знакомый вам паттерн из уроков 3, 7, 8, 10.</div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 16 · 3/12 · СОГЛАСНЫЙ ФИНАЛ",
      title: "Teljes hasonulás",
      subtitle: "Слова на согласную — полная ассимиляция",
      body: `
   <p>Здесь „v“ суффикса не остаётся „v“ — он превращается в точную копию последнего согласного слова:</p>
   <table class="conj">
     <tr><th>Слово</th><th>+ -val/-vel</th><th>Значение</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="vonat" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vonat</button></td><td><button class="speak-btn" data-speak-text="vonattal" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vonattal</button></td><td>поездом</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="kés" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kés</button></td><td><button class="speak-btn" data-speak-text="késsel" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> késsel</button></td><td>ножом</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="toll" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> toll</button></td><td><button class="speak-btn" data-speak-text="tollal" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tollal</button></td><td>ручкой</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="kanál" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kanál</button></td><td><button class="speak-btn" data-speak-text="kanállal" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kanállal</button></td><td>ложкой</td></tr>
   </table>
   <div class="warn"><button class="speak-btn" data-speak-text="vonat" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vonat</button> + „val“ теоретически дало бы „vonatval“, но так никто не говорит — правильно <button class="speak-btn" data-speak-text="vonattal" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vonattal</button> (t+v слились в „tt“). Это регулярное фонетическое правило без исключений, а не ошибка.</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 16 · 4/12 · МЕСТОИМЕНИЯ",
      title: "Névmások eszközhatározója",
      subtitle: "«Со мной», «с тобой»...",
      body: `
   <p>Личные формы этого падежа строятся не от именительного местоимения, а от старого корня <span class="hu-word">vel-</span>:</p>
   <table class="conj">
     <tr><th>Кто</th><th>Форма</th><th>Значение</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="velem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> velem</button></td><td>со мной</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="veled" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> veled</button></td><td>с тобой</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="vele" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vele</button></td><td>с ним/с ней</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="velünk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> velünk</button></td><td>с нами</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="veletek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> veletek</button></td><td>с вами</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="velük" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> velük</button></td><td>с ними</td></tr>
   </table>
   <p><button class="speak-btn" data-speak-text="Gyere velem!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Gyere velem!</button> <span style="color:#8a7a68">(Иди со мной!)</span></p>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 16 · 5/12 · СЛОВАРЬ",
      title: "Vásárlás",
      subtitle: "Покупки — базовый словарь",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="pénz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> pénz</button> — деньги</p>
       <p><button class="speak-btn" data-speak-text="ár" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ár</button> — цена</p>
       <p><button class="speak-btn" data-speak-text="bankkártya" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> bankkártya</button> — банковская карта</p>
       <p><button class="speak-btn" data-speak-text="nyugta" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nyugta</button> — чек</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="méret" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> méret</button> — размер</p>
       <p><button class="speak-btn" data-speak-text="szín" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szín</button> — цвет</p>
       <p><button class="speak-btn" data-speak-text="kedvezmény" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kedvezmény</button> — скидка</p>
       <p><button class="speak-btn" data-speak-text="próbafülke" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> próbafülke</button> — примерочная</p>
     </div>
   </div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 16 · 6/12 · ФРАЗЫ",
      title: "A boltban",
      subtitle: "Полезные фразы в магазине",
      body: `
   <p><button class="speak-btn" data-speak-text="Mennyibe kerül ez?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mennyibe kerül ez?</button> <span style="color:#8a7a68">(Сколько это стоит?)</span></p>
   <p><button class="speak-btn" data-speak-text="Fizethetek kártyával?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Fizethetek kártyával?</button> <span style="color:#8a7a68">(Могу я заплатить картой?)</span></p>
   <p><button class="speak-btn" data-speak-text="Ez túl drága." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Ez túl drága.</button> <span style="color:#8a7a68">(Это слишком дорого)</span></p>
   <p><button class="speak-btn" data-speak-text="Készpénzzel fizetek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Készpénzzel fizetek.</button> <span style="color:#8a7a68">(Я заплачу наличными)</span></p>
   <div class="note"><button class="speak-btn" data-speak-text="Fizethetek kártyával?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Fizethetek kártyával?</button> и <button class="speak-btn" data-speak-text="Készpénzzel fizetek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Készpénzzel fizetek.</button> используют творительный падеж — „картой“ (<button class="speak-btn" data-speak-text="kártyával" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kártyával</button>) и „наличными“ (<button class="speak-btn" data-speak-text="készpénzzel" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> készpénzzel</button>) — то же самое „с помощью чего“, которое мы разобрали в начале урока.</div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 16 · 7/12 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "В магазине одежды",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Segíthetek valamiben?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Segíthetek valamiben?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Igen, keresek egy pulóvert." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Igen, keresek egy pulóvert.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Milyen méretet keres?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Milyen méretet keres?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="M-es méretet, és szeretnék kártyával fizetni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> M-es méretet, és szeretnék kártyával fizetni.</button></p>
   <div class="task">Задание 1. Прочитайте диалог вслух и найдите форму творительного падежа.</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 16 · 8/12 · ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "Собираем всё вместе",
      body: `
   <p><button class="speak-btn" data-speak-text="Tollal írok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tollal írok.</button> <span style="color:#8a7a68">(Пишу ручкой)</span></p>
   <p><button class="speak-btn" data-speak-text="Vonattal megyek Budapestre." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Vonattal megyek Budapestre.</button> <span style="color:#8a7a68">(Еду поездом в Будапешт)</span></p>
   <p><button class="speak-btn" data-speak-text="A barátommal megyek a boltba." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A barátommal megyek a boltba.</button> <span style="color:#8a7a68">(Я иду с другом в магазин)</span></p>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 16 · 9/12 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      body: `
   <ol class="tasklist">
     <li>Поставьте в творительный падеж: „autó“, „kés“, „toll“, „barát“</li>
     <li>Объясните, что происходит с „v“ суффикса, когда слово оканчивается на согласный</li>
     <li>Переведите: «Иди со мной в магазин!»</li>
     <li>Спросите цену и предложите заплатить картой — составьте мини-диалог</li>
     <li>Составьте 3 предложения о том, чем вы обычно пишете, едете на работу, режете хлеб</li>
   </ol>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 16 · 10/12 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Что дальше",
      body: `
   <p>Правило полной ассимиляции, которое вы выучили в этом уроке, встречается ещё в паре других суффиксов венгерского языка (например, в некоторых формах числительных с -szor/-szer/-ször). Запомнив принцип один раз, вы сможете узнавать его снова. В следующем уроке — погода и времена года.</p>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 16 · 11/12 · РАСШИРЕННЫЙ СЛОВАРЬ",
      title: "Kiegészítő szókincs",
      subtitle: "Ещё полезные слова для покупок",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="olcsó" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> olcsó</button> — дешёвый (повтор из 9-го урока)</p>
       <p><button class="speak-btn" data-speak-text="kirakat" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kirakat</button> — витрина</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="eladó" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> eladó</button> — продавец</p>
       <p><button class="speak-btn" data-speak-text="vásárló" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vásárló</button> — покупатель</p>
     </div>
   </div>
 `
    },
    {
      id: 12,
      eyebrow: "УРОК 16 · 12/12 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 16-го урока",
      body: `
   <ul class="tick">
     <li>-val/-vel — творительный падеж, «с/посредством»</li>
     <li>На гласную — просто присоединяется (с a→á/e→é удлинением)</li>
     <li>На согласную — полная ассимиляция: „v“ становится копией последнего согласного</li>
     <li>Личные формы строятся от корня „vel-“ (velem, veled...)</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Опишите 5 предметов, которыми вы пользуетесь каждый день, используя творительный падеж («пишу ручкой», «режу ножом» и т.д.). В следующем уроке — погода, времена года и макбайны времени.</div>
 `
    }
  ],
  vocabulary: [
    { id: "l16_v1", hu: "pénz", ru: "деньги", category: "Покупки", exampleSentence: "Van elég pénzem." },
    { id: "l16_v2", hu: "ár", ru: "цена", category: "Покупки", exampleSentence: "Jó az ár." },
    { id: "l16_v3", hu: "bankkártya", ru: "банковская карта", category: "Покупки", exampleSentence: "Kártyával fizetek." },
    { id: "l16_v4", hu: "nyugta", ru: "чек", category: "Покупки", exampleSentence: "Kérem a nyugtát." },
    { id: "l16_v5", hu: "méret", ru: "размер", category: "Одежда", exampleSentence: "Milyen méret?" },
    { id: "l16_v6", hu: "szín", ru: "цвет", category: "Одежда", exampleSentence: "Szép szín." },
    { id: "l16_v7", hu: "kedvezmény", ru: "скидка", category: "Покупки", exampleSentence: "Nagy kedvezmény." },
    { id: "l16_v8", hu: "próbafülke", ru: "примерочная", category: "Магазин", exampleSentence: "Hol van a próbafülke?" }
  ],
  quiz: [
    {
      id: 1601,
      question: "Что происходит с суффиксом -val/-vel, если слово оканчивается на согласную (например, vonat)?",
      options: ["v заменяется на копию этой согласной (vonattal)", "Ничего не меняется (vonatval)", "Добавляется гласная (vonatoval)", "v отпадает (vonatal)"],
      correctIndex: 0,
      explanation: "Происходит полная фонетическая ассимиляция: буква v превращается в копию согласного звука на конце слова (vonat + val -> vonattal)."
    },
    {
      id: 1602,
      question: "Как сказать «со мной» по-венгерски?",
      options: ["énnel", "velem", "énval", "velgem"],
      correctIndex: 1,
      explanation: "Личные формы творительного падежа образуются от корня vel-: velem (со мной), veled (с тобой), vele (с ним/ней)."
    },
    {
      id: 1603,
      question: "Как переводится вопрос «Mennyibe kerül ez?»?",
      options: ["Где это продается?", "Сколько это стоит?", "Есть ли скидка?", "Могу я оплатить картой?"],
      correctIndex: 1,
      explanation: "«Mennyibe kerül ez?» переводится как «Сколько это стоит?»."
    },
    {
      id: 1604,
      question: "Как сказать «я заплачу банковской картой»?",
      options: ["Bankkártya fizetek", "Kártyával fizetek", "Kártyanak fizetek", "Kártyában fizetek"],
      correctIndex: 1,
      explanation: "«Картой» образуется с творительным падежом (-val/-vel): kártya + val = kártyával."
    }
  ]
};
