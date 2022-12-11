import { TestBed } from '@angular/core/testing';

import { RequestCacheWithMap } from './request-cache.service';

describe('RequestCacheService', () => {
  let service: RequestCacheWithMap;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestCacheWithMap);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
