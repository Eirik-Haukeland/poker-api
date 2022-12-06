import whatHand from '../../js/analyse/whatHand.js'
import {describe, expect, test} from '@jest/globals';


describe('check the function of what hand', () => {
  test('check if it findes a straightflush', () => {
    expect(whatHand(['ah', 'jh', 'kh', 'qh', 'th'])).toBe('straight flush');
  });
  test('check if it findes a fullHouse', () => {
    expect(whatHand(['ah', 'ar', '9h', '9r', '9k'])).toBe('full house');
  });
  test('check if it findes a flush', () => {
    expect(whatHand(['ar', '2k', '3k', '5h', '4s'])).toBe('flush');
  });
  test('check if it findes a straight', () => {
    expect(whatHand(['ah', '1h', '9h', '5h', 'th'])).toBe('straight');
  });
  test('check if it findes a threeOfAKind', () => {
    expect(whatHand(['ah', '1h', '9h', '5h', 'th'])).toBe('three of a kind');
  });
  test('check if it findes a twoPair', () => {
    expect(whatHand(['ah', '1h', '1r', '5h', '1k'])).toBe('two pair');
  });
  test('check if it findes a onePair', () => {
    expect(whatHand(['tr', '1h', '9h', '5h', 'th'])).toBe('one pair');
  }); 
  test('check if it findes a high Card', () => {
    expect(whatHand(['ah', '1h', '9h', '5h', 'th'])).toBe('high card');
  });
})
