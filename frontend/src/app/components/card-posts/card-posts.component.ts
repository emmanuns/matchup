import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PostsOpComponent } from '../posts-op/posts-op.component';

@Component({
  selector: 'app-card-posts',
  templateUrl: './card-posts.component.html',
  styleUrls: ['./card-posts.component.scss'],
})
export class CardPostsComponent implements OnInit {
  @Input() post;

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

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

}
