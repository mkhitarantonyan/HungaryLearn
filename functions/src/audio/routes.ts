import { createHash, randomUUID } from 'node:crypto';
import { Router, json } from 'express';
import { FieldValue } from 'firebase-admin/firestore';
import { requireAdmin, requireAuth, type AuthenticatedRequest } from '../auth/middleware.js';
import { firestore, storage } from '../firebase/admin.js';
import { validateAudioDataUrl } from './validation.js';
import { asyncHandler } from '../http/asyncHandler.js';

function keyId(key: string): string { return createHash('sha256').update(key).digest('hex'); }
function normalizedKey(value: unknown): string { return typeof value === 'string' ? value.trim().toLowerCase() : ''; }

export const audioRouter = Router();

audioRouter.get('/api/audio-registry', asyncHandler(async (_req, res) => {
  const snapshot = await firestore.collection('audioOverrides').limit(2_000).get();
  const audio: Record<string, { url: string }> = {};
  for (const doc of snapshot.docs) {
    const key = doc.data().key;
    if (typeof key === 'string') audio[key] = { url: `/api/audio-file/${doc.id}` };
  }
  res.json({ success: true, audio });
}));

audioRouter.get('/api/audio-file/:id', asyncHandler(async (req, res) => {
  if (!/^[a-f0-9]{64}$/.test(req.params.id)) { res.status(404).end(); return; }
  const snapshot = await firestore.collection('audioOverrides').doc(req.params.id).get();
  const data = snapshot.data();
  if (!data || typeof data.storagePath !== 'string') { res.status(404).end(); return; }
  try {
    const file = storage.bucket().file(data.storagePath);
    const [metadata] = await file.getMetadata();
    res.set('Content-Type', metadata.contentType || 'audio/mpeg');
    res.set('Cache-Control', 'private, max-age=3600');
    file.createReadStream().on('error', () => res.destroy()).pipe(res);
  } catch { res.status(404).end(); }
}));

audioRouter.post('/api/admin/audio', json({ limit: '15mb' }), requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
  const rawKeys: unknown[] = Array.isArray(req.body?.keys) ? req.body.keys : [];
  const keys: string[] = [...new Set(rawKeys.map(normalizedKey).filter((key): key is string => Boolean(key)))];
  if (keys.length === 0 || keys.length > 100 || keys.some((key) => key.length > 200)) {
    res.status(400).json({ success: false, message: 'Некорректный список аудио-ключей' });
    return;
  }
  try {
    const upload = validateAudioDataUrl(req.body?.dataUrl || '');
    const storagePath = `admin-audio-overrides/${randomUUID()}${upload.extension}`;
    await storage.bucket().file(storagePath).save(upload.buffer, {
      resumable: false,
      contentType: upload.mimeType,
      metadata: { cacheControl: 'private, max-age=3600' },
    });
    const batch = firestore.batch();
    for (const key of keys) batch.set(firestore.collection('audioOverrides').doc(keyId(key)), {
      key, storagePath, mimeType: upload.mimeType, updatedBy: req.auth!.uid, updatedAt: FieldValue.serverTimestamp(),
    });
    await batch.commit();
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, message: error instanceof Error ? error.message : 'Не удалось загрузить аудио' });
  }
});

audioRouter.delete('/api/admin/audio/:key', requireAuth, requireAdmin, asyncHandler(async (req, res) => {
  const key = normalizedKey(req.params.key);
  const ref = firestore.collection('audioOverrides').doc(keyId(key));
  const snapshot = await ref.get();
  const storagePath = snapshot.data()?.storagePath;
  await ref.delete();
  if (typeof storagePath === 'string') {
    const remaining = await firestore.collection('audioOverrides').where('storagePath', '==', storagePath).limit(1).get();
    if (remaining.empty) await storage.bucket().file(storagePath).delete({ ignoreNotFound: true });
  }
  res.json({ success: true });
}));

audioRouter.get('/api/word-overrides', asyncHandler(async (_req, res) => {
  const snapshot = await firestore.collection('wordOverrides').limit(2_000).get();
  res.json({ success: true, overrides: snapshot.docs.map((doc) => doc.data()) });
}));

audioRouter.post('/api/admin/word-overrides', json({ limit: '256kb' }), requireAuth, requireAdmin, asyncHandler<AuthenticatedRequest>(async (req, res) => {
  const originalText = typeof req.body?.originalText === 'string' ? req.body.originalText.trim() : '';
  const customText = typeof req.body?.customText === 'string' ? req.body.customText.trim() : '';
  if (!originalText || originalText.length > 200 || customText.length > 500) {
    res.status(400).json({ success: false, message: 'Некорректное переопределение слова' }); return;
  }
  const key = normalizedKey(originalText);
  await firestore.collection('wordOverrides').doc(keyId(key)).set({ originalText, customText, updatedBy: req.auth!.uid, updatedAt: FieldValue.serverTimestamp() });
  res.json({ success: true });
}));

audioRouter.delete('/api/admin/word-overrides/:key', requireAuth, requireAdmin, asyncHandler(async (req, res) => {
  await firestore.collection('wordOverrides').doc(keyId(normalizedKey(req.params.key))).delete();
  res.json({ success: true });
}));
