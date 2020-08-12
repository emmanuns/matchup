import { Component, OnInit } from '@angular/core';

class Profile {
  photo: string;
  username: string;
  following: number;
  followers: number;

}

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  profile: Profile[];

  constructor() { }

  ngOnInit() {
    this.profile = [
      {
        photo:"../../assets/jose.jpg",
        username: "thekiller",
        following: 127,
        followers: 213,
      }];
  }

}
