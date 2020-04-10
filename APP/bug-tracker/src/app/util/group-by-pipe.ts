import {Injectable, Pipe, PipeTransform} from '@angular/core';

function compare(a, b) {
  if (a.private === (b.private)) {
    return 0;
  }
  if (a.private === 'private') {
    return 1;
  }
  return -1;
}

@Pipe({
  name: 'groupBy'
})
@Injectable()
export class GroupByPipe implements PipeTransform {
  transform(collection: Array<any>, property: string): Array<any> {
    return collection.sort(compare);
  }
}
