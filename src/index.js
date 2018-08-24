import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

// Gets player's name:
const getPlayersName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

// Recursivly plays rounds of each game:
const playRound = (gameCondition, currentRound, roundsToWin) => {
  const condition = gameCondition();
  const question = car(condition);
  const correctAnswer = cdr(condition);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    if (currentRound >= roundsToWin) {
      return true;
    }
    playRound(gameCondition, currentRound + 1, roundsToWin);
  }
  console.log(`'${answer}' is wrong answer ;( Correct answer was '${correctAnswer}'`);
  return false;
};

// Runs process of each game:
const roundsToWin = 3;
const currentRound = 1;

const playGame = (rule, condition) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${rule}\n`);
  const name = getPlayersName();
  if (playRound(condition, currentRound, roundsToWin)) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default playGame;
