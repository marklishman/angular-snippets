import { Component } from '@angular/core';
import { PhoneType } from './phone-type';

@Component({
  selector: 'app-enum-iterator',
  template: `
    <p>
      <label>
        <select name="phoneType">
          <option *ngFor="let type of PhoneType.values();">
            {{type}}
          </option>
        </select>
      </label>
    </p>
  `,
  styles: []
})
export class EnumIteratorComponent {

  PhoneType = PhoneType;

}
