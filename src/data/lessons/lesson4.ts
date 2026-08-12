import { Lesson } from '../../types';

export const LESSON_4: Lesson = {
  id: 4,
  number: 4,
  level: 'A0',
  title: 'Урок 4 · Jelen idő',
  subtitle: 'Спряжение глаголов в настоящем времени',
  description: 'Неопределенное спряжение (alanyi ragozás), личные окончания (-ok/-ek/-ök, -sz, -unk/-ünk, -tok/-tek/-tök, -nak/-nek), шипящие основы и -ik глаголы.',
  slidesCount: 12,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 4 · 1/12 · НАСТОЯЩЕЕ ВРЕМЯ",
      title: "A jelen idő",
      subtitle: "Спряжение в настоящем времени — введение",
      body: `
   <p>Венгерский глагол имеет <b>две разные системы спряжения</b>, которые применяются в зависимости от того, является ли прямое дополнение определенным или нет:</p>
   <ul class="tick">
     <li><b>Неопределенное спряжение (alanyi ragozás)</b> — когда нет прямого дополнения, или оно неопределенное («Я читаю» / «Я читаю какую-то книгу»)</li>
     <li><b>Определенное спряжение (tárgyas ragozás)</b> — когда прямое дополнение конкретно/известно («Я читаю эту книгу»)</li>
   </ul>
   <p>В этом уроке мы пройдем только <b>неопределенное спряжение</b> (наиболее часто используемое для начинающих); к определенному спряжению мы обратимся в 13-м уроке.</p>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 4 · 2/12 · ОКОНЧАНИЯ",
      title: "Személyragok",
      subtitle: "Окончания неопределенного спряжения",
      body: `
   <table class="conj">
     <tr><th>Местоимение</th><th>Задние гласные</th><th>Передние неогубленные</th><th>Передние огубленные</th></tr>
     <tr><td>én</td><td>-ok</td><td>-ek</td><td>-ök</td></tr>
     <tr><td>te</td><td>-sz</td><td>-sz</td><td>-sz</td></tr>
     <tr><td>ő</td><td>—</td><td>—</td><td>—</td></tr>
     <tr><td>mi</td><td>-unk</td><td>-ünk</td><td>-ünk</td></tr>
     <tr><td>ti</td><td>-tok</td><td>-tek</td><td>-tök</td></tr>
     <tr><td>ők</td><td>-nak</td><td>-nek</td><td>-nek</td></tr>
   </table>
   <div class="note">Внимание: в 3-м лице (ő) <b>нет никакого окончания</b> — только сама основа глагола. <span class="hu-word">vár</span> = «он/она ждет». Это отличается от прошедшего времени, где ő имело «-t».</div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 4 · 3/12 · ПРИМЕР I.",
      title: "A vár ige",
      subtitle: "Спряжение — задние гласные (vár, ждать)",
      body: `
   <table class="conj">
     <tr><th>Местоимение</th><th>Форма</th><th>Значение</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="várok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várok</button></td><td>я жду</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="vársz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vársz</button></td><td>ты ждешь</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="vár" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vár</button></td><td>он/она ждет</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="várunk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várunk</button></td><td>мы ждем</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="vártok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártok</button></td><td>вы ждете</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="várnak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várnak</button></td><td>они ждут</td></tr>
   </table>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 4 · 4/12 · ПРИМЕР II.",
      title: "A kér ige",
      subtitle: "Спряжение — передние неогубленные гласные (kér, просить)",
      body: `
   <table class="conj">
     <tr><th>Местоимение</th><th>Форма</th><th>Значение</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="kérek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérek</button></td><td>я прошу</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="kérsz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérsz</button></td><td>ты просишь</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="kér" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kér</button></td><td>он/она просит</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="kérünk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérünk</button></td><td>мы просим</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="kértek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kértek</button></td><td>вы просите</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="kérnek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnek</button></td><td>они просят</td></tr>
   </table>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 4 · 5/12 · ПРИМЕР III.",
      title: "A köt ige",
      subtitle: "Спряжение — передние огубленные гласные (köt, вязать/связывать)",
      body: `
   <table class="conj">
     <tr><th>Местоимение</th><th>Форма</th><th>Значение</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="kötök" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kötök</button></td><td>я вяжу/связываю</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="kötsz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kötsz</button></td><td>ты вяжешь/связываешь</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="köt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> köt</button></td><td>он/она вяжет/связывает</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="kötünk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kötünk</button></td><td>мы вяжем/связываем</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="köttök" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> köttök</button></td><td>вы вяжете/связываете</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="kötnek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kötnek</button></td><td>они вяжут/связывают</td></tr>
   </table>
   <div class="note">Обратите внимание на форму «ti»: <span class="hu-word">köt</span> + <span class="hu-word">-tök</span> = <button class="speak-btn" data-speak-text="köttök" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> köttök</button> (двойная «t»). Когда основа глагола заканчивается на «t», а окончание начинается на «t», они сливаются в удвоенную согласную.</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 4 · 6/12 · ШИПЯЩИЕ/СВИСТЯЩИЕ ОСНОВЫ",
      title: "Sziszegő tövek",
      subtitle: "Когда -sz для «te» заменяется на -ol/-el/-öl",
      body: `
   <p>Если основа глагола заканчивается на шипящий/свистящий звук (<span class="hu-word">s, sz, z, dz</span>), то просто добавить -sz в форме «te» было бы трудно произнести (например, «olvassz»). Вместо этого используется <span class="hu-word">-ol / -el / -öl</span>.</p>
   <table class="conj">
     <tr><th>Глагол</th><th>Форма te</th><th>Значение</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="olvas" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> olvas</button></td><td><button class="speak-btn" data-speak-text="olvasol" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> olvasol</button></td><td>ты читаешь</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="mos" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mos</button></td><td><button class="speak-btn" data-speak-text="mosol" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mosol</button></td><td>ты моешь</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="néz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> néz</button></td><td><button class="speak-btn" data-speak-text="nézel" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nézel</button></td><td>ты смотришь</td></tr>
   </table>
   <div class="warn">Это частое исключение, встречающееся в большом количестве глаголов (olvas, néz, mos, öltözik...) — будьте внимательны при изучении новых глаголов.</div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 4 · 7/12 · ГЛАГОЛЫ НА -ik",
      title: "Ikes igék",
      subtitle: "Глаголы на «-ik» — частично неправильные, но очень частые",
      body: `
   <p>Есть глаголы, словарная форма которых (для ő) сама по себе заканчивается на <span class="hu-word">-ik</span> (dolgoz<b>ik</b>, lak<b>ik</b>, alsz<b>ik</b>). В форме «én» они часто принимают <span class="hu-word">-om/-em/-öm</span> (а не -ok/-ek/-ök).</p>
   <table class="conj">
     <tr><th>Местоимение</th><th>dolgozik (работать)</th><th>lakik (жить)</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="dolgozom" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgozom</button></td><td><button class="speak-btn" data-speak-text="lakom" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> lakom</button></td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="dolgozol" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgozol</button></td><td><button class="speak-btn" data-speak-text="laksz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> laksz</button></td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="dolgozik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgozik</button></td><td><button class="speak-btn" data-speak-text="lakik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> lakik</button></td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="dolgozunk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgozunk</button></td><td><button class="speak-btn" data-speak-text="lakunk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> lakunk</button></td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="dolgoztok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgoztok</button></td><td><button class="speak-btn" data-speak-text="laktok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> laktok</button></td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="dolgoznak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgoznak</button></td><td><button class="speak-btn" data-speak-text="laknak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> laknak</button></td></tr>
   </table>
   <div class="note">Эту группу также нужно изучать вместе со словарным запасом: видя в словаре глагол на -ik, не забывайте отдельно проверять его форму для «én».</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 4 · 8/12 · СЛОВАРНЫЙ ЗАПАС",
      title: "Gyakori igék",
      subtitle: "Часто используемые правильные глаголы",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanul</button> — учить/изучать</p>
       <p><button class="speak-btn" data-speak-text="ír" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ír</button> — писать</p>
       <p><button class="speak-btn" data-speak-text="beszél" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> beszél</button> — говорить</p>
       <p><button class="speak-btn" data-speak-text="él" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> él</button> — жить (в общем смысле)</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="szeret" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szeret</button> — любить</p>
       <p><button class="speak-btn" data-speak-text="ért" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ért</button> — понимать</p>
       <p><button class="speak-btn" data-speak-text="dolgozik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgozik</button> — работать (общ.)</p>
       <p><button class="speak-btn" data-speak-text="játszik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> játszik</button> — играть</p>
     </div>
   </div>
   <div class="task">Задание 1. Проспрягайте глагол <button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanul</button> (tanul) во всех 6 лицах самостоятельно, не заглядывая в таблицу.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 4 · 9/12 · ПРЕДЛОЖЕНИЕ",
      title: "Szórend",
      subtitle: "Порядок слов в простом предложении",
      body: `
   <p>«Нейтральный» порядок слов в венгерском языке — примерно Подлежащее–Сказуемое–Дополнение (как в русском), но элемент, на который обращается внимание (фокус), всегда ставится непосредственно перед глаголом.</p>
   <p><button class="speak-btn" data-speak-text="Magyarul tanulok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Magyarul tanulok.</button> <span style="color:#8a7a68">(Я изучаю венгерский язык)</span></p>
   <p><button class="speak-btn" data-speak-text="Minden nap magyarul tanulok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Minden nap magyarul tanulok.</button> <span style="color:#8a7a68">(Я изучаю венгерский каждый день — подчеркивается «каждый день»)</span></p>
   <div class="note">Сейчас достаточно запомнить основной порядок: Подлежащее–Глагол–Дополнение. К тонкостям фокуса мы вернемся в следующих уроках.</div>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 4 · 10/12 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Что ты делаешь?",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Szia! Mit csinálsz most?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia! Mit csinálsz most?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Szia! Magyarul tanulok, egy könyvet olvasok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia! Magyarul tanulok, egy könyvet olvasok.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Nehéz a könyv?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nehéz a könyv?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Nem túl nehéz, de sok új szót tanulok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem túl nehéz, de sok új szót tanulok.</button></p>
   <div class="task">Задание 2. Прочитайте диалог 2 раза, затем напишите свой собственный вариант, заменяя глаголы и действия.</div>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 4 · 11/12 · УПРАЖНЕНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверь себя",
      body: `
   <ol class="tasklist">
     <li>Проспрягайте глагол «szeret» (любить) во всех 6 лицах</li>
     <li>Какая форма правильная: «te olvassz» или «te olvasol»? Объясните почему</li>
     <li>Образуйте форму «én» от глагола «lakik»</li>
     <li>Переведите: «Мы каждый день учим венгерский»</li>
     <li>Выберите правильное окончание: «Mi ott __ (dolgoz-)»</li>
   </ol>
 `
    },
    {
      id: 12,
      eyebrow: "УРОК 4 · 12/12 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Краткое содержание 4-го урока",
      body: `
   <ul class="tick">
     <li>Окончания неопределенного спряжения: -ok/-ek/-ök, -sz, —, -unk/-ünk, -tok/-tek/-tök, -nak/-nek</li>
     <li>В 3-м лице (ő) нет никаких окончаний</li>
     <li>В основах на шипящие/свистящие -sz для «te» становится -ol/-el/-öl</li>
     <li>В глаголах на -ik форма «én» часто принимает -om/-em/-öm</li>
   </ul>
   <div class="note"><b>Домашнее задание:</b> выберите 5 новых глаголов, письменно проспрягайте каждый из них во всех 6 лицах. В следующем уроке мы перейдем к числам, времени и дням недели — вы научитесь говорить о том, когда вы что-либо делаете.</div>
 `
    }
  ]
};
