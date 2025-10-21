# Task: Unit Testing with Manual Stubs (No Mocks)

**This is an intermediate-level task.**

In this task, you’ll write a unit test for a class that depends on another class. The twist: you are **not allowed to use mocks** like `jest.fn()` or spying libraries. Instead, you must use a **manual stub**.

We want to ensure that you understand how to manually isolate dependencies and control their behavior.

---

## Scenario

You are given the following code in `index.ts`:

```ts
interface User {
  id: string;
  firstName: string;
  lastName: string;
}

export class ApiService {
  async fetchUser(userId: string): Promise<User> {
    throw new Error("Not implemented");
  }
}

export class UserService {
  constructor(private apiService: ApiService) {}

  async getUserName(userId: string): Promise<string> {
    const user = await this.apiService.fetchUser(userId);
    return `${user.firstName} ${user.lastName}`;
  }
}
```

# Instructions
1) Write a unit test for the ``getUserName()`` method.
2) Use a manual ``stub`` for ``ApiService``. Do not use any ``mocking`` functions.
3) The stub should return a fake user object with a fixed firstName and lastName.
4) Assert that ``getUserName()`` returns the full name as expected.
5) You can use ``console.assert()`` or a test framework for the assertion, but the stub must be manual.

# Goals
1) Understand how to isolate a dependency using a stub
2) Write clean, readable unit tests without relying on mocking libraries
3) Practice testing async code
4) Gain confidence in working with injected services
