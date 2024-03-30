/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component } from '@angular/core';

import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'block-tab',
  standalone: true,
  imports: [TabViewModule],
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  public activeIndex1 = 0;

  public activeIndex2 = 0;

  public scrollableTabs = Array.from({ length: 50 }, (_, i) => ({
    title: `قسمت ${i + 1}`,
    content: `قسمت ${i + 1} محتوا`,
  }));
}
