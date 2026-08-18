import { Lesson } from '../../types';

export const LESSON_6: Lesson = {
  id: 6,
  number: 6,
  level: 'A0',
  title: 'Урок 6 · A0 összefoglaló',
  subtitle: 'Полное повторение и закрепление уровня A0',
  description: 'Повторение фонетики, существительных, глагола lenni, спряжения, числительных и времени. Расширенное самопредставление из 8 предложений.',
  slidesCount: 10,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 6 · 1/10 · A0 ПОВТОРЕНИЕ",
      title: "A0 összefoglaló",
      subtitle: "Что мы уже выучили (уроки 1–5)",
      body: `
   <ul class="tick">
     <li><b>1-й урок</b> — алфавит, произношение (s/sz, gy/ty/ny/ly, долгота, ударение)</li>
     <li><b>2-й урок</b> — приветствия, местоимения, глагол «lenni»</li>
     <li><b>3-й урок</b> — существительные, артикли a/az/egy, множественное число -k</li>
     <li><b>4-й урок</b> — спряжение в настоящем времени (неопределённое)</li>
     <li><b>5-й урок</b> — числа, время, дни, месяцы</li>
   </ul>
   <div class="note">Этот урок — повторение и закрепление — новой грамматики почти нет, вместо этого — практика применения всего вместе.</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 6 · 2/10 · ПОВТОРЕНИЕ ПРОИЗНОШЕНИЯ",
      title: "Kiejtési ismétlés",
      subtitle: "Быстрая проверка самых важных звуков",
      body: `
   <p>Прочитай вслух, затем проверь с помощью 🔊.</p>
   <p><button class="speak-btn" data-speak-text="sok szép szó" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> sok szép szó</button> (повторение пары sok/szép), <button class="speak-btn" data-speak-text="gyerek és kutya" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> gyerek és kutya</button> (gy/ty), <button class="speak-btn" data-speak-text="anya és nagymama" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> anya és nagymama</button> (ny), <button class="speak-btn" data-speak-text="út és tűz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> út és tűz</button> (долгий гласный)</p>
   <div class="task">Задание 1. Если у тебя возникают трудности с произношением какого-либо слова, вернись к 1-му уроку и повтори соответствующий раздел.</div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 6 · 3/10 · СУЩЕСТВИТЕЛЬНОЕ + СПРЯЖЕНИЕ",
      title: "Vegyes gyakorlat I.",
      subtitle: "Множественное число + настоящее время вместе",
      body: `
   <p><button class="speak-btn" data-speak-text="Két könyvet olvasok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Két könyvet olvasok.</button> <span style="color:#8a7a68">(Я читаю две книги)</span></p>
   <p><button class="speak-btn" data-speak-text="A székek az asztalnál vannak." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A székek az asztalnál vannak.</button> <span style="color:#8a7a68">(Стулья у стола)</span></p>
   <p><button class="speak-btn" data-speak-text="Minden nap magyar szavakat tanulok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Minden nap magyar szavakat tanulok.</button> <span style="color:#8a7a68">(Я каждый день учу венгерские слова)</span></p>
   <div class="task">Задание 2. Составь ещё 3 подобных предложения, комбинируя существительные во множественном числе и спрягаемые глаголы.</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 6 · 4/10 · ВРЕМЯ + ДЕЙСТВИЕ",
      title: "Vegyes gyakorlat II.",
      subtitle: "Время и день + повседневные действия",
      body: `
   <p><button class="speak-btn" data-speak-text="Csütörtökön dolgozom." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Csütörtökön dolgozom.</button> <span style="color:#8a7a68">(По четвергам я работаю)</span></p>
   <p><button class="speak-btn" data-speak-text="Nyolckor reggelizem." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nyolckor reggelizem.</button> <span style="color:#8a7a68">(В восемь часов я завтракаю)</span></p>
   <p><button class="speak-btn" data-speak-text="Vasárnap a barátaimmal beszélek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Vasárnap a barátaimmal beszélek.</button> <span style="color:#8a7a68">(По воскресеньям я разговариваю с друзьями)</span></p>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 6 · 5/10 · ДИАЛОГ",
      title: "Hosszú párbeszéd",
      subtitle: "Полный разговор — всё вместе",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Szia! Hogy vagy?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia! Hogy vagy?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Szia! Jól vagyok, köszönöm. És te?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia! Jól vagyok, köszönöm. És te?</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Én is jól vagyok. Mit csinálsz most?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Én is jól vagyok. Mit csinálsz most?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Magyarul tanulok, egy könyvet olvasok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Magyarul tanulok, egy könyvet olvasok.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Nehéz a magyar nyelv?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nehéz a magyar nyelv?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Néha nehéz, de nagyon szeretem." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Néha nehéz, de nagyon szeretem.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Mikor tanulsz általában?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mikor tanulsz általában?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Minden este, hét órakor." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Minden este, hét órakor.</button></p>
   <div class="task">Задание 3. Прочитай весь диалог 3 раза (по двум ролям), затем попробуй воспроизвести его без подглядывания в текст.</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 6 · 6/10 · САМОПРЕДСТАВЛЕНИЕ",
      title: "Teljes bemutatkozás",
      subtitle: "Расширенное описание себя",
      body: `
   <p><button class="speak-btn" data-speak-text="Szia! Mkhitárnak hívnak. Örményországból vagyok, de Budapesten élek. Fullstack programozó vagyok. Magyarul tanulok, mert Budapesten élek. Minden nap magyar szavakat tanulok. Hétfőtől péntekig dolgozom, este pedig magyar leckéket olvasok. Szeretem a magyar nyelvet, bár néha nehéz. Nagyon örülök, hogy megismertelek!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia! Mkhitárnak hívnak. Örményországból vagyok, de Budapesten élek. Fullstack programozó vagyok. Magyarul tanulok, mert Budapesten élek. Minden nap magyar szavakat tanulok. Hétfőtől péntekig dolgozom, este pedig magyar leckéket olvasok. Szeretem a magyar nyelvet, bár néha nehéz. Nagyon örülök, hogy megismertelek!</button></p>
   <div class="note">Это полное самопредставление из 8 предложений, использующее материал всех 5 уроков (приветствие, lenni, национальность, профессия, спряжение глагола, время).</div>
   <div class="task">Задание 4. Напиши свой вариант из 8 предложений с точными твоими данными.</div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 6 · 7/10 · ПРОВЕРКА СЛОВАРНОГО ЗАПАСА",
      title: "Szókincs teszt",
      subtitle: "Помнишь ли эти слова?",
      body: `
   <div class="grid2">
     <div>
       <p>1. вода = ?</p>
       <p>2. книга = ?</p>
       <p>3. друг = ?</p>
       <p>4. дом = ?</p>
       <p>5. стол = ?</p>
     </div>
     <div>
       <p>6. сегодня = ?</p>
       <p>7. понедельник = ?</p>
       <p>8. январь = ?</p>
       <p>9. учить = ?</p>
       <p>10. говорить = ?</p>
     </div>
   </div>
   <div class="task">Задание 5. Напиши перевод всех 10 слов на венгерский по памяти, затем проверь по урокам 1-5.</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 6 · 8/10 · САМООЦЕНКА",
      title: "Önértékelés",
      subtitle: "Готов ли ты к уровню A1?",
      body: `
   <p>Проверь, насколько ты уверен в следующих пунктах (от 1 до 5 баллов).</p>
   <ul class="tick">
     <li>Могу представить себя на венгерском</li>
     <li>Могу назвать время и день недели</li>
     <li>Могу проспрягать правильный глагол в настоящем времени (во всех 6 лицах)</li>
     <li>Понимаю, когда артикль «a», а когда «az»</li>
     <li>Могу правильно произносить буквы s/sz, gy/ty/ny</li>
   </ul>
   <div class="warn">Если по какому-либо пункту ты оцениваешь себя менее чем на 3, рекомендуется повторить соответствующий урок, прежде чем переходить к 7-му уроку (где начинаются падежи).</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 6 · 9/10 · ПРЕДВАРИТЕЛЬНЫЙ ОБЗОР",
      title: "Mi következik?",
      subtitle: "Что ожидает на уровне A1",
      body: `
   <p>В следующих уроках мы приступим к самой характерной черте венгерского языка — <b>падежам</b> (esetrag). Вместо того чтобы использовать предлоги, как в армянском/русском, венгерский всё (место, направление, инструмент, получатель...) выражает с помощью суффиксов, добавляемых к концу слова.</p>
   <ul class="tick">
     <li>7-й урок — винительный падеж (-t)</li>
     <li>8-й урок — семья, притяжательные суффиксы</li>
     <li>9-й урок — прилагательные и сравнение</li>
     <li>10-11-й уроки — местные падежи (внутри/на и направления)</li>
   </ul>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 6 · 10/10 · ИТОГ",
      title: "A0 vége",
      subtitle: "Завершение уровня A0",
      body: `
   <p>Поздравляю! Ты завершил уровень A0. На этом этапе ты уже можешь:</p>
   <ul class="tick">
     <li>Правильно произносить особые звуки венгерского</li>
     <li>Представлять себя и вести простой диалог</li>
     <li>Строить простые предложения в настоящем времени</li>
     <li>Говорить о времени, днях и числах</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Запиши себя (на телефон) в течение 1 минуты, говоря на венгерском о себе. Прослушай запись и сравни с произношением кнопок 🔊. Со следующего урока начинается уровень A1 с падежами.</div>
 `
    }
  ],
    quiz: [
    {
      id: 601,
      question: 'Как в венгерском языке читается буква "s"?',
      options: [
        'Как русский звук [с]',
        'Как русский звук [ш]',
        'Как английский [з]',
        'Как мягкий [сь]'
      ],
      correctIndex: 1,
      explanation: 'Буква "s" в венгерском всегда читается как [ш] (sok – много, szép – красивый). Это ключевое правило фонетики из урока 1.'
    },
    {
      id: 602,
      question: 'Какое приветствие используется в официальной обстановке с незнакомым человеком?',
      options: ['Szia', 'Jó napot', 'Szevasz', 'Cső'],
      correctIndex: 1,
      explanation: 'Jó napot – официальное приветствие, используется с незнакомыми и в формальных ситуациях (урок 2).'
    },
    {
      id: 603,
      question: 'Какой определённый артикль ставится перед словом "ablak" (окно)?',
      options: ['a', 'az', 'egy', 'не ставится'],
      correctIndex: 1,
      explanation: 'Перед словами, начинающимися с гласной, используется артикль "az": az ablak (урок 3).'
    },
    {
      id: 604,
      question: 'Как образуется множественное число от слова "alma" (яблоко)?',
      options: ['almak', 'almák', 'almák', 'almák'],
      correctIndex: 1,
      explanation: 'Слова на "-a" удлиняют её в "-á" перед добавлением "-k": alma → almák (урок 3).'
    },
    {
      id: 605,
      question: 'Какое окончание у глагола "tanul" в 1-м лице единственного числа (én) в настоящем времени?',
      options: ['-ok', '-ek', '-ök', '-om'],
      correctIndex: 0,
      explanation: 'Для задних гласных (a, o, u) используется окончание -ok: tanul + ok = tanulok (урок 4).'
    },
    {
      id: 606,
      question: 'Как сказать "в три часа" по-венгерски?',
      options: ['három óra', 'három órakor', 'három órán', 'három órában'],
      correctIndex: 1,
      explanation: 'Для указания точного времени используется суффикс -kor: három órakor (урок 5).'
    },
    {
      id: 607,
      question: 'Как сказать "в среду" по-венгерски?',
      options: ['szerda', 'szerdán', 'szerdában', 'szerdakor'],
      correctIndex: 1,
      explanation: 'Для дней недели используется суффикс -n/-on/-en/-ön: szerda + n = szerdán (урок 5).'
    },
    {
      id: 608,
      question: 'Что из перечисленного НЕ является темой уровня A0 (уроки 1–6)?',
      options: [
        'Алфавит и произношение (s/sz, gy/ty/ny/ly)',
        'Спряжение глаголов в настоящем времени (неопределённое)',
        'Определённое спряжение глаголов',
        'Числительные, время, дни недели'
      ],
      correctIndex: 2,
      explanation: 'Определённое спряжение (tárgyas ragozás) изучается только на уровне A1, начиная с урока 13. В уровне A0 мы проходим только неопределённое спряжение (урок 4).'
    }
  ],
  objectives: [
    { id: 'l6_review-alphabet', text: 'Применять правила чтения и произношения уровня A0 без ошибок.', skills: ['pronunciation', 'reading'] },
    { id: 'l6_review-verb-conj', text: 'Спрягать глаголы в настоящем времени и строить с ними предложения.', skills: ['grammar', 'writing'] },
    { id: 'l6_review-numbers', text: 'Использовать числа, время и дни недели в мини-диалогах.', skills: ['speaking', 'listening'] },
    { id: 'l6_review-plural', text: 'Образовывать множественное число и правильно выбирать артикли a/az/egy.', skills: ['grammar', 'writing'] },
    { id: 'l6_self-assess', text: 'Строить короткие монологи о себе, объединяя материал уровня A0.', skills: ['speaking', 'writing'] },
  ],
};
