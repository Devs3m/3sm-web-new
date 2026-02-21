import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Permission } from './permission.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserroleService {
  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  deleteUserrole(userroleid :any):Observable<any>{
    console.log('Deleting Userrole from API');
    return this.http.delete(`${this.apiUrl}/userrole/userroledelete/${userroleid}`);
  }

  getUserroleDetails():Observable<any>{
    console.log('Fetching Userrole data from API');
    return this.http.get(`${this.apiUrl}/userrole/list`);
  }

  addUserrole (userroleData :any):Observable<any>{
    console.log('Sending Userrole data to API', userroleData);
    return this.http.post(`${this.apiUrl}/userrole/userrolesave`,userroleData);
  }

  updateUserrole(userroleData: any): Observable<any> {
    console.log('Updating Userrole data to API', userroleData);
    return this.http.put(`${this.apiUrl}/userrole/userroleupdate`, userroleData);
  }
  
  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/userrole/list`);
  }

  // Get permissions for a role (Super Admin only)
  // Uses GET /role/:roleId/permissions
  getRolePermissions(roleId: number): Observable<Permission[]> {
    return this.http.get<Permission[]>(`${this.apiUrl}/role/${roleId}/permissions`).pipe(
      catchError((error) => {
        if (error.status === 403) {
          console.error('getRolePermissions: Forbidden - Super Admin access required');
        }
        return throwError(() => error);
      })
    );
  }

  // Get role details with permissions (Super Admin only)
  // Uses GET /role/:roleId/details
  getRoleDetails(roleId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/role/${roleId}/details`).pipe(
      catchError((error) => {
        if (error.status === 403) {
          console.error('getRoleDetails: Forbidden - Super Admin access required');
        }
        return throwError(() => error);
      })
    );
  }

  // Get available permissions for a role (not yet assigned)
  // Uses GET /role/:roleId/permissions/available
  getAvailablePermissions(roleId: number): Observable<Permission[]> {
    return this.http.get<Permission[]>(`${this.apiUrl}/role/${roleId}/permissions/available`).pipe(
      catchError((error) => {
        if (error.status === 403) {
          console.error('getAvailablePermissions: Forbidden - Super Admin access required');
        }
        return throwError(() => error);
      })
    );
  }

  // Save permissions for a role (Super Admin only)
  // Uses POST /role/:roleId/permissions/bulk for multiple permissions
  // permissions should be an array of { permissionid: number } objects
  saveRolePermissions(roleId: number, permissions: any[]): Observable<any> {
    // Validate roleId
    if (!roleId || roleId <= 0 || isNaN(roleId)) {
      console.error('saveRolePermissions: Invalid roleId:', roleId);
      return throwError(() => new Error('Invalid role ID'));
    }
    
    // Use bulk endpoint for multiple permissions
    const url = `${this.apiUrl}/role/${roleId}/permissions/bulk`;
    const body = permissions; // Already formatted as [{ permissionid: number }]
    
    console.log('saveRolePermissions - Request URL:', url);
    console.log('saveRolePermissions - RoleId:', roleId, '(type:', typeof roleId, ')');
    console.log('saveRolePermissions - Request Body:', JSON.stringify(body));
    console.log('saveRolePermissions - Body type:', typeof body);
    console.log('saveRolePermissions - Body is array:', Array.isArray(body));
    if (body && body.length > 0) {
      console.log('saveRolePermissions - First item:', body[0]);
      console.log('saveRolePermissions - First item keys:', Object.keys(body[0]));
      if (body[0].permissionid !== undefined) {
        console.log('saveRolePermissions - First item.permissionid:', body[0].permissionid, '(type:', typeof body[0].permissionid, ')');
      }
    }
    
    return this.http.post(url, body).pipe(
      catchError((error) => {
        console.error('saveRolePermissions - Error:', error);
        console.error('saveRolePermissions - Error status:', error.status);
        console.error('saveRolePermissions - Error message:', error.message);
        console.error('saveRolePermissions - Error body:', error.error);
        
        if (error.status === 403) {
          console.error('saveRolePermissions: Forbidden - Super Admin access required');
        }
        return throwError(() => error);
      })
    );
  }

  // Assign single permission to a role
  // Uses POST /role/:roleId/permissions
  assignPermission(roleId: number, permissionId: number): Observable<any> {
    const url = `${this.apiUrl}/role/${roleId}/permissions`;
    const body = { permissionid: permissionId };
    
    return this.http.post(url, body).pipe(
      catchError((error) => {
        if (error.status === 403) {
          console.error('assignPermission: Forbidden - Super Admin access required');
        }
        return throwError(() => error);
      })
    );
  }

  // Remove a permission from a role
  // Uses DELETE /role/:roleId/permissions/:permissionId
  removePermission(roleId: number, permissionId: number): Observable<any> {
    const url = `${this.apiUrl}/role/${roleId}/permissions/${permissionId}`;
    
    return this.http.delete(url).pipe(
      catchError((error) => {
        if (error.status === 403) {
          console.error('removePermission: Forbidden - Super Admin access required');
        }
        return throwError(() => error);
      })
    );
  }

  // Get all roles with permissions
  // Uses GET /role/all-with-permissions
  getAllRolesWithPermissions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/role/all-with-permissions`).pipe(
      catchError((error) => {
        console.error('getAllRolesWithPermissions - Error:', error);
        return throwError(() => error);
      })
    );
  }

  // Get user permissions
  getUserPermissions(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}/permissions`);
  }
}
