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

const findGCD = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return String(a);
};

export {
  getRandomNumber,
  isEven,
  getArrayWithTwoRandomNumbers,
  getOperand,
  findGCD
}
