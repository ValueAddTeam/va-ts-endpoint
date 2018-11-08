import test from 'ava';
import { ApiEndpoint } from './api-endpoint.class';

test('#getUrl', t => {
  const url = '/test';
  const interpolatableApiEndpoint = new ApiEndpoint(url);

  t.is(interpolatableApiEndpoint.getUrl(), url);
});
