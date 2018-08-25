import playGame from '..';
import generateNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameRule = 'Balance the given number.';

const sumOfNumerals = (str) => {
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    sum += Number(str[i]);
  }
  return sum;
};
// ver. 1
// const balanceNum = (str) => {
//   const len = str.length;
//   const sum = sumOfNumerals(str);
//   const minNum = Math.floor(sum / len);
//   const maxNum = minNum + 1;
//   const minNumCount = len * maxNum - sum;
//   const maxNumCount = len - minNumCount;
//   let balanced = '';
//   for (let i = 0; i < minNumCount; i += 1) {
//     balanced += minNum;
//   }
//   for (let i = 0; i < maxNumCount; i += 1) {
//     balanced += maxNum;
//   }
//   return balanced;
// };


// ver. 2
const makeString = (numeral, count) => {
  if (count === 0) {
    return '';
  }
  return `${numeral}${makeString(numeral, count - 1)}`;
};

const balanceNum = (str) => {
  const len = str.length;
  const sum = sumOfNumerals(str);
  const minNum = Math.floor(sum / len);
  const maxNum = minNum + 1;
  const minNumCount = len * maxNum - sum;
  const maxNumCount = len - minNumCount;
  const stringOfMinNum = makeString(minNum, minNumCount);
  const stringOfMaxNum = makeString(maxNum, maxNumCount);
  return `${stringOfMinNum}${stringOfMaxNum}`;
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
