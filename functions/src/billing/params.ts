import { defineSecret, defineString } from 'firebase-functions/params';
import { lemonTestMode } from '../runtime/params.js';

export { lemonTestMode };

export const lemonApiKey = defineSecret('LEMONSQUEEZY_API_KEY');
export const lemonWebhookSecret = defineSecret('LEMONSQUEEZY_WEBHOOK_SECRET');
export const lemonStoreId = defineString('LEMONSQUEEZY_STORE_ID', { default: '' });
export const lemonVariantId = defineString('LEMONSQUEEZY_VARIANT_ID', { default: '' });
export const appUrl = defineString('APP_URL', {
  default: 'https://hungarylearn.web.app',
});
