import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomeService } from './services/home.service';
import { CommonService } from 'src/app/core/services/common.service';
import { CanonicalService } from 'src/app/core/services/canonical.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let homeServiceMock: any;
  let commonServiceMock: any;
  let canonicalServiceMock: any;

  beforeEach(async(() => {
    homeServiceMock = jasmine.createSpyObj('HomeService', [
      'getSpaceExLaunches'
    ]);
    homeServiceMock.getSpaceExLaunches.and.returnValue(of([]));
    commonServiceMock = jasmine.createSpyObj('CommonService', ['errorHandler']);
    canonicalServiceMock = jasmine.createSpyObj('CanonicalService', [
      'setCanonicalURL'
    ]);
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        {
          provide: HomeService,
          useValue: homeServiceMock
        },
        {
          provide: CommonService,
          useValue: commonServiceMock
        },
        {
          provide: CanonicalService,
          useValue: canonicalServiceMock
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call CanonicalService setCanonicalURL atleast one times', () => {
    fixture.detectChanges();
    expect(canonicalServiceMock.setCanonicalURL).toHaveBeenCalledTimes(1);
  });
});
