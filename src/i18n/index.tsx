import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from './types';

export { SUPPORTED_LANGUAGES } from './types';
export type { SupportedLanguage } from './types';
export const DEFAULT_LANGUAGE: SupportedLanguage = 'ru';
export const LANGUAGE_STORAGE_KEY = 'hungarylearn:language:v1';
export const LANGUAGE_SELECTED_STORAGE_KEY = 'hungarylearn:instruction-language-selected:v1';

const ru = {
  'language.label': 'Язык интерфейса',
  'language.menuTitle': 'Выберите язык',
  'language.active': 'Текущий язык',
  'language.ru': 'Русский',
  'language.en': 'English',
  'language.es': 'Español',
  'language.short.ru': 'RU',
  'language.short.en': 'EN',
  'language.short.es': 'ES',
  'language.description.ru': 'Интерфейс и объяснения на русском',
  'language.description.en': 'Интерфейс и объяснения на английском',
  'language.description.es': 'Интерфейс и объяснения на испанском',
  'onboarding.eyebrow': 'Добро пожаловать в Magyaro',
  'onboarding.title': 'На каком языке вы хотите изучать венгерский?',
  'onboarding.description': 'Интерфейс, объяснения и переводы будут показаны на выбранном языке. Его можно изменить позже.',
  'onboarding.hint': 'Вы сможете изменить язык в правом верхнем углу.',
  'common.close': 'Закрыть',
  'common.loading': 'Загрузка…',
  'common.back': 'Назад',
  'common.next': 'Вперёд',
  'common.lesson': 'Урок',
  'common.slide': 'Слайд',
  'header.backToLessons': 'Вернуться к урокам',
  'header.contents': 'Содержание',
  'header.admin': 'Админ-панель',
  'header.profile': 'Профиль',
  'progress.lesson': 'Урок: {percentage}% · {completed}/{total}',
  'progress.aria': 'Учебный прогресс урока: {percentage}%',
  'progress.slide': 'Слайд {current}/{total}',
  'navigation.previous': 'Предыдущий шаг',
  'navigation.next': 'Следующий шаг',
  'navigation.check': 'Проверить себя',
  'drawer.title': 'Содержание урока',
  'narration.title': 'Пересказ слайда',
  'narration.playing': 'Пересказ слайда…',
  'narration.play': 'Пересказать слайд',
  'narration.stop': 'Остановить пересказ слайда',
  'narration.speed': 'Скорость воспроизведения: {rate}×',
  'narration.autoplay': 'Автопересказ слайдов',
  'narration.auto': 'Авто',
  'narration.settings': 'Дополнительные настройки пересказа',
  'narration.editAudio': 'Изменить аудио слайда',
  'narration.gesture': 'Нажмите ▶ один раз, чтобы разрешить автопересказ.',
  'narration.audioUnavailable': 'Записанное аудио для этого слайда недоступно.',
  'narration.languageUnavailable': 'Диктор для выбранного языка пока недоступен. Выберите русский язык, чтобы слушать объяснение урока.',
  'pronunciation.play': 'Воспроизвести произношение: {text}',
  'pronunciation.edit': 'Редактировать слово или озвучку',
  'pronunciation.adminEdit': 'Админ: изменить слово/звук',
  'pronunciation.unavailable': 'Аудио недоступно',
  'landing.session': 'Восстановление сессии…',
  'landing.title': 'Magyaro — венгерский язык с нуля',
  'public.home': 'На главную',
  'public.lessons': 'Уроки',
  'public.pricing': 'Тарифы',
  'public.terms': 'Условия',
  'public.privacy': 'Конфиденциальность',
  'public.refund': 'Возврат',
  'app.lessonNotFound': 'Урок не найден.',
  'app.lessonUnavailable': 'Урок сейчас недоступен.',
  'app.sessionExpired': 'Сессия истекла',
  'app.subscriptionRequired': 'Нужна подписка',
  'app.cannotOpenLesson': 'Не удалось открыть урок',
  'app.signIn': 'Войти / Зарегистрироваться',
  'app.openSubscription': 'Открыть подписку',
  'app.retry': 'Повторить',
  'app.backToLessons': 'К списку уроков',
  'app.keyboardNavigation': 'Клавиши ← и → для переключения',
  'app.lessonContents': 'Оглавление урока {number}',
  'header.allLessons': 'Все уроки',
  'header.administrator': 'Администратор',
  'header.lessonStages': 'Этапы урока',
  'header.accountTitle': 'Личный кабинет: {email}',
  'header.signInTitle': 'Войти или зарегистрироваться',
  'practice.menu': 'Практика',
  'practice.words': 'Слова',
  'practice.translation': 'Перевод',
  'practice.review': 'Повторение',
  'practice.due': '{count} к повторению',
  'slide.audioUnavailable': 'Записанное аудио недоступно.',
  'slide.cardTrainer': 'Тренажёр карточек (10 главных слов)',
  'slide.showAll': 'Показать всё',
  'slide.hideTranslations': 'Скрыть переводы',
  'slide.clickAnswer': 'клик для ответа',
  'slide.speakingTitle': 'Устная практика (необязательно)',
  'slide.speakingInstructions': 'Прочитай фразу вслух и сравни своё произношение с примерами урока.',
  'slide.speakingNote': 'Необязательная самопрактика: произнеси ответ вслух и сравни его с примерами урока.',
  'trainer.wordsMissing': 'Слова не найдены', 'trainer.wordsMissingBody': 'Для этого урока пока нет сохранённых карточек слов.',
  'trainer.wordsTitle': 'Тренажёр слов · Урок {lesson} ({count} карточек)', 'trainer.category': 'Категория: {category}',
  'trainer.flip': 'Нажмите для перевода', 'trainer.listen': 'Послушать 🔊', 'trainer.example': 'Пример: {example}',
  'trainer.previous': 'Предыдущая карточка', 'trainer.next': 'Следующая карточка', 'trainer.again': 'Ещё повторить', 'trainer.know': 'Знаю слово',
  'translation.missing': 'Карточки не найдены', 'translation.missingBody': 'Для этого урока пока нет карточек перевода.',
  'translation.title': 'Перевод · Урок {lesson} ({count} карточек)', 'translation.huTo': 'Венгерский → {language}', 'translation.toHu': '{language} → Венгерский',
  'translation.input': 'Введите перевод…', 'translation.check': 'Проверить', 'translation.show': 'Показать ответ',
  'translation.yourAnswer': 'Ваш ответ: {answer}', 'translation.alsoAccepted': 'Также принято: {answers}', 'translation.grammar': 'Грамматика: {tag}', 'translation.next': 'Следующая',
  'quiz.unavailable': 'Тест для этого урока ещё не опубликован', 'quiz.unavailableBody': 'Вопросы для этого урока пока не добавлены.',
  'quiz.back': 'Вернуться к слайдам', 'quiz.passed': 'Тест пройден!', 'quiz.completed': 'Тест завершён',
  'quiz.lessonResult': 'Урок {lesson}: {title}', 'quiz.scoreSummary': 'Вы правильно ответили на {score} из {total} вопросов ({percentage}%).',
  'quiz.passFeedback': 'Отличный результат! Порог этой проверки достигнут.', 'quiz.retryFeedback': 'Хорошая попытка! Рекомендуем просмотреть слайды ещё раз для закрепления.',
  'quiz.restart': 'Пройти заново', 'quiz.progress': 'Тест урока {lesson} (вопрос {current} из {total})', 'quiz.score': 'Счёт: {score}',
  'quiz.explanation': 'Пояснение:', 'quiz.nextQuestion': 'Следующий вопрос', 'quiz.results': 'Посмотреть результаты',
  'review.again': 'Не помню', 'review.hard': 'Трудно', 'review.good': 'Помню', 'review.easy': 'Легко',
  'review.warmup': 'Разминка · {current}/{total}', 'review.skip': 'Пропустить', 'review.revealHint': 'нажмите, чтобы вспомнить перевод', 'review.showTranslation': 'Показать перевод',
  'review.grammarReminder': 'Напоминание: это из {title} — {subtitle}',
  'error.title': 'Произошла ошибка загрузки', 'error.body': 'Приложение столкнулось с неожиданной ошибкой. Попробуйте перезагрузить страницу или вернуться к списку уроков.', 'error.reload': 'Перезагрузить страницу', 'error.lessons': 'Вернуться к урокам', 'preloader.hello': 'Привет!',
} as const;

