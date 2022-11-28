/* eslint-disable no-console */
import makeNumber from '../../js/analyse/makeNumber.js';
import hiCard from '../../js/analyse/hiCard.js';

export default (hand) => {
  console.log(hand);
  console.log(hiCard(hand));
  const resault = makeNumber(hiCard(hand));

  hand.forEach((card) => {
    if (makeNumber(card) > resault.card) {
      console.error('hiCard test failed: there is an other card whit i higer value in this hand');
    } else {
      console.error('hiCard test passed');
    }
  });
};
