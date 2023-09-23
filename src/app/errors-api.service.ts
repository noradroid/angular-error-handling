import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';

import { ErrorType } from './error.type';

@Injectable({
  providedIn: 'root',
})
export class ErrorsApiService {
  private URL = 'http://localhost:8080/api/errors';

  constructor(private http: HttpClient) {}

  getError(type: ErrorType): Observable<any> {
    return this.http.get(`${this.URL}/${type}`).pipe(
      catchError((err) => {
        throw err;
      })
    );
  }
}