type TranslationKey = keyof typeof ru;
type Dictionary = Record<TranslationKey, string>;

const en: Dictionary = {
  'language.label': 'Interface language', 'language.menuTitle': 'Choose a language', 'language.active': 'Current language',
  'language.ru': 'Русский', 'language.en': 'English', 'language.es': 'Español',
  'language.short.ru': 'RU', 'language.short.en': 'EN', 'language.short.es': 'ES',
  'language.description.ru': 'Interface and explanations in Russian', 'language.description.en': 'Interface and explanations in English', 'language.description.es': 'Interface and explanations in Spanish',
  'onboarding.eyebrow': 'Welcome to Magyaro', 'onboarding.title': 'Which language would you like to use to learn Hungarian?', 'onboarding.description': 'The interface, explanations, and translations will use this language. You can change it later.',
  'onboarding.hint': 'You can change the language from the top-right corner at any time.',
  'common.close': 'Close', 'common.loading': 'Loading…', 'common.back': 'Back', 'common.next': 'Next', 'common.lesson': 'Lesson', 'common.slide': 'Slide',
  'header.backToLessons': 'Back to lessons', 'header.contents': 'Contents', 'header.admin': 'Admin panel', 'header.profile': 'Profile',
  'progress.lesson': 'Lesson: {percentage}% · {completed}/{total}', 'progress.aria': 'Lesson progress: {percentage}%', 'progress.slide': 'Slide {current}/{total}',
  'navigation.previous': 'Previous step', 'navigation.next': 'Next step', 'navigation.check': 'Check yourself', 'drawer.title': 'Lesson contents',
  'narration.title': 'Slide narration', 'narration.playing': 'Playing slide narration…', 'narration.play': 'Play slide narration', 'narration.stop': 'Stop slide narration',
  'narration.speed': 'Playback speed: {rate}×', 'narration.autoplay': 'Autoplay slide narration', 'narration.auto': 'Auto',
  'narration.settings': 'More narration settings', 'narration.editAudio': 'Edit slide audio',
  'narration.gesture': 'Press ▶ once to allow autoplay.', 'narration.audioUnavailable': 'Recorded audio is unavailable for this slide.',
  'narration.languageUnavailable': 'English lesson narration is not available yet. Hungarian word pronunciation remains available.',
  'pronunciation.play': 'Play Hungarian pronunciation: {text}', 'pronunciation.edit': 'Edit word or recording', 'pronunciation.adminEdit': 'Admin: edit word/audio', 'pronunciation.unavailable': 'Audio unavailable',
  'landing.session': 'Restoring your session…', 'landing.title': 'Magyaro — learn Hungarian from scratch',
  'public.home': 'Home', 'public.lessons': 'Lessons', 'public.pricing': 'Pricing', 'public.terms': 'Terms', 'public.privacy': 'Privacy', 'public.refund': 'Refunds',
  'app.lessonNotFound': 'Lesson not found.', 'app.lessonUnavailable': 'This lesson is currently unavailable.', 'app.sessionExpired': 'Session expired',
  'app.subscriptionRequired': 'Subscription required', 'app.cannotOpenLesson': 'Could not open the lesson', 'app.signIn': 'Sign in / Register',
  'app.openSubscription': 'View subscription', 'app.retry': 'Try again', 'app.backToLessons': 'Back to lessons',
  'app.keyboardNavigation': 'Use the ← and → keys to switch slides', 'app.lessonContents': 'Lesson {number} contents',
  'header.allLessons': 'All lessons', 'header.administrator': 'Administrator', 'header.lessonStages': 'Lesson stages',
  'header.accountTitle': 'Student account: {email}', 'header.signInTitle': 'Sign in or create an account',
  'practice.menu': 'Practice', 'practice.words': 'Words', 'practice.translation': 'Translation', 'practice.review': 'Review', 'practice.due': '{count} due',
  'slide.audioUnavailable': 'Recorded audio is unavailable.', 'slide.cardTrainer': 'Flashcard practice (10 key words)', 'slide.showAll': 'Show all',
  'slide.hideTranslations': 'Hide translations', 'slide.clickAnswer': 'click to reveal', 'slide.speakingTitle': 'Speaking practice (optional)',
  'slide.speakingInstructions': 'Read the sentence aloud and compare your pronunciation with the lesson examples.',
  'slide.speakingNote': 'Optional self-practice: say your answer aloud and compare it with the lesson examples.',
  'trainer.wordsMissing': 'No words found', 'trainer.wordsMissingBody': 'This lesson does not have any saved word cards yet.',
  'trainer.wordsTitle': 'Word practice · Lesson {lesson} ({count} cards)', 'trainer.category': 'Category: {category}',
  'trainer.flip': 'Click to see the translation', 'trainer.listen': 'Listen 🔊', 'trainer.example': 'Example: {example}',
  'trainer.previous': 'Previous card', 'trainer.next': 'Next card', 'trainer.again': 'Review again', 'trainer.know': 'I know this word',
  'translation.missing': 'No cards found', 'translation.missingBody': 'This lesson does not have any translation cards yet.',
  'translation.title': 'Translation · Lesson {lesson} ({count} cards)', 'translation.huTo': 'Hungarian → {language}', 'translation.toHu': '{language} → Hungarian',
  'translation.input': 'Enter the translation…', 'translation.check': 'Check', 'translation.show': 'Show answer',
  'translation.yourAnswer': 'Your answer: {answer}', 'translation.alsoAccepted': 'Also accepted: {answers}', 'translation.grammar': 'Grammar: {tag}', 'translation.next': 'Next',
  'quiz.unavailable': 'The quiz for this lesson has not been published yet', 'quiz.unavailableBody': 'Questions have not been added to this lesson yet.',
  'quiz.back': 'Back to slides', 'quiz.passed': 'Quiz passed!', 'quiz.completed': 'Quiz completed',
  'quiz.lessonResult': 'Lesson {lesson}: {title}', 'quiz.scoreSummary': 'You answered {score} of {total} questions correctly ({percentage}%).',
  'quiz.passFeedback': 'Excellent result! You reached the pass threshold.', 'quiz.retryFeedback': 'Good attempt. Review the slides once more to reinforce the material.',
  'quiz.restart': 'Try again', 'quiz.progress': 'Lesson {lesson} quiz (question {current} of {total})', 'quiz.score': 'Score: {score}',
  'quiz.explanation': 'Explanation:', 'quiz.nextQuestion': 'Next question', 'quiz.results': 'View results',
  'review.again': 'Again', 'review.hard': 'Hard', 'review.good': 'Good', 'review.easy': 'Easy',
  'review.warmup': 'Warm-up · {current}/{total}', 'review.skip': 'Skip', 'review.revealHint': 'click to recall the translation', 'review.showTranslation': 'Show translation',
  'review.grammarReminder': 'Reminder: this comes from {title} — {subtitle}',
  'error.title': 'Loading error', 'error.body': 'The application encountered an unexpected error. Reload the page or return to the lesson list.', 'error.reload': 'Reload page', 'error.lessons': 'Back to lessons', 'preloader.hello': 'Hello!',
};

