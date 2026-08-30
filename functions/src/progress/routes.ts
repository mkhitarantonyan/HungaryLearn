import { Router } from 'express';
import { FieldValue } from 'firebase-admin/firestore';
import { requireAuth, type AuthenticatedRequest } from '../auth/middleware.js';
import { firestore } from '../firebase/admin.js';
import { getProgress } from '../firestore/repositories.js';
import { mergeProgressState, replaceReviewCard, type ProgressState } from './model.js';
import { asyncHandler } from '../http/asyncHandler.js';

type Grade = 'again' | 'hard' | 'good' | 'easy';

function validStringArray(value: unknown, max: number): string[] | null {
  if (!Array.isArray(value) || value.length > max || value.some((item) => typeof item !== 'string' || item.length > 100)) return null;
  return [...new Set(value)];
}

function gradeCard(cardId: string, lessonNumber: number, previous: Record<string, unknown> | undefined, grade: Grade): Record<string, unknown> {
  const now = new Date();
  let intervalDays = typeof previous?.intervalDays === 'number' ? previous.intervalDays : 0;
  let easeFactor = typeof previous?.easeFactor === 'number' ? previous.easeFactor : 2.5;
  let reps = typeof previous?.reps === 'number' ? previous.reps : 0;
  if (grade === 'again') { intervalDays = 0; reps = 0; easeFactor = Math.max(1.3, easeFactor - 0.2); }
  if (grade === 'hard') { intervalDays = Math.max(1, Math.round(intervalDays * 1.2)) || 1; reps += 1; easeFactor = Math.max(1.3, easeFactor - 0.15); }
  if (grade === 'good') { intervalDays = intervalDays === 0 ? 1 : Math.round(intervalDays * easeFactor); reps += 1; }
  if (grade === 'easy') { intervalDays = intervalDays === 0 ? 4 : Math.round(intervalDays * easeFactor * 1.3); reps += 1; easeFactor += 0.15; }
  const due = new Date(now);
  if (grade === 'again') due.setMinutes(due.getMinutes() + 10);
  else due.setDate(due.getDate() + intervalDays);
  return { cardId, lessonNumber, intervalDays, easeFactor, reps, dueDate: due.toISOString(), lastReviewedAt: now.toISOString() };
}

export const progressRouter = Router();

progressRouter.get('/api/user/progress', requireAuth, asyncHandler<AuthenticatedRequest>(async (req, res) => {
  res.json({ success: true, progress: await getProgress(req.auth!.uid) });
}));

progressRouter.post('/api/user/progress', requireAuth, asyncHandler<AuthenticatedRequest>(async (req, res) => {
  const viewedSlides = req.body?.viewedSlides === undefined ? undefined : validStringArray(req.body.viewedSlides, 5_000);
  if (req.body?.viewedSlides !== undefined && !viewedSlides) {
    res.status(400).json({ success: false, message: 'Некорректный список слайдов' });
    return;
  }
  const quiz = req.body?.quiz as { lessonNumber?: unknown; score?: unknown; total?: unknown } | undefined;
  if (quiz && (!Number.isInteger(quiz.lessonNumber) || !Number.isInteger(quiz.score) || !Number.isInteger(quiz.total)
    || Number(quiz.lessonNumber) < 1 || Number(quiz.lessonNumber) > 28 || Number(quiz.total) < 1
    || Number(quiz.score) < 0 || Number(quiz.score) > Number(quiz.total))) {
    res.status(400).json({ success: false, message: 'Некорректный результат теста' });
    return;
  }
  const ref = firestore.collection('progress').doc(req.auth!.uid);
  await firestore.runTransaction(async (transaction) => {
    const snapshot = await transaction.get(ref);
    const existing = snapshot.data() || {};
    const current: ProgressState = {
      viewedSlides: Array.isArray(existing.viewedSlides) ? existing.viewedSlides : [],
      passedQuizzes: Array.isArray(existing.passedQuizzes) ? existing.passedQuizzes : [],
      reviewCards: existing.reviewCards && typeof existing.reviewCards === 'object' ? existing.reviewCards : {},
      ...(typeof existing.customNotes === 'string' ? { customNotes: existing.customNotes } : {}),
    };
    const merged = mergeProgressState(current, {
      ...(viewedSlides ? { viewedSlides } : {}),
      ...(quiz ? { quiz: { lessonNumber: Number(quiz.lessonNumber), score: Number(quiz.score), total: Number(quiz.total) } } : {}),
    });
    transaction.set(ref, {
      ...merged,
      updatedAt: FieldValue.serverTimestamp(),
    }, { merge: true });
  });
  res.json({ success: true });
}));

progressRouter.post('/api/user/review/grade', requireAuth, asyncHandler<AuthenticatedRequest>(async (req, res) => {
  const cardId = typeof req.body?.cardId === 'string' ? req.body.cardId.trim() : '';
  const grade = req.body?.grade as Grade;
  if (!cardId || cardId.length > 200 || !['again', 'hard', 'good', 'easy'].includes(grade)) {
    res.status(400).json({ success: false, message: 'Некорректная оценка карточки' });
    return;
  }
  const lessonNumberMatch = /^l(\d+)_/.exec(cardId);
  const lessonNumber = lessonNumberMatch ? Number(lessonNumberMatch[1]) : 0;
  const ref = firestore.collection('progress').doc(req.auth!.uid);
  await firestore.runTransaction(async (transaction) => {
    const snapshot = await transaction.get(ref);
    const data = snapshot.data() || {};
    const current: ProgressState = {
      viewedSlides: Array.isArray(data.viewedSlides) ? data.viewedSlides : [],
      passedQuizzes: Array.isArray(data.passedQuizzes) ? data.passedQuizzes : [],
      reviewCards: data.reviewCards && typeof data.reviewCards === 'object' ? data.reviewCards : {},
      ...(typeof data.customNotes === 'string' ? { customNotes: data.customNotes } : {}),
    };
    const next = replaceReviewCard(current, cardId, gradeCard(cardId, lessonNumber, current.reviewCards[cardId] as Record<string, unknown> | undefined, grade));
    transaction.set(ref, {
      ...next,
      updatedAt: FieldValue.serverTimestamp(),
    }, { merge: true });
  });
  res.json({ success: true });
}));
