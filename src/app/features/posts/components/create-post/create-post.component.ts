import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploadService } from 'src/app/shared/services/file-upload.service';
import { Post } from '../../models/post.model';
import { PostSharedService } from '../../services/post-shared.service';
import { PostService } from '../../services/post.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  @ViewChild('postImageInput')
   myInputVariable!: ElementRef;

  postForm = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required]
  });

  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file!: File; // Variable to store file

  image!: string;
  constructor(private fb: FormBuilder,
              private postService: PostService,
              private postSharedService: PostSharedService) { }

  ngOnInit(): void {
  }

  toBase64(file: any): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error); });
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  async onSubmit() {
    // TODO: Use EventEmitter with form value

    const post: Post = this.postForm.getRawValue();;
    post.imageBase64 = await this.toBase64(this.file);
    post.like_count = 0;
    post.dislike_count = 0;

    this.postService.createPost(post).subscribe({
      next: res => {
       console.log(res);
       this.postForm.reset();
       this.myInputVariable.nativeElement.value = "";
       this.postSharedService.createPostResponse.next(res);
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
