import readlineSync from 'readline-sync';

export const getPlayersName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const generateNumber = () => Math.floor(Math.random() * 10);
export const isEven = num => num % 2 === 0;

export const gameRound = (gameConditions, player, currentRound, roundsToWin) => {
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

  gameRound(gameConditions, player, currentRound + 1, roundsToWin);
};

export const playBrainGames = () => {
  console.log('Welcome to the Brain Games!\n');
  getPlayersName();
};
