import { generateNumber, playGame } from '..';
import { cons } from 'hexlet-pairs';

const isEven = num => num % 2 === 0;

const rules = 'Answer "yes" if number even otherwise answer "no"\n';

const generateConditions = () => {
  const minNumber = 1;
  const maxNumber = 99;
  const number = generateNumber(minNumber, maxNumber);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = number;
  return cons(question, correctAnswer);
};

const playEven = () => playGame(rules, generateConditions);

export default playEven;
