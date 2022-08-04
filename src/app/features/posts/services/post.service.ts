import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from 'src/app/services/base-api.service';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private baseApiService: BaseApiService) { }

  createPost(post: Post): Observable<any>{
      return this.baseApiService.create('posts', post);
  }

  getAll(): Observable<any>{
    return this.baseApiService.get('posts');
  }

  delete(postId: number): Observable<any>{
    return this.baseApiService.deleteWithParams('posts', postId);
  }

  like(postId: number): Observable<any>{
    return this.baseApiService.update('posts/like', {postId: postId});
  }

  dislike(postId: number): Observable<any>{
    return this.baseApiService.update('posts/dislike', {postId: postId});
  }

}
