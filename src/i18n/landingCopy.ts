import type { InstructionLanguage } from './types';

interface LandingCopy {
  tagline: string;
  nav: [string, string, string, string];
  continue: string;
  login: string;
  signup: string;
  openMenu: string;
  closeMenu: string;
  heroBadge: string;
  heroTitle: string;
  heroAccent: string;
  heroBody: string;
  start: string;
  how: string;
  free: string;
  noCard: string;
  cancel: string;
  narration: string;
  everySlide: string;
  lessons: string;
  lessonPlural: string;
  words: string;
  lessonLabel: string;
  demoTitle: string;
  audio: string;
  listenPhrase: string;
  demoPhrase: string;
  chooseTranslation: string;
  demoOptions: [string, string, string];
  accepted: string;
  saved: string;
  featuresEyebrow: string;
  featuresTitle: string;
  featuresAccent: string;
  featuresSubtitle: string;
  features: Array<{ title: string; text: string }>;
  howTitle: string;
  howAccent: string;
  howSubtitle: string;
  steps: Array<{ title: string; text: string }>;
  courseEyebrow: string;
  courseTitle: string;
  courseSubtitle: string;
  basics: string;
  courseStart: string;
  next: string;
  viewAll: string;
  preview: [string, string, string, string, string, string];
  ctaUserTitle: string;
  ctaGuestTitle: string;
  ctaUserBody: string;
  ctaGuestBody: string;
  createAccount: string;
  existingAccount: string;
  footerBody: string;
  navigation: string;
  documents: string;
  rights: string;
  madeFor: string;
}

