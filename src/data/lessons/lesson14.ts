import { Lesson } from '../../types';

export const LESSON_14: Lesson = {
  id: 14,
  number: 14,
  level: 'A1',
  title: 'Урок 14 · Napi rutin',
  subtitle: 'Распорядок дня и возвратные глаголы (-kodik/-kedik/-ködik)',
  description: 'Завершающий урок уровня A1! Глаголы повседневных действий (умываться, одеваться, завтракать), спряжение ik-глаголов, время и возвратное местоимение magam.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 14 · 1/11 · УРОВЕНЬ A1 · ВВЕДЕНИЕ",
      title: "Napi rutin (Распорядок дня)",
      subtitle: "Нет частицы «-ся», но есть похожий класс глаголов",
      body: `
   <p>В венгерском нет отдельной частицы вроде русской «-ся». Но есть целый класс глаголов на <span class="hu-word">-kodik/-kedik/-ködik</span> (и родственные формы), которые по смыслу описывают действия, направленные на себя — умыться, одеться, причесаться. Все они относятся к уже знакомому вам из 4-го урока классу <b>-ik-глаголов</b>.</p>
   <div class="note">Это не «настоящая» рефлексивность в грамматическом смысле, а скорее лексическая особенность: сам глагол уже «встроенно» означает «делать что-то с собой».</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 14 · 2/11 · СЛОВАРЬ",
      title: "Napi cselekvések",
      subtitle: "Глаголы распорядка дня",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="felébred" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> felébred</button> — просыпаться</p>
       <p><button class="speak-btn" data-speak-text="felkel" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> felkel</button> — вставать</p>
       <p><button class="speak-btn" data-speak-text="mosakodik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mosakodik</button> — умываться/мыться</p>
       <p><button class="speak-btn" data-speak-text="fésülködik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fésülködik</button> — причёсываться</p>
       <p><button class="speak-btn" data-speak-text="felöltözik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> felöltözik</button> — одеваться</p>
       <p><button class="speak-btn" data-speak-text="fogat mos" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fogat mos</button> — чистить зубы</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="reggelizik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> reggelizik</button> — завтракать</p>
       <p><button class="speak-btn" data-speak-text="ebédel" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ebédel</button> — обедать</p>
       <p><button class="speak-btn" data-speak-text="vacsorázik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vacsorázik</button> — ужинать</p>
       <p><button class="speak-btn" data-speak-text="hazamegy" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hazamegy</button> — идти домой</p>
       <p><button class="speak-btn" data-speak-text="lefekszik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> lefekszik</button> — ложиться спать</p>
       <p><button class="speak-btn" data-speak-text="elalszik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> elalszik</button> — засыпать</p>
     </div>
   </div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 14 · 3/11 · СПРЯЖЕНИЕ",
      title: "Ikes ige gyakorlása",
      subtitle: "Напоминание — спряжение -ik глаголов",
      body: `
   <p>Вспомним из 4-го урока: у -ik-глаголов „én“-форма обычно берёт -om/-em/-öm вместо -ok/-ek/-ök.</p>
   <table class="conj">
     <tr><th>Кто</th><th>mosakodik (умываться)</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="mosakodom" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mosakodom</button></td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="mosakodsz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mosakodsz</button></td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="mosakodik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mosakodik</button></td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="mosakodunk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mosakodunk</button></td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="mosakodtok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mosakodtok</button></td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="mosakodnak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mosakodnak</button></td></tr>
   </table>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 14 · 4/11 · ВРЕМЯ + ДЕЙСТВИЕ",
      title: "Mikor csinálom?",
      subtitle: "Соединяем с временем из 5-го урока",
      body: `
   <p><button class="speak-btn" data-speak-text="Hét órakor felébredek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Hét órakor felébredek.</button> <span style="color:#8a7a68">(Просыпаюсь в семь)</span></p>
   <p><button class="speak-btn" data-speak-text="Fél nyolckor reggelizem." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Fél nyolckor reggelizem.</button> <span style="color:#8a7a68">(В половине восьмого завтракаю — дословно «в половину восьмого»)</span></p>
   <p><button class="speak-btn" data-speak-text="Este tizenegykor lefekszem." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Este tizenegykor lefekszem.</button> <span style="color:#8a7a68">(Вечером ложусь спать в одиннадцать)</span></p>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 14 · 5/11 · РАССКАЗ",
      title: "Egy nap",
      subtitle: "Мой типичный день — целиком",
      body: `
   <p><button class="speak-btn" data-speak-text="Reggel hét órakor felébredek. Utána mosakodom és felöltözöm. Fél nyolckor reggelizem, majd dolgozni megyek. Délben ebédelek, este pedig hazamegyek. Vacsora után magyarul tanulok, és este tizenegykor lefekszem." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Reggel hét órakor felébredek. Utána mosakodom és felöltözöm. Fél nyolckor reggelizem, majd dolgozni megyek. Délben ebédelek, este pedig hazamegyek. Vacsora után magyarul tanulok, és este tizenegykor lefekszem.</button></p>
   <div class="task">Задание 1. Прочитайте текст вслух, затем перепишите его от первого лица о своём собственном дне.</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 14 · 6/11 · ИСТИННО ВОЗВРАТНОЕ",
      title: "Magam, magad, maga...",
      subtitle: "Когда нужно настоящее «сам себя»",
      body: `
   <p>Для настоящей возвратности (не лексической, а буквальной — «себя самого») используется слово <button class="speak-btn" data-speak-text="maga" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> maga</button> с личными окончаниями:</p>
   <table class="conj">
     <tr><th>Кто</th><th>Форма</th><th>Значение</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="magamat" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> magamat</button></td><td>себя (меня самого)</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="magadat" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> magadat</button></td><td>себя (тебя самого)</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="magát" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> magát</button></td><td>себя (его самого)</td></tr>
   </table>
   <p><button class="speak-btn" data-speak-text="Látom magamat a tükörben." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Látom magamat a tükörben.</button> <span style="color:#8a7a68">(Я вижу себя в зеркале)</span></p>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 14 · 7/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Расспрашиваем о распорядке дня",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Hány órakor kelsz fel általában?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Hány órakor kelsz fel általában?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Általában hét órakor kelek fel." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Általában hét órakor kelek fel.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="És mikor fekszel le?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> És mikor fekszel le?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Éjfél körül szoktam lefeküdni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Éjfél körül szoktam lefeküdni.</button></p>
   <div class="task">Задание 2. Прочитайте диалог, затем задайте те же вопросы реальному человеку (или сами себе) и запишите ответы по-венгерски.</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 14 · 8/11 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      body: `
   <ol class="tasklist">
     <li>Проспрягайте <button class="speak-btn" data-speak-text="felöltözik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> felöltözik</button> (felöltözik, одеваться) всеми 6 лицами</li>
     <li>Опишите ваш день от пробуждения до сна — минимум 6 предложений</li>
     <li>Переведите: «Я вижу себя в зеркале»</li>
     <li>Объясните разницу между лексически-«рефлексивным» -ik-глаголом (mosakodik) и настоящим возвратным (magam)</li>
     <li>Составьте вопрос «Во сколько ты завтракаешь?» и ответьте на него</li>
   </ol>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 14 · 9/11 · РАСШИРЕННЫЙ СЛОВАРЬ",
      title: "Kiegészítő szókincs",
      subtitle: "Ещё бытовая лексика",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="zuhanyozik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> zuhanyozik</button> — принимать душ</p>
       <p><button class="speak-btn" data-speak-text="pihen" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> pihen</button> — отдыхать</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="sétál" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> sétál</button> — гулять/ходить пешком</p>
       <p><button class="speak-btn" data-speak-text="takarít" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> takarít</button> — убираться</p>
     </div>
   </div>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 14 · 10/11 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Что дальше",
      body: `
   <p>Мы закончили основной блок A1: падежи, спряжения, быт. В следующем уроке начинается уровень A2 — еда, поход в ресторан и новый падеж (-nak/-nek, дательный) для выражения «кому».</p>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 14 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 14-го урока и уровня A1",
      body: `
   <ul class="tick">
     <li>Лексически-«возвратные» глаголы на -kodik/-kedik/-ködik относятся к классу -ik-глаголов</li>
     <li>Настоящая возвратность — слово magam/magad/maga... с личными окончаниями</li>
     <li>Уровень A1 пройден: падежи (винительный, места, притяжательные суффиксы), два типа спряжения, прилагательные, быт</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Запишите (текстом или голосом) полный рассказ о своём дне — от пробуждения до сна, минимум 10 предложений, используя лексику всех уроков A1. В следующем уроке начинается уровень A2.</div>
 `
    }
  ],
  vocabulary: [
    { id: 'l14_v1', hu: 'napi rutin', ru: 'ежедневный распорядок', category: 'Тема урока',
        ipa: "[nɒpˈi rutin]"
    },
    { id: 'l14_v2', hu: 'felébred', ru: 'просыпаться', category: 'Глаголы дня',
        ipa: "[fˈɛlɛːbrɛd]"
    },
    { id: 'l14_v3', hu: 'felkel', ru: 'вставать', category: 'Глаголы дня',
        ipa: "[fˈɛlkɛl]"
    },
    { id: 'l14_v4', hu: 'mosakodik', ru: 'умываться', category: 'Глаголы дня',
        ipa: "[mˈoʃɒkodik]"
    },
    { id: 'l14_v5', hu: 'fésülködik', ru: 'причесываться', category: 'Глаголы дня',
        ipa: "[fˈɛːʃylkødik]"
    },
    { id: 'l14_v6', hu: 'felöltözik', ru: 'одеваться', category: 'Глаголы дня',
        ipa: "[fˈɛløltøzik]"
    },
    { id: 'l14_v7', hu: 'reggelizik', ru: 'завтракать', category: 'Глаголы дня',
        ipa: "[rˈɛggɛlizik]"
    },
    { id: 'l14_v8', hu: 'ebédel', ru: 'обедать', category: 'Глаголы дня',
        ipa: "[ˈɛbɛːdɛl]"
    },
    { id: 'l14_v9', hu: 'vacsorázik', ru: 'ужинать', category: 'Глаголы дня',
        ipa: "[vɒt͡ʃˈorɒːzik]"
    },
    { id: 'l14_v10', hu: 'hazamegy', ru: 'идти домой', category: 'Глаголы дня',
        ipa: "[hɒzɒmˈɛɟ]"
    },
    { id: 'l14_v11', hu: 'lefekszik', ru: 'ложиться спать', category: 'Глаголы дня',
        ipa: "[lˈɛfɛkʃik]"
    },
    { id: 'l14_v12', hu: 'elalszik', ru: 'засыпать', category: 'Глаголы дня',
        ipa: "[ˈɛlɒlʃik]"
    },
    { id: 'l14_v13', hu: 'magamat', ru: 'себя (меня самого)', category: 'Возвратные формы',
        ipa: "[mɒgɒmɒt]"
    },
    { id: 'l14_v14', hu: 'magadat', ru: 'себя (тебя самого)', category: 'Возвратные формы',
        ipa: "[mɒgɒdɒt]"
    },
    { id: 'l14_v15', hu: 'magát', ru: 'себя (его/ее самого)', category: 'Возвратные формы',
        ipa: "[mɒgɒːt]"
    },
    { id: 'l14_v16', hu: 'zuhanyozik', ru: 'принимать душ', category: 'Бытовая лексика',
        ipa: "[zˈuhɒɲozik]"
    }
  ],
    quiz: [
    {
      id: 1401,
      question: 'Какой из этих глаголов является лексически возвратным (действие направлено на себя)?',
      options: ['tanul (учиться)', 'mosakodik (умываться)', 'olvas (читать)', 'ír (писать)'],
      correctIndex: 1,
      explanation: 'Глагол "mosakodik" (умываться) – это возвратный глагол, действие направлено на себя. Глаголы "tanul", "olvas", "ír" – обычные переходные глаголы (урок 14, слайд 1).'
    },
    {
      id: 1402,
      question: 'Как правильно сказать "я одеваюсь" по-венгерски?',
      options: ['felöltözök', 'felöltözöm', 'felöltözik', 'felöltözünk'],
      correctIndex: 1,
      explanation: 'Глагол "felöltözik" оканчивается на -ik, поэтому в 1-м лице (én) он принимает окончание -om/-em/-öm: felöltöz + öm = felöltözöm (я одеваюсь).'
    },
    {
      id: 1403,
      question: 'Как сказать "Я просыпаюсь в семь часов" по-венгерски?',
      options: [
        'Hét órakor felébredek',
        'Hét órán felébredek',
        'Hét órában felébredek',
        'Hét órára felébredek'
      ],
      correctIndex: 0,
      explanation: 'Для указания времени используется суффикс -kor: hét órakor (в семь часов). Глагол "felébred" (просыпаться) – это обычный глагол (не -ik), поэтому в 1-м лице: felébred + ek = felébredek.'
    },
    {
      id: 1404,
      question: 'Какая форма используется для выражения "я вижу себя в зеркале"?',
      options: [
        'Látom a tükörben',
        'Látom magamat a tükörben',
        'Látom magát a tükörben',
        'Látom magad a tükörben'
      ],
      correctIndex: 1,
      explanation: 'Для настоящего возвратного местоимения "себя" используется "magam" с винительным окончанием: magamat (урок 14, слайд 6).'
    },
    {
      id: 1405,
      question: 'В чём разница между "mosakodik" (умываться) и "magamat" (себя) в венгерском языке?',
      options: [
        '"Mosakodik" – лексически возвратный глагол (сам по себе означает "делать что-то с собой"), "magamat" – отдельное местоимение для буквального "себя"',
        '"Mosakodik" – только для умывания лица, "magamat" – для всего тела',
        '"Mosakodik" – настоящее время, "magamat" – прошедшее',
        'Разницы нет, они взаимозаменяемы'
      ],
      correctIndex: 0,
      explanation: '"Mosakodik" – это лексически возвратный глагол (-ik глагол), который по своему значению уже означает действие, направленное на себя. "Magamat" – это отдельное возвратное местоимение, используемое для буквального значения "себя" (урок 14, слайды 1 и 6).'
    },
    {
      id: 1406,
      question: 'В каком уроке мы изучали прошедшее время глаголов (Múlt idő)?',
      options: [
        'Урок 10 (местные падежи I)',
        'Урок 12 (местные падежи III)',
        'Урок 13 (прошедшее время)',
        'Урок 14 (распорядок дня)'
      ],
      correctIndex: 2,
      explanation: 'Прошедшее время глаголов (Múlt idő) мы изучали в уроке 13. В уроке 14 мы применяем его к глаголам распорядка дня: "Tegnap reggel felébredtem" – "Вчера утром я проснулся".'
    }
  ],
  objectives: [
    { id: 'l14_describe-routine', text: 'Описывать распорядок дня с временными выражениями.', skills: ['speaking', 'writing'] },
    { id: 'l14_form-reflexive', text: 'Образовывать возвратные глаголы с помощью -kodik/-kedik/-ködik.', skills: ['grammar', 'writing'] },
    { id: 'l14_use-reflexive', text: 'Употреблять возвратные глаголы (mosakodik, öltözködik) в настоящем времени.', skills: ['grammar', 'speaking'] },
    { id: 'l14_tell-routine-time', text: 'Сообщать, во сколько и что делает человек (время + действие).', skills: ['speaking', 'listening'] },
  ],
};
