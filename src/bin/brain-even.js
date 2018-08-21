import {
  sayHello, welcome, listBrainEvenRules, playBrainEven,
} from '..';

welcome();
const name = sayHello();
listBrainEvenRules();

playBrainEven(name);
