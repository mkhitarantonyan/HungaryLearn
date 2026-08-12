import test from 'node:test';
import assert from 'node:assert/strict';
import { mergeCompletedSlides } from '../src/utils/progressMerge.ts';

test('merges two non-overlapping slide sets without loss', () => {
  const fromServer = ['l1_s1', 'l1_s2', 'l1_s3'];
  const fromClient = ['l1_s1', 'l1_s2', 'l1_s4'];
  const result = mergeCompletedSlides(fromServer, fromClient);

  assert.ok(result.includes('l1_s3'));
  assert.ok(result.includes('l1_s4'));
  assert.equal(result.length, 4);
});

test('merge is idempotent for identical sets', () => {
  const slides = ['l1_s1', 'l1_s2'];
  const result = mergeCompletedSlides(slides, slides);
  assert.equal(result.length, 2);
});

test('merge handles empty incoming set', () => {
  const result = mergeCompletedSlides(['l1_s1'], []);
  assert.deepEqual(result, ['l1_s1']);
});

test('merge handles empty existing set', () => {
  const result = mergeCompletedSlides([], ['l1_s1', 'l1_s2']);
  assert.deepEqual(result, ['l1_s1', 'l1_s2']);
});

test('merge handles both empty sets', () => {
  const result = mergeCompletedSlides([], []);
  assert.deepEqual(result, []);
});

test('merge removes duplicates within arrays', () => {
  const result = mergeCompletedSlides(['l1_s1', 'l1_s1', 'l1_s2'], ['l1_s2', 'l1_s3']);
  assert.equal(result.length, 3);
  assert.ok(result.includes('l1_s1'));
  assert.ok(result.includes('l1_s2'));
  assert.ok(result.includes('l1_s3'));
});