export const LANDING_COPY: Record<InstructionLanguage, LandingCopy> = {
  ru: {
    tagline: 'венгерский с нуля', nav: ['Возможности', 'Как это работает', 'Программа курса', 'Тарифы'], continue: 'Продолжить обучение', login: 'Войти', signup: 'Регистрация', openMenu: 'Открыть меню', closeMenu: 'Закрыть меню',
    heroBadge: '28 уроков · уровни A0–B1 · для начинающих', heroTitle: 'Заговорите по-венгерски', heroAccent: 'с первых уроков', heroBody: 'Интерактивные уроки с записанной озвучкой, тренажёрами слов и системой повторения. Изучайте грамматику, слушайте венгерское произношение и закрепляйте слова в своём темпе на любом устройстве.', start: 'Начать учиться', how: 'Как это работает', free: 'Уроки 1–2 бесплатно', noCard: 'Без карты', cancel: 'Отмена в любой момент',
    narration: 'Озвучка урока', everySlide: 'в каждом слайде', lessons: '28 уроков', lessonPlural: 'уроков', words: '780+ слов и фраз', lessonLabel: 'Урок', demoTitle: 'Приветствия и глагол «быть»', audio: 'Озвучка', listenPhrase: 'Прослушать фразу', demoPhrase: 'Jó napot! — Добрый день', chooseTranslation: 'Выберите перевод «Szia»', demoOptions: ['Привет', 'Спасибо', 'До встречи'], accepted: 'Ответ засчитан', saved: 'прогресс сохранён',
    featuresEyebrow: 'Возможности', featuresTitle: 'Всё, что нужно, чтобы', featuresAccent: 'заговорить', featuresSubtitle: 'Платформа построена вокруг практики: понятные объяснения, записанное аудио, задания и повторение.',
    features: [
      { title: 'Интерактивные уроки', text: 'Теория, живые примеры и тренажёры в одном слайде. Читайте, слушайте и сразу проверяйте себя.' },
      { title: 'Записанное произношение', text: 'Венгерские слова и фразы воспроизводятся из подготовленных аудиофайлов.' },
      { title: 'Умное повторение', text: 'Интервальное повторение подсказывает, какие слова пора освежить.' },
      { title: 'Прогресс в облаке', text: 'Уроки и карточки сохраняются на сервере. Продолжайте с любого устройства.' },
    ],
    howTitle: 'Три шага до первого', howAccent: 'разговора', howSubtitle: 'От первого визита до интерактивного урока меньше минуты.',
    steps: [
      { title: 'Начните бесплатно', text: 'Уроки 1–2 доступны без оплаты. Создайте аккаунт, чтобы сохранять прогресс.' },
      { title: 'Выберите урок', text: 'Начните с алфавита или перейдите к нужной теме: 28 уроков от A0 до B1.' },
      { title: 'Слушайте и повторяйте', text: 'Проходите слайды, слушайте слова и выполняйте задания. Система напомнит о повторении.' },
    ],
    courseEyebrow: 'Программа курса', courseTitle: 'Один учебный путь — 28 уроков', courseSubtitle: 'От звуков и алфавита до разговорного уровня B1.', basics: 'Основы', courseStart: 'Старт курса · 6 уроков', next: 'Дальше по программе', viewAll: 'Посмотреть все 28 уроков', preview: ['Алфавит и базовые звуки', 'Приветствия и глагол «быть»', 'Артикли и множественное число', 'Настоящее время', 'Числа, время, дни', 'Повторение уровня A0'],
    ctaUserTitle: 'Продолжите обучение прямо сейчас', ctaGuestTitle: 'Готовы заговорить по-венгерски?', ctaUserBody: 'Ваш прогресс сохранён. Продолжайте там, где остановились.', ctaGuestBody: 'Откройте бесплатные уроки 1–2 или создайте аккаунт, чтобы сохранять прогресс.', createAccount: 'Создать аккаунт', existingAccount: 'Уже есть аккаунт — войти',
    footerBody: 'Интерактивный курс венгерского языка: фонетика, грамматика, записанное аудио и тренажёры в 28 уроках от A0 до B1.', navigation: 'Навигация', documents: 'Документы', rights: 'Все права защищены.', madeFor: 'для изучающих венгерский',
  },
  en: {
    tagline: 'Hungarian from scratch', nav: ['Features', 'How it works', 'Course curriculum', 'Pricing'], continue: 'Continue learning', login: 'Sign in', signup: 'Sign up', openMenu: 'Open menu', closeMenu: 'Close menu',
    heroBadge: '28 lessons · A0–B1 · for beginners', heroTitle: 'Start speaking Hungarian', heroAccent: 'from your first lessons', heroBody: 'Interactive lessons with recorded audio, vocabulary trainers, and spaced review. Learn grammar, listen to Hungarian pronunciation, and retain words at your own pace on any device.', start: 'Start learning', how: 'How it works', free: 'Lessons 1–2 are free', noCard: 'No card required', cancel: 'Cancel anytime',
    narration: 'Lesson narration', everySlide: 'on every slide', lessons: '28 lessons', lessonPlural: 'lessons', words: '780+ words and phrases', lessonLabel: 'Lesson', demoTitle: 'Greetings and the verb “to be”', audio: 'Audio', listenPhrase: 'Play phrase', demoPhrase: 'Jó napot! — Good afternoon', chooseTranslation: 'Choose the translation of “Szia”', demoOptions: ['Hi', 'Thank you', 'See you'], accepted: 'Answer accepted', saved: 'progress saved',
    featuresEyebrow: 'Features', featuresTitle: 'Everything you need to', featuresAccent: 'start speaking', featuresSubtitle: 'The platform is built around practice: clear explanations, recorded audio, exercises, and review.',
    features: [
      { title: 'Interactive lessons', text: 'Theory, real examples, and exercises on one slide. Read, listen, and check yourself immediately.' },
      { title: 'Recorded pronunciation', text: 'Hungarian words and phrases play from prepared audio recordings.' },
      { title: 'Smart review', text: 'Spaced repetition tells you which words are ready for review.' },
      { title: 'Cloud progress', text: 'Lessons and cards are saved on the server. Continue on any device.' },
    ],
    howTitle: 'Three steps to your first', howAccent: 'conversation', howSubtitle: 'Go from your first visit to an interactive lesson in under a minute.',
    steps: [
      { title: 'Start for free', text: 'Lessons 1–2 are free. Create an account to save your progress.' },
      { title: 'Choose a lesson', text: 'Begin with the alphabet or jump to a topic you need: 28 lessons from A0 to B1.' },
      { title: 'Listen and practise', text: 'Work through slides, listen to words, and complete exercises. The system schedules review.' },
    ],
    courseEyebrow: 'Course curriculum', courseTitle: 'One learning path — 28 lessons', courseSubtitle: 'From sounds and the alphabet to conversational B1.', basics: 'Foundations', courseStart: 'Course start · 6 lessons', next: 'Coming next', viewAll: 'View all 28 lessons', preview: ['Alphabet and basic sounds', 'Greetings and the verb “to be”', 'Articles and plurals', 'Present tense', 'Numbers, time, and days', 'A0 review'],
    ctaUserTitle: 'Continue learning now', ctaGuestTitle: 'Ready to speak Hungarian?', ctaUserBody: 'Your progress is saved. Continue where you left off.', ctaGuestBody: 'Open free lessons 1–2 or create an account to save your progress.', createAccount: 'Create account', existingAccount: 'Already have an account? Sign in',
    footerBody: 'An interactive Hungarian course with phonetics, grammar, recorded audio, and practice across 28 lessons from A0 to B1.', navigation: 'Navigation', documents: 'Documents', rights: 'All rights reserved.', madeFor: 'for Hungarian learners',
  },
  es: {
    tagline: 'húngaro desde cero', nav: ['Funciones', 'Cómo funciona', 'Programa del curso', 'Precios'], continue: 'Continuar aprendiendo', login: 'Iniciar sesión', signup: 'Registrarse', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú',
    heroBadge: '28 lecciones · niveles A0–B1 · para principiantes', heroTitle: 'Empieza a hablar húngaro', heroAccent: 'desde las primeras lecciones', heroBody: 'Lecciones interactivas con audio grabado, entrenadores de vocabulario y repaso espaciado. Aprende gramática, escucha la pronunciación húngara y memoriza palabras a tu ritmo en cualquier dispositivo.', start: 'Empezar a aprender', how: 'Cómo funciona', free: 'Lecciones 1–2 gratis', noCard: 'Sin tarjeta', cancel: 'Cancela cuando quieras',
    narration: 'Narración de la lección', everySlide: 'en cada diapositiva', lessons: '28 lecciones', lessonPlural: 'lecciones', words: 'Más de 780 palabras y frases', lessonLabel: 'Lección', demoTitle: 'Saludos y el verbo «ser/estar»', audio: 'Audio', listenPhrase: 'Reproducir frase', demoPhrase: 'Jó napot! — Buenas tardes', chooseTranslation: 'Elige la traducción de «Szia»', demoOptions: ['Hola', 'Gracias', 'Hasta luego'], accepted: 'Respuesta aceptada', saved: 'progreso guardado',
    featuresEyebrow: 'Funciones', featuresTitle: 'Todo lo que necesitas para', featuresAccent: 'empezar a hablar', featuresSubtitle: 'La plataforma se centra en la práctica: explicaciones claras, audio grabado, ejercicios y repaso.',
    features: [
      { title: 'Lecciones interactivas', text: 'Teoría, ejemplos reales y ejercicios en una sola diapositiva. Lee, escucha y comprueba tus respuestas.' },
      { title: 'Pronunciación grabada', text: 'Las palabras y frases húngaras se reproducen desde grabaciones preparadas.' },
      { title: 'Repaso inteligente', text: 'La repetición espaciada te indica qué palabras debes repasar.' },
      { title: 'Progreso en la nube', text: 'Las lecciones y tarjetas se guardan en el servidor. Continúa en cualquier dispositivo.' },
    ],
    howTitle: 'Tres pasos hasta tu primera', howAccent: 'conversación', howSubtitle: 'Pasa de la primera visita a una lección interactiva en menos de un minuto.',
    steps: [
      { title: 'Empieza gratis', text: 'Las lecciones 1–2 son gratuitas. Crea una cuenta para guardar tu progreso.' },
      { title: 'Elige una lección', text: 'Empieza por el alfabeto o ve al tema que necesites: 28 lecciones de A0 a B1.' },
      { title: 'Escucha y practica', text: 'Avanza por las diapositivas, escucha palabras y completa ejercicios. El sistema programa el repaso.' },
    ],
    courseEyebrow: 'Programa del curso', courseTitle: 'Un itinerario — 28 lecciones', courseSubtitle: 'Desde los sonidos y el alfabeto hasta un nivel conversacional B1.', basics: 'Fundamentos', courseStart: 'Inicio del curso · 6 lecciones', next: 'A continuación', viewAll: 'Ver las 28 lecciones', preview: ['Alfabeto y sonidos básicos', 'Saludos y el verbo «ser/estar»', 'Artículos y plural', 'Presente', 'Números, hora y días', 'Repaso de A0'],
    ctaUserTitle: 'Continúa aprendiendo ahora', ctaGuestTitle: '¿Listo para hablar húngaro?', ctaUserBody: 'Tu progreso está guardado. Continúa donde lo dejaste.', ctaGuestBody: 'Abre las lecciones gratuitas 1–2 o crea una cuenta para guardar tu progreso.', createAccount: 'Crear cuenta', existingAccount: '¿Ya tienes una cuenta? Inicia sesión',
    footerBody: 'Curso interactivo de húngaro con fonética, gramática, audio grabado y práctica en 28 lecciones de A0 a B1.', navigation: 'Navegación', documents: 'Documentos', rights: 'Todos los derechos reservados.', madeFor: 'para estudiantes de húngaro',
  },
};
