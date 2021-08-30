import game from '../index.js';
import random from '../random.js';

const phrase = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const gameQuestion = () => {
  const num = random();
  const question = `Question: ${num}\nYour answer: `;
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  return [question, correctAnswer];
};
export default () => {
  game(gameQuestion, phrase);
};
