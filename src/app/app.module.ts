import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { SharedModule } from './shared-module/shared.module';

const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  // {
  //   path: '',
  //   component: HomePage,
  // },
  // {
  //   path: 'active-posts',
  //   component: ActivePostsPage,
  // },
  // {
  //   path: 'inactive-posts',
  //   component: InactivePostsPage,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'active-posts/:id',
  //   component: PostDetailsPage,
  // },
  // {
  //   path: 'registration',
  //   component: RegistrationPage,
  // },
  // {
  //   path: 'inactive-posts/:id',
  //   component: PostDetailsPage,
  // },
  // {
  //   path: 'login',
  //   component: LoginPage,
  // },
  // {
  //   path: 'users',
  //   component: UsersPage,
  //   children: [
  //     {
  //       path: ':id',
  //       component: UsersDetailsPage,
  //       canActivate: [AuthGuard],
  //     },
  //   ],
  // },
  {
    path: 'active-posts',
    loadChildren: () =>
      import('./pages/active-posts/active-posts.module').then(
        (m) => m.ActivePostsModule
      ),
  },
  {
    path: 'inactive-posts',
    loadChildren: () =>
      import('./pages/inactive-posts/inactive-posts.module').then(
        (m) => m.InactivePostsModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./pages/registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
