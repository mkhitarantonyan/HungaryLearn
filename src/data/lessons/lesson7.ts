import { Lesson } from '../../types';

export const LESSON_7: Lesson = {
  id: 7,
  number: 7,
  level: 'A1',
  title: 'Урок 7 · A tárgyeset',
  subtitle: 'Винительный падеж — суффикс -t',
  description: 'Прямое дополнение в венгерском (-t), три правила присоединения, винительный падеж личных местоимений (engem, téged, őt) и порядок слов.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 7 · 1/11 · ВВЕДЕНИЕ",
      title: "A tárgyeset",
      subtitle: "Винительный падеж — суффикс -t",
      body: `
   <p>В венгерском языке нет предлогов вроде русского «вижу книгу» — вместо этого к слову добавляется суффикс. Прямое дополнение (винительный падеж) образуется с помощью <span class="hu-word">-t</span>, который присоединяется прямо к концу слова.</p>
   <p>Пример: <button class="speak-btn" data-speak-text="Látom a házat." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Látom a házat.</button> <span style="color:#8a7a68">(Я вижу дом)</span> — <button class="speak-btn" data-speak-text="ház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ház</button> <span style="color:#8a7a68">(дом)</span> превращается в <button class="speak-btn" data-speak-text="házat" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> házat</button> <span style="color:#8a7a68">(дом-винительный)</span>.</p>
   <div class="note">Это один из первых по-настоящему «венгерских» механизмов, который вы встречаете: вместо отдельного слова падеж «встроен» в само существительное.</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 7 · 2/11 · ОБРАЗОВАНИЕ",
      title: "Hogyan képezzük?",
      subtitle: "Три способа присоединения -t",
      body: `
   <ul class="tick">
     <li><b>Слово на гласную (кроме a/e)</b> — просто добавляем -t: <button class="speak-btn" data-speak-text="autó" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> autó</button> → <button class="speak-btn" data-speak-text="autót" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> autót</button></li>
     <li><b>Слово на a/e</b> — гласная удлиняется (a→á, e→é) + t: <button class="speak-btn" data-speak-text="alma" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> alma</button> → <button class="speak-btn" data-speak-text="almát" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> almát</button></li>
     <li><b>Слово на «мягкий» согласный (l, r, j, ly, n, ny, m)</b> — часто просто -t: <button class="speak-btn" data-speak-text="tanár" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanár</button> → <button class="speak-btn" data-speak-text="tanárt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanárt</button></li>
     <li><b>Слово на другой согласный / скопление согласных</b> — нужна соединительная гласная -ot/-et/-öt: <button class="speak-btn" data-speak-text="könyv" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> könyv</button> → <button class="speak-btn" data-speak-text="könyvet" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> könyvet</button></li>
   </ul>
   <div class="warn">Как и с множественным числом (урок 3), у односложных слов с «а/о» иногда бывает -at вместо -ot — это нужно запоминать вместе со словом, например <button class="speak-btn" data-speak-text="ház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ház</button> → <button class="speak-btn" data-speak-text="házat" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> házat</button>.</div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 7 · 3/11 · ПРИМЕРЫ",
      title: "Példák",
      subtitle: "Таблица примеров",
      body: `
   <table class="conj">
     <tr><th>Слово</th><th>Винительный</th><th>Значение</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="kutya" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kutya</button></td><td><button class="speak-btn" data-speak-text="kutyát" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kutyát</button></td><td>собака</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="alma" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> alma</button></td><td><button class="speak-btn" data-speak-text="almát" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> almát</button></td><td>яблоко</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="autó" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> autó</button></td><td><button class="speak-btn" data-speak-text="autót" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> autót</button></td><td>машина</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="tanár" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanár</button></td><td><button class="speak-btn" data-speak-text="tanárt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanárt</button></td><td>учитель</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="kert" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kert</button></td><td><button class="speak-btn" data-speak-text="kertet" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kertet</button></td><td>сад</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="könyv" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> könyv</button></td><td><button class="speak-btn" data-speak-text="könyvet" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> könyvet</button></td><td>книга</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="ház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ház</button></td><td><button class="speak-btn" data-speak-text="házat" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> házat</button></td><td>дом</td></tr>
   </table>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 7 · 4/11 · МЕСТОИМЕНИЯ",
      title: "Névmások tárgyesete",
      subtitle: "Винительный падеж личных местоимений",
      body: `
   <p>Личные местоимения в винительном падеже имеют особые, «неправильные» формы — их нужно просто запомнить.</p>
   <table class="conj">
     <tr><th>Именительный</th><th>Винительный</th><th>Значение</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="engem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> engem</button></td><td>меня</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="téged" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> téged</button></td><td>тебя</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="őt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> őt</button></td><td>его/её</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="minket" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> minket</button></td><td>нас</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="titeket" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> titeket</button></td><td>вас</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="őket" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> őket</button></td><td>их</td></tr>
   </table>
   <div class="note">Вы уже видели форму <button class="speak-btn" data-speak-text="engem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> engem</button> во 2-м уроке: <button class="speak-btn" data-speak-text="Mkhitárnak hívnak." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mkhitárnak hívnak.</button> <span style="color:#8a7a68">(Меня зовут ...)</span> — дословно «меня называют».</div>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 7 · 5/11 · ГЛАГОЛЫ С ПРЯМЫМ ДОПОЛНЕНИЕМ",
      title: "Tárgyas igék",
      subtitle: "Частые глаголы, требующие -t",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="lát" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> lát</button> — видеть</p>
       <p><button class="speak-btn" data-speak-text="szeret" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szeret</button> — любить</p>
       <p><button class="speak-btn" data-speak-text="olvas" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> olvas</button> — читать</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="ír" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ír</button> — писать</p>
       <p><button class="speak-btn" data-speak-text="ért" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ért</button> — понимать</p>
       <p><button class="speak-btn" data-speak-text="keres" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> keres</button> — искать</p>
     </div>
   </div>
   <p><button class="speak-btn" data-speak-text="Látom a házat." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Látom a házat.</button> <span style="color:#8a7a68">(Я вижу дом)</span></p>
   <p><button class="speak-btn" data-speak-text="Szeretem a kávét." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretem a kávét.</button> <span style="color:#8a7a68">(Я люблю кофе)</span></p>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 7 · 6/11 · ПОРЯДОК СЛОВ",
      title: "Szórend a tárgyesettel",
      subtitle: "Куда ставится дополнение",
      body: `
   <p>Обычный нейтральный порядок — Подлежащее + Сказуемое + Дополнение, как в русском:</p>
   <p><button class="speak-btn" data-speak-text="Olvasom a könyvet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Olvasom a könyvet.</button> <span style="color:#8a7a68">(Я читаю книгу)</span></p>
   <p>Но если дополнение хотят выделить/подчеркнуть, его ставят прямо перед глаголом (эта тема — «фокус» — подробно разберём в 24-м уроке):</p>
   <p><button class="speak-btn" data-speak-text="A könyvet olvasom, nem az újságot." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A könyvet olvasom, nem az újságot.</button> <span style="color:#8a7a68">(Именно книгу я читаю, не журнал)</span></p>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 7 · 7/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "В магазине",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Jó napot! Keresek egy könyvet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó napot! Keresek egy könyvet.</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Milyen könyvet keres?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Milyen könyvet keres?</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Egy magyar nyelvkönyvet keresek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Egy magyar nyelvkönyvet keresek.</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Igen, van! Tessék, itt van." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Igen, van! Tessék, itt van.</button></p>
   <div class="task">Задание 1. Прочитайте диалог вслух дважды и найдите все слова в винительном падеже.</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 7 · 8/11 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      body: `
   <ol class="tasklist">
     <li>Поставьте в винительный падеж: „kutya“, „ház“, „kert“, „autó“</li>
     <li>Переведите: «Я люблю тебя» (используйте винительный местоимения)</li>
     <li>Переведите: «Ты видишь дом?»</li>
     <li>Объясните разницу между <button class="speak-btn" data-speak-text="házat" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> házat</button> и <button class="speak-btn" data-speak-text="kertet" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kertet</button> по типу образования</li>
     <li>Составьте 3 своих предложения с глаголами из этого урока и винительным падежом</li>
   </ol>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 7 · 9/11 · РАСШИРЕННЫЙ СЛОВАРЬ",
      title: "Kiegészítő szókincs",
      subtitle: "Ещё несколько полезных слов",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="kávé" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kávé</button> — кофе</p>
       <p><button class="speak-btn" data-speak-text="tea" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tea</button> — чай</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="újság" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> újság</button> — журнал</p>
       <p><button class="speak-btn" data-speak-text="film" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> film</button> — фильм</p>
     </div>
   </div>
   <p><button class="speak-btn" data-speak-text="Nézem a filmet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nézem a filmet.</button> <span style="color:#8a7a68">(Я смотрю фильм)</span></p>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 7 · 10/11 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Почему это важно для будущих уроков",
      body: `
   <p>Винительный падеж — это ключ к пониманию <b>определённого спряжения глаголов</b> (tárgyas ragozás), с которым мы кратко познакомились в уроке про прошедшее время и подробно разберём в 13-м и 21-м уроках. Всякий раз, когда в предложении есть прямое дополнение в винительном падеже, нужно решить: определённое оно или нет — и от этого зависит форма глагола.</p>
   <div class="note">Уже сейчас начните обращать внимание: когда вы говорите «книгу» без артикля/указания — это неопределённое дополнение; когда «эту книгу» или «книгу Анны» — определённое.</div>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 7 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 7-го урока",
      body: `
   <ul class="tick">
     <li>Винительный падеж = суффикс <b>-t</b>, три способа присоединения (гласная / a-e удлинение / согласная + линкер)</li>
     <li>Личные местоимения в винительном падеже — отдельные формы, учить наизусть</li>
     <li>Нейтральный порядок слов: Подлежащее – Сказуемое – Дополнение</li>
     <li>Дополнение может быть определённым или неопределённым — это станет важно позже</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Составьте список из 10 существительных (уже знакомых вам) и запишите их винительный падеж. В следующем уроке — семья и притяжательные суффиксы («мой», «твой», «его» и т.д., встроенные прямо в слово).</div>
 `
    }
  ]
};
