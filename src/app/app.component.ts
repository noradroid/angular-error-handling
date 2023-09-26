import { Component, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ToastsService } from 'toasts';

import {
  BAD_GATEWAY,
  BAD_REQUEST,
  CONFLICT,
  FORBIDDEN,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  SERVICE_UNAVAILABLE,
  UNAUTHORIZED,
} from './error-message.constants';
import { ErrorType, ErrorTypes } from './error.type';
import { ErrorsApiService } from './errors-api.service';
import { StatusCode } from './status-code.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  errors = ErrorTypes;
  private service = inject(ErrorsApiService);
  private toasts = inject(ToastsService);

  getError(errorType: ErrorType): void {
    this.service.getError(errorType).subscribe({
      next: (val) => {
        console.log(val);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        this.serverErrorHandler(err);
      },
    });
  }

  serverErrorHandler(err: HttpErrorResponse): void {
    switch (err.status) {
      case StatusCode.BAD_REQUEST:
        this.toasts.info(BAD_REQUEST);
        break;
      case StatusCode.UNAUTHORIZED:
        this.toasts.info(UNAUTHORIZED);
        break;
      case StatusCode.FORBIDDEN:
        this.toasts.info(FORBIDDEN);
        break;
      case StatusCode.NOT_FOUND:
        this.toasts.info(NOT_FOUND);
        break;
      case StatusCode.CONFLICT:
        this.toasts.info(CONFLICT);
        break;
      case StatusCode.INTERNAL_SERVER_ERROR:
        this.toasts.info(INTERNAL_SERVER_ERROR);
        break;
      case StatusCode.BAD_GATEWAY:
        this.toasts.info(BAD_GATEWAY);
        break;
      case StatusCode.SERVICE_UNAVAILABLE:
        this.toasts.info(SERVICE_UNAVAILABLE);
        break;
      default:
        this.toasts.info(JSON.stringify(err.error));
    }
  }
}
