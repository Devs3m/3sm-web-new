import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

export interface MenuItemSetting {
  key: string;
  label: string;
  icon: string;
  enabled: boolean;
}

export const DEFAULT_MENU: MenuItemSetting[] = [
  { key: 'dashboard',      label: 'Dashboard',     icon: 'dashboard',       enabled: true },
  { key: 'account',        label: 'Account',        icon: 'person',          enabled: true },
  { key: 'instance',       label: 'Instance',       icon: 'grid_on',         enabled: true },
  { key: 'user',           label: 'User',           icon: 'manage_accounts', enabled: true },
  { key: 'userrole',       label: 'User Role',      icon: 'settings',        enabled: true },
  { key: 'digicard',       label: 'Digicard',       icon: 'star',            enabled: true },
  { key: 'vcard',          label: 'V Card',         icon: 'badge',           enabled: true },
  { key: 'product',        label: 'Product',        icon: 'fastfood',        enabled: true },
  { key: 'sales',          label: 'Service Sales',  icon: 'point_of_sale',   enabled: true },
  { key: 'inventorysales', label: 'Product Sales',  icon: 'inventory_2',     enabled: true },
  { key: 'customer',       label: 'Customer',       icon: 'contacts',        enabled: true },
  { key: 'supplier',       label: 'Supplier',       icon: 'local_shipping',  enabled: true },
  { key: 'purchase',       label: 'Purchase',       icon: 'receipt_long',    enabled: true },
  { key: 'orders',         label: 'Orders',         icon: 'shopping_bag',    enabled: true },
  { key: 'stock',          label: 'Stock',          icon: 'inventory',       enabled: true },
  { key: 'city',           label: 'City',           icon: 'location_on',     enabled: true },
  { key: 'gst',            label: 'GST',            icon: 'money',           enabled: true },
  { key: 'vat',            label: 'VAT',            icon: 'money',           enabled: true },
  { key: 'reports',        label: 'Reports',        icon: 'bar_chart',       enabled: true },
  { key: 'accounts',       label: 'Chart of Accounts', icon: 'account_balance_wallet', enabled: true },
  { key: 'quickproduct',   label: 'Quick Product',  icon: 'add_box',         enabled: false },
  { key: 'settings',       label: 'Settings',       icon: 'settings',        enabled: true },
];

@Injectable({ providedIn: 'root' })
export class MenuSettingsService {
  private apiUrl = environment.apiUrl;
  private cachedItems: MenuItemSetting[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  private cacheKey(): string {
    return `menu_settings_${this.authService.getUserId?.() ?? 'default'}`;
  }

  merge(saved: any[]): MenuItemSetting[] {
    return DEFAULT_MENU.map(def => ({
      ...def,
      enabled: saved.find((p: any) => p.key === def.key)?.enabled ?? true
    }));
  }

  /** Load from API, fall back to localStorage, then defaults. */
  loadFromApi(): Observable<MenuItemSetting[]> {
    const userId = this.authService.getUserId?.();
    if (!userId) {
      this.cachedItems = this.fromLocal();
      return of(this.cachedItems);
    }

    return this.http.get<{ menuSettings: any[] }>(`${this.apiUrl}/settings/user-preferences/${userId}`).pipe(
      tap(res => {
        const items = this.merge(res?.menuSettings ?? []);
        this.cachedItems = items;
        localStorage.setItem(this.cacheKey(), JSON.stringify(items));
      }),
      catchError(() => {
        // API failed — use localStorage cache
        this.cachedItems = this.fromLocal();
        return of(this.cachedItems);
      })
    ) as any;
  }

  private fromLocal(): MenuItemSetting[] {
    try {
      const stored = localStorage.getItem(this.cacheKey());
      if (stored) return this.merge(JSON.parse(stored));
    } catch {}
    return DEFAULT_MENU.map(m => ({ ...m }));
  }

  getMenuItems(): MenuItemSetting[] {
    if (this.cachedItems.length) return this.cachedItems;
    this.cachedItems = this.fromLocal();
    return this.cachedItems;
  }

  /** Save to API + update localStorage cache. */
  saveMenuItems(items: MenuItemSetting[]): Observable<any> {
    this.cachedItems = items;
    localStorage.setItem(this.cacheKey(), JSON.stringify(items));

    const userId = this.authService.getUserId?.();
    if (!userId) return of(null);

    return this.http.put(`${this.apiUrl}/settings/user-preferences/${userId}`, {
      menuSettings: items.map(({ key, enabled }) => ({ key, enabled }))
    }).pipe(catchError(() => of(null)));
  }

  isEnabled(key: string): boolean {
    return this.getMenuItems().find(m => m.key === key)?.enabled ?? true;
  }
}
