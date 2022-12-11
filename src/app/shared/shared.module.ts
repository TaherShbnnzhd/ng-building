/* بسم الله الرحمن الرحیم */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* components */
import { SimpleButtonComponent } from './components/simple-button/simple-button.component';

/* pipes */
import { IRCurrencyPipe } from './pipes/ircurrency.pipe';
import { FaNumPipe } from './pipes/fa-num.pipe';
import { EnNumPipe } from './pipes/en-num.pipe';
import { JDatePipe } from './pipes/jdate.pipe';
import { CalendarComponent } from './components/calendar/calendar.component';
import { JyearPipe } from './pipes/jyear.pipe';
import { JdayPipe } from './pipes/jday.pipe';

/* PrimeNG */
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    SimpleButtonComponent,
    IRCurrencyPipe,
    FaNumPipe,
    EnNumPipe,
    JDatePipe,
    CalendarComponent,
    JyearPipe,
    JdayPipe,
  ],
  imports: [CommonModule, ButtonModule, RippleModule],
  exports: [
    SimpleButtonComponent,
    IRCurrencyPipe,
    FaNumPipe,
    EnNumPipe,
    JDatePipe,
    CalendarComponent,
    JyearPipe,
    JdayPipe,
  ],
})
export class SharedModule {}
