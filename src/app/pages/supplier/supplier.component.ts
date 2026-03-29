import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { saveAs } from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { SupplierService } from '../service/supplier.service';
import { AuthService } from '../service/auth.service';
import { PermissionService } from '../service/permission.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  isFormOpen = false;
  isEditMode = false;
  suppliers: any[] = [];
  supplierForm!: FormGroup;
  cityDropdown: any[] = [];

  totalSuppliers = 0;
  activeSuppliers = 0;
  deactiveSuppliers = 0;

  errorMessage = '';
  deleteCautionMessage = '';
  currentUserId = 1;

  constructor(
    private supplierService: SupplierService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private permissionService: PermissionService
  ) {}

  ngOnInit(): void {
    this.getCurrentUserId();
    this.initializeForm();
    this.loadSuppliers();
    this.loadCityDropdown();
  }

  getCurrentUserId(): void {
    const user = this.authService.getUser();
    this.currentUserId = user?.userId || user?.userid || user?.user_id || user?.id || 1;
  }

  initializeForm(): void {
    const accountId = this.authService.getAccountId() ?? 1;
    const instanceId = this.authService.getInstanceId() ?? 1;
    this.supplierForm = this.formBuilder.group({
      supplierid: [0],
      suppliername: ['', [Validators.required, Validators.minLength(2)]],
      supplieraddress: ['', Validators.required],
      suppliercity: ['', Validators.required],
      supplierstate: ['', Validators.required],
      suppliercountry: ['', Validators.required],
      supplierpin: ['', Validators.required],
      supplierphone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,12}$/)]],
      supplieremail: ['', Validators.email],
      suppliergst: [''],
      supplierfssi: [''],
      supplierpaypending: [0],
      supplierdiscount: [0],
      suppliercreditdays: [0],
      accountid: [accountId],
      instanceid: [instanceId],
      cityid: [null, Validators.required],
      createddate: [new Date()],
      updateddate: [new Date()],
      createdby: [this.currentUserId],
      updatedby: [this.currentUserId],
      isactive: ['true', Validators.required]
    });
  }

  private byAccountAndInstance(list: any[], accountId: number | null, instanceId: number | null): any[] {
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

  loadSuppliers(): void {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    const instanceId = isSuperAdmin ? null : this.authService.getInstanceId();

    this.supplierService.getSupplierList().subscribe({
      next: (data: any[]) => {
        const filtered = accountId != null
          ? this.byAccountAndInstance(data || [], accountId, instanceId ?? null)
          : (data || []);
        this.suppliers = filtered.sort((a, b) => Number(b.supplierid || 0) - Number(a.supplierid || 0));
        this.totalSuppliers = this.suppliers.length;
        this.activeSuppliers = this.suppliers.filter((x: any) => x.isactive === true || x.isactive === 'true' || x.isactive === 1).length;
        this.deactiveSuppliers = this.totalSuppliers - this.activeSuppliers;
      },
      error: (err) => {
        console.error('Error loading suppliers:', err);
        this.errorMessage = 'Failed to load suppliers. Please check API connection.';
      }
    });
  }

  loadCityDropdown(): void {
    this.supplierService.getCityDropdown().subscribe({
      next: (items) => (this.cityDropdown = items || []),
      error: (err) => console.error('Error loading city dropdown:', err)
    });
  }

  onCityChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    const selectedCity = this.cityDropdown.find(c => c.cityname === selectedValue);
    if (!selectedCity) return;
    this.supplierForm.patchValue({
      cityid: Number(selectedCity.cityid),
      supplierstate: selectedCity.citystate || '',
      suppliercountry: selectedCity.citycountry || ''
    });
  }

  toggleForm(): void {
    this.isFormOpen = true;
    this.isEditMode = false;
    this.errorMessage = '';
    this.deleteCautionMessage = '';
    this.getCurrentUserId();
    this.initializeForm();
  }

  editItem(item: any): void {
    const row = item?.data ?? item;
    const supplierid = row?.supplierid;
    if (!supplierid) {
      this.errorMessage = 'Invalid supplier data. Cannot edit.';
      return;
    }
    this.isFormOpen = true;
    this.isEditMode = true;
    this.errorMessage = '';
    this.deleteCautionMessage = '';

    this.supplierService.getDetailsById(supplierid).subscribe({
      next: (r) => {
        if (!r) return;
        this.supplierForm.patchValue({
          supplierid: r.supplierid,
          suppliername: r.suppliername || '',
          supplieraddress: r.supplieraddress || '',
          suppliercity: r.suppliercity || '',
          supplierstate: r.supplierstate || '',
          suppliercountry: r.suppliercountry || '',
          supplierpin: r.supplierpin || '',
          supplierphone: r.supplierphone || '',
          supplieremail: r.supplieremail || '',
          suppliergst: r.suppliergst || '',
          supplierfssi: r.supplierfssi || '',
          supplierpaypending: r.supplierpaypending ?? 0,
          supplierdiscount: r.supplierdiscount ?? 0,
          suppliercreditdays: r.suppliercreditdays ?? 0,
          accountid: r.accountid ?? this.authService.getAccountId() ?? 1,
          instanceid: r.instanceid ?? this.authService.getInstanceId() ?? 1,
          cityid: r.cityid ?? null,
          createddate: r.createddate || new Date(),
          updateddate: new Date(),
          createdby: r.createdby || 1,
          updatedby: this.currentUserId,
          isactive: r.isactive === true || r.isactive === 'true' || r.isactive === 1 ? 'true' : 'false'
        }, { emitEvent: false });
      },
      error: (err) => {
        console.error('Error fetching supplier details:', err);
        this.errorMessage = 'Error fetching supplier details. Please try again.';
      }
    });
  }

  deleteItem(item: any): void {
    const row = item?.data ?? item;
    const supplierid = row?.supplierid;
    const name = row?.suppliername || 'this supplier';
    if (!supplierid && supplierid !== 0) {
      this.errorMessage = 'Invalid supplier data. Cannot delete.';
      return;
    }
    if (!confirm(`Are you sure you want to delete ${name}?`)) return;

    this.supplierService.deleteSupplier(Number(supplierid)).subscribe({
      next: () => {
        this.errorMessage = '';
        this.deleteCautionMessage = '';
        this.loadSuppliers();
      },
      error: (err) => {
        console.error('Error deleting supplier:', err);
        if (err?.status === 409) {
          this.deleteCautionMessage =
            err?.error?.message ??
            'This supplier cannot be deleted because it is linked to transactions.';
          this.errorMessage = '';
        } else {
          this.deleteCautionMessage = '';
          this.errorMessage = err?.error?.message ?? 'Error deleting supplier. Please try again.';
        }
      }
    });
  }

  dismissDeleteCaution(): void {
    this.deleteCautionMessage = '';
  }

  onSubmit(): void {
    this.markFormGroupTouched();
    if (!this.supplierForm.valid) {
      this.errorMessage = 'Please fill all required fields correctly.';
      return;
    }

    this.errorMessage = '';
    this.supplierForm.patchValue({ updatedby: this.currentUserId, updateddate: new Date() });
    if (this.isEditMode) {
      const payload = { ...this.supplierForm.value };
      if (!payload.supplierid || payload.supplierid === 0) {
        this.errorMessage = 'Supplier ID is missing. Cannot update.';
        return;
      }
      this.supplierService.updateSupplier(payload).subscribe({
        next: () => {
          this.loadSuppliers();
          this.resetForm();
        },
        error: (err) => {
          this.errorMessage = err?.error?.message || 'Error updating supplier. Please try again.';
        }
      });
    } else {
      this.supplierForm.patchValue({ createdby: this.currentUserId, createddate: new Date() });
      this.supplierService.addSupplier(this.supplierForm.value).subscribe({
        next: () => {
          this.loadSuppliers();
          this.resetForm();
        },
        error: (err) => {
          this.errorMessage = err?.error?.message || 'Error creating supplier. Please try again.';
        }
      });
    }
  }

  resetForm(): void {
    this.isFormOpen = false;
    this.isEditMode = false;
    this.errorMessage = '';
    this.deleteCautionMessage = '';
    this.getCurrentUserId();
    this.initializeForm();
  }

  markFormGroupTouched(): void {
    Object.keys(this.supplierForm.controls).forEach(key => this.supplierForm.get(key)?.markAsTouched());
  }

  onExporting(e: any): void {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Suppliers');
    exportDataGrid({
      component: e.component,
      worksheet,
      autoFilterEnabled: true
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, 'SuppliersData.xlsx');
      });
    });
    e.cancel = true;
  }
}
