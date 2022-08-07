import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  imageBaseUrl: string = environment.imageBaseUrl;

  posts!: Post[] ;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
    this.postService.getAllPosts().subscribe((res: Post[])=>{
      this.posts = res;
      console.log(res);
    })
  }

  deletePost(postId: number){


   this.postService.deletePost(postId).subscribe({
    next: res => {
      this.getAllPosts();
    },
    error: error => {
      console.log(error);
    }
  })

  }

  clickOnLike(postId: number){
    this.postService.likePost(postId).subscribe({
      next: res => {
        this.getAllPosts();
      },
      error: error => {
        console.log(error);
      }
    })
  }

  clickOnDislike(postId: number){
    this.postService.dislikePost(postId).subscribe({
      next: res => {
        this.getAllPosts();
      },
      error: error => {
        console.log(error);
      }
    })
  }

}
