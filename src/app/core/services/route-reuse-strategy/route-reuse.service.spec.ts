/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { TestBed } from '@angular/core/testing';

import { RouteReuseService } from './route-reuse.service';

describe('RouteReuseService', () => {
  let service: RouteReuseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteReuseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
