import playGame from '..';
import generateNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameRule = 'Balance the given number.';

const findMinNum = (num) => {
  const str = String(num);
  let smallestNumber = str[0];
  for (let i = 1; i <= str.length - 1; i += 1) {
    if (str[i] < smallestNumber) {
      smallestNumber = str[i];
    }
  }
  return smallestNumber;
};

const makeBase = (num, len) => {
  let str = '';
  for (let i = 1; i <= len; i += 1) {
    str = `${str}${num}`;
  }
  return Number(str);
};

const calculatePoints = (num1, num2) => {
  const diff = `${num2 - num1}`;
  let sum = 0;
  for (let i = 0; i < diff.length; i += 1) {
    sum += Number(diff[i]);
  }
  return sum;
};

const distributePoints = (num, points) => {
  const len = String(num).length;
  const minNum = Math.floor(points / len);
  const maxNum = minNum + 1;
  const minNumCount = len - (points % len);
  const maxNumCount = points % len;
  let balanced = '';
  for (let i = 0; i < minNumCount; i += 1) {
    balanced += minNum;
  }
  for (let i = 0; i < maxNumCount; i += 1) {
    balanced += maxNum;
  }
  return balanced;
};

const balanceNum = (num) => {
  const minNum = findMinNum(num);
  const base = makeBase(minNum, num.length);
  const points = calculatePoints(base, num);
  return distributePoints(num, points);
};

const minNumber = 10;
const maxNumber = 9999;

const generateCondition = () => {
  const num = generateNumber(minNumber, maxNumber);
  const question = num;
  const correctAnswer = balanceNum(num);
  return cons(question, correctAnswer);
};

const playBalance = () => playGame(gameRule, generateCondition);

export default playBalance;
