import { TestBed } from '@angular/core/testing';

import { StudentBookServiceService } from './student-book-service.service';

describe('StudentBookServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentBookServiceService = TestBed.get(StudentBookServiceService);
    expect(service).toBeTruthy();
  });
});
