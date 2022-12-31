/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'block-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  providers: [MessageService],
})
export class AccordionComponent {
  public activeState: boolean[] = [true, false, false];

  constructor(private messageService: MessageService) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public onTabClose(event: any): void {
    this.messageService.add({
      severity: 'info',
      summary: 'Tab Closed',
      detail: 'Index: ' + event.index,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public onTabOpen(event: any): void {
    this.messageService.add({
      severity: 'info',
      summary: 'Tab Expanded',
      detail: 'Index: ' + event.index,
    });
  }

  public toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }
}
