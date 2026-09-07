export type BillingPlanKey = 'monthly' | 'quarterly' | 'yearly';

export interface BillingPlan {
  key: BillingPlanKey;
  title: string;
  priceHuf: number;
  formattedPrice: string;
  billingLabel: string;
  monthlyEquivalentHuf: number;
  savingsHuf: number;
  badge: string | null;
  recommended: boolean;
  description: string;
}

export function formatHuf(amount: number): string {
  return `${new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 }).format(amount)} Ft`;
}

const monthlyPriceHuf = 7990;

function plan(
  key: BillingPlanKey, title: string, priceHuf: number, months: number,
  billingLabel: string, badge: string | null, recommended: boolean, description: string,
): BillingPlan {
  return {
    key, title, priceHuf, formattedPrice: formatHuf(priceHuf), billingLabel,
    monthlyEquivalentHuf: Math.round(priceHuf / months),
    savingsHuf: monthlyPriceHuf * months - priceHuf,
    badge, recommended, description,
  };
}

export const BILLING_PLANS: readonly BillingPlan[] = [
  plan('monthly', '1 месяц', monthlyPriceHuf, 1, 'каждый месяц', null, false, 'Для знакомства с Premium в своём темпе.'),
  plan('quarterly', '3 месяца', 19990, 3, 'каждые 3 месяца', 'Самый популярный', true, 'Для регулярных занятий и уверенного прогресса.'),
  plan('yearly', '1 год', 59990, 12, 'каждый год', 'Лучшая цена', false, 'Для долгосрочного изучения венгерского.'),
];

export function isBillingPlanKey(value: unknown): value is BillingPlanKey {
  return value === 'monthly' || value === 'quarterly' || value === 'yearly';
}
