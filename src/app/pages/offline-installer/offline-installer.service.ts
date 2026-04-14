import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface OwnerAccountPreview {
  ownerEmail: string;
  accountid: number;
  companyName: string;
  ownerName: string;
}

export interface OfflineInstallerMetadata {
  bootstrapperPresent: boolean;
  bootstrapperSizeBytes: number | null;
  bootstrapperFileNameInZip: string | null;
  installerVersion: string;
  productName: string;
  includesFallbackScripts: boolean;
  includesAssets: boolean;
  assetsDirConfigured: boolean;
  includesDockerDesktopInstaller: boolean;
  dockerDesktopInstallerSizeBytes: number | null;
  dockerDesktopInstallerZipPath: string | null;
}

@Injectable({ providedIn: 'root' })
export class OfflineInstallerService {
  private readonly base = environment.apiUrl.replace(/\/$/, '');

  constructor(private readonly http: HttpClient) {}

  /** Whether API will embed S3M-Offline-Setup.exe in the tenant ZIP. */
  getOfflineInstallerMetadata(): Observable<OfflineInstallerMetadata> {
    return this.http.get<OfflineInstallerMetadata>(`${this.base}/provision/admin/offline-installer-metadata`);
  }

  /** Super Admin: confirm tenant before download. */
  ownerAccountPreview(ownerEmail: string): Observable<OwnerAccountPreview> {
    const params = new HttpParams().set('ownerEmail', ownerEmail.trim());
    return this.http.get<OwnerAccountPreview>(`${this.base}/provision/admin/owner-account-preview`, { params });
  }

  /**
   * Tenant package: ZIP with JSON, optional EXE bootstrapper, optional assets/, script fallback.
   */
  exportOfflineSetupPackage(ownerEmail: string): Observable<HttpResponse<Blob>> {
    return this.http.post(
      `${this.base}/provision/admin/export-offline-setup-package`,
      { ownerEmail: ownerEmail.trim() },
      {
        responseType: 'blob',
        observe: 'response',
      },
    );
  }

  /** Raw JSON only (advanced / non-Windows). */
  exportBundleFile(ownerEmail: string): Observable<HttpResponse<Blob>> {
    return this.http.post(
      `${this.base}/provision/admin/export-bundle-file`,
      { ownerEmail: ownerEmail.trim() },
      {
        responseType: 'blob',
        observe: 'response',
      },
    );
  }
}
