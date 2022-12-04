import hiCard from './hiCard.js';
import onePair from './onePair.js';
import twoPair from './twoPair.js';
import threeOfAKind from './threeOfAKind.js';
import straight from './straight.js';
import flush from './flush.js';
import fullHouse from './fullHouse.js';
import straightFlush from './straightFlush.js';

// TODO make a function that checs if the hand has enni of thees hands and returns the best one

export default (hand) => {
  if (straightFlush(hand)) {
    return "straightflush";
  } else if (fullHouse(hand)) {
    return "fullHouse";
  } else if (flush(hand)) {
    return 'flush';
  } else if (straight(hand)) {
    return 'straight';
  } else if (threeOfAKind(hand)) {
    return 'threeOfAKind';
  } else if (twoPair(hand)) {
    return 'twoPair';
  } else if (onePair(hand)) {
    return 'onePair';
  } else if (hiCard(hand).handType === 'hiCard') {    
    return 'hiCard';
  }
};
