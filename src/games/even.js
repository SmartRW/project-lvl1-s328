import {
  getPlayersName, gameRound, isEven, generateNumber,
} from '..';
import { pair } from 'pairs';

const generateBrainEvenConditions = () => {
  const number = generateNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = number;
  return pair(question, correctAnswer);
};

const playBrainEven = () => {
  console.log('Welcome to the Brain Games!\n');
  console.log('Answer "yes" if number even otherwise answer "no"\n');
  const name = getPlayersName();
  gameRound(generateBrainEvenConditions, name, 1, 3);
};

export default playBrainEven;
