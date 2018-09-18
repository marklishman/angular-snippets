import { CompanyDto } from '../dto/company-dto';
import { Company, CompanyData } from '../model/company';

describe('Native JavaScript Object Mapping', () => {

  /*
      - Mapping
      - Immutability
      - Behavior

      ReadOnly
      Builder
      Object.assign
      Destructuring

      Notes
      -----
      CompanyData interface duplicates properties
      CompanyData abstract class splits data and behavior
      Properties on Company - hack or feature?

   */

  const companyDto = {
    name: 'the name',
    catchPhrase: 'the catch phrase',
    bs: 'the bs'
  } as CompanyDto;

  it('should lose the function', () => {

    // this looses details() method
    const companyDataOnly = {
      name: companyDto.name,
      catchPhrase: companyDto.catchPhrase,
      info: companyDto.bs
    } as Company;

    expect(companyDataOnly.details).toBeUndefined();
  });

  it('should allow parameters to be specified individually', () => {
    const company = new Company(
      {
        name: companyDto.name,
        catchPhrase: companyDto.catchPhrase,
        info: companyDto.bs
      }
    );

    expect(company.details).toBe('Company: the name, the catch phrase, the bs');
  });

  it('should allow mapping', () => {

    // remove 'bs' and 'extra'
    const {bs, extra, ...keep} = companyDto;

    // map 'bs' to 'info'
    const rename = {info: companyDto.bs};

    const companyData = Object.assign({} as CompanyData, keep, rename);

    const company = new Company(companyData);

    expect(company.details).toBe('Company: the name, the catch phrase, the bs');


    // company.info = 'readonly?';

  });
});
