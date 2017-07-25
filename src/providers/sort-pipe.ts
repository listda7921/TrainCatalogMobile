import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'orderBy', pure: false })

export class SortPipe {

  transform(array: Array<Object>, args: string): Array<Object> {

    console.log("calling pipe");

    if (array == null) {
      return null;
    }

    array.sort((a: any, b: any) => {
      if (a.data.likes[args] < b.data.likes[args]) {
        //a is the Object and args is the orderBy condition (data.likes.count in this case)
        return -1;
      } else if (a.data.likes[args] > b.data.likes[args]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
