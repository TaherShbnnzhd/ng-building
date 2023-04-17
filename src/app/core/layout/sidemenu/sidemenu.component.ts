/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

import { Menu } from './sidemenu.interface';
import { AuthService } from '@core/authentication/auth.service';
import { SidemenuService } from './sidemenu.service';

@Component({
  selector: 'block-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit, AfterViewInit {
  /** Side menu offcanvas mode state. */
  offcanvas = false;

  /** List of menus. */
  menuList: Menu[] = [];

  /** Current active menu name. */
  currentActiveMenu!: string;

  @ViewChildren('menuItem') menuItems!: QueryList<ElementRef>;
  @ViewChildren('menuItemOffcanvas') menuItemsOffcanvas!: QueryList<ElementRef>;

  @ViewChildren('subMenuItem') subMenuItems!: QueryList<ElementRef>;
  @ViewChildren('subMenuItemOffcanvas')
  subMenuItemsOffcanvas!: QueryList<ElementRef>;

  /** Main width. */
  @Input() innerWidth!: number;

  /** Active route menu name */
  @Input() activeRouteMenuName!: string;

  constructor(
    public authService: AuthService,
    public sidemenuService: SidemenuService
  ) {}

  ngOnInit(): void {
    this.menuList = this.getMenuItems();

    if (!this.authService.getAuthorizationToken()) this.sidemenuService.close();
    else this.sidemenuService.open();
  }

  ngAfterViewInit(): void {
    // Expand active menu when login redirect user.
    this.sidemenuService.menu.subscribe(name => {
      this.collapseAllMenu();
      this.expandActiveMenu(name);
    });
  }

  /**
   * Get menu from storage.
   * @returns Menu items
   */
  private getMenuItems(): Menu[] {
    const sessionStorageMenuItems = sessionStorage.getItem('MenuItems');
    const localStorageMenuItems = localStorage.getItem('MenuItems');

    if (sessionStorageMenuItems) return JSON.parse(sessionStorageMenuItems);
    else if (localStorageMenuItems) return JSON.parse(localStorageMenuItems);
    else
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

  /** Expand active route menu */
  private expandActiveMenu(name: string) {
    /* Normal Mode */
    const menuElement = this.menuItems.find(
      menuItem => menuItem.nativeElement['id'] === name
    );
    const subMenuElement = this.subMenuItems.find(
      menuItem => menuItem.nativeElement['id'].split('-')[2] === name
    );

    if (menuElement && subMenuElement) {
      menuElement.nativeElement.setAttribute('aria-expanded', 'true');
      menuElement.nativeElement.classList.remove('collapsed');

      subMenuElement.nativeElement.classList.remove('collapse');
      subMenuElement.nativeElement.classList.add('show');
    }

    /* Offcanvas Mode */
    const menuElementOffcanvas = this.menuItemsOffcanvas.find(
      menuItem => menuItem.nativeElement['id'] === name
    );
    const subMenuElementOffcanvas = this.subMenuItemsOffcanvas.find(
      menuItem => menuItem.nativeElement['id'].split('-')[2] === name
    );

    if (menuElementOffcanvas && subMenuElementOffcanvas) {
      menuElementOffcanvas.nativeElement.setAttribute('aria-expanded', 'true');
      menuElementOffcanvas.nativeElement.classList.remove('collapsed');

      subMenuElementOffcanvas.nativeElement.classList.remove('collapse');
      subMenuElementOffcanvas.nativeElement.classList.add('show');
    }
  }

  /** Collapse active route menu */
  private collapseAllMenu() {
    /* Normal Mode */
    this.menuItems.forEach(menuElement => {
      menuElement.nativeElement.setAttribute('aria-expanded', 'false');
      menuElement.nativeElement.classList.add('collapsed');
    });

    this.subMenuItems.forEach(subMenuElement => {
      subMenuElement.nativeElement.classList.add('collapse');
      subMenuElement.nativeElement.classList.remove('show');
    });

    /* Offcanvas Mode */
    this.menuItemsOffcanvas.forEach(menuElementOffcanvas => {
      menuElementOffcanvas.nativeElement.setAttribute('aria-expanded', 'false');
      menuElementOffcanvas.nativeElement.classList.add('collapsed');
    });

    this.subMenuItemsOffcanvas.forEach(subMenuElementOffcanvas => {
      subMenuElementOffcanvas.nativeElement.classList.add('collapse');
      subMenuElementOffcanvas.nativeElement.classList.remove('show');
    });
  }
}
