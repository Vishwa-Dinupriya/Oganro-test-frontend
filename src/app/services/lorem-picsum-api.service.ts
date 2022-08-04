import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoremPicsumApiService {

  constructor(private httpClient: HttpClient) { }

  loremPicsumUrl: string = environment.loremPicsumUrl;
  get(url: string): any{
    return <any>this.httpClient.get(this.loremPicsumUrl + url)
  }
}
