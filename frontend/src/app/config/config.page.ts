import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public authService: AuthService,
              public router: Router) { }

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
    this.router.navigate(['']);
    console.log('deslogou');
  }
}
