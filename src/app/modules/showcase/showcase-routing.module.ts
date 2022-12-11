import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth/auth.guard';
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
import { DataTableComponent } from './tables/data-table/data-table.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseComponent,
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'alerts',
            component: AlertsComponent,
            data: { title: 'پیغام', animation: 'alertsPage' },
          },
          {
            path: 'accordion',
            component: AccordionComponent,
            data: { title: 'تاشو', animation: 'accordionPage' },
          },
          {
            path: 'buttons',
            component: ButtonsComponent,
            data: { title: 'دکمه', animation: 'buttonsPage' },
          },
          {
            path: 'modal',
            component: ModalComponent,
            data: { title: 'اعلان', animation: 'modalPage' },
          },
          {
            path: 'progress',
            component: ProgressComponent,
            data: { title: 'روند', animation: 'progressPage' },
          },
          {
            path: 'tab',
            component: TabComponent,
            data: { title: 'قسمت', animation: 'tabPage' },
          },
          {
            path: 'data-table',
            component: DataTableComponent,
            data: { title: 'جدول', animation: 'dataTablePage' },
          },
          {
            path: 'calendar',
            component: CalendarDemoComponent,
            data: { title: 'تقویم', animation: 'calendarPage' },
          },
          {
            path: 'dropdown',
            component: DropdownComponent,
            data: { title: 'انتخابگر', animation: 'dropdownPage' },
          },
          {
            path: 'upload',
            component: UploadComponent,
            data: { title: 'بارگزاری', animation: 'uploadPage' },
          },
          {
            path: 'bootstrapicon',
            component: BootstrapiconComponent,
            data: { title: 'نمایه', animation: 'bootstrapiconPage' },
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
