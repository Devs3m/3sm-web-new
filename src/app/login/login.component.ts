import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../pages/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage = '';


  constructor(private authService: AuthService, private router: Router,private fb: FormBuilder,) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  login() {
    if (this.loginForm.invalid){
      this.errorMessage = 'Form is invalid';
      return;
    }

    const credentials = this.loginForm.value;

    this.authService.login(credentials).subscribe({
     next: (success) => {
        if (success) {
          this.router.navigate(['/pages/dashboard']);
        }
      else {
        this.errorMessage = 'Invalid email or password';
      }
     },
    error: () => {
      this.errorMessage = 'Login failed. Try again.';
    }
  });
  console.log('Login button clicked', this.loginForm.value);
  }
}
