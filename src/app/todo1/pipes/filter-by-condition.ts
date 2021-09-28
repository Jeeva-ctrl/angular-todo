import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCondition',
})
export class FilterByCondition implements PipeTransform {
  transform(
    dataArray: Array<any> | null,
    args?: { property: string; value: any }
  ): any {
    if (!args) {
      return dataArray;
    } else {
      return (
        dataArray &&
        dataArray.filter((item: any) => {
          return item[args.property] === args.value;
        })
      );
    }
  }
}
