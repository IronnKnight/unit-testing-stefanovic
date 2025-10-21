# Task 1: Validation method with external request

Let's write some basic unit tests! In this task, you have the function `validateUserName` in the file `task1/index.ts`, which you need to cover. The method `validateUserName` validates a user name according to the rules and returns a promise with a boolean value, which is `true` if the user name is valid. The validation rules are next:

- a user name should be at least 3 characters long
- a user name should contain only alphanumeric symbols (no spaces either)
- a user name should not start with a number
- a user name should be unique, and the method makes sure by calling `fetchIsUserNameAvailable` method, which returns a boolean value whether a user name is available for registering (it means it was not used yet)
- if a user name is not valid (length, symbols, or starts with a number) the method doesn't make any requests, just returns `false`
- if `fetchIsUserNameAvailable` fails (throws an exception), the method returns false as well.

Think about requirements before starting to write unit tests in this task - in the next one, you can try writing tests even before the code! Also consider mocking `fetchIsUserNameAvailable` and testing different scenarios (the name is available, not available and a request has failed).

Useful links:

- [Calling jest.mock() with the module factory parameter](https://jestjs.io/docs/es6-class-mocks#calling-jestmock-with-the-module-factory-parameter)
- [jest.mock](https://jestjs.io/docs/upgrading-to-jest29#jest-mock)
- [jest.mocked](https://jestjs.io/docs/mock-function-api#jestmockedsource-options)

---

[Back to the main page](../README.md)
