import { Component } from '@angular/core';

@Component({
  selector: 'app-array-gen',
  template: `
    <p>
      <button (click)="inc = inc + 1">+</button>
      <span *ngFor="let item of arrayOne(5); let i = index;">{{i}} </span>
    </p>
    <p>
      <span *ngFor="let i of arrayTwo(10)">{{i}} </span>
    </p>
  `
})
export class ArrayGenComponent {

  inc = 0;

  arrayOne(n: number): any[] {
    return Array(n + this.inc);
  }

  arrayTwo(n: number): number[] {
    return [...Array(n).keys()];
  }

}
