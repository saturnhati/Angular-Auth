import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [
    {
      email: 'c@fff.com',
      id: 1,
      name: 'carlo',
      role: 'user',
    },
    {
      email: 'luc@fff.com',
      id: 2,
      name: 'luca',
      role: 'admin',
    },
  ];

  constructor() {}

  presentEmail: boolean = false;

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.find((user) => user.id == id);
  }

  addUser(email: string, id: number, name: string, role: 'user') {
    let newUser: User = { email, id, name, role };
    console.log(newUser);
    this.users.push(newUser);
  }

  checkLogin(email: string) {
    for (let user of this.users) {
      if (user.email === email) {
        this.presentEmail = true;
      }
    }
    return this.presentEmail;
  }
}
