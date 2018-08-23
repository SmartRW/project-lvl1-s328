import {
  sayWelcome, getPlayersName, gameRound, GenerateBrainEvenConditions, GenerateBrainCalcConditions,
} from '..';

export const playBrainGames = () => {
  sayWelcome();
  getPlayersName();
};

export const playBrainEven = () => {
  sayWelcome();
  console.log('Answer "yes" if number even otherwise answer "no"\n');
  const name = getPlayersName();
  gameRound(GenerateBrainEvenConditions, name, 1, 3);
};

export const playBrainCalc = () => {
  sayWelcome();
  console.log('What is the result of the expression?\n');
  const name = getPlayersName();

  gameRound(GenerateBrainCalcConditions, name, 1, 3);
};
