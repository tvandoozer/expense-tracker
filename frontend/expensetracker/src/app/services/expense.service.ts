import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private apiUrl = `${environment.apiUrl}/api/expenses`;

  constructor(private http: HttpClient) {}

  // Get all expenses
  getExpenses() {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Get expense
  getExpense(id: string) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  // Add a new expense
  addExpense(expenseData: any): Observable<any> {
    return this.http.post(this.apiUrl, expenseData, this.getHttpOptions());
  }

  // Update an expense
  updateExpense(id: string, expenseData: any): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/${id}`,
      expenseData,
      this.getHttpOptions()
    );
  }

  // Delete an expense
  deleteExpense(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getHttpOptions());
  }

  // Helper to add the JWT token to request headers
  private getHttpOptions() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
  }
}
