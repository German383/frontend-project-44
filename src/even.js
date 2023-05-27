import { question } from "readline-sync";
import showGreetings from "./cli.js";
import { getRandomNumber, isEven } from "./utils.js";

const getCorrectAnswer = (num) => isEven(num) ? 'yes' : 'no';

const game = () => {
  const name = showGreetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const randomNumber = getRandomNumber();
    const correctAnswer = getCorrectAnswer(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const playerAnswer = String(question('Your answer: '));

    switch (correctAnswer) {
      case playerAnswer:
        console.log('Correct!');
        continue;
      default:
        console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
        return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
