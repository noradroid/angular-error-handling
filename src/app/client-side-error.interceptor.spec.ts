import { TestBed } from '@angular/core/testing';

import { ClientSideErrorInterceptor } from './client-side-error.interceptor';

describe('ClientSideErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ClientSideErrorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ClientSideErrorInterceptor = TestBed.inject(ClientSideErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
