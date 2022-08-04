import { TestBed } from '@angular/core/testing';

import { ContactsListService } from './contacts-list.service';

describe('ContactsListService', () => {
  let service: ContactsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
