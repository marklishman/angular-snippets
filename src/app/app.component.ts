import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="dev">
      <a routerLink="/array-gen" routerLinkActive="disabled">Array Gen</a> |
      <a routerLink="/enum-iter" routerLinkActive="disabled">Enum Iteration</a>
    </div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  dev = !environment.production;
}
