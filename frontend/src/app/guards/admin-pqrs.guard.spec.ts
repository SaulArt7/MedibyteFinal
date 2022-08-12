import { TestBed } from '@angular/core/testing';

import { AdminPQRSGuard } from './admin-pqrs.guard';

describe('AdminPQRSGuard', () => {
  let guard: AdminPQRSGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminPQRSGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