const es: Dictionary = {
  'language.label': 'Idioma de la interfaz', 'language.menuTitle': 'Elige un idioma', 'language.active': 'Idioma actual',
  'language.ru': 'Русский', 'language.en': 'English', 'language.es': 'Español',
  'language.short.ru': 'RU', 'language.short.en': 'EN', 'language.short.es': 'ES',
  'language.description.ru': 'Interfaz y explicaciones en ruso', 'language.description.en': 'Interfaz y explicaciones en inglés', 'language.description.es': 'Interfaz y explicaciones en español',
  'onboarding.eyebrow': 'Te damos la bienvenida a Magyaro', 'onboarding.title': '¿En qué idioma quieres aprender húngaro?', 'onboarding.description': 'La interfaz, las explicaciones y las traducciones usarán este idioma. Puedes cambiarlo más tarde.',
  'onboarding.hint': 'Puedes cambiar el idioma desde la esquina superior derecha en cualquier momento.',
  'common.close': 'Cerrar', 'common.loading': 'Cargando…', 'common.back': 'Atrás', 'common.next': 'Siguiente', 'common.lesson': 'Lección', 'common.slide': 'Diapositiva',
  'header.backToLessons': 'Volver a las lecciones', 'header.contents': 'Contenido', 'header.admin': 'Panel de administración', 'header.profile': 'Perfil',
  'progress.lesson': 'Lección: {percentage}% · {completed}/{total}', 'progress.aria': 'Progreso de la lección: {percentage}%', 'progress.slide': 'Diapositiva {current}/{total}',
  'navigation.previous': 'Paso anterior', 'navigation.next': 'Paso siguiente', 'navigation.check': 'Compruébate', 'drawer.title': 'Contenido de la lección',
  'narration.title': 'Narración de la diapositiva', 'narration.playing': 'Reproduciendo la narración…', 'narration.play': 'Reproducir la narración', 'narration.stop': 'Detener la narración',
  'narration.speed': 'Velocidad de reproducción: {rate}×', 'narration.autoplay': 'Narración automática', 'narration.auto': 'Auto',
  'narration.settings': 'Más ajustes de narración', 'narration.editAudio': 'Editar audio de la diapositiva',
  'narration.gesture': 'Pulsa ▶ una vez para permitir la reproducción automática.', 'narration.audioUnavailable': 'El audio grabado no está disponible para esta diapositiva.',
  'narration.languageUnavailable': 'La narración de las lecciones en español aún no está disponible. La pronunciación de palabras húngaras sigue disponible.',
  'pronunciation.play': 'Reproducir la pronunciación húngara: {text}', 'pronunciation.edit': 'Editar palabra o grabación', 'pronunciation.adminEdit': 'Admin: editar palabra/audio', 'pronunciation.unavailable': 'Audio no disponible',
  'landing.session': 'Restaurando la sesión…', 'landing.title': 'Magyaro — aprende húngaro desde cero',
  'public.home': 'Inicio', 'public.lessons': 'Lecciones', 'public.pricing': 'Precios', 'public.terms': 'Condiciones', 'public.privacy': 'Privacidad', 'public.refund': 'Reembolsos',
  'app.lessonNotFound': 'No se encontró la lección.', 'app.lessonUnavailable': 'Esta lección no está disponible en este momento.', 'app.sessionExpired': 'La sesión ha caducado',
  'app.subscriptionRequired': 'Se necesita una suscripción', 'app.cannotOpenLesson': 'No se pudo abrir la lección', 'app.signIn': 'Entrar / Registrarse',
  'app.openSubscription': 'Ver la suscripción', 'app.retry': 'Intentar de nuevo', 'app.backToLessons': 'Volver a las lecciones',
  'app.keyboardNavigation': 'Usa las teclas ← y → para cambiar de diapositiva', 'app.lessonContents': 'Contenido de la lección {number}',
  'header.allLessons': 'Todas las lecciones', 'header.administrator': 'Administrador', 'header.lessonStages': 'Etapas de la lección',
  'header.accountTitle': 'Cuenta del estudiante: {email}', 'header.signInTitle': 'Inicia sesión o crea una cuenta',
  'practice.menu': 'Práctica', 'practice.words': 'Palabras', 'practice.translation': 'Traducción', 'practice.review': 'Repaso', 'practice.due': '{count} pendientes',
  'slide.audioUnavailable': 'El audio grabado no está disponible.', 'slide.cardTrainer': 'Práctica con tarjetas (10 palabras clave)', 'slide.showAll': 'Mostrar todo',
  'slide.hideTranslations': 'Ocultar traducciones', 'slide.clickAnswer': 'haz clic para ver', 'slide.speakingTitle': 'Práctica oral (opcional)',
  'slide.speakingInstructions': 'Lee la frase en voz alta y compara tu pronunciación con los ejemplos de la lección.',
  'slide.speakingNote': 'Práctica personal opcional: di tu respuesta en voz alta y compárala con los ejemplos de la lección.',
  'trainer.wordsMissing': 'No se encontraron palabras', 'trainer.wordsMissingBody': 'Esta lección aún no tiene tarjetas de palabras guardadas.',
  'trainer.wordsTitle': 'Práctica de palabras · Lección {lesson} ({count} tarjetas)', 'trainer.category': 'Categoría: {category}',
  'trainer.flip': 'Haz clic para ver la traducción', 'trainer.listen': 'Escuchar 🔊', 'trainer.example': 'Ejemplo: {example}',
  'trainer.previous': 'Tarjeta anterior', 'trainer.next': 'Tarjeta siguiente', 'trainer.again': 'Repasar de nuevo', 'trainer.know': 'Conozco esta palabra',
  'translation.missing': 'No se encontraron tarjetas', 'translation.missingBody': 'Esta lección aún no tiene tarjetas de traducción.',
  'translation.title': 'Traducción · Lección {lesson} ({count} tarjetas)', 'translation.huTo': 'Húngaro → {language}', 'translation.toHu': '{language} → Húngaro',
  'translation.input': 'Escribe la traducción…', 'translation.check': 'Comprobar', 'translation.show': 'Mostrar respuesta',
  'translation.yourAnswer': 'Tu respuesta: {answer}', 'translation.alsoAccepted': 'También se acepta: {answers}', 'translation.grammar': 'Gramática: {tag}', 'translation.next': 'Siguiente',
  'quiz.unavailable': 'La prueba de esta lección aún no está publicada', 'quiz.unavailableBody': 'Todavía no se han añadido preguntas a esta lección.',
  'quiz.back': 'Volver a las diapositivas', 'quiz.passed': '¡Prueba superada!', 'quiz.completed': 'Prueba completada',
  'quiz.lessonResult': 'Lección {lesson}: {title}', 'quiz.scoreSummary': 'Has respondido correctamente {score} de {total} preguntas ({percentage} %).',
  'quiz.passFeedback': '¡Excelente resultado! Has alcanzado el mínimo requerido.', 'quiz.retryFeedback': 'Buen intento. Revisa las diapositivas una vez más para afianzar el contenido.',
  'quiz.restart': 'Repetir', 'quiz.progress': 'Prueba de la lección {lesson} (pregunta {current} de {total})', 'quiz.score': 'Puntuación: {score}',
  'quiz.explanation': 'Explicación:', 'quiz.nextQuestion': 'Pregunta siguiente', 'quiz.results': 'Ver resultados',
  'review.again': 'Otra vez', 'review.hard': 'Difícil', 'review.good': 'Bien', 'review.easy': 'Fácil',
  'review.warmup': 'Repaso · {current}/{total}', 'review.skip': 'Omitir', 'review.revealHint': 'haz clic para recordar la traducción', 'review.showTranslation': 'Mostrar traducción',
  'review.grammarReminder': 'Recordatorio: esto proviene de {title} — {subtitle}',
  'error.title': 'Error de carga', 'error.body': 'La aplicación ha encontrado un error inesperado. Recarga la página o vuelve a la lista de lecciones.', 'error.reload': 'Recargar página', 'error.lessons': 'Volver a las lecciones', 'preloader.hello': '¡Hola!',
};

