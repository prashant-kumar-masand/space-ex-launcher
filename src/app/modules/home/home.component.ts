import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private ngUnsubscribe: Subject<any> = new Subject();
  public rocketDetails: any;
  public reqObj: any = {
    limit: 10,
    launch_year: null,
    launch_success: null,
    land_success: null
  };

  constructor(
    private homeService: HomeService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.getSpaceExLaunches();
  }

  private getSpaceExLaunches() {
    this.homeService
      .getSpaceExLaunches(this.reqObj)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        resData => {
          this.rocketDetails = resData;
        },
        err => {
          this.commonService.errorHandler(err.error);
        }
      );
  }

  public updateList(obj) {
    console.log(obj);
    this.reqObj = { ...this.reqObj, ...obj };
    this.getSpaceExLaunches();
  }

  public getLanding(item) {
    console.log(item);

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
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
