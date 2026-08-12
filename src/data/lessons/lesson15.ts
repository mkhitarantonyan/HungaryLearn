import { Lesson } from '../../types';

export const LESSON_15: Lesson = {
  id: 15,
  number: 15,
  level: 'A2',
  title: 'Урок 15 · Ételek és étterem',
  subtitle: 'Еда и дательный падеж (-nak / -nek)',
  description: 'Дательный падеж (-nak/-nek), конструкция «у меня есть» (nekem van), отрицание обладания (nincs), словарь блюд и заказ в ресторане.',
  slidesCount: 12,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 15 · 1/12 · ДАТЕЛЬНЫЙ ПАДЕЖ",
      title: "A részes eset",
      subtitle: "-nak/-nek — «кому», «для кого»",
      body: `
   <p>Суффикс <span class="hu-word">-nak/-nek</span> соответствует русскому дательному падежу («кому?», «для кого?»). Присоединяется напрямую, без соединительной гласной (гласная уже есть в самом суффиксе).</p>
   <table class="conj">
     <tr><th>Слово</th><th>+ -nak/-nek</th><th>Значение</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="ház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ház</button></td><td><button class="speak-btn" data-speak-text="háznak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> háznak</button></td><td>дому/для дома</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="kert" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kert</button></td><td><button class="speak-btn" data-speak-text="kertnek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kertnek</button></td><td>саду/для сада</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="anya" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> anya</button></td><td><button class="speak-btn" data-speak-text="anyának" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> anyának</button></td><td>маме/для мамы</td></tr>
   </table>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 15 · 2/12 · МЕСТОИМЕНИЯ",
      title: "Névmások részes esete",
      subtitle: "«Мне», «тебе», «ему»...",
      body: `
   <table class="conj">
     <tr><th>Именительный</th><th>Дательный</th><th>Значение</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="nekem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nekem</button></td><td>мне</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="neked" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> neked</button></td><td>тебе</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="neki" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> neki</button></td><td>ему/ей</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="nekünk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nekünk</button></td><td>нам</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="nektek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nektek</button></td><td>вам</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="nekik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nekik</button></td><td>им</td></tr>
   </table>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 15 · 3/12 · ГЛАВНОЕ ПРИМЕНЕНИЕ",
      title: "„Nekem van...”",
      subtitle: "Как сказать «у меня есть» — вспоминаем 8-й урок",
      body: `
   <p>В венгерском нет отдельного глагола «иметь». Обладание выражается конструкцией <b>[дательный падеж владельца] + van/vannak + [существительное с притяжательным суффиксом]</b>:</p>
   <p><button class="speak-btn" data-speak-text="Nekem van egy házam." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nekem van egy házam.</button> <span style="color:#8a7a68">(У меня есть дом — дословно «мне есть дом-мой»)</span></p>
   <p><button class="speak-btn" data-speak-text="Neked van egy autód." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Neked van egy autód.</button> <span style="color:#8a7a68">(У тебя есть машина)</span></p>
   <p><button class="speak-btn" data-speak-text="Neki van egy testvére." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Neki van egy testvére.</button> <span style="color:#8a7a68">(У него есть сестра/брат)</span></p>
   <div class="note">Заметьте: сочетаются сразу две темы курса — дательный падеж (этот урок) и притяжательный суффикс (8-й урок). Именно так и работает венгерская грамматика — темы постоянно комбинируются друг с другом.</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 15 · 4/12 · ОТРИЦАНИЕ",
      title: "„Nincs”",
      subtitle: "«У меня нет...»",
      body: `
   <p>Отрицательная форма van — не „nem van“, а особое слово <span class="hu-word">nincs</span> (ед. ч.) / <span class="hu-word">nincsenek</span> (мн. ч.):</p>
   <p><button class="speak-btn" data-speak-text="Nincs autóm." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nincs autóm.</button> <span style="color:#8a7a68">(У меня нет машины)</span></p>
   <p><button class="speak-btn" data-speak-text="Nincsenek gyerekei." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nincsenek gyerekei.</button> <span style="color:#8a7a68">(У неё нет детей)</span></p>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 15 · 5/12 · КОСВЕННОЕ ДОПОЛНЕНИЕ",
      title: "Adok valamit valakinek",
      subtitle: "«Даю кому-то что-то»",
      body: `
   <p>Классическое применение дательного падежа — глаголы передачи (давать, показывать, говорить кому-то):</p>
   <p><button class="speak-btn" data-speak-text="Adok egy könyvet a barátomnak." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Adok egy könyvet a barátomnak.</button> <span style="color:#8a7a68">(Даю книгу другу)</span></p>
   <p><button class="speak-btn" data-speak-text="Megmutatom a fényképet anyámnak." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Megmutatom a fényképet anyámnak.</button> <span style="color:#8a7a68">(Показываю фотографию маме)</span></p>
   <div class="note">Порядок обычно такой: Подлежащее – глагол – прямое дополнение (винительный) – косвенное дополнение (дательный), но венгерский допускает и другой порядок ради выделения нужного слова.</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 15 · 6/12 · СЛОВАРЬ",
      title: "Ételek",
      subtitle: "Еда — базовый словарь",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="leves" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> leves</button> — суп</p>
       <p><button class="speak-btn" data-speak-text="hús" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hús</button> — мясо</p>
       <p><button class="speak-btn" data-speak-text="hal" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hal</button> — рыба</p>
       <p><button class="speak-btn" data-speak-text="zöldség" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> zöldség</button> — овощи</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="sajt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> sajt</button> — сыр</p>
       <p><button class="speak-btn" data-speak-text="saláta" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> saláta</button> — салат</p>
       <p><button class="speak-btn" data-speak-text="desszert" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> desszert</button> — десерт</p>
       <p><button class="speak-btn" data-speak-text="víz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> víz</button> — вода</p>
     </div>
   </div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 15 · 7/12 · В РЕСТОРАНЕ",
      title: "Az étteremben",
      subtitle: "Полезные фразы для заказа",
      body: `
   <p><button class="speak-btn" data-speak-text="Szeretnék ezt rendelni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretnék ezt rendelni.</button> <span style="color:#8a7a68">(Я хотел бы это заказать)</span></p>
   <p><button class="speak-btn" data-speak-text="Mit ajánl?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mit ajánl?</button> <span style="color:#8a7a68">(Что вы посоветуете?)</span></p>
   <p><button class="speak-btn" data-speak-text="Kérem a számlát." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Kérem a számlát.</button> <span style="color:#8a7a68">(Принесите мне, пожалуйста, счёт)</span></p>
   <div class="note"><button class="speak-btn" data-speak-text="Szeretnék ezt rendelni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretnék ezt rendelni.</button> использует условное наклонение („szeretnék“ — «я хотел бы») — вежливая форма заказа. Условное наклонение целиком разберём в 23-м уроке, а пока просто выучите эту фразу как готовый блок.</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 15 · 8/12 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Заказ в ресторане",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Jó napot! Mit ajánl?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó napot! Mit ajánl?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="A leves nagyon finom ma, és van friss hal is." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A leves nagyon finom ma, és van friss hal is.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Akkor kérek egy levest és egy halat." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Akkor kérek egy levest és egy halat.</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Rendben, hozom rögtön." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Rendben, hozom rögtön.</button></p>
   <div class="task">Задание 1. Прочитайте диалог вслух, затем составьте свой заказ из 3 блюд.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 15 · 9/12 · ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "Собираем всё вместе",
      body: `
   <p><button class="speak-btn" data-speak-text="Van egy barátom Budapesten." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Van egy barátom Budapesten.</button> <span style="color:#8a7a68">(У меня есть друг в Будапеште)</span></p>
   <p><button class="speak-btn" data-speak-text="Ajándékot adok anyámnak." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Ajándékot adok anyámnak.</button> <span style="color:#8a7a68">(Я даю подарок маме)</span></p>
   <p><button class="speak-btn" data-speak-text="Nincs időnk." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nincs időnk.</button> <span style="color:#8a7a68">(У нас нет времени)</span></p>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 15 · 10/12 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      body: `
   <ol class="tasklist">
     <li>Переведите: «У меня есть книга» и «У меня нет книги»</li>
     <li>Поставьте „barát“ (друг) в дательный падеж</li>
     <li>Составьте предложение «Я даю яблоко другу», используя винительный и дательный падежи вместе</li>
     <li>Закажите в ресторане 2 блюда и напиток, используя фразы из этого урока</li>
     <li>Объясните разницу между „nem van“ и „nincs“</li>
   </ol>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 15 · 11/12 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Что дальше",
      body: `
   <p>Дательный падеж ещё не раз встретится — особенно в конструкциях с „kell“ (нужно) в 18-м уроке: „nekem kell“ (мне нужно). В следующем уроке — покупки и творительный падеж -val/-vel, у которого есть очень необычная фонетическая особенность.</p>
 `
    },
    {
      id: 12,
      eyebrow: "УРОК 15 · 12/12 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 15-го урока",
      body: `
   <ul class="tick">
     <li>-nak/-nek — дательный падеж, «кому/для кого», присоединяется напрямую</li>
     <li>Обладание: [дательный] + van/vannak + [существительное с притяжательным суффиксом]</li>
     <li>Отрицание обладания — особое слово nincs/nincsenek, а не „nem van“</li>
     <li>Косвенное дополнение при глаголах передачи (давать, показывать)</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Составьте список из 5 вещей, которые у вас есть, и 3, которых у вас нет, используя конструкцию с дательным падежом. В следующем уроке — покупки и творительный падеж.</div>
 `
    }
  ],
  vocabulary: [
    { id: "l15_v1", hu: "leves", ru: "суп", category: "Еда", exampleSentence: "A leves nagyon finom." },
    { id: "l15_v2", hu: "hús", ru: "мясо", category: "Еда", exampleSentence: "Friss hús." },
    { id: "l15_v3", hu: "hal", ru: "рыба", category: "Еда", exampleSentence: "A hal egészséges." },
    { id: "l15_v4", hu: "zöldség", ru: "овощи", category: "Еда", exampleSentence: "Sok zöldséget eszem." },
    { id: "l15_v5", hu: "sajt", ru: "сыр", category: "Еда", exampleSentence: "A finom sajt." },
    { id: "l15_v6", hu: "saláta", ru: "салат", category: "Еда", exampleSentence: "Friss saláta." },
    { id: "l15_v7", hu: "desszert", ru: "десерт", category: "Еда", exampleSentence: "A desszert édes." },
    { id: "l15_v8", hu: "víz", ru: "вода", category: "Напитки", exampleSentence: "Egy üveg víz." }
  ],
  quiz: [
    {
      id: 1501,
      question: "Какой суффикс выражает дательный падеж («кому / для кого»)?",
      options: ["-ban / -ben", "-nak / -nek", "-ba / -be", "-val / -vel"],
      correctIndex: 1,
      explanation: "Дательный падеж в венгерском образуется с помощью суффиксов -nak (для задних гласных) и -nek (для передних гласных)."
    },
    {
      id: 1502,
      question: "Как по-венгерски сказать «У меня есть машина»?",
      options: ["Én van autó", "Nekem van egy autóm", "Nekem autó van", "Van én autóm"],
      correctIndex: 1,
      explanation: "Конструкция обладания: [Дательный падеж] + van + [Существительное с притяжательным суффиксом] -> Nekem van egy autóm."
    },
    {
      id: 1503,
      question: "Какое слово используется для отрицания обладания («У меня нет...») вместо «nem van»?",
      options: ["nem", "nincs", "semmi", "soha"],
      correctIndex: 1,
      explanation: "В венгерском языке отрицанием van является особое слово nincs (или nincsenek для множественного числа)."
    },
    {
      id: 1504,
      question: "Как попросить счёт в ресторане?",
      options: ["Kérem a számlát", "A számla van", "Mit ajánl?", "Szeretnék fizetni nem"],
      correctIndex: 0,
      explanation: "Фраза «Kérem a számlát» переводится как «Принесите мне, пожалуйста, счёт»."
    }
  ]
};
