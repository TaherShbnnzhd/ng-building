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

  get close() {
    return this._close;
  }

  set close(value: boolean) {
    this._close = value;

    this.hasClosed.emit(value);
  }

  offcanvas = false;

  menuList: menu[] = [];

  @Output() hasClosed: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    this.menuList = [
      {
        name: 'showcase',
        title: 'پیش نمایش',
        icon: 'mgc_palette_2_line',
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
        icon: 'mgc_ghost_line',
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