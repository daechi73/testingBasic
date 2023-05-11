import caesarCipher from "./caesarCipher";

test("testing CaesarCipher getCharCode...", () => {
  const cipher = caesarCipher("A", 1);
  expect(cipher.shift()).toMatch(/A/);
});
