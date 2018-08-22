import readlineSync from 'readline-sync';

const sayWelcome = () => {
  console.log('Welcome to the Brain Games!\n');
};

const getPlayersName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const playBrainGames = () => {
  sayWelcome();
  getPlayersName();
};

const generateNumber = () => Math.floor(Math.random() * 100);
const isEven = num => num % 2 === 0;

export const playBrainEven = () => {
  sayWelcome();
  console.log('Answer "yes" if number even otherwise answer "no"\n');
  const name = getPlayersName();
  const roundsToWin = 3;
  const gameRound = (player, currentRound) => {
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
      console.log(`Congratulations, ${name}!`);
      return;
    }

    gameRound(player, currentRound + 1);
  };
  return gameRound(name, 1);
};
