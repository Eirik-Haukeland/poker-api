import getHandTest from './getHandTest.js';
import dealCardTest from './dealCardTest.js';
import shuffleDeckTest from './shuffleDeckTest.js';

const deckOfCards = {
  deck: [
    '1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', 'th', 'jh', 'qh', 'kh', 'ah',
    '1k', '2k', '3k', '4k', '5k', '6k', '7k', '8k', '9k', 'tk', 'jk', 'qk', 'kk', 'ak',
    '1r', '2r', '3r', '4r', '5r', '6r', '7r', '8r', '9r', 'tr', 'jr', 'qr', 'kr', 'ar',
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
shuffleDeckTest([...deckOfCards.deck]);
