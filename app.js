function startGame() {
  for (let i = 1; i <= 9; i += 1) {
    clearBox(i);
  }
}

const playText = document.getElementById("playText");
const restartBtn = document.getElementById("restartBtn");
const spaces = [];

let cells = document.querySelectorAll(".row > div");

let turnCounter = 0;

// let winner = [[cells[0]], [cells[1]], [cells[2]],
//             [cells[3], cells[4], cells[5]],
//             [cells[6], cells[7], cells[8]],
//             [cells[0], cells[3], cells[6]],
//             [cells[1], cells[4], cells[7]],
//             [cells[2], cells[5], cells[8]],
//             [cells[2], cells[4], cells[6]],
//             [cells[0], cells[4], cells[8]],
//         ]

const hasPlayerWon = (player) => {
  console.log("test");
  console.log(cells[0]);
  //from top left, check across, down, and diagonal
  if (cells[0].textContent === player) {
    if (cells[1].textContent === player && cells[2].textContent === player) {
      setTimeout(function () {
        alert(`${player} wins up top!`);
      }, 0);
      return true;
    }
    if (cells[3].textContent === player && cells[6].textContent === player) {
      setTimeout(function () {
        alert(`${player} wins on the left!`);
      }, 0);
      return true;
    }
    if (cells[4].textContent === player && cells[8].textContent === player) {
      setTimeout(function () {
        alert(`${player} wins on the diagonal!`);
      }, 0);
      return true;
    }
  }
  //from bottom check up and across
  if (cells[8].textContent === player) {
    if (
      cells[2].textContent === player.textContent &&
      cells[5].textContent === player
    ) {
      setTimeout(function () {
        alert(`${player} wins on the right!`);
      }, 0);
      return true;
    }
    if (cells[7].textContent === player && cells[6].textContent === player) {
      setTimeout(function () {
        alert(`${player} wins on the bottom!`);
      }, 0);
      return true;
    }
  }
  //from middle check middle vertical and middle horizontal
  if (cells[4].textContent === player) {
    if (cells[3].textContent === player && cells[5].textContent === player) {
      setTimeout(function () {
        alert(`${player} wins on the middle horizontal!`);
      }, 0);
      return true;
    }
    if (cells[1].textContent === player && cells[7].textContent === player) {
      setTimeout(function () {
        alert(`${player} wins on the middle vertical!`);
      }, 0);
      return true;
    }
  }
  //from middle check middle upper and middle left
  if (cells[2].textContent === player) {
    if (cells[4].textContent === player && cells[6].textContent === player) {
      setTimeout(function () {
        alert(`${player} wins on the middle horizontal!`);
      }, 0);
      return true;
    }
    if (cells[1].textContent === player && cells[7].textContent === player) {
      setTimeout(function () {
        alert(`${player} wins on the diagonal!`);
      }, 0);
     return true;
    }
    if (cells[5].textContent === player && cells[8].textContent === player) {
        setTimeout(function () {
          alert(`${player} wins on the right vertical!`);
        }, 0);
        return true;
      }
  }
};

// cells[1].textContent;

// console.log(cells);

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

function cellClicked(event) {
  if (turnCounter % 2 == 0) {
    event.target.textContent = "X";
    hasPlayerWon("X");
  } else {
    event.target.textContent = "O";
    hasPlayerWon("O");
  }
  turnCounter++;
}

restartBtn.addEventListener("click", () => {
  spaces.forEach((space, index) => {
    spaces[index] = null;
  });
  cells.forEach((cells) => {
    cells.innerText = "";
  });
  playText.innerHTML = `Let's Play!!`;
  turnCounter = 0;
});
