/* eslint-disable no-console */
import shuffleDeck from '../../js/deck/shuffleDeck.js';

export default (deck) => {
  const resault = shuffleDeck(deck);

  let nthCardsPlaceSame = 0;
  resault.forEach((card, index) => {
    if (card === deck[index]) {
      nthCardsPlaceSame += 1;
    }
  });

  if (nthCardsPlaceSame === deck.length) {
    console.error('shuffelDeck test failed: shuffeled deck is in the same order as the unshuffeled one');
  } else if (resault.length !== deck.length) {
    console.error('shuffleDeck test failed: shuffeled deck is not of the same length as the unshuffeled one');
  } else {
    console.log('shuffelDeck test passed');
  }
};
