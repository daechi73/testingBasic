const caesarCipher = (string, shiftI) => {
  let cipheredString = "";
  const shiftIndex = shiftI;

  const getCharCode = (char) => {
    return char.charCodeAt(0);
  };
  const shift = () => {
    for (let i = 0; i < string.length; i++) {
      cipheredString += String.fromCharCode(
        getCharCode(string.charAt(i)) + shiftIndex
      );
    }
    return cipheredString;
  };

  return { shift };
};

export default caesarCipher;
