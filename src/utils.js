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

const getProgression = () => {
  const result = [];
  const step = getRandomNumber(1, 15);
  const length = getRandomNumber(5, 10);

  for (let i = step; i <= step * length; i += step) {
    result.push(i);
  }
  const secretNumber = getRandomNumber(0, result.length - 1);
  const correctAnswer = String(result[secretNumber]);
  result[secretNumber] = '..';
  const progression = result.join(' ');
  return [progression, correctAnswer];
};

const isPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export {
  getRandomNumber,
  isEven,
  getArrayWithTwoRandomNumbers,
  getOperand,
  findGCD,
  getProgression,
  isPrime,
}
