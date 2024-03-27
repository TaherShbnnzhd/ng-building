/* ّبِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component, OnInit } from '@angular/core';

import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'block-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  providers: [MessageService],
})
export class AlertsComponent implements OnInit {
  public msgs1!: Message[];
  public msgs2!: Message[];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.msgs1 = [
      {
        severity: 'success',
        summary: 'موفقیت انجام شد.',
        detail: 'عملیات مورد نظر با',
      },
      {
        severity: 'info',
        summary: 'در حال انجام است. . .',
        detail: 'عملیات مورد نظر',
      },
      { severity: 'warn', summary: 'لغو شد؟!', detail: 'عملیات مورد نظر' },
      {
        severity: 'error',
        summary: 'خطا مواجح شد!!!',
        detail: 'عملیات مورد نظر با',
      },
      {
        severity: 'custom',
        summary: 'ذخیره شد.',
        detail: 'عملیات مورد نظر',
        icon: 'pi-file',
      },
    ];
  }

  public addMessages(): void {
    this.msgs2 = [
      {
        severity: 'success',
        summary: 'موفقیت انجام شد.',
        detail: 'عملیات مورد نظر با',
      },
      {
        severity: 'info',
        summary: 'در حال انجام است. . .',
        detail: 'عملیات مورد نظر',
      },
      { severity: 'warn', summary: 'لغو شد؟!', detail: 'عملیات مورد نظر' },
      {
        severity: 'error',
        summary: 'خطا مواجح شد!!!',
        detail: 'عملیات مورد نظر با',
      },
    ];
  }

  public clearMessages(): void {
    this.msgs2 = [];
  }

  public showViaService() {
    this.messageService.add({
      severity: 'success',
      summary: 'دریافت شد.',
      detail: 'پیغام توسط سرویس پیام',
    });
  }
}
