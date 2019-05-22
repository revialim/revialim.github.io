let canvas;
let ctx; 
let ballRadius;
let x;
let y;
// let dx;
// let dy;
let move_x;
let move_y;

window.addEventListener('keydown', keyDownFunc, true);

function init() {
  canvas = document.getElementById("jump");
  // canvas.addEventListener("keydown", this.keyDownFunc, false);
  ctx = canvas.getContext("2d");
  let img = new Image();
  ctx.drawImage(img, 50, 10, 15, 25);
  img.src = "./jump-and-run_graphics/jump-and-run_main-character_stand.png";
  

  ballRadius = 10;
  x = canvas.width/2;
  y = canvas.height-30;
  move_x = 0;
  move_y = 0;
  // dx = 1;
  // dy = -1; 
  
  drawBall();
}

function keyDownFunc(e) {
  // console.log( e.keyCode );
  let code = e.keyCode;
    switch (code) {
        case 37: 
          console.log("Left"); 
          move_x = -1;
          move_y = 0;
          break; //Left key
        case 38: 
          console.log("Up"); 
          move_y = -1;
          move_x = 0;
          break; //Up key
        case 39: 
          console.log("Right"); 
          move_x = 1;
          move_y = 0;
          break; //Right key
        case 40: 
          console.log("Down"); 
          move_y = 1;
          move_x = 0;
          break; //Down key
        case 32:
          console.log("spacebar");
          move_x = 0;
          move_y = 0;
          break;
        default: console.log(code); //Everything else
    }
}

function drawBall(x,y) {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawImg() {
  let img = new Image();
  img.src = "./jump-and-run_graphics/jump-and-run_main-character_stand.png";

  ctx.drawImage(img, x, y, 15, 25);
}

function drawWalkFrames() {
  let walk1, walk2 = new Image();
  walk1.src = "./jump-and-run_graphics/jump-and-run_main-character_run1.png";
  walk2.src = "./jump-and-run_graphics/jump-and-run_main-character_run2.png"; 
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // drawBall(x,y);
  drawImg(x, y);

  if(x + move_x > canvas.width-ballRadius || x + move_x < ballRadius) {
    //reached edge of canvas
    console.log('beep');
  } else {
    x = x + move_x;
  }
  if(y + move_y > canvas.height-ballRadius || y + move_y < ballRadius) {
    //reached edge of canvas
    console.log('bbeeep');
  } else {
    y = y + move_y;
  }

  window.requestAnimationFrame(draw);
}

function main() {
  init();
  draw();
}