
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  }, 
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'posting',
    loadChildren: () => import('./pages/posting/posting.module').then( m => m.PostingPageModule)
  },
  {
    path: 'comments/:id',
    loadChildren: () => import('./pages/comments/comments.module').then( m => m.CommentsPageModule)
  },
  {
    path: 'commenting/:id',
    loadChildren: () => import('./pages/commenting/commenting.module').then( m => m.CommentingPageModule)
  },
  {
    path: 'friends',
    loadChildren: () => import('./pages/friends/friends.module').then( m => m.FriendsPageModule)
  },
  {
    path: 'editing-post/:id',
    loadChildren: () => import('./pages/editing-post/editing-post.module').then( m => m.EditingPostPageModule)
  },  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
