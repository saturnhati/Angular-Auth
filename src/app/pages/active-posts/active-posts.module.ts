import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ActivePostsPage } from './active-posts.page';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { PostDetailsPage } from 'src/app/shared-module/post-details.page';

const routes: Routes = [
  {
    path: '',
    component: ActivePostsPage,
  },
  {
    path: ':id',
    component: PostDetailsPage,
  },
];

@NgModule({
  declarations: [ActivePostsPage],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ActivePostsModule {}
