const caesarCipher = (string) => {
  let cipheredString = "";

  const getCharCode = (char) => {
    return char.charCodeAt(0);
  };

  const shift = (shiftI) => {
    if (shiftI > 26) shiftI = shiftI % 26;
    if (shiftI < -26) shiftI = (shiftI % 26) * -1;

    for (let i = 0; i < string.length; i++) {
      let newCharCode;
      const currentCharCode = getCharCode(string.charAt(i));
      if (currentCharCode !== 32) {
        newCharCode = currentCharCode + shiftI;
      } else {
        newCharCode = currentCharCode;
      }

      if (
        (newCharCode >= 65 && newCharCode <= 90) ||
        (newCharCode >= 97 && newCharCode <= 122) ||
        newCharCode === 32
      )
        cipheredString += String.fromCharCode(newCharCode);
      else if (newCharCode > 90 && currentCharCode <= 90) {
        cipheredString += String.fromCharCode(newCharCode - 26);
      } else if (newCharCode < 65 && currentCharCode <= 90) {
        cipheredString += String.fromCharCode(26 + newCharCode);
      } else if (newCharCode < 97 && currentCharCode >= 97) {
        cipheredString += String.fromCharCode(26 + newCharCode);
      } else if (newCharCode > 122 && currentCharCode <= 122) {
        cipheredString += String.fromCharCode(newCharCode - 26);
      } else return "shifting out of bounds from letter " + string.charAt(i);
    }
    return cipheredString;
  };
  return { shift };
};

export default caesarCipher;
