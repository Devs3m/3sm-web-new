import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getByname(name: string) {
    return this.httpClient.get(`${environment.apiHost}digicard/${name}`);
  }

  getUserDetails(company: string, email: string) {
    return this.httpClient.get(`${environment.apiHost}digicard/getcarddetails?company=${company}&email=${email}`);
  }

  getUserDetailsById(id: number) {
    return this.httpClient.get(`http://localhost:3002/digicard/getcarddetailsbyid/${id}`);
  }

  createUserDetails(data: any) {
    return this.httpClient.post(`${environment.apiHost}digicardresponse/save`, data);
  }
}
