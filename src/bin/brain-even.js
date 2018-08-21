import {
  sayHello, welcome, listBrainEvenRules, playBrainEven,
} from '..';

welcome();
sayHello();
const name = sayHello();
listBrainEvenRules();

playBrainEven(name);
