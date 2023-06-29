import { TestBed } from '@angular/core/testing';

import { PfdServicesService } from './pfd-services.service';

describe('PfdServicesService', () => {
  let service: PfdServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PfdServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
