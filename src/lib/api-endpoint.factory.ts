import { ApiEndpoint } from './api-endpoint.class';
import { EndpointParams } from './endpoint-params.interface';
import { InterpolatableApiEndpoint } from './interpolatable-api-endpoint.class';

export function apiEndpointFactory(
  apiUrl: string,
  interpolatable?: false
): ApiEndpoint;

export function apiEndpointFactory<PARAMS extends EndpointParams>(
  apiUrl: string,
  interpolatable: true
): InterpolatableApiEndpoint<PARAMS>;

export function apiEndpointFactory<PARAMS extends EndpointParams>(
  apiUrl: string,
  interpolatable = false
): InterpolatableApiEndpoint<PARAMS> | ApiEndpoint {
  return interpolatable
    ? new InterpolatableApiEndpoint<PARAMS>(apiUrl)
    : new ApiEndpoint(apiUrl);
}
