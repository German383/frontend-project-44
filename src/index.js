import { question } from 'readline-sync';
import showGreetings from './cli.js';
import { getArrayWithTwoRandomNumbers, getOperand, getRandomNumber } from './utils.js';

const isCorrect = (correctAnswer, playerAnswer, name) => {
  switch (correctAnswer) {
    case playerAnswer:
      console.log('Correct!');
      return true;
    default:
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
  }
  return false;
};

const checkForGameParams = (gameParams, number1, number2, getCorrectAnswer) => {
  const operand = getOperand(getRandomNumber(1, 3));

  switch (gameParams) {
    case 'calc':
      console.log(`Question: ${number1} ${operand} ${number2}`);
      return getCorrectAnswer(number1, number2, operand);
    case 'gcd':
      console.log(`Question: ${number1} ${number2}`);
      return getCorrectAnswer(number1, number2);
    case 'progression':
      console.log(`Question: ${getCorrectAnswer()[0]}`);
      return getCorrectAnswer()[1];
    default:
      console.log(`Question: ${number1}`);
  }
  return getCorrectAnswer(number1);
};

const engine = (description, getCorrectAnswer, gameParams) => {
  const name = showGreetings();
  console.log(description);

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const [number1, number2] = getArrayWithTwoRandomNumbers();
    const correctAnswer = checkForGameParams(gameParams, number1, number2, getCorrectAnswer);
    const playerAnswer = String(question('Your answer: '));
    if (!isCorrect(correctAnswer, playerAnswer, name)) {
      return `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return null;
};

export default engine;
