import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  post = {
    user_photo: faker.internet.avatar(),
    user_name: faker.internet.userName(),
    tags: faker.lorem.words(),
    text: faker.lorem.paragraph(),
  };

  comments = [];

  constructor() {
    this.getComments(5);
  }

  ngOnInit() {
  }

  getComments(size: number) {
    for (let i = 0; i < size; i++) {
      this.comments.push({
        user_photo: faker.internet.avatar(),
        user_name: faker.internet.userName(),
        text: faker.lorem.paragraph(),
      })
    }
  }

  loadComments(event) {
    setTimeout(() => {
      this.getComments(5);
      event.target.complete();
      if(this.comments.length === 20) {
        event.target.disabled = true;
      }
    }, 500);
  }

}
