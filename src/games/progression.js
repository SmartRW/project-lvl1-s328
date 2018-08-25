import playGame from '..';
import generateNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameRule = 'What number is missing in this progression?';

const startItemMin = 1;
const startItemMax = 9;

const progressionLength = 10;
const minStep = 1;
const maxStep = 9;

const generateCondition = () => {
  const progressionStep = generateNumber(minStep, maxStep);
  const startItem = generateNumber(startItemMin, startItemMax);
  const hiddenItemIndex = generateNumber(0, progressionLength - 1);
  let question = '';
  const hiddenItem = startItem + (hiddenItemIndex * progressionStep);
  const correctAnswer = String(hiddenItem);
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenItemIndex) {
      question += '.. ';
    } else {
      const nthItem = startItem + (i * progressionStep);
      question += `${nthItem} `;
    }
  }
  return cons(question, correctAnswer);
};

const playProgression = () => playGame(gameRule, generateCondition);

export default playProgression;
