import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
              public authService: AuthService,
              public router: Router) {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  submitLogin(form) {
    console.log(form);
    console.log(form.value);
    this.authService.login(form.value).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('userToken', res.Success.token);
        this.router.navigate(['']);
      },
      (err) => {
        console.log(err);
      }
    );
    this.loginForm.reset();
  }

}
