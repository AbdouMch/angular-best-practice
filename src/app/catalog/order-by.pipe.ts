import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  // pure: false,// this can degrade performance
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], field: string): any[]
  {
    if (!Array.isArray(array))
      return array;
    console.log("hello");
    return array.sort((x,y) => x[field] > y[field] ? 1 : x[field] < y[field] ? -1 : 0);
  }

}
