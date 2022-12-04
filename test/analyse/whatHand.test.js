import whatHand from '../../js/analyse/whatHand.js'
import {describe, expect, test} from '@jest/globals';


describe('check the function of what hand', () => {
  test('check if it findes a straightflush', () => {
    expect(whatHand(['ah', 'jh', 'kh', 'qh', 'th'])).toBe('straightflush');
  });
  test('check if it findes a fullHouse', () => {
    expect(whatHand(['ah', 'ar', '9h', '9r', '9k'])).toBe('fullHouse');
  });
  test('check if it findes a flush', () => {
    expect(whatHand(['ar', '2k', '3k', '5h', '4s'])).toBe('flush');
  });
  test('check if it findes a straight', () => {
    expect(whatHand(['ah', '1h', '9h', '5h', 'th'])).toBe('straight');
  });
  test('check if it findes a threeOfAKind', () => {
    expect(whatHand(['ah', '1h', '9h', '5h', 'th'])).toBe('threeOfAKind');
  });
  test('check if it findes a twoPair', () => {
    expect(whatHand(['ah', '1h', '1r', '5h', '1k'])).toBe('twoPair');
  });
  test('check if it findes a onePair', () => {
    expect(whatHand(['tr', '1h', '9h', '5h', 'th'])).toBe('onePair');
  }); 
  test('check if it findes a hiCard', () => {
    expect(whatHand(['ah', '1h', '9h', '5h', 'th'])).toBe('hiCard');
  });
})
