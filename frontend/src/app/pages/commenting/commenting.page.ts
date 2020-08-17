import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-commenting',
  templateUrl: './commenting.page.html',
  styleUrls: ['./commenting.page.scss'],
})
export class CommentingPage implements OnInit {
  commentForm: FormGroup;
  postId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(public formBuilder: FormBuilder,
              private location: Location,
              public activatedRoute: ActivatedRoute,
              public postService: PostService) {
    this.commentForm = this.formBuilder.group({
      text: [null, [Validators.required]],
      post_id: [null]
    });
  }

  ngOnInit() {
  }

  submitComment(form: FormGroup) {
    form.patchValue({'post_id': this.postId});
    console.log(form);
    console.log(form.value);
    this.postService.userCommenting(form.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err)
      }
    );
    this.location.back();
  }
}
