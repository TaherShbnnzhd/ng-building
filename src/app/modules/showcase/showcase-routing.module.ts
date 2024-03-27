/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from '@core/authentication';

import { AccordionComponent } from './accordion/accordion.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BootstrapiconComponent } from './bootstrapicon/bootstrapicon.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CalendarDemoComponent } from './calendar-demo/calendar-demo.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalComponent } from './modal/modal.component';
import { ProgressComponent } from './progress/progress.component';
import { ShowcaseComponent } from './showcase.component';
import { TabComponent } from './tab/tab.component';
import { DataTableComponent } from './data-table/data-table.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseComponent,
    children: [
      {
        path: '',
        canMatch: [authGuard],
        children: [
          {
            path: 'alerts',
            component: AlertsComponent,
            data: { reuse: true, title: 'پیغام', animation: 'alertsPage' },
          },
          {
            path: 'accordion',
            component: AccordionComponent,
            data: { reuse: true, title: 'تاشو', animation: 'accordionPage' },
          },
          {
            path: 'buttons',
            component: ButtonsComponent,
            data: { reuse: true, title: 'دکمه', animation: 'buttonsPage' },
          },
          {
            path: 'modal',
            component: ModalComponent,
            data: { reuse: true, title: 'اعلان', animation: 'modalPage' },
          },
          {
            path: 'progress',
            component: ProgressComponent,
            data: { reuse: true, title: 'روند', animation: 'progressPage' },
          },
          {
            path: 'tab',
            component: TabComponent,
            data: { reuse: true, title: 'قسمت', animation: 'tabPage' },
          },
          {
            path: 'data-table',
            component: DataTableComponent,
            data: { reuse: true, title: 'جدول', animation: 'dataTablePage' },
          },
          {
            path: 'calendar',
            component: CalendarDemoComponent,
            data: { reuse: true, title: 'تقویم', animation: 'calendarPage' },
          },
          {
            path: 'dropdown',
            component: DropdownComponent,
            data: { reuse: true, title: 'انتخابگر', animation: 'dropdownPage' },
          },
          {
            path: 'upload',
            component: UploadComponent,
            data: { reuse: true, title: 'بارگزاری', animation: 'uploadPage' },
          },
          {
            path: 'bootstrapicon',
            component: BootstrapiconComponent,
            data: {
              reuse: true,
              title: 'نمایه',
              animation: 'bootstrapiconPage',
            },
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
export class ShowcaseRoutingModule {}
