import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

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
  profileId = this.activatedRoute.snapshot.paramMap.get('id');
  showFollowButton: boolean;
 
  @Input() post;

  constructor(public userService: UserService,
              public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.profile = [
      {
        photo:"",
        username: "",
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
    this.getUser();
    this.showFollowButton = localStorage.getItem('userToken') ? true : false;
  }

  getUser() {
    this.userService.getUser(this.profileId).subscribe(
      (res) => {
        console.log(res);
        this.profile[0].username = res.username;
        this.profile[0].photo = res.photo;
      }
    );
  }

  follow() {
    this.userService.userFollowing(this.profileId).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
