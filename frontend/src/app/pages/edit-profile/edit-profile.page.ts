import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  photo: SafeResourceUrl;
  editForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
              public sanitizer: DomSanitizer,
              public userService: UserService,) {
    this.editForm = this.formBuilder.group({
      username: [null],
      gender: [null],
      image: [null],
    })
   }

  ngOnInit() {
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

  submitEdit(form) {
    console.log(form);
    console.log(form.value);
    this.userService.updateUser(form.value).subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{console.log(err)}
    );
  }
}
