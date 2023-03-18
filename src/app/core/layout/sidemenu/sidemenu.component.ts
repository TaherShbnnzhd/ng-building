/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';

import { Menu } from './sidemenu.interface';

@Component({
  selector: 'block-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit, AfterViewInit {
  activeRouteMenuName!: string;

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

  @ViewChildren('menuItem') menuItems!: QueryList<ElementRef>;
  @ViewChildren('menuItemOffcanvas') menuItemsOffcanvas!: QueryList<ElementRef>;

  @ViewChildren('subMenuItem') subMenuItems!: QueryList<ElementRef>;
  @ViewChildren('subMenuItemOffcanvas')
  subMenuItemsOffcanvas!: QueryList<ElementRef>;

  @Output() hasClosed: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menuList = this.getMenuItems();
    this.innerWidth = window.innerWidth;
    this.activeRouteMenuName = this.router.url.split('/')[1];
  }

  ngAfterViewInit(): void {
    this.expandActiveRouteMenu();
  }

  /** Get width of the screen */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  /**
   * دریافت اطلاعات منو ذخیره شده
   * @returns اطلاعات منو ذخیره شده
   */
  private getMenuItems(): Menu[] {
    const sessionStorageMenuItems = sessionStorage.getItem('MenuItems');
    const localStorageMenuItems = localStorage.getItem('MenuItems');

    if (sessionStorageMenuItems) {
      return JSON.parse(sessionStorageMenuItems);
    } else if (localStorageMenuItems) {
      return JSON.parse(localStorageMenuItems);
    } else {
      return [
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
            {
              name: 'bootstrapicon',
              title: 'نمایه',
            },
          ],
        },
      ];
    }
  }

  /** Expand active route menu */
  private expandActiveRouteMenu() {
    /* Normal Mode */
    const menuElement = this.menuItems.find(
      menuItem => menuItem.nativeElement['id'] === this.activeRouteMenuName
    );
    const subMenuElement = this.subMenuItems.find(
      menuItem =>
        menuItem.nativeElement['id'].split('-')[2] === this.activeRouteMenuName
    );

    if (menuElement && subMenuElement) {
      menuElement.nativeElement.setAttribute('aria-expanded', 'true');
      menuElement.nativeElement.classList.remove('collapsed');

      subMenuElement.nativeElement.classList.remove('collapse');
      subMenuElement.nativeElement.classList.add('show');
    }

    /* Offcanvas Mode */
    const menuElementOffcanvas = this.menuItemsOffcanvas.find(
      menuItem => menuItem.nativeElement['id'] === this.activeRouteMenuName
    );
    const subMenuElementOffcanvas = this.subMenuItemsOffcanvas.find(
      menuItem =>
        menuItem.nativeElement['id'].split('-')[2] === this.activeRouteMenuName
    );

    if (menuElementOffcanvas && subMenuElementOffcanvas) {
      menuElementOffcanvas.nativeElement.setAttribute('aria-expanded', 'true');
      menuElementOffcanvas.nativeElement.classList.remove('collapsed');

      subMenuElementOffcanvas.nativeElement.classList.remove('collapse');
      subMenuElementOffcanvas.nativeElement.classList.add('show');
    }
  }
}
