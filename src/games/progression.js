import game from '../index.js';
import random from '../random.js';

const phrase = 'What number is missing in the progression?';

const makeArray = () => {
  const result = [];
  const randomLength = random(5, 11);
  let randomNum = random(1, 100);
  const randomProgression = random(1, 5);
  while (result.length < randomLength) {
    result.push(randomNum += randomProgression);
  }
  return result;
};

const generateQuestionAndAnswer = () => {
  const generate = makeArray();
  const randomIndex = random(0, generate.length - 1);
  const sentSymbol = (result) => {
    result.splice(randomIndex, 1, '..');
    return result;
  };
  const sentHiddenSymbol = (result) => {
    const array = [];
    for (let i = 0; i < result.length; i += 1) {
      if (randomIndex === i) {
        array.push(result[i]);
      }
    }
    return array;
  };
  const correctAnswer = String(sentHiddenSymbol(generate));
  const progressionQuestion = sentSymbol(generate);
  const progressionQuestionInArr = progressionQuestion.join(' ');
  const question = `Question: ${progressionQuestionInArr}\nYour answer: `;
  return [question, correctAnswer];
};
export default () => {
  game(generateQuestionAndAnswer, phrase);
};
