import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentingPageRoutingModule } from './commenting-routing.module';

import { CommentingPage } from './commenting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CommentingPageRoutingModule
  ],
  declarations: [CommentingPage]
})
export class CommentingPageModule {}
