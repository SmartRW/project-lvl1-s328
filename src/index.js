import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

// Gets player's name:
const getPlayersName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

// Plays round and checks equality of player's answer and correct answer:
const isRoundWon = (gameCondition) => {
  const condition = gameCondition();
  const question = car(condition);
  const correctAnswer = cdr(condition);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;( Correct answer was '${correctAnswer}'`);
  return false;
};

// Runs process of each game:
const roundsToWin = 3;
let currentRound = 1;

const playGame = (rule, condition) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${rule}\n`);
  const name = getPlayersName();
  const iter = () => {
    if (isRoundWon(condition)) {
      currentRound += 1;
      console.log(`${currentRound}, ${roundsToWin}`);
      if (currentRound > roundsToWin) {
        console.log(`Congratulations, ${name}!`);
        return;
      }
      iter();
    } else {
      console.log(`Let's try again, ${name}!`);
    }
  };
  iter();
};

export default playGame;
