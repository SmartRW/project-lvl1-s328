import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const getPlayersName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const playRound = (gameCondition, currentRound, roundsToWin) => {
  const condition = gameCondition();
  const question = car(condition);
  const correctAnswer = cdr(condition);

  if (currentRound > roundsToWin) {
    return true;
  }

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;( Correct answer was '${correctAnswer}'`);
    return false;
  }
  return playRound(gameCondition, currentRound + 1, roundsToWin);
};

const roundsToWin = 3;
const currentRound = 1;

const playGame = (gameRule, condition) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${gameRule}\n`);
  const name = getPlayersName();
  if (playRound(condition, currentRound, roundsToWin)) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default playGame;
