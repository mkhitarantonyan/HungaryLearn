import { defineBoolean, defineSecret, defineString } from 'firebase-functions/params';

export const lemonApiKey = defineSecret('LEMONSQUEEZY_API_KEY');
export const lemonWebhookSecret = defineSecret('LEMONSQUEEZY_WEBHOOK_SECRET');
export const lemonStoreId = defineString('LEMONSQUEEZY_STORE_ID');
export const lemonVariantId = defineString('LEMONSQUEEZY_VARIANT_ID');
export const appUrl = defineString('APP_URL');
// No default on purpose: production deploy must explicitly choose false and local
// test environments must explicitly choose true. Silent fallback to Test mode is unsafe.
export const lemonTestMode = defineBoolean('LEMONSQUEEZY_TEST_MODE');
