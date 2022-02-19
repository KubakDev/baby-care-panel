import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user.mode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;
  user? = new BehaviorSubject<User | null>(null);

  constructor() {}

  login(uname: string, pass: string): string | void {
    if (uname === 'sher' && pass === '1q2w3e') {
      const user = new User(uname, pass, 'shelgir token');
      this.isAuthenticated = true;
      this.user?.next(user);
      localStorage.setItem('token', 'shelgir token');
    } else {
      return 'Incorrect username or password';
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.user?.next(null);
    localStorage.clear();
  }
}
