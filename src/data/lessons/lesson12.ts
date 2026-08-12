import { Lesson } from '../../types';

export const LESSON_12: Lesson = {
  id: 12,
  number: 12,
  level: 'A1',
  title: 'Урок 12 · Helyhatározók III',
  subtitle: 'Местные падежи III — группа «Около/рядом» (-nál/-nél, -hoz/-hez/-höz, -tól/-től) и послелоги (alatt, felett, mellett)',
  description: 'Группа "Около/рядом" (у врача, к другу, от учителя), послелоги времени и места (alatt, felett, mellett, előtt, mögött) и притяжательные формы местоимений.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 12 · 1/11 · ОКОЛО/РЯДОМ",
      title: "Nál / nál csoport: Hol?",
      subtitle: "Около/у (Где?) — суффикс -nál / -nél",
      body: `
   <p>Третья пространственная группа выражает нахождение <b>около, возле, рядом с объектом или у человека</b> (у врача, у друга, у окна, у стола).</p>
   <p>Отвечает на вопрос <b>Hol?</b> (Где?) или <b>Kinél?</b> (У кого?):</p>
   <ul class="tick">
     <li><b>-nál</b> (задний ряд): <button class="speak-btn" data-speak-text="orvosnál" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> orvosnál</button> <span style="color:#8a7a68">(у врача)</span>, <button class="speak-btn" data-speak-text="asztalnál" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> asztalnál</button> <span style="color:#8a7a68">(за столом / у стола)</span></li>
     <li><b>-nél</b> (передний ряд): <button class="speak-btn" data-speak-text="Péternél" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Péternél</button> <span style="color:#8a7a68">(у Петера)</span>, <button class="speak-btn" data-speak-text="testvérnél" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> testvérnél</button> <span style="color:#8a7a68">(у брата)</span></li>
   </ul>
   <p><button class="speak-btn" data-speak-text="Péter az orvosnál van." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Péter az orvosnál van.</button> <span style="color:#8a7a68">(Петер у врача)</span></p>
   <div class="note">Для людей («находиться у кого-то») венгерский ВСЕГДА использует именно суффикс <b>-nál/-nél</b>: <button class="speak-btn" data-speak-text="Annánál vagyok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Annánál vagyok.</button> (Я у Анны).</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 12 · 2/11 · К ОБЪЕКТУ/ЧЕЛОВЕКУ",
      title: "Nál csoport: Hova?",
      subtitle: "К (Куда?) — суффикс -hoz / -hez / -höz",
      body: `
   <p>Отвечает на вопрос <b>Hova?</b> (Куда?) или <b>Kihez?</b> (К кому?) — движение по направлению к человеку или объекту.</p>
   <ul class="tick">
     <li><b>-hoz</b> (задний ряд): <button class="speak-btn" data-speak-text="orvoshoz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> orvoshoz</button> <span style="color:#8a7a68">(к врачу)</span>, <button class="speak-btn" data-speak-text="baráthoz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> baráthoz</button> <span style="color:#8a7a68">(к другу)</span></li>
     <li><b>-hez</b> (передний неогубленный): <button class="speak-btn" data-speak-text="Péterhez" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Péterhez</button> <span style="color:#8a7a68">(к Петеру)</span>, <button class="speak-btn" data-speak-text="testvérhez" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> testvérhez</button> <span style="color:#8a7a68">(к брату)</span></li>
     <li><b>-höz</b> (передний огубленный): <button class="speak-btn" data-speak-text="elnökhöz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> elnökhöz</button> <span style="color:#8a7a68">(к президенту)</span></li>
   </ul>
   <p><button class="speak-btn" data-speak-text="Megyek az orvoshoz." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Megyek az orvoshoz.</button> <span style="color:#8a7a68">(Я иду к врачу)</span></p>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 12 · 3/11 · ОТ ОБЪЕКТА/ЧЕЛОВЕКА",
      title: "Nál csoport: Honnan?",
      subtitle: "От (Откуда?) — суффикс -tól / -től",
      body: `
   <p>Отвечает на вопрос <b>Honnan?</b> (Откуда?) или <b>Kitől?</b> (От кого?) — движение прочь от человека или объекта.</p>
   <ul class="tick">
     <li><b>-tól</b> (задний ряд): <button class="speak-btn" data-speak-text="orvostól" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> orvostól</button> <span style="color:#8a7a68">(от врача)</span>, <button class="speak-btn" data-speak-text="baráttól" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> baráttól</button> <span style="color:#8a7a68">(от друга)</span></li>
     <li><b>-től</b> (передний ряд): <button class="speak-btn" data-speak-text="Pétertől" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Pétertől</button> <span style="color:#8a7a68">(от Петера)</span>, <button class="speak-btn" data-speak-text="testvértől" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> testvértől</button> <span style="color:#8a7a68">(от брата)</span></li>
   </ul>
   <p><button class="speak-btn" data-speak-text="Jövök az orvostól." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jövök az orvostól.</button> <span style="color:#8a7a68">(Я иду от врача)</span></p>
   <div class="note">Этот же суффикс -tól/-től используется для выражения времени «с... (какого-то часа)»: <button class="speak-btn" data-speak-text="kilenctől" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kilenctől</button> (с 9 часов, из 5-го урока).</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 12 · 4/11 · ПОЛНАЯ ТАБЛИЦА ВСЕХ 9 ПАДЕЖЕЙ",
      title: "A 9 helyhatározó esete",
      subtitle: "Матрица 3x3 — вся картина местных падежей венгерского языка!",
      body: `
   <p>Поздравляем! Теперь вы знаете <b>все 9 местных падежей</b> венгерского языка. Вот единая таблица 3×3:</p>
   <table class="conj">
     <tr><th>Пространство</th><th>Где? (Hol?)</th><th>Куда? (Hova?)</th><th>Откуда? (Honnan?)</th></tr>
     <tr><td><b>Внутри (Belső)</b></td><td>-ban / -ben</td><td>-ba / -be</td><td>-ból / -ből</td></tr>
     <tr><td><b>На поверхности (Külső)</b></td><td>-n / -on / -en / -ön</td><td>-ra / -re</td><td>-ról / -ről</td></tr>
     <tr><td><b>Около / У (Aproximatív)</b></td><td>-nál / -nél</td><td>-hoz / -hez / -höz</td><td>-tól / -től</td></tr>
   </table>
   <div class="note">Эта таблица 3×3 — фундаментальное сердце венгерской грамматики. Поняв эту систему один раз, вы сможете выразить любое местоположение без ошибок!</div>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 12 · 5/11 · ПОСЛЕЛОГИ Места",
      title: "Névutók I (Hely)",
      subtitle: "Слова «под», «над», «около», «перед», «за»",
      body: `
   <p>Кроме суффиксов, в венгерском используются <b>послелоги</b> (névutó) — слова, которые ставятся ПОСЛЕ существительного (без изменений существительного):</p>
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="alatt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> alatt</button> — под (<button class="speak-btn" data-speak-text="az asztal alatt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> az asztal alatt</button> — под столом)</p>
       <p><button class="speak-btn" data-speak-text="felett / fölött" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> felett / fölött</button> — над</p>
       <p><button class="speak-btn" data-speak-text="mellett" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mellett</button> — рядом с / около</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="előtt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> előtt</button> — перед</p>
       <p><button class="speak-btn" data-speak-text="mögött" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mögött</button> — за / позади</p>
       <p><button class="speak-btn" data-speak-text="között" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> között</button> — между</p>
     </div>
   </div>
   <p><button class="speak-btn" data-speak-text="A macska az asztal alatt van." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A macska az asztal alatt van.</button> <span style="color:#8a7a68">(Кошка под столом)</span></p>
   <div class="note">Обратите внимание: существительное остаётся в начальной форме (az asztal), суффикс к нему НЕ добавляется — вместо предлогов «под столом» венгерский говорит «стол под» (az asztal alatt).</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 12 · 6/11 · ТРЁХМЕРНОСТЬ ПОСЛЕЛОГОВ",
      title: "Névutók 3D rendszere",
      subtitle: "Послелоги тоже подчиняются правилу 3D!",
      body: `
   <p>Невероятно, но послелоги ТОЖЕ имеют формы для 3-х направлений (Где? Куда? Откуда?):</p>
   <table class="conj">
     <tr><th>Послелог</th><th>Где? (Hol?)</th><th>Куда? (Hova?)</th><th>Откуда? (Honnan?)</th></tr>
     <tr><td>под</td><td><button class="speak-btn" data-speak-text="alatt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> alatt</button></td><td><button class="speak-btn" data-speak-text="alá" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> alá</button></td><td><button class="speak-btn" data-speak-text="alól" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> alól</button></td></tr>
     <tr><td>перед</td><td><button class="speak-btn" data-speak-text="előtt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> előtt</button></td><td><button class="speak-btn" data-speak-text="elé" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> elé</button></td><td><button class="speak-btn" data-speak-text="elől" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> elől</button></td></tr>
     <tr><td>рядом</td><td><button class="speak-btn" data-speak-text="mellett" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mellett</button></td><td><button class="speak-btn" data-speak-text="mellé" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mellé</button></td><td><button class="speak-btn" data-speak-text="mellől" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mellől</button></td></tr>
   </table>
   <div class="note">Посмотрите: абсолютная гармония с общей 3D-системой! Любой пространственный элемент венгерского языка подчиняется одному и тому же принципу направления.</div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 12 · 7/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Визит к врачу",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Hova mész?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Hova mész?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Az orvoshoz megyek, mert beteg vagyok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Az orvoshoz megyek, mert beteg vagyok.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Mikor jössz vissza?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mikor jössz vissza?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Két óra múlva jövök az orvostól, utána Péternél leszek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Két óra múlva jövök az orvostól, utána Péternél leszek.</button></p>
   <div class="task">Задание 1. Прочитайте диалог вслух и найдите в нём все 3 направления группы «Около/у» (-hoz, -tól, -nél).</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 12 · 8/11 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      body: `
   <ol class="tasklist">
     <li>Образуйте формы Hol? / Hova? / Honnan? для слова „orvos“</li>
     <li>То же самое для имени „Anna“</li>
     <li>Переведите: «Кошка сидит под столом» (az asztal alatt)</li>
     <li>Переведите: «Я иду к другу»</li>
     <li>Заполните таблицу 3×3 местных падежей по памяти</li>
   </ol>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 12 · 9/11 · МЕСТОИМЕНИЯ С СУФФИКСАМИ",
      title: "Névmások ragozása",
      subtitle: "«У меня», «ко мне», «от меня»",
      body: `
   <p>Как сказать «у меня», «ко мне», «от меня»? К суффиксу добавляется притяжательный суффикс (из 8-го урока!):</p>
   <table class="conj">
     <tr><th>Лицо</th><th>У кого? (nálam...)</th><th>К кому? (hozzám...)</th><th>От кого? (tőlem...)</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="nálam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nálam</button> (у меня)</td><td><button class="speak-btn" data-speak-text="hozzám" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hozzám</button> (ко мне)</td><td><button class="speak-btn" data-speak-text="tőlem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tőlem</button> (от меня)</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="nálad" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nálad</button> (у тебя)</td><td><button class="speak-btn" data-speak-text="hozzád" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hozzá</button> (к тебе)</td><td><button class="speak-btn" data-speak-text="tőled" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tőled</button> (от тебя)</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="nála" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nála</button> (у него)</td><td><button class="speak-btn" data-speak-text="hozzá" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hozzá</button> (к нему)</td><td><button class="speak-btn" data-speak-text="tőle" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tőle</button> (от него)</td></tr>
   </table>
   <div class="note">Посмотрите: сам суффикс становится ОСНОВОЙ, к которой липнет личное окончание -m, -d, -a! Это редкий элемент грамматики, встречающийся в финно-угорских языках.</div>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 12 · 10/11 · ВРЕМЕННЫЕ ПОСЛЕЛОГИ",
      title: "Időbeli névutók",
      subtitle: "Послелоги времени (utána, előtt, múlva)",
      body: `
   <p>Те же слова работают и во времени:</p>
   <p><button class="speak-btn" data-speak-text="három óra előtt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> három óra előtt</button> <span style="color:#8a7a68">(до 3 часов / перед 3 часами)</span></p>
   <p><button class="speak-btn" data-speak-text="ebéd után" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ebéd után</button> <span style="color:#8a7a68">(после обеда)</span></p>
   <p><button class="speak-btn" data-speak-text="két nap múlva" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> két nap múlva</button> <span style="color:#8a7a68">(через два дня)</span></p>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 12 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 12-го урока",
      body: `
   <ul class="tick">
     <li>Группа «Около/у»: <b>-nál/-nél</b> (Где?), <b>-hoz/-hez/-höz</b> (Куда?), <b>-tól/-től</b> (Откуда?)</li>
     <li>Для людей (к врачу, у Петера) ВСЕГДА используется именно эта группа!</li>
     <li>Матрица 3×3 — полная система всех 9 пространственных падежей венгерского языка</li>
     <li>Послелоги (alatt, előtt, mellett...) стоят ПОСЛЕ существительного и тоже имеют 3D-направления</li>
     <li>Местоименные формы: nálam, hozzám, tőlem</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Напишите мини-рассказ о своём рабочем дне (к кому ходили, у кого были, где сидели, используя послелоги и местную группу). В следующем уроке — фундаментальная вершина уровня A1: Прошедшее время глаголов (Múlt idő)!</div>
 `
    }
  ],
  vocabulary: [
    { id: 'l12_v1', hu: 'orvosnál', ru: 'у врача', category: 'Местные падежи' },
    { id: 'l12_v2', hu: 'orvoshoz', ru: 'к врачу', category: 'Местные падежи' },
    { id: 'l12_v3', hu: 'orvostól', ru: 'от врача', category: 'Местные падежи' },
    { id: 'l12_v4', hu: 'Péternél', ru: 'у Петера', category: 'Местные падежи' },
    { id: 'l12_v5', hu: 'Péterhez', ru: 'к Петеру', category: 'Местные падежи' },
    { id: 'l12_v6', hu: 'Pétertől', ru: 'от Петера', category: 'Местные падежи' },
    { id: 'l12_v7', hu: 'alatt', ru: 'под', category: 'Послелоги' },
    { id: 'l12_v8', hu: 'felett', ru: 'над', category: 'Послелоги' },
    { id: 'l12_v9', hu: 'mellett', ru: 'рядом с', category: 'Послелоги' },
    { id: 'l12_v10', hu: 'előtt', ru: 'перед', category: 'Послелоги' },
    { id: 'l12_v11', hu: 'mögött', ru: 'за', category: 'Послелоги' },
    { id: 'l12_v12', hu: 'között', ru: 'между', category: 'Послелоги' },
    { id: 'l12_v13', hu: 'nálam', ru: 'у меня', category: 'Местоименные формы' },
    { id: 'l12_v14', hu: 'hozzám', ru: 'ко мне', category: 'Местоименные формы' },
    { id: 'l12_v15', hu: 'tőlem', ru: 'от меня', category: 'Местоименные формы' },
    { id: 'l12_v16', hu: 'két nap múlva', ru: 'через два дня', category: 'Время' }
  ]
};
