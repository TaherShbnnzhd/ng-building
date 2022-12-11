/* بسم الله الرحمن الرحیم */

import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'block-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [MessageService],
})
export class UploadComponent {
  public uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  public onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'success',
      summary: 'با موفقیت انجام شد.',
      detail: 'بارگزاری',
      closable: true,
      life: 300000
    });
  }
}
