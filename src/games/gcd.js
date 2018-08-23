import {
  getPlayersName, gameRound, generateNumber, findGCD,
} from '..';
import { cons } from 'hexlet-pairs';

const generateBrainGcdConditions = () => {
  const num1 = generateNumber();
  const num2 = generateNumber();
  const correctAnswer = (num1 >= num2) ? findGCD(num1, num2) : findGCD(num2, num1);
  const question = `${num1} ${num2}`;
  return cons(question, String(correctAnswer));
};

const playBrainGcd = () => {
  console.log('Welcome to the Brain Games!\n');
  console.log('Find the greatest common divisor of given numbers.\n');
  const name = getPlayersName();
  const currentRound = 1;
  const roundsToWin = 3;
  gameRound(generateBrainGcdConditions, name, currentRound, roundsToWin);
};

export default playBrainGcd;