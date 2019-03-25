import { TestBed } from '@angular/core/testing';

import { ShowUsersService } from './show-users.service';

describe('ShowUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowUsersService = TestBed.get(ShowUsersService);
    expect(service).toBeTruthy();
  });
});
