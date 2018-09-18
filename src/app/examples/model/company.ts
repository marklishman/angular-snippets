import { CompanyData } from './company-data';

export class Company extends CompanyData {

  constructor(params: CompanyData) {
    super();
    Object.assign(this, params);
  }

  get details(): string {
    return `Company: ${this.name}, ${this.catchPhrase}, ${this.info}`;
  }

}
