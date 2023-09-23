import { Component, inject } from '@angular/core';

import { ToastsService } from 'toasts';

import { ErrorType, ErrorTypes } from './error.type';
import { ErrorsApiService } from './errors-api.service';
import { HttpErrorResponse } from '@angular/common/http';

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
        console.log('val ' + JSON.stringify(val));
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        if (err.status !== 0) {
          this.toasts.info(JSON.stringify(err.error));
        } else {
          console.log(err);
          this.toasts.info(JSON.stringify(err.error));
        }
      },
    });
  }
}
