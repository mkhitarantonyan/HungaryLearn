import { Lesson } from '../../types';

export const LESSON_23: Lesson = {
  id: 23,
  number: 23,
  level: 'B1',
  title: 'Урок 23 · A feltételes mód',
  subtitle: 'Условное наклонение',
  description: 'Условное наклонение с суффиксами -na/-ne/-ná/-né, неопределённая и определённая парадигма, форма lenne (было бы), вежливые просьбы и условные предложения с ha.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 23 · 1/11 · ЗНАК УСЛОВИЯ",
      title: "A feltételes mód",
      subtitle: "Суффикс -na/-ne/-ná/-né — маркер «бы»",
      body: `
   <p>Условное наклонение выражает гипотетическое действие, желание, возможность или мечту («я сделал бы», «если бы...»). Его маркер — суффикс <span class="hu-word">-na / -ne</span> (или <span class="hu-word">-ná / -né</span> перед окончаниями), подчиняющийся гармонии гласных:</p>
   <p><button class="speak-btn" data-speak-text="tanulna" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulna</button> <span style="color:#8a7a68">(он учился бы — задние гласные)</span></p>
   <p><button class="speak-btn" data-speak-text="kérne" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérne</button> <span style="color:#8a7a68">(он просил бы — передние гласные)</span></p>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 23 · 2/11 · НЕОПРЕДЕЛЁННОЕ УСЛОВИЕ",
      title: "Alanyi feltételes mód",
      subtitle: "Неопределённое условное наклонение",
      body: `
   <table class="conj">
     <tr><th>Кто</th><th>tanul (учиться)</th><th>kér (просить)</th><th>Значение</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="tanulnék" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnék</button></td><td><button class="speak-btn" data-speak-text="kérnék" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnék</button></td><td>я учился бы / я просил бы</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="tanulnál" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnál</button></td><td><button class="speak-btn" data-speak-text="kérnél" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnél</button></td><td>ты учился бы / ты просил бы</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="tanulna" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulna</button></td><td><button class="speak-btn" data-speak-text="kérne" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérne</button></td><td>он учился бы / он просил бы</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="tanulnánk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnánk</button></td><td><button class="speak-btn" data-speak-text="kérnénk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnénk</button></td><td>мы учились бы / мы просили бы</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="tanulnátok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnátok</button></td><td><button class="speak-btn" data-speak-text="kérnétek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnétek</button></td><td>вы учились бы / вы просили бы</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="tanulnának" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnának</button></td><td><button class="speak-btn" data-speak-text="kérnének" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnének</button></td><td>они учились бы / они просили бы</td></tr>
   </table>
   <div class="note">Вам уже знакома форма <button class="speak-btn" data-speak-text="kérnék" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnék</button> из 15-го урока («я попросил бы...») и <button class="speak-btn" data-speak-text="szeretnék" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szeretnék</button> из 18-го урока («я хотел бы...») — это именно неопределённое условное наклонение 1-го лица!</div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 23 · 3/11 · ОПРЕДЕЛЁННОЕ УСЛОВИЕ",
      title: "Tárgyas feltételes mód",
      subtitle: "Определённое условное наклонение",
      body: `
   <table class="conj">
     <tr><th>Кто</th><th>tanul + конкретный объект</th><th>kér + конкретный объект</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="tanulnám" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnám</button></td><td><button class="speak-btn" data-speak-text="kérném" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérném</button></td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="tanulnád" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnád</button></td><td><button class="speak-btn" data-speak-text="kérnéd" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnéd</button></td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="tanulná" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulná</button></td><td><button class="speak-btn" data-speak-text="kérné" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérné</button></td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="tanulnánk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnánk</button></td><td><button class="speak-btn" data-speak-text="kérnénk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnénk</button></td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="tanulnátok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnátok</button></td><td><button class="speak-btn" data-speak-text="kérnétek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnétek</button></td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="tanulnák" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnák</button></td><td><button class="speak-btn" data-speak-text="kérnék" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnék</button></td></tr>
   </table>
   <div class="note">Сравните 1-е лицо ед.ч.: <button class="speak-btn" data-speak-text="Elolvasnék egy könyvet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Elolvasnék egy könyvet.</button> (неопределённое) vs <button class="speak-btn" data-speak-text="Elolvasnám ezt a könyvet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Elolvasnám ezt a könyvet.</button> (определённое).</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 23 · 4/11 · LENNE",
      title: "Rendhagyó igék",
      subtitle: "Самый главный: lenne — от lenni",
      body: `
   <p>Условная форма от глагола <span class="hu-word">lenni</span> — <span class="hu-word">lenne</span> («было бы»):</p>
   <p><button class="speak-btn" data-speak-text="Jó lenne találkozni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó lenne találkozni.</button> <span style="color:#8a7a68">(Было бы хорошо встретиться)</span></p>
   <p><button class="speak-btn" data-speak-text="Lennél szíves segíteni?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Lennél szíves segíteni?</button> <span style="color:#8a7a68">(Не был бы ты так любезен помочь?)</span></p>
   <div class="note"><button class="speak-btn" data-speak-text="Jó lenne találkozni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó lenne találkozni.</button> — одна из самых частых разговорных фраз для предложения планов друг другу.</div>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 23 · 5/11 · УСЛОВНЫЕ ПРЕДЛОЖЕНИЯ",
      title: "Feltételes mondatok",
      subtitle: "Условные предложения с ha (если)",
      body: `
   <p>Конструкции «если бы..., то...» строятся со союзом <span class="hu-word">ha</span> и условным наклонением в <b>обеих частях</b> предложения (как и в русском):</p>
   <p><button class="speak-btn" data-speak-text="Ha lenne időm, moziba mennék." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Ha lenne időm, moziba mennék.</button> <span style="color:#8a7a68">(Если бы у меня было время, я пошёл бы в кино)</span></p>
   <p><button class="speak-btn" data-speak-text="Ha sokat tanulnál, tudnád a választ." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Ha sokat tanulnál, tudnád a választ.</button> <span style="color:#8a7a68">(Если бы ты много учился, ты знал бы ответ)</span></p>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 23 · 6/11 · ВЕЖЛИВОСТЬ",
      title: "Udvarias kérések",
      subtitle: "Вежливые просьбы с условным наклонением",
      body: `
   <p>Условное наклонение делает любую просьбу предельно вежливой, убирая категоричность из разговорных диалогов:</p>
   <p><button class="speak-btn" data-speak-text="Tudnál segíteni?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tudnál segíteni?</button> <span style="color:#8a7a68">(Мог бы ты помочь? — вежливее, чем tudsz segíteni?)</span></p>
   <p><button class="speak-btn" data-speak-text="Kérhetnék egy kávét?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Kérhetnék egy kávét?</button> <span style="color:#8a7a68">(Мог бы я попросить кофе? — верх вежливости в кафе!)</span></p>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 23 · 7/11 · ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "Мечты и гипотезы",
      body: `
   <p><button class="speak-btn" data-speak-text="Ha gazdag lennék, sokat utaznék." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Ha gazdag lennék, sokat utaznék.</button> <span style="color:#8a7a68">(Если бы я был богат, я бы много путешествовал)</span></p>
   <p><button class="speak-btn" data-speak-text="Mit csinálnál, ha nem kellene dolgoznod?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mit csinálnál, ha nem kellene dolgoznod?</button> <span style="color:#8a7a68">(Что бы ты делал, если бы тебе не нужно было работать?)</span></p>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 23 · 8/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Планирование выходных",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Jó lenne elmenni a Balatonra a hétvégén." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó lenne elmenni a Balatonra a hétvégén.</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Igen, de ha esne az eső, nem tudnánk fürödni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Igen, de ha esne az eső, nem tudnánk fürödni.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Akkor múzeumba mennénk. Mit szólsz?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Akkor múzeumba mennénk. Mit szólsz?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Benne vagyok, nagyszerű lenne!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Benne vagyok, nagyszerű lenne!</button></p>
   <div class="task">Задание 1. Найдите все условные формы в диалоге и переведите их.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 23 · 9/11 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      body: `
   <ol class="tasklist">
     <li>Образуйте условную форму (1-е л. ед.ч., неопределённая) от: tanul, dolgozik, utazik, van</li>
     <li>Переведите: «Если бы у меня было время, я прочитал бы эту книгу»</li>
     <li>Составьте вежливую просьбу в кафе с помощью kérhetnék</li>
     <li>Переведите: «Было бы хорошо поехать в Будапешт»</li>
     <li>Составьте предложение на тему «Что бы я сделал, если бы выиграл в лотерею» (1-2 предложения)</li>
   </ol>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 23 · 10/11 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Что дальше",
      body: `
   <p>Теперь вы владеете всеми главными наклонениями (изъявительное, повелительное, условное). В следующем, 24-м уроке мы научимся связывать предложения между собой с помощью сложных союзов (mert, hogy, bár, ezért...) и строит развитую речь B1.</p>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 23 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 23-го урока",
      body: `
   <ul class="tick">
     <li>Маркер условного наклонения — суффикс -na/-ne (tanulna, kérne)</li>
     <li>Тоже имеет два спряжения: неопределённое (tanulnék) и определённое (tanulnám)</li>
     <li>lenni → lenne (было бы), lennék (я был бы)</li>
     <li>Условные предложения: ha + условное наклонение в обеих частях</li>
     <li>Вежливые просьбы: tudnál?, kérhetnék?</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Напишите 5 предложений на тему «Если бы у меня был свободный месяц, я бы...» с условным наклонением.</div>
 `
    }
  ],
  vocabulary: [
    { id: "l23_v1", hu: "gazdag", ru: "богатый", category: "Прилагательные", exampleSentence: "Ha gazdag lennék, utaznék.",
        ipa: "[gɒzdɒg]"
    },
    { id: "l23_v2", hu: "fürödni", ru: "купаться", category: "Глаголы", exampleSentence: "Jó lenne fürödni a tóban.",
        ipa: "[fˈyrødni]"
    },
    { id: "l23_v3", hu: "nagyszerű", ru: "великолепный / замечательный", category: "Прилагательные", exampleSentence: "Nagyszerű lenne találkozni!",
        ipa: "[nɒɟʃˈɛryː]"
    }
  ],
    quiz: [
    {
      id: 2301,
      question: 'Какой суффикс является маркером условного наклонения в венгерском языке?',
      options: ['-na / -ne', '-j-', '-t-', '-ni'],
      correctIndex: 0,
      explanation: 'Маркером условного наклонения является суффикс -na (для задних гласных) или -ne (для передних гласных): tanulna (он учился бы), kérne (он просил бы).'
    },
    {
      id: 2302,
      question: 'Как образуется определённое условное наклонение от глагола "lát" (видеть) в 1-м лице единственного числа (én)?',
      options: ['látnék', 'látnám', 'látnád', 'látná'],
      correctIndex: 1,
      explanation: 'Определённое условное наклонение используется с конкретным объектом. Для 1-го лица (én) форма: lát + n + á + m = látnám (я видел бы ЭТО). "Látnék" – это неопределённое условное (я видел бы что-то).'
    },
    {
      id: 2303,
      question: 'Как переводится фраза "Lennél szíves segíteni?"?',
      options: [
        'Ты помогаешь?',
        'Не был бы ты так любезен помочь?',
        'Ты умеешь помогать?',
        'Помоги мне!'
      ],
      correctIndex: 1,
      explanation: '"Lennél" – это условная форма от "lenni" (быть) во 2-м лице: "ты был бы". Вся фраза – очень вежливая просьба: "Не был бы ты так любезен помочь?" (урок 23, слайд 4).'
    },
    {
      id: 2304,
      question: 'Как строится условное предложение с союзом "ha" (если бы) в венгерском языке?',
      options: [
        'Условное наклонение только в первой части (после ha)',
        'Условное наклонение только во второй части (главной)',
        'Условное наклонение в обеих частях предложения',
        'Изъявительное наклонение в обеих частях'
      ],
      correctIndex: 2,
      explanation: 'В условных предложениях с "ha" (если бы) условное наклонение используется в ОБЕИХ частях: "Ha lenne időm, moziba mennék." (Если бы у меня было время, я пошёл бы в кино).'
    },
    {
      id: 2305,
      question: 'Какая форма глагола "tanul" (учиться) в неопределённом условном наклонении 1-го лица множественного числа (mi)?',
      options: ['tanulnánk', 'tanulnánk', 'tanulnánk', 'tanulnánk'],
      correctIndex: 0,
      explanation: 'Условное наклонение для "mi" (мы) в неопределённой форме: tanul + n + á + nk = tanulnánk (мы учились бы).'
    },
    {
      id: 2306,
      question: 'Какая условная форма используется для очень вежливой просьбы в кафе: "Мог бы я попросить кофе?"?',
      options: ['Kérsz egy kávét?', 'Kérhetnék egy kávét?', 'Kérek egy kávét.', 'Adsz egy kávét?'],
      correctIndex: 1,
      explanation: 'Условное наклонение делает просьбу предельно вежливой. "Kérhetnék" – это условная форма от "kér" (просить) в 1-м лице: "Мог бы я попросить?". "Kérhetnék egy kávét?" – очень вежливая просьба в кафе (урок 23, слайд 6).'
    }
  ],
  objectives: [
    { id: 'l23_form-conditional', text: 'Образовывать условное наклонение с помощью -na/-ne.', skills: ['grammar', 'writing'] },
    { id: 'l23_use-lenne', text: 'Употреблять форму lenne («был бы»).', skills: ['grammar', 'writing'] },
    { id: 'l23_build-if-clauses', text: 'Строить условные предложения с союзом ha.', skills: ['grammar', 'writing', 'speaking'] },
    { id: 'l23_express-wishes', text: 'Выражать желания и вежливые просьбы в условном наклонении.', skills: ['speaking', 'writing'] },
    { id: 'l23_understand-conditional', text: 'Понимать условные конструкции на слух и в тексте.', skills: ['listening', 'reading'] },
  ],
};
