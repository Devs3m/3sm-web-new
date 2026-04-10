import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class OfflineInstallerService {
  private readonly base = environment.apiUrl.replace(/\/$/, '');

  constructor(private readonly http: HttpClient) {}

  /**
   * POST returns JSON file as blob; Authorization header added by AuthInterceptor.
   */
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
