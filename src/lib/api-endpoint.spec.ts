import test from 'ava';
import { ApiEndpoint } from './api-endpoint';

test('#url', t => {
  const url = '/test';
  const interpolatableApiEndpoint = new ApiEndpoint(url);

  t.is(interpolatableApiEndpoint.url(), url);
});
