/* بسم الله الرحمن الرحیم */

import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'block-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  providers: [MessageService],
})
export class ProgressComponent implements OnInit {
  public value = 0;
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    const interval = setInterval(() => {
      this.value = this.value + Math.floor(Math.random() * 10) + 1;
      if (this.value >= 100) {
        this.value = 100;
        this.messageService.add({
          severity: 'info',
          summary: 'Success',
          detail: 'Process Completed',
        });
        clearInterval(interval);
      }
    }, 1000);
  }
}
