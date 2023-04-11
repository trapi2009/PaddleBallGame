//create the ball sprite
var ball = createSprite(200,200,10,10);
ball.setAnimation("soccer_yellow_1");

//create Player Paddle Sprite on the right edge
var playerPaddle = createSprite(390,200,10,100);
playerPaddle.shapeColor = "red";

//create Computer Paddle sprite on the left edge
var playerPaddleai = createSprite(9,9,10,100);
playerPaddleai.shapeColor = "purple";

//variable to store different state of game
var gameState = "serve";

//variables to keep the score
var compScore = 0;
var playerScore = 0;

//create edge boundaries
createEdgeSprites();
ball.bounceOff(playerPaddle);

function draw() {
//clear the screen
background("white");
textSize(20);


//place info text in the center
if (gameState == "serve") {
text("Mouse press to Serve",120,180);
}
//display scores
text(compScore, 170,20);
text(playerScore, 230,20);

//make the player paddle move with the mouse's y position
playerPaddle.y = World.mouseY;

//AI for the computer paddle
//make it move with the ball's y position
playerPaddleai.y = ball.y;

//make the ball bounce with the top and the bottom edges
ball.bounceOff(edges[2]);
ball.bounceOff(edges[3]);

//bounce ball from player paddle
ball.bounceOff(playerPaddle);

//bounce ball from computer paddle.
ball.bounceOff(playerPaddleai);

drawSprites();

//reset the ball to the center if it crosses the screen
if(ball.x > 395 || ball.x <5) {


if(ball.x > 395) {
  compScore = compScore + 1; //increase computer score
}

if(ball.x < 5) {
  playerScore = playerScore + 1; //increase player score
}

reset();
gameState = "serve";
}

if (playerScore == 5 || compScore == 5){
gameState = "over";


if (playerScore == 5) {
  text("Game Over you rock!",160,160);
}

if (compScore == 5) {
  text("Game Over you suck!",160,160);
}
}

//increase the velocity of ball in each pass
ball.velocityX *= 1.005;
ball.velocityY *= 1.005;
}

function mousePressed() {
ball.velocityX = 4;
ball.velocityY = 3;
gameState ="play";
}

function reset() {
ball.x = 200;
ball.y = 200;
ball.velocityX = 0;
ball.velocityY = 0;
}


