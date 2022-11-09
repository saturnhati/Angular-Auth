import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InactivePostsPage } from './inactive-posts.page';
import { SharedModule } from 'src/app/shared-module/shared.module';

const routes: Routes = [{ path: '', component: InactivePostsPage }];

@NgModule({
  declarations: [InactivePostsPage],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class InactivePostsModule {}
