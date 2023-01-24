/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  Event,
} from '@angular/router';
import { fadeInAnimation } from '@shared/animations/transition.animation';
import { AnimationService } from '@shared/services/animation.service';
import { PrimeNGConfig } from 'primeng/api';
import { filter, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'block-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [fadeInAnimation],
  providers: [AnimationService],
})
export class MainComponent implements OnInit {
  public menuToggle = false;

  public pageTitle = '';

  public loading = false;

  public currentApplicationVersion!: string;

  constructor(
    private router: Router,
    public animationService: AnimationService,
    private primengConfig: PrimeNGConfig
  ) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit(): void {
    this.currentApplicationVersion = environment.appVersion;

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route?.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route?.snapshot.data['title'];
          }
          return routeTitle;
        })
      )
      .subscribe((title: string) => {
        if (title) {
          this.pageTitle = title;
        }
      });

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
