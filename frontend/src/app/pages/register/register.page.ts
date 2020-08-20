import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  registerForm: FormGroup;
  photo: SafeResourceUrl;

  constructor(public formBuilder: FormBuilder,
              public authService: AuthService,
              public router: Router,
              public toastController: ToastController,
              public sanitizer: DomSanitizer) {
    this.registerForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      image: [null],
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

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      saveToGallery: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

  submitRegister(form) {
    console.log(form);
    console.log(form.value);
    this.authService.register(form.value).subscribe(
      (res)=>{
        console.log(res);
        if (res.Success) {
          localStorage.setItem('userToken', res.Success.token);
          localStorage.setItem('userId', res.user.id);
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
