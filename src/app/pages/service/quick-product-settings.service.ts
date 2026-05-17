import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

export interface QuickProductField {
  key: string;
  label: string;
  mandatory: boolean;
  enabled: boolean;
}

@Injectable({ providedIn: 'root' })
export class QuickProductSettingsService {
  private apiUrl = environment.apiUrl;

  readonly DEFAULT_FIELDS: QuickProductField[] = [
    { key: 'productname',              label: 'Product Name',           mandatory: true,  enabled: true  },
    { key: 'productisactive',          label: 'Active Status',          mandatory: true,  enabled: true  },
    { key: 'productlastmrp',           label: 'MRP',                   mandatory: false, enabled: true  },
    { key: 'productgeneric',           label: 'Generic Name',           mandatory: false, enabled: true  },
    { key: 'gstid',                    label: 'GST %',                  mandatory: false, enabled: true  },
    { key: 'productcategory',          label: 'Category',               mandatory: false, enabled: true  },
    { key: 'productmanufacturer',      label: 'Manufacturer',           mandatory: false, enabled: false },
    { key: 'productpackname',          label: 'Pack Name',              mandatory: false, enabled: false },
    { key: 'productpackqty',           label: 'Pack Quantity',          mandatory: false, enabled: false },
    { key: 'taxid',                    label: 'TAX %',                  mandatory: false, enabled: false },
    { key: 'productsubcategory',       label: 'Sub Category',           mandatory: false, enabled: false },
    { key: 'productdescription',       label: 'Description',            mandatory: false, enabled: false },
    { key: 'producthsncode',           label: 'HSN Code',               mandatory: false, enabled: false },
    { key: 'productlastprice',         label: 'Previous Price',         mandatory: false, enabled: false },
    { key: 'productlastcost',          label: 'Previous Cost',          mandatory: false, enabled: false },
    { key: 'productsaledisper',        label: 'Sales Discount %',       mandatory: false, enabled: false },
    { key: 'productpurdisper',         label: 'Purchase Discount %',    mandatory: false, enabled: false },
    { key: 'productlastsaloffqty',     label: 'Sale Offer Qty',         mandatory: false, enabled: false },
    { key: 'productlastsalofffreeqty', label: 'Sale Offer Free Qty',    mandatory: false, enabled: false },
    { key: 'productlastpuroffqty',     label: 'Purchase Offer Qty',     mandatory: false, enabled: false },
    { key: 'productlastpurofffreeqty', label: 'Purchase Offer Free Qty',mandatory: false, enabled: false },
    { key: 'productimage',             label: 'Product Image',          mandatory: false, enabled: false },
  ];

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  private cacheKey(): string {
    const userId = this.authService.getUserId?.() ?? 'default';
    return `qp_fields_${userId}`;
  }

  private merge(saved: { key: string; enabled: boolean }[]): QuickProductField[] {
    return this.DEFAULT_FIELDS.map(f => {
      if (f.mandatory) return { ...f, enabled: true };
      const match = saved.find(s => s.key === f.key);
      return match !== undefined ? { ...f, enabled: match.enabled } : { ...f };
    });
  }

  /** Load from API; fall back to localStorage then defaults. */
  loadFromApi(): Observable<QuickProductField[]> {
    const userId = this.authService.getUserId?.();
    if (!userId) return of(this.fromLocal());

    return new Observable<QuickProductField[]>(observer => {
      this.http.get<{ quickProductFields?: any[] }>(
        `${this.apiUrl}/settings/user-preferences/${userId}`
      ).pipe(catchError(() => of(null))).subscribe(res => {
        const merged = this.merge(res?.quickProductFields ?? []);
        localStorage.setItem(this.cacheKey(), JSON.stringify(
          merged.map(f => ({ key: f.key, enabled: f.enabled }))
        ));
        observer.next(merged);
        observer.complete();
      });
    });
  }

  private fromLocal(): QuickProductField[] {
    try {
      const stored = localStorage.getItem(this.cacheKey());
      if (stored) return this.merge(JSON.parse(stored));
    } catch {}
    return this.DEFAULT_FIELDS.map(f => ({ ...f }));
  }

  getFields(): QuickProductField[] {
    return this.fromLocal();
  }

  /** Save to localStorage immediately + persist to API. */
  saveFields(fields: QuickProductField[]): Observable<any> {
    const payload = fields.map(f => ({ key: f.key, enabled: f.mandatory ? true : f.enabled }));
    localStorage.setItem(this.cacheKey(), JSON.stringify(payload));

    const userId = this.authService.getUserId?.();
    if (!userId) return of({ saved: 'local' });

    return this.http.put(`${this.apiUrl}/settings/user-preferences/${userId}`, {
      quickProductFields: payload
    }).pipe(catchError(() => of({ saved: 'local' })));
  }

  isFieldEnabled(key: string): boolean {
    return this.getFields().find(f => f.key === key)?.enabled ?? false;
  }
}
