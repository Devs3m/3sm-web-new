import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../pages/service/auth.service';
import { PermissionService } from '../pages/service/permission.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private permissionService: PermissionService
  ) {
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
          if (response.permissions && Array.isArray(response.permissions) && response.permissions.length > 0) {
            this.permissionService.setPermissionsFromLogin(response.permissions, response.user);
          } else {
            this.permissionService.loadCurrentUserPermissions();
          }
          this.router.navigate(['/pages/dashboard']);
        } else {
          this.errorMessage = 'Invalid email or password';
        }
     },
    error: (error) => {
      console.error('Login error:', error);
      const msg = error?.error?.message || error?.error?.error || error?.message;
      const status = error?.status;
      if (status === 401) {
        this.errorMessage = 'Invalid email or password.';
      } else if (status === 403) {
        this.errorMessage = msg || 'Access denied. Please contact administrator.';
      } else if (status === 0) {
        this.errorMessage = 'Cannot reach server. Check API URL and network.';
      } else {
        this.errorMessage = msg || `Login failed (${status || 'error'}). Try again.`;
      }
    }
  });
  }
}
