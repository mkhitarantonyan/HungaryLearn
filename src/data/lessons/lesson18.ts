import { Lesson } from '../../types';

export const LESSON_18: Lesson = {
  id: 18,
  number: 18,
  level: 'A2',
  title: 'Урок 18 · Módbeli segédigék',
  subtitle: 'Модальные глаголы и инфинитив',
  description: 'Образование инфинитива (-ni), глагол kell с личным инфинитивом (mennem kell), lehet (можно), tud (уметь), szeretne (хотел бы) и akar (хотеть).',
  slidesCount: 12,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 18 · 1/12 · ИНФИНИТИВ",
      title: "A főnévi igenév",
      subtitle: "Инфинитив — суффикс -ni",
      body: `
   <p>Прежде чем перейти к модальным глаголам, нужен инфинитив («делать», «идти», «есть») — он образуется суффиксом <span class="hu-word">-ni</span>:</p>
   <table class="conj">
     <tr><th>Глагол</th><th>Инфинитив</th></tr>
     <tr><td>tanul</td><td><button class="speak-btn" data-speak-text="tanulni" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulni</button></td></tr>
     <tr><td>dolgozik</td><td><button class="speak-btn" data-speak-text="dolgozni" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgozni</button></td></tr>
     <tr><td>ír</td><td><button class="speak-btn" data-speak-text="írni" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> írni</button></td></tr>
   </table>
   <p>Несколько частых глаголов неправильные:</p>
   <table class="conj">
     <tr><th>Глагол</th><th>Инфинитив</th></tr>
     <tr><td>van (быть)</td><td><button class="speak-btn" data-speak-text="lenni" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> lenni</button></td></tr>
     <tr><td>megy (идти)</td><td><button class="speak-btn" data-speak-text="menni" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> menni</button></td></tr>
     <tr><td>eszik (есть)</td><td><button class="speak-btn" data-speak-text="enni" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> enni</button></td></tr>
     <tr><td>iszik (пить)</td><td><button class="speak-btn" data-speak-text="inni" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> inni</button></td></tr>
   </table>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 18 · 2/12 · KELL",
      title: "Kell",
      subtitle: "«Нужно», «должен» — безличный модальный глагол",
      body: `
   <p><span class="hu-word">kell</span> не спрягается по лицам как обычный глагол — вместо этого лицо выражается либо дательным падежом (15-й урок), либо личным окончанием на самом инфинитиве:</p>
   <p><button class="speak-btn" data-speak-text="Nekem mennem kell." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nekem mennem kell.</button> <span style="color:#8a7a68">(Мне нужно идти)</span></p>
   <p><button class="speak-btn" data-speak-text="Neked dolgoznod kell." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Neked dolgoznod kell.</button> <span style="color:#8a7a68">(Тебе нужно работать)</span></p>
   <div class="note">Дательное местоимение (<button class="speak-btn" data-speak-text="nekem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nekem</button>, <button class="speak-btn" data-speak-text="neked" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> neked</button>...) часто опускают, если из контекста и так понятно, о ком речь — тогда личное окончание на инфинитиве (-nem, -ned, -nie...) остаётся единственным указанием на подлежащее.</div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 18 · 3/12 · ЛИЧНЫЙ ИНФИНИТИВ",
      title: "Személyragos főnévi igenév",
      subtitle: "Инфинитив с личным окончанием",
      body: `
   <table class="conj">
     <tr><th>Кто</th><th>menni (идти) + окончание</th><th>Значение</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="mennem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mennem</button></td><td>мне идти</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="menned" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> menned</button></td><td>тебе идти</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="mennie" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mennie</button></td><td>ему идти</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="mennünk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mennünk</button></td><td>нам идти</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="mennetek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mennetek</button></td><td>вам идти</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="menniük" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> menniük</button></td><td>им идти</td></tr>
   </table>
   <p><button class="speak-btn" data-speak-text="Mennem kell." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mennem kell.</button> <span style="color:#8a7a68">(Мне нужно идти — без „nekem“, только окончание на инфинитиве)</span></p>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 18 · 4/12 · KELL + СУЩЕСТВИТЕЛЬНОЕ",
      title: "Kell + főnév",
      subtitle: "«Нужен/нужна/нужно» + предмет",
      body: `
   <p><span class="hu-word">kell</span> также используется напрямую с существительным (без инфинитива), чтобы сказать, что что-то требуется:</p>
   <p><button class="speak-btn" data-speak-text="Kenyér kell nekem." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Kenyér kell nekem.</button> <span style="color:#8a7a68">(Мне нужен хлеб)</span></p>
   <p><button class="speak-btn" data-speak-text="Idő kell nekünk." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Idő kell nekünk.</button> <span style="color:#8a7a68">(Нам нужно время)</span></p>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 18 · 5/12 · LEHET",
      title: "Lehet",
      subtitle: "«Можно», «возможно» — разрешение и вероятность",
      body: `
   <p><button class="speak-btn" data-speak-text="Lehet itt dohányozni?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Lehet itt dohányozni?</button> <span style="color:#8a7a68">(Здесь можно курить?)</span></p>
   <p><button class="speak-btn" data-speak-text="Nem, itt nem lehet dohányozni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem, itt nem lehet dohányozni.</button> <span style="color:#8a7a68">(Нет, здесь нельзя курить)</span></p>
   <p><button class="speak-btn" data-speak-text="Lehet, hogy holnap esik az eső." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Lehet, hogy holnap esik az eső.</button> <span style="color:#8a7a68">(Может быть, завтра пойдёт дождь)</span></p>
   <div class="note"><button class="speak-btn" data-speak-text="Nem, itt nem lehet dohányozni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem, itt nem lehet dohányozni.</button> показывает отрицание: <button class="speak-btn" data-speak-text="nem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nem</button> + lehet перед инфинитивом.</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 18 · 6/12 · TUD",
      title: "Tud",
      subtitle: "«Уметь», «мочь» — способность",
      body: `
   <p><span class="hu-word">tud</span> спрягается обычным образом (вспомните 4-й урок) и означает физическую или выученную способность:</p>
   <table class="conj">
     <tr><th>Кто</th><th>Форма</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="tudok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tudok</button></td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="tudsz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tudsz</button></td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="tud" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tud</button></td></tr>
   </table>
   <p><button class="speak-btn" data-speak-text="Tudok úszni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tudok úszni.</button> <span style="color:#8a7a68">(Я умею плавать)</span></p>
   <div class="warn">Не путайте с <button class="speak-btn" data-speak-text="Lehet itt dohányozni?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Lehet itt dohányozni?</button>-подобными фразами: <button class="speak-btn" data-speak-text="Lehet itt dohányozni?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Lehet itt dohányozni?</button> спрашивает о <b>разрешении</b> («можно ли?»), а <button class="speak-btn" data-speak-text="Tudok úszni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tudok úszni.</button> говорит о <b>способности</b> («умею ли я?») — это разные понятия, которые в русском иногда сливаются в одно «могу».</div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 18 · 7/12 · SZERETNE",
      title: "Szeretne",
      subtitle: "«Хотел(а) бы» — вежливое желание",
      body: `
   <p>Вы уже видели <button class="speak-btn" data-speak-text="szeretnék" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szeretnék</button> в 15-м уроке (ресторан). Это условная форма от <button class="speak-btn" data-speak-text="szeret" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szeret</button> (любить/хотеть) — целиком условное наклонение разберём в 23-м уроке, а этот один глагол стоит выучить уже сейчас, он крайне частый:</p>
   <table class="conj">
     <tr><th>Кто</th><th>Форма</th><th>Значение</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="szeretnék" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szeretnék</button></td><td>я хотел(а) бы</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="szeretnél" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szeretnél</button></td><td>ты хотел(а) бы</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="szeretne" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szeretne</button></td><td>он/она хотел(а) бы</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="szeretnénk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szeretnénk</button></td><td>мы хотели бы</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="szeretnétek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szeretnétek</button></td><td>вы хотели бы</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="szeretnének" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szeretnének</button></td><td>они хотели бы</td></tr>
   </table>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 18 · 8/12 · AKAR",
      title: "Akar",
      subtitle: "«Хочу» — прямое, менее вежливое желание",
      body: `
   <p><span class="hu-word">akar</span> тоже означает «хотеть», но звучит более прямо/категорично, чем вежливое <button class="speak-btn" data-speak-text="szeretnék" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szeretnék</button>:</p>
   <p><button class="speak-btn" data-speak-text="Enni akarok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Enni akarok.</button> <span style="color:#8a7a68">(Хочу есть)</span> — более прямолинейно, чем «szeretnék enni»</p>
   <div class="note">Для вежливой повседневной речи (заказ в кафе, просьбы) предпочтительнее <button class="speak-btn" data-speak-text="szeretnék" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szeretnék</button>-форма; <button class="speak-btn" data-speak-text="Enni akarok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Enni akarok.</button> уместнее среди близких друзей или в решительных заявлениях.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 18 · 9/12 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Планы на вечер",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Mit csinálsz ma este?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mit csinálsz ma este?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Szeretnék moziba menni, de dolgoznom kell még." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretnék moziba menni, de dolgoznom kell még.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Lehet, hogy én is tudok jönni később." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Lehet, hogy én is tudok jönni később.</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Az jó lenne, várlak!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Az jó lenne, várlak!</button></p>
   <div class="task">Задание 1. Найдите в диалоге все модальные глаголы и определите их тип (нужно/можно/умею/хочу).</div>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 18 · 10/12 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      body: `
   <ol class="tasklist">
     <li>Переведите: «Мне нужно работать» (двумя способами — с nekem и с личным окончанием инфинитива)</li>
     <li>Переведите: «Я умею готовить»</li>
     <li>Переведите: «Я хотел бы кофе, пожалуйста» (вежливая форма)</li>
     <li>Составьте вопрос с lehet о разрешении сделать что-либо</li>
     <li>Объясните разницу между tud и lehet на своём примере</li>
   </ol>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 18 · 11/12 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Что дальше",
      body: `
   <p>szeretne — лишь верхушка айсберга условного наклонения, которое мы полностью разберём в 23-м уроке. А в следующем, 19-м уроке — будущее время: как сказать «я буду делать» с помощью вспомогательного глагола „fog“.</p>
 `
    },
    {
      id: 12,
      eyebrow: "УРОК 18 · 12/12 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 18-го урока",
      body: `
   <ul class="tick">
     <li>Инфинитив: суффикс -ni, несколько неправильных форм (lenni, menni, enni, inni)</li>
     <li>kell — безличный, лицо через дательный падеж или личное окончание инфинитива</li>
     <li>lehet — разрешение/возможность</li>
     <li>tud — способность/умение, спрягается обычно</li>
     <li>szeretne — вежливое «хотел бы», akar — прямое «хочу»</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Напишите 6 предложений — по одному с каждым модальным словом (kell, lehet, tud, szeretne, akar) и с личным инфинитивом. В следующем уроке — будущее время.</div>
 `
    }
  ],
  vocabulary: [
    { id: "l18_v1", hu: "tanulni", ru: "учиться", category: "Инфинитив", exampleSentence: "Magyarul szeretnék tanulni.",
        ipa: "[tɒnˈulni]"
    },
    { id: "l18_v2", hu: "dolgozni", ru: "работать", category: "Инфинитив", exampleSentence: "Holnap dolgoznom kell.",
        ipa: "[dˈolgozni]"
    },
    { id: "l18_v3", hu: "írni", ru: "писать", category: "Инфинитив", exampleSentence: "Tollal akarok írni.",
        ipa: "[ˈiːrni]"
    },
    { id: "l18_v4", hu: "lenni", ru: "быть", category: "Инфинитив", exampleSentence: "Jó lenni itthon.",
        ipa: "[lˈɛnni]"
    },
    { id: "l18_v5", hu: "menni", ru: "идти", category: "Инфинитив", exampleSentence: "Mennem kell.",
        ipa: "[mˈɛnni]"
    },
    { id: "l18_v6", hu: "enni", ru: "есть", category: "Инфинитив", exampleSentence: "Szeretnék enni.",
        ipa: "[ˈɛnni]"
    },
    { id: "l18_v7", hu: "inni", ru: "пить", category: "Инфинитив", exampleSentence: "Vizet akarok inni.",
        ipa: "[ˈinni]"
    },
    { id: "l18_v8", hu: "úszni", ru: "плавать", category: "Инфинитив", exampleSentence: "Tudok úszni.",
        ipa: "[ˈuːʃni]"
    }
  ],
  quiz: [
    {
      id: 1801,
      question: 'Как образуется инфинитив от глагола "tanul" (учить)?',
      options: ['tanulni', 'tanulni', 'tanulni', 'tanulni'],
      correctIndex: 0,
      explanation: 'Инфинитив образуется прибавлением суффикса -ni: tanul + ni = tanulni (учить).'
    },
    {
      id: 1802,
      question: 'Как сказать «Мне нужно идти» по-венгерски (без использования "nekem")?',
      options: ['Menni kell', 'Mennem kell', 'Megyek kell', 'Mented kell'],
      correctIndex: 1,
      explanation: 'Лицо выражается личным окончанием на инфинитиве: menni + m = mennem (мне идти). Правильно: Mennem kell.'
    },
    {
      id: 1803,
      question: 'Какая разница между глаголами "tud" и "lehet" в венгерском языке?',
      options: [
        'tud – способность/умение, lehet – разрешение/возможность',
        'tud – будущее время, lehet – прошедшее',
        'Разницы нет, это синонимы',
        'lehet – только для людей, tud – для вещей'
      ],
      correctIndex: 0,
      explanation: 'Tud означает выученную способность или навык («уметь»): Tudok úszni. Lehet – физическую возможность или разрешение («можно»): Lehet itt dohányozni?'
    },
    {
      id: 1804,
      question: 'Какое слово выражает вежливую форму «я хотел бы» в ресторане или магазине?',
      options: ['akarok', 'szeretnék', 'kell', 'tudok'],
      correctIndex: 1,
      explanation: 'Szeretnék – это вежливая условная форма «я хотел бы». Используется в заказах и просьбах. Akarok – более прямое «я хочу».'
    },
    {
      id: 1805,
      question: 'Какой из этих глаголов требует инфинитив для выражения действия?',
      options: ['kell (нужно)', 'lehet (можно)', 'tud (уметь)', 'все перечисленные'],
      correctIndex: 3,
      explanation: 'Все три модальных глагола (kell, lehet, tud) требуют инфинитива для выражения действия: Mennem kell. (Мне нужно идти), Lehet itt dohányozni? (Можно здесь курить?), Tudok úszni. (Я умею плавать).'
    },
    {
      id: 1806,
      question: 'Как сказать «Я хочу есть» по-венгерски?',
      options: ['Enni akarok', 'Enni szeretnék', 'Ennem kell', 'Enni tudok'],
      correctIndex: 0,
      explanation: '«Я хочу есть» – Enni akarok. Akar – прямое «хочу». Szeretnék – более вежливое «хотел бы». Kell – «нужно», tud – «умею».'
    }
  ],
  objectives: [
    { id: 'l18_form-infinitive', text: 'Образовывать инфинитив глаголов с помощью -ni.', skills: ['grammar', 'writing'] },
    { id: 'l18_use-modal-verbs', text: 'Употреблять модальные глаголы kell, lehet, tud, szeretne, akar с инфинитивом.', skills: ['grammar', 'speaking', 'writing'] },
    { id: 'l18_express-necessity', text: 'Выражать необходимость (kell) и возможность (lehet, tud).', skills: ['speaking', 'writing'] },
    { id: 'l18_express-desire', text: 'Выражать желание и намерение (szeretne, akar).', skills: ['speaking', 'writing'] },
    { id: 'l18_understand-modals', text: 'Понимать конструкции с модальными глаголами на слух.', skills: ['listening'] },
  ],
};
