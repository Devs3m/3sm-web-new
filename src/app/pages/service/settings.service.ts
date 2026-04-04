import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { SettingsApiService } from './settings-api.service';

export interface SalesSettings {
  expiryConfigEnabled: boolean;
  hideProductsDaysBeforeExpiry: number;
  /** true = rate includes GST (inclusive), false = rate is before GST (exclusive) */
  gstInclusive: boolean;
  /** When true: hide batch no and expiry in Product Sales & Purchase GRN; purchase auto-fills batch as GRN-{grn}-L{n}. */
  hideBatchNoAndExpiryInProductSales: boolean;
  /** When true: allow decimal quantity (e.g. 1.5, 2.25) in Service Sales and Product Sales */
  allowDecimalQtyInSales: boolean;
  /** When true: MRP column is editable in Product Sales (inventory sales). When false, MRP is read-only from product master. */
  mrpEditableInInventorySales: boolean;
}

export interface AppSettings {
  sales?: SalesSettings;
}

const STORAGE_KEY = '3sm_app_settings';
const DEFAULT_SALES: SalesSettings = {
  expiryConfigEnabled: false,
  hideProductsDaysBeforeExpiry: 30,
  gstInclusive: true,
  hideBatchNoAndExpiryInProductSales: false,
  allowDecimalQtyInSales: false,
  mrpEditableInInventorySales: false,
};

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private settings: AppSettings = {};

  constructor(
    private authService: AuthService,
    private settingsApi: SettingsApiService
  ) {
    this.loadFromStorage();
    this.loadFromApi();
  }

  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        this.settings = JSON.parse(stored);
      }
    } catch {
      this.settings = {};
    }
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.settings));
    } catch (e) {
      console.warn('Failed to save settings', e);
    }
  }

  /** Call after login or when opening settings page to sync from DB. */
  refreshFromApi(): void {
    this.loadFromApi();
  }

  private loadFromApi(): void {
    if (!this.authService.isAuthenticated()) return;
    const accountid = this.authService.getAccountId();
    const instanceid = this.authService.getInstanceId();
    this.settingsApi.getSettings(accountid, instanceid).subscribe({
      next: (api) => {
        if (api && Object.keys(api).length > 0) {
          this.settings = this.mergeSettings(this.settings, api);
          this.saveToStorage();
        }
      },
      error: () => {
        /* fallback to localStorage, already loaded */
      },
    });
  }

  private mergeSettings(local: AppSettings, api: AppSettings): AppSettings {
    return {
      ...local,
      ...api,
      sales: {
        ...DEFAULT_SALES,
        ...(local.sales ?? {}),
        ...(api.sales ?? {}),
      },
    };
  }

  getSalesSettings(): SalesSettings {
    return {
      ...DEFAULT_SALES,
      ...(this.settings.sales ?? {}),
    };
  }

  setSalesSettings(partial: Partial<SalesSettings>): void {
    this.settings.sales = { ...this.getSalesSettings(), ...partial };
    this.saveToStorage();
    if (this.authService.isAuthenticated()) {
      const accountid = this.authService.getAccountId();
      const instanceid = this.authService.getInstanceId();
      this.settingsApi.saveSettings(accountid, instanceid, this.settings).subscribe({
        next: () => {
          /* saved to DB */
        },
        error: () => {
          /* localStorage already updated as fallback */
        },
      });
    }
  }

  /** Check if a product should be hidden from sales based on expiry (returns true if hidden) */
  shouldHideProductForExpiry(expirydate: Date | string | null | undefined): boolean {
    if (!expirydate) return false;
    const exp = typeof expirydate === 'string' ? new Date(expirydate) : expirydate;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const expDateOnly = new Date(exp);
    expDateOnly.setHours(0, 0, 0, 0);
    // Always hide expired products (expiry date <= today)
    if (expDateOnly <= today) return true;
    // Optionally hide products nearing expiry (settings)
    const sales = this.getSalesSettings();
    if (!sales.expiryConfigEnabled || sales.hideProductsDaysBeforeExpiry < 0) return false;
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() + sales.hideProductsDaysBeforeExpiry);
    cutoff.setHours(23, 59, 59, 999);
    return exp <= cutoff;
  }
}
