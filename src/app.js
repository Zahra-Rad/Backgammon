const selectors = document.querySelectorAll(".selectors");
const arrows = document.querySelectorAll(".arrows");

// Adding BG Arrows

function addArrowsTop(i) {
  for (let j = 0; j < 6; j++) {
    let arrow = document.createElement("div");
    if (j % 2 === 0) {
      arrow.classList.add("arrow-down", "odd");
      arrows[i].appendChild(arrow);
    } else {
      arrow.classList.add("arrow-down", "even");
      arrows[i].appendChild(arrow);
    }
  }
}

function addArrowsBottom(i) {
  for (let j = 0; j < 6; j++) {
    let arrow = document.createElement("div");
    if (j % 2 === 0) {
      arrow.classList.add("arrow-up", "odd");
      arrows[i].appendChild(arrow);
    } else {
      arrow.classList.add("arrow-up", "even");
      arrows[i].appendChild(arrow);
    }
  }
}

for (let i = 0; i < 4; i++) {
  i % 2 === 0 ? addArrowsTop(i) : addArrowsBottom(i);
}

// Adding Cells & Players

let cells = [
  {
    name: 1,
    id: "tr1", //top-right-1
    pieces_in: 2,
    pieces_color: "w", //white
    html_element: document.querySelector("#tr1"),
  },
  {
    name: 2,
    id: "tr2", //top-right-2
    pieces_in: 0,
    pieces_color: "",
    html_element: document.querySelector("#tr2"),
  },
  {
    name: 3,
    id: "tr3", //top-right-3
    pieces_in: 0,
    pieces_color: "",
    html_element: document.querySelector("#tr3"),
  },
  {
    name: 4,
    id: "tr4", //top-right-4
    pieces_in: 0,
    pieces_color: "",
    html_element: document.querySelector("#tr4"),
  },
  {
    name: 5,
    id: "tr5", //top-right-5
    pieces_in: 0,
    pieces_color: "",
    html_element: document.querySelector("#tr5"),
  },
  {
    name: 6,
    id: "tr6", //top-right-6
    pieces_in: 5,
    pieces_color: "r", //red
    html_element: document.querySelector("#tr6"),
  },
  {
    name: 7,
    id: "tl7", //top-left-7
    pieces_in: 0,
    pieces_color: "",
    html_element: document.querySelector("#tl7"),
  },
  {
    name: 8,
    id: "tl8", //top-left-8
    pieces_in: 3,
    pieces_color: "r", //red
    html_element: document.querySelector("#tl8"),
  },
  {
    name: 9,
    id: "tl9", //top-left-9
    pieces_in: 0,
    pieces_color: "",
    html_element: document.querySelector("#tl9"),
  },
  {
    name: 10,
    id: "tl10", //top-left-10
    pieces_in: 0,
    pieces_color: "",
    html_element: document.querySelector("#tl10"),
  },
  {
    name: 11,
    id: "tl11", //top-left-11
    pieces_in: 0,
    pieces_color: "",
    html_element: document.querySelector("#tl11"),
  },
  {
    name: 12,
    id: "tl12", //top-left-12
    pieces_in: 5,
    pieces_color: "w", //white
    html_element: document.querySelector("#tl12"),
  },
  {
    name: 13,
    id: "bl13", //bottom-left-13
    pieces_in: 5,
    pieces_color: "r", //red
    html_element: document.querySelector("#bl13"),
  },
  {
    name: 14,
    id: "bl14", //bottom-left-14
    pieces_in: 0,
    pieces_color: "",
    html_element: document.querySelector("#bl14"),
  },
  {
    name: 15,
    id: "bl15", //bottom-left-15
    pieces_in: 0,
    pieces_color: "",
    html_element: document.querySelector("#bl15"),
  },
  {
    name: 16,
    id: "bl16", //bottom-left-16
    pieces_in: 0,
    pieces_color: "",
    html_element: document.querySelector("#bl16"),
  },
  {
    name: 17,
    id: "bl17", //bottom-left-17
    pieces_in: 3,
    pieces_color: "w", //white
    html_element: document.querySelector("#bl17"),
  },
  {
    name: 18,
    id: "bl18", //bottom-left-18
    pieces_in: 0,
    pieces_color: "",
    html_element: document.querySelector("#bl18"),
  },
  {
    name: 19,
    id: "br19", //bottom-right-19
    pieces_in: 5,
    pieces_color: "w", //white
    html_element: document.querySelector("#br19"),
  },
  {
    name: 20,
    id: "br20", //bottom-right-20
    pieces_in: 0,
    pieces_color: "",
    html_element: document.querySelector("#br20"),
  },
  {
    name: 21,
    id: "br21", //bottom-right-21
    pieces_in: 0,
    pieces_color: "",
    html_element: document.querySelector("#br21"),
  },
  {
    name: 22,
    id: "br22", //bottom-right-22
    pieces_in: 0,
    pieces_color: "",
    html_element: document.querySelector("#br22"),
  },
  {
    name: 23,
    id: "br23", //bottom-right-23
    pieces_in: 0,
    pieces_color: "",
    html_element: document.querySelector("#br23"),
  },
  {
    name: 24,
    id: "br24", //bottom-right-24
    pieces_in: 2,
    pieces_color: "r", //red
    html_element: document.querySelector("#br24"),
  },
];

