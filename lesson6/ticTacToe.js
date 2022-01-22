const readline = require("readline-sync");

const GRID_WIDTH = 11;
const PLAYER_TOKEN = "x";
const COMP_TOKEN = "o";
const SCORE_TO_WIN = 3;

const WINNING_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9], // rows
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9], // columns
  [1, 5, 9],
  [3, 5, 7],
];

function displayWelcome() {
  console.clear();
  console.log("Welcome to the game of Tic-Tac-Toe");
  console.log(
    "To select a move, type the number corresponding to the position of the move."
  );
  console.log(
    'The game is best of 5. Round loser starts. Press "ENTER" to start the game.'
  );
  readline.prompt();
}

function displayAvailableMoves(board) {
  console.clear();
  console.log(`You are ${PLAYER_TOKEN}, computer is ${COMP_TOKEN}.`);
  console.log();
  console.log(` ${board[1]} | ${board[2]} | ${board[3]}`);
  console.log("-".repeat(GRID_WIDTH));
  console.log(` ${board[4]} | ${board[5]} | ${board[6]}`);
  console.log("-".repeat(GRID_WIDTH));
  console.log(` ${board[7]} | ${board[8]} | ${board[9]}`);
  console.log();
}

function execNextMove(currentPlayer, board) {
  if (currentPlayer === PLAYER_TOKEN) {
    execPlayerMove(board);
  } else {
    execCompMove(board);
  }
}

function execPlayerMove(board) {
  console.log('Please enter your move and press "ENTER"');
  let move = readline.prompt();
  while (!board.includes(move)) {
    console.log("Invalid move selected! Please try again!");
    move = readline.prompt();
  }
  board[move] = PLAYER_TOKEN;
}

function execCompMove(board) {
  let bestMove;
  let bestMoveValue = -2;

  getMoves(board).forEach((move) => {
    let boardCopy = [...board];
    boardCopy[move] = COMP_TOKEN;

    let moveValue = getMinMoveValue(boardCopy);
    if (moveValue > bestMoveValue) {
      bestMoveValue = moveValue;
      bestMove = move;
    }
  });

  board[bestMove] = COMP_TOKEN;
}

function getMinMoveValue(board) {
  if (getWinner(board)) {
    return getBoardScore(board);
  }

  let bestMoveValue = 2;
  let moves = getMoves(board);

  moves.forEach((move) => {
    let boardCopy = [...board];
    boardCopy[move] = PLAYER_TOKEN;

    let moveValue = getMaxMoveValue(boardCopy);
    if (moveValue < bestMoveValue) bestMoveValue = moveValue;
  });
  return bestMoveValue;
}

function getMaxMoveValue(board) {
  if (getWinner(board)) {
    return getBoardScore(board);
  }

  let bestMoveValue = -2;
  let moves = getMoves(board);

  moves.forEach((move) => {
    let boardCopy = [...board];
    boardCopy[move] = COMP_TOKEN;

    let moveValue = getMinMoveValue(boardCopy);
    if (moveValue > bestMoveValue) bestMoveValue = moveValue;
  });
  return bestMoveValue;
}

function getBoardScore(board) {
  if (getWinner(board) === COMP_TOKEN) return 1;
  else if (getWinner(board) === PLAYER_TOKEN) return -1;
  else return 0;
}

function getMoves(board) {
  return board.filter((position) => !Number.isNaN(Number(position)));
}

function getWinner(board) {
  let winningTok = getWinningToken(board);
  if (winningTok) return winningTok;
  // condition is true if there are no more numeric move options left
  // Tie condition should be checked last, as Player could win on last move
  else if (board.every((spot) => Number.isNaN(Number(spot)))) return "tie";
  else return null;
}

function getWinningToken(board) {
  let winningTok;
  WINNING_LINES.forEach((line) => {
    if (
      board[line[0]] === board[line[1]] &&
      board[line[1]] === board[line[2]]
    ) {
      winningTok = board[line[0]];
    }
  });
  return winningTok;
}

function playerWantsToPlayAgain() {
  console.log('Do you want to play again? Type (y/n) and press "ENTER"');
  let choice = readline.prompt().toLowerCase();
  while (!["y", "n"].includes(choice) || choice.length > 1) {
    console.log('Invalid choice, please type "y" or "n"');
    choice = readline.prompt().toLowerCase();
  }
  if (choice === "y") return true;
  else return false;
}

function displayRoundWinner(winner, board) {
  console.clear();
  displayAvailableMoves(board);
  if (winner === "tie") console.log("Well done both! It is a tie.");
  else if (winner === PLAYER_TOKEN) console.log("Well played! You win!!");
  else console.log("Computer wins :( try again next time.");
}

function displayGoodbye() {
  console.clear();
  console.log("Thank you for playing tic tac toe made by Sasha!");
}

function calculateNewScore(winner, playerScore, compScore) {
  console.log(winner);
  if (winner === PLAYER_TOKEN) return [playerScore + 1, compScore];
  else if (winner === COMP_TOKEN) return [playerScore, compScore + 1];
  else return [playerScore, compScore];
}

while (true) {
  // GAME LOOP
  displayWelcome();
  let playerScore = 0;
  let compScore = 0;
  // Current player is set outside the Round loop
  // so that loser always starts next round
  let currentPlayer = PLAYER_TOKEN;

  while (playerScore < SCORE_TO_WIN && compScore < SCORE_TO_WIN) {
    // ROUND LOOP
    let winner = null; // can be 'player', 'comp' or 'tie'
    let board = [undefined, "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    while (!winner) {
      // MOVE LOOP
      displayAvailableMoves(board);

      execNextMove(currentPlayer, board);
      currentPlayer =
        currentPlayer === PLAYER_TOKEN ? COMP_TOKEN : PLAYER_TOKEN;

      winner = getWinner(board);
    }
    displayRoundWinner(winner, board);
    [playerScore, compScore] = calculateNewScore(
      winner,
      playerScore,
      compScore
    );
    console.log(
      `Current score! Player: ${playerScore}, Computer: ${compScore}. Press "ENTER" to continue.`
    );
    readline.prompt();
  }

  if (playerScore > compScore) console.log("YOU are GRAND WINNER!");
  else console.log("Computer is grand winner!");

  if (playerWantsToPlayAgain()) {
    playerScore = 0;
    compScore = 0;
  } else {
    displayGoodbye();
    break;
  }
}
