import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

// Gets player's name:
const getPlayersName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

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
const roundsToWin = 3;
const currentRound = 1;

const playGame = (gameRule, condition) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${gameRule}\n`);
  const name = getPlayersName();
  playRound(condition, name, currentRound, roundsToWin);
};

export default playGame;
