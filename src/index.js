import readlineSync from 'readline-sync';

const sayWelcome = () => {
  console.log('Welcome to the Brain Games!\n');
};

const getPlayersName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const generateNumber = () => Math.floor(Math.random() * 10);
const isEven = num => num % 2 === 0;

const gameRound = (gameConditions, player, currentRound, roundsToWin) => {
  const correctAnswer = gameConditions();
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;( Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${player}!`);
    return;
  }

  if (currentRound >= roundsToWin) {
    console.log(`Congratulations, ${player}!`);
    return;
  }

  gameRound(player, currentRound + 1, roundsToWin);
};

const GenerateBrainEvenConditions = () => {
  const number = generateNumber();
  console.log(`Question: ${number}`);
  return (isEven(number) ? 'yes' : 'no');
};

const GenerateBrainCalcConditions = () => {
  const makeOperandChoice = Math.floor(Math.random() * 3) + 1;
  const firstNumber = generateNumber();
  const secondNumber = generateNumber();

  if (makeOperandChoice === 1) {
    console.log(`Question: ${firstNumber} + ${secondNumber}`);
    const correctAnswer = firstNumber + secondNumber;
    return toString(correctAnswer);
  }
  if (makeOperandChoice === 2) {
    console.log(`Question: ${firstNumber} x ${secondNumber}`);
    const correctAnswer = firstNumber * secondNumber;
    return toString(correctAnswer);
  }
  console.log(`Question: ${firstNumber} - ${secondNumber}`);
  const correctAnswer = firstNumber - secondNumber;
  return toString(correctAnswer);
};

export const playBrainGames = () => {
  sayWelcome();
  getPlayersName();
};

export const playBrainEven = () => {
  sayWelcome();
  console.log('Answer "yes" if number even otherwise answer "no"\n');
  const name = getPlayersName();
  gameRound(GenerateBrainEvenConditions, name, 1, 3);
};

export const playBrainCalc = () => {
  sayWelcome();
  console.log('What is the result of the expression?\n');
  const name = getPlayersName();

  gameRound(GenerateBrainCalcConditions, name, 1, 3);
};
