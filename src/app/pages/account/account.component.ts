import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { AccountService } from '../service/account.service';
import { AuthService } from '../service/auth.service';
import { PermissionService } from '../service/permission.service';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { Workbook } from 'exceljs';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  @ViewChild('imageInput') imageInput!: ElementRef<HTMLInputElement>;

  isFormOpen = false;
  isEditMode = false;
  account!: any[];
  accountForm!: FormGroup;
  dropdownOptions: any[] = [];
  selectedItem: any;
  dropdownItems: any[] = [];
  apiData: any[] = [];
  totalAccounts: number = 0;
  activeAccounts: number = 0;
  deactiveAccounts: number = 0;
  errorMessage: string = '';
  currentUserId: number = 1;
  imagePreview: string | null = null;

  /** Column-wise filter values for PrimeNG table */
  filterAccountId = '';
  filterCompanyName = '';
  filterOwnerName = '';
  filterOwnerMobile = '';
  filterOwnerEmail = '';
  filterIsActive = '';

  constructor(
    private accountservice: AccountService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private permissionService: PermissionService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // Get logged-in user ID from JWT token
    this.getCurrentUserId();
    
    this.accountForm = this.formBuilder.group({
      companyname: ["", 
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
        [this.companyNameValidator.bind(this)]
      ],
      ownername: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      ownermobile: ["", 
        [Validators.required, Validators.pattern(/^[0-9]{10,12}$/)],
        [this.mobileNumberValidator.bind(this)]
      ],
      owneremail: ["", [Validators.email]],
      companyaddress: [""],
      companycity: ["", Validators.required],
      companystate: [""],
      companycountry: [""],
      companypincode: [""],
      licensecount: [""],
      accountimage: [null],
      createddate: [new Date()],
      updateddate: [new Date()],
      isactive: [true, Validators.required],
      createdby: [this.currentUserId],
      updatedby: [this.currentUserId],
      accountid: [0],
      cityid: [1]
    });

    this.getAccountDetails();
    this.getDropDownValue();
  }

  // Get current logged-in user ID from JWT token
  getCurrentUserId(): void {
    const user = this.authService.getUser();
    if (user) {
      // Try different possible property names for user ID in JWT token
      this.currentUserId = user.userId || user.userid || user.user_id || user.id || 1;
      console.log('Current logged-in user ID:', this.currentUserId);
      console.log('User data from token:', user);
    } else {
      console.warn('No user found in token, using default ID: 1');
      this.currentUserId = 1;
    }
  }

  // Async validator for company name
  companyNameValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    if (!control.value || control.value.trim() === '') {
      return of(null);
    }

    const companyName = control.value.trim();
    const currentAccountId = this.accountForm?.get('accountid')?.value || 0;

    return of(companyName).pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((name: string) => {
        return this.accountservice.checkCompanyNameExists(name, currentAccountId).pipe(
          map((exists: boolean) => {
            if (exists) {
              return { companyNameExists: true };
            }
            const localExists = this.checkCompanyNameInLocalDataSync(name, currentAccountId);
            return localExists ? { companyNameExists: true } : null;
          }),
          catchError(() => {
            const localExists = this.checkCompanyNameInLocalDataSync(name, currentAccountId);
            return of(localExists ? { companyNameExists: true } : null);
          })
        );
      })
    );
  }

  // Async validator for mobile number
  mobileNumberValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    if (!control.value || control.value.trim() === '') {
      return of(null);
    }

    const mobileNumber = control.value.trim().replace(/\D/g, '');
    const currentAccountId = this.accountForm?.get('accountid')?.value || 0;

    if (!/^[0-9]{10,12}$/.test(mobileNumber)) {
      return of(null);
    }

    return of(mobileNumber).pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((mobile: string) => {
        return this.accountservice.checkMobileNumberExists(mobile, currentAccountId).pipe(
          map((exists: boolean) => {
            if (exists) {
              return { mobileNumberExists: true };
            }
            const localExists = this.checkMobileInLocalDataSync(mobile, currentAccountId);
            return localExists ? { mobileNumberExists: true } : null;
          }),
          catchError(() => {
            const localExists = this.checkMobileInLocalDataSync(mobile, currentAccountId);
            return of(localExists ? { mobileNumberExists: true } : null);
          })
        );
      })
    );
  }

  // Synchronous check in local data for company name
  private checkCompanyNameInLocalDataSync(companyName: string, currentAccountId: number): boolean {
    if (!this.apiData || this.apiData.length === 0) {
      return false;
    }
    return this.apiData.some(account => 
      account.companyname && 
      account.companyname.toString().trim().toLowerCase() === companyName.toLowerCase() && 
      account.accountid !== currentAccountId
    );
  }

  // Synchronous check in local data for mobile
  private checkMobileInLocalDataSync(mobileNumber: string, currentAccountId: number): boolean {
    if (!this.apiData || this.apiData.length === 0) {
      return false;
    }
    return this.apiData.some(account => 
      account.ownermobile && 
      account.ownermobile.toString().trim().replace(/\D/g, '') === mobileNumber && 
      account.accountid !== currentAccountId
    );
  }

  get companyname() {
    return this.accountForm.get('companyname');
  }

  get ownermobile() {
    return this.accountForm.get('ownermobile');
  }

  get owneremail() {
    return this.accountForm.get('owneremail');
  }

  // Check if form has pending validators
  hasPendingValidators(): boolean {
    return Object.keys(this.accountForm.controls).some(key => {
      const control = this.accountForm.get(key);
      return control?.pending === true;
    });
  }

  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      this.errorMessage = 'Please select a valid image file.';
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      this.errorMessage = 'Image size must be less than 2MB.';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      this.imagePreview = base64;
      this.accountForm.patchValue({ accountimage: base64 });
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }

  removeImage(): void {
    this.imagePreview = null;
    this.accountForm.patchValue({ accountimage: null });
    if (this.imageInput) {
      this.imageInput.nativeElement.value = '';
    }
  }

  onSubmit(): void {
    // Mark all fields as touched to show validation errors
    this.markFormGroupTouched();
    
    // Check if form has pending async validators
    if (this.hasPendingValidators()) {
      this.errorMessage = 'Please wait while we validate your input...';
      return;
    }

    // Check if form is valid
    if (this.accountForm.valid) {
      this.errorMessage = '';
      
      // Update the updatedby field with current user ID before submission
      this.accountForm.patchValue({
        updatedby: this.currentUserId,
        updateddate: new Date()
      });
      
      if (this.isEditMode) {
        // Ensure cityid is set from selected city when companycity has a value
        const companycity = this.accountForm.get('companycity')?.value;
        if (companycity && this.dropdownItems?.length) {
          const selected = this.dropdownItems.find((item) => item.cityname === companycity);
          if (selected) {
            const cityid = selected.cityid ?? selected.cityId ?? 1;
            this.accountForm.patchValue({ cityid });
          }
        }
        const formData = { ...this.accountForm.value };
        // Ensure accountid is included in the update
        if (!formData.accountid || formData.accountid === 0) {
          console.error('Account ID is missing for update');
          this.errorMessage = 'Account ID is missing. Cannot update.';
          return;
        }
        
        console.log('Updating account with data:', formData);
        this.accountservice.updateAccount(formData).subscribe({
          next: (response: any) => {
            console.log('Account updated successfully:', response);
            this.getAccountDetails();
            this.getAccountCounts();
            this.restaccountForm();
            this.errorMessage = '';
          },
          error: (error: any) => {
            console.error('Error updating account:', error);
            if (error.status === 400 && error.error?.message) {
              this.errorMessage = error.error.message;
            } else if (error.error?.message) {
              this.errorMessage = error.error.message;
            } else if (error.status === 404) {
              this.errorMessage = 'Account not found. Please refresh and try again.';
            } else {
              this.errorMessage = 'Error updating account. Please try again.';
            }
          }
        });
      } else {
        this.createAccount();
      }
    } else {
      console.error('Form is Invalid');
      this.errorMessage = 'Please fill all required fields correctly.';
      
      // Log validation errors for debugging
      Object.keys(this.accountForm.controls).forEach(key => {
        const control = this.accountForm.get(key);
        if (control?.invalid) {
          console.log(`${key} errors:`, control.errors);
        }
      });
    }
  }

  createAccount(): void {
    this.errorMessage = '';
    
    // Ensure cityid is set from selected city when companycity has a value
    const companycity = this.accountForm.get('companycity')?.value;
    if (companycity && this.dropdownItems?.length) {
      const selected = this.dropdownItems.find((item) => item.cityname === companycity);
      if (selected) {
        const cityid = selected.cityid ?? selected.cityId ?? 1;
        this.accountForm.patchValue({ cityid });
      }
    }

    // Ensure createdby and updatedby are set to current user ID
    this.accountForm.patchValue({
      createdby: this.currentUserId,
      updatedby: this.currentUserId,
      createddate: new Date(),
      updateddate: new Date()
    });
    
    this.accountservice.addAccount(this.accountForm.value).subscribe({
      next: (data: any) => {
        console.log("Form Submitted", data);
        this.getAccountDetails();
        this.getAccountCounts();
        this.restaccountForm();
        this.errorMessage = '';
      },
      error: (err: any) => {
        console.error('Error creating account:', err);
        if (err.status === 400 && err.error?.message) {
          this.errorMessage = err.error.message;
        } else if (err.error?.message) {
          this.errorMessage = err.error.message;
        } else if (err.error?.error) {
          this.errorMessage = err.error.error;
        } else {
          this.errorMessage = 'Something went wrong. Please try again.';
        }
      }
    });
  }

  getAccountCounts(): void {
    this.getAccountDetails();
  }

  private byAccountId<T extends { accountid?: number; accountId?: number }>(list: T[], accountId: number): T[] {
    if (!Array.isArray(list) || accountId == null) return list || [];
    return list.filter((item: any) => {
      const id = item.accountid ?? item.accountId ?? item.account_id;
      return id != null && Number(id) === Number(accountId);
    });
  }

  getAccountDetails(): void {
    // Super Admin: backend returns all accounts; others get only their account (backend enforces scope)
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    this.accountservice.getAccountDetails().subscribe({
      next: (apidata: any) => {
        const raw = Array.isArray(apidata) ? apidata : [];
        const filtered = accountId != null ? this.byAccountId(raw, accountId) : raw;
        this.account = filtered.sort((a: any, b: any) => (b.accountid || 0) - (a.accountid || 0));
        this.apiData = [...this.account];
        this.totalAccounts = filtered.length;
        this.activeAccounts = filtered.filter((a: any) => a.isactive === true || a.isactive === 'true' || a.isactive === 1).length;
        this.deactiveAccounts = this.totalAccounts - this.activeAccounts;
        console.log('Sorted Account Details by Account ID (Descending):', this.account);
      },
      error: (err) => {
        console.error('Error fetching account details:', err);
      }
    });
  }

  getAccountOrderby(): void {
    this.accountservice.getAccountOrderby().subscribe({
      next: (apidata: any) => {
        this.account = apidata.sort((a: any, b: any) => b.createddate - a.createddate);
        console.log('Sorted Account Orderby Details:', this.account);
      }
    });
  }

  getDropDownValue() {
    this.accountservice.getDropdownItems().subscribe({
      next: (items) => (this.dropdownItems = items),
      error: (err) => console.error('Error fetching dropdown items', err),
    });
  }

  onSelectionChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Selected City Name:', selectedValue);
    const selectedItem = this.dropdownItems.find((item) => item.cityname === selectedValue);
    if (selectedItem) {
      const cityid = selectedItem.cityid ?? selectedItem.cityId ?? 1;
      this.accountForm.patchValue({
        cityid,
        companystate: selectedItem.citystate ?? selectedItem.cityState ?? '',
        companycountry: selectedItem.citycountry ?? selectedItem.cityCountry ?? ''
      });
      console.log('Selected City ID:', cityid);
    }
  }

  editItem(item: any): void {
    const row = item?.data ?? item;
    const accountid = row?.accountid ?? row?.accountId ?? (row ? row.accountid : null);
    if (!accountid) {
      this.errorMessage = 'Invalid account data. Cannot edit.';
      return;
    }
    this.isFormOpen = true;
    this.isEditMode = true;
    this.errorMessage = '';
    this.accountservice.getDetailsById(accountid).subscribe({
      next: (r) => {
        if (!r) return;
        this.accountForm.patchValue({
          accountid: r.accountid
        }, { emitEvent: false });
        const cityid = r.cityid ?? r.city?.cityid ?? r.city?.cityId ?? 1;
        this.accountForm.patchValue({
          companyname: r.companyname || '',
          ownername: r.ownername || '',
          ownermobile: r.ownermobile || '',
          owneremail: r.owneremail || '',
          companyaddress: r.companyaddress || '',
          companycity: r.companycity || '',
          companystate: r.companystate || '',
          companycountry: r.companycountry || '',
          companypincode: r.companypincode || '',
          licensecount: r.licensecount || '',
          accountimage: r.accountimage || null,
          isactive: r.isactive === true || r.isactive === 'true' || r.isactive === 1 ? 'true' : 'false',
          createddate: r.createddate || new Date(),
          updateddate: new Date(),
          createdby: r.createdby || 1,
          updatedby: r.updatedby || 1,
          cityid
        }, { emitEvent: false });
        this.imagePreview = r.accountimage || null;
        if (this.accountForm.invalid) {
          this.markFormGroupTouched();
        }
      },
      error: (err) => {
        console.error('Error fetching account details:', err);
        this.errorMessage = 'Error fetching account details. Please try again.';
      }
    });
  }

  deleteItem(item: any): void {
    if (confirm(`Are you sure you want to delete ${item.companyname}?`)) {
      this.accountservice.deleteAccount(item.accountid).subscribe({
        next: () => {
          console.log("Deleted:", item);
          this.getAccountDetails();
          this.getAccountCounts();
        },
        error: (err: any) => {
          console.error('Error deleting account', err);
          this.errorMessage = 'Error deleting account. Please try again.';
        }
      });
    }
  }

  onExporting(e: any): void {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Accounts Data');
    exportDataGrid({
      component: e.component,
      worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, 'AccountsData.xlsx');
      });
    });
    e.cancel = true;
  }

  toggleForm(): void {
    this.isFormOpen = true;
    this.errorMessage = '';
  }

  restaccountForm(): void {
    this.isFormOpen = false;
    this.isEditMode = false;
    this.errorMessage = '';
    
    // Get current user ID again in case it changed
    this.getCurrentUserId();
    
    this.imagePreview = null;
    if (this.imageInput) this.imageInput.nativeElement.value = '';

    // Reset form and set default values
    this.accountForm.reset({
      companyname: '',
      ownername: '',
      ownermobile: '',
      owneremail: '',
      companyaddress: '',
      companycity: '',
      companystate: '',
      companycountry: '',
      companypincode: '',
      licensecount: '',
      accountimage: null,
      isactive: 'true',
      createddate: new Date(),
      updateddate: new Date(),
      createdby: this.currentUserId,
      updatedby: this.currentUserId,
      accountid: 0,
      cityid: 1
    }, { emitEvent: false });
    
    // Clear validation errors
    Object.keys(this.accountForm.controls).forEach(key => {
      const control = this.accountForm.get(key);
      control?.setErrors(null);
      control?.markAsUntouched();
      control?.markAsPristine();
    });
  }

  markFormGroupTouched(): void {
    Object.keys(this.accountForm.controls).forEach(key => {
      const control = this.accountForm.get(key);
      control?.markAsTouched();
    });
  }
}
