/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component, OnInit } from '@angular/core';

import { fadeInAnimation } from '@shared/animations/transition.animation';
import { AnimationService } from '@shared/services/animation.service';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'block-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation],
  providers: [AnimationService],
})
export class AppComponent implements OnInit {
  constructor(
    public animationService: AnimationService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.primengConfig.setTranslation({
      startsWith: 'شروع با',
      contains: 'شامل شود',
      notContains: 'شامل نشود',
      endsWith: 'پایان یابد با',
      equals: 'برابر با',
      notEquals: 'مخالف با',
      matchAll: 'و',
      matchAny: 'یا',
      apply: 'اعمال',
      clear: 'حذف',
      addRule: 'افزودن شرط',
      removeRule: 'حذف شرط',
      noFilter: '',
      lt: 'کوچکتر',
      lte: 'کوچکتر یا برابر',
      gt: 'بزرگتر',
      gte: 'بزرگتر یا برابر',
      is: 'موجود باشد',
      isNot: 'موجود نباشد',
      before: 'قبل',
      after: 'بعد',
      dateIs: 'برابر با',
      dateIsNot: 'مخالف با',
      dateBefore: 'کوچکتر از',
      dateAfter: 'بزرگتر از',
      accept: 'تایید',
      reject: 'لغو',
      choose: 'انتخاب',
      upload: 'بارگزاری',
      cancel: 'انصراف',
      dayNames: [
        'یکشنبه',
        'دوشنبه',
        'سه‌شنبه',
        'چهرشنبه',
        'پنج‌شنبه',
        'جمعه',
        'شنبه',
      ],
      dayNamesShort: [
        'یکشنبه',
        'دوشنبه',
        'سه‌شنبه',
        'چهرشنبه',
        'پنج‌شنبه',
        'جمعه',
        'شنبه',
      ],
      dayNamesMin: [
        'یکشنبه',
        'دوشنبه',
        'سه‌شنبه',
        'چهرشنبه',
        'پنج‌شنبه',
        'جمعه',
        'شنبه',
      ],
      monthNames: [
        'فروردین',
        'اردیبهشت',
        'خرداد',
        'تیر',
        'مرداد',
        'شهریور',
        'مهر',
        'آبان',
        'آذر',
        'دی',
        'بهمن',
        'اسفند',
      ],
      monthNamesShort: [
        'فروردین',
        'اردیبهشت',
        'خرداد',
        'تیر',
        'مرداد',
        'شهریور',
        'مهر',
        'آبان',
        'آذر',
        'دی',
        'بهمن',
        'اسفند',
      ],
      dateFormat: 'yy/mm/dd',
      firstDayOfWeek: 6,
      today: 'امروز',
      weekHeader: 'هفته',
      weak: 'نازک',
      medium: 'عادی',
      strong: 'ضخیم',
      passwordPrompt: 'رمز عبور را وارد کنید',
      emptyMessage: 'هیچ ردیفی یافت نشد',
      emptyFilterMessage: 'هیچ ردیفی یافت نشد',
    });
  }
}
