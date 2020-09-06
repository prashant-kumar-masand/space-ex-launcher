import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, retry } from 'rxjs/internal/operators';
import { throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiBaseUrl: string = '';

  constructor(private http: HttpClient) {
    this.apiBaseUrl = `${environment.apiBaseUrl}/${environment.apiVersion}/${environment.apiBasePath}`;
  }

  /**
   * @function getSpaceExLaunches
   * @description used to get list of Space ex launches.
   * @param {object} query - It consist of filter object.
   */
  getSpaceExLaunches(queryData) {
    const options = {
      params: this.buidlQueryParams(queryData)
    };
    return this.http.get<any>(this.apiBaseUrl, options).pipe(
      retry(0),
      map(res => {
        return res;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  /**
   * @function buidlQueryParams
   * @description used to build query parameters.
   * @param {object} query - It consist of filter object.
   */
  buidlQueryParams(query) {
    let params = new HttpParams();
    if (query.launch_success)
      params = params.append('launch_success', query.launch_success);
    if (query.land_success)
      params = params.append('land_success', query.land_success);
    if (query.limit) params = params.append('limit', query.limit);
    if (query.launch_year)
      params = params.append('launch_year', query.launch_year);
    return params;
  }
}
