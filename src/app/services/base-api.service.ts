import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = environment.baseUrl;

  get(url: string): any{
    return <any>this.httpClient.get(this.baseUrl + url);
  }

  getWithParams(url: string, paramsData: any): Observable<any> {
    let params = new HttpParams();
    for (let key in paramsData) {
      params = params.append(key, paramsData[key]);
    }
    return this.httpClient.get(this.baseUrl + url, { params: params });
  }

  create(url: string, data?: object): Observable<any> {
    return this.httpClient.post(this.baseUrl + url, data);
  }

  update(url: string, data?: object): Observable<any> {
    return this.httpClient.put(this.baseUrl + url, data);
  }

  updateWithParams(url: string, paramsData: any): Observable<any> {
    let params = new HttpParams();
    for (let key in paramsData) {
      params = params.append(key, paramsData[key]);
    }
    return this.httpClient.put(this.baseUrl + url, { params: params });
  }

  delete(url: string): any{
    return this.httpClient.delete(this.baseUrl + url);
  }

  deleteWithParams(url: string, paramsData: any) {
    let params = new HttpParams();

    for (let key in paramsData) {
      params = params.append(key, paramsData[key]);
    }

    return this.httpClient.delete(this.baseUrl + url, { params: params });
  }

}
