import { TestBed } from '@angular/core/testing';

import { LoremPicsumApiService } from './lorem-picsum-api.service';

describe('LoremPicsumApiService', () => {
  let service: LoremPicsumApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoremPicsumApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
