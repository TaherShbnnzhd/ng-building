/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDemoComponent } from './calendar-demo.component';

describe('CalendarDemoComponent', () => {
  let component: CalendarDemoComponent;
  let fixture: ComponentFixture<CalendarDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
