import { Component } from '@angular/core';

@Component({
  selector: 'app-array-gen',
  template: `
    <p>
      <span *ngFor="let item of arrayOne(8); let i = index;">{{i}} </span>
    </p>
    <p>
      <span *ngFor="let i of arrayTwo(12)">{{i}} </span>
    </p>
    <p>
      <span *ngFor="let i of arrayThree(5, 100)">{{i}} </span>
    </p>
  `
})
export class ArrayGenComponent {

  arrayOne(n: number): any[] {
    return Array(n);
  }

  arrayTwo(n: number): number[] {
    return [...Array(n).keys()];
  }

  arrayThree(n: number, startFrom: number): number[] {
    return [...Array(n).keys()].map(i => i + startFrom);
  }

}
