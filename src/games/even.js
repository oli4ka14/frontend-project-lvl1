const phrase = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const gameQuestion = () => {
  const num = Math.floor(Math.random() * 101);
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  return { num, correctAnswer };
};
export default { phrase, gameQuestion };
