import { Lesson } from '../../types';

export const LESSON_20: Lesson = {
  id: 20,
  number: 20,
  level: 'A2',
  title: 'Урок 20 · A múlt idő',
  subtitle: 'Прошедшее время полностью',
  description: 'Показатели прошедшего времени (-t- / -ott / -ett / -ött), неопределённое и определённое спряжение, неправильные глаголы (volt, ment, evett...) и завершение уровня A2.',
  slidesCount: 12,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 20 · 1/12 · ВВЕДЕНИЕ",
      title: "A múlt idő",
      subtitle: "Прошедшее время — одна форма на всё",
      body: `
   <p>Хорошая новость: в венгерском только <b>одно</b> простое прошедшее время — нет отдельных форм для совершенного и несовершенного вида, как в русском. <button class="speak-btn" data-speak-text="vártam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártam</button> означает и «я ждал», и «я подождал» — смысл ясен из контекста.</p>
   <p>Формула образования: <b>основа + показатель прошедшего времени (-t-/-ott-/-ett-/-ött-) + личное окончание</b>.</p>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 20 · 2/12 · ПОКАЗАТЕЛЬ",
      title: "-t- vagy -ott-/-ett-/-ött-?",
      subtitle: "Когда нужна соединительная гласная",
      body: `
   <p>Если основа заканчивается на гласную или на «лёгкий» согласный (l, r, n, j...), добавляется просто <span class="hu-word">-t-</span>:</p>
   <p><button class="speak-btn" data-speak-text="vár" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vár</button> → <button class="speak-btn" data-speak-text="várt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várt</button>, <button class="speak-btn" data-speak-text="kér" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kér</button> → <button class="speak-btn" data-speak-text="kért" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kért</button></p>
   <p>Если основа заканчивается на t, d, s, sz, z, zs или скопление согласных, нужна соединительная гласная (гармония, как в 3-м уроке):</p>
   <p><button class="speak-btn" data-speak-text="dolgozik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgozik</button> → <button class="speak-btn" data-speak-text="dolgozott" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgozott</button> <span style="color:#8a7a68">(работать → работал)</span>, <button class="speak-btn" data-speak-text="fest" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fest</button> → <button class="speak-btn" data-speak-text="festett" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> festett</button> <span style="color:#8a7a68">(рисовать → рисовал)</span>, <button class="speak-btn" data-speak-text="köt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> köt</button> → <button class="speak-btn" data-speak-text="kötött" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kötött</button> <span style="color:#8a7a68">(завязывать → завязал)</span></p>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 20 · 3/12 · НЕОПРЕДЕЛЁННОЕ",
      title: "Alanyi múlt",
      subtitle: "Неопределённое спряжение — вспомните 4-й урок",
      body: `
   <table class="conj">
     <tr><th>Кто</th><th>vár (ждать)</th><th>kér (просить)</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="vártam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártam</button></td><td><button class="speak-btn" data-speak-text="kértem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kértem</button></td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="vártál" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártál</button></td><td><button class="speak-btn" data-speak-text="kértél" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kértél</button></td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="várt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várt</button></td><td><button class="speak-btn" data-speak-text="kért" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kért</button></td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="vártunk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártunk</button></td><td><button class="speak-btn" data-speak-text="kértünk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kértünk</button></td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="vártatok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártatok</button></td><td><button class="speak-btn" data-speak-text="kértetek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kértetek</button></td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="vártak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártak</button></td><td><button class="speak-btn" data-speak-text="kértek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kértek</button></td></tr>
   </table>
   <div class="note">В 3-м лице (ő) окончания нет вообще — только сам показатель -t: <button class="speak-btn" data-speak-text="várt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várt</button>, <button class="speak-btn" data-speak-text="kért" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kért</button>.</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 20 · 4/12 · ОПРЕДЕЛЁННОЕ",
      title: "Tárgyas múlt",
      subtitle: "Определённое спряжение — вспомните 13-й урок",
      body: `
   <table class="conj">
     <tr><th>Кто</th><th>vár + конкретный объект</th><th>kér + конкретный объект</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="vártam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártam</button></td><td><button class="speak-btn" data-speak-text="kértem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kértem</button></td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="vártad" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártad</button></td><td><button class="speak-btn" data-speak-text="kérted" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérted</button></td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="várta" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várta</button></td><td><button class="speak-btn" data-speak-text="kérte" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérte</button></td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="vártuk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártuk</button></td><td><button class="speak-btn" data-speak-text="kértük" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kértük</button></td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="vártátok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártátok</button></td><td><button class="speak-btn" data-speak-text="kértétek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kértétek</button></td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="várták" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várták</button></td><td><button class="speak-btn" data-speak-text="kérték" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérték</button></td></tr>
   </table>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 20 · 5/12 · СРАВНЕНИЕ",
      title: "Alanyi vs. tárgyas múlt",
      subtitle: "Тот же принцип, что и в настоящем времени",
      body: `
   <table class="conj">
     <tr><th>Неопределённое</th><th>Определённое</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="Olvastam egy könyvet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Olvastam egy könyvet.</button></td><td><button class="speak-btn" data-speak-text="Olvastam a könyvet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Olvastam a könyvet.</button></td></tr>
   </table>
   <div class="note">Полная параллель с 13-м уроком: конкретное дополнение (эта книга) → определённая форма (olvastam → olvastam эту книгу). Единственная разница — теперь всё это происходит в прошедшем времени.</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 20 · 6/12 · НЕПРАВИЛЬНЫЕ ГЛАГОЛЫ",
      title: "Rendhagyó igék",
      subtitle: "Самые частые неправильные формы",
      body: `
   <table class="conj">
     <tr><th>Настоящее</th><th>Прошедшее (ő)</th><th>Значение</th></tr>
     <tr><td>van</td><td><button class="speak-btn" data-speak-text="volt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> volt</button></td><td>быть</td></tr>
     <tr><td>megy</td><td><button class="speak-btn" data-speak-text="ment" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ment</button></td><td>идти</td></tr>
     <tr><td>eszik</td><td><button class="speak-btn" data-speak-text="evett" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> evett</button></td><td>есть</td></tr>
     <tr><td>iszik</td><td><button class="speak-btn" data-speak-text="ivott" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ivott</button></td><td>пить</td></tr>
     <tr><td>alszik</td><td><button class="speak-btn" data-speak-text="aludt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> aludt</button></td><td>спать</td></tr>
     <tr><td>visz</td><td><button class="speak-btn" data-speak-text="vitt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vitt</button></td><td>нести</td></tr>
     <tr><td>tesz</td><td><button class="speak-btn" data-speak-text="tett" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tett</button></td><td>класть/делать</td></tr>
   </table>
   <div class="warn"><button class="speak-btn" data-speak-text="volt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> volt</button> — самое частое слово из этого списка: „Будапешт был...“, „Я был там...“ — используется постоянно.</div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 20 · 7/12 · ПРАКТИКА I",
      title: "Gyakorló mondatok I.",
      subtitle: "Простые предложения",
      body: `
   <p><button class="speak-btn" data-speak-text="Tegnap Budapesten voltam." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tegnap Budapesten voltam.</button> <span style="color:#8a7a68">(Вчера я был в Будапеште)</span></p>
   <p><button class="speak-btn" data-speak-text="Olvastunk egy könyvet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Olvastunk egy könyvet.</button> <span style="color:#8a7a68">(Мы читали книгу — неопределённое)</span></p>
   <p><button class="speak-btn" data-speak-text="Elolvastam ezt a könyvet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Elolvastam ezt a könyvet.</button> <span style="color:#8a7a68">(Я прочитал эту книгу — определённое)</span></p>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 20 · 8/12 · ПРАКТИКА II",
      title: "Gyakorló mondatok II.",
      subtitle: "С падежами и другими темами курса",
      body: `
   <p><button class="speak-btn" data-speak-text="Múlt héten étterembe mentünk." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Múlt héten étterembe mentünk.</button> <span style="color:#8a7a68">(На прошлой неделе мы ходили в ресторан — вспомните 15-й урок)</span></p>
   <p><button class="speak-btn" data-speak-text="Volt egy barátom Budapesten." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Volt egy barátom Budapesten.</button> <span style="color:#8a7a68">(У меня был друг в Будапеште — прошедшее время конструкции «иметь» из 15-го урока)</span></p>
   <div class="note">Заметьте: „volt“ здесь заменяет опущенное в настоящем времени „van“ — в прошедшем времени эта форма обязательна, её нельзя пропустить.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 20 · 9/12 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Рассказ о вчерашнем дне",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Mit csináltál tegnap?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mit csináltál tegnap?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Dolgoztam, aztán moziba mentem a barátommal." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Dolgoztam, aztán moziba mentem a barátommal.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Milyen filmet néztetek?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Milyen filmet néztetek?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Egy magyar filmet néztünk, nagyon tetszett." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Egy magyar filmet néztünk, nagyon tetszett.</button></p>
   <div class="task">Задание 1. Прочитайте диалог, затем расскажите о своём реальном вчерашнем дне на венгерском, минимум 5 предложений.</div>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 20 · 10/12 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      body: `
   <ol class="tasklist">
     <li>Поставьте в прошедшее время: „tanulok“, „dolgozom“, „vagyok“</li>
     <li>Переведите: «Мы вчера видели этот фильм» (определённое спряжение)</li>
     <li>Спрягайте „eszik“ в прошедшем времени всеми 6 лицами (неопределённое)</li>
     <li>Объясните, почему у ő-формы нет личного окончания в прошедшем времени</li>
     <li>Составьте рассказ из 6 предложений о вашем прошлом отпуске</li>
   </ol>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 20 · 11/12 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Что дальше — уровень B1",
      body: `
   <p>Теперь у вас есть все три времени (настоящее, прошедшее, будущее) с обоими типами спряжения. Это завершает уровень A2. Дальше — уровень B1: углублённое определённое/неопределённое спряжение (21-й урок), повелительное наклонение (22-й), условное наклонение (23-й) и сложные предложения (24-й).</p>
 `
    },
    {
      id: 12,
      eyebrow: "УРОК 20 · 12/12 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 20-го урока и уровня A2",
      body: `
   <ul class="tick">
     <li>Одна форма прошедшего времени на все смыслы (в отличие от русского вида)</li>
     <li>Показатель -t- (лёгкие основы) или -ott-/-ett-/-ött- (сложные основы), с гармонией гласных</li>
     <li>Оба спряжения работают так же, как в настоящем времени (4-й и 13-й уроки)</li>
     <li>ő-форма не имеет личного окончания вообще</li>
     <li>Ключевые неправильные глаголы: van→volt, megy→ment, eszik→evett...</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Опишите ваш вчерашний день полностью — минимум 10 предложений, чередуя неопределённое и определённое спряжение. Уровень A2 завершён — поздравляем! Дальше начинается B1.</div>
 `
    }
  ],
  vocabulary: [
    { id: "l20_v1", hu: "volt", ru: "был / была / было", category: "Прошедшее время", exampleSentence: "Tegnap meleg volt." },
    { id: "l20_v2", hu: "ment", ru: "пошёл / пошла", category: "Прошедшее время", exampleSentence: "Iskolába ment." },
    { id: "l20_v3", hu: "evett", ru: "ел / съел", category: "Прошедшее время", exampleSentence: "Almát evett." },
    { id: "l20_v4", hu: "ivott", ru: "пил / выпил", category: "Прошедшее время", exampleSentence: "Vizet ivott." },
    { id: "l20_v5", hu: "aludt", ru: "спал / поспал", category: "Прошедшее время", exampleSentence: "Sokat aludt." }
  ],
  quiz: [
    {
      id: 2001,
      question: "Какова прошедшая форма 3-го лица единичного числа (ő) от глагола van?",
      options: ["vanott", "volt", "ment", "lenne"],
      correctIndex: 1,
      explanation: "Прошедшее время от глагола van (быть) — volt (он/она был/была)."
    },
    {
      id: 2002,
      question: "Какое личное окончание добавляется в 3-ем лице единственного числа (ő) в прошедшем времени?",
      options: ["-a / -e", "-отт", "Окончания нет (только показатель -t)", "-ok / -ek"],
      correctIndex: 2,
      explanation: "В 3-ем лице единственного числа (ő) неопределенного спряжения окончания нет — присутствует только показатель прошедшего времени -t (várt, kért)."
    },
    {
      id: 2003,
      question: "Как переводится «Olvastam a könyvet» (определенное спряжение)?",
      options: ["Я читал какую-то книгу", "Я прочитал эту конкретную книгу", "Он читал книгу", "Мы читаем книгу"],
      correctIndex: 1,
      explanation: "Определенное спряжение указывает на конкретный объект: «Я прочитал эту книгу»."
    }
  ]
};
