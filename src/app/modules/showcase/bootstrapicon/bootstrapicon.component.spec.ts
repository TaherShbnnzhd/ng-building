/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapiconComponent } from './bootstrapicon.component';

describe('BootstrapiconComponent', () => {
  let component: BootstrapiconComponent;
  let fixture: ComponentFixture<BootstrapiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BootstrapiconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BootstrapiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
