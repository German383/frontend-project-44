import engine from '../index.js';
import { findGCD } from '../utils.js';

const getCorrectAnswer = (num1, num2) => findGCD(num1, num2);

const startGCDGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  engine(description, getCorrectAnswer, 'gcd');
};

export default startGCDGame;
