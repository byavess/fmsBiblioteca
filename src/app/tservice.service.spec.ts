import { TestBed } from '@angular/core/testing';

import { TserviceService } from './tservice.service';

describe('TserviceService', () => {
  let service: TserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
