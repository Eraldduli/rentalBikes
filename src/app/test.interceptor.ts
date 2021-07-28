import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestService } from './test.service';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor(private test: TestService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Get the auth token from the service.
    const authToken = this.test.getAuthorizationToken();

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization','Bearer ' + authToken)
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
   
 }
}
