import { Lesson } from '../../types';

export const LESSON_5: Lesson = {
  id: 5,
  number: 5,
  level: 'A0',
  title: 'Урок 5 · Számok, idő, napok',
  subtitle: 'Числа 1–100, время, дни недели, месяцы и даты',
  description: 'Числа 1-100, выражение времени (Hány óra van?), -kor суффикс, дни недели, 12 месяцев, формат даты Год-Месяц-День и распорядок дня.',
  slidesCount: 12,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 5 · 1/12 · ЧИСЛА",
      title: "Számok 1–10",
      subtitle: "Основные числа",
      body: `
   <table class="conj">
     <tr><th>Число</th><th>Венгерский</th></tr>
     <tr><td>1</td><td><button class="speak-btn" data-speak-text="egy" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> egy</button></td></tr>
     <tr><td>2</td><td><button class="speak-btn" data-speak-text="kettő" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kettő</button></td></tr>
     <tr><td>3</td><td><button class="speak-btn" data-speak-text="három" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> három</button></td></tr>
     <tr><td>4</td><td><button class="speak-btn" data-speak-text="négy" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> négy</button></td></tr>
     <tr><td>5</td><td><button class="speak-btn" data-speak-text="öt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> öt</button></td></tr>
     <tr><td>6</td><td><button class="speak-btn" data-speak-text="hat" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hat</button></td></tr>
     <tr><td>7</td><td><button class="speak-btn" data-speak-text="hét" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hét</button></td></tr>
     <tr><td>8</td><td><button class="speak-btn" data-speak-text="nyolc" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nyolc</button></td></tr>
     <tr><td>9</td><td><button class="speak-btn" data-speak-text="kilenc" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kilenc</button></td></tr>
     <tr><td>10</td><td><button class="speak-btn" data-speak-text="tíz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tíz</button></td></tr>
   </table>
   <div class="note">Помните из 3-го урока: после числительного существительное остается в единственном числе (<button class="speak-btn" data-speak-text="két könyv" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> két könyv</button>).</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 5 · 2/12 · ЧИСЛА 11–100",
      title: "Számok 11–100",
      subtitle: "Как образовывать большие числа",
      body: `
   <table class="conj">
     <tr><th>Число</th><th>Венгерский</th></tr>
     <tr><td>11</td><td><button class="speak-btn" data-speak-text="tizenegy" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tizenegy</button></td></tr>
     <tr><td>12</td><td><button class="speak-btn" data-speak-text="tizenkettő" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tizenkettő</button></td></tr>
     <tr><td>20</td><td><button class="speak-btn" data-speak-text="húsz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> húsz</button></td></tr>
     <tr><td>21</td><td><button class="speak-btn" data-speak-text="huszonegy" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> huszonegy</button></td></tr>
     <tr><td>30</td><td><button class="speak-btn" data-speak-text="harminc" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> harminc</button></td></tr>
     <tr><td>100</td><td><button class="speak-btn" data-speak-text="száz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> száz</button></td></tr>
   </table>
   <div class="note">Правило: числа от 11 до 19 образуются с помощью <span class="hu-word">tizen-</span> + число (tizenegy, tizenkettő...): логика типа «на десять-один». 21, 31 и т.д. образуются: десяток + <span class="hu-word">egy</span> (huszon<b>egy</b>).</div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 5 · 3/12 · ВРЕМЯ",
      title: "Hány óra van?",
      subtitle: "Как спросить и сказать время",
      body: `
   <p><button class="speak-btn" data-speak-text="Hány óra van?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Hány óra van?</button> <span style="color:#8a7a68">(Который час?)</span></p>
   <p><button class="speak-btn" data-speak-text="Három óra van." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Három óra van.</button> <span style="color:#8a7a68">(Три часа)</span></p>
   <p><button class="speak-btn" data-speak-text="Öt óra van." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Öt óra van.</button> <span style="color:#8a7a68">(Пять часов)</span></p>
   <p><button class="speak-btn" data-speak-text="Dél van." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Dél van.</button> <span style="color:#8a7a68">(Полдень)</span></p>
   <div class="note">Внимание: в ответе о времени число принимает суффикс <b>-kor</b>, когда вы говорите «в ... часов»: <button class="speak-btn" data-speak-text="három órakor" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> három órakor</button> (в три часа).</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 5 · 4/12 · ДНИ НЕДЕЛИ",
      title: "A hét napjai",
      subtitle: "Дни недели",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="hétfő" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hétfő</button> — понедельник</p>
       <p><button class="speak-btn" data-speak-text="kedd" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kedd</button> — вторник</p>
       <p><button class="speak-btn" data-speak-text="szerda" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szerda</button> — среда</p>
       <p><button class="speak-btn" data-speak-text="csütörtök" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> csütörtök</button> — четверг</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="péntek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> péntek</button> — пятница</p>
       <p><button class="speak-btn" data-speak-text="szombat" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szombat</button> — суббота</p>
       <p><button class="speak-btn" data-speak-text="vasárnap" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vasárnap</button> — воскресенье</p>
     </div>
   </div>
   <p><button class="speak-btn" data-speak-text="Hétfőn dolgozom." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Hétfőn dolgozom.</button> <span style="color:#8a7a68">(В понедельник я работаю)</span></p>
   <div class="note">Когда мы говорим название дня («в ...»), используется суффикс <b>-n/-on/-en/-ön</b>: hétfő<b>n</b>, kedd<b>en</b>, szombat<b>on</b> — это настоящий падеж, который мы подробно рассмотрим в 11-м уроке.</div>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 5 · 5/12 · МЕСЯЦЫ",
      title: "A hónapok",
      subtitle: "Названия месяцев",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="január" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> január</button> — январь</p>
       <p><button class="speak-btn" data-speak-text="február" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> február</button> — февраль</p>
       <p><button class="speak-btn" data-speak-text="március" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> március</button> — март</p>
       <p><button class="speak-btn" data-speak-text="április" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> április</button> — апрель</p>
       <p><button class="speak-btn" data-speak-text="május" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> május</button> — май</p>
       <p><button class="speak-btn" data-speak-text="június" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> június</button> — июнь</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="július" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> július</button> — июль</p>
       <p><button class="speak-btn" data-speak-text="augusztus" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> augusztus</button> — август</p>
       <p><button class="speak-btn" data-speak-text="szeptember" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szeptember</button> — сентябрь</p>
       <p><button class="speak-btn" data-speak-text="október" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> október</button> — октябрь</p>
       <p><button class="speak-btn" data-speak-text="november" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> november</button> — ноябрь</p>
       <p><button class="speak-btn" data-speak-text="december" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> december</button> — декабрь</p>
     </div>
   </div>
   <div class="note">Названия месяцев в венгерском языке пишутся <b>со строчной буквы</b>, в отличие от правил некоторых других языков.</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 5 · 6/12 · ДАТА",
      title: "A dátum",
      subtitle: "Как сказать дату",
      body: `
   <p>В венгерском языке дата пишется в порядке <b>от большего к меньшему</b>: Год → Месяц → День (как формат ISO!).</p>
   <p><button class="speak-btn" data-speak-text="2026. augusztus 3." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> 2026. augusztus 3.</button> <span style="color:#8a7a68">(3 августа 2026 года)</span></p>
   <div class="task">Задание 1. Скажите вслух дату своего рождения на венгерском, соблюдая порядок Год-Месяц-День.</div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 5 · 7/12 · НАРЕЧИЯ ВРЕМЕНИ",
      title: "Időhatározók",
      subtitle: "Часто используемые слова времени",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="ma" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ma</button> — сегодня</p>
       <p><button class="speak-btn" data-speak-text="tegnap" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tegnap</button> — вчера</p>
       <p><button class="speak-btn" data-speak-text="holnap" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> holnap</button> — завтра</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="minden nap" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> minden nap</button> — каждый день</p>
       <p><button class="speak-btn" data-speak-text="most" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> most</button> — сейчас</p>
       <p><button class="speak-btn" data-speak-text="később" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> később</button> — позже/потом</p>
     </div>
   </div>
   <p><button class="speak-btn" data-speak-text="Ma magyarul tanulok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Ma magyarul tanulok.</button> <span style="color:#8a7a68">(Сегодня я учу венгерский)</span></p>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 5 · 8/12 · РАСПОРЯДОК ДНЯ",
      title: "Napirend",
      subtitle: "Описание распорядка дня",
      body: `
   <p><button class="speak-btn" data-speak-text="Reggel hétkor felkelek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Reggel hétkor felkelek.</button> <span style="color:#8a7a68">(Я просыпаюсь в семь часов)</span></p>
   <p><button class="speak-btn" data-speak-text="Nyolckor reggelizem." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nyolckor reggelizem.</button> <span style="color:#8a7a68">(Я завтракаю в восемь)</span></p>
   <p><button class="speak-btn" data-speak-text="Kilenctől dolgozom." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Kilenctől dolgozom.</button> <span style="color:#8a7a68">(С девяти часов я работаю)</span></p>
   <p><button class="speak-btn" data-speak-text="Este magyarul tanulok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Este magyarul tanulok.</button> <span style="color:#8a7a68">(Вечером я учу венгерский)</span></p>
   <div class="task">Задание 2. Напишите свой собственный распорядок дня в 4 предложениях, по образцу выше.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 5 · 9/12 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Назначение встречи",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Szia! Mikor érsz rá?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia! Mikor érsz rá?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Szerdán jó lenne, délután háromkor." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szerdán jó lenne, délután háromkor.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Rendben, hol találkozzunk?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Rendben, hol találkozzunk?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="A kávézóban, jó?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A kávézóban, jó?</button></p>
   <div class="task">Задание 3. Прочитайте диалог 2 раза, затем напишите похожий диалог, изменив время и день.</div>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 5 · 10/12 · УПРАЖНЕНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверь себя",
      body: `
   <ol class="tasklist">
     <li>Напишите по-венгерски: 7, 15, 23, 40, 100</li>
     <li>Скажите, который сейчас час (по вашему реальному времени)</li>
     <li>Назовите все 7 дней недели по-венгерски, не подглядывая</li>
     <li>Напишите дату своего рождения в венгерском порядке Год-Месяц-День</li>
     <li>Составьте 3 предложения о своем распорядке дня</li>
   </ol>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 5 · 11/12 · ДОПОЛНИТЕЛЬНО",
      title: "Kis szókincs",
      subtitle: "Дополнительные полезные слова",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="hét" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hét</button> — неделя (как промежуток времени)</p>
       <p><button class="speak-btn" data-speak-text="hónap" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hónap</button> — месяц (как промежуток времени)</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="év" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> év</button> — год</p>
       <p><button class="speak-btn" data-speak-text="perc" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> perc</button> — минута/секунда</p>
     </div>
   </div>
   <div class="note"><button class="speak-btn" data-speak-text="perc" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> perc</button> в венгерском используется и в значении «минута», и в общем смысле «секундочку» («egy perc» = «одну минутку/секунду, подождите»).</div>
 `
    },
    {
      id: 12,
      eyebrow: "УРОК 5 · 12/12 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Краткое содержание 5-го урока",
      body: `
   <ul class="tick">
     <li>Числа 1-100, логика tizen-/huszon- для 11-99</li>
     <li>Как спросить/сказать время, суффикс -kor в значении «в ... часов»</li>
     <li>Дни недели, месяцы (со строчной буквы)</li>
     <li>Дата: порядок Год → Месяц → День</li>
     <li>Основные наречия времени (ma, tegnap, holnap...)</li>
   </ul>
   <div class="note"><b>Домашнее задание:</b> напишите полный календарь на неделю на венгерском языке (что вы будете делать каждый день). В следующем уроке (6-м) мы сделаем полное повторение уровня A0 и мини-диалог, прежде чем переходить к падежам уровня A1.</div>
 `
    }
  ]
};
