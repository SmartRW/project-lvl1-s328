import {
  sayHello, welcome, listBrainEvenRules, playBrainEven
} from '..';

welcome();
listBrainEvenRules();

const name = sayHello();

playBrainEven(name);
