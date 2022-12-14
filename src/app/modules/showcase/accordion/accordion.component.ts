import { Component, OnInit } from '@angular/core';
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

  public onTabClose(event: any): void {
    this.messageService.add({
      severity: 'info',
      summary: 'Tab Closed',
      detail: 'Index: ' + event.index,
    });
  }

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