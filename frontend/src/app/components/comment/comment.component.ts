import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment;
  photo: any;
  username: any;

  loggedId = parseInt(localStorage.getItem('userId'));
  admin = parseInt(localStorage.getItem('admin'));
  isSameUser: boolean = false;
  isAdmin: boolean = false;
  hasPermission: boolean = false;

  constructor(public alertController: AlertController,
              public userService: UserService,
              public postService: PostService) {
  }

  ngOnInit() {
    this.getCommenter();
    this.isSameUser = this.comment.user_id === this.loggedId;
    this.isAdmin = this.admin === 1;
    this.hasPermission = (this.isAdmin || this.isSameUser);
  }

  async presentConfirmDelete() {
    const alert = await this.alertController.create({
      header: 'Deletar',
      message: 'Deseja deletar este comentário?',
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
            console.log('confirmou deleção')
            this.deleteThisComment();
          }
        }
      ]
    });

    await alert.present();
  }
  
  deleteThisComment() {
    this.postService.deleteComment(this.comment.id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCommenter() {
    this.userService.getUser(this.comment.user_id).subscribe(
      (res) => {
        console.log(res);
        this.photo = res.photo;
        this.username = res.username;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
