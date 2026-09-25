import type { InstructionLanguage } from './types';

const ru = {
  eyebrow: 'Тарифы', title: 'Выберите план Premium', intro: 'Сначала попробуйте бесплатные уроки. Premium открывает полный готовый курс венгерского для самостоятельного обучения.',
  period: 'за весь период · {billing}', month: '≈ {price} / месяц', savings: 'Экономия {amount}', start: 'Начать с бесплатных уроков',
  note: 'Все тарифы дают одинаковый Premium-доступ. Экономия рассчитана относительно помесячной оплаты за тот же срок.',
  features: ['Все 28 уроков от A0 до B1', 'Уроки 1–2 бесплатно', 'Записанное учебное аудио', 'Интерактивные упражнения и тесты', 'Синхронизация прогресса в облаке', 'Система повторения слов'],
  billingTitle: 'Условия оплаты', billing: ['Период оплаты: 1 месяц, 3 месяца или 1 год. Подписка автоматически продлевается на выбранный период до отмены.', 'Отмена: отмените подписку в любой момент до следующего продления. Доступ сохранится до конца оплаченного периода.', 'Возврат: гарантия возврата денег в течение 14 дней для первого платежа Premium.', 'Обработка платежей: платежи обрабатывает Lemon Squeezy как Merchant of Record.', 'Итоговая сумма, валюта и применимые налоги отображаются до подтверждения покупки.'],
  terms: 'Условия подписки', product: 'Тип продукта: готовый цифровой курс для самостоятельного изучения языка. Консультации, заказная разработка, агентские услуги и живые занятия не входят.',
  freeTitle: 'Что можно попробовать бесплатно?', freeBody: 'Уроки 1–2 доступны без оплаты. Пользователь может оценить формат курса, интерфейс, упражнения и подход к обучению до покупки Premium.',
};
export type PricingCopy = typeof ru;
const en: PricingCopy = {
  eyebrow: 'Pricing', title: 'Choose your Premium plan', intro: 'Try the free lessons first. Premium unlocks the complete premade Hungarian self-study course.',
  period: 'full period · {billing}', month: '≈ {price} / month', savings: 'Save {amount}', start: 'Start with free lessons',
  note: 'Every plan includes the same Premium access. Savings are calculated against monthly billing for the same period.',
  features: ['All 28 lessons from A0 to B1', 'Lessons 1–2 free', 'Recorded educational audio', 'Interactive exercises and quizzes', 'Cloud-synchronised progress', 'Vocabulary review system'],
  billingTitle: 'Billing details', billing: ['Billing period: 1 month, 3 months, or 1 year. The subscription renews automatically for the selected period until cancelled.', 'Cancellation: cancel any time before the next renewal. Access remains available through the already-paid billing period.', 'Refund: 14-day money-back guarantee for the initial Premium subscription payment.', 'Payment processing: Lemon Squeezy processes payments as Merchant of Record.', 'The final payable amount, currency, and applicable taxes are shown before purchase confirmation.'],
  terms: 'Subscription terms', product: 'Product type: premade self-study digital language course. Consulting, custom development, agency work, and live tutoring are not included.',
  freeTitle: 'What can I try for free?', freeBody: 'Lessons 1–2 are available without payment. You can review the course format, interface, exercises, and learning approach before purchasing Premium.',
};
const es: PricingCopy = {
  eyebrow: 'Precios', title: 'Elige tu plan Premium', intro: 'Prueba primero las lecciones gratuitas. Premium desbloquea el curso completo de húngaro para estudiar por tu cuenta.',
  period: 'periodo completo · {billing}', month: '≈ {price} / mes', savings: 'Ahorra {amount}', start: 'Empezar con las lecciones gratuitas',
  note: 'Todos los planes incluyen el mismo acceso Premium. El ahorro se calcula frente al pago mensual durante el mismo periodo.',
  features: ['Las 28 lecciones de A0 a B1', 'Lecciones 1–2 gratuitas', 'Audio educativo grabado', 'Ejercicios y pruebas interactivas', 'Progreso sincronizado en la nube', 'Sistema de repaso de vocabulario'],
  billingTitle: 'Datos de facturación', billing: ['Periodo de facturación: 1 mes, 3 meses o 1 año. La suscripción se renueva automáticamente por el periodo elegido hasta que se cancele.', 'Cancelación: cancela en cualquier momento antes de la siguiente renovación. El acceso continúa hasta el final del periodo pagado.', 'Reembolso: garantía de devolución de 14 días para el primer pago de Premium.', 'Procesamiento del pago: Lemon Squeezy procesa los pagos como Merchant of Record.', 'El importe final, la moneda y los impuestos aplicables se muestran antes de confirmar la compra.'],
  terms: 'Condiciones de la suscripción', product: 'Tipo de producto: curso digital preparado para estudiar idiomas por cuenta propia. No incluye consultoría, desarrollo a medida, servicios de agencia ni clases en directo.',
  freeTitle: '¿Qué puedo probar gratis?', freeBody: 'Las lecciones 1–2 están disponibles sin pagar. Puedes evaluar el formato, la interfaz, los ejercicios y el enfoque antes de comprar Premium.',
};
export const PRICING_COPY: Record<InstructionLanguage, PricingCopy> = { ru, en, es };
export function formatPricingCopy(template: string, values: Record<string, string | number>): string {
  return Object.entries(values).reduce((result, [key, value]) => result.replaceAll(`{${key}}`, String(value)), template);
}
