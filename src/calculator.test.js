import calculator from "./calculator";

test("calculator add function", () => {
  expect(calculator().add(1, 2)).toBe(3);
});

test("Calculator subtract function testing...", () => {
  expect(calculator().subtract(2, 1)).toBe(1);
});

test("Calculator multiply function testing...", () => {
  expect(calculator().multiply(1, 2)).toBe(2);
});

test("Calculator divide function testing...", () => {
  expect(calculator().divide(2, 1)).toBe(2);
});
