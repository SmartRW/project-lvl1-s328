import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!\n');
};

export const sayHello = () => {
  const askforName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${askforName}`);
  return askforName;
};
