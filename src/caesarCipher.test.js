import caesarCipher from "./caesarCipher";

test("testing CaesarCipher getCharCode...", () => {
  const cipher = caesarCipher("A");
  expect(cipher.shift(1)).toMatch(/B/);
});
