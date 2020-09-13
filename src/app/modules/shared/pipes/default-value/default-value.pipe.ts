import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultValue'
})
export class DefaultValuePipe implements PipeTransform {
  transform(fieldValue: boolean | null): boolean | string {
    if (fieldValue == true || fieldValue == false) return fieldValue;
    else return 'N/A';
  }
}
