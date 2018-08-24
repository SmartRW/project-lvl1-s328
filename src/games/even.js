import playGame from '..';
import generateNumber from '../utils';
import { cons } from 'hexlet-pairs';

const isEven = num => num % 2 === 0;

const rule = 'Answer "yes" if number even otherwise answer "no"';

const minNumber = 1;
const maxNumber = 99;

const generateCondition = () => {
  const number = generateNumber(minNumber, maxNumber);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = number;
  return cons(question, correctAnswer);
};

const playEven = () => playGame(rule, generateCondition);

export default playEven;
