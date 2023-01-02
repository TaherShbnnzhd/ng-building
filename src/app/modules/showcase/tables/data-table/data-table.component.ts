/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component, OnInit } from '@angular/core';
import { ICustomer, IRepresentative } from '@shared/models/customer.model';
import { HttpService } from 'src/app/core/http/http.service';
import { AppConfigService } from 'src/app/core/services/app-config.service';

@Component({
  selector: 'block-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  public customers!: ICustomer[];

  public selectedCustomers!: ICustomer[];

  public representatives!: IRepresentative[];

  public statuses!: { label: string; value: string }[];

  public loading = true;

  public activityValues: number[] = [0, 100];

  constructor(
    private customerService: HttpService,
    private config: AppConfigService
  ) {}

  ngOnInit(): void {
    this.customerService
      .getCustomers(this.config.getAddress('customers-small'), 2)
      .subscribe((customers) => {
        this.customers = customers;

        this.loading = false;

        this.customers.forEach(
          (customer) => (customer.date = new Date(customer.date as Date))
        );
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
