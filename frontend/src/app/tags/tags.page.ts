import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.page.html',
  styleUrls: ['./tags.page.scss'],
})
export class TagsPage implements OnInit {


  constructor(public postService: PostService) { }

  ngOnInit() {
  }

  listPosts(){
    this.postService.listPosts().subscribe(
      (res)=> {
        this.listPosts = res;
        console.log(res);
      },
      (err)=> {
        console.log(err);
      });
  }
  
}
