import randomSign from '../randomSign.js';
import game from '../index.js';
import random from '../random.js';

const phrase = 'What is the result of the expression?';
const calculate = (firstValue, secondValue, operator) => {
  let result = 0;
  if (operator === '-') {
    result = firstValue - secondValue;
  } else if (operator === '+') {
    result = firstValue + secondValue;
  } else if (operator === '*') {
    result = firstValue * secondValue;
  }
  return result;
};
const generateQuestionAndAnswer = () => {
  const num1 = random();
  const num2 = random();
  const randomOperator = randomSign();
  const question = `Question: ${num1} ${randomOperator} ${num2}\nYour answer: `;
  const correctAnswer = String(calculate(num1, num2, randomOperator));
  return [question, correctAnswer];
};

export default () => {
  game(generateQuestionAndAnswer, phrase);
};
