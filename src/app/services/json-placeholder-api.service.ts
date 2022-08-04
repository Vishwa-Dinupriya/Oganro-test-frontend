import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderApiService {

  constructor(private httpClient: HttpClient) { }

  jsonPlaceHolderUrl: string = environment.jsonPlaceHolderUrl;

  get(url: string): any{
    return <any>this.httpClient.get(this.jsonPlaceHolderUrl+ url);
  }
}
