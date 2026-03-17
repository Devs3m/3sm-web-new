import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { AuthService } from '../service/auth.service';
import { PermissionService } from '../service/permission.service';
import { saveAs } from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  @ViewChild('formSection') formSection!: ElementRef;

  isFormOpen = false;
  isEditMode = false;
  customers: any[] = [];
  customerForm!: FormGroup;
  cityDropdown: any[] = [];
  totalCustomers: number = 0;
  activeCustomers: number = 0;
  deactiveCustomers: number = 0;
  errorMessage: string = '';
  currentUserId: number = 1;

  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private permissionService: PermissionService
  ) { }

  ngOnInit(): void {
    this.getCurrentUserId();
    this.initializeForm();
    this.loadCustomers();
    this.loadCounts();
    this.loadCityDropdown();
  }

  getCurrentUserId(): void {
    const user = this.authService.getUser();
    if (user) {
      this.currentUserId = user.userId || user.userid || user.user_id || user.id || 1;
    } else {
      this.currentUserId = 1;
    }
  }

  initializeForm(): void {
    const accountId = this.authService.getAccountId() ?? 1;
    const instanceId = this.authService.getInstanceId() ?? 1;
    this.customerForm = this.formBuilder.group({
      customerid: [0],
      customername: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      customermobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10,12}$/)]],
      customeremail: ['', [Validators.email]],
      customeraddress: [''],
      customercity: ['', Validators.required],
      customerstate: [''],
      customercountry: [''],
      customerpincode: [''],
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

  private byAccountId<T extends { accountid?: number; accountId?: number }>(list: T[], accountId: number): T[] {
    if (!Array.isArray(list) || accountId == null) return list || [];
    return list.filter((item: any) => {
      const id = item.accountid ?? item.accountId ?? item.account_id;
      return id != null && Number(id) === Number(accountId);
    });
  }

  private byAccountAndInstance<T extends { accountid?: number; accountId?: number; instanceid?: number; instanceId?: number }>(
    list: T[],
    accountId: number | null,
    instanceId: number | null
  ): T[] {
    if (!Array.isArray(list)) return [];
    if (accountId == null) return list;
    return list.filter((item: any) => {
      const accId = item.accountid ?? item.accountId ?? item.account_id;
      if (accId == null || Number(accId) !== Number(accountId)) return false;
      if (instanceId != null && instanceId !== 0) {
        const instId = item.instanceid ?? item.instanceId ?? item.instance_id;
        return instId != null && Number(instId) === Number(instanceId);
      }
      return true;
    });
  }

  loadCustomers(): void {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    const instanceId = isSuperAdmin ? null : this.authService.getInstanceId();
    this.customerService.getCustomerList().subscribe({
      next: (data: any[]) => {
        const raw = data || [];
        const filtered = accountId != null
          ? this.byAccountAndInstance(raw, accountId, instanceId ?? null)
          : raw;
        this.customers = filtered.sort((a, b) => Number(b.customerid || 0) - Number(a.customerid || 0));
        this.totalCustomers = this.customers.length;
        this.activeCustomers = this.customers.filter((c: any) => c.isactive === true || c.isactive === 'true' || c.isactive === 1).length;
        this.deactiveCustomers = this.totalCustomers - this.activeCustomers;
      },
      error: (err) => {
        console.error('Error loading customers:', err);
        this.errorMessage = 'Failed to load customers. Please check the API connection.';
      }
    });
  }

  loadCounts(): void {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    const instanceId = isSuperAdmin ? null : this.authService.getInstanceId();
    this.customerService.getCustomerList().subscribe({
      next: (data: any[]) => {
        const raw = data || [];
        const filtered = accountId != null
          ? this.byAccountAndInstance(raw, accountId, instanceId ?? null)
          : raw;
        this.totalCustomers = filtered.length;
        this.activeCustomers = filtered.filter((c: any) => c.isactive === true || c.isactive === 'true' || c.isactive === 1).length;
        this.deactiveCustomers = this.totalCustomers - this.activeCustomers;
      },
      error: (err) => console.error('Error loading counts:', err)
    });
  }

  loadCityDropdown(): void {
    this.customerService.getCityDropdown().subscribe({
      next: (items) => (this.cityDropdown = items),
      error: (err) => console.error('Error loading cities:', err)
    });
  }

  onCityChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    const selectedCity = this.cityDropdown.find(c => c.cityname === selectedValue);
    if (selectedCity) {
      this.customerForm.patchValue({
        cityid: Number(selectedCity.cityid),
        customerstate: selectedCity.citystate,
        customercountry: selectedCity.citycountry
      });
    }
  }

  toggleForm(): void {
    this.isFormOpen = true;
    this.isEditMode = false;
    this.errorMessage = '';
    this.getCurrentUserId();
    this.initializeForm();
  }

  editItem(item: any): void {
    const row = item?.data ?? item;
    const customerid = row?.customerid ?? row?.customerId ?? (row ? row.customerid : null);
    if (!customerid) {
      this.errorMessage = 'Invalid customer data. Cannot edit.';
      return;
    }
    this.isFormOpen = true;
    this.isEditMode = true;
    this.errorMessage = '';
    this.customerService.getDetailsById(customerid).subscribe({
      next: (r) => {
        if (!r) return;
        this.customerForm.patchValue({
          customerid: r.customerid,
          customername: r.customername || '',
          customermobile: r.customermobile || '',
          customeremail: r.customeremail || '',
          customeraddress: r.customeraddress || '',
          customercity: r.customercity || '',
          customerstate: r.customerstate || '',
          customercountry: r.customercountry || '',
          customerpincode: r.customerpincode || '',
          accountid: r.accountid ?? this.authService.getAccountId() ?? 1,
          instanceid: r.instanceid ?? this.authService.getInstanceId() ?? 1,
          cityid: r.cityid || 1,
          isactive: r.isactive === true || r.isactive === 'true' || r.isactive === 1 ? 'true' : 'false',
          createddate: r.createddate || new Date(),
          updateddate: new Date(),
          createdby: r.createdby || 1,
          updatedby: this.currentUserId
        }, { emitEvent: false });
      },
      error: (err) => {
        console.error('Error fetching customer details:', err);
        this.errorMessage = 'Error fetching customer details. Please try again.';
      }
    });
  }

  deleteItem(item: any): void {
    if (confirm(`Are you sure you want to delete ${item.customername}?`)) {
      this.customerService.deleteCustomer(item.customerid).subscribe({
        next: () => {
          this.loadCustomers();
          this.loadCounts();
        },
        error: (err) => {
          console.error('Error deleting customer:', err);
          this.errorMessage = 'Error deleting customer. Please try again.';
        }
      });
    }
  }

  onSubmit(): void {
    this.markFormGroupTouched();
    if (!this.customerForm.valid) {
      this.errorMessage = 'Please fill all required fields correctly.';
      return;
    }

    this.errorMessage = '';
    this.customerForm.patchValue({ updatedby: this.currentUserId, updateddate: new Date() });

    if (this.isEditMode) {
      const formData = { ...this.customerForm.value };
      if (!formData.customerid || formData.customerid === 0) {
        this.errorMessage = 'Customer ID is missing. Cannot update.';
        return;
      }
      this.customerService.updateCustomer(formData).subscribe({
        next: () => {
          this.loadCustomers();
          this.loadCounts();
          this.resetForm();
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Error updating customer. Please try again.';
        }
      });
    } else {
      this.customerForm.patchValue({ createdby: this.currentUserId, createddate: new Date() });
      this.customerService.addCustomer(this.customerForm.value).subscribe({
        next: () => {
          this.loadCustomers();
          this.loadCounts();
          this.resetForm();
        },
        error: (err) => {
          this.errorMessage = err.error?.message || err.error?.error || 'Something went wrong. Please try again.';
        }
      });
    }
  }

  resetForm(): void {
    this.isFormOpen = false;
    this.isEditMode = false;
    this.errorMessage = '';
    this.getCurrentUserId();
    const accountId = this.authService.getAccountId() ?? 1;
    const instanceId = this.authService.getInstanceId() ?? 1;
    this.customerForm.reset({
      customerid: 0,
      customername: '',
      customermobile: '',
      customeremail: '',
      customeraddress: '',
      customercity: '',
      customerstate: '',
      customercountry: '',
      customerpincode: '',
      accountid: accountId,
      instanceid: instanceId,
      cityid: null,
      isactive: 'true',
      createddate: new Date(),
      updateddate: new Date(),
      createdby: this.currentUserId,
      updatedby: this.currentUserId
    }, { emitEvent: false });
    Object.keys(this.customerForm.controls).forEach(key => {
      const ctrl = this.customerForm.get(key);
      ctrl?.setErrors(null);
      ctrl?.markAsUntouched();
      ctrl?.markAsPristine();
    });
  }

  markFormGroupTouched(): void {
    Object.keys(this.customerForm.controls).forEach(key => {
      this.customerForm.get(key)?.markAsTouched();
    });
  }

  onExporting(e: any): void {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Customers');
    exportDataGrid({
      component: e.component,
      worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, 'CustomersData.xlsx');
      });
    });
    e.cancel = true;
  }
}
