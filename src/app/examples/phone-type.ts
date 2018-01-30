export enum PhoneType {
  Mobile = 0,
  Home,
  Work
}

export namespace PhoneType {

  export function values() {

    console.log(Object.keys(PhoneType));

    return Object.keys(PhoneType).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
