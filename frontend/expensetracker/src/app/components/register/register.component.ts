import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule],
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    this.authService.register(userData).subscribe(
      (response) => {
        this.authService.setToken(response.token);
        this.router.navigate(['/expenses']);
      },
      (error) => {
        this.errorMessage = 'Registration failed';
      }
    );
  }
}
