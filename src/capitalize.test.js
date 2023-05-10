import capitalize from "./capitalize";

test("Capitalizes first letter", () => {
  expect(capitalize("hello")).toMatch("Hello");
});