for (let i = 12; i > 0; i--) {
  let selector = document.createElement("div");
  selector.classList.add("column");
  selector.id = cells[i - 1].id;
  if (i > 6) {
    selectors[0].appendChild(selector);
  } else {
    selectors[2].appendChild(selector);
  }
}

for (let i = 13; i < 25; i++) {
  let selector = document.createElement("div");
  selector.classList.add("column");
  selector.id = cells[i - 1].id;
  if (i < 19) {
    selectors[1].appendChild(selector);
  } else {
    selectors[3].appendChild(selector);
  }
}

let players = [
  {
    name: "p1",
    color: "w",
    hit_pieces: 0,
    moves_left: [],
    player_turn: 0,
  },
  {
    name: "p2",
    color: "r",
    hit_pieces: 0,
    moves_left: [],
    player_turn: 1,
  },
];

//Pieces in Place

let pieces = [];

for (let i = 0; i < 15; i++) {
  const p1Start = document.querySelector("#start-piece-holder-p1");
  let verticalPiece = document.createElement("div");
  verticalPiece.classList.add("piece-vertic-white");
  p1Start.appendChild(verticalPiece);
  pieces.push(verticalPiece);
}

for (let i = 0; i < 15; i++) {
  const p2Start = document.querySelector("#start-piece-holder-p2");
  let verticalPiece = document.createElement("div");
  verticalPiece.classList.add("piece-vertic-red");
  p2Start.appendChild(verticalPiece);
  pieces.push(verticalPiece);
}

// Roll Dice

const message = document.querySelector(".message");
const rollButton = document.querySelector(".dice-generator");
const dicePlace = document.querySelector(".dices");
const dices = document.querySelectorAll(".dice");

let diceFaces = [
  "images/dice-six-faces-one.png",
  "images/dice-six-faces-two.png",
  "images/dice-six-faces-three.png",
  "images/dice-six-faces-four.png",
  "images/dice-six-faces-five.png",
  "images/dice-six-faces-six.png",
];

let is_starting = true;

function rollDice() {
  hideRollButton();
  let diceNumber1 = Math.floor(Math.random() * 6) + 1;
  dices[0].innerHTML = `<img src=${diceFaces[diceNumber1 - 1]}>`;
  let diceNumber2 = Math.floor(Math.random() * 6) + 1;
  dices[1].innerHTML = `<img src=${diceFaces[diceNumber2 - 1]}>`;
  diceNumbers = [diceNumber1, diceNumber2];
  setTimeout(rotateDice, 500);
  return diceNumbers;
}

function resetDice() {
  dices[0].innerHTML = "";
  dices[1].innerHTML = "";
  message.innerHTML = "";
  dicePlace.classList.remove("rotate-dices");
  showRollButton();
}

