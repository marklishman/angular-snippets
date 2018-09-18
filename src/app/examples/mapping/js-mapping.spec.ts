import { CompanyDto } from '../dto/company-dto';
import { Company } from '../model/company';
import { CompanyData } from '../model/company-data';

describe('Native JavaScript Object Mapping', () => {
  it('should map a simple object with Object.assign', () => {

    /*
        - Mapping
        - Immutable
        - Behavior

        ReadOnly
        Builder
        Object.assign
        Destructuring

     */

    const companyDto = {
      name: 'the name',
      catchPhrase: 'the catch phrase',
      bs: 'the bs'
    } as CompanyDto;

    // this looses details() method
    const companyData = {
      name: companyDto.name,
      catchPhrase: companyDto.catchPhrase,
      info: companyDto.bs
    } as Company;

    const companyObject = new Company(
      {} as CompanyData
    );

    // remove 'bs'
    const {bs, ...keep} = companyDto;

    // map 'bs' to 'info'
    const rename = {info: companyDto.bs};

    const companyParams = Object.assign(
      {},
      keep,
      rename
      ) as CompanyData;

    const company = new Company(companyParams);

    console.log(company);
    console.log(company.details);

    // company.info = 'readonly?';

  });
});
