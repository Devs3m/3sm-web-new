import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthService } from '../pages/service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Skip adding token for public auth endpoints (no auth required)
    if (req.url.includes('/auth/login') ||
        req.url.includes('/auth/forgot-password-question') ||
        req.url.includes('/auth/forgot-password-validate') ||
        req.url.includes('/auth/forgot-password-reset')) {
      return next.handle(req);
    }

    // Consumer portal public endpoints — never send JWT
    const isPortalRequest =
      req.url.includes('/ordersummary/saveorder') ||
      req.url.includes('/ordersummary/updateorder') ||
      req.url.includes('/ordersummary/list') ||
      req.url.includes('/orderdetails/byorder/') ||
      req.url.includes('/product/portal') ||
      req.url.includes('/instance/details/') ||
      req.url.includes('/account/details/');
    if (isPortalRequest) {
      return next.handle(req);
    }

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
          // Handle 401 Unauthorized (token expired or invalid) - auto logout
          // Skip provisioning: wrong X-Enrollment-Token returns 401 but must not clear JWT session.
          const url = req.url || '';
          if (error.status === 401 && !url.includes('/provision/')) {
            this.injector.get(AuthService).logout();
          }
          return throwError(() => error);
        })
      );
    }

    // If no token, proceed with the original request
    return next.handle(req);
  }
}

