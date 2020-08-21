import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  posts = [];

  constructor(public postService: PostService) {}

  search(q: string) {
    this.postService.searchPosts({'text': q}).subscribe(
      (res) => {
        console.log(res);
        this.posts = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
