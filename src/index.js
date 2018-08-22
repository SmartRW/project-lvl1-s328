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

const getAnswer = () => readlineSync.question('Your answer: ');
const getCorrectAnswer = number => (isEven(number) ? 'yes' : 'no');
const isAnswerCorrect = (number, answer) => number === answer;

export const playBrainEven = () => {
  sayWelcome();
  listBrainEvenRules();
  const name = getPlayersName();
  const winPoints = 3;
  let points = 0;
  const gameRound = (player, totalPoints) => {
    const number = makeQuestion();
    const answer = getAnswer();
    const correctAnswer = getCorrectAnswer(number);

    if (winPoints === points) {
      console.log(`Congratulations, ${player}!`);
      return points;
    }

    if (!isAnswerCorrect(correctAnswer, answer)) {
      console.log(`'${answer}' is wrong answer ;( Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${player}!`);
      return false;
    }
    console.log('Correct!');
    points += 1;
    return gameRound(player, totalPoints + 1);
  };
  return gameRound(name, points);
};
