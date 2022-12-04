import makeNumber from "./makeNumber.js";
// TODO hi card (the higest value card in a hand)

export default (hand) => {
  const cardsWhitValue = [];
  hand.forEach(card => {
    cardsWhitValue.push({'card': hand, 'value': makeNumber(card)});
  });

  let value = 0;
  let higestCard
  cardsWhitValue.forEach((card, index) => {
    if (card.value > value) {
      value = card.value
      higestCard = card
    }
  })
  return {'handType': 'hiCard', 'handCompotents': higestCard.card}
};
