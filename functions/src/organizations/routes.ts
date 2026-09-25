import { Router } from 'express';
import { requireAdmin, requireAuth, type AuthenticatedRequest } from '../auth/middleware.js';
import {
  parseAssignUser,
  parseExtendLicense,
  parseKeyQuantity,
  parseLicenseCreate,
  parseOrganizationCreate,
  parseOrganizationUpdate,
  parseSeatCount,
  OrganizationValidationError,
} from '../../../src/server/organizationLicensing.ts';
import {
  assignExistingUser,
  changeSeatCount,
  createLicense,
  createOrganization,
  extendLicense,
  generateAccessKeys,
  getOrganizationDetail,
  licenseForAdmin,
  listOrganizations,
  OrganizationServiceError,
  redeemOrganizationKey,
  releaseSeat,
  revokeAccessKey,
  setLicenseStatus,
  updateOrganization,
} from './service.js';

export const organizationRouter = Router();

function sendError(res: import('express').Response, error: unknown, fallback: string): void {
  if (error instanceof OrganizationValidationError) {
    res.status(400).json({ success: false, message: error.message });
    return;
  }
  if (error instanceof OrganizationServiceError) {
    res.status(error.status).json({ success: false, message: error.message });
    return;
  }
  const code = typeof error === 'object' && error && 'code' in error ? String(error.code) : '';
  if (code === 'auth/user-not-found') {
    res.status(404).json({ success: false, message: 'Пользователь не найден.' });
    return;
  }
  console.error(fallback, error instanceof Error ? error.message : 'unknown error');
  res.status(500).json({ success: false, message: fallback });
}

organizationRouter.post('/api/auth/redeem-organization-key', requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const result = await redeemOrganizationKey(req.auth!.uid, req.body?.code);
    res.json({ success: true, organizationAccess: result });
  } catch (error) {
    sendError(res, error, 'Не удалось активировать код организации.');
  }
});

organizationRouter.use('/api/admin', requireAuth, requireAdmin);

organizationRouter.get('/api/admin/organizations', async (_req, res) => {
  try {
    res.json({ success: true, organizations: await listOrganizations() });
  } catch (error) {
    sendError(res, error, 'Не удалось загрузить организации.');
  }
});

organizationRouter.post('/api/admin/organizations', async (req: AuthenticatedRequest, res) => {
  try {
    const organization = await createOrganization(req.auth!.uid, parseOrganizationCreate(req.body));
    res.status(201).json({ success: true, organization });
  } catch (error) {
    sendError(res, error, 'Не удалось создать организацию.');
  }
});

organizationRouter.get('/api/admin/organizations/:organizationId', async (req, res) => {
  try {
    res.json({ success: true, ...(await getOrganizationDetail(req.params.organizationId)) });
  } catch (error) {
    sendError(res, error, 'Не удалось загрузить организацию.');
  }
});

organizationRouter.patch('/api/admin/organizations/:organizationId', async (req: AuthenticatedRequest, res) => {
  try {
    const organization = await updateOrganization(req.auth!.uid, req.params.organizationId, parseOrganizationUpdate(req.body));
    res.json({ success: true, organization });
  } catch (error) {
    sendError(res, error, 'Не удалось изменить организацию.');
  }
});

organizationRouter.post('/api/admin/organizations/:organizationId/licenses', async (req: AuthenticatedRequest, res) => {
  try {
    const license = await createLicense(req.auth!.uid, req.params.organizationId, parseLicenseCreate(req.body));
    res.status(201).json({ success: true, license });
  } catch (error) {
    sendError(res, error, 'Не удалось создать лицензию.');
  }
});

organizationRouter.get('/api/admin/licenses/:licenseId', async (req, res) => {
  try {
    res.json({ success: true, license: await licenseForAdmin(req.params.licenseId) });
  } catch (error) {
    sendError(res, error, 'Не удалось загрузить лицензию.');
  }
});

organizationRouter.patch('/api/admin/licenses/:licenseId/seats', async (req: AuthenticatedRequest, res) => {
  try {
    const license = await changeSeatCount(req.auth!.uid, req.params.licenseId, parseSeatCount(req.body));
    res.json({ success: true, license });
  } catch (error) {
    sendError(res, error, 'Не удалось изменить количество мест.');
  }
});

organizationRouter.post('/api/admin/licenses/:licenseId/extend', async (req: AuthenticatedRequest, res) => {
  try {
    await extendLicense(req.auth!.uid, req.params.licenseId, parseExtendLicense(req.body));
    res.json({ success: true, license: await licenseForAdmin(req.params.licenseId) });
  } catch (error) {
    sendError(res, error, 'Не удалось продлить лицензию.');
  }
});

for (const action of ['pause', 'resume', 'cancel'] as const) {
  organizationRouter.post(`/api/admin/licenses/:licenseId/${action}`, async (req: AuthenticatedRequest, res) => {
    try {
      await setLicenseStatus(req.auth!.uid, req.params.licenseId, action);
      res.json({ success: true, license: await licenseForAdmin(req.params.licenseId) });
    } catch (error) {
      sendError(res, error, `Не удалось выполнить действие ${action}.`);
    }
  });
}

organizationRouter.post('/api/admin/licenses/:licenseId/keys', async (req: AuthenticatedRequest, res) => {
  try {
    const keys = await generateAccessKeys(req.auth!.uid, req.params.licenseId, parseKeyQuantity(req.body));
    res.status(201).json({ success: true, keys, shownOnce: true });
  } catch (error) {
    sendError(res, error, 'Не удалось создать ключи.');
  }
});

organizationRouter.post('/api/admin/keys/:keyId/revoke', async (req: AuthenticatedRequest, res) => {
  try {
    await revokeAccessKey(req.auth!.uid, req.params.keyId);
    res.json({ success: true });
  } catch (error) {
    sendError(res, error, 'Не удалось отозвать ключ.');
  }
});

organizationRouter.post('/api/admin/licenses/:licenseId/assign-user', async (req: AuthenticatedRequest, res) => {
  try {
    await assignExistingUser(req.auth!.uid, req.params.licenseId, parseAssignUser(req.body));
    res.status(201).json({ success: true });
  } catch (error) {
    sendError(res, error, 'Не удалось назначить пользователя.');
  }
});

organizationRouter.post('/api/admin/seats/:seatId/release', async (req: AuthenticatedRequest, res) => {
  try {
    await releaseSeat(req.auth!.uid, req.params.seatId);
    res.json({ success: true });
  } catch (error) {
    sendError(res, error, 'Не удалось освободить место.');
  }
});
