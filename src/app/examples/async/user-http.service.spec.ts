import { UserHttpService } from './user-http.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { asyncData } from './async-utils';
import * as userFixture from './user-fixture';
import createSpyObj = jasmine.createSpyObj;

describe('UserHttpService', () => {

  let userHttpService: UserHttpService;
  let httpClient: HttpClient;

  describe('getUsers$ synchronously', () => {

    beforeEach(() => {

      httpClient = createSpyObj<HttpClient>({
        'get': of(userFixture.users)
      });

      userHttpService = new UserHttpService(httpClient);
    });

    it('should get a list of users', () => {
      userHttpService.getUsers$()
        .subscribe(
          actual => {
            expect(actual).toBe(userFixture.users);
          }
        );
    });
  });

  describe('getUsers$ asynchronously', () => {

    beforeEach(() => {
      httpClient = createSpyObj<HttpClient>({
        'get': asyncData(userFixture.users)
      });
      userHttpService = new UserHttpService(httpClient);
    });

    it('should pass or fail (non-deterministic)', () => {
      userHttpService.getUsers$()
        .subscribe(
          actual => {
            expect(actual).toBe(userFixture.users);
          }
        );
    });

    // Technically it is still non-deterministic
    // (in the unlikely event that it took longer than 5 seconds)
    it('should pass (deterministic)', (done: DoneFn) => {
      userHttpService.getUsers$()
        .subscribe(
          actual => {
            expect(actual).toBe(userFixture.users);
            done();
          }
        );
        /* even if a delay is included in asyncData, such as this
          return defer(() => Promise.resolve(data))
            .pipe(
              delay(2000)
            );
         */
    });
  });

});
