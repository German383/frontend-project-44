const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min) + min);

const isEven = (num) => num % 2 === 0;

export {
  getRandomNumber,
  isEven,
}
