import { sayHello, welcome, brainEvenRules, playBrainEven } from '..';

welcome();
brainEvenRules();

const name = sayHello();

playBrainEven(name);
