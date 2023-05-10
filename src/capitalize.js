const capitalize = (word) => {
  const upperLetter = word.charAt(0).toUpperCase();
  const updatedWord = upperLetter + word.slice(1);
  return updatedWord;
};

export default capitalize;
