/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component } from '@angular/core';

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'block-upload',
  standalone: true,
  imports: [ToastModule, FileUploadModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [MessageService],
})
export class UploadComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public onUpload(event: any) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'success',
      summary: 'با موفقیت انجام شد.',
      detail: 'بارگزاری',
      closable: true,
      life: 300000,
    });
  }
}
