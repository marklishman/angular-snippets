import { Component } from '@angular/core';

@Component({
  selector: 'app-array-gen',
  template: `
    <p>
      <span *ngFor="let item of arrayOne(5); let i = index;">{{i}} </span>
    </p>
    <p>
      <span *ngFor="let i of arrayTwo(10)">{{i}} </span>
    </p>
  `
})
export class ArrayGenComponent {

  arrayOne(n: number): any[] {
    return Array(n);
  }

  arrayTwo(n: number) {
    return [...Array(n).keys()];
  }

}
