import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!\n');
};

export const sayHello = () => {
  const askforName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${askforName}`);
  return askforName;
};

export const listBrainEvenRules = () => {
  console.log('Answer "yes" if number even otherwise answer "no"');
};

const generateNumber = () => Math.floor(Math.random() * 100);
const checkParity = num => num % 2 === 0;
// const checkMaxPoints = (currentPoints, maxPoints) => currentPoints === maxPoints;

export const playBrainEven = (name) => {
  const checkAnswer = () => {
    const num = generateNumber();
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (checkParity(num) && answer === 'yes') {
      return true;
    }
    if (!checkParity(num) && answer === 'no') {
      return true;
    }
    console.log(`'${answer}' is wrong answer ;(`);
    return false;
  };

  const countPoints = (counter) => {
    let points = counter;

    if (points === 3) {
      console.log(`You win, ${name}!`);
      return points;
    }

    if (checkAnswer()) {
      points += 1;
      console.log(`points: ${points}`);
    } else {
      console.log(`Let's try again, ${name}!`);
      return points;
    }

    return countPoints(points);
  };
  return countPoints(0);
};
