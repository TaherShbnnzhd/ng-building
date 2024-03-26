/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component } from '@angular/core';

@Component({
  selector: 'block-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  public displayModal!: boolean;

  public displayBasic!: boolean;

  public displayBasic2!: boolean;

  public displayMaximizable!: boolean;

  public displayResponsive!: boolean;

  public displayPosition!: boolean;

  public position!:
    | 'center'
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'topleft'
    | 'topright'
    | 'bottomleft'
    | 'bottomright';

  public showModalDialog(): void {
    this.displayModal = true;
  }

  public showBasicDialog(): void {
    this.displayBasic = true;
  }

  public showBasicDialog2(): void {
    this.displayBasic2 = true;
  }

  public showMaximizableDialog(): void {
    this.displayMaximizable = true;
  }

  public showPositionDialog(
    position:
      | 'center'
      | 'left'
      | 'right'
      | 'top'
      | 'bottom'
      | 'topleft'
      | 'topright'
      | 'bottomleft'
      | 'bottomright'
  ): void {
    this.position = position;
    this.displayPosition = true;
  }

  public showResponsiveDialog(): void {
    this.displayResponsive = true;
  }
}
