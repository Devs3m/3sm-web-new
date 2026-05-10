import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService, SalesSettings } from '../service/settings.service';
import { MenuSettingsService, MenuItemSetting } from '../service/menu-settings.service';
import { QuickProductSettingsService, QuickProductField } from '../service/quick-product-settings.service';
import { PermissionService } from '../service/permission.service';
import { AuthService } from '../service/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  salesForm!: FormGroup;
  savedMessage = '';
  menuItems: MenuItemSetting[] = [];
  menuSavedMessage = '';

  // Quick product fields
  quickProductFields: QuickProductField[] = [];
  quickProductSavedMessage = '';

  // Admin user management
  isAdmin = false;
  accountUsers: any[] = [];
  selectedUserId: number | null = null;
  targetMenuItems: MenuItemSetting[] = [];
  targetSavedMessage = '';
  targetSaving = false;

  private apiUrl = environment.apiUrl;

  constructor(
    private settingsService: SettingsService,
    private formBuilder: FormBuilder,
    public menuSettings: MenuSettingsService,
    private permissionService: PermissionService,
    private authService: AuthService,
    private http: HttpClient,
    private quickProductSettingsService: QuickProductSettingsService
  ) {}

  private hasAccess(key: string): boolean {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    switch (key) {
      case 'dashboard':
      case 'settings':
        return true;
      case 'account':        return isSuperAdmin || this.permissionService.hasAnyPermissionForResource('account');
      case 'instance':       return isSuperAdmin || this.permissionService.hasAnyPermissionForResource('instance');
      case 'user':           return isSuperAdmin || this.permissionService.hasAnyPermissionForResource('user');
      case 'userrole':       return this.permissionService.canManageRbac();
      case 'digicard':
      case 'vcard':          return isSuperAdmin || this.permissionService.hasAnyPermissionForResource('digicard');
      case 'product':        return isSuperAdmin || this.permissionService.hasAnyPermissionForResource('product');
      case 'sales':          return isSuperAdmin || this.permissionService.hasAnyPermissionForResource('sales');
      case 'inventorysales': return isSuperAdmin || this.permissionService.hasAnyPermissionForResource('sales');
      case 'customer':       return isSuperAdmin || this.permissionService.hasAnyPermissionForResource('customer');
      case 'supplier':       return isSuperAdmin || this.permissionService.hasAnyPermissionForResource('supplier');
      case 'purchase':       return isSuperAdmin || this.permissionService.hasAnyPermissionForResource('purchase');
      case 'orders':         return true;
      case 'city':           return isSuperAdmin || this.permissionService.hasAnyPermissionForResource('city');
      case 'gst':            return isSuperAdmin || this.permissionService.hasAnyPermissionForResource('gst');
      case 'vat':            return isSuperAdmin || this.permissionService.hasAnyPermissionForResource('vat');
      case 'reports':        return isSuperAdmin || this.permissionService.hasAnyPermissionForResource('sales');
      case 'quickproduct':   return isSuperAdmin || this.permissionService.hasAnyPermissionForResource('product');
      default:               return false;
    }
  }

  ngOnInit(): void {
    this.isAdmin = this.permissionService.isSuperAdmin() ||
      this.permissionService.hasAnyPermissionForResource('user');

    this.menuItems = this.menuSettings.getMenuItems();

    if (this.isAdmin) {
      this.loadAccountUsers();
    }
    this.quickProductFields = this.quickProductSettingsService.getFields();
    this.quickProductSettingsService.loadFromApi().subscribe(fields => {
      if (Array.isArray(fields) && fields.length) {
        this.quickProductFields = fields;
      }
    });
    this.settingsService.refreshFromApi();
    const sales = this.settingsService.getSalesSettings();
    this.salesForm = this.formBuilder.group({
      expiryConfigEnabled: [sales.expiryConfigEnabled],
      hideProductsDaysBeforeExpiry: [
        sales.hideProductsDaysBeforeExpiry,
        [Validators.required, Validators.min(0), Validators.max(365)],
      ],
      gstInclusive: [sales.gstInclusive],
      hideBatchNoAndExpiryInProductSales: [sales.hideBatchNoAndExpiryInProductSales ?? false],
      allowDecimalQtyInSales: [sales.allowDecimalQtyInSales ?? false],
      mrpEditableInInventorySales: [sales.mrpEditableInInventorySales ?? false],
    });
  }

  loadAccountUsers(): void {
    const accountId = this.authService.getAccountId();
    const instanceId = this.authService.getInstanceId();
    const myId = this.authService.getUserId();
    this.http.get<any[]>(`${this.apiUrl}/user/list`).subscribe({
      next: (users) => {
        this.accountUsers = (users || []).filter((u: any) => {
          const aid = Number(u.accountid ?? u.accountId ?? 0);
          const iid = Number(u.instanceid ?? u.instanceId ?? 0);
          return aid === accountId && iid === instanceId && Number(u.userid ?? u.userId) !== myId;
        });
      },
      error: () => {}
    });
  }

  onUserSelect(userId: number): void {
    this.selectedUserId = userId;
    this.targetMenuItems = [];
    this.targetSavedMessage = '';
    this.http.get<{ menuSettings: any[] }>(`${this.apiUrl}/settings/user-preferences/${userId}`).pipe(
    ).subscribe({
      next: (res) => {
        this.targetMenuItems = this.menuSettings['merge'](res?.menuSettings ?? []);
      },
      error: () => {
        this.targetMenuItems = this.menuSettings['merge']([]);
      }
    });
  }

  saveTargetMenuSettings(): void {
    if (!this.selectedUserId) return;
    this.targetSaving = true;
    this.http.put(`${this.apiUrl}/settings/user-preferences/${this.selectedUserId}`, {
      menuSettings: this.targetMenuItems.map(({ key, enabled }) => ({ key, enabled }))
    }).subscribe({
      next: () => {
        this.targetSavedMessage = 'Settings saved for user.';
        this.targetSaving = false;
        setTimeout(() => this.targetSavedMessage = '', 3000);
      },
      error: () => {
        this.targetSavedMessage = 'Failed to save. Please try again.';
        this.targetSaving = false;
      }
    });
  }

  saveMenuSettings(): void {
    this.menuSettings.saveMenuItems(this.menuItems).subscribe({
      next: () => {
        this.menuSavedMessage = 'Menu settings saved.';
        setTimeout(() => { this.menuSavedMessage = ''; window.location.reload(); }, 1000);
      },
      error: () => {
        this.menuSavedMessage = 'Saved locally (API unavailable).';
        setTimeout(() => { this.menuSavedMessage = ''; window.location.reload(); }, 1500);
      }
    });
  }

  isQuickProductEnabled(): boolean {
    return this.menuItems.find(m => m.key === 'quickproduct')?.enabled ?? false;
  }

  saveQuickProductFields(): void {
    this.quickProductSettingsService.saveFields(this.quickProductFields).subscribe({
      next: () => {
        this.quickProductSavedMessage = 'Quick product fields saved.';
        setTimeout(() => this.quickProductSavedMessage = '', 3000);
      },
      error: () => {
        this.quickProductSavedMessage = 'Saved locally (API unavailable).';
        setTimeout(() => this.quickProductSavedMessage = '', 3000);
      }
    });
  }

  saveSalesSettings(): void {
    if (this.salesForm.invalid) return;
    const v = this.salesForm.value;
    this.settingsService.setSalesSettings({
      expiryConfigEnabled: !!v.expiryConfigEnabled,
      hideProductsDaysBeforeExpiry: Math.max(0, Number(v.hideProductsDaysBeforeExpiry) || 0),
      gstInclusive: !!v.gstInclusive,
      hideBatchNoAndExpiryInProductSales: !!v.hideBatchNoAndExpiryInProductSales,
      allowDecimalQtyInSales: !!v.allowDecimalQtyInSales,
      mrpEditableInInventorySales: !!v.mrpEditableInInventorySales,
    });
    this.savedMessage = 'Settings saved successfully.';
    setTimeout(() => (this.savedMessage = ''), 3000);
  }
}
