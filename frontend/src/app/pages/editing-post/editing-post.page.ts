import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-editing-post',
  templateUrl: './editing-post.page.html',
  styleUrls: ['./editing-post.page.scss'],
})
export class EditingPostPage implements OnInit {
  postForm: FormGroup;
  postId = this.activatedRoute.snapshot.paramMap.get('id');
  
  constructor(public formBuilder: FormBuilder,
              private location: Location,
              public activatedRoute: ActivatedRoute,
              public postService: PostService) {
    this.postForm = this.formBuilder.group({
      text: [null, [Validators.required]],
      gametag: [null],
    });
  }

  ngOnInit() {
  }

  submitPost(form) {
    console.log(form);
    console.log(form.value);
    this.postService.editingPost(this.postId, form.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.location.back();
  }

}
