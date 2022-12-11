/* بسم الله الرحمن الرحیم */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';

import { IUser } from '@shared/models/response.model';

@Component({
  selector: 'block-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
}
