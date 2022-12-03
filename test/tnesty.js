import getHandTest from './getCards/getHandTest.js';
import dealCardTest from './getCards/dealCardTest.js';
import shuffleDeckTest from './deck/shuffleDeckTest.js';
import whatHandTest from './analyse/whatHand.test.js';
import hiCardTest from './analyse/hiCardTest.js';
import onePairTest from './analyse/onePairTest.js';
import TwoPairTest from './analyse/TwoPairTest.js';
import threeOfAKindTest from './analyse/threeOfAKindTest .js';
import straightTest from './analyse/straightTest.js';
import flushTest from './analyse/flushTest.js';
import fullHouseTest from './analyse/fullHouseTest.js';
import fourOfAKindTest from './analyse/fourOfAKindTest.js';
import straightFlushTest from './analyse/straightFlushTest.js';
import getHand from '../js/getCards/getHand.js';
import deck from './utils/deck.js';

const dobbledigits = (int) => {
  if (int.toString().length < 2) {
    return `0${int}`;
  }
  return int;
};

const time = new Date();
// eslint-disable-next-line no-console
console.log(`\n${dobbledigits(time.getHours())}:${dobbledigits(time.getMinutes())}:${dobbledigits(time.getSeconds())} - running Tests`);

dealCardTest([...deck]);
getHandTest([...deck]);
shuffleDeckTest([...deck]);
hiCardTest([...hand]);
onePairTest([...hand]);
TwoPairTest([...hand]);
threeOfAKindTest([...hand]);
straightTest([...hand]);
flushTest([...hand]);
fullHouseTest([...hand]);
fourOfAKindTest([...hand]);
straightFlushTest([...hand]);
whatHandTest([...hand]);
