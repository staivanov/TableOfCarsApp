import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { carDetailGuard } from './car-detail.guard';

describe('carDetailGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => carDetailGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
