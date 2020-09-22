import { TestBed } from '@angular/core/testing';
import { CanonicalService } from './canonical.service';

describe('CanonicalService', () => {
  let service: CanonicalService;
  let canonicalMockService: any;

  beforeEach(() => {
    canonicalMockService = jasmine.createSpyObj('CanonicalService', [
      'setCanonicalURL'
    ]);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CanonicalService,
          useValue: canonicalMockService
        }
      ]
    });
    service = TestBed.inject(CanonicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should have 'setCanonicalURL' method`, () => {
    expect(service.setCanonicalURL).toBeDefined();
  });

  it(`should call 'setCanonicalURL' method one time`, () => {
    service.setCanonicalURL();
    expect(service.setCanonicalURL).toHaveBeenCalledTimes(1);
  });

  it(`'setCanonicalURL' should not return any value`, () => {
    service.setCanonicalURL();
    expect(service.setCanonicalURL()).toBe(undefined);
  });
});
