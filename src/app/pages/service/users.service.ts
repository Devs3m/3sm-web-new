import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  deleteUser(userid :any):Observable<any>{
    console.log('Fetching data from API');
    return this.http.get("http://49.50.112.46:3002/user/userdelete",userid);}


  constructor(private http:HttpClient) { }

  getUserDetails():Observable<any>{
    console.log('Fetching data from API');
    return this.http.get("http://49.50.112.46:3002/user/list");}

  addUser (userData :any):Observable<any>{
    console.log('Sending data to API', userData);
    return this.http.post("http://49.50.112.46:3002/user/usersave",userData)
  }
  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>('http://49.50.112.46:3002/city/list');
  }
}