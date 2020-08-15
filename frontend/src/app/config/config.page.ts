import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

class Profile {
  photo: string;
  username: string;
  following: number;
  followers: number;

}

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  profile: Profile[];

  constructor(public authService: AuthService,
              public router: Router,
              public alertController: AlertController) { }

  ngOnInit() {
    this.profile = [
      {
        photo:"../../assets/jose.jpg",
        username: "thekiller",
        following: 127,
        followers: 213,
      }];
  }

  async presentAlertConfirmLogout() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: 'Deseja mesmo desconectar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelou')
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.logout();
          }
        }
      ]
    });

    await alert.present();
  }
  
  logout() {
    this.authService.logout().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.router.navigate(['']);
    console.log('deslogou');
  }
}
