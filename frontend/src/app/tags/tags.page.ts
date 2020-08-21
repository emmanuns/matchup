import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.page.html',
  styleUrls: ['./tags.page.scss'],
})
export class TagsPage implements OnInit {
  showAll: boolean;
  allPosts = [];
  posts = [];

  constructor(public postService: PostService) { 
    this.showAll = localStorage.getItem('userToken') ? false: true ;
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if(!localStorage.getItem('userToken')) {
      this.showAll = true;
    }
    console.log(this.showAll);
    if (this.showAll) {
      this.getAllPosts();
    } 
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe(
      (res) => {
        this.allPosts = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  refreshHome(event) {
    this.ionViewWillEnter();
    event.target.complete()
  }
  
}
