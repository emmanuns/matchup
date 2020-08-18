import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  followMode: boolean = false;

  constructor() { }

  ngOnInit() {
    this.userFollowing();
    this.userFollowers();
  }

  toggleFollow() {
    this.followMode = true;
  }
  
  untoggleFollow(){
    this.followMode = false;
  }

  userFollowing(){

  }

  userFollowers(){

  }
  

}
