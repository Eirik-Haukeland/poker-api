import makeNumber from "./makeNumber";
// TODO one pair (two cards of the same value)

export default (hand) => {
  let pair = ['0t', '0t']
  hand.foreach((card) => {
    const chardsWithSameValue = hand.filter(card[0])
      if (chardsWithSameValue.length() === 2 && makeNumber(chardsWithSameValue[0] > makeNumber(pair[0]))) {
        let pair = chardsWithSameValue;
      }
    });
    return {'handType': 'one pair', 'handCompotents': pair}
};
