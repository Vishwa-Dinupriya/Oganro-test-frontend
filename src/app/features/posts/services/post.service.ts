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

  getAllPosts(): Observable<any>{
    return this.baseApiService.get('posts');
  }
  //return this.baseAPI.get(`enterpriseuser/user/${id}`);

  deletePost(postId: number): Observable<any>{
    return this.baseApiService.delete(`posts/${postId}`);
  }

  likePost(postId: number): Observable<any>{
    return this.baseApiService.update(`posts/like/${postId}`, {postId: postId});
  }

  dislikePost(postId: number): Observable<any>{
    return this.baseApiService.update(`posts/dislike/${postId}`, {postId: postId});
  }

}
