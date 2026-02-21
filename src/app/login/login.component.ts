import { Component,OnInit } from '@angular/core';
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
    this.errorMessage = ''; // Clear previous errors

    this.authService.login(credentials).subscribe({
     next: (response: any) => {
        if (response && response.success !== false) {
          // Login successful - permissions are already loaded by AuthService
          console.log('✅ Login successful, navigating to dashboard');
          console.log('Permissions loaded:', response.permissions?.length || 0);
          this.router.navigate(['/pages/dashboard']);
        } else {
          this.errorMessage = 'Invalid email or password';
        }
     },
    error: (error) => {
      console.error('Login error:', error);
      this.errorMessage = error.error?.message || 'Login failed. Try again.';
    }
  });
  console.log('Login button clicked', this.loginForm.value);
  }
}
