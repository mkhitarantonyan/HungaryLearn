import { defineBoolean } from 'firebase-functions/params';

// Core API may need to distinguish TEST/LIVE entitlements,
// but it must never import Lemon API secrets.
export const lemonTestMode = defineBoolean('LEMONSQUEEZY_TEST_MODE', {
  default: false,
});
