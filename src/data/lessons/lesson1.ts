import { Lesson } from '../../types';

export const LESSON_1: Lesson = {
  id: 1,
  number: 1,
  level: 'A0',
  title: 'Урок 1 · Üdvözöllek! Алфавит и базовые звуки',
  subtitle: 'Алфавит, особые согласные, долгие гласные, ударение',
  description: 'Введение в венгерский алфавит из 44 звуков, правила чтения, мягкие согласные (gy, ty, ny, ly), шипящие (s/sz) и золотое правило ударения.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 1 · 1/11 · ВВЕДЕНИЕ",
      title: "Üdvözöllek! Добро пожаловать",
      subtitle: "Как устроен этот курс",
      type: "intro",
      note: "Начнем с самого важного — со звуков. Без правильной базы произношения все последующие уроки будут даваться гораздо сложнее.",
      body: `
        <p>Этот курс представляет собой полный структурный путь из <strong>28 уроков</strong>: с нуля до уверенного разговорного венгерского языка (с понятными объяснениями на русском).</p>
        <div class="grid3 my-4">
          <div class="p-4 bg-[#7A1E2B]/5 border-l-4 border-[#7A1E2B] rounded-r-xl">
            <div class="font-bold text-[#57121C] text-sm font-mono mb-1">1. Теория</div>
            <div class="text-xs text-[#2A2320]/80">Правила, объясненные просто и без заумных терминов.</div>
          </div>
          <div class="p-4 bg-[#2C5F58]/5 border-l-4 border-[#2C5F58] rounded-r-xl">
            <div class="font-bold text-[#2C5F58] text-sm font-mono mb-1">2. Примеры с аудио</div>
            <div class="text-xs text-[#2A2320]/80">Реальные живые слова с носителем речи 🔊.</div>
          </div>
          <div class="p-4 bg-[#B98A2B]/10 border-l-4 border-[#B98A2B] rounded-r-xl">
            <div class="font-bold text-[#B98A2B] text-sm font-mono mb-1">3. Тренажёры</div>
            <div class="text-xs text-[#2A2320]/80">Задания и карточки для самопроверки в конце.</div>
          </div>
        </div>
      `
    },
    {
      id: 2,
      eyebrow: "УРОК 1 · 2/11 · АЛФАВИТ",
      title: "A magyar ábécé",
      subtitle: "Логика венгерского алфавита",
      type: "info",
      note: "Всего в венгерском языке 44 звука (гласные + согласные), тогда как в латинском алфавите всего 26 букв — именно поэтому необходимы сочетания букв и диакритические знаки (´, ˝).",
      body: `
        <p>Венгерский язык использует латинский алфавит, но многие звуки обозначаются <strong>сочетанием двух или трех букв</strong> (диграфы / триграфы) — как «sh» или «ch» в английском.</p>

        <div class="note"><b>Ключевой принцип чтения:</b> В венгерском языке написание и произношение <strong>почти всегда совпадают</strong> (в отличие от английского или французского). Одна буква (или устойчивое сочетание) = один звук. Как написано — так и читается!</div>

        <div class="grid2 my-3">
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="text-2xl font-bold font-mono text-[#7A1E2B]">44 звука</div>
            <div class="text-xs text-[#8A7A68] mt-1">Всего в венгерской фонетической системе</div>
          </div>
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="text-2xl font-bold font-mono text-[#2C5F58]">26 букв</div>
            <div class="text-xs text-[#8A7A68] mt-1">Стандартный латинский алфавит</div>
          </div>
        </div>
      `
    },
    {
      id: 3,
      eyebrow: "УРОК 1 · 3/11 · ГЛАСНЫЕ",
      title: "Rövid magánhangzók",
      subtitle: "Краткие гласные звуки",
      type: "vowels-short",
      warn: "«a» в венгерском — это НЕ русское «а», он более огубленный, ближе к «о». Нажмите и послушайте разницу несколько раз!",
      body: `
        <p>В венгерском 7 кратких гласных звуков. Каждый гласный четко артикулируется:</p>
        <table class="conj">
          <tr><th>Буква</th><th>Пример</th><th>Транскрипция</th><th>Перевод</th></tr>
          <tr><td><b style="color:#7A1E2B">a</b></td><td><button class="speak-btn" data-speak-text="alma"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> alma</button></td><td>[алма]</td><td>яблоко</td></tr>
          <tr><td><b style="color:#7A1E2B">e</b></td><td><button class="speak-btn" data-speak-text="ember"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ember</button></td><td>[эмбэр]</td><td>человек</td></tr>
          <tr><td><b style="color:#7A1E2B">i</b></td><td><button class="speak-btn" data-speak-text="itt"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> itt</button></td><td>[итт]</td><td>здесь</td></tr>
          <tr><td><b style="color:#7A1E2B">o</b></td><td><button class="speak-btn" data-speak-text="orvos"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> orvos</button></td><td>[орвош]</td><td>врач</td></tr>
          <tr><td><b style="color:#7A1E2B">ö</b></td><td><button class="speak-btn" data-speak-text="öt"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> öt</button></td><td>[ёт]</td><td>пять</td></tr>
          <tr><td><b style="color:#7A1E2B">u</b></td><td><button class="speak-btn" data-speak-text="utca"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> utca</button></td><td>[утца]</td><td>улица</td></tr>
          <tr><td><b style="color:#7A1E2B">ü</b></td><td><button class="speak-btn" data-speak-text="üveg"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> üveg</button></td><td>[ювэг]</td><td>стекло / бутылка</td></tr>
        </table>
      `
    },
    {
      id: 4,
      eyebrow: "УРОК 1 · 4/11 · ГЛАСНЫЕ",
      title: "Hosszú magánhangzók",
      subtitle: "Долгие гласные (со знаками ´ и ˝)",
      type: "vowels-long",
      task: "Задание 1: Нажмите на все слова по очереди и попытайтесь повторить их вслух, растягивая гласную немного больше, чем вам кажется естественным.",
      body: `
        <p>Каждый краткий гласный имеет свою <strong>долгую пару</strong>. На письме это обозначается штрихом <strong>(´)</strong> или двойным штрихом <strong>(˝)</strong>. Это полноценная другая буква с более долгой протяжностью!</p>

        <table class="conj">
          <tr><th>Буква</th><th>Слово</th><th>Произношение</th><th>Перевод</th></tr>
          <tr><td><b style="color:#7A1E2B">á</b></td><td><button class="speak-btn" data-speak-text="fát"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fát</button></td><td>[фа̄т]</td><td>дерево (вин.п.)</td></tr>
          <tr><td><b style="color:#7A1E2B">é</b></td><td><button class="speak-btn" data-speak-text="élet"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> élet</button></td><td>[э̄лэт]</td><td>жизнь</td></tr>
          <tr><td><b style="color:#7A1E2B">í</b></td><td><button class="speak-btn" data-speak-text="íz"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> íz</button></td><td>[ӣз]</td><td>вкус</td></tr>
          <tr><td><b style="color:#7A1E2B">ó</b></td><td><button class="speak-btn" data-speak-text="óra"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> óra</button></td><td>[о̄ра]</td><td>час / часы</td></tr>
          <tr><td><b style="color:#7A1E2B">ő</b></td><td><button class="speak-btn" data-speak-text="ő"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ő</button></td><td>[ё̄]</td><td>он / она</td></tr>
          <tr><td><b style="color:#7A1E2B">ú</b></td><td><button class="speak-btn" data-speak-text="út"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> út</button></td><td>[ӯт]</td><td>дорога / путь</td></tr>
          <tr><td><b style="color:#7A1E2B">ű</b></td><td><button class="speak-btn" data-speak-text="tűz"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tűz</button></td><td>[тӱ̄з]</td><td>огонь</td></tr>
        </table>
      `
    },
    {
      id: 5,
      eyebrow: "УРОК 1 · 5/11 · ОСОБЫЕ СОГЛАСНЫЕ",
      title: "Különleges mássalhangzók I.",
      subtitle: "gy, ty, ny, ly — «мягкие» согласные",
      type: "consonants-soft",
      note: "Эти 4 сочетания букв — самые частые среди «особых» звуков венгерского. Попытайтесь запомнить их как одну группу — «мягкие» согласные.",
      body: `
        <div class="grid2">
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold font-mono px-2.5 py-0.5 rounded-md bg-[#7A1E2B]/10 text-[#7A1E2B]">gy</span>
              <button class="speak-btn" data-speak-text="gyerek"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> gyerek</button>
            </div>
            <div class="text-xs text-[#8A7A68] font-mono mt-1">gyerek [дьэрэк] — <b>ребёнок</b></div>
            <div class="text-xs text-[#2A2320]/80 mt-2 border-t border-[#D9CBB0]/40 pt-1">Смягчённый «д», произносится касанием нёба (русское «дь»)</div>
          </div>
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold font-mono px-2.5 py-0.5 rounded-md bg-[#7A1E2B]/10 text-[#7A1E2B]">ty</span>
              <button class="speak-btn" data-speak-text="kutya"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kutya</button>
            </div>
            <div class="text-xs text-[#8A7A68] font-mono mt-1">kutya [кутя] — <b>собака</b></div>
            <div class="text-xs text-[#2A2320]/80 mt-2 border-t border-[#D9CBB0]/40 pt-1">Глухая пара «gy», как русское «ть» (в слове «тьма»)</div>
          </div>
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold font-mono px-2.5 py-0.5 rounded-md bg-[#7A1E2B]/10 text-[#7A1E2B]">ny</span>
              <button class="speak-btn" data-speak-text="anya"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> anya</button>
            </div>
            <div class="text-xs text-[#8A7A68] font-mono mt-1">anya [аня] — <b>мать</b></div>
            <div class="text-xs text-[#2A2320]/80 mt-2 border-t border-[#D9CBB0]/40 pt-1">Мягкий вариант «н», как русское «нь» (в слове «няня»)</div>
          </div>
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold font-mono px-2.5 py-0.5 rounded-md bg-[#7A1E2B]/10 text-[#7A1E2B]">ly</span>
              <button class="speak-btn" data-speak-text="hely"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hely</button>
            </div>
            <div class="text-xs text-[#8A7A68] font-mono mt-1">hely [хэй] — <b>место</b></div>
            <div class="text-xs text-[#2A2320]/80 mt-2 border-t border-[#D9CBB0]/40 pt-1"><b>ВАЖНО:</b> в современном языке «ly» читается ровно как «й» (как «j»)!</div>
          </div>
        </div>
      `
    },
    {
      id: 6,
      eyebrow: "УРОК 1 · 6/11 · ОСОБЫЕ СОГЛАСНЫЕ",
      title: "Különleges mássalhangzók II.",
      subtitle: "s, sz, zs, cs — свистящие и шипящие звуки",
      type: "consonants-sibilants",
      warn: "Самая главная ловушка: «s» и «sz» в венгерском имеют ПРОТИВОПОЛОЖНОЕ значение тому, что ожидается интуитивно!",
      task: "Задание 2: Повторите вслух 5 раз: «sok — szép — zsír — csók» — пока ваши уши и язык не привыкнут ассоциировать «s» с «ш».",
      body: `
        <table class="conj">
          <tr><th>Буква / Диграф</th><th>Звук</th><th>Пример</th><th>Перевод</th></tr>
          <tr><td><b style="color:#7A1E2B">s</b></td><td><b style="color:#2C5F58">«ш»</b></td><td><button class="speak-btn" data-speak-text="sok"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> sok</button></td><td>много [шок]</td></tr>
          <tr><td><b style="color:#7A1E2B">sz</b></td><td><b style="color:#2C5F58">«с»</b></td><td><button class="speak-btn" data-speak-text="szép"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szép</button></td><td>красивый [сэ̄п]</td></tr>
          <tr><td><b style="color:#7A1E2B">zs</b></td><td><b style="color:#2C5F58">«ж»</b></td><td><button class="speak-btn" data-speak-text="zsír"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> zsír</button></td><td>жир [жӣр]</td></tr>
          <tr><td><b style="color:#7A1E2B">cs</b></td><td><b style="color:#2C5F58">«ч»</b></td><td><button class="speak-btn" data-speak-text="csók"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> csók</button></td><td>поцелуй [чо̄к]</td></tr>
          <tr><td><b style="color:#7A1E2B">dzs</b></td><td><b style="color:#2C5F58">«дж»</b></td><td><button class="speak-btn" data-speak-text="dzsungel"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dzsungel</button></td><td>джунгли [джунгэл]</td></tr>
        </table>
      `
    },
    {
      id: 7,
      eyebrow: "УРОК 1 · 7/11 · ДОЛГИЕ СОГЛАСНЫЕ",
      title: "Hosszú mássalhangzók",
      subtitle: "Двойная буква = долгий звук",
      type: "consonants-double",
      note: "В случае буквосочетаний (напр. «ssz», «ccs») удваивается только первая буква: «ssz» = долгая версия «sz», а не «s» + «sz».",
      body: `
        <p>Как и гласные, согласные звуки в венгерском могут быть <strong>долгими</strong>. На письме долгий звук обозначается удвоением буквы:</p>

        <div class="grid2 my-3">
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="text-xs font-mono font-bold text-[#8A7A68] uppercase mb-2">Пример 1: t ↔ tt</div>
            <div class="flex items-center justify-between">
              <div>
                <button class="speak-btn" data-speak-text="üt"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> üt</button>
                <div class="text-xs text-[#8A7A68] mt-1">бить (краткий t)</div>
              </div>
              <span class="text-lg font-bold text-[#7A1E2B]">↔</span>
              <div>
                <button class="speak-btn" data-speak-text="ütött"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ütött</button>
                <div class="text-xs text-[#8A7A68] mt-1">ударил (долгий tt)</div>
              </div>
            </div>
          </div>

          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="text-xs font-mono font-bold text-[#8A7A68] uppercase mb-2">Пример 2: l ↔ ll</div>
            <div class="flex items-center justify-between">
              <div>
                <button class="speak-btn" data-speak-text="tol"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tol</button>
                <div class="text-xs text-[#8A7A68] mt-1">толкать (краткий l)</div>
              </div>
              <span class="text-lg font-bold text-[#7A1E2B]">↔</span>
              <div>
                <button class="speak-btn" data-speak-text="toll"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> toll</button>
                <div class="text-xs text-[#8A7A68] mt-1">ручка / перо (долгий ll)</div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 8,
      eyebrow: "УРОК 1 · 8/11 · УДАРЕНИЕ",
      title: "Hangsúly",
      subtitle: "Золотое правило венгерского ударения",
      type: "stress",
      note: "Даже в самых длинных венгерских словах из 20+ букв ударение не смещается — оно неизменно остается на первом слоге!",
      body: `
        <div class="p-5 bg-white border border-[#D9CBB0] rounded-xl space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-[#7A1E2B] text-white flex items-center justify-center font-bold font-mono text-lg shrink-0">1st</div>
            <div>
              <h4 class="font-bold text-[#57121C] text-lg">Главное правило ударения</h4>
              <p class="text-sm text-[#2A2320]/80">Ударение в венгерском языке ВСЕГДА и БЕЗ ИСКЛЮЧЕНИЙ падает на <strong>первый слог</strong>.</p>
            </div>
          </div>

          <div class="grid2 pt-2">
            <div class="p-3.5 rounded-lg bg-[#F6EFE4] border border-[#D9CBB0] flex items-center justify-between">
              <div>
                <div class="font-bold font-mono text-[#7A1E2B] text-base"><u class="decoration-2 underline-offset-4">Bu</u>dapest</div>
                <div class="text-xs text-[#8A7A68]">Ударение на [Bu]</div>
              </div>
              <button class="speak-btn" data-speak-text="Budapest"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Budapest</button>
            </div>

            <div class="p-3.5 rounded-lg bg-[#F6EFE4] border border-[#D9CBB0] flex items-center justify-between">
              <div>
                <div class="font-bold font-mono text-[#7A1E2B] text-base"><u class="decoration-2 underline-offset-4">Ma</u>gyar</div>
                <div class="text-xs text-[#8A7A68]">Ударение на [Ma]</div>
              </div>
              <button class="speak-btn" data-speak-text="magyar"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> magyar</button>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 9,
      eyebrow: "УРОК 1 · 9/11 · ТРЕНАЖЁР СЛОВ",
      title: "Első szavak",
      subtitle: "Первые 10 слов для идеального произношения",
      type: "words-practice",
      task: "Задание 3: Прослушайте каждое слово, затем закройте перевод кнопкой «Скрыть переводы» и проверьте себя."
    },
    {
      id: 10,
      eyebrow: "УРОК 1 · 10/11 · ЧТЕНИЕ ФРАЗЫ",
      title: "Mondatolvasás",
      subtitle: "Чтение и запись целого предложения",
      type: "sentence-reading",
      task: "Задание 4: Включите микрофон, прочитайте фразу вслух и прослушайте свою запись для сравнения с диктором.",
      body: `
        <div class="p-5 rounded-xl bg-white border border-[#D9CBB0] space-y-3">
          <div class="text-xs font-mono text-[#8A7A68] font-semibold uppercase">Практика чтения с аудированием</div>
          <div class="text-lg md:text-xl font-mono font-bold text-[#57121C] leading-snug">Budapesten élek, és nagyon szeretek magyarul tanulni.</div>
          <div class="text-sm text-[#2C5F58] font-sans font-medium">(Я живу в Будапеште, и мне очень нравится учить венгерский)</div>
          <div class="pt-2">
            <button class="speak-btn" data-speak-text="Budapesten élek, és nagyon szeretek magyarul tanulni."><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Послушать диктора 🔊</button>
          </div>
        </div>
      `
    },
    {
      id: 11,
      eyebrow: "УРОК 1 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Краткое содержание Урока 1",
      type: "summary",
      note: "Поздравляем с прохождением первого урока! Теперь вы знаете все ключевые законы чтения венгерского языка.",
      body: `
        <p><b>Главные выводы Урока 1:</b></p>
        <ul class="tick">
          <li>В венгерском языке как написано — так и читается (1 буква/сочетание = 1 звук).</li>
          <li><b>s = [ш]</b>, а <b>sz = [с]</b> — важнейшая ловушка для новичков.</li>
          <li><b>gy, ty, ny, ly</b> — группа «мягких» согласных (причём ly = j = [й]).</li>
          <li>Долгота гласных (´, ˝) и согласных (двойные) меняет смысл слова.</li>
          <li>Ударение в слове ВСЕГДА падает на самый первый слог.</li>
        </ul>
      `
    }
  ]
};

