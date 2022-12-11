/* بسم الله الرحمن الرحیم */

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'block-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss']
})
export class SimpleButtonComponent implements OnInit {

  @Input() title!: string | null;

  constructor() { }

  ngOnInit(): void {
  }
}
