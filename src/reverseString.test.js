import reverseString from "./reverseString.js";

test("reversing Strings", () => {
  expect(reverseString("hello")).toMatch("olleh");
});
