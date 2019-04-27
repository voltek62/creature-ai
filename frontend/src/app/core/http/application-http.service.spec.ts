import { TestBed } from '@angular/core/testing';

import { ApplicationHttpService } from './application-http.service';

describe('ApplicationHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationHttpService = TestBed.get(ApplicationHttpService);
    expect(service).toBeTruthy();
  });
});
