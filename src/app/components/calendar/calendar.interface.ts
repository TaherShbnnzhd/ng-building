/*  بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

export interface LocaleSettings {
  firstDayOfWeek?: number;
  dayNames?: string[];
  dayNamesShort?: string[];
  dayNamesMin?: string[];
  monthNames?: string[];
  monthNamesShort?: string[];
  today?: string;
  clear?: string;
  dateFormat?: string;
  weekHeader?: string;
}

export type CalendarTypeView = 'date' | 'month' | 'year';
