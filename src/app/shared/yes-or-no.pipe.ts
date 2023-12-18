import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesOrNo',
  standalone: true
})
export class YesOrNoPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Yes' : 'No';
  }

}
