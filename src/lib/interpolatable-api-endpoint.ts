import { interpolate } from './interpolate';

export class InterpolatableApiEndpoint<T extends string> {
  constructor(private apiUrl: string) {}

  public url(params: Record<T, string | number>): string {
    return interpolate(this.apiUrl, params);
  }
}
