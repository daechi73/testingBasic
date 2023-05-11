import analyzeArray from "./analyzeArray";

test("testing analayzeArray average..", () => {
  const avgArray = analyzeArray([1, 2, 3, 4, 5]);
  expect(avgArray.average()).toBe(3);
});
test("testing analyzeArray min...", () => {
  const array = analyzeArray([4, 2, 1, 11, 6]);
  expect(array.min()).toBe(1);
});
test("testing analyzeArray max...", () => {
  const array = analyzeArray([1, 2, 3, 4, 5]);
  expect(array.max()).toBe(5);
});
