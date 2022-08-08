import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostSharedService {

  constructor() { }

  public createPostResponse: Subject<Post> = new Subject();

}