const dictionaries: Record<SupportedLanguage, Dictionary> = { ru, en, es };

export function isSupportedLanguage(value: unknown): value is SupportedLanguage {
  return typeof value === 'string' && (SUPPORTED_LANGUAGES as readonly string[]).includes(value);
}

export function resolveInitialLanguage(stored: string | null | undefined, browserLanguage: string | null | undefined): SupportedLanguage {
  if (isSupportedLanguage(stored)) return stored;
  const base = browserLanguage?.trim().toLowerCase().split(/[-_]/)[0];
  return isSupportedLanguage(base) ? base : DEFAULT_LANGUAGE;
}

export function persistLanguageSelection(
  storage: Pick<Storage, 'setItem'>,
  language: SupportedLanguage,
): void {
  storage.setItem(LANGUAGE_STORAGE_KEY, language);
  storage.setItem(LANGUAGE_SELECTED_STORAGE_KEY, 'true');
}

export function translate(language: SupportedLanguage, key: TranslationKey, values: Record<string, string | number> = {}): string {
  const template = dictionaries[language][key] || ru[key];
  return Object.entries(values).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, String(value)), template);
}

let activeLanguage: SupportedLanguage = DEFAULT_LANGUAGE;
export function getActiveLanguage(): SupportedLanguage { return activeLanguage; }

