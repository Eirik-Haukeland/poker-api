export default (card) => {
  console.log(card);
  switch (card.charAt(0)) {
    case 'a':
      return 14;
    case 'k':
      return 13;
    case 'q':
      return 12;
    case 'j':
      return 11;
    case 't':
      return 10;
    default:
      return card.charAt(0);
  }
};
