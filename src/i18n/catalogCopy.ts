import type { InstructionLanguage } from './types';

export const CATALOG_COPY = {
  ru: {
    levels: { A0: 'Основы', A1: 'Грамматика и падежи', A2: 'Разговорные темы', B1: 'Продвинутый уровень' },
    subscription: 'Доступ по подписке', completed: 'Урок выполнен', inProgress: 'В процессе', notStarted: 'Не начат',
    lesson: 'Урок', status: 'статус', steps: 'шагов', current: 'Текущий', next: 'Следующий', step: 'шаг',
    level: 'Уровень', lessonsRange: 'уроки', levelProgress: 'Прогресс уровня', levelProgressAria: 'Учебный прогресс уровня',
    continueLesson: 'Продолжить урок', startLesson: 'Начать урок', openLesson: 'Открыть урок',
    stoppedHere: 'Вы остановились здесь', requiredComplete: 'Все обязательные части выполнены', recommended: 'Рекомендуемый урок', quizPassed: 'Квиз этого урока пройден',
    tagline: 'Венгерский с нуля', title: 'Интерактивный курс венгерского языка', subtitle: 'От алфавита A0 до разговорного B1 — 28 уроков в одном учебном пути.',
    accountTitle: 'Личный кабинет', signInTitle: 'Войти или зарегистрироваться', account: 'Кабинет', signIn: 'Вход / Регистрация', adminTitle: 'Вы вошли как администратор', admin: 'Администратор',
    courseProgress: 'Общий прогресс курса', courseProgressAria: 'Общий учебный прогресс курса', continueLearning: 'Продолжить обучение',
    continueFrom: 'Продолжить с шага {current} из {total}', completedLocked: 'Все обязательные части доступных уроков выполнены — подписка откроет следующие уровни.', loading: 'Уроки загружаются…',
    reviewAria: 'Карточки к повторению', reviewCount: '{count} карточек к повторению', reviewHint: 'Откройте пройденный урок, чтобы начать разминку.',
    authBanner: 'Уроки 1–2 доступны бесплатно. Войдите или зарегистрируйтесь, чтобы сохранять прогресс и оформить доступ к урокам 3–28.', authCta: 'Войти / Зарегистрироваться',
    payBanner: 'У вас открыты бесплатные уроки 1–2. Оформите подписку, чтобы открыть все {count} уроков.', subscribe: 'Оформить подписку',
    footer: 'Венгерский язык для русскоязычных учащихся · Уроки 1–28 (A0–B1)',
  },
  en: {
    levels: { A0: 'Foundations', A1: 'Grammar and cases', A2: 'Conversation topics', B1: 'Advanced level' },
    subscription: 'Subscription access', completed: 'Lesson completed', inProgress: 'In progress', notStarted: 'Not started',
    lesson: 'Lesson', status: 'status', steps: 'steps', current: 'Current', next: 'Next', step: 'step',
    level: 'Level', lessonsRange: 'lessons', levelProgress: 'Level progress', levelProgressAria: 'Learning progress for level',
    continueLesson: 'Continue lesson', startLesson: 'Start lesson', openLesson: 'Open lesson',
    stoppedHere: 'You stopped here', requiredComplete: 'All required parts completed', recommended: 'Recommended lesson', quizPassed: 'Lesson quiz passed',
    tagline: 'Hungarian from scratch', title: 'Interactive Hungarian course', subtitle: 'From the A0 alphabet to conversational B1 — 28 lessons in one learning path.',
    accountTitle: 'Student account', signInTitle: 'Sign in or create an account', account: 'Account', signIn: 'Sign in / Register', adminTitle: 'You are signed in as an administrator', admin: 'Administrator',
    courseProgress: 'Overall course progress', courseProgressAria: 'Overall learning progress for the course', continueLearning: 'Continue learning',
    continueFrom: 'Continue from step {current} of {total}', completedLocked: 'You completed all required parts of the available lessons. A subscription unlocks the next levels.', loading: 'Loading lessons…',
    reviewAria: 'Cards due for review', reviewCount: '{count} cards due for review', reviewHint: 'Open a completed lesson to start your warm-up.',
    authBanner: 'Lessons 1–2 are free. Sign in or register to save your progress and get access to lessons 3–28.', authCta: 'Sign in / Register',
    payBanner: 'Your free access includes lessons 1–2. Subscribe to unlock all {count} lessons.', subscribe: 'Subscribe',
    footer: 'Hungarian for English-speaking learners · Lessons 1–28 (A0–B1)',
  },
  es: {
    levels: { A0: 'Fundamentos', A1: 'Gramática y casos', A2: 'Temas de conversación', B1: 'Nivel avanzado' },
    subscription: 'Acceso con suscripción', completed: 'Lección completada', inProgress: 'En curso', notStarted: 'Sin empezar',
    lesson: 'Lección', status: 'estado', steps: 'pasos', current: 'Actual', next: 'Siguiente', step: 'paso',
    level: 'Nivel', lessonsRange: 'lecciones', levelProgress: 'Progreso del nivel', levelProgressAria: 'Progreso de aprendizaje del nivel',
    continueLesson: 'Continuar la lección', startLesson: 'Empezar la lección', openLesson: 'Abrir la lección',
    stoppedHere: 'Te quedaste aquí', requiredComplete: 'Todas las partes obligatorias completadas', recommended: 'Lección recomendada', quizPassed: 'Prueba de la lección superada',
    tagline: 'Húngaro desde cero', title: 'Curso interactivo de húngaro', subtitle: 'Del alfabeto A0 al nivel conversacional B1: 28 lecciones en un solo itinerario.',
    accountTitle: 'Cuenta del estudiante', signInTitle: 'Inicia sesión o crea una cuenta', account: 'Cuenta', signIn: 'Entrar / Registrarse', adminTitle: 'Has iniciado sesión como administrador', admin: 'Administrador',
    courseProgress: 'Progreso total del curso', courseProgressAria: 'Progreso total de aprendizaje del curso', continueLearning: 'Continuar aprendiendo',
    continueFrom: 'Continuar desde el paso {current} de {total}', completedLocked: 'Has completado todas las partes obligatorias disponibles. La suscripción desbloquea los siguientes niveles.', loading: 'Cargando lecciones…',
    reviewAria: 'Tarjetas pendientes de repaso', reviewCount: '{count} tarjetas para repasar', reviewHint: 'Abre una lección completada para empezar el repaso.',
    authBanner: 'Las lecciones 1–2 son gratuitas. Inicia sesión o regístrate para guardar tu progreso y acceder a las lecciones 3–28.', authCta: 'Entrar / Registrarse',
    payBanner: 'Tu acceso gratuito incluye las lecciones 1–2. Suscríbete para desbloquear las {count} lecciones.', subscribe: 'Suscribirse',
    footer: 'Húngaro para estudiantes hispanohablantes · Lecciones 1–28 (A0–B1)',
  },
} as const satisfies Record<InstructionLanguage, object>;

export type CatalogCopy = (typeof CATALOG_COPY)[InstructionLanguage];

export function formatCatalogCopy(template: string, values: Record<string, string | number>): string {
  return Object.entries(values).reduce((result, [key, value]) => result.replaceAll(`{${key}}`, String(value)), template);
}
