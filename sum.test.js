const sum = require("./sum");
const sum = require("./multiply");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("multiplies 1 * 2 to equal 2", () => {
    expect(multiply(1, 2)).toBe(2);
  });