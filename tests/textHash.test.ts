import assert from 'node:assert/strict';
import test from 'node:test';
import { normalizedTextSha256 } from './fixtures/textHash.ts';

test('normalized text SHA-256 ignores line-ending style but detects content changes', () => {
  const lf = 'első sor\nmásodik sor\n';
  const crlf = 'első sor\r\nmásodik sor\r\n';
  const loneCr = 'első sor\rmásodik sor\r';

  assert.equal(normalizedTextSha256(lf), normalizedTextSha256(crlf));
  assert.equal(normalizedTextSha256(lf), normalizedTextSha256(loneCr));
  assert.notEqual(normalizedTextSha256(lf), normalizedTextSha256('első sor\nmásodik szó\n'));
});
