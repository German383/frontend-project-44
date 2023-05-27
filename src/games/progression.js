import engine from "../index.js";
import { getProgression } from "../utils.js";

const getCorrectAnswer = () => {
  const [progression, correctAnswer] = getProgression();
  return [progression, correctAnswer];
};

const startProgressionGame = () => {
  const description = 'What number is missing in the progression?';
  engine(description, getCorrectAnswer, 'progression');
};

export default startProgressionGame;
