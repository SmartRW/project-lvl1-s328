import playGame from '..';
import generateNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameRule = 'What is the result of the expression?';

const minNumber = 0;
const maxNumber = 20;
const operandsNumber = 3;

const generateCondition = () => {
  const makeOperandChoice = Math.floor(Math.random() * operandsNumber) + 1;
  const firstNumber = generateNumber(minNumber, maxNumber);
  const secondNumber = generateNumber(minNumber, maxNumber);

  switch (makeOperandChoice) {
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

const playCalc = () => playGame(gameRule, generateCondition);

export default playCalc;
