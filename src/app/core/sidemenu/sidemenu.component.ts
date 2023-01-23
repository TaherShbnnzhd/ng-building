/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { menu } from './sidemenu.interface';

@Component({
  selector: 'block-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  private _close = false;

  public get close() {
    return this._close;
  }

  public set close(value: boolean) {
    this._close = value;

    this.hasClosed.emit(value);
  }

  public offcanvas = false;

  public menuList: menu[] = [];

  @Output() hasClosed: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    this.menuList = [
      {
        name: 'showcase',
        title: 'پیش نمایش',
        icon: 'bi-easel',
        submenu: [
          {
            name: 'alerts',
            title: 'پیغام',
          },
          {
            name: 'accordion',
            title: 'تاشو',
          },
          {
            name: 'buttons',
            title: 'دکمه',
          },
          {
            name: 'modal',
            title: 'اعلان',
          },
          {
            name: 'progress',
            title: 'روند',
          },
          {
            name: 'tab',
            title: 'قسمت',
          },
          {
            name: 'data-table',
            title: 'جدول',
          },
          {
            name: 'calendar',
            title: 'تقویم',
          },
          {
            name: 'dropdown',
            title: 'انتخابگر',
          },
          {
            name: 'upload',
            title: 'بارگزاری',
          },
        ],
      },
      {
        name: 'showcase',
        title: 'نمایه',
        icon: 'bi-rainbow',
        submenu: [
          {
            name: 'bootstrapicon',
            title: 'پیش فرض',
          },
        ],
      },
    ];
  }
}
