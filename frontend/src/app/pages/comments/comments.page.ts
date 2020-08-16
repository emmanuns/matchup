import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import * as faker from 'faker';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  isPostLoaded = false;
  post = {};
  postId = this.activatedRoute.snapshot.paramMap.get('id');

  comments = [];

  constructor(public router: Router,
              public activatedRoute: ActivatedRoute,
              public postService: PostService) {
    // this.getComments(5);
    this.getPost();
  }

  ngOnInit() {
  }

  getPost() {
    this.postService.getPost(this.postId).subscribe(
      (res) => {
        this.post = res;
        console.log(res);
        if(this.post) {
          this.isPostLoaded = true;
        }
      },
      (err) => {
        console.log(err);
      }
    );
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

  newComment() {
    if(localStorage.getItem('userToken')) {
      this.router.navigate(['/commenting']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
