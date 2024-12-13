import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
  imports: [CommonModule],
})
export class ExpenseListComponent implements OnInit {
  expenses: any[] = [];
  loading: boolean = true;

  constructor(private expenseService: ExpenseService, public router: Router) {}

  ngOnInit() {
    this.fetchExpenses();
  }

  fetchExpenses() {
    this.expenseService.getExpenses().subscribe(
      (data) => {
        this.expenses = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching expenses:', error);
        this.loading = false;
      }
    );
  }

  deleteExpense(id: string) {
    this.expenseService.deleteExpense(id).subscribe(
      () => {
        this.fetchExpenses();
      },
      (error) => {
        console.error('Error deleting expense:', error);
      }
    );
  }

  editExpense(id: string) {
    this.router.navigate([`/edit-expense/${id}`]);
  }
}
