/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component, OnInit } from '@angular/core';

import { HttpService } from '@core/http';
import { AppConfigService } from '@core/services';
import { Customer, IRepresentative } from '@shared/models';

import { tap } from 'rxjs';

@Component({
  selector: 'block-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  public customers!: Customer[];

  public selectedCustomers!: Customer[];

  public representatives!: IRepresentative[];

  public statuses!: { label: string; value: string }[];

  public loading = true;

  public activityValues: number[] = [0, 100];

  constructor(
    private httpService: HttpService,
    private config: AppConfigService
  ) {}

  ngOnInit(): void {
    this.httpService
      .get<Customer>(this.config.getAddress('customers'), 2)
      .pipe(tap(() => (this.loading = false)))
      .subscribe(response => {
        if (response?.data) {
          response.data.forEach(customer => {
            customer.date = new Date(customer.date as Date);
            this.customers.push(customer);
          });
        }
      });

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
    ];

    this.statuses = [
      { label: 'فاقد صلاحیت', value: 'unqualified' },
      { label: 'واجد شرایط', value: 'qualified' },
      { label: 'جدید', value: 'new' },
      { label: 'انتقال', value: 'negotiation' },
      { label: 'تمدید', value: 'renewal' },
      { label: 'پیشنهاد', value: 'proposal' },
    ];
  }
}
