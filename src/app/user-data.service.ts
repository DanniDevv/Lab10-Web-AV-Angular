import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private users: { nombre: string, email: string }[] = [];

  addUser(user: { nombre: string, email: string }) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
}
