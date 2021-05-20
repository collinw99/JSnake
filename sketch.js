var isStarted = false
var s;
var startBttn;
var scl = 20;
var food;
var score = 0;
var highscore = 0;
var lastFrame = 0;

function setup() {
  createCanvas(600,600);
  frameRate(12);
  s = new Snake();
  food = new Food();
  startBttn = new Button('START', 300, 300, 190, 65);
}

function draw() {
  background(0);
  strokeWeight();

  if(isStarted) {

    if(s.eat(food.getPos())) {
      food.pickLocation();
      score++;
      if(score > highscore) {
        highscore = score;
      }
    }
  
    food.show();
  
    s.death();
    s.update();
    s.show();

  } else {
    startBttn.show();
  }
  
  
  fill(255);
  text('Score: '+score, 0, 10);
  text('Highscore: '+highscore, 0, 25);
}

function keyPressed() {
  startBttn.keyPressed();
  if(lastFrame != frameCount) {
    if(keyCode == UP_ARROW) {
      s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
      s.dir(0, 1)
    } else if (keyCode === RIGHT_ARROW) {
      s.dir(1, 0)
    } else if (keyCode === LEFT_ARROW) {
      s.dir(-1, 0)
    }
  }
  lastFrame = frameCount;
}

function mousePressed() {
  startBttn.mousePressed()
}
