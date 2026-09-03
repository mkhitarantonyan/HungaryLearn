import { Router, type Request, type Response } from 'express';
import { FieldValue } from 'firebase-admin/firestore';
import { requireAuth, type AuthenticatedRequest } from '../auth/middleware.js';
import { firestore } from '../firebase/admin.js';
import { getEntitlement } from '../firestore/repositories.js';
import {
  createCheckout,
  getCustomerPortalUrl,
  LemonApiError,
  LemonConfigurationError,
  normalizeLemonConfig,
  retrieveSubscription,
  type LemonConfig,
} from './lemon.js';
import {
  buildWebhookUpdate,
  getWebhookEventName,
  getWebhookFirebaseUid,
  getWebhookSubscriptionId,
  parseWebhook,
  verifyLemonSignature,
  webhookHash,
} from './webhook.js';
import { appUrl, lemonApiKey, lemonStoreId, lemonTestMode, lemonVariantId, lemonWebhookSecret } from './params.js';

function config(): LemonConfig {
  return normalizeLemonConfig({
    apiKey: lemonApiKey.value(),
    storeId: lemonStoreId.value(),
    variantId: lemonVariantId.value(),
    appUrl: appUrl.value(),
    testMode: lemonTestMode.value(),
  });
}

function safeCheckoutFailure(error: unknown): {
  log: Record<string, unknown>;
  response: { success: false; message: string; providerStatus?: number };
} {
  if (error instanceof LemonApiError) {
    return {
      log: { provider: 'Lemon Squeezy', status: error.status, title: error.title, detail: error.detail },
      response: {
        success: false,
        providerStatus: error.status,
        message: `Lemon Squeezy отклонил создание checkout: ${error.title}. ${error.detail}`,
      },
    };
  }
  if (error instanceof LemonConfigurationError) {
    return {
      log: { provider: 'Lemon Squeezy', parameter: error.parameter, detail: error.message },
      response: { success: false, message: `Некорректная конфигурация оплаты: ${error.parameter}.` },
    };
  }
  return {
    log: { provider: 'Lemon Squeezy', detail: error instanceof Error ? error.message : 'unknown error' },
    response: { success: false, message: 'Оплата временно недоступна. Попробуйте позже.' },
  };
}

export const billingRouter = Router();

billingRouter.post('/api/billing/create-checkout', requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const email = req.auth?.email;
    if (!email) {
      res.status(400).json({ success: false, message: 'У аккаунта отсутствует e-mail' });
      return;
    }
    const lemonConfig = config();
    const existing = await getEntitlement(req.auth!.uid);
    const existingSubscriptionBlocksCheckout = existing?.provider === 'lemonsqueezy'
      && existing.testMode === lemonConfig.testMode
      && Boolean(existing.lemonSubscriptionId)
      && ['active', 'cancelled', 'past_due', 'paused'].includes(existing.subscriptionStatus);
    if (existingSubscriptionBlocksCheckout) {
      res.status(409).json({ success: false, message: 'У аккаунта уже есть подписка. Используйте управление подпиской.' });
      return;
    }
    const url = await createCheckout(lemonConfig, req.auth!.uid, email);
    res.json({ success: true, url });
  } catch (error) {
    const failure = safeCheckoutFailure(error);
    console.error('Checkout creation failed', failure.log);
    res.status(503).json(failure.response);
  }
});

billingRouter.post('/api/billing/customer-portal', requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const lemonConfig = config();
    const entitlement = await getEntitlement(req.auth!.uid);
    if (entitlement?.provider !== 'lemonsqueezy' || !entitlement.lemonSubscriptionId
      || entitlement.testMode !== lemonConfig.testMode) {
      res.status(404).json({ success: false, message: 'Подписка Lemon Squeezy не найдена' });
      return;
    }
    const url = await getCustomerPortalUrl(lemonConfig, entitlement.lemonSubscriptionId);
    res.json({ success: true, url });
  } catch (error) {
    console.error('Customer portal failed', error instanceof Error ? error.message : 'unknown error');
    res.status(503).json({ success: false, message: 'Управление подпиской временно недоступно.' });
  }
});

