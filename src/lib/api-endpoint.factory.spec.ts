import test from 'ava';
import { ApiEndpoint } from './api-endpoint';
import { apiEndpointFactory } from './api-endpoint.factory';
import { InterpolatableApiEndpoint } from './interpolatable-api-endpoint';

test('apiEndpointFactory should return ApiEndpoint', t => {
  const apiEndpoint = apiEndpointFactory('testEndpoint');

  t.is(apiEndpoint instanceof ApiEndpoint, true);
});

test('apiEndpointFactory should return InterpolatableApiEndpoint', t => {
  const apiEndpoint = apiEndpointFactory<'testId'>(
    'testEndpoint/:testId',
    true
  );

  t.is(apiEndpoint instanceof InterpolatableApiEndpoint, true);
});
