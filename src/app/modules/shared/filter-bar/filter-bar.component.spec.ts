import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBarComponent } from './filter-bar.component';
import { DOMHelper } from 'src/testing/dom-helper';
import { DebugElement } from '@angular/core';

describe('FilterBarComponent', () => {
  let component: FilterBarComponent;
  let fixture: ComponentFixture<FilterBarComponent>;
  let domHelper: DOMHelper<FilterBarComponent>;
  let filterLabelHtmlElem: Array<DebugElement>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterBarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBarComponent);
    component = fixture.componentInstance;
    domHelper = new DOMHelper(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    filterLabelHtmlElem = domHelper.getAllTextElement('p');
  });

  describe('Check Availability of all Filter types', () => {
    it(`should contains exactly 3 filter options`, () => {
      expect(domHelper.getAllTextElement('p').length).toBe(3);
    });

    it(`should contains 1 filter option labeled as 'Launch Year'`, () => {
      expect(filterLabelHtmlElem[0].nativeElement.textContent).toBe(
        'Launch Year'
      );
    });

    it(`should contains 2 filter option labeled as 'Successful Launch'`, () => {
      expect(filterLabelHtmlElem[1].nativeElement.textContent).toBe(
        'Successful Launch'
      );
    });

    it(`should contains 3 filter option labeled as 'Successful Land'`, () => {
      expect(filterLabelHtmlElem[2].nativeElement.textContent).toBe(
        'Successful Land'
      );
    });
  });
});
