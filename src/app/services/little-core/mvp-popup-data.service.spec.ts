import { TestBed } from '@angular/core/testing';

import { MvpPopupDataService } from './mvp-popup-data.service';

describe('MvpPopupDataService', () => {
  let service: MvpPopupDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvpPopupDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
