import { Component, OnInit, Input } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-posts-op',
  templateUrl: './posts-op.component.html',
  styleUrls: ['./posts-op.component.scss'],
})
export class PostsOpComponent implements OnInit {
  @Input("user_name") user_name;

  constructor(public alertController: AlertController,
              public popoverController: PopoverController) { }

  ngOnInit() {
    console.log(this.user_name);
  }

  async presentConfirmDelete() {
    const alert = await this.alertController.create({
      header: 'Deletar',
      message: 'Deseja deletar este post?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelou deleção');
          }
        }, {
          text: 'Sim',
          handler: () => {
            console.log('confirmou deleção');
            this.popoverController.dismiss();
          }
        }
      ]
    });

    await alert.present();
  }

}
