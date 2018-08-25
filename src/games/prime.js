import playGame from '..';
import generateNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameRule = 'Is this number prime?';

const isPrime = (num, devisor) => {
  if (devisor > num / 2) {
    return true;
  }
  if (num % devisor === 0) {
    return false;
  }

  return isPrime(num, devisor + 1);
};

const minNumber = 1;
const maxNumber = 99;

const minDevisor = 2;

const generateCondition = () => {
  const number = generateNumber(minNumber, maxNumber);
  const correctAnswer = isPrime(number, minDevisor) ? 'yes' : 'no';
  const question = number;
  return cons(question, correctAnswer);
};

const playPrime = () => playGame(gameRule, generateCondition);

export default playPrime;
