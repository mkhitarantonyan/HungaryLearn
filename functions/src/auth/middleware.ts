import type { NextFunction, Request, Response } from 'express';
import type { DecodedIdToken } from 'firebase-admin/auth';
import { adminAuth } from '../firebase/admin.js';

export interface AuthenticatedRequest extends Request {
  auth?: DecodedIdToken;
}

export function isAdminToken(token: unknown): boolean {
  return Boolean(token && typeof token === 'object' && 'admin' in token && (token as { admin?: unknown }).admin === true);
}

function bearerToken(req: Request): string | null {
  const header = req.header('authorization');
  const match = /^Bearer\s+(.+)$/i.exec(header || '');
  return match?.[1] || null;
}

export async function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
  const token = bearerToken(req);
  if (!token) {
    res.status(401).json({ success: false, message: 'Требуется авторизация' });
    return;
  }
  try {
    req.auth = await adminAuth.verifyIdToken(token, true);
    next();
  } catch {
    res.status(401).json({ success: false, message: 'Сессия истекла. Войдите снова.' });
  }
}

export async function optionalAuth(req: AuthenticatedRequest, _res: Response, next: NextFunction): Promise<void> {
  const token = bearerToken(req);
  if (!token) {
    next();
    return;
  }
  try {
    req.auth = await adminAuth.verifyIdToken(token, true);
  } catch {
    req.auth = undefined;
  }
  next();
}

export function requireAdmin(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
  if (!isAdminToken(req.auth)) {
    res.status(403).json({ success: false, message: 'Недостаточно прав' });
    return;
  }
  next();
}