interface FirebaseRawRequest extends Request { rawBody?: Buffer }

export async function lemonWebhookHandler(req: FirebaseRawRequest, res: Response): Promise<void> {
  const rawBody = req.rawBody;
  if (!rawBody || !Buffer.isBuffer(rawBody)) {
    res.status(400).json({ success: false, message: 'Raw request body is required' });
    return;
  }
  if (!verifyLemonSignature(rawBody, req.header('x-signature'), lemonWebhookSecret.value())) {
    res.status(401).json({ success: false, message: 'Invalid signature' });
    return;
  }
  try {
    const payload = parseWebhook(rawBody);
    const eventName = getWebhookEventName(payload);
    const subscriptionId = getWebhookSubscriptionId(payload);
    let firebaseUid = getWebhookFirebaseUid(payload);

    // Lemon documents checkout custom_data for Order/Subscription objects, but
    // recurring payment events use Subscription Invoice objects. If a payment
    // webhook ever arrives without custom_data, recover the owner from the
    // subscription mapping written by the earlier subscription event. This also
    // makes retries safe when Lemon changes which invoice fields are echoed.
    if (!firebaseUid && subscriptionId) {
      const mapped = await firestore.collection('billingSubscriptions').doc(subscriptionId).get();
      const mappedUid = mapped.data()?.firebaseUid;
      if (typeof mappedUid === 'string' && mappedUid.trim()) firebaseUid = mappedUid.trim();
    }

    let hydrated: Record<string, unknown> | undefined;
    if (payload.data?.type !== 'subscriptions' && subscriptionId && eventName !== 'order_refunded') {
      hydrated = await retrieveSubscription(config(), subscriptionId);
    }
    const update = buildWebhookUpdate(
      payload,
      lemonStoreId.value(),
      lemonVariantId.value(),
      lemonTestMode.value(),
      hydrated,
      firebaseUid,
    );
    if (!update) {
      res.status(200).json({ success: true, ignored: true });
      return;
    }
    const eventId = webhookHash(rawBody);
    const eventRef = firestore.collection('billingWebhookEvents').doc(eventId);
    let duplicate = false;
    await firestore.runTransaction(async (transaction) => {
      const existing = await transaction.get(eventRef);
      if (existing.exists) {
        duplicate = true;
        return;
      }
      const entitlementRef = firestore.collection('entitlements').doc(update.uid);
      const entitlementSnapshot = await transaction.get(entitlementRef);
      const existingEntitlement = entitlementSnapshot.data() || {};
      const privileged = existingEntitlement.isPrivileged === true;
      const entitlementWrite: Record<string, unknown> = {
        ...update.entitlement,
        isPrivileged: privileged,
        updatedAt: FieldValue.serverTimestamp(),
      };
      // Some Lemon event payloads (notably order refunds) do not carry every
      // subscription/customer identifier. Never erase a known billing identity
      // merely because a later event omitted that field. Null accessUntil/status
      // values remain meaningful and are intentionally preserved.
      for (const key of ['lemonCustomerId', 'lemonSubscriptionId', 'lemonOrderId', 'lemonVariantId']) {
        if (entitlementWrite[key] == null && existingEntitlement[key] != null) delete entitlementWrite[key];
      }
      transaction.set(entitlementRef, entitlementWrite, { merge: true });
      if (update.subscriptionId && update.subscription) {
        transaction.set(firestore.collection('billingSubscriptions').doc(update.subscriptionId), {
          ...update.subscription,
          updatedAt: FieldValue.serverTimestamp(),
        }, { merge: true });
      }
      transaction.create(eventRef, {
        eventName: update.eventName,
        objectId: update.objectId,
        receivedAt: FieldValue.serverTimestamp(),
        processedAt: FieldValue.serverTimestamp(),
      });
    });
    res.status(200).json({ success: true, duplicate });
  } catch (error) {
    console.error('Lemon webhook processing failed', error instanceof Error ? error.message : 'unknown error');
    res.status(400).json({ success: false, message: 'Invalid webhook payload' });
  }
}

billingRouter.post('/api/webhooks/lemonsqueezy', lemonWebhookHandler);
