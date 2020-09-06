import { TestBed } from '@angular/core/testing';
import { HomeService } from './home.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeService', () => {
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
