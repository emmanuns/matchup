import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PopoverController } from '@ionic/angular';
import { PostsOpComponent } from '../posts-op/posts-op.component';

@Component({
  selector: 'app-card-posts',
  templateUrl: './card-posts.component.html',
  styleUrls: ['./card-posts.component.scss'],
})
export class CardPostsComponent implements OnInit {
  @Input() post;
  posterId: any;
  photo: any;
  username: any;
  loggedId = parseInt(localStorage.getItem('userId'));
  loggedHasPermission: boolean = false;

  constructor(public userService: UserService,
              public popoverController: PopoverController) {
  }

  ngOnInit() {
    this.getPoster();
  }

  getPoster() {
    this.userService.getUser(this.post.user_id).subscribe(
      (res) => {
        // console.log(res);
        this.posterId = res.id;
        this.loggedHasPermission = this.loggedId === res.id ? true : false;
        this.photo = res.photo;
        this.username = res.username;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async presentPostsOp(ev: any) {
    const popover = await this.popoverController.create({
      component: PostsOpComponent,
      componentProps: {
        user_name: this.post.user_name,
      },
      event: ev,
      translucent: true
    });

    return await popover.present();
  }

  likePost() {
    if (localStorage.getItem('userToken')) {
      this.userService.userLike(this.post.id).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      console.log('não autorizado');
    }
  }
}
