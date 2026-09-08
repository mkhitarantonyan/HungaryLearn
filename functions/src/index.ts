import { onRequest } from 'firebase-functions/v2/https';
import { billingApp } from './billing/app.js';
import { lemonApiKey, lemonWebhookSecret } from './billing/params.js';

export { api } from './apiFunction.js';

export const billing = onRequest({
  region: 'europe-west1',
  memory: '256MiB',
  timeoutSeconds: 60,
  minInstances: 0,
  maxInstances: 5,
  secrets: [lemonApiKey, lemonWebhookSecret],
}, billingApp);
