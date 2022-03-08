import { TestBed } from '@angular/core/testing';

import { ZnamenitostiService } from './znamenitosti.service';

describe('ZnamenitostiService', () => {
  let service: ZnamenitostiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZnamenitostiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
