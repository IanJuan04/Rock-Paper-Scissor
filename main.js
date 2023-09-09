// Score Board
const userScoreCount = document.getElementById("user-score-count");
const drawScoreCount = document.getElementById("draw-score-count");
const computerScoreCount = document.getElementById("computer-score-count");

// Weapons button
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");

// Battle Weapon
const userBattleWeapon = document.getElementById("user-battle-weapon");
const computerBattleWeapon = document.getElementById("computer-battle-weapon");

//score board
let userScore = 0;
let drawScore = 0;
let computerScore = 0;

// Win Lose Condition
function playRound(userWeapon, computerWeapon) {
  if (userWeapon === computerWeapon) {
    return "Draw";
  } else if (
    (userWeapon === "rock" && computerWeapon === "scissor") ||
    (userWeapon === "paper" && computerWeapon === "rock") ||
    (userWeapon === "scissor" && computerWeapon === "paper")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

// Computer Weapon Selection
function getComputerWeapon() {
  const weapons = ["rock", "paper", "scissor"];
  const randomIndex = Math.round(Math.random() * (weapons.length - 1));
  return weapons[randomIndex];
}

//
function gameHandler(userWeapon) {
  const computerSelection = getComputerWeapon();
  const userSelection = userWeapon.toLowerCase();

  userBattleWeapon.textContent = userSelection;
  computerBattleWeapon.textContent = computerSelection;

  const result = playRound(userSelection, computerSelection);

  if (result === "You Win!") {
    userScore++;
    userScoreCount.textContent = userScore;
  } else if (result === "You Lose!") {
    computerScore++;
    computerScoreCount.textContent = computerScore;
  } else {
    drawScore++;
    drawScoreCount.textContent = drawScore;
  }
}

// Event
rockBtn.addEventListener("click", () => gameHandler(rockBtn.textContent));
paperBtn.addEventListener("click", () => gameHandler(paperBtn.textContent));
scissorBtn.addEventListener("click", () => gameHandler(scissorBtn.textContent));
