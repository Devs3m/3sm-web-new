import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VatService } from './vat.service';

describe('VatService', () => {
  let service: VatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(VatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
