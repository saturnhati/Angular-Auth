import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: LoginPage }];

@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule {}
