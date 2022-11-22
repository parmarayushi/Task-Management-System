import { TestBed } from '@angular/core/testing';

import { ProjectViewPresenterService } from './project-view-presenter.service';

describe('ProjectViewPresenterService', () => {
  let service: ProjectViewPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectViewPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
