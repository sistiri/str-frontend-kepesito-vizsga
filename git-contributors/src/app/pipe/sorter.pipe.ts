import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any[] | null, key: string ): any[] | null {

    if (!Array.isArray(value) || !key ) {
      return value
    }

    return value.sort( (a,b) => {
      if (typeof a[key] === 'number' && typeof  b[key] === 'number') {
        return b[key] - a[key];
      } else {
        return String(b[key]).toLowerCase().localeCompare(String(a[key]).toLowerCase());
      }
    });
  }
}
