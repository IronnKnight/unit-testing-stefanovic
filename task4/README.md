# Task 4: Parametrized tests

**This is an advanced task, not mandatory for accomplishing the course.**

Sometimes, we want to validate the same logic or functionality with multiple input data sets. For example, some functions, where there are no "if-else" conditions, nothing to mock, but many and many variants to cover... Maintaining complex regular expressions is a tough job; sometimes, if you change something, something else can break, and unit tests become extremely helpful in this case.

Consider the next regular expression, the real example that we have taken from https://regexr.com:

```ts
/(([\+\-\/\*\^]?)([(]*(([(]?(([+-]?\d+[.,]?(\d+)?)([e][+-]\d+)?)[)]?)|([(]?value[)]?))[)]*)?(([(]*([(]?(([+-]?\d+[.,]?(\d+)?)([e][+-]\d+)?)[)]?)|([(]?value[)]?))[)]*)?([\+\-\/\*\^])([(]*(([(]?(([+-]?\d+[.,]?(\d+)?)([e][+-]\d+)?)[)]?)|([(]?value[)]?))[)]*))+/gi
```

Adding something to it would be arduous. Covering the regular expression with unit tests looks like a nice idea to not break something. With Jest, you can write very concise tests to verify the same workflow with different inputs almost effortlessly, with an approach that is called parametrized tests.

In order to accomplish this task, read the article ["Parametrized tests in JavaScript with Jest"](https://blog.codeleak.pl/2021/12/parameterized-tests-with-jest.html) and implement two parametrized tests to cover 3-5 positive (method `validateMathExpression` returns `true`) and 3-5 negative scenarios (method `validateMathExpression` returns `false`).

---

[Back to the main page](../README.md)
