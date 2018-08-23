import { getPlayersName, gameRound, generateNumber } from '..';
import { cons } from 'hexlet-pairs';

export const generateBrainCalcConditions = () => {
  const operandsNumber = 3;
  const makeOperandChoice = Math.floor(Math.random() * operandsNumber) + 1;
  const firstNumber = generateNumber();
  const secondNumber = generateNumber();

  if (makeOperandChoice === 1) {
    const question = `${firstNumber} + ${secondNumber}`;
    const correctAnswer = firstNumber + secondNumber;
    return cons(question, String(correctAnswer));
  }
  if (makeOperandChoice === 2) {
    const question = `${firstNumber} x ${secondNumber}`;
    const correctAnswer = firstNumber * secondNumber;
    return cons(question, String(correctAnswer));
  }
  const question = `${firstNumber} - ${secondNumber}`;
  const correctAnswer = firstNumber - secondNumber;
  return cons(question, String(correctAnswer));
};

const playBrainCalc = () => {
  console.log('Welcome to the Brain Games!\n');
  console.log('What is the result of the expression?\n');
  const name = getPlayersName();

  gameRound(generateBrainCalcConditions, name, 1, 3);
};

export default playBrainCalc;
