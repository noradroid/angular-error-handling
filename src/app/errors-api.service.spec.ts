import { TestBed } from '@angular/core/testing';

import { ErrorsApiService } from './errors-api.service';

describe('ErrorsApiService', () => {
  let service: ErrorsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
