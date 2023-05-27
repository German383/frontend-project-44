const getRandomNumber = (min = 1, max = 100) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const isEven = (num) => num % 2 === 0;

const getArrayWithTwoRandomNumbers = () => [getRandomNumber(), getRandomNumber()];

const getOperand = (num, empty = false) => {
  if (empty) return ' ';
  
  switch (num) {
    case 1:
      return '+';
    case 2:
      return '*';
    case 3:
      return '-';
    default:
  }
};

export {
  getRandomNumber,
  isEven,
  getArrayWithTwoRandomNumbers,
  getOperand,
}
