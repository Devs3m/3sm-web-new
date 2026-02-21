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
        console.log('========================================');
        console.log('Login Response Received:');
        console.log('  - Full Response:', response);
        console.log('  - Has Token:', !!response.token);
        console.log('  - Has User:', !!response.user);
        console.log('  - Has Permissions:', !!response.permissions);
        console.log('  - Permissions Count:', response.permissions?.length || 0);
        console.log('  - Permission Count Field:', response.permissionCount);
        console.log('========================================');
        
        // Store token
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
        
        // Store user email from login credentials
        if (credentials.email) {
          localStorage.setItem('userEmail', credentials.email);
        }
        
        // Store user data if provided in response
        if (response.user) {
          localStorage.setItem('userData', JSON.stringify(response.user));
        }
        
        // Store permissions if provided in login response (PermissionService will pick this up)
        if (response.permissions && Array.isArray(response.permissions) && response.permissions.length > 0) {
          console.log('✅ Received permissions in login response:', response.permissions.length, 'permissions');
          console.log('  - Sample permissions:', response.permissions.slice(0, 3));
          // Store in localStorage for PermissionService to pick up (avoids circular dependency)
          localStorage.setItem('loginPermissions', JSON.stringify({
            permissions: response.permissions,
            user: response.user,
            timestamp: Date.now()
          }));
          console.log('✅ Stored permissions in localStorage as loginPermissions');
        } else {
          console.warn('⚠️ No permissions in login response');
          console.warn('  - response.permissions:', response.permissions);
          console.warn('  - Is Array:', Array.isArray(response.permissions));
          console.warn('  - Will load permissions separately via API');
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

  // Get logged-in user data
  getUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    
    const decodedToken = new JwtHelperService().decodeToken(token);
    
    // If token doesn't have user info, try to get from localStorage
    if (!decodedToken || Object.keys(decodedToken).length <= 2) {
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        try {
          return JSON.parse(storedUserData);
        } catch (e) {
          console.error('Error parsing user data:', e);
        }
      }
      
      // Fallback: create user object from stored email
      const userEmail = localStorage.getItem('userEmail');
      if (userEmail) {
        return { email: userEmail };
      }
    }
    
    return decodedToken;
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
    console.warn('⚠️ Account ID not found in user token, defaulting to 1');
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
    console.warn('⚠️ Instance ID not found in user token, defaulting to 1');
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
    console.warn('⚠️ User ID not found in user token, defaulting to 1');
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