import type { EvidenceKind, ReviewGrade } from '../types';
import type { InstructionLanguage } from './types';

const ru = {
  practiceTitle: 'Отработка форм', ready: 'Готово', review: 'Стоит повторить', correct: 'Верно.', wrong: 'Неверно. Правильный ответ: {answer}.', check: 'Проверить', retryErrors: 'Повторить ошибки',
  evidence: { reading: 'Чтение', listening: 'Аудирование', grammar: 'Грамматика', vocabulary: 'Лексика', speaking: 'Говорение', interaction: 'Диалог', writing: 'Письмо', pronunciation: 'Произношение' } satisfies Record<EvidenceKind, string>,
  tryAgain: 'Попробуй ещё раз', unavailable: 'Пока недоступно', completeTasks: 'Нужно завершить задания', teacherReview: 'Лучше проверить с преподавателем', incomplete: 'Не завершено', notStarted: 'Не начато',
  exitTitle: 'Проверка урока', exitIntro: 'Посмотри, что уже получилось. Зелёная отметка означает, что задание выполнено успешно. Письмо и свободную речь лучше дополнительно показать преподавателю или носителю языка.', extraPractice: 'Дополнительная практика', total: 'Итог: {status}',
  listening: 'Аудирование', recordingUnavailable: 'Запись недоступна', audioLabel: 'Аудиозапись: {title}', audioFailed: 'Аудиозапись недоступна или не может быть воспроизведена.', listenHint: 'Прослушайте запись. Повтор разрешён: первый раз — общий смысл, второй раз — детали.', unpublishedAudio: 'Аудиозапись для этого задания ещё не опубликована.', returnLater: 'Вернись к этому заданию позже.', answerAndTranscript: 'Ответить и показать текст', transcript: 'Текст записи (после ответа)',
  retry: 'Пройти заново', finish: 'Завершить', answered: 'Отвечено: {score} / {total}.', readingText: 'Текст для чтения', readingMenu: 'Чтение: меню', readingProse: 'Чтение: текст',
  rolePlay: 'Ролевая игра', scenarioComplete: 'Сценарий пройден', scenarioMessage: 'Отличная работа! Ты выполнил(а) сценарий: заказ, реакция на отказ и просьба счёта.', partner: 'Pincér · Официант', learner: 'Te · Ты', selfPractice: 'Произнеси ответ вслух и сравни его с примером. Если можешь, попроси преподавателя или носителя дать обратную связь.', naturalReview: 'Эту реплику лучше проверить с преподавателем или носителем — они помогут оценить естественность и произношение.', answeredNext: 'Я ответил(а) — дальше', next: 'Дальше',
  writing: 'Письмо', selfReviewComplete: 'Самопроверка завершена', characters: 'символов', rubric: 'Самооценка (отметь все пункты)', hideExample: 'Скрыть пример', showExample: 'Показать пример', editAgain: 'Редактировать снова', reviewed: 'Я проверил(а) себя', modelAnswer: 'Пример ответа',
  grades: { again: 'Не помню', hard: 'Трудно', good: 'Помню', easy: 'Легко' } satisfies Record<ReviewGrade, string>,
};

export type ActivityCopy = typeof ru;

const en: ActivityCopy = {
  practiceTitle: 'Form practice', ready: 'Complete', review: 'Review recommended', correct: 'Correct.', wrong: 'Incorrect. Correct answer: {answer}.', check: 'Check', retryErrors: 'Retry incorrect answers',
  evidence: { reading: 'Reading', listening: 'Listening', grammar: 'Grammar', vocabulary: 'Vocabulary', speaking: 'Speaking', interaction: 'Interaction', writing: 'Writing', pronunciation: 'Pronunciation' },
  tryAgain: 'Try again', unavailable: 'Unavailable', completeTasks: 'Complete the tasks', teacherReview: 'Teacher review recommended', incomplete: 'Incomplete', notStarted: 'Not started',
  exitTitle: 'Lesson check', exitIntro: 'See what you have achieved. A green mark means the task was completed successfully. Ask a teacher or native speaker to review writing and free speaking.', extraPractice: 'Additional practice', total: 'Overall: {status}',
  listening: 'Listening', recordingUnavailable: 'Recording unavailable', audioLabel: 'Audio recording: {title}', audioFailed: 'The audio recording is unavailable or cannot be played.', listenHint: 'Listen to the recording. You can replay it: first for the main idea, then for details.', unpublishedAudio: 'The audio for this task has not been published yet.', returnLater: 'Return to this task later.', answerAndTranscript: 'Answer and show transcript', transcript: 'Transcript (after answering)',
  retry: 'Try again', finish: 'Finish', answered: 'Answered: {score} / {total}.', readingText: 'Reading text', readingMenu: 'Reading: menu', readingProse: 'Reading: text',
  rolePlay: 'Role-play', scenarioComplete: 'Scenario completed', scenarioMessage: 'Great work! You completed the scenario: ordering, handling an unavailable item, and asking for the bill.', partner: 'Pincér · Waiter', learner: 'Te · You', selfPractice: 'Say your answer aloud and compare it with the example. If possible, ask a teacher or native speaker for feedback.', naturalReview: 'Ask a teacher or native speaker to review this line for naturalness and pronunciation.', answeredNext: 'I answered — continue', next: 'Continue',
  writing: 'Writing', selfReviewComplete: 'Self-review completed', characters: 'characters', rubric: 'Self-review (check every item)', hideExample: 'Hide example', showExample: 'Show example', editAgain: 'Edit again', reviewed: 'I reviewed my answer', modelAnswer: 'Example answer',
  grades: { again: 'Again', hard: 'Hard', good: 'Good', easy: 'Easy' },
};

