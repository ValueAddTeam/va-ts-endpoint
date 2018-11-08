export class ApiEndpoint {
  constructor(private apiUrl: string) {}

  public url(): string {
    return this.apiUrl;
  }
}
