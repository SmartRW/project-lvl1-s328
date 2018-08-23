import {
  getPlayersName, gameRound, isEven, generateNumber,
} from '..';
import { cons } from 'hexlet-pairs';

const generateBrainEvenConditions = () => {
  const minNumber = 1;
  const maxNumber = 99;
  const number = generateNumber(minNumber, maxNumber);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = number;
  return cons(question, correctAnswer);
};

const playBrainEven = () => {
  console.log('Welcome to the Brain Games!\n');
  console.log('Answer "yes" if number even otherwise answer "no"\n');
  const currentRound = 1;
  const roundsToWin = 3;
  const name = getPlayersName();
  gameRound(generateBrainEvenConditions, name, currentRound, roundsToWin);
};

export default playBrainEven;
