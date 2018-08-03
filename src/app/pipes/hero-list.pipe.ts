import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroList',
  pure: false
})
export class HeroListPipe implements PipeTransform {

  transform(value: any): any {
    let keys = [];

     for (let key in value) {
       if (key) {
        keys.push(key);
       }
      } 

    return keys;
  }

}
