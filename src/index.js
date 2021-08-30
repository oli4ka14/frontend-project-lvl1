import readlineSync from 'readline-sync';

const rounds = 3;
export default (gameQuestion, phrase) => {
	console.log('Welcome to the Brain Games!');
	const nameOfUser = readlineSync.question('Mat I have your name? ');
	console.log(`Hello, ${nameOfUser}!`);
	console.log(phrase);
	let counter = 0;
	while (counter < rounds) {
		const [question, correctAnswer] = gameQuestion();
		const answerOfUser = readlineSync.question(question);
		if (answerOfUser === correctAnswer) {
			counter += 1;
			console.log('Correct!');
		} else {
			console.log(`'${answerOfUser}' is wrong answer; Correct answer was '${correctAnswer}'.`);
			console.log(`Let's try again, ${nameOfUser}!`);
			return;
		}
	}
	console.log(`Congratulations, ${nameOfUser}!`);
};

