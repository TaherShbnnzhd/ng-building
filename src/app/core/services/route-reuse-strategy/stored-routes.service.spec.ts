/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { TestBed } from '@angular/core/testing';

import { StoredRoutesService } from './stored-routes.service';

describe('StoredRoutesService', () => {
  let service: StoredRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoredRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
