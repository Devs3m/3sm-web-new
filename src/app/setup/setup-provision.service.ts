import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface PullImportResult {
  message: string;
  accountid: number;
}

@Injectable({ providedIn: 'root' })
export class SetupProvisionService {
  private readonly base = environment.apiUrl.replace(/\/$/, '');

  constructor(private readonly http: HttpClient) {}

  pullAndImport(ownerEmail: string, enrollmentToken: string): Observable<PullImportResult> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Enrollment-Token': enrollmentToken,
    });
    return this.http.post<PullImportResult>(
      `${this.base}/provision/pull-and-import`,
      { ownerEmail: ownerEmail.trim() },
      { headers },
    );
  }

  importBundle(bundle: object, enrollmentToken: string): Observable<PullImportResult> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Enrollment-Token': enrollmentToken,
    });
    return this.http.post<PullImportResult>(
      `${this.base}/provision/import`,
      { bundle },
      { headers },
    );
  }
}
