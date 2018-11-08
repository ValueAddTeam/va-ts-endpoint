# Api Endpoint  

### Installation  

`npm install va-ts-endpoint`  

### Motivation  

Writing data services with hard-coded endpoints that have parameters in the url string is not very comfortable, because whenever I want to interpolate them, I have to jump to the variable declaration that stores the string with the address. That's why I decided to create a very simple factory which helps to create typed endpoints.  

### Usage

```typescript
export class ExampleDataService {
  readonly endpoints = {
    // Create simple endpoint.
    // In simple case ApiEndpoint is additional abstraction, but it's created to be consistent in every place.
    getItems: apiEndpointFactory(`${yourApiBaseUrl}/items`),
    // Create typed endpoint. Values with `:` will be interpolated.
    // Provide union type which corresponds to values which should be interpolated. 
    getItem: apiEndpointFactory<'exampleId' | 'itemId'>(`${yourApiBaseUrl}/examples/:exampleId/items/:itemId`, true)
  };
  
  constructor(private http: HttpClient) {}
  
  getItems(): Observable<Item[]> {
    return this.http.get(this.endpoints.getItems.url());
  }
  
  getItem(exampleId: string, itemId: string): Observable<Item> {
    return this.http.get(this.endpoints.getItem.url({exampleId, itemId}));
  }
}
```
