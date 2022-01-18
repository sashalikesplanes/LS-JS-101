// ask user for their move
// computer chooses their move
// display who won

const readline = require('readline-sync');
const VALID_CHOICE = ['rock', 'paper', 'scissors'];

let playerScore;
let compScore;

const prompt = msg => console.log(`=> ${msg}`);

const printRoundWinner = winner => {
  if (winner === 1) prompt('You won!');
  else if (winner === -1) prompt('Computer won :(');
  else prompt('It\'s a draw.');
};

const getFullChoiceFromFirstLetter = choice => {
  let fullChoice;
  switch (choice) {
    case 'r':
      fullChoice = 'rock';
      break;
    case 'p':
      fullChoice = 'paper';
      break;
    case 's':
      fullChoice = 'scissors';
      break;
  }
  return fullChoice;
};

const getPlayerChoice = () => {
  prompt(`Choose one: ${VALID_CHOICE.join(', ')}, also you can type the first letter only`);
  let choice = readline.question().toLowerCase();
  if (choice.length === 1) choice = getFullChoiceFromFirstLetter(choice);

  while (!VALID_CHOICE.includes(choice)) {
    prompt("Thats not a valid choice!");
    choice = readline.question();
  }
  return choice;
};

const getCompChoice = () => {
  let randomIdx = Math.floor(Math.random() * VALID_CHOICE.length);
  return VALID_CHOICE[randomIdx];
};

const updateScores = winner => {
  if (winner === 1) playerScore += 1;
  else if (winner === -1) compScore += 1;
};

const getWinner = (playerChoice, compChoice) => {
  // Returns 1 if player won, 0 if draw, -1 if comp won
  if ((playerChoice === 'rock' && compChoice === 'scissors') ||
  (playerChoice === 'scissors' && compChoice === 'paper') ||
  (playerChoice === 'paper' && compChoice === 'rock')) {
    return 1;
  } else if (playerChoice === compChoice) {
    return 0;
  } else {
    return -1;
  }
};

const printScore = (playerScore, compScore) => {
  prompt(`You score: ${playerScore}, computer score: ${compScore}`);
};

const keepPlaying = () => {
  prompt('Would you like to play again? (y/n)');
  let continueGame = readline.question().toLowerCase();
  while (continueGame !== 'y' && continueGame !== 'n') {
    prompt('Please enter "y" or "n"');
    continueGame = readline.question().toLowerCase();
  }

  if (continueGame === 'y') return true;
  else return false;
};

const printGrandWinner = () => {
  if (playerScore === 3) {
    console.log('You are grand winner!');
  } else if (compScore === 3) {
    console.log('Computer is grand winner!');
  }
};

const resetGame = (resetScores = false) => {
  if (resetScores) {
    playerScore = 0;
    compScore = 0;
    console.clear();
  } else {
    readline.question('Press "ENTER" for next round!\n');
    console.clear();
  }
};

console.clear();
prompt(`Welcome to ${VALID_CHOICE.join(', ')}. First to 3 points wins!`);

playerScore = 0;
compScore = 0;

while (true) {
  let playerChoice = getPlayerChoice();
  let compChoice = getCompChoice();
  let winner = getWinner(playerChoice, compChoice);
  updateScores(winner);

  prompt(`You chose ${playerChoice}, Computer chose ${compChoice}`);

  printRoundWinner(winner);

  printScore(playerScore, compScore);

  printGrandWinner();

  if (playerScore === 3 || compScore === 3) {
    if (keepPlaying()) resetGame(true);
    else break;
  } else resetGame();
}