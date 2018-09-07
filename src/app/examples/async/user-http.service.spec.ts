import { UserHttpService } from './user-http.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import createSpyObj = jasmine.createSpyObj;

import { asyncData } from './async-utils';
import * as userFixture from './user-fixture';

describe('UserHttpService', () => {

  let userHttpService: UserHttpService;
  let httpClient: HttpClient;

  describe('getUsers$', () => {

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

      /* even with this
        return defer(() => Promise.resolve(data))
          .pipe(
            delay(3000)
          );
       */

      userHttpService = new UserHttpService(httpClient);
    });

    it('should be non-deterministic', () => {
      userHttpService.getUsers$()
        .subscribe(
          actual => {
            expect(actual).toBe(userFixture.users);
          }
        );
    });

    // Technically it is still non-deterministic
    // (in the unlikely event that it took longer than 5 seconds)
    it('should be deterministic', (done: DoneFn) => {
      userHttpService.getUsers$()
        .subscribe(
          actual => {
            expect(actual).toBe(userFixture.users);
            done();
          }
        );
        /* even including a delay in asyncData such as this
          return defer(() => Promise.resolve(data))
            .pipe(
              delay(3000)
            );
         */
    });
  });

});
