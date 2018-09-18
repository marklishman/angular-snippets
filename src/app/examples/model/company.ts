
// export class CompanyData {
//   readonly name: string;
//   readonly catchPhrase: string;
//   readonly info: string;
//
//   constructor(params: CompanyData) {
//     Object.assign(this, params);
//   }
// }

export interface CompanyData {
  readonly name: string;
  readonly catchPhrase: string;
  readonly info: string;
}

// tslint:disable-next-line:no-empty-interface
export interface Company extends CompanyData {}

// merges with..

export class Company {

  constructor(data: CompanyData) {
    return Object.assign(this, data);
  }

  get details(): string {
    return `Company: ${this.name}, ${this.catchPhrase}, ${this.info}`;
  }

}
