import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  
  constructor(public formBuilder: FormBuilder,
              public authService: AuthService,
              public router: Router,
              public toastController: ToastController) {
    this.registerForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      gender: [null, [Validators.required]],
    });
  }

  ngOnInit() {
  }

  async presentToastFail() {
    const toast = await this.toastController.create({
      message: 'Falha no registro!',
      duration: 2000
    });

    toast.present();
  }

  submitRegister(form) {
    console.log(form);
    console.log(form.value);
    this.authService.register(form.value).subscribe(
      (res)=>{
        console.log(res);
        if (res.Success) {
          localStorage.setItem('userToken', res.Success.token);
          this.router.navigate(['']);
        } else {
          this.presentToastFail();
        }
      },
      (err)=>{console.log(err)}
    );
    this.registerForm.reset();
  }
}
