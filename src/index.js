import { question } from "readline-sync";
import showGreetings from "./cli.js";
import { getArrayWithTwoRandomNumbers, getOperand, getRandomNumber } from "./utils.js";

const isCorrect = (correctAnswer, playerAnswer, name) => {
  switch (correctAnswer) {
    case playerAnswer:
      console.log('Correct!');
      return true;
    default:
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return false;
  }
};

const checkForRandomNumbersCount = (randomNumberCount, firstRandomNumber, secondRandomNumber, getCorrectAnswer) => {
  if (randomNumberCount === 2) {
    const operand = getOperand(getRandomNumber(1, 3));
    console.log(`Question: ${firstRandomNumber}${operand}${secondRandomNumber}`);
    return getCorrectAnswer(firstRandomNumber, secondRandomNumber, operand);
  }
  console.log(`Question: ${firstRandomNumber}`);
  return getCorrectAnswer(firstRandomNumber);
};

const engine = (description, getCorrectAnswer, randomNumberCount = 1) => {
  const name = showGreetings();
  console.log(description);

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const [firstRandomNumber, secondRandomNumber] = getArrayWithTwoRandomNumbers();
    const correctAnswer = checkForRandomNumbersCount(randomNumberCount, firstRandomNumber, secondRandomNumber, getCorrectAnswer);
    const playerAnswer = String(question('Your answer: '));
    if (!isCorrect(correctAnswer, playerAnswer, name)) {
      return `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default engine;