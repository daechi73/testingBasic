import caesarCipher from "./caesarCipher";

test("testing CaesarCipher getCharCode...", () => {
  const cipher = caesarCipher("wtf is going on over here ");
  expect(cipher.shift(1)).toMatch(/abcdef/);
});
