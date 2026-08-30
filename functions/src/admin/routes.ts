import { Router } from 'express';
import { FieldValue, Timestamp, type DocumentData } from 'firebase-admin/firestore';
import { requireAdmin, requireAuth, type AuthenticatedRequest } from '../auth/middleware.js';
import { firestore } from '../firebase/admin.js';
import { parseAdminUserListQuery, parsePrivilegeUpdate } from '../../../src/server/adminValidation.ts';
import { loadServerLesson } from '../../../src/server/lessonLoader.ts';
import { asyncHandler } from '../http/asyncHandler.js';

export const adminRouter = Router();
adminRouter.use('/api/admin', requireAuth, requireAdmin);

function iso(value: unknown): string {
  if (value instanceof Timestamp) return value.toDate().toISOString();
  if (typeof value === 'string' && Number.isFinite(Date.parse(value))) return new Date(value).toISOString();
  return new Date(0).toISOString();
}

function entitlementSummary(entitlement: DocumentData): Record<string, unknown> {
  const accessUntil = iso(entitlement.accessUntil);
  return {
    subscriptionStatus: entitlement.subscriptionStatus || 'unpaid',
    accessUntil: accessUntil === new Date(0).toISOString() ? undefined : accessUntil,
    isPrivileged: entitlement.isPrivileged === true,
    provider: entitlement.provider === 'lemonsqueezy' ? 'lemonsqueezy' : null,
    lemonCustomerId: typeof entitlement.lemonCustomerId === 'string' ? entitlement.lemonCustomerId : null,
    lemonSubscriptionId: typeof entitlement.lemonSubscriptionId === 'string' ? entitlement.lemonSubscriptionId : null,
    lemonVariantId: typeof entitlement.lemonVariantId === 'string' ? entitlement.lemonVariantId : null,
    testMode: entitlement.testMode === true,
  };
}

adminRouter.get('/api/admin/users', async (req, res) => {
  try {
    const parsed = parseAdminUserListQuery(req.query);
    let query = firestore.collection('users').orderBy(parsed.sort, parsed.direction).offset(parsed.offset).limit(parsed.limit);
    if (parsed.search) {
      if (parsed.sort !== 'email') {
        res.status(400).json({ success: false, message: 'Поиск требует сортировки по email' }); return;
      }
      const normalized = parsed.search.toLowerCase();
      query = firestore.collection('users').orderBy('email', parsed.direction)
        .startAt(normalized).endAt(`${normalized}\uf8ff`).offset(parsed.offset).limit(parsed.limit);
    }
    const [snapshot, countSnapshot] = await Promise.all([query.get(), firestore.collection('users').count().get()]);
    const users = await Promise.all(snapshot.docs.map(async (doc) => {
      const profile = doc.data();
      const entitlement = (await firestore.collection('entitlements').doc(doc.id).get()).data() || {};
      return {
        id: doc.id,
        email: profile.email || '',
        createdAt: iso(profile.createdAt),
        ...entitlementSummary(entitlement),
      };
    }));
    res.json({ users, pagination: { total: countSnapshot.data().count, limit: parsed.limit, offset: parsed.offset } });
  } catch (error) {
    res.status(400).json({ success: false, message: error instanceof Error ? error.message : 'Некорректный запрос' });
  }
});

adminRouter.patch('/api/admin/users/:uid/privilege', async (req: AuthenticatedRequest, res) => {
  try {
    const privileged = parsePrivilegeUpdate(req.body);
    const ref = firestore.collection('entitlements').doc(req.params.uid);
    await ref.set({
      isPrivileged: privileged,
      updatedByAdmin: req.auth!.uid,
      updatedAt: FieldValue.serverTimestamp(),
    }, { merge: true });
    const profile = (await firestore.collection('users').doc(req.params.uid).get()).data();
    const entitlement = (await ref.get()).data() || {};
    res.json({ user: {
      id: req.params.uid,
      email: profile?.email || '',
      createdAt: iso(profile?.createdAt),
      ...entitlementSummary(entitlement),
    } });
  } catch (error) {
    res.status(400).json({ success: false, message: error instanceof Error ? error.message : 'Некорректный запрос' });
  }
});

adminRouter.get('/api/admin/lessons', asyncHandler(async (_req, res) => {
  const loaded = await Promise.all(Array.from({ length: 28 }, (_, index) => loadServerLesson(index + 1)));
  const lessons = loaded.filter((lesson) => lesson !== null).map(({ slides: _slides, vocabulary: _vocabulary, quiz: _quiz, objectives: _objectives, ...meta }) => meta);
  res.json({ lessons });
}));

adminRouter.get('/api/admin/lessons/:lessonNumber', asyncHandler(async (req, res) => {
  const lessonNumber = Number(req.params.lessonNumber);
  if (!Number.isInteger(lessonNumber) || lessonNumber < 1 || lessonNumber > 28) {
    res.status(400).json({ success: false, message: 'Некорректный номер урока' }); return;
  }
  const lesson = await loadServerLesson(lessonNumber);
  res.status(lesson ? 200 : 404).json(lesson ? { success: true, lesson } : { success: false, message: 'Урок не найден' });
}));
