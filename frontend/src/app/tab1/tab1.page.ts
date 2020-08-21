import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PostService } from '../services/post.service';
import { UserOpsComponent } from '../components/user-ops/user-ops.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  showAll: boolean;
  allPosts = [];
  posts = [];

  constructor(public router: Router,
              public popoverController: PopoverController,
              public postService: PostService) {
    // this.getPosts(20);
    this.showAll = localStorage.getItem('userToken') ? false: true ;
  }

  ionViewWillEnter() {
    if(!localStorage.getItem('userToken')) {
      this.showAll = true;
    }
    console.log(this.showAll);
    if (this.showAll) {
      this.getAllPosts();
    } else {
      this.getFollowingPosts();
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

  getFollowingPosts() {
    this.allPosts = []
    this.postService.userViewPosts().subscribe(
      (res) => {
        console.log(res);
        this.allPosts = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  refreshHome(event) {
    this.ionViewWillEnter();
    event.target.complete();
    // console.log(this.allPosts);
  }

  async presentUserOps(ev: any) {
    const popover = await this.popoverController.create({
      component: UserOpsComponent,
      componentProps: {
        showAll: this.showAll
      },
      event: ev,
      translucent: true
    });

    popover.onDidDismiss().then((data) =>{
      if(data != null) {
        this.showAll = data['data'];
        console.log(this.showAll);
      }
    });
    
    await popover.present();
  }

  // getPosts(size: number) {
  //   for (let i = 0; i < size; i++) {
  //     this.posts.push({
  //       user_photo: faker.internet.avatar(),
  //       user_name: faker.internet.userName(),
  //       tags: faker.lorem.words(),
  //       text: faker.lorem.paragraph(),
  //     });
  //   }
  // }

  // loadPosts(event) {
  //   setTimeout(() => {
  //     this.getPosts(20);
  //     event.target.complete();
  //     if(this.posts.length === 1000) {
  //       event.target.disabled = true;
  //     }
  //   }, 500);
  // }

  newPost() {
    if(localStorage.getItem('userToken')) {
      this.router.navigate(['/posting']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  showUserOps(ev: any) {
    if(localStorage.getItem('userToken')) {
      this.presentUserOps(ev);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
