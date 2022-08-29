import { TestBed } from '@angular/core/testing';

import { ContactResolver } from './contact.resolver';

describe('ContactResolver', () => {
  let service: ContactResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
