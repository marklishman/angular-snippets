import { Subject } from 'rxjs';

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

  it('passes', () => {
    t.subject$.subscribe(
      data => expect(data).toBe('some value')
    );
    t.emit$();
  });

  it('still passes! It is a false positive - the expectation is never called', () => {
    t.subject$.subscribe(
      data => expect(data).toBe('some value')
    );
    // t.emit$();
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

  xit('this time it fails (test ignored)', (done: DoneFn) => {
    t.subject$.subscribe(
      data => {
        expect(data).toBe('some value');
        done();
      }
    );
    // t.emit$();
  });

});
