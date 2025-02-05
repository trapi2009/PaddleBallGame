let playerY, aiY, ballX, ballY, ballXSpeed, ballYSpeed, playerScore, aiScore, aiSpeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  playerY = height / 2;
  aiY = height / 2;
  ballX = width / 2;
  ballY = height / 2;
  ballXSpeed = 5;
  ballYSpeed = 5;
  playerScore = 0;
  aiScore = 0;
  aiSpeed = 18;
}

function draw() {
  background(0);
  
  // Draw middle line
  stroke(255);
  line(width / 2, 0, width / 2, height);
  
  // Draw paddles
  rect(20, playerY - 50, 10, 100);
  rect(width - 30, aiY - 40, 10, 80);
  
  // Update ball position
  ballX += ballXSpeed;
  ballY += ballYSpeed;
  
  // Check ball collision with walls
  if(ballY < 0 || ballY > height) {
    ballYSpeed *= -1;
  }
  
  // Check ball collision with paddles
  if(ballX < 30 && ballY > playerY - 50 && ballY < playerY + 50) {
    ballXSpeed *= -1.1;
    ballYSpeed *= 1.1;
  }
  
  if(ballX > width - 30 && ballY > aiY - 40 && ballY < aiY + 40) {
    ballXSpeed *= -1.1;
    ballYSpeed *= 1.1;
  }
  
  // Check ball collision with score walls
  if(ballX < 0) {
    aiScore++;
    resetBall();
  }
  
  if(ballX > width) {
    playerScore++;
    resetBall();
  }
  
  // Draw ball
  ellipse(ballX, ballY, 20);
  
  // Draw score
  textAlign(CENTER);
  textSize(32);
  fill(255);
  text(playerScore + " - " + aiScore, width / 2, 40);
  
  // Move AI paddle
  aiY += (ballY - aiY) * aiSpeed / 100;
  aiY = constrain(aiY, 40, height - 40);
  
  // Move player paddle
  playerY = mouseY;
  playerY = constrain(playerY, 50, height - 50);
  
  // Check if there is a winner
  if (playerScore === 7) {
    textSize(64);
    fill(0, 255, 0);
    textAlign(CENTER);
    text("You win!", width / 2, height / 2);
    noLoop();
  } else if (aiScore === 7) {
    textSize(64);
    fill(255, 0, 0);
    textAlign(CENTER);
    text("You lose!", width / 2, height / 2);
    noLoop();
  }
}

function resetBall() {
  ballX = width / 2;
  ballY = height / 2;
  ballXSpeed = 5;
  ballYSpeed = 5;
}
a