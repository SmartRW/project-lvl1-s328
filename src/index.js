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

const listBrainEvenRules = () => {
  console.log('Answer "yes" if number even otherwise answer "no"\n');
};

const generateNumber = () => Math.floor(Math.random() * 100);
const isEven = num => num % 2 === 0;
const makeQuestion = () => {
  const num = generateNumber();
  console.log(`Question: ${num}`);
  return num;
};

const displayYouLoose = (answer, correctAnswer, player) => {
  console.log(`'${answer}' is wrong answer ;( Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${player}!`);
};

export const playBrainEven = () => {
  sayWelcome();
  listBrainEvenRules();
  const name = getPlayersName();
  const pointsToWin = 3;
  const gameRound = (player, earnedPoints) => {
    const number = makeQuestion();
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = (isEven(number) ? 'yes' : 'no');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;( Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${player}!`);
      return;
    }

    if (earnedPoints >= pointsToWin) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    return gameRound(player, earnedPoints + 1);
  };
  return gameRound(name, 0);
};
