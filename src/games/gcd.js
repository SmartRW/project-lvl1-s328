import { generateNumber, playGame } from '..';
import { cons } from 'hexlet-pairs';

// Finds greatest common devisor of a and b:
const findGCD = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b;
  }

  return a > b ? findGCD(a % b, b) : findGCD(a, b % a);
};

const rule = 'Find the greatest common divisor of given numbers.';

const minNumber = 1;
const maxNumber = 99;

const generateCondition = () => {
  const num1 = generateNumber(minNumber, maxNumber);
  const num2 = generateNumber(minNumber, maxNumber);
  const correctAnswer = (num1 >= num2) ? findGCD(num1, num2) : findGCD(num2, num1);
  const question = `${num1} ${num2}`;
  return cons(question, String(correctAnswer));
};

const playGcd = () => playGame(rule, generateCondition);

export default playGcd;
