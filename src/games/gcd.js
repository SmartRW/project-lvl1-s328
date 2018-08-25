import playGame from '..';
import generateNumber from '../utils';
import { cons } from 'hexlet-pairs';

const findGCD = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b;
  }

  return a > b ? findGCD(a % b, b) : findGCD(a, b % a);
};

const gameRule = 'Find the greatest common divisor of given numbers.';

const minNumber = 1;
const maxNumber = 99;

const generateCondition = () => {
  const num1 = generateNumber(minNumber, maxNumber);
  const num2 = generateNumber(minNumber, maxNumber);
  const correctAnswer = findGCD(num1, num2);
  const question = `${num1} ${num2}`;
  return cons(question, String(correctAnswer));
};

const playGcd = () => playGame(gameRule, generateCondition);

export default playGcd;
