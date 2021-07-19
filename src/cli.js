import readline from 'readline-sync';
const hello = () => {
	const name = readline.question('May I have your name? ');
	console.log(`Hello, ${name}!`);
};
export default hello;
