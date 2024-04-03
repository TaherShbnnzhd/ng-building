/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { TestBed } from '@angular/core/testing';

import { JDateValidatorService } from './jdate-validator.service';

describe('JDateValidatorService', () => {
  let service: JDateValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JDateValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
