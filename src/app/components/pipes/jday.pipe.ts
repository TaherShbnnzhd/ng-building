/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Pipe, PipeTransform } from '@angular/core';

import { ISimpleDate, JDateCalculatorService } from 'block/utilities';

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
  standalone: true,
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
