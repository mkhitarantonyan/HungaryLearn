import { Router } from 'express';
import { requireAuth, type AuthenticatedRequest } from '../auth/middleware.js';
import { evaluateAccessSources } from '../domain/entitlements.js';
import { getEntitlement } from '../firestore/repositories.js';
import { parseLessonNumber } from '../../../src/server/lessonAccess.ts';
import { loadServerLesson } from '../../../src/server/lessonLoader.ts';
import { asyncHandler } from '../http/asyncHandler.js';
import { lemonTestMode } from '../runtime/params.js';
import { organizationGrantsAccess } from '../organizations/service.js';
import { parseInstructionLanguage } from '../../../src/i18n/types.ts';
import { localizeServerLesson } from '../../../src/server/lessonLocalization.ts';

export const lessonRouter = Router();

lessonRouter.get('/api/lessons/:lessonNumber', requireAuth, asyncHandler<AuthenticatedRequest>(async (req, res) => {
  const lessonNumber = parseLessonNumber(req.params.lessonNumber);
  const language = parseInstructionLanguage(req.query.language);
  if (lessonNumber === null) {
    res.status(400).json({ success: false, message: 'Некорректный номер урока' });
    return;
  }
  if (lessonNumber <= 2) {
    const lesson = await loadServerLesson(lessonNumber);
    res.status(lesson ? 200 : 404).json(lesson ? { success: true, lesson: localizeServerLesson(lesson, language) } : { success: false, message: 'Урок не найден' });
    return;
  }
  const now = new Date();
  const [entitlement, organizationAccess] = await Promise.all([
    getEntitlement(req.auth!.uid),
    organizationGrantsAccess(req.auth!.uid, now),
  ]);
  if (!evaluateAccessSources(entitlement, organizationAccess.granted, now, lemonTestMode.value()).paidAccess) {
    res.status(403).json({ success: false, message: 'Для этого урока требуется действующая подписка' });
    return;
  }
  const lesson = await loadServerLesson(lessonNumber);
  res.status(lesson ? 200 : 404).json(lesson ? { success: true, lesson: localizeServerLesson(lesson, language) } : { success: false, message: 'Урок не найден' });
}));

