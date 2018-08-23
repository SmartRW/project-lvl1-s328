import { getPlayersName, gameRound, generateNumber } from '..';
import { cons } from 'hexlet-pairs';

const generateBrainCalcConditions = () => {
  const operandsNumber = 3;
  const makeOperandChoice = Math.floor(Math.random() * operandsNumber) + 1;
  const minNumber = 0;
  const maxNumber = 10;
  const firstNumber = generateNumber(minNumber, maxNumber);
  const secondNumber = generateNumber(minNumber, maxNumber);

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
  const currentRound = 1;
  const roundsToWin = 3;
  gameRound(generateBrainCalcConditions, name, currentRound, roundsToWin);
};

export default playBrainCalc;
