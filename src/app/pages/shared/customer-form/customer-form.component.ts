import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { AuthService } from '../../service/auth.service';
import { timeout, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  /** When true, hide the "Add Customer" title and close button (e.g. when used inside a popup that has its own header) */
  @Input() hideHeader = false;
  /** Emits the saved customer object so the parent can react (e.g. auto-select) */
  @Output() customerSaved = new EventEmitter<any>();
  /** Emits when the user clicks Cancel / close */
  @Output() cancelled = new EventEmitter<void>();

  customerForm!: FormGroup;
  cityDropdown: any[] = [];
  errorMessage = '';
  isSaving = false;
  currentUserId = 1;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    console.log('[CustomerForm] Add Customer form initializing (modal opened)');
    const user = this.authService.getUser();
    if (user) {
      this.currentUserId = user.userId || user.userid || user.user_id || user.id || 1;
    }
    this.initForm();
    this.loadCities();
  }

  private initForm(): void {
    const accountId = this.authService.getAccountId() ?? 1;
    const instanceId = this.authService.getInstanceId() ?? 1;
    this.customerForm = this.fb.group({
      customerid: [0],
      customername: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      customermobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10,12}$/)]],
      customeremail: ['', [Validators.email]],
      customeraddress: [''],
      customercity: ['', Validators.required],
      customerstate: [''],
      customercountry: [''],
      customerpincode: [''],
      customergstno: [''],
      accountid: [accountId],
      instanceid: [instanceId],
      cityid: [null],
      isactive: ['true', Validators.required],
      createddate: [new Date()],
      updateddate: [new Date()],
      createdby: [this.currentUserId],
      updatedby: [this.currentUserId]
    });
  }

  private loadCities(): void {
    console.log('[CustomerForm] Calling getCityDropdown API for city list');
    this.customerService.getCityDropdown().pipe(
      timeout(4000),
      catchError(() => of([]))
    ).subscribe((items) => {
      this.cityDropdown = Array.isArray(items) ? items : [];
      console.log('[CustomerForm] getCityDropdown response: cities count =', this.cityDropdown.length);
    });
  }

  onCityChange(event: Event): void {
    const val = (event.target as HTMLSelectElement).value;
    const city = this.cityDropdown.find(c => c.cityname === val);
    if (city) {
      this.customerForm.patchValue({
        cityid: Number(city.cityid),
        customerstate: city.citystate,
        customercountry: city.citycountry
      });
    }
  }

  onSubmit(): void {
    if (this.customerForm.invalid) {
      Object.keys(this.customerForm.controls).forEach(k =>
        this.customerForm.get(k)?.markAsTouched()
      );
      this.errorMessage = 'Please fill all required fields correctly.';
      return;
    }
    this.isSaving = true;
    this.errorMessage = '';
    this.customerForm.patchValue({
      createdby: this.currentUserId,
      updatedby: this.currentUserId,
      createddate: new Date(),
      updateddate: new Date()
    });
    this.customerService.addCustomer(this.customerForm.value).subscribe({
      next: (res: any) => {
        this.isSaving = false;
        this.customerSaved.emit({ ...this.customerForm.value, ...res });
      },
      error: (err: any) => {
        this.isSaving = false;
        this.errorMessage =
          err?.error?.message || err?.error?.error || 'Failed to save customer. Please try again.';
      }
    });
  }

  onCancel(): void {
    this.cancelled.emit();
  }
}
