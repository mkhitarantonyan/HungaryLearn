import { Lesson } from '../../types';

export const LESSON_8_3: Lesson = { // wait, exported as LESSON_10
  id: 10,
  number: 10,
  level: 'A1',
  title: 'Урок 10 · Helyhatározók I',
  subtitle: 'Местные падежи I — система трёх измерений и Belső csoport (-ban/-ben, -ba/-be, -ból/-ből)',
  description: 'Фундаментальная система трёх измерений (Где?, Куда?, Откуда?) и группа "Внутри" (-ban/-ben, -ba/-be, -ból/-ből). Правило гармонии гласных.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 10 · 1/11 · КОНЦЕПЦИЯ",
      title: "A 3D helyhatározó rendszer",
      subtitle: "Система 3 измерений пространственных падежей",
      body: `
   <p>Это одна из самых красивых и логичных систем венгерского языка. Для любого места венгерский строго различает <b>ТРИ направления движения</b>:</p>
   <div class="grid3">
     <div style="background:#f5eee6; padding:12px; border-radius:8px; text-align:center;">
       <b>1. ГДЕ?</b><br><span style="color:#8a7a68">(Hol?)</span><br>Покой / внутри
     </div>
     <div style="background:#f5eee6; padding:12px; border-radius:8px; text-align:center;">
       <b>2. КУДА?</b><br><span style="color:#8a7a68">(Hova?)</span><br>Движение внутрь
     </div>
     <div style="background:#f5eee6; padding:12px; border-radius:8px; text-align:center;">
       <b>3. ОТКУДА?</b><br><span style="color:#8a7a68">(Honnan?)</span><br>Движение наружу
     </div>
   </div>
   <div class="note">Эта трехмерная логика «Где – Куда – Откуда» применяется одинаково к 3 типам пространств: «Внутри», «На поверхности» и «Около/рядом». В этом уроке разбираем группу «Внутри».</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 10 · 2/11 · ВНУТРИ",
      title: "Belső csoport: Hol?",
      subtitle: "Внутри (Где?) — суффикс -ban / -ben",
      body: `
   <p>Отвечает на вопрос <b>Hol?</b> (Где?) — когда объект находится внутри закрытого пространства, помещения, здания или страны.</p>
   <ul class="tick">
     <li><b>-ban</b> (для слов с гласными заднего ряда a/o/u): <button class="speak-btn" data-speak-text="házban" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> házban</button> <span style="color:#8a7a68">(в доме)</span>, <button class="speak-btn" data-speak-text="szobában" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szobában</button> <span style="color:#8a7a68">(в комнате)</span></li>
     <li><b>-ben</b> (для слов с гласными переднего ряда e/i/ö/ü): <button class="speak-btn" data-speak-text="kertben" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kertben</button> <span style="color:#8a7a68">(в саду)</span>, <button class="speak-btn" data-speak-text="épületben" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> épületben</button> <span style="color:#8a7a68">(в здании)</span></li>
   </ul>
   <p><button class="speak-btn" data-speak-text="Péter a szobában van." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Péter a szobában van.</button> <span style="color:#8a7a68">(Петер в комнате)</span></p>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 10 · 3/11 · ВНУТРЬ",
      title: "Belső csoport: Hova?",
      subtitle: "Внутрь (Куда?) — суффикс -ba / -be",
      body: `
   <p>Отвечает на вопрос <b>Hova?</b> (Куда?) — движение внутрь пространства.</p>
   <ul class="tick">
     <li><b>-ba</b> (задний ряд): <button class="speak-btn" data-speak-text="házba" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> házba</button> <span style="color:#8a7a68">(в дом — движение)</span>, <button class="speak-btn" data-speak-text="szobába" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szobába</button> <span style="color:#8a7a68">(в комнату)</span></li>
     <li><b>-be</b> (передний ряд): <button class="speak-btn" data-speak-text="kertbe" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kertbe</button> <span style="color:#8a7a68">(в сад — движение)</span>, <button class="speak-btn" data-speak-text="épületbe" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> épületbe</button> <span style="color:#8a7a68">(в здание)</span></li>
   </ul>
   <p><button class="speak-btn" data-speak-text="Péter bemegy a szobába." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Péter bemegy a szobába.</button> <span style="color:#8a7a68">(Петер заходит в комнату)</span></p>
   <div class="note">Обратите внимание: глагол <button class="speak-btn" data-speak-text="bemegy" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> bemegy</button> содержит приставку be- (внутрь), которая совпадает по смыслу с суффиксом -ba/-be. В венгерском такое «двойное» подчёркивание норма.</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 10 · 4/11 · ИЗНУТРИ",
      title: "Belső csoport: Honnan?",
      subtitle: "Изнутри (Откуда?) — суффикс -ból / -ből",
      body: `
   <p>Отвечает на вопрос <b>Honnan?</b> (Откуда?) — движение наружу изнутри пространства.</p>
   <ul class="tick">
     <li><b>-ból</b> (задний ряд): <button class="speak-btn" data-speak-text="házból" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> házból</button> <span style="color:#8a7a68">(из дома)</span>, <button class="speak-btn" data-speak-text="szobából" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szobából</button> <span style="color:#8a7a68">(из комнаты)</span></li>
     <li><b>-ből</b> (передний ряд): <button class="speak-btn" data-speak-text="kertből" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kertből</button> <span style="color:#8a7a68">(из сада)</span>, <button class="speak-btn" data-speak-text="épületből" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> épületből</button> <span style="color:#8a7a68">(из здания)</span></li>
   </ul>
   <p><button class="speak-btn" data-speak-text="Péter kijön a szobából." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Péter kijön a szobából.</button> <span style="color:#8a7a68">(Петер выходит из комнаты)</span></p>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 10 · 5/11 · СВОДНАЯ ТАБЛИЦА",
      title: "Belső csoport — Összefoglalás",
      subtitle: "Вся группа «Внутри» в одной таблице",
      body: `
   <table class="conj">
     <tr><th>Направление</th><th>Вопрос</th><th>Суффиксы</th><th>Пример (ház)</th><th>Пример (kert)</th></tr>
     <tr><td>Где? (покой)</td><td>Hol?</td><td>-ban / -ben</td><td><button class="speak-btn" data-speak-text="házban" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> házban</button></td><td><button class="speak-btn" data-speak-text="kertben" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kertben</button></td></tr>
     <tr><td>Куда? (внутрь)</td><td>Hova?</td><td>-ba / -be</td><td><button class="speak-btn" data-speak-text="házba" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> házba</button></td><td><button class="speak-btn" data-speak-text="kertbe" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kertbe</button></td></tr>
     <tr><td>Откуда? (наружу)</td><td>Honnan?</td><td>-ból / -ből</td><td><button class="speak-btn" data-speak-text="házból" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> házból</button></td><td><button class="speak-btn" data-speak-text="kertből" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kertből</button></td></tr>
   </table>
   <div class="note">Взгляните на эту гладкую внутреннюю стройность: все 3 пары отличаются лишь гласной (-a/-e, -á/-é, -ó/-ő), но сохраняют общие согласные b-!</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 10 · 6/11 · ГОРОДА И СТРАНЫ",
      title: "Városok és országok",
      subtitle: "Как использовать местный падеж с названиями географических объектов",
      body: `
   <p>Для большинства зарубежных стран и многих городов используется именно внутренняя группа (-ban/-ben):</p>
   <p><button class="speak-btn" data-speak-text="Németországban élek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Németországban élek.</button> <span style="color:#8a7a68">(Я живу в Германии)</span></p>
   <p><button class="speak-btn" data-speak-text="Örményországból jöttem." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Örményországból jöttem.</button> <span style="color:#8a7a68">(Я приехал из Армении)</span></p>
   <p><button class="speak-btn" data-speak-text="Berlinbe utazom." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Berlinbe utazom.</button> <span style="color:#8a7a68">(Я еду в Берлин)</span></p>
   <div class="warn">Исключение: для самого Венгрии (Magyarország) и большинства венгерских городов используется ДРУГАЯ группа — «на поверхности» (-n/-on/-en/-ön), которую мы разберём в 11-м уроке!</div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 10 · 7/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Где ты сейчас?",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Szia! Hol vagy most?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia! Hol vagy most?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Szia! A házban vagyok, a szobámban. És te?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia! A házban vagyok, a szobámban. És te?</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Én most megyek a boltba. Кérsz valamit?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Én most megyek a boltba. Кérsz valamit?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Egy kávét, kérlek! Utána kijössz a kertbe?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Egy kávét, kérlek! Utána kijössz a kertbe?</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Igen, fél óra múlva ott vagyok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Igen, fél óra múlva ott vagyok.</button></p>
   <div class="task">Задание 1. Прочитайте диалог вслух и найдите все суффиксы группы «Внутри».</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 10 · 8/11 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      body: `
   <ol class="tasklist">
     <li>Образуйте формы Hol? (где?), Hova? (куда?) и Honnan? (откуда?) для слова „szoba“</li>
     <li>То же самое для слова „épület“ (здание)</li>
     <li>Переведите: «Я иду в магазин» (bolt)</li>
     <li>Переведите: «Он выходит из дома»</li>
     <li>Скажите, из какой вы страны (используя -ból/-ből)</li>
   </ol>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 10 · 9/11 · РАСШИРЕННЫЙ СЛОВАРЬ",
      title: "Kiegészítő szókincs",
      subtitle: "Здания и помещения",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="bolt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> bolt</button> — магазин</p>
       <p><button class="speak-btn" data-speak-text="iskola" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> iskola</button> — школа</p>
       <p><button class="speak-btn" data-speak-text="kórház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kórház</button> — больница</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="étterem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> étterem</button> — ресторан</p>
       <p><button class="speak-btn" data-speak-text="mozi" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mozi</button> — кинотеатр</p>
       <p><button class="speak-btn" data-speak-text="iroda" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> iroda</button> — офис</p>
     </div>
   </div>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 10 · 10/11 · ВАЖНОЕ ПРИМЕЧАНИЕ",
      title: "Gyakori hiba",
      subtitle: "Частая ошибка изучающих",
      body: `
   <p>Многие путают <b>Hol?</b> (где?) и <b>Hova?</b> (куда?). Помните:</p>
   <ul class="tick">
     <li>Если в предложении есть глагол движения (megy, jön, utazik) — нужен суффикс направления <b>-ba/-be</b>!</li>
     <li>Если действия нет, а есть покой (van, él, lakik, dolgozik) — нужен суффикс покоя <b>-ban/-ben</b>!</li>
   </ul>
   <div class="warn">Неверно: <i>*Megyek a boltban.</i> — Правильно: <button class="speak-btn" data-speak-text="Megyek a boltba." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Megyek a boltba.</button></div>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 10 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 10-го урока",
      body: `
   <ul class="tick">
     <li>Трехмерность местных падежей: Hol? (покой) / Hova? (внутрь) / Honnan? (наружу)</li>
     <li>Группа «Внутри»: <b>-ban/-ben</b>, <b>-ba/-be</b>, <b>-ból/-ből</b></li>
     <li>Следим за гармонией гласных (a/o/u vs e/i/ö/ü)</li>
     <li>Различаем глаголы движения (-ba/-be) и покоя (-ban/-ben)</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Опишите свой маршрут сегодня в 4 предложениях (откуда вы вышли, куда пошли и где находитесь сейчас). В следующем уроке — вторая группа мест: «На поверхности»!</div>
 `
    }
  ],
  vocabulary: [
    { id: 'l10_v1', hu: 'hol', ru: 'где?', category: 'Вопросы места',
        ipa: "[hˈol]"
    },
    { id: 'l10_v2', hu: 'hová', ru: 'куда?', category: 'Вопросы места',
        ipa: "[hˈovɒː]"
    },
    { id: 'l10_v3', hu: 'honnan', ru: 'откуда?', category: 'Вопросы места',
        ipa: "[hˈonnɒn]"
    },
    { id: 'l10_v4', hu: 'házban', ru: 'в доме', category: 'Местные падежи',
        ipa: "[hɒːzbɒn]"
    },
    { id: 'l10_v5', hu: 'házba', ru: 'в дом', category: 'Местные падежи',
        ipa: "[hɒːzbɒ]"
    },
    { id: 'l10_v6', hu: 'házból', ru: 'из дома', category: 'Местные падежи',
        ipa: "[hɒːzbˈoːl]"
    },
    { id: 'l10_v7', hu: 'szobában', ru: 'в комнате', category: 'Местные падежи',
        ipa: "[ʃˈobɒːbɒn]"
    },
    { id: 'l10_v8', hu: 'szobába', ru: 'в комнату', category: 'Местные падежи',
        ipa: "[ʃˈobɒːbɒ]"
    },
    { id: 'l10_v9', hu: 'szobából', ru: 'из комнаты', category: 'Местные падежи',
        ipa: "[ʃˈobɒːboːl]"
    },
    { id: 'l10_v10', hu: 'bolt', ru: 'магазин', category: 'Лексика',
        ipa: "[bˈolt]"
    },
    { id: 'l10_v11', hu: 'iskola', ru: 'школа', category: 'Лексика',
        ipa: "[ˈiʃkolɒ]"
    },
    { id: 'l10_v12', hu: 'étterem', ru: 'ресторан', category: 'Лексика',
        ipa: "[ˈɛːttɛrɛm]"
    },
    { id: 'l10_v13', hu: 'iroda', ru: 'офис', category: 'Лексика',
        ipa: "[ˈirodɒ]"
    },
    { id: 'l10_v14', hu: 'Németországban', ru: 'в Германии', category: 'Страны',
        ipa: "[nˈɛːmɛtorʃɒːgbɒn]"
    },
    { id: 'l10_v15', hu: 'Berlinbe', ru: 'в Берлин', category: 'Города',
        ipa: "[bˈɛrlinbɛ]"
    },
    { id: 'l10_v16', hu: 'Örményországból', ru: 'из Армении', category: 'Страны',
        ipa: "[ˈørmɛːɲorʃɒːgboːl]"
    }
  ],
    quiz: [
    {
      id: 1001,
      question: 'Какой суффикс используется для ответа на вопрос "Hol?" (Где?) в группе "Внутри"?',
      options: ['-ban / -ben', '-ba / -be', '-ból / -ből', '-n / -on'],
      correctIndex: 0,
      explanation: 'Для вопроса "Hol?" (Где?) в группе "Внутри" используются суффиксы -ban (для задних гласных) и -ben (для передних гласных).'
    },
    {
      id: 1002,
      question: 'Какой суффикс используется для ответа на вопрос "Hova?" (Куда?) в группе "Внутри"?',
      options: ['-ban / -ben', '-ba / -be', '-ból / -ből', '-ra / -re'],
      correctIndex: 1,
      explanation: 'Для вопроса "Hova?" (Куда?) в группе "Внутри" используются суффиксы -ba (для задних гласных) и -be (для передних гласных).'
    },
    {
      id: 1003,
      question: 'Как сказать "Я живу в Германии" по-венгерски?',
      options: [
        'Németországban élek',
        'Németországba élek',
        'Németországból élek',
        'Németországon élek'
      ],
      correctIndex: 0,
      explanation: 'Для обозначения нахождения в стране используется суффикс -ban/-ben: Németországban élek (Я живу в Германии). "Németországba" – это "в Германию" (движение), "Németországból" – "из Германии".'
    },
    {
      id: 1004,
      question: 'Как правильно сказать "Я иду в магазин" по-венгерски?',
      options: [
        'Megyek a boltban',
        'Megyek a boltba',
        'Megyek a boltból',
        'Megyek a boltra'
      ],
      correctIndex: 1,
      explanation: 'Глагол движения (megyek) требует суффикса направления -ba/-be: bolt + ba = boltba (в магазин). "Megyek a boltban" – неверно, так как -ban/-ben используется для покоя (где?).'
    },
    {
      id: 1005,
      question: 'Какое из этих предложений НЕВЕРНО с точки зрения грамматики?',
      options: [
        'A házban vagyok (Я в доме)',
        'A szobába megyek (Я иду в комнату)',
        'A kertből jövök (Я прихожу из сада)',
        'A boltban megyek (Я иду в магазине)'
      ],
      correctIndex: 3,
      explanation: '"A boltban megyek" – неверно, потому что "megyek" (иду) – это глагол движения, который требует суффикса направления -ba/-be (boltba). -ban/-ben используется только для покоя (van, lakik, él).'
    },
    {
      id: 1006,
      question: 'В каком уроке мы изучали гармонию гласных, которая влияет на выбор суффикса (-ban или -ben, -ba или -be)?',
      options: [
        'Урок 1 (алфавит и звуки)',
        'Урок 2 (приветствия и lenni)',
        'Урок 5 (числа и время)',
        'Урок 9 (прилагательные)'
      ],
      correctIndex: 1,
      explanation: 'Гармония гласных – это фундаментальный закон венгерского языка, который мы впервые изучали в уроке 2 (Magánhangzó-harmónia). Теперь мы применяем его при выборе суффиксов: -ban (задние) vs -ben (передние).'
    }
  ],
  objectives: [
    { id: 'l10_distinguish-inner-cases', text: 'Различать значения «где?», «куда?» и «откуда?» для внутренних падежей.', skills: ['grammar'] },
    { id: 'l10_form-inessive', text: 'Образовывать падеж -ban/-ben для ответа на вопрос «где?».', skills: ['grammar', 'writing'] },
    { id: 'l10_form-illative', text: 'Образовывать падеж -ba/-be для ответа на вопрос «куда?».', skills: ['grammar', 'writing'] },
    { id: 'l10_form-elative', text: 'Образовывать падеж -ból/-ből для ответа на вопрос «откуда?».', skills: ['grammar', 'writing'] },
    { id: 'l10_use-inner-cases', text: 'Употреблять внутренние падежи при описании местоположения и движения.', skills: ['speaking', 'writing', 'listening'] },
  ],
};
export const LESSON_10 = LESSON_8_3;
