/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Pipe, PipeTransform } from '@angular/core';

import { JDateCalculatorService } from '@shared/utilities';

@Pipe({
  name: 'jyear',
  standalone: true,
})
export class JyearPipe implements PipeTransform {
  constructor(private jDateCalculatorService: JDateCalculatorService) {}

  transform(value: number): string {
    return this.jDateCalculatorService
      .georgianYearToJalaliYear(value)
      .toString();
  }
}
