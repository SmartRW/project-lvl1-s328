import { generateNumber, playGame } from '..';
import { cons } from 'hexlet-pairs';

const rules = 'What is the result of the expression?\n';

const generateConditions = () => {
  const operandsNumber = 3;
  const makeOperandChoice = Math.floor(Math.random() * operandsNumber) + 1;
  const minNumber = 0;
  const maxNumber = 20;
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

const playCalc = () => playGame(rules, generateConditions);

export default playCalc;
