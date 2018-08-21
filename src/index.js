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
  const num = generateNumber();
  const getAnswer = () => {
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    return answer === 'yes' || answer === 'no' ? answer : false;
  };
  const validateAnswer = (number, answer) => {
    if (!answer) {
      return false;
    }
    if (checkParity(number) && answer === 'yes') {
      return true;
    }
    if (!checkParity(number) && answer === 'no') {
      return true;
    }
    return false;
  };
  const countPoints = (counter) => {
    let points = counter;

    if (points === 3) {
      console.log(`You win, ${name}!`);
      return;
    }

    if (validateAnswer(num, getAnswer())) {
      points += 1;
    }

    return countPoints(points);
  };

  return countPoints(0);
};
