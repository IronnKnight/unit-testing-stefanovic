# Task 3: Mocking dates

Let's make the task more difficult! We are going to continue writing more sophisticated unit tests with some mocking.
You will need to write unit tests for the future `getUtcStringDate` method. The method takes a date object as a parameter and returns a string with a UTC date and time in [ISO8601 format](https://en.wikipedia.org/wiki/ISO_8601), as the example: `2007-01-31T23:15:00Z`.

Please pay you attention to the next scenarios:

- without arguments function uses current date (you should mock system time):
```ts
const formattedString = getUtcStringDate(); // returns current date
```
- system should accept a date from any time zone and return string in UTC. We need to check that the functionality works well with different time zones, you can use `timezoned-date` for it.

## Recommendations

Mocking the dates can be pretty tricky in Javascript. Wanna know why? Check the article ["Testing dates and timezones using Jest"](https://bengry.medium.com/testing-dates-and-timezones-using-jest-10a6a6ecf375).

In simpler cases, when you don't need to mock time zone, we could write something like this:

```ts
import timezonedDate from 'timezoned-date';

const originalDate = globalThis.Date;

afterEach(() => {
  globalThis.Date = originalDate;
});

it('testing some date stuff', () => {
  globalThis.Date = timezonedDate.makeConstructor(0);
  // call our function and make assertions...
});
```

Or even simpler, we could use fake timers, you can read about them in ["Fake system time in Jest tests"](https://rare.medium.com/fake-system-time-in-jest-tests-86417b7ab4e3) article.

Comprehensive mocking of dates requires understanding advanced techniques, so we have already created a testing utility to simplify the task. Understanding what happens there is pretty challenging, huh? Use the `mockDate.set()` method to configure the current system date and time and write your date tests!

As in previous tasks, you can try to implement the method, for example, with `dayjs`, but in general, it is facultative. Your goal here is to practice "the test way of thinking."

Do not pay attention that your tests are failing, with TDD it is the first expected step.

Geronimo!

## Links

- [jest.setSystemTime](https://jestjs.io/docs/jest-object#jestsetsystemtimenow-number--date)
- [jest.useFakeTimers](https://jestjs.io/docs/jest-object#jestusefaketimersfaketimersconfig)
- [timezoned-date](https://www.npmjs.com/package/timezoned-date)
- [Using `globalThis`](https://jestjs.io/blog/2022/04/25/jest-28#using-globalthis)
- [jest.isolateModules](https://jestjs.io/docs/jest-object#jestisolatemodulesfn)

---

[Back to the main page](../README.md)
