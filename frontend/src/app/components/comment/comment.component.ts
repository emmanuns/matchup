import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment;
  photo: any;
  username: any;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.getCommenter();
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
