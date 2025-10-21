# Task 2: Quantity Validator

The unit tests practice is the most useful when you write tests in advance or at least in parallel with the code. This way you can be sure, that the code is testable, you can check how reasonable your module's functionality and if necessary start rewriting the code right away as only you feel some concerns.

At the same time, for novice it may require some additional effort to write tests without having the code. In this task we will try to work in the test-driven development approach. Though the temptation to write the code first can be high, we strongly recommend to start with unit tests. At some point you can find that such a practice opens quality gates and allows you to write very simple, understandable and reliable code. Remember: it's okay that your tests are failing at this moment! Please read the requirements below and notes about the task, and write unit tests only.

## Context

We have an e-commerce application (online shop) where on the product page we have a quantity field beside the "add to cart" button. Users can select a quantity and press the "add to cart" button. There are some validation rules though: if quantity is larger than or equal to `threshold`, its value must be divisible by `packageSize`. `threshold` is a quantity, from which product can be delivered only in packages, and `packageSize` is an amount of items in the package. Thus, if a user wants a lot of items delivered, the shop will deliver them only in boxes.

Values `threshold` and `packageSize` in the future we will get from a backend service. We will need to create a class QuantityValidator with a constructor which takes two arguments, the first is `threshold` and the second is `packageSize`. This class should have one public method, which is called `validate()` and takes a quantity from user input as an argument (the type is number).

This method should return an object which consists of two fields: `isValid` and `error`. The field `isValid` contains a boolean value if the amount is correct. The field `error` should be null for valid values, and return the message "Quantity should be divisible by {N}". We can say that the class `QuantityValidator` implements the interface `IQuantityValidator`:

```ts
interface IQuantityValidator {
  validate(quantity: number): { isValid: boolean; error: string | null };
}
```

## Your task

Create unit tests without writing the code. Consider covering all the possible use cases:

- the quantity exceeds the threshold and does not exceed
- the quantity is divisible by package size and is not divisible
- the constructor should throw an error if some values are invalid (`threshold` cannot be a negative value, `packageSize` should be greater than zero)
- the method should return false if quantity is less than zero or zero

Even if you have doubts your tests will work, or if you struggle, try writing tests anyway. Mastery requires effort! Just refer to examples that you can find on the Internet. Remember: mistakes are the ground for growth! If you want to get completely confident, that some test is working, you can try writing the code.

Good luck!

## Links

- [`.toThrow(error?)`](https://jestjs.io/docs/expect#tothrowerror)


---

[Back to the main page](../README.md)
