import { ApiEndpoint } from './api-endpoint';
import { InterpolatableApiEndpoint } from './interpolatable-api-endpoint';

export function apiEndpointFactory(
  apiUrl: string,
  interpolatable?: false
): ApiEndpoint;

export function apiEndpointFactory<T extends string>(
  apiUrl: string,
  interpolatable: true
): InterpolatableApiEndpoint<T>;

export function apiEndpointFactory<T extends string>(
  apiUrl: string,
  interpolatable = false
): InterpolatableApiEndpoint<T> | ApiEndpoint {
  return interpolatable
    ? new InterpolatableApiEndpoint<T>(apiUrl)
    : new ApiEndpoint(apiUrl);
}
