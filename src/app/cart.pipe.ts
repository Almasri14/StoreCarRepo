import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cart'
})
export class CartPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }
}
