import whatHand from '../../js/analyse/whatHand.js'
import {describe, expect, test} from '@jest/globals';

test('checks that the hand returns the higest available hand', () => {
  expect(whatHand(['ah', '1h', '9h', '5h', 'th'])).toBe('flush');
});
