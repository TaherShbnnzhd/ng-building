/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { JDateCalculatorService } from '@shared/utilities/JDate/calculator/jdate-calculator.service';
import { JDateValidatorService } from '@shared/utilities/JDate/validator/jdate-validator.service';
import { JdayPipe } from './jday.pipe';

describe('JdayPipe', () => {
  it('create an instance', () => {
    const pipe = new JdayPipe(
      new JDateCalculatorService(new JDateValidatorService())
    );
    expect(pipe).toBeTruthy();
  });
});
