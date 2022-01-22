const readline = require("readline-sync");

const SUITS = ["Hearts", "Diamonds", "Spades", "Clubs"];
const VALUES = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
  "Ace",
];

let dealerHand = [];
let playerHand = [];
let dealerIsBust = false;
let playerIsBust = false;

let deck = [];

function displayWelcome() {
  console.clear();
  console.log("Welcome to the game of 21!");
  console.log('Press "ENTER" to start the game!');
  readline.prompt();
}

function initializeDeck(deck) {
  VALUES.forEach((value) => {
    SUITS.forEach((suit) => deck.push([value, suit]));
  });
}

function shuffleDeck(deck, timesToShuffle = 5) {
  for (let idx = 0; idx < timesToShuffle; idx++) shuffleDeckOnce(deck);
}

function shuffleDeckOnce(deck) {
  for (let idx = deck.length - 1; idx > 0; idx--) {
    let swapIdx = Math.floor(Math.random() * (idx + 1));
    [deck[idx], deck[swapIdx]] = [deck[swapIdx], deck[idx]];
  }
}

const dealCardDealer = (deck) => dealerHand.push(deck.pop());
const dealCardPlayer = (deck) => playerHand.push(deck.pop());

function dealInitialCards(deck) {
  dealCardDealer(deck);
  dealCardDealer(deck);
  dealCardPlayer(deck);
  dealCardPlayer(deck);
}

function displayHands(hideDealer = true) {
  console.clear();
  let dealerHandString = getHandString(dealerHand, hideDealer);
  let playerHandString = getHandString(playerHand);
  console.log(`Dealer has: ${dealerHandString}`);
  console.log(`You have: ${playerHandString}`);
}

function getHandString(hand, hideCard = false) {
  let handString;
  if (hideCard) {
    handString = `${hand[0][0]} of ${hand[0][1]} and hidden card.`;
  } else {
    handString = joinOr(
      hand.map((card) => `${card[0]} of ${card[1]}`),
      ", ",
      "and"
    );
  }
  return handString;
}

function joinOr(array, sep = ", ", lastWord = "or") {
  if (array.length === 0) return "";
  else if (array.length === 1) return String(array[0]);
  else if (array.length === 2) return `${array[0]} ${lastWord} ${array[1]}`;
  return (
    array.slice(0, -1).join(sep) +
    sep +
    lastWord +
    " " +
    array[array.length - 1]
  );
}

initializeDeck(deck);

shuffleDeck(deck);

dealInitialCards(deck);

function playerHits() {
  console.log('Will you "hit" or "stay"?');
  let playerChoice = readline.prompt().toLowerCase();
  while (!["hit", "stay"].includes(playerChoice)) {
    console.log('Please type either "hit" or "stay"');
    playerChoice = readline.prompt().toLowerCase();
  }
  if (playerChoice === "hit") return true;
  else return false;
}

function dealerHits() {
  if (getHandScore(dealerHand) < 17) return true;
  else return false;
}

function isBust(hand) {
  let handScore = getHandScore(hand);
  if (handScore > 21) return true;
  else return false;
}

function getHandScore(hand) {
  let handSum = 0;
  let numOfAces = 0;
  hand.forEach((card) => {
    card = card[0];
    if (!Number.isNaN(Number(card))) handSum += Number(card);
    else if (["Jack", "Queen", "King"].includes(card)) handSum += 10;
    else {
      handSum += 11;
      numOfAces += 1;
    }
  });
  while (numOfAces > 0 && handSum > 21) {
    handSum -= 10;
    numOfAces -= 1;
  }
  return handSum;
}

function displayWinner() {
  if (playerIsBust) console.log("You are bust, Dealer wins!");
  else if (dealerIsBust) console.log("Dealer is bust, you Win!");
  else {
    let dealerScore = getHandScore(dealerHand);
    let playerScore = getHandScore(playerHand);
    console.log(
      `Your hand is worth: ${playerScore}, dealer's hand is worth: ${dealerScore}`
    );
    if (playerScore > dealerScore) console.log("You win!");
    else if (playerScore < dealerScore) console.log("Dealer wins :(");
    else console.log("It is a tie!");
  }
}

const displayGoodbye = () => console.log("Thanks for playing!");

displayWelcome();

displayHands();
while (!playerIsBust && playerHits()) {
  dealCardPlayer(deck);
  displayHands();
  playerIsBust = isBust(playerHand);
}

if (playerIsBust) {
  displayWinner();
} else {
  while (!dealerIsBust && dealerHits(dealerHand)) {
    dealCardDealer(deck);
    displayHands(false);
    console.log('Dealer Hits, press "ENTER" to continue.');
    dealerIsBust = isBust(dealerHand);
    readline.prompt();
  }
  displayWinner();
}
displayGoodbye();
