import readlineSync from 'readline-sync';

const sayWelcome = () => {
  console.log('Welcome to the Brain Games!\n');
};

const getPlayersName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const generateNumber = () => Math.floor(Math.random() * 100);
const isEven = num => num % 2 === 0;

const gameRound = (player, currentRound, roundsToWin) => {
  const number = generateNumber();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = (isEven(number) ? 'yes' : 'no');
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

export const playBrainGames = () => {
  sayWelcome();
  getPlayersName();
};

export const playBrainEven = () => {
  sayWelcome();
  console.log('Answer "yes" if number even otherwise answer "no"\n');
  const name = getPlayersName();
  gameRound(name, 1, 3);
};

const generateQuestionReturnCorrectAnswer = () => {
  const makeOperandChoice = Math.floor(Math.random() * 3) + 1;
  const firstNumber = generateNumber();
  const secondNumber = generateNumber();

  if (makeOperandChoice === 1) {
    console.log(`Question: ${firstNumber} + ${secondNumber}`);
    const correctAnswer = firstNumber + secondNumber;
    return correctAnswer;
  }
  if (makeOperandChoice === 2) {
    console.log(`Question: ${firstNumber} x ${secondNumber}`);
    const correctAnswer = firstNumber * secondNumber;
    return correctAnswer;
  }
  console.log(`Question: ${firstNumber} - ${secondNumber}`);
  const correctAnswer = firstNumber - secondNumber;
  return correctAnswer;
};

export const playBrainCalc = () => {
  sayWelcome();
  console.log('What is the result of the expression?\n');
  const name = getPlayersName();
  const anotherGameRound = (player, currentRound, roundsToWin) => {
    const correctAnswer = generateQuestionReturnCorrectAnswer();
    const answer = readlineSync.question('Your answer: ');

    if (+answer === correctAnswer) {
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

    anotherGameRound(player, currentRound + 1, roundsToWin);
  };
  anotherGameRound(name, 1, 3);
};
