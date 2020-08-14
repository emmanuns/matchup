import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

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

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.profile = [
      {
        photo:"../../assets/jose.jpg",
        username: "thekiller",
        following: 127,
        followers: 213,
      }];
  }

  logout() {
    this.authService.logout().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    console.log('deslogou');
  }
}
