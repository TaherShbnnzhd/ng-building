/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportContainerComponent } from './report-container/report-container.component';

import { ReportListComponent } from './report-list/report-list.component';

const routes: Routes = [
  {
    path: '',
    component: ReportListComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
