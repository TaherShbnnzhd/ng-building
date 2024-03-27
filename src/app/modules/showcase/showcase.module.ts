/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalendarComponent } from '@shared/components';

import { ShowcaseRoutingModule } from './showcase-routing.module';

import { AlertsComponent } from './alerts/alerts.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ModalComponent } from './modal/modal.component';
import { TabComponent } from './tab/tab.component';
import { ProgressComponent } from './progress/progress.component';
import { ShowcaseComponent } from './showcase.component';
import { DataTableComponent } from './data-table/data-table.component';
import { BootstrapiconComponent } from './bootstrapicon/bootstrapicon.component';
import { CalendarDemoComponent } from './calendar-demo/calendar-demo.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { UploadComponent } from './upload/upload.component';

/* Prime Ng */
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { SkeletonModule } from 'primeng/skeleton';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { FaNumPipe, IRCurrencyPipe, JDatePipe } from '@shared/pipes';

@NgModule({
  declarations: [
    AlertsComponent,
    AccordionComponent,
    ButtonsComponent,
    ModalComponent,
    TabComponent,
    ProgressComponent,
    ShowcaseComponent,
    DataTableComponent,
    BootstrapiconComponent,
    CalendarDemoComponent,
    DropdownComponent,
    UploadComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShowcaseRoutingModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    AccordionModule,
    DialogModule,
    ProgressBarModule,
    TabViewModule,
    TableModule,
    SliderModule,
    MultiSelectModule,
    CalendarModule,
    DropdownModule,
    SkeletonModule,
    FileUploadModule,
    ToastModule,
    CalendarComponent,
    FaNumPipe,
    JDatePipe,
    IRCurrencyPipe,
  ],
})
export class ShowcaseModule {}
