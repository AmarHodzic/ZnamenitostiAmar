import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!!this.authService.getAuthToken()){
      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${this.authService.getAuthToken()}`)
      });
      return next.handle(authReq);
    }
    else{
      return next.handle(request);
    }
  }
}
