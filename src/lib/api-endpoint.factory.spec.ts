import test from 'ava';
import { ApiEndpoint } from './api-endpoint.class';
import { apiEndpointFactory } from './api-endpoint.factory';
import { InterpolatableApiEndpoint } from './interpolatable-api-endpoint.class';

test('apiEndpointFactory should return ApiEndpoint', t => {
  const apiEndpoint = apiEndpointFactory('testEndpoint');

  t.is(apiEndpoint instanceof ApiEndpoint, true);
});

test('apiEndpointFactory should return InterpolatableApiEndpoint', t => {
  const apiEndpoint = apiEndpointFactory('testEndpoint', true);

  t.is(apiEndpoint instanceof InterpolatableApiEndpoint, true);
});
