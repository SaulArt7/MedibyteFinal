import { TestBed } from '@angular/core/testing';

import { AdminProductosGuard } from './admin-productos.guard';

describe('AdminProductosGuard', () => {
  let guard: AdminProductosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminProductosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
