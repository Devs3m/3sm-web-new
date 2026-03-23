import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AppSettings } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export class SettingsApiService {
  private apiUrl = `${environment.apiUrl}/settings`;

  constructor(private http: HttpClient) {}

  getSettings(accountid: number, instanceid: number): Observable<AppSettings> {
    const params = new HttpParams()
      .set('accountid', accountid.toString())
      .set('instanceid', instanceid.toString());
    return this.http.get<AppSettings>(this.apiUrl, { params });
  }

  saveSettings(
    accountid: number,
    instanceid: number,
    settings: AppSettings
  ): Observable<AppSettings> {
    return this.http.put<AppSettings>(this.apiUrl, {
      accountid,
      instanceid,
      settings,
    });
  }
}
