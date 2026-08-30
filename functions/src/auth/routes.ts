import { Router } from 'express';
import { requireAuth, type AuthenticatedRequest } from './middleware.js';
import { ensureUserProfile, getEntitlement } from '../firestore/repositories.js';
import { hasPaidAccess } from '../domain/entitlements.js';
import { asyncHandler } from '../http/asyncHandler.js';

export const authRouter = Router();

authRouter.get('/api/auth/me', requireAuth, asyncHandler<AuthenticatedRequest>(async (req, res) => {
  const uid = req.auth!.uid;
  const email = req.auth!.email || '';
  await ensureUserProfile(uid, email);
  const entitlement = await getEntitlement(uid);
  res.json({
    success: true,
    user: {
      id: uid,
      email,
      createdAt: req.auth!.auth_time ? new Date(req.auth!.auth_time * 1000).toISOString() : new Date().toISOString(),
      subscriptionStatus: entitlement?.subscriptionStatus || 'unpaid',
      accessUntil: entitlement?.accessUntil || null,
      isPrivileged: entitlement?.isPrivileged === true,
      provider: entitlement?.provider || null,
      cancelAtPeriodEnd: entitlement?.cancelAtPeriodEnd === true,
      paidAccess: hasPaidAccess(entitlement),
    },
  });
}));

authRouter.get('/api/admin/verify', requireAuth, (req: AuthenticatedRequest, res) => {
  const isAdmin = req.auth?.admin === true;
  res.status(isAdmin ? 200 : 403).json({ success: isAdmin, isAdmin });
});
