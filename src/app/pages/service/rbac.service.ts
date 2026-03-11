import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

/** Scope: omit or null = account-level; set = instance-level for that instance. */
export interface AssignUserRolesDto {
  roleIds: number[];
  instanceId?: number | null;
}

export interface RbacInstance {
  instanceid?: number;
  instanceId?: number;
  accountid?: number;
  accountId?: number;
  name?: string;
  [key: string]: any;
}

export interface RbacUserRoleAssignment {
  roleId: number;
  roleName?: string;
  instanceId?: number | null;
  instanceid?: number | null;
  [key: string]: any;
}

export interface RbacEffectivePermission {
  permissionCode?: string;
  resource?: string;
  action?: string;
  [key: string]: any;
}

/**
 * RBAC API (account vs instance scope).
 * Backend: GET/POST /rbac/accounts/:accountId/instances, /rbac/users/...
 * - instanceId omitted or null = account-level; set = instance-level.
 */
@Injectable({
  providedIn: 'root'
})
export class RbacService {
  private apiUrl = environment.apiUrl;
  private rbacBase = `${this.apiUrl}/rbac`;

  constructor(private http: HttpClient) {}

  /**
   * GET /rbac/accounts/:accountId/instances – list instances (sub-accounts) for an account.
   */
  listInstancesByAccount(accountId: number): Observable<RbacInstance[]> {
    const url = `${this.rbacBase}/accounts/${accountId}/instances`;
    return this.http.get<RbacInstance[]>(url).pipe(
      catchError((err) => {
        if (err?.status === 403 || err?.status === 404) {
          return throwError(() => err);
        }
        return throwError(() => err);
      })
    );
  }

  /**
   * GET /rbac/users/:accountId?instanceId= – list users; optional instanceId to restrict to one instance.
   */
  listUsersByAccount(accountId: number, instanceId?: number | null): Observable<any[]> {
    let params = new HttpParams();
    if (instanceId != null && instanceId !== undefined && !Number.isNaN(Number(instanceId))) {
      params = params.set('instanceId', String(instanceId));
    }
    const url = `${this.rbacBase}/users/${accountId}`;
    return this.http.get<any[]>(params.keys().length ? `${url}?${params.toString()}` : url).pipe(
      catchError((err) => throwError(() => err))
    );
  }

  /**
   * GET /rbac/users/:userId/roles?accountId=&instanceId= – optional instanceId.
   */
  getUserRoles(
    userId: number,
    params?: { accountId?: number; instanceId?: number | null }
  ): Observable<RbacUserRoleAssignment[]> {
    let httpParams = new HttpParams();
    if (params?.accountId != null) {
      httpParams = httpParams.set('accountId', String(params.accountId));
    }
    if (params?.instanceId != null && params?.instanceId !== undefined && !Number.isNaN(Number(params.instanceId))) {
      httpParams = httpParams.set('instanceId', String(params.instanceId));
    }
    const query = httpParams.keys().length ? `?${httpParams.toString()}` : '';
    const url = `${this.rbacBase}/users/${userId}/roles${query}`;
    return this.http.get<RbacUserRoleAssignment[]>(url).pipe(
      catchError((err) => throwError(() => err))
    );
  }

  /**
   * GET /rbac/users/:userId/effective-permissions?accountId=&instanceId= – optional instanceId.
   */
  getEffectivePermissions(
    userId: number,
    params?: { accountId?: number; instanceId?: number | null }
  ): Observable<RbacEffectivePermission[]> {
    let httpParams = new HttpParams();
    if (params?.accountId != null) {
      httpParams = httpParams.set('accountId', String(params.accountId));
    }
    if (params?.instanceId != null && params?.instanceId !== undefined && !Number.isNaN(Number(params.instanceId))) {
      httpParams = httpParams.set('instanceId', String(params.instanceId));
    }
    const query = httpParams.keys().length ? `?${httpParams.toString()}` : '';
    const url = `${this.rbacBase}/users/${userId}/effective-permissions${query}`;
    return this.http.get<RbacEffectivePermission[]>(url).pipe(
      catchError((err) => throwError(() => err))
    );
  }

  /**
   * Assign roles to a user for a scope (account-level or instance-level).
   * Backend: deletes/inserts only for the given scope.
   * Body: roleIds (required), instanceId (optional; omit or null = account-level, set = instance-level).
   */
  assignUserRoles(userId: number, body: AssignUserRolesDto): Observable<any> {
    const url = `${this.rbacBase}/users/${userId}/roles`;
    const payload = {
      roleIds: body.roleIds,
      ...(body.instanceId != null && body.instanceId !== undefined && !Number.isNaN(Number(body.instanceId))
        ? { instanceId: body.instanceId }
        : {})
    };
    return this.http.put(url, payload).pipe(
      catchError((err) => throwError(() => err))
    );
  }
}
