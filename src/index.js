import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const getPlayersName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

// Generates random whole number from 1 to 10:
export const generateNumber = () => Math.floor(Math.random() * 9) + 1;

export const isEven = num => num % 2 === 0;

// Finds greatest common devisor of a and b:
export const findGCD = (a, b) => {
  if (a % b === 0) {
    return b;
  }
  return findGCD(a % b, b);
};

export const gameRound = (gameConditions, player, currentRound, roundsToWin) => {
  const conditions = gameConditions();
  const question = car(conditions);
  const correctAnswer = cdr(conditions);
  console.log(`Question: ${question}`);
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

  gameRound(gameConditions, player, currentRound + 1, roundsToWin);
};

export const playBrainGames = () => {
  console.log('Welcome to the Brain Games!\n');
  getPlayersName();
};
