import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { HomePage } from './pages/home.page';
import { ActivePostsPage } from './pages/active-posts.page';
import { InactivePostsPage } from './pages/inactive-posts.page';
import { PostCardComponent } from './components/post-card.component';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { PostDetailsPage } from './pages/post-details.page';
import { UsersPage } from './pages/users.page';
import { UsersDetailsPage } from './pages/users-details.page';
import { CoreModuleModule } from './core-module/core-module.module';
import { RegistrationPage } from './registration.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './login.page';
import { AuthGardGuard } from './auth-gard.guard';

const routes: Route[] = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'active-posts',
    component: ActivePostsPage,
  },
  {
    path: 'inactive-posts',
    component: InactivePostsPage,
    canActivate: [AuthGardGuard],
  },
  {
    path: 'active-posts/:id',
    component: PostDetailsPage,
  },
  {
    path: 'registration',
    component: RegistrationPage,
  },
  {
    path: 'inactive-posts/:id',
    component: PostDetailsPage,
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'users',
    component: UsersPage,
    children: [
      {
        path: ':id',
        component: UsersDetailsPage,
        canActivate: [AuthGardGuard],
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePage,
    ActivePostsPage,
    InactivePostsPage,
    PostCardComponent,
    MaiuscoloPipe,
    HighlightDirective,
    PostDetailsPage,
    UsersPage,
    UsersDetailsPage,
    RegistrationPage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CoreModuleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
