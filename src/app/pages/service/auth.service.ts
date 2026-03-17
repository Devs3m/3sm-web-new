import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface LoginResponse {
  success: boolean;
  token: string;
  user?: {
    id?: number;
    userId?: number;
    email?: string;
    username?: string;
    role?: string;
    roleName?: string;
    roleId?: number;
    userroleid?: number;
    /** Account-level scope when null; instance-level when set. */
    accountid?: number | null;
    accountId?: number | null;
    instanceid?: number | null;
    instanceId?: number | null;
  };
  permissions?: any[];
  permissionCount?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  constructor(
    private http: HttpClient, 
    private router: Router
  ) {}

  // Login user - Now returns full response including permissions
  login(credentials: { email: string; password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
        if (credentials.email) {
          localStorage.setItem('userEmail', credentials.email);
        }
        if (response.user) {
          localStorage.setItem('userData', JSON.stringify(response.user));
        }
        if (response.permissions && Array.isArray(response.permissions) && response.permissions.length > 0) {
          localStorage.setItem('loginPermissions', JSON.stringify({
            permissions: response.permissions,
            user: response.user,
            timestamp: Date.now()
          }));
        }
      }),
      map((response) => response)
    );
  }

  // Check if user is logged in
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    return token ? !helper.isTokenExpired(token) : false;
  }

  // Get logged-in user data (merges JWT with userData so roleId/role are never lost)
  getUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const decodedToken = new JwtHelperService().decodeToken(token);
    const storedUserData = localStorage.getItem('userData');
    let userData: Record<string, unknown> | null = null;
    if (storedUserData) {
      try {
        userData = JSON.parse(storedUserData);
      } catch {
        /* ignore */
      }
    }

    // If token doesn't have user info, prefer userData entirely
    if (!decodedToken || Object.keys(decodedToken).length <= 2) {
      if (userData) return userData;
      const userEmail = localStorage.getItem('userEmail');
      if (userEmail) return { email: userEmail };
      return null;
    }

    // Merge: use JWT as base, overlay userData for missing/null critical fields
    const merged = { ...decodedToken };
    if (userData) {
      const keys = ['id', 'userId', 'roleId', 'role', 'roleName', 'email', 'username', 'accountid', 'instanceid'];
      for (const k of keys) {
        const jv = (merged as Record<string, unknown>)[k];
        const uv = (userData as Record<string, unknown>)[k];
        if ((jv === undefined || jv === null || jv === '') && uv !== undefined && uv !== null && uv !== '') {
          (merged as Record<string, unknown>)[k] = uv;
        }
      }
      // Also support roleid/userroleid (backend may use different casing)
      const ud = userData as Record<string, unknown>;
      const roleId = merged.roleId ?? merged.roleid ?? ud['roleId'] ?? ud['roleid'] ?? ud['userroleid'];
      if (roleId !== undefined && roleId !== null) merged.roleId = roleId;
      const uid = merged.userId ?? merged.userid ?? merged.id ?? merged.sub ?? ud['id'] ?? ud['userId'] ?? ud['userid'];
      if (uid !== undefined && uid !== null) {
        merged.userId = uid;
        merged.userid = uid;
        merged.id = uid;
      }
    }
    return merged;
  }

  // Get account ID from logged-in user (from JWT token)
  getAccountId(): number {
    const user = this.getUser();
    if (user) {
      // Try different field name variations
      const accountId = user.accountid || user.accountId || user.account_id || (user as any).accountid;
      if (accountId !== undefined && accountId !== null) {
        return typeof accountId === 'number' ? accountId : Number(accountId);
      }
    }
    // Default fallback (should not happen in production)
    return 1;
  }

  // Get instance ID from logged-in user (from JWT token)
  getInstanceId(): number {
    const user = this.getUser();
    if (user) {
      // Try different field name variations
      const instanceId = user.instanceid || user.instanceId || user.instance_id || (user as any).instanceid;
      if (instanceId !== undefined && instanceId !== null) {
        return typeof instanceId === 'number' ? instanceId : Number(instanceId);
      }
    }
    // Default fallback (should not happen in production)
    return 1;
  }

  // Get user ID from logged-in user (from JWT token)
  getUserId(): number {
    const user = this.getUser();
    if (user) {
      // Try different field name variations
      const userId = user.sub || user.userId || user.userid || user.user_id || user.id || (user as any).id;
      if (userId !== undefined && userId !== null) {
        return typeof userId === 'number' ? userId : Number(userId);
      }
    }
    // Default fallback (should not happen in production)
    return 1;
  }

  // Get current user email
  getUserEmail(): string {
    const user = this.getUser();
    if (user && user.email) {
      return user.email;
    }
    const storedEmail = localStorage.getItem('userEmail');
    return storedEmail || '';
  }

  // Fetch user details from API by email
  fetchUserDetailsByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user-by-email?email=${encodeURIComponent(email)}`);
  }

  // Logout user
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userData');
    localStorage.removeItem('loginPermissions'); // Clear login permissions cache
    this.router.navigate(['/login']);
  }
}