# Organization licensing

## Purpose

Organization licensing is a server-owned Premium access source for employers, municipalities, schools, NGOs and other organizations. It is independent of Lemon Squeezy individual subscriptions. A user has paid access when at least one trusted source is valid: a Lemon entitlement, an active organization seat, or the existing privileged access flag.

## Firestore model

- `organizations/{organizationId}` stores the name, normalized name, lifecycle status, contact fields, notes and admin actor timestamps.
- `organizationLicenses/{licenseId}` stores the organization reference, display name, manual lifecycle status, seat limit, start and expiry timestamps, duration and optional payment notes.
- `organizationSeats/{seatId}` stores one learner assignment, its lifecycle status, source key and assignment/release actors.
- `organizationAccessKeys/{keyId}` stores only a SHA-256 hash, a display prefix/suffix and redemption/revocation metadata.
- `organizationAuditLogs/{logId}` stores immutable operational events written by trusted Functions.
- `organizationRedeemLimits/{uidHash}` stores a one-minute authenticated redemption rate-limit window.
- `organizationSeatGuards/{uidHash}` serializes concurrent seat changes for one learner without exposing the UID in the document ID.

Firestore Rules deny all browser reads and writes to these collections. Admin and learner operations use authenticated Cloud Functions and the Admin SDK.

## Access decision

The server evaluates organization access during `/api/auth/me` and every request for a paid lesson. An organization seat grants access only when:

1. the seat status is `active`;
2. the organization status is `active`;
3. the license is not paused or cancelled;
4. `startsAt <= serverNow < expiresAt`.

Expiry therefore revokes access without a cron job. A stored `active` or `scheduled` license is displayed as effectively expired after its timestamp passes. Pausing preserves seats and keys but denies access. Cancelling denies access and preserves history.

`evaluateAccessSources` combines sources instead of storing a shared mutable boolean. Expiring an organization license cannot remove valid Lemon or privileged access, and a cancelled Lemon subscription cannot remove a valid organization seat.

## Calendar date semantics

Admin date inputs are interpreted as UTC calendar dates at `00:00:00`. Start is inclusive and expiry is exclusive. Duration uses calendar-month arithmetic rather than 30-day intervals. The target day is clamped to the last valid day of the target month:

- `2026-09-08 + 3 months = 2026-12-08`;
- `2026-01-31 + 1 month = 2026-02-28`;
- `2024-01-31 + 1 month = 2024-02-29`.

Extending by months starts from the current expiry. Setting a custom expiry validates that it remains later than the original start.

## Key security and lifecycle

Keys use Node `crypto.randomBytes` and the format `MG-XXXX-XXXX-XXXX-XXXX`. The alphabet omits `0`, `1`, `O`, `I` and `L`. Input is case-insensitive and separators are normalized. The token has 16 independently generated base-32-style characters (80 bits of entropy).

Only the generation response contains plaintext. Firestore stores `keyHash`, `keyPrefix` and `keySuffix`; admin lists return a masked representation. An available key can be redeemed once or revoked. A redeemed key never becomes available after the learner is released or deletes the account.

The authenticated redemption endpoint uses a Firestore-backed per-account rate limit and returns a generic invalid/unavailable message. It does not reveal the organization, key state or license state on failure.

## Seat capacity and concurrency

Redemption and direct admin assignment run in Firestore transactions. The transaction reads the current license, organization, active seat query and key document before writing. If the active count is already equal to `seatsTotal`, assignment fails. Concurrent attempts for the last place cause a transaction retry, so only one succeeds.

Every operation that changes active seats or available keys also increments `capacityRevision` on the license. This shared write serializes transactions that otherwise create different documents and protects the last seat against concurrent use of different keys. A hashed per-user guard similarly serializes assignments across different licenses, preventing two concurrent active organization seats for one learner.

Available key generation reserves only current free capacity: `seatsTotal - active seats - available keys`. After a learner is released, the redeemed key remains redeemed and one replacement key may be generated.

The seat limit cannot be reduced below the current number of active assignments. Administrators must release learners first.

## License lifecycle

- `scheduled`: current server time is before `startsAt`; it becomes effectively active when the start is reached.
- `active`: manual status allows access and the current server time is inside the interval.
- `paused`: access is denied while assignments remain intact.
- `expired`: derived when `serverNow >= expiresAt`.
- `cancelled`: terminal manual status; history remains and the license cannot be resumed.

An expired active license can be extended and becomes effective again when the new expiry is in the future. A paused license remains paused after extension. A cancelled license remains cancelled.

## Organization lifecycle

An inactive organization denies access for every license without deleting licenses, seats, keys or audit history. Reactivating it restores access only for seats whose licenses are otherwise effective.

## Admin operations

The admin UI provides organization search and detail pages with overview, licenses, learners, keys and audit tabs. All mutations require a valid Firebase ID token with the exact custom claim `admin: true`.

Supported operations include creating and disabling organizations, creating licenses, changing seat limits, extending or setting expiry, pausing, resuming, cancelling, generating/revoking keys, assigning an existing Firebase user by e-mail, and releasing a learner.

Full keys appear in a one-time modal with copy and CSV download. Subsequent responses expose masked keys only. Payment fields are references and internal notes; banking credentials must not be stored.

## Account deletion and privacy

Account deletion releases active organization seats. Redeemed keys remain redeemed. Seat and key links to the Firebase UID are replaced by the existing pseudonymous account-deletion key, and matching audit actors and targets are pseudonymized. The per-user seat guard is removed, while license capacity guards are advanced transactionally. A safe release event remains in the organization audit history. The existing Lemon billing retention policy remains unchanged.

Organization contacts, learner assignments and audit records are personal data. Before a B2B/B2G rollout, define controller/processor roles, lawful purpose, retention periods, access rules and the minimum reporting fields. Do not put bank-card or bank-account data in payment notes.

## API routes

Learner:

- `POST /api/auth/redeem-organization-key`

Admin:

- `GET|POST /api/admin/organizations`
- `GET|PATCH /api/admin/organizations/:organizationId`
- `POST /api/admin/organizations/:organizationId/licenses`
- `GET /api/admin/licenses/:licenseId`
- `PATCH /api/admin/licenses/:licenseId/seats`
- `POST /api/admin/licenses/:licenseId/extend`
- `POST /api/admin/licenses/:licenseId/pause|resume|cancel`
- `POST /api/admin/licenses/:licenseId/keys`
- `POST /api/admin/licenses/:licenseId/assign-user`
- `POST /api/admin/keys/:keyId/revoke`
- `POST /api/admin/seats/:seatId/release`

## Local testing

Run the Firebase demo project; no production organization or billing credentials are needed:

```powershell
npm run dev:full
```

Use Firebase Auth Emulator accounts. Give the admin account the existing `admin: true` custom claim, then open `/admin/organizations`. Organization collections are stored only in the emulator while `demo-hungarylearn` is active.

Automated checks:

```powershell
npx tsx --test tests/organizationLicensing.test.ts tests/accountDeletion.test.ts tests/subscriptionAccess.test.ts
npm run test:rules
npm run functions:typecheck
npm run functions:build
npm run build
```
