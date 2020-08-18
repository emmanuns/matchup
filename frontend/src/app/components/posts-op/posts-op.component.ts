import { Component, OnInit, Input } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts-op',
  templateUrl: './posts-op.component.html',
  styleUrls: ['./posts-op.component.scss'],
})
export class PostsOpComponent implements OnInit {
  @Input("postId") postId;

  constructor(public alertController: AlertController,
              public popoverController: PopoverController,
              public postService: PostService) { }

  ngOnInit() {
    console.log(this.postId);
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
            this.postService.deletePost(this.postId).subscribe(
              (res) => {
                console.log(res)
              },
              (err) => {
                console.log(err);
              }
            );
            this.popoverController.dismiss();
          }
        }
      ]
    });

    await alert.present();
  }

}
