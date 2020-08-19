import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  
  profile;
  

  constructor(public authService: AuthService,
              public router: Router,
              public alertController: AlertController) { }

  ngOnInit() {
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

  goToProfile() {
    if(localStorage.getItem('userToken')) {
      this.router.navigate(['/profile']);
    } else {
      this.router.navigate(['/config']);
    }
  }
  goToFriends() {
    if(localStorage.getItem('userToken')) {
      this.router.navigate(['/friends']);
    } else {
      this.router.navigate(['/config']);
    }
  }
}
