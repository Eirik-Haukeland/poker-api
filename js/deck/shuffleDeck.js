const shuffeled = [];
let i;

export default (deck) => {
  deck.forEach(card => {
    i = Math.floor(Math.random() * shuffeled.length);
    shuffeled.splice(i, 0, card);
  });

  return shuffeled;
};
