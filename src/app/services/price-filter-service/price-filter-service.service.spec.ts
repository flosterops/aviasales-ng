import { TestBed } from '@angular/core/testing';

import { PriceFilterServiceService } from './price-filter-service.service';

describe('PriceFilterServiceService', () => {
  let service: PriceFilterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceFilterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
