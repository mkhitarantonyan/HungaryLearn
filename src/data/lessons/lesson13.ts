import { Lesson } from '../../types';

export const LESSON_13: Lesson = {
  id: 13,
  number: 13,
  level: 'A1',
  title: 'Урок 13 · A múlt idő',
  subtitle: 'Прошедшее время глаголов — суффикс -t/-tt',
  description: 'Образование прошедшего времени (Múlt idő) с суффиксом -t/-tt, спряжение глаголов в прошедшем времени, особенности lenni в прошедшем (volt) и временные маркеры tegnap, tavaly.',
  slidesCount: 12,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 13 · 1/12 · ВВЕДЕНИЕ",
      title: "A múlt idő",
      subtitle: "Прошедшее время — общая идея",
      body: `
   <p><b>Этот урок — введение в прошедшее время.</b> Наша цель — научиться узнавать форму прошедшего времени, правильно ставить суффиксы <b>-t/-tt</b> и рассказывать о событиях вчерашнего дня. Полную систему с обоими типами спряжения мы разберём в уроке 20.</p>
   <p>В венгерском языке существует <b>всего ОДНО прошедшее время</b> (в отличие от английского или испанского с их версиями Past Simple, Past Continuous, Present Perfect!). Это делает освоение прошедшего времени удивительно прямым и быстрым.</p>
   <p>Показателем прошедшего времени является показатель <span class="hu-word">-t-</span> (или удвоенный <span class="hu-word">-tt-</span>), который ставится сразу после основы глагола, перед личным окончанием.</p>
   <p><button class="speak-btn" data-speak-text="tanultam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanultam</button> <span style="color:#8a7a68">(я учился / выучил — от tanul)</span></p>
   <p><button class="speak-btn" data-speak-text="dolgoztam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgoztam</button> <span style="color:#8a7a68">(я работал — от dolgozik)</span></p>
   <div class="note">Одна форма прошедшего времени покрывает все оттенки русского завершённого и незавершённого вида («я делал» и «я сделал»).</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 13 · 2/12 · ТРИ ТИПА ОБРАЗОВАНИЯ",
      title: "Hogyan képezzük?",
      subtitle: "Три вариантa показателя -t / -ott-ett-ött / -tt",
      body: `
   <ul class="tick">
     <li><b>Просто -t-</b> — если основа оканчивается на гласную или гласные l, r, n, ny, j: <button class="speak-btn" data-speak-text="vár" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vár</button> → <button class="speak-btn" data-speak-text="vártam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártam</button> <span style="color:#8a7a68">(я ждал)</span></li>
     <li><b>Соединительная гласная + -tt- (-ott/-ett/-ött)</b> — если основа оканчивается на два согласных подряд или на -t: <button class="speak-btn" data-speak-text="mond" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mond</button> → <button class="speak-btn" data-speak-text="mondtam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mondtam</button> <span style="color:#8a7a68">(я сказал)</span>, <button class="speak-btn" data-speak-text="nyit" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nyit</button> → <button class="speak-btn" data-speak-text="nyitottam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nyitottam</button></li>
     <li><b>Удвоенное -tt- без соединительной</b> — у односложных глаголов с короткой гласной: <button class="speak-btn" data-speak-text="fut" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fut</button> → <button class="speak-btn" data-speak-text="futottam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> futottam</button></li>
   </ul>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 13 · 3/12 · СПРЯЖЕНИЕ В ПРОШЕДШЕМ (НЕОПРЕДЕЛЁННОЕ)",
      title: "Általános ragozás múlt időben",
      subtitle: "Неопределённое спряжение в прошедшем времени",
      body: `
   <p>Рассмотрим парадигму регулярного глагола <button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanul</button> (учить):</p>
   <table class="conj">
     <tr><th>Лицо</th><th>Форма</th><th>Перевод</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="tanultam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanultam</button></td><td>я учился</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="tanultál" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanultál</button></td><td>ты учился</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="tanult" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanult</button></td><td>он/она учился(-лась)</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="tanultunk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanultunk</button></td><td>мы учились</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="tanultatok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanultatok</button></td><td>вы учились</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="tanultak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanultak</button></td><td>они учились</td></tr>
   </table>
   <div class="note">Обратите внимание на 3-е лицо единственного числа (ő): окончание <b>нулевое</b> (<button class="speak-btn" data-speak-text="tanult" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanult</button>) — чистый показатель -t!</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 13 · 4/12 · ГЛАГОЛ LENNI В ПРОШЕДШЕМ",
      title: "A „lenni” múlt ideje (volt)",
      subtitle: "Глагол быть — «был, была, было, были»",
      body: `
   <p>Глагол <button class="speak-btn" data-speak-text="lenni" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> lenni</button> в прошедшем времени имеет основу <b>vol-</b> + показателем -t-:</p>
   <table class="conj">
     <tr><th>Лицо</th><th>Форма</th><th>Перевод</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="voltam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> voltam</button></td><td>я был(-а)</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="voltál" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> voltál</button></td><td>ты был(-а)</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="volt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> volt</button></td><td>он/она был(-а)</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="voltunk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> voltunk</button></td><td>мы были</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="volttok -> voltatok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> voltatok</button></td><td>вы были</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="voltak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> voltak</button></td><td>они были</td></tr>
   </table>
   <div class="warn">Важнейшее отличие от настоящего времени: в настоящем времени 3-е лицо (ő/ők) при существительном/прилагательном <b>опускается</b> (Péter orvos — без van). Но в прошедшем времени <b>volt / voltak ОБЯЗАТЕЛЬНО присутствует всегда</b>! (<button class="speak-btn" data-speak-text="Péter orvos volt." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Péter orvos volt.</button> — Петер был врачом).</div>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 13 · 5/12 · ОТРЕЦАНИЕ В ПРОШЕДШЕМ",
      title: "Tagadás múlt időben",
      subtitle: "«Не был», «не видел», «не делал»",
      body: `
   <p>Отрицание образуется с помощью частицы <b>nem</b> перед глаголом:</p>
   <p><button class="speak-btn" data-speak-text="Nem voltam otthon." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem voltam otthon.</button> <span style="color:#8a7a68">(Я не был дома)</span></p>
   <p><button class="speak-btn" data-speak-text="Péter nem dolgozott tegnap." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Péter nem dolgozott tegnap.</button> <span style="color:#8a7a68">(Петер не работал вчера)</span></p>
   <p><button class="speak-btn" data-speak-text="Nem láttam semmit." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem láttam semmit.</button> <span style="color:#8a7a68">(Я ничего не видел)</span></p>
   <div class="note">Слово nincs (нет в настоящем времени) в прошедшем времени заменяется на <button class="speak-btn" data-speak-text="nem volt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nem volt</button> или <button class="speak-btn" data-speak-text="nem voltak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nem voltak</button>! (<button class="speak-btn" data-speak-text="Nem volt időm." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem volt időm.</button> — У меня не было времени).</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 13 · 6/12 · ВРЕМЕННЫЕ ВУКАТОРЫ ПРОШЛОГО",
      title: "Múlt idejű időhatározók",
      subtitle: "Слова-маркеры прошедшего времени",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="tegnap" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tegnap</button> — вчера</p>
       <p><button class="speak-btn" data-speak-text="tegnapelőtt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tegnapelőtt</button> — позавчера</p>
       <p><button class="speak-btn" data-speak-text="a múlt héten" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> a múlt héten</button> — на прошлой неделе</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="a múlt hónapban" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> a múlt hónapban</button> — в прошлом месяце</p>
       <p><button class="speak-btn" data-speak-text="tavaly" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tavaly</button> — в прошлом году</p>
       <p><button class="speak-btn" data-speak-text="régebben" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> régebben</button> — раньше</p>
     </div>
   </div>
   <p><button class="speak-btn" data-speak-text="Tavaly Budapestre utaztam." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tavaly Budapestre utaztam.</button> <span style="color:#8a7a68">(В прошлом году я ездил в Будапешт)</span></p>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 13 · 7/12 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Что ты делал вчера?",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Szia! Mit csináltál tegnap?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia! Mit csináltál tegnap?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Tegnap reggel dolgoztam, délután pedig a parkban sétáltam. És te?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tegnap reggel dolgoztam, délután pedig a parkban sétáltam. És te?</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Én mozinál voltam a barátaimmal. Egy jó filmet néztünk." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Én mozinál voltam a barátaimmal. Egy jó filmet néztünk.</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Jó volt a film?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó volt a film?</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Igen, nagyon tetszett!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Igen, nagyon tetszett!</button></p>
   <div class="task">Задание 1. Прочитайте диалог вслух 3 раза и найдите все глаголы в прошедшем времени.</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 13 · 8/12 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      body: `
   <ol class="tasklist">
     <li>Проспрягайте глагол „olvas“ (читать) в прошедшем времени для всех 6 лиц</li>
     <li>Проспрягайте глагол „lenni“ (быть) в прошедшем времени для всех 6 лиц</li>
     <li>Переведите: «Вчера я не работал»</li>
     <li>Переведите: «В прошлом году мы были в Будапеште»</li>
     <li>Напишите 4 предложения о том, что вы делали на прошлых выходных</li>
   </ol>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 13 · 9/12 · ОПРЕДЕЛЁННОЕ СПРЯЖЕНИЕ В ПРОШЕДШЕМ",
      title: "Határozott ragozás múlt időben",
      subtitle: "Краткий анонс определенного спряжения в прошедшем",
      body: `
   <p>Если прямое дополнение определено (например, «эту книгу», «книгу Анны»), формы прошедшего времени немного отличаются:</p>
   <p><button class="speak-btn" data-speak-text="Olvastam egy könyvet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Olvastam egy könyvet.</button> <span style="color:#8a7a68">(Я читал [какую-то] книгу — неопределённое)</span></p>
   <p><button class="speak-btn" data-speak-text="Olvastam a könyvet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Olvastam a könyvet.</button> <span style="color:#8a7a68">(Я прочел [эту конкретную] книгу — определённое)</span></p>
   <div class="note">Подробно систему определённого спряжения во всех временах разберём в 21-м уроке уровня A2. Пока достаточно освоить базoвые неопределённые формы этого урока!</div>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 13 · 10/12 · ИТОГОВЫЙ СБОРНИК A1",
      title: "Az A1 szint vége",
      subtitle: "Поздравляем! Вы завершили уровень A1!",
      body: `
   <p>Это 13-й, финальный урок уровня A1. Давайте посмотрим, какой колоссальный путь вы прошли:</p>
   <ul class="tick">
     <li><b>A0 (Уроки 1–6):</b> Алфавит, произношение, greeting, lenni, существительное (-k), спряжение в настоящем времени, числа, время, дни.</li>
     <li><b>A1 (Уроки 7–13):</b> Винительный падеж (-t), семья и притяжательность (házam, anyja), прилагательные и сравнения (-bb, leg-), 9 пространственных падежей (матрица 3×3), послелоги (alatt, előtt) и прошедшее время (volt, tanultam).</li>
   </ul>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 13 · 11/12 · ЧТО ДАЛЬШЕ?",
      title: "Mi következik az A2-en?",
      subtitle: "Планы на уровень A2",
      body: `
   <p>На уровне A2 вы научитесь выражать сложные мысли и вести полноценную беглость:</p>
   <ul class="tick">
     <li>Будущее время (jövő idő — fog + инфинитив)</li>
     <li>Повелительное наклонение и просьбы (felszólító mód)</li>
     <li>Условное наклонение (feltételes mód — «я хотел бы», «если бы»)</li>
     <li>Определённое спряжение глаголов (határozott ragozás)</li>
     <li>Глагольные приставки (igekötők: be-, ki-, fel-, le-, el-, meg-)</li>
   </ul>
 `
    },
    {
      id: 12,
      eyebrow: "УРОК 13 · 12/12 · ФИНАЛЬНЫЙ ИТОГ",
      title: "Gratulálunk!",
      subtitle: "Финал 13-го урока",
      body: `
   <p><b>Köszönjük a munkádat! Szép volt!</b> (Спасибо за твою работу! Отлично сработано!)</p>
   <div class="note"><b>Финатное задание уровня A1.</b> Напишите сочинение о себе из 15 предложений на венгерском языке, охватывающее: кто вы, откуда, где живете, вашу семью, что вы делали вчера и куда поедете в будущем. Прочитайте его вслух!</div>
 `
    }
  ],
  vocabulary: [
    { id: 'l13_v1', hu: 'múlt idő', ru: 'прошедшее время', category: 'Грамматика' },
    { id: 'l13_v2', hu: 'tanultam', ru: 'я учился', category: 'Прошедшее время' },
    { id: 'l13_v3', hu: 'tanultál', ru: 'ты учился', category: 'Прошедшее время' },
    { id: 'l13_v4', hu: 'tanult', ru: 'он/она учился(-ась)', category: 'Прошедшее время' },
    { id: 'l13_v5', hu: 'voltam', ru: 'я был', category: 'Lenni в прошлом' },
    { id: 'l13_v6', hu: 'volt', ru: 'он/она был(-а)', category: 'Lenni в прошлом' },
    { id: 'l13_v7', hu: 'voltak', ru: 'они были', category: 'Lenni в прошлом' },
    { id: 'l13_v8', hu: 'nem volt', ru: 'не был / не было', category: 'Отрицание' },
    { id: 'l13_v9', hu: 'tegnap', ru: 'вчера', category: 'Маркеры времени' },
    { id: 'l13_v10', hu: 'tegnapelőtt', ru: 'позавчера', category: 'Маркеры времени' },
    { id: 'l13_v11', hu: 'tavaly', ru: 'в прошлом году', category: 'Маркеры времени' },
    { id: 'l13_v12', hu: 'a múlt héten', ru: 'на прошлой неделе', category: 'Маркеры времени' },
    { id: 'l13_v13', hu: 'dolgoztam', ru: 'я работал', category: 'Прошедшее время' },
    { id: 'l13_v14', hu: 'utaztam', ru: 'я путешествовал', category: 'Прошедшее время' },
    { id: 'l13_v15', hu: 'láttam', ru: 'я видел', category: 'Прошедшее время' },
    { id: 'l13_v16', hu: 'tetszett', ru: 'понравился / понравилось', category: 'Прошедшее время' }
  ]
};
