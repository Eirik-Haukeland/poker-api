import getHandTest from './getHandTest.js';
import dealCardTest from './dealCardTest.js';

const deckOfCards = {
  deck: [
    '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', 'ts', 'js', 'qs', 'ks', 'as',
  ],
};

const dobbledigits = (int) => {
  if (int.toString().length < 2) {
    return `0${int}`;
  }
  return int;
};

const time = new Date();
// eslint-disable-next-line no-console
console.log(`\n${dobbledigits(time.getHours())}:${dobbledigits(time.getMinutes())}:${dobbledigits(time.getSeconds())} - running Tests`);

dealCardTest([...deckOfCards.deck]);
getHandTest([...deckOfCards.deck]);
