import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = environment.apiUrl;
  
  deleteUser(userid :any):Observable<any>{
    return this.http.get(`${this.apiUrl}/user/userdelete`,userid);}


  constructor(private http:HttpClient) { }

  getUserDetails():Observable<any>{
    return this.http.get(`${this.apiUrl}/user/list`);}

  addUser (userData :any):Observable<any>{
    console.log('Sending data to API', userData);
    return this.http.post(`${this.apiUrl}/user/usersave`,userData)
  }
  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/city/list`);
  }
}