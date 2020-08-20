import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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
              public router: Router,
              public toastController: ToastController) {
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
        if (res.Success) {
          localStorage.setItem('userToken', res.Success.token);
          localStorage.setItem('userId', res.user.id);
          localStorage.setItem('admin', res.user.admin);
          this.router.navigate(['']);
        } else {
          this.presentToastFail();
        }
      },
      (err) => {
        console.log(err);
        this.presentToastFail();
      }
    );
    this.loginForm.reset();
  }

  async presentToastFail() {
    const toast = await this.toastController.create({
      message: 'Falha na autenticação!',
      duration: 2000
    });
    toast.present()
  }
}
