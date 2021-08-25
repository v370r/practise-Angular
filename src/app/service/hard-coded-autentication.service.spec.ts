import { TestBed } from '@angular/core/testing';

import { HardCodedAutenticationService } from './hard-coded-autentication.service';

describe('HardCodedAutenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardCodedAutenticationService = TestBed.get(HardCodedAutenticationService);
    expect(service).toBeTruthy();
  });
});
