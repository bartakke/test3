import { TestBed, async, inject } from '@angular/core/testing';

import { AuthStudLoginGuard } from './auth-stud-login.guard';

describe('AuthStudLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthStudLoginGuard]
    });
  });

  it('should ...', inject([AuthStudLoginGuard], (guard: AuthStudLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
