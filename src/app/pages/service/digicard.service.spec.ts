import { TestBed } from '@angular/core/testing';

import { DigicardService } from './digicard.service';

describe('DigicardService', () => {
  let service: DigicardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigicardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
