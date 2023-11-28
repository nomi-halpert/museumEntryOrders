import { TestBed } from '@angular/core/testing';

import { TicketsAvailabilityService } from './ticketsAvailability.service';

describe('EntrancesService', () => {
  let service: TicketsAvailabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketsAvailabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
