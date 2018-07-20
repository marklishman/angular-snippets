import { User } from './User';

describe('UserBuilder', () => {

  it('should build with the mandatory values', () => {
    const user = User
      .builder()
      .id(123)
      .firstName('Bob')
      .lastName('Smith')
      .build();

    const expected = new User(
      123,
      'Bob',
      'Smith'
    );

    expect(user).toEqual(expected);
  });

  it('should build with all the values', () => {
    const user = User
      .builder()
      .id(123)
      .firstName('Bob')
      .lastName('Smith')
      .email('name@email.com')
      .phoneNumber('07123456')
      .age(29)
      .build();

    const expected = new User(
      123,
      'Bob',
      'Smith',
      'name@email.com',
      '07123456',
      29
    );

    expect(user).toEqual(expected);
  });

});
