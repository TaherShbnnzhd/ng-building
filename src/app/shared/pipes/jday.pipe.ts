/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Pipe, PipeTransform } from '@angular/core';

import { JDateCalculatorService } from '@shared/utilities/JDate/calculator/jdate-calculator.service';
import { ISimpleDate } from '@shared/utilities/JDate/simple-date.interface';

interface ICalendarDate {
  day: number;
  month: number;
  otherMonth: boolean;
  selectable: boolean;
  today: boolean;
  year: number;
}

@Pipe({
  name: 'jday',
})
export class JdayPipe implements PipeTransform {
  constructor(private jDateCalculatorService: JDateCalculatorService) {}
  transform(value: ICalendarDate): number {
    const jDate: ISimpleDate = this.jDateCalculatorService.convertToJalali(
      new Date(value.year, value.month, value.day)
    );

    return jDate.day;
  }
}
