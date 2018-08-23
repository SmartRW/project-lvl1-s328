import { getPlayersName, gameRound, generateNumber } from '..';

export const GenerateBrainCalcConditions = () => {
  const makeOperandChoice = Math.floor(Math.random() * 3) + 1;
  const firstNumber = generateNumber();
  const secondNumber = generateNumber();

  if (makeOperandChoice === 1) {
    console.log(`Question: ${firstNumber} + ${secondNumber}`);
    const correctAnswer = firstNumber + secondNumber;
    return String(correctAnswer);
  }
  if (makeOperandChoice === 2) {
    console.log(`Question: ${firstNumber} x ${secondNumber}`);
    const correctAnswer = firstNumber * secondNumber;
    return String(correctAnswer);
  }
  console.log(`Question: ${firstNumber} - ${secondNumber}`);
  const correctAnswer = firstNumber - secondNumber;
  return String(correctAnswer);
};

const playBrainCalc = () => {
  console.log('Welcome to the Brain Games!\n');
  console.log('What is the result of the expression?\n');
  const name = getPlayersName();

  gameRound(GenerateBrainCalcConditions, name, 1, 3);
};

export default playBrainCalc;
