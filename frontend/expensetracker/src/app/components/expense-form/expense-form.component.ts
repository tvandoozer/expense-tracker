import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css'],
  imports: [CommonModule],
})
export class ExpenseFormComponent implements OnInit {
  id: string | null = null;
  name: string = '';
  amount: number | null = null;

  constructor(
    private expenseService: ExpenseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      // If an ID is provided, we are editing an existing expense
      this.expenseService.getExpense(this.id).subscribe((expense) => {
        this.name = expense.name;
        this.amount = expense.amount;
      });
    }
  }

  onSubmit(): void {
    if (this.id) {
      // Editing an existing expense
      this.expenseService
        .updateExpense(this.id, { name: this.name, amount: this.amount })
        .subscribe(() => {
          this.router.navigate(['/expenses']); // Navigate back to the expense list
        });
    } else {
      // Creating a new expense
      this.expenseService
        .addExpense({ name: this.name, amount: this.amount })
        .subscribe(() => {
          this.router.navigate(['/expenses']); // Navigate back to the expense list
        });
    }
  }
}
