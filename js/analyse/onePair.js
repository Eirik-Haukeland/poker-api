import makeNumber from "./makeNumber";
// TODO one pair (two cards of the same value)

export default (hand) => {
  let pair = [0, 0]
  hand.map((card, index, array) => {
    const cardValue = makeNumber(card)
    array.forEach((element, i) => {
      const elementValue= makeNumber(element);
      if (i !== index && cardValue === elementValue && cardValue > makeNumber(pair[0])) {
        pair = [card, element];
      }
    });
  });
};
