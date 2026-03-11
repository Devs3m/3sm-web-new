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
      this.errorMessage = error.error?.message || 'Login failed. Try again.';
    }
  });
  }
}
