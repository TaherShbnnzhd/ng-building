/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CalendarComponent } from 'block/calendar';
import { FaNumPipe } from 'block/pipes';
import { JDate } from 'block/utilities';

@Component({
  selector: 'block-calendar-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CalendarComponent, FaNumPipe],
  templateUrl: './calendar-demo.component.html',
  styleUrls: ['./calendar-demo.component.scss'],
})
export class CalendarDemoComponent implements OnInit {
  public date1!: JDate;

  public date2!: JDate;

  public date3!: JDate;

  public date4!: JDate;

  public date5!: JDate;

  public date6!: JDate;

  public date7!: JDate;

  public date8!: JDate;

  public date9!: JDate;

  public date10!: JDate;

  public date11!: JDate;

  public date12!: JDate;

  public date13!: JDate;

  public date14!: JDate;

  public dates!: JDate[];

  public rangeDates!: JDate[];

  public minDate!: JDate;

  public maxDate!: JDate;

  public invalidDates!: Array<JDate>;

  ngOnInit() {
    const today = new JDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = prevMonth === 11 ? year - 1 : year;
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = nextMonth === 0 ? year + 1 : year;

    this.minDate = new JDate();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);

    this.maxDate = new JDate();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    const invalidDate = new JDate();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  }
}
