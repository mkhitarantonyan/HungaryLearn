import { LemonConfigurationError, normalizeLemonConfig, type LemonConfig, type LemonBaseConfig } from './lemon.js';

// The server owns this allowlist; no browser-supplied resource IDs are accepted.
export type BillingPlanKey = 'monthly' | 'quarterly' | 'yearly';
export type PlanVariantIds = Record<BillingPlanKey, string>;

export function checkoutPlan(body: unknown): BillingPlanKey | null {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;
  const fields = Object.keys(body);
  if (fields.length !== 1 || fields[0] !== 'plan') return null;
  const plan = (body as { plan?: unknown }).plan;
  return plan === 'monthly' || plan === 'quarterly' || plan === 'yearly' ? plan : null;
}

export function configuredVariantIds(variants: PlanVariantIds): string[] {
  return [variants.monthly, variants.quarterly, variants.yearly]
    .map(id => id.trim()).filter(id => /^[1-9]\d+$/.test(id) && id !== '1');
}

export function checkoutConfig(base: LemonBaseConfig, variants: PlanVariantIds, plan: BillingPlanKey): LemonConfig {
  const parameter = `LEMONSQUEEZY_VARIANT_ID_${plan.toUpperCase()}`;
  try {
    return normalizeLemonConfig({ ...base, variantId: variants[plan] });
  } catch (error) {
    if (error instanceof LemonConfigurationError && error.parameter === 'LEMONSQUEEZY_VARIANT_ID') {
      throw new LemonConfigurationError(parameter, 'Этот тариф пока недоступен для оформления.');
    }
    throw error;
  }
}
