import random from '../random.js';
import game from '../index.js';

const phrase = 'Find the greatest common divisor of given numbers.';
const divisor = (a, b) => {
  if (!b) {
    return a;
  }
  return divisor(b, a % b);
};

const generateQuestion = () => {
  const num1 = random();
  const num2 = random();
  const question = `Question: ${num1} ${num2}\nYour answer: `;
  const correctAnswer = String(divisor(num1, num2));
  return [question, correctAnswer];
};

export default () => {
  game(generateQuestion, phrase);
};