function rotateDice() {
  dicePlace.classList.add("rotate-dices");
}

function hideRollButton() {
  rollButton.classList.add("hidden");
}

function showRollButton() {
  rollButton.classList.remove("hidden");
}

function rollButtonFunction() {
  is_starting ? firstTurnDefiner() : playTurn();
  is_starting = false;
}

//Starting and Setting Pieces on Board

const start = document.querySelector(".start-button");

function addPieces(cell) {
  for (let i = 0; i < cell.pieces_in; i++) {
    let piece = document.createElement("div");
    if (cell.pieces_color === "r") {
      piece.classList.add("coin-red");
    } else {
      piece.classList.add("coin-white");
    }
    cellElement = document.getElementById(cell.id);
    cellElement.appendChild(piece);
  }
}

function startGame() {
  start.classList.add("hidden");
  for (let i = 0; i < 30; i++) {
    pieces[i].remove();
  }
  for (let i = 0; i < 24; i++) {
    if (cells[i].pieces_in !== 0) addPieces(cells[i]);
  }
  showRollButton();
  rollButton.addEventListener("click", rollButtonFunction);
  message.innerHTML = "Roll the dice to see whose turn it is to start!";
}

start.addEventListener("click", startGame);

// Determning First Player

let player_turn;

function firstMove(diceNumbers) {
  diceNumbers[0] === diceNumbers[1] ? firstTurnDefiner() : null;
  diceNumbers[0] > diceNumbers[1] ? (player_turn = 0) : (player_turn = 1);
  message.innerHTML = `player ${player_turn + 1} starts the game...`;
  setTimeout(resetDice, 2000);
  rollButton.addEventListener("click", rollButtonFunction);
  return player_turn;
}

function changeTurn() {
  player_turn = (player_turn + 1) % 2;
}

function firstTurnDefiner() {
  firstMove(rollDice());
}

function double_checker(diceNumbers) {
  if (diceNumbers[0] === diceNumbers[1]) {
    diceNumbers.push(diceNumbers[0]);
    diceNumbers.push(diceNumbers[0]);
  }
  return diceNumbers;
}

function available_moves(diceNumbers) {
  let moves = [];
  if ((diceNumbers.legth = 2)) {
    moves = [diceNumbers[0], diceNumbers[1], diceNumbers[0] + diceNumbers[1]];
  } else {
    moves = [
      diceNumbers[0],
      diceNumbers[0] * 2,
      diceNumbers[0] * 3,
      diceNumbers[0] * 4,
    ];
  }
  return moves;
}

function mark_available_cells(player, availableIndex) {
  if (
    availableIndex.pieces_color !== players[player].color &&
    availableIndex.pieces_in > 1
  ) {
    null;
  } else {
    let availableCell = document.getElementById(availableIndex.id);
    availableCell.classList.add("available");
  }
}

function available_cells_checker(player, diceNumbers) {
  console.log(diceNumbers);
  let moves = available_moves(diceNumbers);
  let availableIndex;
  console.log(moves);
  if (player === 0) {
    for (let i = 0; i < 24; i++) {
      if (cells[i].pieces_color === "w") {
        for (let j = 0; j < moves.length; j++) {
          availableIndex = cells[i + moves[j]];
          mark_available_cells(player, availableIndex);
        }
      }
    }
  } else {
    for (let i = 23; i >= 0; i--) {
      if (cells[i].pieces_color === "r") {
        for (let j = 0; j < moves.length; j++) {
          availableIndex = cells[i - moves[j]];
          mark_available_cells(player, availableIndex);
        }
      }
    }
  }
}

function move_player(player, diceNumbers) {}

function playTurn() {
  // let player_turn = player_turn;
  console.log(player_turn);

  let diceNumbers = double_checker(rollDice());
  console.log(diceNumbers);

  available_cells_checker(player_turn, diceNumbers);

  // move_player(player_turn, diceNumbers);
  changeTurn();
  console.log(player_turn);
}
