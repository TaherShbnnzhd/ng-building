/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemeService } from 'src/app/core/services/theme.service';

class RegisterModel {
  userName = '';
  phoneNumber = '';
  name = '';
  family = '';
  alias = '';
  nationalId = '';
  landlinePhoneNumber = '';
  address = '';
  stateId = 0;
  cityId = 0;
  userType = 'Normal';
  roles = ['Normal'];
  organization = { id: 1, name: 'اصلی' };
}

@Component({
  selector: 'block-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public loading = false;
  public submitted = false;

  public registerForm!: FormGroup;
  public registerModel = new RegisterModel();

  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }
  get name() {
    return this.registerForm.get('name');
  }
  get family() {
    return this.registerForm.get('family');
  }
  get nationalId() {
    return this.registerForm.get('nationalId');
  }

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      phoneNumber: new FormControl(this.registerModel.phoneNumber, [
        Validators.required,
        Validators.pattern(/^(00989|\+989|09)(\d{9})$/gm),
      ]),
      name: new FormControl(this.registerModel.name, Validators.required),
      family: new FormControl(this.registerModel.family, Validators.required),
      nationalId: new FormControl(
        this.registerModel.nationalId,
        Validators.required
      ),
    });
  }

  public signup(): void {
    this.submitted = true;
  }
}
