import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  
  constructor(public formBuilder: FormBuilder, public authService: AuthService) {
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
    this.authService.register(form.value).subscribe(
      (res)=>{console.log(res)},
      (err)=>{console.log(err)}
    );
    this.registerForm.reset();
  }
}