const es: ActivityCopy = {
  practiceTitle: 'Práctica de formas', ready: 'Completado', review: 'Conviene repasar', correct: 'Correcto.', wrong: 'Incorrecto. Respuesta correcta: {answer}.', check: 'Comprobar', retryErrors: 'Repetir respuestas incorrectas',
  evidence: { reading: 'Lectura', listening: 'Comprensión auditiva', grammar: 'Gramática', vocabulary: 'Vocabulario', speaking: 'Expresión oral', interaction: 'Interacción', writing: 'Escritura', pronunciation: 'Pronunciación' },
  tryAgain: 'Inténtalo de nuevo', unavailable: 'No disponible', completeTasks: 'Completa las tareas', teacherReview: 'Conviene revisarlo con un profesor', incomplete: 'Incompleto', notStarted: 'Sin empezar',
  exitTitle: 'Comprobación de la lección', exitIntro: 'Comprueba lo que ya has conseguido. Una marca verde indica que la tarea se completó correctamente. Conviene que un profesor o hablante nativo revise la escritura y la expresión oral libre.', extraPractice: 'Práctica adicional', total: 'Resultado: {status}',
  listening: 'Comprensión auditiva', recordingUnavailable: 'Grabación no disponible', audioLabel: 'Grabación de audio: {title}', audioFailed: 'La grabación no está disponible o no se puede reproducir.', listenHint: 'Escucha la grabación. Puedes repetirla: primero para captar la idea general y después los detalles.', unpublishedAudio: 'El audio de esta tarea aún no está publicado.', returnLater: 'Vuelve a esta tarea más tarde.', answerAndTranscript: 'Responder y mostrar la transcripción', transcript: 'Transcripción (después de responder)',
  retry: 'Repetir', finish: 'Finalizar', answered: 'Respuestas: {score} / {total}.', readingText: 'Texto de lectura', readingMenu: 'Lectura: menú', readingProse: 'Lectura: texto',
  rolePlay: 'Juego de rol', scenarioComplete: 'Escenario completado', scenarioMessage: '¡Muy bien! Has completado el escenario: pedir, reaccionar cuando algo no está disponible y pedir la cuenta.', partner: 'Pincér · Camarero', learner: 'Te · Tú', selfPractice: 'Di tu respuesta en voz alta y compárala con el ejemplo. Si puedes, pide opinión a un profesor o hablante nativo.', naturalReview: 'Pide a un profesor o hablante nativo que revise la naturalidad y la pronunciación de esta frase.', answeredNext: 'He respondido — continuar', next: 'Continuar',
  writing: 'Escritura', selfReviewComplete: 'Autoevaluación completada', characters: 'caracteres', rubric: 'Autoevaluación (marca todos los puntos)', hideExample: 'Ocultar ejemplo', showExample: 'Mostrar ejemplo', editAgain: 'Editar de nuevo', reviewed: 'He revisado mi respuesta', modelAnswer: 'Respuesta de ejemplo',
  grades: { again: 'Otra vez', hard: 'Difícil', good: 'Bien', easy: 'Fácil' },
};

export const ACTIVITY_COPY: Record<InstructionLanguage, ActivityCopy> = { ru, en, es };

export function formatActivityCopy(template: string, values: Record<string, string | number>): string {
  return Object.entries(values).reduce((result, [key, value]) => result.replaceAll(`{${key}}`, String(value)), template);
}
