import { TestBed } from '@angular/core/testing';

import { AddDataServiceService } from './add-data-service.service';

describe('AddDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddDataServiceService = TestBed.get(AddDataServiceService);
    expect(service).toBeTruthy();
  });
});
