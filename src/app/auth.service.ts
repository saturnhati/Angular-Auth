import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UsersService, private router: Router) {}

  isLoggedIn: boolean = false;

  login(email: string, password: string) {
    this.userService.checkLogin(email);
    if (this.userService.presentEmail && password === '12345') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
