import { TestBed } from '@angular/core/testing';

import { ChartResolver } from './chart.resolver';

describe('ChartResolver', () => {
  let resolver: ChartResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ChartResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
