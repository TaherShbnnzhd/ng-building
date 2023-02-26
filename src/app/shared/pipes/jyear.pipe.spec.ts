/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { JDateCalculatorService } from '@shared/utilities/JDate/calculator/jdate-calculator.service';
import { JDateValidatorService } from '@shared/utilities/JDate/validator/jdate-validator.service';
import { JyearPipe } from './jyear.pipe';

describe('JyearPipe', () => {
  it('create an instance', () => {
    const pipe = new JyearPipe(
      new JDateCalculatorService(new JDateValidatorService())
    );
    expect(pipe).toBeTruthy();
  });
});
