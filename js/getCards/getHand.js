import dealCard from './dealCard.js';

export default (handSize, deckOfCards) => {
  if (!Number.isInteger(handSize)) {
    return { error: 'first var neads to be a hole number' };
  }
  if (!Array.isArray(deckOfCards)) {
    return { error: 'second var neads to be a array' };
  }

  const handOfCards = [];
  for (let i = 0; i < handSize; i += 1) {
    handOfCards.push(dealCard(deckOfCards));
  }

  return { hand: handOfCards };
};
