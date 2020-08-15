import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as faker from 'faker';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  posts = [];

  constructor(public router: Router) {
    this.getPosts(20);
  }

  getPosts(size: number) {
    for (let i = 0; i < size; i++) {
      this.posts.push({
        user_photo: faker.internet.avatar(),
        user_name: faker.internet.userName(),
        tags: faker.lorem.words(),
        text: faker.lorem.paragraph(),
      });
    }
  }

  loadPosts(event) {
    setTimeout(() => {
      this.getPosts(20);
      event.target.complete();
      if(this.posts.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  newPost() {
    if(localStorage.getItem('userToken')) {
      this.router.navigate(['/posting']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  goToConfig() {
    if(localStorage.getItem('userToken')) {
      this.router.navigate(['/config']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
