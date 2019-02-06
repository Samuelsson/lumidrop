import { TestBed, inject } from '@angular/core/testing';

import { SidebarRightService } from './sidebar-right.service';

describe('SidebarRightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidebarRightService]
    });
  });

  it('should be created', inject([SidebarRightService], (service: SidebarRightService) => {
    expect(service).toBeTruthy();
  }));
});
