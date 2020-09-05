import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() {}

  errorHandler(err) {
    console.log(err);
  }
}
