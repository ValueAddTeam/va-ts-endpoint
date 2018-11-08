import test from 'ava';
import { InterpolatableApiEndpoint } from './interpolatable-api-endpoint';

test('#url', t => {
  const exampleId = 1;
  const testId = '2';
  const url = '/example/:exampleId/test/:testId';
  const interpolatableApiEndpoint = new InterpolatableApiEndpoint<
    'exampleId' | 'testId'
  >(url);

  t.is(
    interpolatableApiEndpoint.url({ exampleId, testId }),
    '/example/1/test/2'
  );
});
