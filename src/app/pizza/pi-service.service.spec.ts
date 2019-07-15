import { TestBed } from '@angular/core/testing';

import { piService } from './pi-service.service';

describe('PiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: piService = TestBed.get(piService);
    expect(service).toBeTruthy();
  });
});