interface I18nValue {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
  t: (key: TranslationKey, values?: Record<string, string | number>) => string;
  preferenceSelected: boolean;
}

const defaultValue: I18nValue = {
  language: DEFAULT_LANGUAGE,
  setLanguage: () => undefined,
  t: (key, values) => translate(DEFAULT_LANGUAGE, key, values),
  preferenceSelected: true,
};

const I18nContext = createContext<I18nValue>(defaultValue);

interface I18nProviderProps {
  children: ReactNode;
  initialLanguage?: SupportedLanguage;
  initialPreferenceSelected?: boolean;
}

export function I18nProvider({ children, initialLanguage, initialPreferenceSelected }: I18nProviderProps) {
  const [preferenceSelected, setPreferenceSelected] = useState(() => {
    if (initialPreferenceSelected !== undefined) return initialPreferenceSelected;
    if (typeof window === 'undefined') return true;
    try {
      return window.localStorage.getItem(LANGUAGE_SELECTED_STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });
  const [language, setLanguage] = useState<SupportedLanguage>(() => {
    if (initialLanguage) return initialLanguage;
    if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    } catch {
      // Storage can be unavailable in privacy-restricted browser contexts.
    }
    return resolveInitialLanguage(stored, window.navigator.language);
  });

  useEffect(() => {
    activeLanguage = language;
    if (typeof document !== 'undefined') document.documentElement.lang = language;
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
      } catch {
        // The in-memory selection still works when persistence is unavailable.
      }
    }
  }, [language]);

  const selectLanguage = useCallback((nextLanguage: SupportedLanguage) => {
    setLanguage(nextLanguage);
    setPreferenceSelected(true);
    if (typeof window !== 'undefined') {
      try {
        persistLanguageSelection(window.localStorage, nextLanguage);
      } catch {
        // The current session still keeps the explicit selection.
      }
    }
  }, []);

  const value = useMemo<I18nValue>(() => ({
    language,
    setLanguage: selectLanguage,
    t: (key, values) => translate(language, key, values),
    preferenceSelected,
  }), [language, preferenceSelected, selectLanguage]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue { return useContext(I18nContext); }
