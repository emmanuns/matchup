import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostingPageRoutingModule } from './posting-routing.module';

import { PostingPage } from './posting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PostingPageRoutingModule
  ],
  declarations: [PostingPage]
})
export class PostingPageModule {}
