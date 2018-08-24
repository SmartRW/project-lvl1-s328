import { generateNumber, playGame } from '..';
import { cons } from 'hexlet-pairs';

const rule = 'What is the result of the expression?';

const operandsNumber = 3;
const minNumber = 0;
const maxNumber = 20;

const generateCondition = () => {
  const choosenOperatopNumber = Math.floor(Math.random() * operandsNumber) + 1;
  const firstNumber = generateNumber(minNumber, maxNumber);
  const secondNumber = generateNumber(minNumber, maxNumber);

  switch (choosenOperatopNumber) {
    case 1: {
      const question = `${firstNumber} + ${secondNumber}`;
      const correctAnswer = firstNumber + secondNumber;
      return cons(question, String(correctAnswer));
    }
    case 2: {
      const question = `${firstNumber} x ${secondNumber}`;
      const correctAnswer = firstNumber * secondNumber;
      return cons(question, String(correctAnswer));
    }
    default: {
      const question = `${firstNumber} - ${secondNumber}`;
      const correctAnswer = firstNumber - secondNumber;
      return cons(question, String(correctAnswer));
    }
  }
};

const playCalc = () => playGame(rule, generateCondition);

export default playCalc;
