import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const PORTAL_URLS = [
  '/ordersummary/saveorder',
  '/ordersummary/updateorder',
  '/ordersummary/save',
  '/ordersummary/list',
  '/orderdetails/byorder/',
];

@Injectable()
export class ConsumerPortalInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isPortalUrl = PORTAL_URLS.some(path => req.url.includes(path));
    const apiKey = (environment as any).portalApiKey;

    if (isPortalUrl && apiKey) {
      const cloned = req.clone({ setHeaders: { 'x-api-key': apiKey } });
      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
