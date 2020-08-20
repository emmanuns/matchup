import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditingPostPageRoutingModule } from './editing-post-routing.module';

import { EditingPostPage } from './editing-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditingPostPageRoutingModule
  ],
  declarations: [EditingPostPage]
})
export class EditingPostPageModule {}
