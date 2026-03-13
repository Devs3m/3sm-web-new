import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Skip adding token for login endpoint
    if (req.url.includes('/auth/login')) {
      return next.handle(req);
    }

    // Get the token from localStorage
    const token = localStorage.getItem('token');

    // If token exists, clone the request and add the Authorization header
    if (token) {
      const format = (environment as any).authHeaderFormat || 'Bearer';
      const authValue = format === 'token' ? token : `Bearer ${token}`;
      const cloned = req.clone({
        setHeaders: {
          Authorization: authValue
        }
      });
      return next.handle(cloned).pipe(
        catchError((error: HttpErrorResponse) => {
          // Handle 401 Unauthorized errors
          if (error.status === 401) {
            // Clear token and redirect to login
            localStorage.removeItem('token');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userData');
            this.router.navigate(['/login']);
          }
          return throwError(() => error);
        })
      );
    }

    // If no token, proceed with the original request
    return next.handle(req);
  }
}

