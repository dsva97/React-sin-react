(() => {
  // src/components/Card/script.js
  var cards = [...document.querySelectorAll(".card")];
  var handler = (card) => () => alert(card.querySelector("h1").innerText);
  var setEvent = (card) => card.addEventListener("click", handler(card));
  cards.forEach(setEvent);
  console.log(cards);
})();
