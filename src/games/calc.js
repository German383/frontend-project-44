import engine from "../index.js";

const getCorrectAnswer = (num1, num2, operand) => {
  switch (operand) {
    case '+':
      return String(num1 + num2);
    case '*':
      return String(num1 * num2);
    case '-':
      return String(num1 - num2);
    default:
  }
};

const startCalcGame = () => {
  const description = 'What is the result of the expression?';
  engine(description, getCorrectAnswer, 2);
};

export default startCalcGame;
