/** Browser access is a server-calculated display hint; Cloud Functions re-check every paid lesson. */
import type { InstructionLanguage } from '../i18n/types';
export interface SubscriptionCheckInput { paidAccess?: boolean }
export function isSubscriptionValid(user: SubscriptionCheckInput): boolean { return user.paidAccess === true; }

export type SubscriptionDisplayStatus = 'privileged' | 'active' | 'cancelled' | 'past_due' | 'paused' | 'expired' | 'unpaid';

export interface SubscriptionDisplayInput extends SubscriptionCheckInput {
  subscriptionStatus: 'active' | 'cancelled' | 'expired' | 'past_due' | 'paused' | 'unpaid';
  accessUntil?: string | null;
  isPrivileged?: boolean;
}

export interface SubscriptionDisplay {
  status: SubscriptionDisplayStatus;
  label: string;
  detail: string;
  dateLabel?: string;
}

function futureDate(value: string | null | undefined, now: Date): boolean {
  if (!value) return false;
  const timestamp = Date.parse(value);
  return Number.isFinite(timestamp) && timestamp > now.getTime();
}

const SUBSCRIPTION_COPY: Record<InstructionLanguage, Record<SubscriptionDisplayStatus, Omit<SubscriptionDisplay, 'status'>>> = {
  ru: {
    privileged: { label: 'Полный доступ', detail: 'Доступ предоставлен администратором.' }, active: { label: 'Подписка активна', detail: 'Все уроки доступны.', dateLabel: 'Следующее продление' }, cancelled: { label: 'Подписка отменена', detail: 'Доступ сохранится до конца оплаченного периода.', dateLabel: 'Доступ до' }, past_due: { label: 'Проблема с оплатой', detail: 'Обновите способ оплаты, чтобы восстановить доступ.' }, paused: { label: 'Подписка приостановлена', detail: 'Платные уроки временно недоступны.' }, expired: { label: 'Подписка закончилась', detail: 'Оформите подписку снова, чтобы открыть уроки 3–28.' }, unpaid: { label: 'Нет подписки', detail: 'Уроки 1–2 бесплатны. Подписка открывает уроки 3–28.' },
  },
  en: {
    privileged: { label: 'Full access', detail: 'Access was granted by an administrator.' }, active: { label: 'Subscription active', detail: 'All lessons are available.', dateLabel: 'Next renewal' }, cancelled: { label: 'Subscription cancelled', detail: 'Access remains available until the end of the paid period.', dateLabel: 'Access until' }, past_due: { label: 'Payment issue', detail: 'Update your payment method to restore access.' }, paused: { label: 'Subscription paused', detail: 'Paid lessons are temporarily unavailable.' }, expired: { label: 'Subscription expired', detail: 'Subscribe again to unlock lessons 3–28.' }, unpaid: { label: 'No subscription', detail: 'Lessons 1–2 are free. A subscription unlocks lessons 3–28.' },
  },
  es: {
    privileged: { label: 'Acceso completo', detail: 'Un administrador ha concedido el acceso.' }, active: { label: 'Suscripción activa', detail: 'Todas las lecciones están disponibles.', dateLabel: 'Próxima renovación' }, cancelled: { label: 'Suscripción cancelada', detail: 'El acceso continúa hasta el final del periodo pagado.', dateLabel: 'Acceso hasta' }, past_due: { label: 'Problema con el pago', detail: 'Actualiza el método de pago para recuperar el acceso.' }, paused: { label: 'Suscripción pausada', detail: 'Las lecciones de pago no están disponibles temporalmente.' }, expired: { label: 'Suscripción caducada', detail: 'Vuelve a suscribirte para desbloquear las lecciones 3–28.' }, unpaid: { label: 'Sin suscripción', detail: 'Las lecciones 1–2 son gratuitas. Una suscripción desbloquea las lecciones 3–28.' },
  },
};

export function subscriptionDisplay(input: SubscriptionDisplayInput, now = new Date(), language: InstructionLanguage = 'ru'): SubscriptionDisplay {
  if (input.isPrivileged) {
    return { status: 'privileged', ...SUBSCRIPTION_COPY[language].privileged };
  }
  if (input.subscriptionStatus === 'active' && input.paidAccess && futureDate(input.accessUntil, now)) {
    return { status: 'active', ...SUBSCRIPTION_COPY[language].active };
  }
  if (input.subscriptionStatus === 'cancelled' && input.paidAccess && futureDate(input.accessUntil, now)) {
    return { status: 'cancelled', ...SUBSCRIPTION_COPY[language].cancelled };
  }
  if (input.subscriptionStatus === 'past_due') {
    return { status: 'past_due', ...SUBSCRIPTION_COPY[language].past_due };
  }
  if (input.subscriptionStatus === 'paused') {
    return { status: 'paused', ...SUBSCRIPTION_COPY[language].paused };
  }
  if (input.subscriptionStatus === 'expired' || input.subscriptionStatus === 'cancelled' || input.subscriptionStatus === 'active') {
    return { status: 'expired', ...SUBSCRIPTION_COPY[language].expired };
  }
  return { status: 'unpaid', ...SUBSCRIPTION_COPY[language].unpaid };
}
