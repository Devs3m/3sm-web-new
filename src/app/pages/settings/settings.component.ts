import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService, SalesSettings } from '../service/settings.service';
import { MenuSettingsService, MenuItemSetting } from '../service/menu-settings.service';
import { QuickProductSettingsService, QuickProductField } from '../service/quick-product-settings.service';
import { PermissionService } from '../service/permission.service';
import { AuthService } from '../service/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConsumerPortalComponent } from '../../consumer-portal/consumer-portal.component';

export interface SyncEntity {
  key: string;
  label: string;
  endpoint: string;
  status: 'idle' | 'syncing' | 'success' | 'error';
  message: string;
}

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

  // Single save
  isSavingAll = false;
  saveAllMessage = '';

  // Admin user management
  isAdmin = false;
  isAdministrator = false;
  accountUsers: any[] = [];
  selectedUserId: number | null = null;
  targetMenuItems: MenuItemSetting[] = [];
  targetSavedMessage = '';
  targetSaving = false;

  private apiUrl = environment.apiUrl;
  readonly isOffline = (environment as any).provisionOnlineBaseUrl === '/api' ||
                       (window.location.hostname === 'localhost' && (environment as any).apiUrl === '/api');
  readonly onlineBase: string = (environment as any).provisionOnlineBaseUrl || '';

  readonly envInfo = this.buildEnvInfo();
  get isSuperAdmin(): boolean { return this.permissionService.isSuperAdmin(); }

  portalLinkCopied = false;

  getPortalToken(accountId: number, instanceId: number): string {
    return ConsumerPortalComponent.encodePortalToken(accountId, instanceId);
  }

  getMaskedPortalUrl(accountId: number, instanceId: number): string {
    const token = this.getPortalToken(accountId, instanceId);
    return `${window.location.origin}/portal/${token}`;
  }

  copyPortalLink(accountId: number, instanceId: number): void {
    navigator.clipboard.writeText(this.getMaskedPortalUrl(accountId, instanceId)).then(() => {
      this.portalLinkCopied = true;
      setTimeout(() => this.portalLinkCopied = false, 2000);
    });
  }

  private buildEnvInfo() {
    const apiUrl: string = (environment as any).apiUrl || '';
    const production: boolean = (environment as any).production ?? false;
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

    let configName = 'Unknown';
    let db = 'Unknown';
    let frontend = isLocal ? `localhost:${window.location.port || 4200}` : window.location.hostname;

    if (apiUrl === 'http://localhost:3002')        { configName = 'devlocal-all';   db = 'suns3m'; }
    else if (apiUrl === 'http://localhost:3003')   { configName = 'prodlocal-all';  db = '3sm-prod'; }
    else if (apiUrl === 'https://api.connectsite.in' && !production)  { configName = 'devlocal-web';  db = 'suns3m'; }
    else if (apiUrl === 'https://api.connectsite.in' && production)   { configName = 'proddev-all';   db = 'suns3m'; }
    else if (apiUrl === 'https://api-prod.connectsite.in' && !production) { configName = 'prodlocal-web'; db = '3sm-prod'; }
    else if (apiUrl === 'https://api-prod.connectsite.in' && production)  { configName = 'prod-all';      db = '3sm-prod'; }
    else if (apiUrl === '/api') { configName = 'offline'; db = 'Local'; }

    return { configName, apiUrl, db, production, frontend };
  }
  get showSyncSection(): boolean {
    const email = (this.authService.getUserEmail?.() || '').toLowerCase().trim();
    return this.isOffline && email === 'admin@connectsite.in';
  }

  syncEntities: SyncEntity[] = [
    { key: 'account',    label: 'Account',     endpoint: '/account/list',    status: 'idle', message: '' },
    { key: 'instance',   label: 'Instance',    endpoint: '/instance/list',   status: 'idle', message: '' },
    { key: 'product',    label: 'Product',     endpoint: '/product/list',    status: 'idle', message: '' },
    { key: 'supplier',   label: 'Supplier',    endpoint: '/supplier/list',   status: 'idle', message: '' },
    { key: 'customer',   label: 'Customer',    endpoint: '/customer/list',   status: 'idle', message: '' },
    { key: 'user',       label: 'User',        endpoint: '/user/list',       status: 'idle', message: '' },
    { key: 'userrole',   label: 'User Role',   endpoint: '/userrole/list',   status: 'idle', message: '' },
    { key: 'permission', label: 'Permission',  endpoint: '/permission/list', status: 'idle', message: '' },
    { key: 'gst',        label: 'GST',         endpoint: '/gst/list',        status: 'idle', message: '' },
    { key: 'vat',        label: 'VAT',         endpoint: '/vat/list',        status: 'idle', message: '' },
  ];
  isSyncingAll = false;
  syncOnlineToken = '';

  constructor(
    private settingsService: SettingsService,
    private formBuilder: FormBuilder,
    public menuSettings: MenuSettingsService,
    private permissionService: PermissionService,
    public authService: AuthService,
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
      case 'vcard':
      case 'newvcard':       return isSuperAdmin || this.permissionService.hasAnyPermissionForResource('digicard');
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

    const roleName = (this.permissionService.getCurrentRoleName() || '').toLowerCase().trim();
    this.isAdministrator = this.permissionService.isSuperAdmin() ||
      roleName === 'administrator' || roleName === 'admin';

    this.menuItems = this.menuSettings.getMenuItems();

    if (this.isAdmin) {
      this.loadAccountUsers();
    }
    this.quickProductFields = this.quickProductSettingsService.getFields();
    this.quickProductSettingsService.loadFromApi().subscribe(fields => {
      // Re-check role name after async load
      const rn = (this.permissionService.getCurrentRoleName() || '').toLowerCase().trim();
      this.isAdministrator = this.permissionService.isSuperAdmin() || rn === 'administrator' || rn === 'admin';

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
    this.quickProductSavedMessage = 'Saving...';
    this.quickProductSettingsService.saveFields(this.quickProductFields).subscribe({
      next: (res) => {
        this.quickProductSavedMessage = res?.saved === 'local'
          ? 'Saved locally (API unavailable).'
          : 'Quick product fields saved.';
        setTimeout(() => this.quickProductSavedMessage = '', 3000);
      },
      error: (err) => {
        console.error('Save quick product fields error:', err);
        this.quickProductSavedMessage = 'Failed to save. Please try again.';
        setTimeout(() => this.quickProductSavedMessage = '', 3000);
      }
    });
  }

  syncEntity(entity: SyncEntity): void {
    if (!this.onlineBase || this.onlineBase === '/api') return;
    entity.status = 'syncing';
    entity.message = '';
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    this.http.get<any[]>(`${this.onlineBase}${entity.endpoint}`, { headers }).pipe(
      catchError(err => { throw err; })
    ).subscribe({
      next: (data) => {
        this.http.post(`${this.apiUrl}/sync/${entity.key}`, { data }).subscribe({
          next: () => {
            entity.status = 'success';
            entity.message = `Synced ${Array.isArray(data) ? data.length : 0} records`;
            setTimeout(() => { entity.status = 'idle'; entity.message = ''; }, 4000);
          },
          error: () => {
            entity.status = 'error';
            entity.message = 'Failed to save locally';
          }
        });
      },
      error: () => {
        entity.status = 'error';
        entity.message = 'Failed to fetch from server';
      }
    });
  }

  syncAll(): void {
    this.isSyncingAll = true;
    this.syncEntities.forEach(e => this.syncEntity(e));
    setTimeout(() => this.isSyncingAll = false, 3000);
  }

  getSyncIcon(status: string): string {
    switch (status) {
      case 'syncing': return 'sync';
      case 'success': return 'check_circle';
      case 'error':   return 'error';
      default:        return 'cloud_download';
    }
  }

  saveAll(): void {
    if (this.salesForm.invalid) return;
    this.isSavingAll = true;
    this.saveAllMessage = 'Saving...';

    const userId = this.authService.getUserId?.();
    const menuPayload = this.menuItems.map(({ key, enabled }) => ({ key, enabled }));
    const qpPayload = this.quickProductFields.map(f => ({ key: f.key, enabled: f.mandatory ? true : f.enabled }));

    // Save both in a single PUT to prevent overwrite
    const combinedSave$ = userId
      ? this.http.put(`${this.apiUrl}/settings/user-preferences/${userId}`, {
          menuSettings: menuPayload,
          quickProductFields: qpPayload
        }).pipe(catchError(() => of(null)))
      : of(null);

    // Also update localStorage caches
    localStorage.setItem(`menu_settings_${userId}`, JSON.stringify(this.menuItems));
    localStorage.setItem(`qp_fields_${userId}`, JSON.stringify(qpPayload));

    if (this.menuSettings.isEnabled('sales') || this.menuSettings.isEnabled('inventorysales')) {
      this.saveSalesSettings();
    }

    combinedSave$.subscribe({
      next: () => {
        this.saveAllMessage = 'All settings saved.';
        this.isSavingAll = false;
        setTimeout(() => { this.saveAllMessage = ''; window.location.reload(); }, 1200);
      },
      error: () => {
        this.saveAllMessage = 'Some settings could not be saved.';
        this.isSavingAll = false;
        setTimeout(() => this.saveAllMessage = '', 3000);
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
