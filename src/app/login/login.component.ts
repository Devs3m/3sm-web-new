import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../pages/service/auth.service';
import { PermissionService } from '../pages/service/permission.service';

interface BgWord {
  text: string;
  top: number;
  left: number;
  fontSize: number;
  opacity: number;
  fontFamily: string;
  rotate: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage = '';

  private wordList = [
    'Customer', 'Client', 'Guest', 'Buyer', 'Patron',
    'Consumer', 'Member', 'Subscriber', 'Visitor', 'Vendor',
    'Supplier', 'Merchant', 'Retailer', 'Distributor', 'Partner',
    'Franchisee', 'Wholesaler', 'Reseller', 'Order', 'Booking',
    'Reservation', 'Appointment', 'Inquiry', 'Request', 'Ticket',
    'Interaction', 'Engagement', 'Session', 'Contact', 'Conversation',
    'Chat', 'Message', 'Notification', 'Feedback', 'Complaint',
    'Support Request', 'Follow-up', 'Transaction', 'Payment', 'Loyalty Member',
    'Reward Points', 'Referral', 'Membership', 'Subscription', 'Campaign',
    'Offer', 'Promotion', 'Invoice', 'Shopper', 'Walk-in Customer',
    'Repeat Customer', 'Diner', 'Table Booking', 'Host', 'Billing',
    'Patient', 'Caregiver', 'Practitioner', 'Checkout', 'Appointment Holder',
    'Service Requester', 'Receipt', 'Settlement', 'Refund', 'Credit',
    'Debit', 'Account', 'Stakeholder', 'Decision Maker', 'Organization Contact'
  ];

  private fontFamilies = [
    'Georgia, serif',
    'Arial, sans-serif',
    'Courier New, monospace',
    '"Trebuchet MS", sans-serif',
    'Verdana, sans-serif',
    '"Times New Roman", serif',
    'Impact, sans-serif',
    '"Palatino Linotype", serif',
    '"Comic Sans MS", cursive',
    '"Brush Script MT", cursive',
    'Tahoma, sans-serif',
    '"Century Gothic", sans-serif'
  ];

  bgWords: BgWord[] = [];

  private seededRandom(seed: number): number {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  private generateBgWords(): void {
    this.bgWords = this.wordList.map((text, i) => ({
      text,
      top:        Math.round(this.seededRandom(i * 3 + 1) * 90),
      left:       Math.round(this.seededRandom(i * 3 + 2) * 88),
      fontSize:   10 + Math.round(this.seededRandom(i * 3 + 3) * 26),
      opacity:    0.05 + parseFloat((this.seededRandom(i * 7) * 0.12).toFixed(2)),
      fontFamily: this.fontFamilies[i % this.fontFamilies.length],
      rotate:     Math.round((this.seededRandom(i * 5) - 0.5) * 50)
    }));
  }

  /** Forgot password flow: get question -> validate answer -> reset password */
  forgotStep: 'login' | 'forgot-email' | 'forgot-answer' | 'forgot-reset' = 'login';
  forgotEmail = '';
  forgotQuestion = '';
  forgotAnswerForm!: FormGroup;
  forgotResetForm!: FormGroup;
  forgotErrorMessage = '';
  forgotSuccessMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private permissionService: PermissionService
  ) {
    this.generateBgWords();
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.forgotAnswerForm = this.fb.group({
      answer: ['', Validators.required]
    });
    this.forgotResetForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(1)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: AbstractControl): ValidationErrors | null {
    const newPassword = g.get('newPassword')?.value;
    const confirm = g.get('confirmPassword')?.value;
    if (newPassword !== confirm) return { passwordMismatch: true };
    return null;
  }

  showForgotPassword(): void {
    this.forgotStep = 'forgot-email';
    this.forgotEmail = this.loginForm.get('email')?.value || '';
    this.forgotQuestion = '';
    this.forgotErrorMessage = '';
    this.forgotSuccessMessage = '';
    this.forgotAnswerForm.reset();
    this.forgotResetForm.reset();
  }

  backToLogin(): void {
    this.forgotStep = 'login';
    this.forgotErrorMessage = '';
    this.forgotSuccessMessage = '';
  }

  getForgotQuestion(): void {
    const email = this.forgotEmail.trim();
    if (!email) {
      this.forgotErrorMessage = 'Please enter your email.';
      return;
    }
    this.forgotErrorMessage = '';
    this.authService.getForgotPasswordQuestion(email).subscribe({
      next: (res) => {
        this.forgotQuestion = res.question;
        this.forgotStep = 'forgot-answer';
      },
      error: (err) => {
        this.forgotErrorMessage = err?.error?.message || 'No security question found for this email.';
      }
    });
  }

  validateForgotAnswer(): void {
    if (this.forgotAnswerForm.invalid) {
      this.forgotErrorMessage = 'Please enter your answer.';
      return;
    }
    this.forgotErrorMessage = '';
    const email = this.forgotEmail.trim();
    const answer = this.forgotAnswerForm.get('answer')?.value;
    this.authService.validateForgotPasswordAnswer(email, answer).subscribe({
      next: () => {
        this.forgotSuccessMessage = '';
        this.forgotResetForm.reset();
        this.forgotStep = 'forgot-reset';
      },
      error: (err) => {
        this.forgotErrorMessage = err?.error?.message || 'Invalid answer.';
      }
    });
  }

  submitResetPassword(): void {
    if (this.forgotResetForm.invalid) {
      if (this.forgotResetForm.hasError('passwordMismatch')) {
        this.forgotErrorMessage = 'New password and confirm password do not match.';
      } else {
        this.forgotErrorMessage = 'Please fill all fields and ensure passwords match.';
      }
      return;
    }
    this.forgotErrorMessage = '';
    const email = this.forgotEmail.trim();
    const answer = this.forgotAnswerForm.get('answer')?.value;
    const newPassword = this.forgotResetForm.get('newPassword')?.value;
    this.authService.resetPassword(email, answer, newPassword).subscribe({
      next: () => {
        this.forgotSuccessMessage = 'Password has been reset. You can now login with your new password.';
        setTimeout(() => this.backToLogin(), 2500);
      },
      error: (err) => {
        this.forgotErrorMessage = err?.error?.message || 'Unable to reset password.';
      }
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
          const u = response?.user;
          console.log('Login user (raw):', u);
          console.log('Login userrole linked:', {
            // API typically returns role/roleId; keep userrole* fallbacks for older shapes.
            roleId: u?.roleId ?? u?.roleid ?? u?.role_id,
            role: u?.role ?? u?.roleName ?? u?.rolename ?? u?.role_name,
            userroleid: u?.userroleid ?? u?.userroleId ?? u?.userrole?.userroleid ?? u?.userrole?.userroleId ?? u?.userrole2?.userroleid ?? u?.userrole2?.userroleId,
            userrolename: u?.userrole ?? u?.userrolename ?? u?.userroleName ?? u?.userrole2?.userrolename ?? u?.userrole2?.userroleName ?? u?.userrole?.userrolename ?? u?.userrole?.userroleName,
            userid: u?.id ?? u?.userId ?? u?.userid,
            username: u?.username,
            email: u?.email ?? u?.useremail
          });
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
