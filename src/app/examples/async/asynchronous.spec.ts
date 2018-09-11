import { of, Subject } from 'rxjs';

class TestClass {
  subject$ = new Subject<string>();
  emit$(): void {
    this.subject$.next('some value');
  };
}

describe('Jasmine done', () => {

  let t: TestClass;

  beforeEach(() => {
    t = new TestClass();
  });

  it('passes (false positive!)', () => {
    t.subject$.subscribe(
      data => expect(data).toBe('some value')
    );
    t.emit$();
  });

  it('still passes! The expectation is never called', () => {
    t.subject$.subscribe(
      data => expect(data).toBe('some value')
    );
    // t.emit$(); <----- emit$ is not called
  });

  it('Jasmine provides the done() function for asynchronous support', (done: DoneFn) => {
    t.subject$.subscribe(
      data => {
        expect(data).toBe('some value');
        done();
      }
    );
    t.emit$();
  });

  it('this time it fails after 5 seconds', (done: DoneFn) => {
    t.subject$.subscribe(
      data => {
        expect(data).toBe('some value');
        done();
      }
    );
    // t.emit$();
  });

});
