import utilities from '../utilities.js';
const phrase = 'Answer "yes" if the number is even, otherwise answer "no".'
const gameQuestion = () => {
const num = Math.floor(Math.random() * 100);
const correctAnswer = utilities.isEven(num) ? 'yes' : 'no';

return { num, correctAnswer };
};
export default { phrase, gameQuestion };
