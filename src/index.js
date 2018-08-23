import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

// Gets player's name:
const getPlayersName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

// Generates random whole number from min to max:
export const generateNumber = (min, max) => Math.floor(Math.random() * max - min + 1) + min;

// Recursivly plays rounds of each game:
const playRound = (gameCondition, player, currentRound, roundsToWin) => {
  const condition = gameCondition();
  const question = car(condition);
  const correctAnswer = cdr(condition);
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

  playRound(gameCondition, player, currentRound + 1, roundsToWin);
};

// Runs process of each game:
export const playGame = (rules, condition) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(rules);
  const name = getPlayersName();
  const roundsToWin = 3;
  const currentRound = 1;
  playRound(condition, name, currentRound, roundsToWin);
};
