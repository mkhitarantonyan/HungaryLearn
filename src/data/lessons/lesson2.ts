import { Lesson } from '../../types';

export const LESSON_2: Lesson = {
  id: 2,
  number: 2,
  level: 'A0',
  title: 'Урок 2 · Köszönés & lenni',
  subtitle: 'Приветствия, личные местоимения, глагол «быть»',
  description: 'Официальные и неофициальные приветствия (Szia, Jó napot), личные местоимения (én, te, ő...), спряжение глагола lenni (vagyok, vagy, van) и первое знакомство.',
  slidesCount: 10,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 2 · 1/10 · ПРИВЕТСТВИЯ",
      title: "Köszönések",
      subtitle: "Приветствия: официальные и неофициальные",
      body: `
   <p>В венгерском языке, как и в русском, есть разница между официальными и дружескими приветствиями.</p>
   <table class="conj">
     <tr><th>Венгерский</th><th>Значение</th><th>Когда использовать</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="Szia" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia</button></td><td>Привет / Пока</td><td>с друзьями, ровесниками (обоюдно)</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="Jó napot" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó napot</button></td><td>Добрый день</td><td>официально, с незнакомыми</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="Jó estét" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó estét</button></td><td>Добрый вечер</td><td>официально, вечером</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="Viszontlátásra" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Viszontlátásra</button></td><td>До свидания</td><td>официальное прощание</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="Szevasz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szevasz</button></td><td>Пока / Привет</td><td>очень неформально, с близкими</td></tr>
   </table>
   <div class="note"><button class="speak-btn" data-speak-text="Szia" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia</button> — одно из самых часто используемых слов в венгерском: оно используется и при приветствии, и при прощании, как итальянское «ciao».</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 2 · 2/10 · МЕСТОИМЕНИЯ",
      title: "Személyes névmások",
      subtitle: "Личные местоимения",
      body: `
   <table class="conj">
     <tr><th>Венгерский</th><th>Русский</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="én" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> én</button></td><td>я</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="te" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> te</button></td><td>ты</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="ő" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ő</button></td><td>он / она</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="mi" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mi</button></td><td>мы</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="ti" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ti</button></td><td>вы</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="ők" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ők</button></td><td>они</td></tr>
   </table>
   <div class="note">Важно: в венгерском <b>нет</b> родовых различий в местоимении 3-го лица (он/она) — <button class="speak-btn" data-speak-text="ő" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ő</button> означает и «он» (мужчина), и «она» (женщина). Род вообще не выражен грамматически в венгерском языке.</div>
   <div class="warn">В венгерском языке местоимение часто <b>опускается</b>, так как окончание глагола уже указывает на того, кто совершает действие (как в русском). Местоимение используется в основном для логического выделения (эмфазы).</div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 2 · 3/10 · ГЛАГОЛ",
      title: "A lenni ige",
      subtitle: "Глагол «быть» в настоящем времени",
      body: `
   <p>«Lenni» (быть) — самый важный и часто используемый глагол венгерского языка.</p>
   <table class="conj">
     <tr><th>Местоимение</th><th>Форма</th><th>Значение</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="vagyok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vagyok</button></td><td>я есть</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="vagy" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vagy</button></td><td>ты есть</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="van" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> van</button></td><td>он/она есть</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="vagyunk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vagyunk</button></td><td>мы есть</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="vagytok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vagytok</button></td><td>вы есть</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="vannak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vannak</button></td><td>они есть</td></tr>
   </table>
   <div class="warn">Внимание: когда вы говорите, <b>какой</b> кто-то (с прилагательным), в 3-м лице (ő, ők) «van/vannak» <b>ОПУСКАЮТСЯ</b>. «Ő szép» = «Она красивая» (без «van»). Но «Ő itt van» = «Она здесь» (van остается, так как указывает на место).</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 2 · 4/10 · ПРЕДСТАВЛЕНИЕ",
      title: "Bemutatkozás",
      subtitle: "Как представить себя",
      body: `
   <p>Основная формула:</p>
   <p><button class="speak-btn" data-speak-text="Szia, ... vagyok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia, ... vagyok.</button> <span style="color:#8a7a68">(Привет, я [имя])</span></p>
   <p><button class="speak-btn" data-speak-text="Örülök, hogy megismertelek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Örülök, hogy megismertelek.</button> <span style="color:#8a7a68">(Приятно познакомиться)</span></p>
   <p><button class="speak-btn" data-speak-text="Örményországból vagyok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Örményországból vagyok.</button> <span style="color:#8a7a68">(Я из Армении)</span></p>
   <p><button class="speak-btn" data-speak-text="Budapesten élek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Budapesten élek.</button> <span style="color:#8a7a68">(Я живу в Будапеште)</span></p>
   <div class="task">Задание 1. Составьте свой собственный рассказ о себе, используя шаблон 4 предложений выше, подставив свое имя и страну.</div>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 2 · 5/10 · НАЦИОНАЛЬНОСТЬ",
      title: "Nemzetiségek",
      subtitle: "Национальности и страны",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="Örményország" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Örményország</button> — Армения</p>
       <p><button class="speak-btn" data-speak-text="örmény" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> örmény</button> — армянин (человек) / армянский</p>
       <p><button class="speak-btn" data-speak-text="Magyarország" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Magyarország</button> — Венгрия</p>
       <p><button class="speak-btn" data-speak-text="magyar" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> magyar</button> — венгерский / венгр</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="Oroszország" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Oroszország</button> — Россия</p>
       <p><button class="speak-btn" data-speak-text="orosz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> orosz</button> — русский</p>
       <p><button class="speak-btn" data-speak-text="Amerika" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Amerika</button> — Америка</p>
       <p><button class="speak-btn" data-speak-text="amerikai" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> amerikai</button> — американец / американский</p>
     </div>
   </div>
   <div class="note">Правило: название страны всегда с большой буквы, но национальность (прилагательное/существительное) пишется в венгерском <b>со строчной (маленькой) буквы</b>, в отличие от английского.</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 2 · 6/10 · ПРОФЕССИЯ",
      title: "Foglalkozások",
      subtitle: "Основные профессии",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="programozó" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> programozó</button> — программист</p>
       <p><button class="speak-btn" data-speak-text="tanár" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanár</button> — учитель</p>
       <p><button class="speak-btn" data-speak-text="orvos" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> orvos</button> — врач</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="designer" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> designer</button> — дизайнер</p>
       <p><button class="speak-btn" data-speak-text="diák" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> diák</button> — студент / ученик</p>
       <p><button class="speak-btn" data-speak-text="ügyvéd" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ügyvéd</button> — юрист / адвокат</p>
     </div>
   </div>
   <p><button class="speak-btn" data-speak-text="Fullstack programozó vagyok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Fullstack programozó vagyok.</button> <span style="color:#8a7a68">(Я fullstack программист)</span></p>
   <div class="task">Задание 2. Скажите вслух, какая у вас профессия, используя шаблон «<button class="speak-btn" data-speak-text="én" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> én</button> ... vagyok».</div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 2 · 7/10 · ВОПРОС И ОТРИЦАНИЕ",
      title: "Kérdés és tagadás",
      subtitle: "Вопросы «да/нет» и отрицание",
      body: `
   <p>В венгерском языке вопрос «да/нет» образуется <b>без</b> специального вопросительного слова, только с помощью интонации (повышение голоса в конце предложения) или на письме — вопросительного знака:</p>
   <p><button class="speak-btn" data-speak-text="Magyar vagy?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Magyar vagy?</button> <span style="color:#8a7a68">(Ты венгр?)</span></p>
   <p>Отрицание образуется с помощью слова <button class="speak-btn" data-speak-text="nem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nem</button>, которое ставится перед глаголом:</p>
   <p><button class="speak-btn" data-speak-text="Nem vagyok magyar." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem vagyok magyar.</button> <span style="color:#8a7a68">(Я не венгр)</span></p>
   <p><button class="speak-btn" data-speak-text="Ő nincs itt." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Ő nincs itt.</button> <span style="color:#8a7a68">(Его/её здесь нет)</span></p>
   <div class="note">Для утвердительного ответа вы говорите <button class="speak-btn" data-speak-text="igen" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> igen</button> (да), для отрицательного — <button class="speak-btn" data-speak-text="nem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nem</button> (нет).</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 2 · 8/10 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Первый диалог",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Szia! Hogy hívnak?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia! Hogy hívnak?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Szia! Annának hívnak. És téged?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia! Annának hívnak. És téged?</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Engem Mkhitárnak hívnak. Honnan vagy?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Engem Mkhitárnak hívnak. Honnan vagy?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Örményországból vagyok, de Budapesten élek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Örményországból vagyok, de Budapesten élek.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Nagyon örülök! Mi a foglalkozásod?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nagyon örülök! Mi a foglalkozásod?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Programozó vagyok. És te?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Programozó vagyok. És te?</button></p>
   <div class="task">Задание 3. Прочитайте диалог вслух 2 раза: один раз за A, один раз за B.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 2 · 9/10 · УПРАЖНЕНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверь себя",
      body: `
   <ol class="tasklist">
     <li>Переведите на венгерский: «Привет, я Анна, я из Армении»</li>
     <li>Проспрягайте глагол «lenni» во всех 6 лицах, не глядя в таблицу</li>
     <li>Составьте отрицательное предложение: «Я не врач»</li>
     <li>Составьте вопросительное предложение: «Ты студент?»</li>
     <li>Скажите вслух 3 разных способа поприветствовать кого-то в зависимости от ситуации (друг, незнакомец, вечером)</li>
   </ol>
   <div class="note">Проверьте свои ответы в начале следующего урока — в 3-м уроке мы перейдем к существительным, артиклям и множественному числу.</div>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 2 · 10/10 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Краткое содержание 2-го урока",
      body: `
   <ul class="tick">
     <li>Основные приветствия: официальные и неофициальные</li>
     <li>Личные местоимения: én, te, ő, mi, ti, ők</li>
     <li>Глагол «lenni» в настоящем времени: vagyok, vagy, van, vagyunk, vagytok, vannak</li>
     <li>При описании с помощью прилагательного в 3-м лице «van/vannak» опускается</li>
     <li>Вопрос — интонацией, отрицание — с помощью «nem»</li>
   </ul>
   <div class="note"><b>Домашнее задание:</b> напишите рассказ о себе из 5 предложений на венгерском языке и читайте его вслух каждый день, пока произношение не станет плавным.</div>
 `
    }
  ]
};
