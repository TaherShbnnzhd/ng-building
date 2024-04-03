/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';

import { map, tap } from 'rxjs';

import { JDatePipe, FaNumPipe, IRCurrencyPipe } from 'block/pipes';

import { HttpService } from '@core/http';
import { Customer, IRepresentative } from '@shared/models';

@Component({
  selector: 'block-data-table',
  standalone: true,
  imports: [
    FormsModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    SliderModule,
    ProgressBarModule,
    JDatePipe,
    FaNumPipe,
    IRCurrencyPipe,
  ],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  customers: Customer[] = [];
  selectedCustomers!: Customer[];
  representatives!: IRepresentative[];
  statuses!: { label: string; value: string }[];
  loading = true;
  activityValues: number[] = [0, 100];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService
      .get<Customer>('customers', 2)
      .pipe(
        tap(() => (this.loading = false)),
        map(response => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if ((response as any)['customers']) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return (response as any)['customers'];
          } else [];
        })
      )
      .subscribe((response: Customer[]) => {
        if (response) {
          response.forEach(customer => {
            customer.date = new Date(customer.date as Date);
            this.customers.push(customer);
          });

          console.log(this.customers);
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
