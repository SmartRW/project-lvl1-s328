import readlineSync from 'readline-sync';

const playBrainGames = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

export default playBrainGames;
