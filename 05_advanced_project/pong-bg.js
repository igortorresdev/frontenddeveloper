
const canvas = document.querySelector("#pong-bg");
const ctx = canvas.getContext("2d");

const cellSize = 32;
const colors = ["#264653", "#e9c46a"];
const balls = [
  { x: 100, y: 100, vx: 2, vy: 2.5, owner: 0 },
  { x: 300, y: 200, vx: -2.5, vy: -2, owner: 1 },
];

let grid = [];
let columns = 0;
let rows = 0;

function createGrid() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  columns = Math.ceil(canvas.width / cellSize);
  rows = Math.ceil(canvas.height / cellSize);

  grid = Array.from({ length: rows }, (_, row) =>
    Array.from({ length: columns }, (_, col) =>
      (row + col) % 2
    )
  );

  balls.forEach((ball) => {
    ball.x = Math.random() * canvas.width;
    ball.y = Math.random() * canvas.height;
  });
}

function updateBall(ball) {
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.x <= 0 || ball.x >= canvas.width) {
    ball.vx *= -1;
    ball.x = Math.max(0, Math.min(canvas.width, ball.x));
  }

  if (ball.y <= 0 || ball.y >= canvas.height) {
    ball.vy *= -1;
    ball.y = Math.max(0, Math.min(canvas.height, ball.y));
  }

  const col = Math.min(columns - 1, Math.floor(ball.x / cellSize));
  const row = Math.min(rows - 1, Math.floor(ball.y / cellSize));

  grid[row][col] = ball.owner;
}

function drawGrid() {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      ctx.fillStyle = colors[grid[row][col]];
      ctx.fillRect(
        col * cellSize,
        row * cellSize,
        cellSize,
        cellSize
      );
    }
  }
}

function drawBall(ball) {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, 8, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
}

function gameLoop() {
  drawGrid();

  balls.forEach((ball) => {
    updateBall(ball);
    drawBall(ball);
  });

  requestAnimationFrame(gameLoop);
}

window.addEventListener("resize", createGrid);

createGrid();
gameLoop();
