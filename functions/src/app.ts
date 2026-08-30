import express from 'express';
import { authRouter } from './auth/routes.js';
import { billingRouter } from './billing/routes.js';
import { lessonRouter } from './lessons/routes.js';
import { progressRouter } from './progress/routes.js';
import { adminRouter } from './admin/routes.js';
import { audioRouter } from './audio/routes.js';

export const app = express();
app.disable('x-powered-by');

// Firebase preserves the exact incoming bytes on req.rawBody. The webhook route
// is registered before JSON middleware and verifies those bytes, never a re-serialization.
app.use(billingRouter);
app.use(audioRouter);
app.use(express.json({ limit: '256kb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'hungarylearn-api' }));
app.use(authRouter);
app.use(lessonRouter);
app.use(progressRouter);
app.use(adminRouter);

app.use('/api', (_req, res) => res.status(404).json({ success: false, message: 'API endpoint not found' }));
app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Unhandled API error', error instanceof Error ? error.message : 'unknown error');
  const candidateStatus = typeof error === 'object' && error && 'status' in error ? Number(error.status) : 500;
  const status = Number.isInteger(candidateStatus) && candidateStatus >= 400 && candidateStatus < 500 ? candidateStatus : 500;
  const message = status === 413 ? 'Запрос слишком большой' : status < 500 ? 'Некорректный запрос' : 'Внутренняя ошибка сервера';
  res.status(status).json({ success: false, message });
});
