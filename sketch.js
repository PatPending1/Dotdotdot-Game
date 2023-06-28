var xBall;
var yBall;
var xSpeed;
var ySpeed;
var score;
var highScore;
var backgroundImage;
var newBackgroundImage; // New variable to store the new background image

function setup() {
  createCanvas(400, 400);
  resetBall();
  highScore = 0;

  backgroundImage = loadImage('https://i.seadn.io/gae/K7J57_ZYL3rbwGg044ng5-f7IyHntM7V2k_CaF2ZuLArvjArgZWOPMQiph4CxzbUFJK7UrhCOLSfebBLK0Q6kr26VsdwGemd7v_1Qg?auto=format&dpr=1&w=828');
  newBackgroundImage = loadImage('https://cdn.discordapp.com/attachments/1074836569363583126/1123437243424571462/image.png');
}

function draw() {
  // Set the background image
  background(backgroundImage);

  fill(255);
  rect(mouseX, 375, 90, 15);
  fill(0);
  textSize(14);
  fill(0);
  text("DOTDOTDOT", mouseX, 385);

  move();
  display();
  bounce();
  paddle();

  fill(255);
  textSize(24);
  fill(0);
  text("Floorprice: " + score + " ETH", 10, 25);

  textSize(18);
  fill(0);
  text("High Score: " + highScore + " ETH", 10, 50);

  // Check if the score is 1000
  if (score === 1000) {
    backgroundImage = newBackgroundImage; // Change the background image
  }
}

function move() {
  xBall += xSpeed;
  yBall += ySpeed;
}

function bounce() {
  if (xBall < 10 || xBall > width - 10) {
    xSpeed *= -1;
  }
  if (yBall < 10) {
    ySpeed *= -1;
  } else if (yBall > height) {
    if (score > highScore) {
      highScore = score;
    }
    resetBall();
  }
}

function resetBall() {
  xBall = width / 2;
  yBall = height / 2;
  xSpeed = random(-2, 2);
  ySpeed = random(2, 7);
  score = 0;
}

function display() {
  fill(128);
  textSize(14);
  var textWidthOffset = 0;
  for (var i = 0; i < "ENIGMATIC TWEET".length; i++) {
    var charWidth = textWidth("ENIGMATIC TWEET"[i]);
    text("ENIGMATIC TWEET"[i], xBall - 70 + textWidthOffset, yBall + 7);
    textWidthOffset += charWidth;
  }
}

function paddle() {
  if (xBall > mouseX && xBall < mouseX + 90 && yBall + 10 >= 375) {
    var ballCenter = xBall - mouseX - 45;
    xSpeed = map(ballCenter, -45, 45, -2, 2);
    ySpeed *= -1;
    score++;
  }
}
