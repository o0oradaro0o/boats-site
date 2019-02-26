import { TestBed } from '@angular/core/testing';

import { DataGrabberService } from './data-grabber.service';

describe('DataGrabberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataGrabberService = TestBed.get(DataGrabberService);
    expect(service).toBeTruthy();
  });
});
