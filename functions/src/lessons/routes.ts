import { Router } from 'express';
import { requireAuth, type AuthenticatedRequest } from '../auth/middleware.js';
import { hasPaidAccess } from '../domain/entitlements.js';
import { getEntitlement } from '../firestore/repositories.js';
import { parseLessonNumber } from '../../../src/server/lessonAccess.ts';
import { loadServerLesson } from '../../../src/server/lessonLoader.ts';
import { asyncHandler } from '../http/asyncHandler.js';
import { lemonTestMode } from '../billing/params.js';

export const lessonRouter = Router();

lessonRouter.get('/api/lessons/:lessonNumber', requireAuth, asyncHandler<AuthenticatedRequest>(async (req, res) => {
  const lessonNumber = parseLessonNumber(req.params.lessonNumber);
  if (lessonNumber === null) {
    res.status(400).json({ success: false, message: 'Некорректный номер урока' });
    return;
  }
  if (lessonNumber <= 2) {
    const lesson = await loadServerLesson(lessonNumber);
    res.status(lesson ? 200 : 404).json(lesson ? { success: true, lesson } : { success: false, message: 'Урок не найден' });
    return;
  }
  const entitlement = await getEntitlement(req.auth!.uid);
  if (!hasPaidAccess(entitlement, new Date(), lemonTestMode.value())) {
    res.status(403).json({ success: false, message: 'Для этого урока требуется действующая подписка' });
    return;
  }
  const lesson = await loadServerLesson(lessonNumber);
  res.status(lesson ? 200 : 404).json(lesson ? { success: true, lesson } : { success: false, message: 'Урок не найден' });
}));
