/* eslint-disable no-console */
import getHand from '../../js/getCards/getHand.js';

const handSize = 5;
const testArray = ['as', 'ks', 'qs', 'js', 'ts'];
let arrayIsMalformed = false;

export default (deck) => {
  const resault = getHand(handSize, deck);

  resault.hand.forEach((card, index) => {
    if (card !== testArray[index]) {
      arrayIsMalformed = true;
    }
  });

  if (resault.hand.length !== handSize) {
    console.error(`getHand test failed: expected ${handSize} cards got ${resault.hand.length}`);
  } else if (arrayIsMalformed === true) {
    console.error(`getHand test failed: expected "${testArray}" but got "${resault.hand}"`);
  } else {
    console.log('getHand test passed');
  }
};
