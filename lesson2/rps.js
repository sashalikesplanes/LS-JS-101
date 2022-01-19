// ask user for their move
// computer chooses their move
// display who won

const readline = require('readline-sync');
const VALID_CHOICE = ['rock', 'paper', 'scissors'];
const ONE_LETTER_TO_CHOICE = {
  r: 'rock',
  p: 'paper',
  s: 'scissors',
};
const WINNING_MOVES = ['rockscissors', 'scissorspaper', 'paperrock'];
const NUM_OF_POINTS_TO_WIN = 3;

let playerScore;
let compScore;

const prompt = msg => console.log(`=> ${msg}`);

const printRoundWinner = winner => {
  if (winner === 'player') prompt('You won!');
  else if (winner === 'computer') prompt('Computer won :(');
  else prompt('It\'s a draw.');
};

const getFullChoiceFromFirstLetter = choice => {
  if (ONE_LETTER_TO_CHOICE[choice.toLowerCase()[0]]) {
    return ONE_LETTER_TO_CHOICE[choice.toLowerCase()[0]];
  } else return '';
};

const getPlayerChoice = () => {
  prompt(`Choose one: ${VALID_CHOICE.join(', ')}, also you can type the first letter only`);
  let choice = getFullChoiceFromFirstLetter(readline.question());

  while (!VALID_CHOICE.includes(choice)) {
    prompt("Thats not a valid choice!");
    choice = getFullChoiceFromFirstLetter(readline.question());
  }
  return choice;
};

const getCompChoice = () => {
  let randomIdx = Math.floor(Math.random() * VALID_CHOICE.length);
  return VALID_CHOICE[randomIdx];
};

const updateScores = winner => {
  if (winner === 'player') playerScore += 1;
  else if (winner === 'computer') compScore += 1;
};

const getWinner = (playerChoice, compChoice) => {
  // Returns 1 if player won, 0 if draw, -1 if comp won
  if (playerChoice === compChoice) return 'tie';
  const moveCombo = playerChoice + compChoice;
  if (WINNING_MOVES.includes(moveCombo)) return 'player';
  else return 'computer';
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
  if (playerScore === NUM_OF_POINTS_TO_WIN) {
    console.log('You are grand winner!');
  } else if (compScore === NUM_OF_POINTS_TO_WIN) {
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
prompt(`Welcome to ${VALID_CHOICE.join(', ')}. First to ${NUM_OF_POINTS_TO_WIN} points wins!`);

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

  if (playerScore === NUM_OF_POINTS_TO_WIN
      || compScore === NUM_OF_POINTS_TO_WIN) {
    if (keepPlaying()) resetGame(true);
    else {
      prompt('Thank you for playing! Press "ENTER" to exit the game.');
      readline.question();
      break;
    }
  } else resetGame();
}