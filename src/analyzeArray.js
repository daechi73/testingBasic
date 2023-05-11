const analyzeArray = (arrayOfNum) => {
  const average = () => {
    let sum = 0;
    let average;

    arrayOfNum.forEach((num) => {
      sum += num;
    });
    average = sum / arrayOfNum.length;
    return average;
  };
  const min = () => {
    let min = arrayOfNum[0];
    arrayOfNum.forEach((num) => {
      if (num < min) min = num;
    });
    return min;
  };

  const max = () => {
    let max = arrayOfNum[0];
    arrayOfNum.forEach((num) => {
      if (num > max) max = num;
    });
    return max;
  };

  return { average, min, max };
};

export default analyzeArray;
