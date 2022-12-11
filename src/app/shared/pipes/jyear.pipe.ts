import { Pipe, PipeTransform } from '@angular/core';

import { JDateCalculatorService } from '@shared/utilities/JDate/calculator/jdate-calculator.service';

@Pipe({
  name: 'jyear'
})
export class JyearPipe implements PipeTransform {

  constructor(private jDateCalculatorService: JDateCalculatorService) {}

  transform(value: number): string {
    return this.jDateCalculatorService.georgianYearToJalaliYear(value).toString();
  }

}
