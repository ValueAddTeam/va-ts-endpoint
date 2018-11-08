import test from 'ava';
import { InterpolatableApiEndpoint } from './interpolatable-api-endpoint.class';

test('#getUrl', t => {
  const testId = '2';
  const url = '/test/:testId';
  const interpolatableApiEndpoint = new InterpolatableApiEndpoint<{
    testId: string;
  }>(url);

  t.is(interpolatableApiEndpoint.getUrl({ testId }), '/test/2');
});
