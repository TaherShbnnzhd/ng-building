/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

import { Menu } from './sidemenu.interface';

@Component({
  selector: 'block-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  /** Width of the screen */
  innerWidth!: number;

  private _close = false;

  /** Side menu close state */
  public get close() {
    return this._close;
  }

  public set close(value: boolean) {
    this._close = value;

    this.hasClosed.emit(value);
  }

  /** Side menu offcanvas mode state */
  public offcanvas = false;

  /** List of menus */
  public menuList: Menu[] = [];

  @Output() hasClosed: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

    this.menuList = [
      {
        name: 'showcase',
        title: 'پیش نمایش',
        icon: 'mgc_palette_2_line',
        subMenu: [
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
        subMenu: [
          {
            name: 'bootstrapicon',
            title: 'پیش فرض',
          },
        ],
      },
    ];
  }

  /** Get width of the screen */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }
}
