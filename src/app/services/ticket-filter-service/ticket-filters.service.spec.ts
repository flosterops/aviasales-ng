import { TestBed } from '@angular/core/testing';

import { TicketFiltersService } from './ticket-filters.service';

describe('TicketFiltersService', () => {
  let service: TicketFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
