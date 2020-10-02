// We import (require) the function that we want to test.
const longestWord = require("../fundamentals-3.9");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 9", () => {
  expect(longestWord("a bb ccc dddd e ff ggg")).toBe("dddd");
  // add more tests here...
  expect(longestWord("a bb ccc e ff ggg")).toBe("ggg");
  expect(longestWord("aaaaaa bb ccc dddd e ff ggg")).toBe("aaaaaa");
  expect(longestWord("i eeee xx")).toBe("eeee");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
