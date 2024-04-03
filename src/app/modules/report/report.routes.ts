/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Route } from '@angular/router';

import { ReportComponent } from './report.component';
import { ReportContainerComponent } from './report-container/report-container.component';

export default [
  {
    path: '',
    component: ReportComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: ':id',
            component: ReportContainerComponent,
          },
        ],
      },
    ],
  },
] satisfies Route[];
