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
    this.postService.getAll().subscribe((res: Post[])=>{
      this.posts = res;
      console.log(res);
    })
  }

  deletePost(postId: number){

  }

  clickOnLike(postId: number){

  }

  clickOnDislike(postId: number){

  }

}
