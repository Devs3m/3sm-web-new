import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../pages/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
onLogin() {
throw new Error('Method not implemented.');
}
  email = '';
  password = '';
  errorMessage = '';
loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      (success) => {
        if (success) {
          this.router.navigate(['/pages/dashboard']);
        }
      },
      (error) => {
        this.errorMessage = 'Invalid email or password';
      }
    );
  }
}
