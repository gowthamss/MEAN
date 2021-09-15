import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model';
import { PostsService } from './../posts.service';

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['post-create.component.css'],
})
export class PostCreateComponent {
  constructor(private postsService: PostsService) {}

  onAddPost(postForm: NgForm) {
    if (postForm.invalid) {
      return;
    }

    this.postsService.addPost(postForm.value.title, postForm.value.content);
    postForm.resetForm();
  }
}
