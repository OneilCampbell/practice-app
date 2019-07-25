import { TestBed } from '@angular/core/testing';

import { PracticeDataService } from './practice-data.service';

describe('PracticeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PracticeDataService = TestBed.get(PracticeDataService);
    expect(service).toBeTruthy();
  });
});
