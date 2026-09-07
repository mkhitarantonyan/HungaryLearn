import { defineSecret, defineString } from 'firebase-functions/params';
import { lemonTestMode } from '../runtime/params.js';

export { lemonTestMode };

export const lemonApiKey = defineSecret('LEMONSQUEEZY_API_KEY');
export const lemonWebhookSecret = defineSecret('LEMONSQUEEZY_WEBHOOK_SECRET');
export const lemonStoreId = defineString('LEMONSQUEEZY_STORE_ID', { default: '' });
// Compatibility for the Customer Portal only. Never use for new checkouts.
export const lemonLegacyVariantId = defineString('LEMONSQUEEZY_VARIANT_ID', { default: '' });
export const lemonVariantIdMonthly = defineString('LEMONSQUEEZY_VARIANT_ID_MONTHLY', { default: '' });
export const lemonVariantIdQuarterly = defineString('LEMONSQUEEZY_VARIANT_ID_QUARTERLY', { default: '' });
export const lemonVariantIdYearly = defineString('LEMONSQUEEZY_VARIANT_ID_YEARLY', { default: '' });
export const appUrl = defineString('APP_URL', {
  default: 'https://hungarylearn.web.app',
});
