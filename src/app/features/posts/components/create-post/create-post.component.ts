import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postForm = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required]
  });

  mediaKey!: string;
  constructor(private fb: FormBuilder,
              private postService: PostService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    const post: Post = this.postForm.getRawValue();;
    post.mediaKey = this.mediaKey;

    this.postService.createPost(post).subscribe((res: Post)=>{
      console.log('Post Created Successfully! '+ res)
    },
    (err)=>{

    })
  }
}
