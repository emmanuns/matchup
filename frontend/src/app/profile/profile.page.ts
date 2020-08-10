import { Component, OnInit, Input } from '@angular/core';


class Profile {
  photo: string;
  username: string;
  following: number;
  followers: number;

}

class Post {
  tags: string;
  text: string;
  photo: string;
  username: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: Profile[];
 
  @Input() post;

  constructor() { }

  ngOnInit() {
    this.profile = [
      {
        photo:"../../assets/jose.jpg",
        username: "thekiller",
        following: 127,
        followers: 213,
      }];

    this.post = [
      {
        tags: "#League of Legends",
        text: "E aí pessoal, tava querendo jogar uma partidinha hoje mais tarde. Alguém topa?",
        photo: "../../assets/jose.jpg",
        username: "thekiller",
      },{
        tags: "#League of Legends",
        text: "Viram a nova skin do Pyke?",
        photo: "../../assets/jose.jpg",
        username: "thekiller",
      },{
        tags: "#Don't Starve Together",
        text: "Completei 200 dias jogando sozinho num servidor, nem acredito",
        photo: "../../assets/jose.jpg",
        username: "thekiller",
      }];
      
  }

}
