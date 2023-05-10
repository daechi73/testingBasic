import calculator from "./calculator";

test("calculator add function", () => {
  expect(calculator().add(1, 2)).toBe(3);
});
