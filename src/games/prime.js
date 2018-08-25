import playGame from '..';
import generateNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameRule = 'Is this number prime?';

const isPrime = (num) => {
  const iter = (number, divisor) => {
    if (divisor > num / 2) {
      return true;
    }
    if (num % divisor === 0) {
      return false;
    }

    return isPrime(num, divisor + 1);
  };
  const minDivisor = 2;
  return iter(num, minDivisor);
};

const minNumber = 1;
const maxNumber = 99;


const generateCondition = () => {
  const number = generateNumber(minNumber, maxNumber);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = number;
  return cons(question, correctAnswer);
};

const playPrime = () => playGame(gameRule, generateCondition);

export default playPrime;
