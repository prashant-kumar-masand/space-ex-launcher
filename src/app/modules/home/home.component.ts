import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';
import { CommonService } from 'src/app/core/services/common.service';
import { CanonicalService } from 'src/app/core/services/canonical.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private ngUnsubscribe: Subject<any> = new Subject();
  public rocketDetails: any;
  public reqObj: any = {
    limit: 100,
    launch_year: null,
    launch_success: null,
    land_success: null
  };
  public isLoading: boolean = false;
  constructor(
    private homeService: HomeService,
    private commonService: CommonService,
    private canonicalService: CanonicalService
  ) {}

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.getSpaceExLaunches();
  }

  private getSpaceExLaunches() {
    this.isLoading = true;
    this.homeService
      .getSpaceExLaunches(this.reqObj)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        resData => {
          this.isLoading = false;
          this.rocketDetails = resData;
        },
        err => {
          this.isLoading = false;
          this.commonService.errorHandler(err.error);
        }
      );
  }

  public updateList(obj) {
    this.reqObj = { ...this.reqObj, ...obj };
    this.getSpaceExLaunches();
  }

  public getLanding(item) {
    if (
      item &&
      item.rocket &&
      item.rocket.first_stage &&
      item.rocket.first_stage.cores instanceof Array
    )
      if (item.rocket.first_stage.cores[0]) {
        return item.rocket.first_stage.cores[0].land_success;
      } else {
        return null;
      }
  }

  /**
   * @function ngOnDestroy
   * @description unsubscribed from observables and hide the loader
   */
  ngOnDestroy() {
    this.isLoading = false;
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
