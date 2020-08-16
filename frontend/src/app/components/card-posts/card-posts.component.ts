import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-card-posts',
  templateUrl: './card-posts.component.html',
  styleUrls: ['./card-posts.component.scss'],
})
export class CardPostsComponent implements OnInit {
  @Input() post;
  photo: any;
  username: any;

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.getPoster();
  }

  getPoster() {
    console.log(this.post);
    this.userService.getUser(this.post.user_id).subscribe(
      (res) => {
        // console.log(res);
        this.photo = res.photo;
        this.username = res.username;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
