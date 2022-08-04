import { TestBed } from '@angular/core/testing';

import { LoremPicsumListService } from './lorem-picsum-list.service';

describe('LoremPicsumListService', () => {
  let service: LoremPicsumListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoremPicsumListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
