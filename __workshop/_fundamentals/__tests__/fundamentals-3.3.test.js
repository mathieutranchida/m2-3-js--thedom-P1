// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(sum([3, 4])).toBe(7);
  // add more tests here...
  expect(sum([3, 5])).toBe(8);
  expect(sum([1, 4])).toBe(5);
  expect(sum([3, 7])).toBe(10);
});

// Run your test by typing yarn test fundamentals-3.3 in the terminal.

// More info on jest expect: https://jestjs.io/docs/en/expect
