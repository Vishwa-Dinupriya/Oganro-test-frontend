import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoremPicsumApiService } from 'src/app/services/lorem-picsum-api.service';

@Injectable({
  providedIn: 'root'
})
export class LoremPicsumListService {

  constructor(private loremPicsumApiService: LoremPicsumApiService) { }

  getLoremPicsums(): Observable<any>{
     return this.loremPicsumApiService.get(`v2/list?page=1&limit=10`)
  }
}
