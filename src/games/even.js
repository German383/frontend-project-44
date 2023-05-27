import { isEven } from '../utils.js';
import engine from '../index.js';

const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const startEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  engine(description, getCorrectAnswer, 'single');
};

export default startEvenGame;
