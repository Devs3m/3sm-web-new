import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { AuthService } from '../../service/auth.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-customer-form',
  templateUrl: './add-customer-form.component.html',
  styleUrls: ['./add-customer-form.component.css']
})
export class AddCustomerFormComponent implements OnInit {
  @Output() saved = new EventEmitter<any>();
  @Output() cancelled = new EventEmitter<void>();

  form: FormGroup;
  isSaving = false;
  errorMessage = '';
  cityDropdown: any[] = [];

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private authService: AuthService
  ) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.loadCities();
  }

  private buildForm(): FormGroup {
    const accountId = this.authService.getAccountId() ?? 1;
    const instanceId = this.authService.getInstanceId() ?? 1;
    const userId = this.authService.getUserId() ?? 1;
    return this.fb.group({
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
      createdby: [userId],
      updatedby: [userId]
    });
  }

  private loadCities(): void {
    this.customerService.getCityDropdown().pipe(
      catchError(() => of([]))
    ).subscribe((items) => {
      this.cityDropdown = Array.isArray(items) ? items : [];
    });
  }

  onCityChange(event: Event): void {
    const val = (event.target as HTMLSelectElement).value;
    const city = this.cityDropdown.find((c: any) => c.cityname === val);
    if (city) {
      this.form.patchValue({
        cityid: Number(city.cityid),
        customerstate: city.citystate,
        customercountry: city.citycountry
      });
    }
  }

  submit(): void {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(k => this.form.get(k)?.markAsTouched());
      this.errorMessage = 'Please fill all required fields correctly.';
      return;
    }
    this.isSaving = true;
    this.errorMessage = '';
    this.form.patchValue({
      createdby: this.authService.getUserId() ?? 1,
      updatedby: this.authService.getUserId() ?? 1,
      createddate: new Date(),
      updateddate: new Date()
    });
    this.customerService.addCustomer(this.form.value).subscribe({
      next: (res: any) => {
        this.isSaving = false;
        this.saved.emit({ ...this.form.value, ...res });
      },
      error: (err: any) => {
        this.isSaving = false;
        this.errorMessage = err?.error?.message || err?.error?.error || 'Failed to save customer. Please try again.';
      }
    });
  }

  close(): void {
    this.cancelled.emit();
  }
}
