import { Component } from '@angular/core';
import { PhoneType } from './phone-type';

@Component({
  selector: 'app-enum-iterator',
  template: `
    <p>
      <select name="phoneType">
        <option *ngFor="let type of PhoneType.values();">
          {{type}}
        </option>
      </select>
    </p>
  `
})
export class EnumIteratorComponent {

  PhoneType = PhoneType;

}
