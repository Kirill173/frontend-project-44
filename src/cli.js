import readlineSync from 'readline-sync';

const hello_name = () => {

	const name = readlineSync.question('May I have your name?');
	return (`Hello, ${name}!`);
};
export default hello_name;

