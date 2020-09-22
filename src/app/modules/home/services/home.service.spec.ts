import { TestBed } from '@angular/core/testing';
import { HomeService } from './home.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { SpaceRocket } from 'src/app/Interfaces/SpaceRocket.interface';
import { spaceRockets } from '../../../../testing/response-data/space-rocket.json';

describe('HomeService', () => {
  let service: HomeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeService]
    });
    service = TestBed.inject(HomeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getSpaceExLaunches and return an Observable<SpaceRocket[]>', () => {
    const rockets: SpaceRocket[] = spaceRockets;

    service.getSpaceExLaunches({ limit: 2 }).subscribe(res => {
      expect(res.length).toBe(2);
      expect(res).toEqual(rockets);
    });

    let results = { param: 'limit', value: '2' };
    const req = httpMock.expectOne(
      `${service.apiBaseUrl}?${results.param}=${results.value}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(rockets);
  });

  it('should through an error when call getSpaceExLaunches without query parameters', () => {
    service.getSpaceExLaunches({ limit: 2 }).subscribe(
      res => {},
      err => {
        expect(err.statusText).toEqual('Query params not provided');
      }
    );

    let results = { param: 'limit', value: '2' };
    const req = httpMock.expectOne(
      `${service.apiBaseUrl}?${results.param}=${results.value}`
    );
    req.error(new ErrorEvent('Query error'), {
      status: 402,
      statusText: 'Query params not provided'
    });
  });
});
