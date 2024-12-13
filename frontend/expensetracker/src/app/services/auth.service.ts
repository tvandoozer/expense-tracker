import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/api/users`; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Method to check if user is authenticated
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // Returns true if token exists, otherwise false
  }

  register(userData: {
    name: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }

  // To get the token from localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // To set the token in localStorage
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // To remove the token from localStorage
  logout(): void {
    localStorage.removeItem('token');
  }

  // To check if the user is logged in
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
