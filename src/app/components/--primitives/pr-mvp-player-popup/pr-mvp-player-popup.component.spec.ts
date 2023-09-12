import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrMvpPlayerPopupComponent } from './pr-mvp-player-popup.component';

describe('PrMvpPlayerPopupComponent', () => {
  let component: PrMvpPlayerPopupComponent;
  let fixture: ComponentFixture<PrMvpPlayerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrMvpPlayerPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrMvpPlayerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
