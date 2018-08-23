import {
  getPlayersName, gameRound, isEven, generateNumber,
} from '..';

const GenerateBrainEvenConditions = () => {
  const number = generateNumber();
  console.log(`Question: ${number}`);
  return (isEven(number) ? 'yes' : 'no');
};

const playBrainEven = () => {
  console.log('Welcome to the Brain Games!\n');
  console.log('Answer "yes" if number even otherwise answer "no"\n');
  const name = getPlayersName();
  gameRound(GenerateBrainEvenConditions, name, 1, 3);
};

export default playBrainEven;
