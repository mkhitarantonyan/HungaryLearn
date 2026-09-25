export type BillingPlanKey = 'monthly' | 'quarterly' | 'yearly';
import type { InstructionLanguage } from '../i18n/types';

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

const monthlyPriceHuf = 8990;

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
  plan('quarterly', '3 месяца', 22990, 3, 'каждые 3 месяца', 'Самый популярный', true, 'Для регулярных занятий и уверенного прогресса.'),
  plan('yearly', '1 год', 64990, 12, 'каждый год', 'Лучшая цена', false, 'Для долгосрочного изучения венгерского.'),
];

const BILLING_PLAN_COPY: Record<InstructionLanguage, Record<BillingPlanKey, Pick<BillingPlan, 'title' | 'billingLabel' | 'badge' | 'description'>>> = {
  ru: {
    monthly: { title: '1 месяц', billingLabel: 'каждый месяц', badge: null, description: 'Для знакомства с Premium в своём темпе.' },
    quarterly: { title: '3 месяца', billingLabel: 'каждые 3 месяца', badge: 'Самый популярный', description: 'Для регулярных занятий и уверенного прогресса.' },
    yearly: { title: '1 год', billingLabel: 'каждый год', badge: 'Лучшая цена', description: 'Для долгосрочного изучения венгерского.' },
  },
  en: {
    monthly: { title: '1 month', billingLabel: 'every month', badge: null, description: 'A flexible way to try Premium at your own pace.' },
    quarterly: { title: '3 months', billingLabel: 'every 3 months', badge: 'Most popular', description: 'For regular study and steady progress.' },
    yearly: { title: '1 year', billingLabel: 'every year', badge: 'Best value', description: 'For long-term Hungarian study.' },
  },
  es: {
    monthly: { title: '1 mes', billingLabel: 'cada mes', badge: null, description: 'Una forma flexible de probar Premium a tu ritmo.' },
    quarterly: { title: '3 meses', billingLabel: 'cada 3 meses', badge: 'Más popular', description: 'Para estudiar con regularidad y avanzar con confianza.' },
    yearly: { title: '1 año', billingLabel: 'cada año', badge: 'Mejor precio', description: 'Para estudiar húngaro a largo plazo.' },
  },
};

export function getBillingPlans(language: InstructionLanguage): readonly BillingPlan[] {
  return BILLING_PLANS.map((planItem) => ({ ...planItem, ...BILLING_PLAN_COPY[language][planItem.key] }));
}

export function isBillingPlanKey(value: unknown): value is BillingPlanKey {
  return value === 'monthly' || value === 'quarterly' || value === 'yearly';
}
