import { EndpointParams } from './endpoint-params.interface';
import { interpolate } from './interpolate';

export class InterpolatableApiEndpoint<PARAMS extends EndpointParams> {
  constructor(private apiUrl: string) {}

  public getUrl(params: PARAMS): string {
    return interpolate(this.apiUrl, params);
  }
}
