/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { TestBed } from '@angular/core/testing';

import { RetryInterceptor } from './retry.interceptor';

describe('RetryInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [RetryInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: RetryInterceptor = TestBed.inject(RetryInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
