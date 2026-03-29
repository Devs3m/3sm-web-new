import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private get vcardBase(): string {
    return (environment as any).vcardApiUrl ?? environment.apiHost;
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  /** V Card: fetch product/profile details by vCard master id */
  getVCardProductDetails(id: string | number): Observable<{ result?: any[] }> {
    const base = this.vcardBase.replace(/\/$/, '');
    return this.httpClient.get<{ result?: any[] }>(
      `${base}/VCardMaster/GetVCardMasterProductDetailslist/${id}`
    );
  }

  getByname(name: string) {
    return this.httpClient.get(`${environment.apiHost}digicard/${name}`);
  }

  getUserDetails(company: string, email: string) {
    return this.httpClient.get(`${environment.apiHost}digicard/getcarddetails?company=${company}&email=${email}`);
  }

  getUserDetailsById(id: number) {
    return this.httpClient.get(`${environment.apiHost}digicard/getcarddetailsbyid?id=${id}`);
  }

  createUserDetails(data: any) {
    return this.httpClient.post(`${environment.apiHost}digicardresponse/save`, data);
  }
}
