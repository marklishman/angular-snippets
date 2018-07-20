import { User } from './User';

export class UserBuilder {
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _email?: string;
  private _phoneNumber?: string;
  private _age?: number;

  build(): User {
    const instance = new User(
      this._id,
      this._firstName,
      this._lastName
    );
    if (this._email) {
      instance.email = this._email;
    }
    if (this._phoneNumber) {
      instance.phoneNumber = this._phoneNumber;
    }
    if (this._age) {
      instance.age = this._age;
    }
    return instance;
  }

  id(id: number): UserBuilder {
    this._id = id;
    return this;
  }

  firstName(firstName: string): UserBuilder {
    this._firstName = firstName;
    return this;
  }

  lastName(lastName: string): UserBuilder {
    this._lastName = lastName;
    return this;
  }

  email(email: string): UserBuilder {
    this._email = email;
    return this;
  }

  phoneNumber(phoneNumber: string): UserBuilder {
    this._phoneNumber = phoneNumber;
    return this;
  }

  age(age: number): UserBuilder {
    this._age = age;
    return this;
  }
}
