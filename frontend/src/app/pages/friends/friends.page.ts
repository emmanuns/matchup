import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'; 

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  followMode: boolean = true;
  users: any;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userFollowing();

  }

  userFollowers(){
    this.userService.getUserFollowers().subscribe(
      (res)=>{
        console.log(res);
        this.users=res;
      },(err)=>{
        console.log(err);
      });
  }

  userFollowing(){
    this.userService.getUserFollowing().subscribe(
      (res)=>{
        console.log(res);
        this.users=res;
      },(err)=>{
        console.log(err);
      });
  }
  

}
