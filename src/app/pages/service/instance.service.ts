import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InstanceService {

  private apiUrl = environment.apiUrl; 
  instanceservice: any;

  getInstanceById(instanceId: any) {
    throw new Error('Method not implemented.');
  }

  getInstanceOrderby() {
    console.log('Fetching data from API');
    return this.http.get(`${this.apiUrl}/instance/instanceorderby`);
  }

  deleteInstance(instanceid :any):Observable<any>{
    console.log('Deleting instance from API, ID:', instanceid);
    return this.http.delete(`${this.apiUrl}/instance/instancedelete/${instanceid}`);
  }

  constructor(private http:HttpClient) { }

  getInstanceDetails():Observable<any>{
    console.log('Fetching data from API');
    return this.http.get(`${this.apiUrl}/instance/list`);
  
  }
 
  addInstance (instanceData :any):Observable<any>{
    console.log('Sending data to API', instanceData);
    return this.http.post(`${this.apiUrl}/instance/instancesave`,instanceData)
  }
  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/city/list`);
  }

  getDropdownAccountItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/account/list`);
  }
  updateInstance(instance: any) {
    return this.http.put(`${this.apiUrl}/instance/instanceupdate`, instance);
  }
  isInstanceNameTaken(instanceName: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/instance/check-company-name?name=${instanceName}`);
  }
  checkInstanceName = (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) return of(null);
  
    return this.instanceservice.isInstanceNameTaken(control.value).pipe(
      map((isTaken) => (isTaken ? { instanceNameTaken: true } : null)),
      catchError(() => of(null))
    );
  };
}
