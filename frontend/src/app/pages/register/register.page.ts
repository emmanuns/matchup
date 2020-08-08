import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  
  constructor(public formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      gender: [null, [Validators.required]],
    });
  }

  ngOnInit() {
  }

  submitRegister(form) {
    console.log(form);
    console.log(form.value);
    this.registerForm.reset();
  }
}
