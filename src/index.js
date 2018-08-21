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
const isEven = num => num % 2 === 0;

export const playBrainEven = (name) => {
  const isAnswerCorrect = () => {
    const num = generateNumber();
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');

    console.log(`Question: ${num}`);

    if (isEven(num) && answer === 'yes') {
      return true;
    }
    if (!isEven(num) && answer === 'no') {
      return true;
    }
    console.log(`'${answer}' is wrong answer ;( Correct answer was '${correctAnswer}'`);
    return false;
  };

  const countPoints = (counter) => {
    let points = counter;

    if (points >= 3) {
      console.log(`You win, ${name}!`);
      return points;
    }

    if (isAnswerCorrect()) {
      points += 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      return points;
    }

    return countPoints(points);
  };
  return countPoints(0);
};
