import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.page.html',
  styleUrls: ['./posting.page.scss'],
})
export class PostingPage implements OnInit {
  postForm: FormGroup;
  userId = localStorage.getItem('userId');
  
  constructor(public formBuilder: FormBuilder,
              private location: Location) {
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
    this.location.back();
  }

}
