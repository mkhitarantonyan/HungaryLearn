import { Router } from 'express';
import { requireAuth, type AuthenticatedRequest } from './middleware.js';
import { ensureUserProfile, getEntitlement } from '../firestore/repositories.js';
import { evaluateAccessSources } from '../domain/entitlements.js';
import { asyncHandler } from '../http/asyncHandler.js';
import { lemonTestMode } from '../runtime/params.js';
import {
  ActiveSubscriptionError,
  deleteUserAccount,
  isAccountDeletionMarked,
} from './accountDeletion.js';
import { organizationGrantsAccess } from '../organizations/service.js';

export const authRouter = Router();

authRouter.get('/api/auth/me', requireAuth, asyncHandler<AuthenticatedRequest>(async (req, res) => {
  const uid = req.auth!.uid;
  const email = req.auth!.email || '';
  if (await isAccountDeletionMarked(uid)) {
    res.status(410).json({ success: false, message: 'Аккаунт удалён.' });
    return;
  }
  await ensureUserProfile(uid, email);
  const [entitlement, organizationResult] = await Promise.all([
    getEntitlement(uid),
    organizationGrantsAccess(uid),
  ]);
  const expectedTestMode = lemonTestMode.value();
  const billingEnvironmentMatches = entitlement?.provider !== 'lemonsqueezy' || entitlement.testMode === expectedTestMode;
  const accessSources = evaluateAccessSources(entitlement, organizationResult.granted, new Date(), expectedTestMode);
  res.json({
    success: true,
    user: {
      id: uid,
      email,
      emailVerified: req.auth!.email_verified === true,
      createdAt: req.auth!.auth_time ? new Date(req.auth!.auth_time * 1000).toISOString() : new Date().toISOString(),
      // Do not present stale Test-mode billing as an active Live subscription.
      subscriptionStatus: billingEnvironmentMatches ? (entitlement?.subscriptionStatus || 'unpaid') : 'unpaid',
      accessUntil: billingEnvironmentMatches ? (entitlement?.accessUntil || null) : null,
      isPrivileged: entitlement?.isPrivileged === true,
      provider: billingEnvironmentMatches ? (entitlement?.provider || null) : null,
      cancelAtPeriodEnd: billingEnvironmentMatches && entitlement?.cancelAtPeriodEnd === true,
      paidAccess: accessSources.paidAccess,
      accessSources,
      organizationAccess: organizationResult.organization,
    },
  });
}));

authRouter.delete('/api/auth/account', requireAuth, async (req: AuthenticatedRequest, res) => {
  const authTime = Number(req.auth?.auth_time);
  const authAgeSeconds = Math.floor(Date.now() / 1000) - authTime;
  if (!Number.isFinite(authTime) || authAgeSeconds > 300) {
    res.status(401).json({ success: false, message: 'Для удаления аккаунта снова введите пароль.' });
    return;
  }
  try {
    const result = await deleteUserAccount(req.auth!.uid);
    res.json({
      success: true,
      deleted: ['firebaseAuth', 'profile', 'progress', 'settings', 'reviewCards', 'entitlement', 'organizationSeatLink'],
      retainedBillingRecords: result.retainedBillingRecords,
    });
  } catch (error) {
    if (error instanceof ActiveSubscriptionError) {
      res.status(409).json({
        success: false,
        message: 'Сначала отмените активную подписку в Customer Portal, затем повторите удаление аккаунта.',
      });
      return;
    }
    console.error('Account deletion failed', error instanceof Error ? error.message : 'unknown error');
    res.status(500).json({ success: false, message: 'Не удалось удалить аккаунт. Попробуйте позже.' });
  }
});

authRouter.get('/api/admin/verify', requireAuth, (req: AuthenticatedRequest, res) => {
  const isAdmin = req.auth?.admin === true;
  res.status(isAdmin ? 200 : 403).json({ success: isAdmin, isAdmin });
});

