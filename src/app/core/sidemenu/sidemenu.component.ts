/* بسم الله الرحمن الرحیم */

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { menu } from './sidemenu.interface';

@Component({
  selector: 'block-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  private _collapse: boolean = false;

  public get collapse() {

    return this._collapse;
  }

  public set collapse(value: boolean) {

    this._collapse = value;

    this.onCollaps.emit(value);
  }

  public offcanvas: boolean = false;

  public menuList: menu[] = [];

  @Output() onCollaps: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    this.menuList = [
      {
        name: 'showcase',
        title: 'پیش نمایش',
        icon: 'bi-easel',
        submenu: [
          {
            name: 'alerts',
            title: 'پیغام'
          },
          {
            name: 'accordion',
            title: 'تاشو'
          },
          {
            name: 'buttons',
            title: 'دکمه'
          },
          {
            name: 'modal',
            title: 'اعلان'
          },
          {
            name: 'progress',
            title: 'روند'
          },
          {
            name: 'tab',
            title: 'قسمت'
          },
          {
            name: 'data-table',
            title: 'جدول'
          },
          {
            name: 'calendar',
            title: 'تقویم'
          },
          {
            name: 'dropdown',
            title: 'انتخابگر'
          },
          {
            name: 'upload',
            title: 'بارگزاری'
          },
        ]
      },
      {
        name: 'showcase',
        title: 'نمایه',
        icon: 'bi-rainbow',
        submenu: [
          {
            name: 'bootstrapicon',
            title: 'پیش فرض'
          }
        ]
      }
    ];
  }
}
