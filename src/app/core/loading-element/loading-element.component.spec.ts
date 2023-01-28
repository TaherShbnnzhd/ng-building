/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingElementComponent } from './loading-element.component';

describe('LoadingElementComponent', () => {
  let component: LoadingElementComponent;
  let fixture: ComponentFixture<LoadingElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
