import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentingPage } from './commenting.page';

const routes: Routes = [
  {
    path: '',
    component: CommentingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentingPageRoutingModule {}
