import { TestBed } from '@angular/core/testing';

import { AppToastrService } from './toaster.service';

describe('ToasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppToastrService = TestBed.get(AppToastrService);
    expect(service).toBeTruthy();
  });
});
