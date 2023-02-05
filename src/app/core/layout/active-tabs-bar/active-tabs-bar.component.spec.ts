/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTabsBarComponent } from './active-tabs-bar.component';

describe('TabBarComponent', () => {
  let component: ActiveTabsBarComponent;
  let fixture: ComponentFixture<ActiveTabsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActiveTabsBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActiveTabsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
