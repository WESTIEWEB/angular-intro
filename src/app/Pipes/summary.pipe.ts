import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any, args: number): unknown {
    if( value.length > 50 ) return value.substring(0, args);

    return `${value} . . .`;
  }

}
