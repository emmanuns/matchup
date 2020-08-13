import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentsPageRoutingModule } from './comments-routing.module';

import { CommentsPage } from './comments.page';
import { CardPostsComponent } from '../../components/card-posts/card-posts.component';
import { CommentComponent } from '../../components/comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentsPageRoutingModule
  ],
  declarations: [CommentsPage, CardPostsComponent, CommentComponent]
})
export class CommentsPageModule {}
