import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mapStudentProgressRow, mapStudentUserRow } from '../src/server/db.ts';
import { validateAudioDataUrl } from '../src/server/audioStorage.ts';
import { resolveAudioUrl } from '../src/utils/audioConfig.ts';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('PostgreSQL rows map back to the existing camelCase user API shape', () => {
  const user = mapStudentUserRow({
    id: '2c13f58d-0e4f-4d44-8b7b-a8f4fc446a92',
    email: 'learner@example.com',
    password_hash: 'hash',
    created_at: '2026-08-22T10:00:00.000Z',
    subscription_status: 'trial',
    subscription_end: '2026-08-29T10:00:00.000Z',
    stripe_customer_id: null,
    stripe_subscription_id: null,
    is_privileged: false,
  });

  assert.equal(user.passwordHash, 'hash');
  assert.equal(user.subscriptionStatus, 'trial');
  assert.equal(user.subscriptionEnd, '2026-08-29T10:00:00.000Z');
  assert.equal(user.stripeCustomerId, undefined);
  assert.equal(user.isPrivileged, false);
});

test('PostgreSQL progress rows preserve slides, quizzes, SRS cards, and notes', () => {
  const progress = mapStudentProgressRow({
    user_id: '2c13f58d-0e4f-4d44-8b7b-a8f4fc446a92',
    viewed_slides: ['l1_s1'],
    passed_quizzes: [1],
    review_cards: {},
    custom_notes: 'note',
    updated_at: '2026-08-22T10:00:00.000Z',
  });

  assert.deepEqual(progress.viewedSlides, ['l1_s1']);
  assert.deepEqual(progress.passedQuizzes, [1]);
  assert.deepEqual(progress.reviewCards, {});
  assert.equal(progress.customNotes, 'note');
});

test('private audio validation preserves supported MIME handling', () => {
  const dataUrl = `data:audio/mpeg;base64,${Buffer.from('ID3').toString('base64')}`;
  const upload = validateAudioDataUrl(dataUrl);

  assert.equal(upload.mimeType, 'audio/mpeg');
  assert.equal(upload.extension, '.mp3');
  assert.deepEqual(upload.buffer, Buffer.from('ID3'));
  assert.throws(
    () => validateAudioDataUrl(`data:text/plain;base64,${Buffer.from('no').toString('base64')}`),
    /MP3, WAV, WebM, OGG и M4A/
  );
});

test('Supabase course-audio base does not produce duplicate audio path segments', () => {
  const base = 'https://qkinyuxousscqgvjvrin.supabase.co/storage/v1/object/public/hungarylearn-course-audio/audio/';
  const expected = 'https://qkinyuxousscqgvjvrin.supabase.co/storage/v1/object/public/hungarylearn-course-audio/audio/1.1.mp3';

  assert.equal(resolveAudioUrl(base, '1.1.mp3'), expected);
  assert.equal(resolveAudioUrl(base, '/audio/1.1.mp3'), expected);
});

test('server source has no filesystem persistence fallback', () => {
  const serverSource = readFileSync(path.join(projectRoot, 'server.ts'), 'utf8');
  const databaseSource = readFileSync(path.join(projectRoot, 'src', 'server', 'db.ts'), 'utf8');
  assert.doesNotMatch(serverSource, /db\.json|DB_FILE|AUDIO_DIR|saveDatabase/);
  assert.match(serverSource, /getDatabasePool|\/api\/health/);
  assert.match(databaseSource, /process\.env\.DATABASE_URL/);
  assert.match(databaseSource, /processed_stripe_events/);
});

test('course audio uploader is explicit, scoped, recursive, and verified', () => {
  const script = readFileSync(
    path.join(projectRoot, 'scripts', 'upload-course-audio-to-supabase.ts'),
    'utf8'
  );
  const packageJson = JSON.parse(readFileSync(path.join(projectRoot, 'package.json'), 'utf8'));

  assert.equal(packageJson.scripts['audio:migrate'], 'tsx scripts/upload-course-audio-to-supabase.ts');
  assert.doesNotMatch(packageJson.scripts.prebuild, /audio:migrate/);
  assert.match(script, /qkinyuxousscqgvjvrin/);
  assert.match(script, /hungarylearn-course-audio/);
  assert.match(script, /discoverAudioFiles/);
  assert.match(script, /sha256\(verifiedBuffer\)/);
});

test('all local static course audio remains present and published Listening assets are non-empty', () => {
  const audioDirectory = path.join(projectRoot, 'public', 'audio');
  const audioFiles = readdirSync(audioDirectory).filter((name) => /\.(mp3|wav|webm|ogg|m4a|mp4)$/i.test(name));
  assert.equal(audioFiles.length, 538);

  const publishedListening = [
    'l1_listening_s_sz.mp3',
    'l1_listening_soft_consonants.mp3',
    'l1_listening_vowel_length.mp3',
    'l2_listening_introduction.mp3',
    'l4_listening_present_forms.mp3',
    'l5_listening_time.mp3',
    'l6_listening_a0_review.mp3',
  ];
  for (const fileName of publishedListening) {
    const filePath = path.join(audioDirectory, fileName);
    assert.equal(existsSync(filePath), true, fileName);
    assert.ok(readFileSync(filePath).byteLength > 0, fileName);
  }
});

test('normalized e-mail uniqueness is represented by a local idempotent migration', () => {
  const migration = readFileSync(
    path.join(projectRoot, 'supabase', 'migrations', '20260822134454_app_users_email_unique.sql'),
    'utf8'
  );
  assert.match(migration, /create unique index if not exists/i);
  assert.match(migration, /lower\(email\)/i);
});
