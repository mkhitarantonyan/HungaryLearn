import { Lesson } from '../../types';

export const LESSON_17: Lesson = {
  id: 17,
  number: 17,
  level: 'A2',
  title: 'Урок 17 · Időjárás és évszakok',
  subtitle: 'Погода и времена года',
  description: 'Описание погоды (Süt a nap, esik az eső), температура (Hány fok van?), времена года и их особые суффиксы (tavasszal, nyáron, ősszel, télen), части дня.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 17 · 1/11 · ПОГОДА",
      title: "Milyen az idő?",
      subtitle: "Как описать погоду",
      body: `
   <p>Слово <span class="hu-word">idő</span> означает и «время», и «погода» — смысл понятен из контекста. Погодные явления часто описываются безличными глаголами (без подлежащего, как русское «идёт дождь»):</p>
   <table class="conj">
     <tr><th>Хунгаререн</th><th>Значение</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="Süt a nap." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Süt a nap.</button></td><td>Светит солнце</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="Esik az eső." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Esik az eső.</button></td><td>Идёт дождь</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="Fúj a szél." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Fúj a szél.</button></td><td>Дует ветер</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="Havazik." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Havazik.</button></td><td>Идёт снег</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="Felhős az ég." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Felhős az ég.</button></td><td>Облачно/пасмурно</td></tr>
   </table>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 17 · 2/11 · ТЕМПЕРАТУРА",
      title: "Hány fok van?",
      subtitle: "Спрашиваем и называем температуру",
      body: `
   <p><button class="speak-btn" data-speak-text="Hány fok van?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Hány fok van?</button> <span style="color:#8a7a68">(Сколько градусов?)</span></p>
   <p><button class="speak-btn" data-speak-text="Húsz fok van." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Húsz fok van.</button> <span style="color:#8a7a68">(Двадцать градусов)</span></p>
   <p><button class="speak-btn" data-speak-text="Meleg van." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Meleg van.</button> <span style="color:#8a7a68">(Тепло)</span></p>
   <p><button class="speak-btn" data-speak-text="Hideg van." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Hideg van.</button> <span style="color:#8a7a68">(Холодно)</span></p>
   <div class="note">Как и с прилагательными-сказуемыми (9-й урок), тут „van“ снова опускается: не „meleg van van“, а просто <button class="speak-btn" data-speak-text="Meleg van." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Meleg van.</button>.</div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 17 · 3/11 · ВРЕМЕНА ГОДА",
      title: "Évszakok",
      subtitle: "Времена года",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="tavasz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tavasz</button> — весна</p>
       <p><button class="speak-btn" data-speak-text="nyár" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nyár</button> — лето</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="ősz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ősz</button> — осень</p>
       <p><button class="speak-btn" data-speak-text="tél" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tél</button> — зима</p>
     </div>
   </div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 17 · 4/11 · «ВЕСНОЙ, ЛЕТОМ...»",
      title: "Évszakok határozói alakja",
      subtitle: "Особый набор форм — нужно просто запомнить",
      body: `
   <p>Формы «весной», «летом», «осенью», «зимой» в венгерском — исключение: каждое время года использует <b>свой собственный</b> суффикс, без единой логики между ними. Это классический набор, который заучивают целиком.</p>
   <table class="conj">
     <tr><th>Время года</th><th>Форма «...-ой/-ю»</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="tavasz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tavasz</button></td><td><button class="speak-btn" data-speak-text="tavasszal" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tavasszal</button> <span class="pron">(суффикс -val, с ассимиляцией!)</span></td></tr>
     <tr><td><button class="speak-btn" data-speak-text="nyár" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nyár</button></td><td><button class="speak-btn" data-speak-text="nyáron" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nyáron</button> <span class="pron">(суффикс -on, как исключение из 11-го урока)</span></td></tr>
     <tr><td><button class="speak-btn" data-speak-text="ősz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ősz</button></td><td><button class="speak-btn" data-speak-text="ősszel" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ősszel</button> <span class="pron">(суффикс -vel, с ассимиляцией!)</span></td></tr>
     <tr><td><button class="speak-btn" data-speak-text="tél" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tél</button></td><td><button class="speak-btn" data-speak-text="télen" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> télen</button> <span class="pron">(суффикс -en)</span></td></tr>
   </table>
   <div class="warn">Заметьте: <button class="speak-btn" data-speak-text="tavasszal" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tavasszal</button> и <button class="speak-btn" data-speak-text="ősszel" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ősszel</button> используют творительный падеж из 16-го урока (с ассимиляцией v→sz/ssz!), а <button class="speak-btn" data-speak-text="nyáron" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nyáron</button> и <button class="speak-btn" data-speak-text="télen" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> télen</button> — падеж «на поверхности» из 11-го урока. Такое смешение суффиксов в одной смысловой группе — не редкость в венгерском, это нужно просто выучить как есть.</div>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 17 · 5/11 · ЧАСТИ ДНЯ",
      title: "A nap részei",
      subtitle: "Утро, день, вечер, ночь",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="reggel" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> reggel</button> — утро</p>
       <p><button class="speak-btn" data-speak-text="délelőtt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> délelőtt</button> — первая половина дня</p>
       <p><button class="speak-btn" data-speak-text="dél" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dél</button> — полдень</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="délután" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> délután</button> — вторая половина дня</p>
       <p><button class="speak-btn" data-speak-text="este" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> este</button> — вечер</p>
       <p><button class="speak-btn" data-speak-text="éjjel" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> éjjel</button> — ночь</p>
     </div>
   </div>
   <div class="note">Эти слова уже сами по себе функционируют как наречия времени, без дополнительного суффикса: <button class="speak-btn" data-speak-text="reggel" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> reggel</button> = «утром» (а не «утро»).</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 17 · 6/11 · ПРЕДЛОЖЕНИЯ",
      title: "Gyakorló mondatok",
      subtitle: "Практика",
      body: `
   <p><button class="speak-btn" data-speak-text="Nyáron meleg van, télen pedig hideg." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nyáron meleg van, télen pedig hideg.</button> <span style="color:#8a7a68">(Летом жарко, а зимой холодно)</span></p>
   <p><button class="speak-btn" data-speak-text="Tavasszal gyakran esik az eső." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tavasszal gyakran esik az eső.</button> <span style="color:#8a7a68">(Весной часто идёт дождь)</span></p>
   <p><button class="speak-btn" data-speak-text="Ma reggel sütött a nap, most pedig felhős az ég." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Ma reggel sütött a nap, most pedig felhős az ég.</button> <span style="color:#8a7a68">(Сегодня утром светило солнце, а сейчас облачно)</span></p>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 17 · 7/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Разговор о погоде",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Milyen ma az idő?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Milyen ma az idő?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Nagyon szép, süt a nap és meleg van." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nagyon szép, süt a nap és meleg van.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Szerinted holnap is ilyen lesz?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szerinted holnap is ilyen lesz?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Nem hiszem, esőt mondtak a híradóban." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem hiszem, esőt mondtak a híradóban.</button></p>
   <div class="task">Задание 1. Прочитайте диалог вслух, затем опишите сегодняшнюю реальную погоду по-венгерски.</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 17 · 8/11 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      body: `
   <ol class="tasklist">
     <li>Опишите погоду за окном сейчас — минимум 2 предложения</li>
     <li>Назовите все 4 времени года и их особые наречные формы, без подсказки</li>
     <li>Переведите: «Зимой идёт снег, а летом светит солнце»</li>
     <li>Спросите «Сколько градусов?» и ответьте любым числом</li>
     <li>Составьте предложение с частью дня (утро/вечер) и погодным явлением</li>
   </ol>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 17 · 9/11 · РАСШИРЕННЫЙ СЛОВАРЬ",
      title: "Kiegészítő szókincs",
      subtitle: "Ещё погодные слова",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="vihar" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vihar</button> — гроза</p>
       <p><button class="speak-btn" data-speak-text="köd" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> köd</button> — туман</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="szivárvány" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szivárvány</button> — радуга</p>
       <p><button class="speak-btn" data-speak-text="hőség" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hőség</button> — жара</p>
     </div>
   </div>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 17 · 10/11 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Что дальше",
      body: `
   <p>В следующем уроке — модальные глаголы: kell (нужно), lehet (можно), tud (уметь), szeretne (хотел бы). Эти слова понадобятся вам практически в каждом разговоре — от «мне нужно идти» до «я хотел бы попробовать».</p>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 17 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 17-го урока",
      body: `
   <ul class="tick">
     <li>Погодные явления — безличные глаголы (süt a nap, esik az eső...)</li>
     <li>Температура и «тепло/холодно» — без van, как прилагательные-сказуемые</li>
     <li>Времена года «в форме наречия» — особый, нерегулярный набор суффиксов, заучивается целиком</li>
     <li>Части дня (reggel, este...) сами по себе служат наречиями времени</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Опишите погоду в каждом из 4 времён года в вашем родном городе — минимум по 1 предложению на сезон.</div>
 `
    }
  ],
  vocabulary: [
    { id: "l17_v1", hu: "tavasz", ru: "весна", category: "Времена года", exampleSentence: "Tavasszal nyílnak a virágok." },
    { id: "l17_v2", hu: "nyár", ru: "лето", category: "Времена года", exampleSentence: "Nyáron meleg van." },
    { id: "l17_v3", hu: "ősz", ru: "осень", category: "Времена года", exampleSentence: "Ősszel esik az eső." },
    { id: "l17_v4", hu: "tél", ru: "зима", category: "Времена года", exampleSentence: "Télen hideg van." },
    { id: "l17_v5", hu: "vihar", ru: "гроза", category: "Погода", exampleSentence: "Nagy vihar van." },
    { id: "l17_v6", hu: "köd", ru: "туман", category: "Погода", exampleSentence: "Sűrű köd van." },
    { id: "l17_v7", hu: "szivárvány", ru: "радуга", category: "Погода", exampleSentence: "Szép szivárvány." },
    { id: "l17_v8", hu: "hőség", ru: "жара", category: "Погода", exampleSentence: "Nagy hőség van nyáron." }
  ],
  quiz: [
    {
      id: 1701,
      question: "Как по-венгерски сказать «Светит солнце»?",
      options: ["Süt a nap", "Esik a nap", "Fúj a nap", "Meleg a nap"],
      correctIndex: 0,
      explanation: "«Süt a nap» переводится как «Светит солнце»."
    },
    {
      id: 1702,
      question: "Как образуется форма «летом»?",
      options: ["nyárval", "nyáron", "nyárban", "nyáral"],
      correctIndex: 1,
      explanation: "Форма «летом» в венгерском языке образуется с помощью суффикса -on: nyáron."
    },
    {
      id: 1703,
      question: "Как переводится форма «весной»?",
      options: ["tavaszon", "tavaszban", "tavasszal", "tavaszra"],
      correctIndex: 2,
      explanation: "«Весной» в венгерском языке — tavasszal (с суффиксом -val и ассимиляцией)."
    },
    {
      id: 1704,
      question: "Как переводится вопрос «Hány fok van?»?",
      options: ["Сколько времени?", "Какая погода?", "Сколько градусов?", "Который час?"],
      correctIndex: 2,
      explanation: "«Hány fok van?» переводится как «Сколько градусов?»."
    }
  ]
};
