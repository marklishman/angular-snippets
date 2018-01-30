import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-attribute',
  template: `
    <section
      #prod
      id="product"
      [attr.data-catalog-id]="catId"
      data-category="component"
      [attr.data-color]="color">
      Some Cool Product
    </section>

    <p>
      <button #btn (click)="order(prod.dataset.catalogId, prod.dataset.color)">
        Order this {{prod.getAttribute('data-category')}}
      </button>
    </p>

    <p>
      {{confirmation}}
    </p>
  `
})
export class DataAttributeComponent  {
  catId = 'ACV126673';
  color = 'blue';
  confirmation: string;

  order(catalogId: string, color: string) {
    this.confirmation = `Ordered product ${catalogId} in ${color}.`;
  }
}
