import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);

  // Stato dell'utente con Signal
  user = signal<{ Email: string, Password : String } | null>(null);

  constructor() {
    this.loadUserFromLocalStorage();
  }

  login(email: string, password:string) {
    console.log(`Login effettuato ! : ${email} ${password}`);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', password)
    this.user.set({ Email : email, Password : password });
    this.router.navigate(['/']); // Reindirizza alla dashboard
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('Email');
    localStorage.removeItem('Password');
    this.user.set(null);
    this.router.navigate(['/']);
  }

  isAuthenticated() {
    return this.user() !== null;
  }

  private loadUserFromLocalStorage() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const _email = localStorage.getItem('Email');
    const _password = localStorage.getItem('Password');
    if (isLoggedIn && _email && _password) {
      this.user.set({ Email : _email, Password : _password });
    }
  }
}
