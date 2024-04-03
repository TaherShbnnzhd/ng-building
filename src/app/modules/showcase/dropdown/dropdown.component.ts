/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SelectItem, SelectItemGroup } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { SkeletonModule } from 'primeng/skeleton';

import { City } from '@shared/models';

@Component({
  selector: 'block-dropdown',
  standalone: true,
  imports: [FormsModule, DropdownModule, SkeletonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  public cities!: City[];

  public selectedICity1!: City;

  public selectedICity2!: City;

  public selectedICity3!: string;

  public selectedCountry!: City;

  public countries: Record<string, string>[];

  public groupedCities: SelectItemGroup[];

  public items!: SelectItem[];

  public lazyItems: SelectItem[];

  public selectedItem1!: string;

  public selectedItem2!: string;

  public loading = false;

  public loadLazyTimeout: string | number | NodeJS.Timeout | undefined;

  constructor() {
    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'ردیف ' + (i + 1), value: 'Item ' + i });
    }

    this.cities = [
      { name: 'نیو یورک', code: 'NY' },
      { name: 'رم', code: 'RM' },
      { name: 'لندن', code: 'LDN' },
      { name: 'استانبول', code: 'IST' },
      { name: 'پاریس', code: 'PRS' },
    ];

    this.groupedCities = [
      {
        label: 'آلمان',
        value: 'de',
        items: [
          { label: 'برلین', value: 'Berlin' },
          { label: 'فرانکفورت', value: 'Frankfurt' },
          { label: 'هامبورگ', value: 'Hamburg' },
          { label: 'مونیخ', value: 'Munich' },
        ],
      },
      {
        label: 'آمریکا',
        value: 'us',
        items: [
          { label: 'شیکاگو', value: 'Chicago' },
          { label: 'لس آنجلس', value: 'Los Angeles' },
          { label: 'نیو یورک', value: 'New York' },
          { label: 'سان فرانسیسکو', value: 'San Francisco' },
        ],
      },
      {
        label: 'ژاپن',
        value: 'jp',
        items: [
          { label: 'کیوتو', value: 'Kyoto' },
          { label: 'اوساکا', value: 'Osaka' },
          { label: 'توکیو', value: 'Tokyo' },
          { label: 'یاکوهاما', value: 'Yokohama' },
        ],
      },
    ];

    this.countries = [
      { name: 'استرالیا', code: 'AU' },
      { name: 'برزیل', code: 'BR' },
      { name: 'چین', code: 'CN' },
      { name: 'یونان', code: 'EG' },
      { name: 'فرانسه', code: 'FR' },
      { name: 'آلمان', code: 'DE' },
      { name: 'هند', code: 'IN' },
      { name: 'ژاپن', code: 'JP' },
      { name: 'اسپانیا', code: 'ES' },
      { name: 'آمریکا', code: 'US' },
    ];

    this.lazyItems = Array.from({ length: 100000 });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public onLazyLoad(event: any) {
    this.loading = true;

    if (this.loadLazyTimeout) {
      clearTimeout(this.loadLazyTimeout);
    }

    //imitate delay of a backend call
    this.loadLazyTimeout = setTimeout(() => {
      const { first, last } = event;
      const lazyItems = [...this.lazyItems];

      for (let i = first; i < last; i++) {
        lazyItems[i] = { label: `ردیف ${i + 1}`, value: i };
      }

      this.lazyItems = lazyItems;
      this.loading = false;
    }, Math.random() * 1000 + 250);
  }
}
