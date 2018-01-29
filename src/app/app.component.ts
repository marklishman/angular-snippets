import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <a routerLink="/array-gen" routerLinkActive="disabled">Array Gen</a> |
      <a routerLink="/enum-iter" routerLinkActive="disabled">Enum Iterator</a> |
    </div>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'app';
}
