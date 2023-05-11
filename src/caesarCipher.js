const caesarCipher = (string) => {
  let cipheredString = "";

  const getCharCode = (char) => {
    return char.charCodeAt(0);
  };
  const shift = (shiftI) => {
    for (let i = 0; i < string.length; i++) {
      cipheredString += String.fromCharCode(
        getCharCode(string.charAt(i)) + shiftI
      );
    }
    return cipheredString;
  };

  return { shift };
};

export default caesarCipher;
