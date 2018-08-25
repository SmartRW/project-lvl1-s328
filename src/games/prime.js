import playGame from '..';
import generateNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameRule = 'Is this number prime?';

const isPrime = (num) => {
  const iter = (number, devisor) => {
    if (devisor > num / 2) {
      return true;
    }
    if (num % devisor === 0) {
      return false;
    }

    return isPrime(num, devisor + 1);
  };
  const minDevisor = 2;
  return iter(num, minDevisor);
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
