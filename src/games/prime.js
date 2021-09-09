import game from '../index.js';
import random from '../random.js';

const phrase = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (num) => {
  if (num <= 1) return 'no';
  for (let i = 2; i < num; i += 1) if (num % i === 0) return 'no';
  return 'yes';
};

const generateQuestionAndAnswer = () => {
  const randomNum = random();
  const question = `Question: ${randomNum}\nYour answer: `;
  const correctAnswer = isPrime(randomNum);
  return [question, correctAnswer];
};

export default () => {
  game(generateQuestionAndAnswer, phrase);
};
