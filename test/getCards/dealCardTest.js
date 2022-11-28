/* eslint-disable no-console */
import dealCard from '../../js/getCards/dealCard.js';

export default (deck) => {
  const resault = dealCard(deck);

  if (typeof resault !== typeof 'as') {
    console.error('dealCard test failed: resault is not of expected type');
  } else if (resault !== 'as') {
    console.error('dealCard test failed: resault not as what expected');
  } else {
    console.log('dealCard test passed');
  }
};
