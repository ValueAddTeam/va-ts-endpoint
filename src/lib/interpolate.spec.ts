import test from 'ava';
import { interpolate } from './interpolate';

test('interpolate', t => {
  const testId = '2';
  const url = '/test/:testId';

  t.is(interpolate(url, { testId }), '/test/2');
});
