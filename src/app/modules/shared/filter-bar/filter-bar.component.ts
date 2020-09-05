import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {
  @Input()
  public launchYear: number | string;
  @Input()
  public launchSuccess: string;
  @Input()
  public landSuccess: string;
  @Output() public onFilterOptionChanges: EventEmitter<any> = new EventEmitter<
    any
  >();

  public yearList = [
    { name: '2006', value: 2006 },
    { name: '2007', value: 2007 },
    { name: '2008', value: 2008 },
    { name: '2009', value: 2009 },
    { name: '2010', value: 2010 },
    { name: '2011', value: 2011 },
    { name: '2012', value: 2012 },
    { name: '2013', value: 2013 },
    { name: '2014', value: 2014 },
    { name: '2015', value: 2015 },
    { name: '2016', value: 2016 },
    { name: '2018', value: 2018 },
    { name: '2019', value: 2019 },
    { name: '2020', value: 2020 }
  ];
  public launchList = [
    { name: 'true', value: 'true' },
    { name: 'false', value: 'false' }
  ];
  public landList = [
    { name: 'true', value: 'true' },
    { name: 'false', value: 'false' }
  ];
  constructor() {}

  ngOnInit(): void {}

  public updateFilterOption(obj) {
    this.onFilterOptionChanges.emit(obj);
  }
}
