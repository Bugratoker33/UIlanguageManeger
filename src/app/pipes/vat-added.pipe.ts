import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded',
  standalone: true
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, age:number): number {

    return 2024 -value;
  }

}
