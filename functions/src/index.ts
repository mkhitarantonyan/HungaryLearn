import { onRequest } from 'firebase-functions/v2/https';
import { app } from './app.js';

export const api = onRequest({
  region: 'europe-west1',
  memory: '256MiB',
  timeoutSeconds: 60,
  minInstances: 0,
  maxInstances: 5,
}, app);
