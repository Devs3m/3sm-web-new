import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://49.50.112.46:3002';

  constructor(private http: HttpClient, private router: Router) {}

  // Login user
  login(credentials: { email: string; password: string }): Observable<boolean> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials).pipe(
      map((response) => {
        localStorage.setItem('token', response.token);
        return true;
      })
    );
  }

  // Check if user is logged in
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    return token ? !helper.isTokenExpired(token) : false;
  }

  // Get logged-in user data
  getUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    return new JwtHelperService().decodeToken(token);
  }

  // Logout user
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}