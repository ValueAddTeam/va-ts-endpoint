export class ApiEndpoint {
  constructor(private apiUrl: string) {}

  public getUrl(): string {
    return this.apiUrl;
  }
}
