import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonPlaceholderApiService } from 'src/app/services/json-placeholder-api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsListService{

  constructor(private jsonApiService: JsonPlaceholderApiService ) {
  }

  getContacts(): Observable<any>{
      return this.jsonApiService.get(`users`);
  }
}
