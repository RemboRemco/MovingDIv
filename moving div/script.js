const player = document.getElementById("player");
const container = document.getElementById("game-container");
const startStopBtn = document.getElementById("start-stop-btn");
const resetBtn = document.getElementById("reset-btn");

let playerLeft = 0;
let playerTop = 0;
let playerSpeedX = 5;
let playerSpeedY = 5;
let isMoving = false;
let moveInterval;

startStopBtn.addEventListener("click", () => {
  if (!isMoving) {
    isMoving = true;
    startStopBtn.textContent = "Stop";
    moveInterval = setInterval(movePlayer, 20);
  } else {
    isMoving = false;
    startStopBtn.textContent = "Start";
    clearInterval(moveInterval);
  }
});

resetBtn.addEventListener("click", () => {
  playerLeft = 10;
  playerTop = 10;
  player.style.left = playerLeft + "px";
  player.style.top = playerTop + "px";
});

function movePlayer() {
  playerLeft += playerSpeedX;
  playerTop += playerSpeedY;

  if (playerLeft >= container.clientWidth - player.clientWidth) {
    playerLeft = container.clientWidth - player.clientWidth;
    playerSpeedX = -playerSpeedX;
  } else if (playerLeft < 0) {
    playerLeft = 0;
    playerSpeedX = -playerSpeedX;
  }

  if (playerTop >= container.clientHeight - player.clientHeight) {
    playerTop = container.clientHeight - player.clientHeight;
    playerSpeedY = -playerSpeedY;
  } else if (playerTop < 0) {
    playerTop = 0;
    playerSpeedY = -playerSpeedY;
  }

  player.style.left = playerLeft + "px";
  player.style.top = playerTop + "px";
}
