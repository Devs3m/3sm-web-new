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
    return this.http.delete(`${this.apiUrl}/userrole/userroledelete/${userroleid}`);
  }

  getDetailsById(userroleid: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/userrole/details/${userroleid}`);
  }

  getUserroleDetails():Observable<any>{
    return this.http.get(`${this.apiUrl}/userrole/list`);
  }

  addUserrole (userroleData :any):Observable<any>{
    return this.http.post(`${this.apiUrl}/userrole/userrolesave`,userroleData);
  }

  updateUserrole(userroleData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/userrole/userroleupdate`, userroleData);
  }
  
  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/userrole/list`);
  }

  /**
   * User role / RBAC check (audit & compliance).
   * GET /role/permissions/userrole-check – returns whether current user can manage RBAC.
   * Optional instanceId: when set, backend hasRbacManage(instanceId) allows instance-scoped Super Admins.
   */
  getUserRoleCheck(instanceId?: number | null): Observable<{ canManageRbac?: boolean; [key: string]: any }> {
    let url = `${this.apiUrl}/role/permissions/userrole-check`;
    if (instanceId != null && instanceId !== undefined && !Number.isNaN(Number(instanceId))) {
      url += `?instanceId=${encodeURIComponent(String(instanceId))}`;
    }
    return this.http.get<{ canManageRbac?: boolean; [key: string]: any }>(url).pipe(
      catchError((error) => {
        if (error.status === 403 || error.status === 404) {
          return throwError(() => error);
        }
        return throwError(() => error);
      })
    );
  }

  // Get permissions for a role (Super Admin only)
  // Uses GET /role/:roleId/permissions
  getRolePermissions(roleId: number): Observable<Permission[]> {
    return this.http.get<Permission[]>(`${this.apiUrl}/role/${roleId}/permissions`).pipe(
      catchError((error) => throwError(() => error))
    );
  }

  // Get role details with permissions (Super Admin only)
  // Uses GET /role/:roleId/details
  getRoleDetails(roleId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/role/${roleId}/details`).pipe(
      catchError((error) => throwError(() => error))
    );
  }

  // Get available permissions for a role (not yet assigned)
  // Uses GET /role/:roleId/permissions/available
  getAvailablePermissions(roleId: number): Observable<Permission[]> {
    return this.http.get<Permission[]>(`${this.apiUrl}/role/${roleId}/permissions/available`).pipe(
      catchError((error) => throwError(() => error))
    );
  }

  // Save/update permissions for a role (Super Admin only)
  // Tries: 1) POST .../permissions with { permissionIds }, 2) POST .../permissions/bulk with [{ permissionid }]
  saveRolePermissions(roleId: number, permissions: any[]): Observable<any> {
    if (!roleId || roleId <= 0 || isNaN(Number(roleId))) {
      return throwError(() => new Error('Invalid role ID'));
    }
    const rid = Number(roleId);
    const urlBase = `${this.apiUrl}/role/${rid}/permissions`;
    const bodyBulk = Array.isArray(permissions) ? permissions : [];
    const permissionIds = bodyBulk.map((p: any) => Number(p.permissionid ?? p.permissionId ?? p.id)).filter((id: number) => !isNaN(id) && id > 0);
    const bodyIds = { permissionIds };

    return this.http.post(urlBase, bodyIds).pipe(
      catchError((err) => {
        if (err && err.status === 403) {
          return throwError(() => err);
        }
        return this.http.post(`${urlBase}/bulk`, bodyBulk).pipe(
          catchError((err2) => throwError(() => (err2 && err2.status === 403) ? err2 : err2 || err))
        );
      })
    );
  }

  // Assign single permission to a role
  // Uses POST /role/:roleId/permissions
  assignPermission(roleId: number, permissionId: number): Observable<any> {
    const url = `${this.apiUrl}/role/${roleId}/permissions`;
    const body = { permissionid: permissionId };
    
    return this.http.post(url, body).pipe(
      catchError((error) => throwError(() => error))
    );
  }

  // Remove a permission from a role
  // Uses DELETE /role/:roleId/permissions/:permissionId
  removePermission(roleId: number, permissionId: number): Observable<any> {
    const url = `${this.apiUrl}/role/${roleId}/permissions/${permissionId}`;
    return this.http.delete(url).pipe(
      catchError((error) => throwError(() => error))
    );
  }

  // Get all roles with permissions
  // Uses GET /role/all-with-permissions
  getAllRolesWithPermissions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/role/all-with-permissions`).pipe(
      catchError((error) => throwError(() => error))
    );
  }

  // Get user permissions
  getUserPermissions(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}/permissions`);
  }
}
