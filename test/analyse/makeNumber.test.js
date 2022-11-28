import {describe, expect, test} from '@jest/globals';
import makeNumber from "../../js/analyse/makeNumber.js";
import deck from '../utils/deck.js';

deck.forEach((card) => {
  const cardVaule = card.charAt(0);
  switch (cardVaule) {
    case 'a':
      test(`check if ${card} returs ${card}`, () => {
        expect(makeNumber(card)).toBe(14);
      });
      break;
    case 'k':
      test(`check if ${card} returs ${card}`, () => {
        expect(makeNumber(card)).toBe(13);
      });
      break;
    case 'q':
      test(`check if ${card} returs ${card}`, () => {
        expect(makeNumber(card)).toBe(12);
      });
      break;
    case 'j':
      test(`check if ${card} returs ${card}`, () => {
        expect(makeNumber(card)).toBe(11);
      });
      break;
    case 't':
      test(`check if ${card} returs ${card}`, () => {
        expect(makeNumber(card)).toBe(10);
      });
      break;
    default:
      test(`check if ${card} returs ${card}`, () => {
        expect(makeNumber(card)).toBe(cardVaule);
      });
      break;
  }
});
