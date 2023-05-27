import { question } from 'readline-sync';

const showGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default showGreetings;
