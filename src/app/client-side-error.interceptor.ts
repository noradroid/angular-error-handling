import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';

import { NEVER, Observable, catchError, throwError } from 'rxjs';
import { ToastsService } from 'toasts';

@Injectable()
export class ClientSideErrorInterceptor implements HttpInterceptor {
  constructor(private toasts: ToastsService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 0) {
          this.toasts.info(
            'A client side error has occurred. Please check the logs for more details.'
          );
          console.log(err);
          return NEVER;
        }
        return throwError(() => err);
      })
    );
  }
}
