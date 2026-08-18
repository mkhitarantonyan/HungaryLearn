import { Lesson } from '../../types';

export const LESSON_8: Lesson = {
  id: 8,
  number: 8,
  level: 'A1',
  title: 'Урок 8 · A család & Birtokos ragozás',
  subtitle: 'Семья и притяжательные суффиксы («мой», «твой», «его»)',
  description: 'Лексика семьи, притяжательные суффиксы на существительных (házam, házad, háza), особенности слов anya/apa, множественное владение и выражение обладания через van.',
  slidesCount: 12,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 8 · 1/12 · СЕМЬЯ",
      title: "A család",
      subtitle: "Словарь семьи",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="apa" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> apa</button> — отец</p>
       <p><button class="speak-btn" data-speak-text="anya" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> anya</button> — мать</p>
       <p><button class="speak-btn" data-speak-text="fiú" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fiú</button> — сын</p>
       <p><button class="speak-btn" data-speak-text="lány" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> lány</button> — дочь</p>
       <p><button class="speak-btn" data-speak-text="testvér" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> testvér</button> — брат/сестра (без указания пола)</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="nagymama" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nagymama</button> — бабушка</p>
       <p><button class="speak-btn" data-speak-text="nagypapa" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nagypapa</button> — дедушка</p>
       <p><button class="speak-btn" data-speak-text="feleség" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> feleség</button> — жена</p>
       <p><button class="speak-btn" data-speak-text="férj" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> férj</button> — муж</p>
       <p><button class="speak-btn" data-speak-text="gyerek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> gyerek</button> — ребёнок</p>
     </div>
   </div>
   <div class="note"><button class="speak-btn" data-speak-text="testvér" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> testvér</button> — интересное слово: оно означает и «брат», и «сестра» одновременно, без указания пола. Чтобы уточнить, добавляют „fiú-“ (мальчик) или „lány-“ (девочка): fiútestvér, lánytestvér.</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 8 · 2/12 · КОНЦЕПЦИЯ",
      title: "Birtokos személyragok",
      subtitle: "Притяжательные суффиксы — общая идея",
      body: `
   <p>В венгерском нет отдельных слов «мой», «твой», «его» перед существительным (как в русском). Вместо этого суффикс, показывающий владельца, <b>приклеивается прямо к концу слова</b> — точно так же, как -k (множественное число) или -t (винительный падеж).</p>
   <p><button class="speak-btn" data-speak-text="az én házam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> az én házam</button> <span style="color:#8a7a68">(мой дом — дословно «дом-мой»)</span></p>
   <p><button class="speak-btn" data-speak-text="a te házad" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> a te házad</button> <span style="color:#8a7a68">(твой дом)</span></p>
   <div class="note">Это логичное продолжение агглютинативного принципа хунгарского языка, о котором мы говорили в 3-м уроке: к слову «прикрепляются» кусочки смысла один за другим.</div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 8 · 3/12 · ПАРАДИГМА I",
      title: "Ház — birtokos ragozás",
      subtitle: "«Дом» со всеми притяжательными суффиксами",
      body: `
   <table class="conj">
     <tr><th>Чей</th><th>Форма</th><th>Значение</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="házam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> házam</button></td><td>мой дом</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="házad" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> házad</button></td><td>твой дом</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="háza" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> háza</button></td><td>его/её дом</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="házunk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> házunk</button></td><td>наш дом</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="házatok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> házatok</button></td><td>ваш дом</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="házuk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> házuk</button></td><td>их дом</td></tr>
   </table>
   <div class="note">Для слов, оканчивающихся на согласный (как <button class="speak-btn" data-speak-text="ház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ház</button>), суффиксы регулярны и предсказуемы — это «база», от которой стоит отталкиваться.</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 8 · 4/12 · ПАРАДИГМА II",
      title: "Anya és apa",
      subtitle: "«Мама» и «папа» — особый (но очень частый) случай",
      body: `
   <p>Слова <button class="speak-btn" data-speak-text="anya" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> anya</button> и <button class="speak-btn" data-speak-text="apa" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> apa</button> оканчиваются на -a, и в 3-м лице (его/её/их) происходит интересное явление: конечная -a исчезает, а между основой и суффиксом появляется «соединительная» согласная <b>j</b>.</p>
   <table class="conj">
     <tr><th>Чей</th><th>anya (мать)</th><th>apa (отец)</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="anyám" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> anyám</button></td><td><button class="speak-btn" data-speak-text="apám" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> apám</button></td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="anyád" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> anyád</button></td><td><button class="speak-btn" data-speak-text="apád" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> apád</button></td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="anyja" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> anyja</button></td><td><button class="speak-btn" data-speak-text="apja" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> apja</button></td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="anyánk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> anyánk</button></td><td><button class="speak-btn" data-speak-text="apánk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> apánk</button></td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="anyátok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> anyátok</button></td><td><button class="speak-btn" data-speak-text="apátok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> apátok</button></td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="anyjuk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> anyjuk</button></td><td><button class="speak-btn" data-speak-text="apjuk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> apjuk</button></td></tr>
   </table>
   <div class="warn">Формы <button class="speak-btn" data-speak-text="anyja" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> anyja</button> и <button class="speak-btn" data-speak-text="apja" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> apja</button> («его мать», «его отец») — одни из самых частых слов в разговорной речи вообще, их стоит запомнить наизусть в первую очередь.</div>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 8 · 5/12 · УДАРЕНИЕ",
      title: "Kiemelés",
      subtitle: "Как подчеркнуть владельца",
      body: `
   <p>Суффикс сам по себе уже говорит «мой/твой/его», поэтому местоимение обычно опускают. Но если хотите подчеркнуть или противопоставить («это МОЙ дом, а не твой»), добавляется притяжательное местоимение перед словом:</p>
   <p><button class="speak-btn" data-speak-text="az én házam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> az én házam</button> <span style="color:#8a7a68">(именно мой дом)</span></p>
   <p><button class="speak-btn" data-speak-text="az ő anyja" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> az ő anyja</button> <span style="color:#8a7a68">(именно её мать)</span></p>
   <div class="note">Обратите внимание: местоимение (az én, a te...) добавляется, а суффикс на слове <b>всё равно остаётся</b> — оба элемента используются вместе, не вместо друг друга.</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 8 · 6/12 · МНОЖЕСТВЕННОЕ ВЛАДЕНИЕ",
      title: "Több birtok",
      subtitle: "Когда владеешь несколькими предметами",
      body: `
   <p>Если владелец один, а предметов несколько («мои дома»), между основой и притяжательным суффиксом добавляется <span class="hu-word">-i-</span>:</p>
   <p><button class="speak-btn" data-speak-text="házaim" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> házaim</button> <span style="color:#8a7a68">(мои дома)</span></p>
   <p><button class="speak-btn" data-speak-text="könyveid" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> könyveid</button> <span style="color:#8a7a68">(твои книги)</span></p>
   <div class="note">Это отдельная, более редкая для начинающих тема — пока достаточно узнавать эту конструкцию при чтении; активно использовать её начнём в более продвинутых уроках.</div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 8 · 7/12 · ПРЕДЛОЖЕНИЯ",
      title: "Mondatok",
      subtitle: "Практика в контексте",
      body: `
   <p><button class="speak-btn" data-speak-text="Anyámat Annának hívják." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Anyámat Annának hívják.</button> <span style="color:#8a7a68">(Мою мать зовут Анной)</span></p>
   <p><button class="speak-btn" data-speak-text="Az apám orvos." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Az apám orvos.</button> <span style="color:#8a7a68">(Мой отец — врач)</span></p>
   <p><button class="speak-btn" data-speak-text="Van egy testvérem." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Van egy testvérem.</button> <span style="color:#8a7a68">(У меня есть брат)</span> — <i>дословно: «есть мой брат»</i></p>
   <div class="note">В венгерском нет отдельного глагола «иметь» в привычном смысле — принадлежность выражается через van/vannak + притяжательный суффикс. Подробно разберём эту конструкцию в одном из следующих уроков.</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 8 · 8/12 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Рассказ о семье",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Mesélj a családodról!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mesélj a családodról!</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Szívesen! Van egy anyám, egy apám és egy testvérem." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szívesen! Van egy anyám, egy apám és egy testvérem.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Mivel foglalkozik az apád?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mivel foglalkozik az apád?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Az apám mérnök, az anyám pedig tanár." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Az apám mérnök, az anyám pedig tanár.</button></p>
   <div class="task">Задание 1. Прочитайте диалог вслух, затем составьте похожий, рассказав о своей семье.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 8 · 9/12 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      body: `
   <ol class="tasklist">
     <li>Скажите «мой отец» и «твоя мать» по-венгерски</li>
     <li>Объясните, почему в форме „anyja“ нет буквы „a“ перед „ja“</li>
     <li>Переведите: «Это её дом» (с подчёркиванием — используйте „az ő“)</li>
     <li>Составьте предложение: «Моего брата зовут Петер»</li>
     <li>Напишите 3 предложения о своей семье, используя притяжательные суффиксы</li>
   </ol>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 8 · 10/12 · РАСШИРЕННЫЙ СЛОВАРЬ",
      title: "Kiegészítő szókincs",
      subtitle: "Ещё родственники",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="nagynéni" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nagynéni</button> — тётя</p>
       <p><button class="speak-btn" data-speak-text="nagybácsi" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nagybácsi</button> — дядя</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="unokatestvér" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> unokatestvér</button> — двоюродный брат/сестра</p>
       <p><button class="speak-btn" data-speak-text="barát" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> barát</button> — друг/подруга</p>
     </div>
   </div>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 8 · 11/12 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Куда это ведёт дальше",
      body: `
   <p>Притяжательные суффиксы — ещё один пример того, как венгерский «встраивает» грамматическую информацию прямо в слово. Тот же принцип встретится в падежах места (уроки 10-11) и в определённом спряжении глаголов (урок 13) — везде работает одна и та же логика гармонии гласных и присоединения частиц.</p>
 `
    },
    {
      id: 12,
      eyebrow: "УРОК 8 · 12/12 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 8-го урока",
      body: `
   <ul class="tick">
     <li>Притяжательность выражается суффиксом на самом существительном, а не отдельным словом</li>
     <li>Базовая (регулярная) парадигма — на примере <button class="speak-btn" data-speak-text="ház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ház</button> (дом)</li>
     <li>Особый случай -a/-e слов (anya, apa) — вставка „j“ и потеря конечной гласной в 3-м лице</li>
     <li>Для подчёркивания владельца добавляется местоимение (az én, a te...) вместе с суффиксом</li>
     <li>Множественное владение (мои дома) добавляет -i- перед суффиксом</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Составьте генеалогическое древо своей семьи (5-6 человек) и подпишите каждого родственника с правильным притяжательным суффиксом. В следующем уроке — прилагательные и степени сравнения.</div>
 `
    }
  ],
    quiz: [
    {
      id: 801,
      question: 'Как сказать "мой дом" по-венгерски?',
      options: ['házam', 'házad', 'háza', 'házunk'],
      correctIndex: 0,
      explanation: 'Притяжательный суффикс 1-го лица единственного числа (én) для слов на согласный – "-am"/"-em": ház + am = házam (мой дом).'
    },
    {
      id: 802,
      question: 'Как сказать "твой отец" по-венгерски?',
      options: ['apám', 'apád', 'apja', 'apátok'],
      correctIndex: 1,
      explanation: 'Слово "apa" (отец) в притяжательной форме 2-го лица (te) – "apád": a + pád = apád. Буква "a" в конце основы исчезает (урок 8, слайд 4).'
    },
    {
      id: 803,
      question: 'Как сказать "его мать" по-венгерски?',
      options: ['anyám', 'anyád', 'anyja', 'anyánk'],
      correctIndex: 2,
      explanation: '"anya" (мать) в 3-м лице (ő) – "anyja": конечная "-a" исчезает, появляется соединительная "j" (урок 8, слайд 4).'
    },
    {
      id: 804,
      question: 'Как подчеркнуть, что это именно МОЙ дом, а не чей-то другой?',
      options: [
        'házam (без изменений)',
        'az én házam',
        'én házam',
        'az én háza'
      ],
      correctIndex: 1,
      explanation: 'Для подчёркивания владельца добавляется притяжательное местоимение "az én" перед существительным: az én házam (именно мой дом). Суффикс на слове сохраняется (урок 8, слайд 5).'
    },
    {
      id: 805,
      question: 'Что означает форма "házaim" (мои дома)?',
      options: [
        'Мой дом (один)',
        'Мои дома (несколько)',
        'Наш дом',
        'Их дома'
      ],
      correctIndex: 1,
      explanation: 'Для множественного владения (несколько предметов у одного владельца) между основой и притяжательным суффиксом добавляется "-i-": ház + i + m = házaim (мои дома).'
    },
    {
      id: 806,
      question: 'В каком уроке мы изучали винительный падеж, который тоже добавляется к концу слова?',
      options: ['Урок 5 (числительные)', 'Урок 6 (повторение A0)', 'Урок 7 (винительный падеж)', 'Урок 8 (притяжательные суффиксы)'],
      correctIndex: 2,
      explanation: 'Винительный падеж (суффикс -t) мы изучали в уроке 7. Как и притяжательные суффиксы, он добавляется к концу слова, подтверждая агглютинативный принцип венгерского языка.'
    }
  ],
  objectives: [
    { id: 'l8_name-family', text: 'Называть членов семьи по-венгерски.', skills: ['speaking', 'reading', 'writing'] },
    { id: 'l8_form-possessive', text: 'Образовывать притяжательные формы 1-го, 2-го и 3-го лица единственного числа (házam, házad, háza).', skills: ['grammar', 'writing'] },
    { id: 'l8_use-possessive', text: 'Употреблять притяжательные суффиксы «мой», «твой», «его» в описании семьи.', skills: ['speaking', 'writing'] },
    { id: 'l8_distinguish-possessors', text: 'Различать на слух и в тексте, к какому лицу относится притяжательная форма.', skills: ['listening', 'reading', 'grammar'] },
    { id: 'l8_describe-family', text: 'Составлять связное описание своей семьи с притяжательными формами.', skills: ['speaking', 'writing'] },
  ],
};
