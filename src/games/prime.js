import engine from "../index.js";
import { isPrime } from "../utils.js";

const getCorrectAnswer = (num) => isPrime(num) ? 'yes' : 'no';

const startPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  engine(description, getCorrectAnswer);
};

export default startPrimeGame;
