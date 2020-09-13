import { Pipe, PipeTransform } from '@angular/core';
import { SpaceRocket } from 'src/app/Interfaces/SpaceRocket.interface';

@Pipe({
  name: 'successfulLanding'
})
export class SuccessfulLandingPipe implements PipeTransform {
  transform(rocketItem: SpaceRocket): boolean | null {
    if (
      rocketItem &&
      rocketItem.rocket &&
      rocketItem.rocket.first_stage &&
      rocketItem.rocket.first_stage.cores instanceof Array
    )
      if (rocketItem.rocket.first_stage.cores[0]) {
        return rocketItem.rocket.first_stage.cores[0].land_success;
      } else {
        return null;
      }
  }
}
