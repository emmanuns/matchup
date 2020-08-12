import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-commenting',
  templateUrl: './commenting.page.html',
  styleUrls: ['./commenting.page.scss'],
})
export class CommentingPage implements OnInit {
  commentForm: FormGroup;
  userId = localStorage.getItem('userId');

  constructor(public formBuilder: FormBuilder,
              private location: Location) {
    this.commentForm = this.formBuilder.group({
      text: [null, [Validators.required]],
    });
  }

  ngOnInit() {
  }

  submitComment(form) {
    console.log(form);
    console.log(form.value);
    this.location.back();
  }

}
