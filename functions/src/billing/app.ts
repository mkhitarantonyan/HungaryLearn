import express from 'express';
import { billingRouter } from './routes.js';

export const billingApp = express();
billingApp.disable('x-powered-by');

// Keep Lemon Squeezy isolated from the core/admin API. Firebase exposes the
// exact request bytes on req.rawBody, which the webhook handler verifies.
billingApp.use(billingRouter);

billingApp.use('/api', (_req, res) => res.status(404).json({ success: false, message: 'Billing API endpoint not found' }));
billingApp.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Unhandled billing API error', error instanceof Error ? error.message : 'unknown error');
  const candidateStatus = typeof error === 'object' && error && 'status' in error ? Number(error.status) : 500;
  const status = Number.isInteger(candidateStatus) && candidateStatus >= 400 && candidateStatus < 500 ? candidateStatus : 500;
  res.status(status).json({ success: false, message: status < 500 ? 'Некорректный запрос' : 'Внутренняя ошибка сервера' });
});
