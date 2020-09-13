import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCardComponent } from './program-card.component';
import { DOMHelper } from 'src/testing/dom-helper';
import { DefaultValuePipe } from '../pipes/default-value/default-value.pipe';

describe('ProgramCardComponent', () => {
  let component: ProgramCardComponent;
  let fixture: ComponentFixture<ProgramCardComponent>;
  let domHelper: DOMHelper<ProgramCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramCardComponent, DefaultValuePipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramCardComponent);
    component = fixture.componentInstance;
    domHelper = new DOMHelper(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should contains required html elements', () => {
    it(`should contains 'article tag'`, () => {
      expect(domHelper.isElement('article')).toBeTrue();
    });
    it(`should contains 'figure tag'`, () => {
      expect(domHelper.isElement('figure')).toBeTrue();
    });
    it(`should contains 'un-ordered list tag'`, () => {
      expect(domHelper.isElement('ul')).toBeTrue();
    });
    it(`should contains 'table tag'`, () => {
      expect(domHelper.isElement('table')).toBeTrue();
    });
  });
});
