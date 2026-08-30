/** Browser access is a server-calculated display hint; Cloud Functions re-check every paid lesson. */
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

export function subscriptionDisplay(input: SubscriptionDisplayInput, now = new Date()): SubscriptionDisplay {
  if (input.isPrivileged) {
    return { status: 'privileged', label: 'Полный доступ', detail: 'Доступ предоставлен администратором.' };
  }
  if (input.subscriptionStatus === 'active' && input.paidAccess && futureDate(input.accessUntil, now)) {
    return { status: 'active', label: 'Подписка активна', detail: 'Все уроки доступны.', dateLabel: 'Следующее продление' };
  }
  if (input.subscriptionStatus === 'cancelled' && input.paidAccess && futureDate(input.accessUntil, now)) {
    return { status: 'cancelled', label: 'Подписка отменена', detail: 'Доступ сохранится до конца оплаченного периода.', dateLabel: 'Доступ до' };
  }
  if (input.subscriptionStatus === 'past_due') {
    return { status: 'past_due', label: 'Проблема с оплатой', detail: 'Обновите способ оплаты, чтобы восстановить доступ.' };
  }
  if (input.subscriptionStatus === 'paused') {
    return { status: 'paused', label: 'Подписка приостановлена', detail: 'Платные уроки временно недоступны.' };
  }
  if (input.subscriptionStatus === 'expired' || input.subscriptionStatus === 'cancelled' || input.subscriptionStatus === 'active') {
    return { status: 'expired', label: 'Подписка закончилась', detail: 'Оформите подписку снова, чтобы открыть уроки 3–28.' };
  }
  return { status: 'unpaid', label: 'Нет подписки', detail: 'Уроки 1–2 бесплатны. Подписка открывает уроки 3–28.' };
}
