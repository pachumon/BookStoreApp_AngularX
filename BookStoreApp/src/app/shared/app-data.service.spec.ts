import { TestBed } from '@angular/core/testing';
import { AppDataService } from './app-data.service';

describe('AddDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppDataService = TestBed.get(AppDataService);
    expect(service).toBeTruthy();
  });
});
