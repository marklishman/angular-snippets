import { UserBuilder } from './user-builder';

export class User {

  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email?: string,
    public phoneNumber?: string,
    public age?: number
  ) {}

  static builder(): UserBuilder {
    return new UserBuilder();
  }
}
