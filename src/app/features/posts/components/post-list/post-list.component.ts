import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

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
   this.postService.deletePost(postId).subscribe((res: any)=>{
    console.log(res);
    this.getAllPosts();
   })
  }

  clickOnLike(postId: number){
    this.postService.likePost(postId).subscribe((res: any)=>{
      console.log(res);
      this.getAllPosts();
    })
  }

  clickOnDislike(postId: number){
    this.postService.dislikePost(postId).subscribe((res: any)=>{
      console.log(res);
      this.getAllPosts();
    })
  }

}
