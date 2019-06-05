let canvas;
let ctx; 
let character_radius;
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
  

  character_radius = 10;
  x = canvas.width/2;
  y = canvas.height-30;
  move_x = 0;
  move_y = 0;
  // dx = 1;
  // dy = -1; 
  
  // drawBall();
}

class GameComponent {
  // let speedX = 0;
  // let speedY = 0;  

  constructor(height, width, pos_x, pos_y) {
    this.height = height;
    this.width = width;
    this.pos_x = pos_x;
    this.pos_y = pos_y;
  }

  change_position(pos_x_new, pos_y_new){
    this.pos_x = pos_x_new;
    this.pos_y = pos_y_new;
  }

  // update() {
    
  // }
}

GameComponent.prototype.area = function (){
  return this.height * this.width;
}

GameComponent.prototype.color = "black";

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

function character_sprite(options){
  let sprite_obj = {};
  let frameIndex = 0;
  let tickCount = 0;
  let ticksPerFrame = options.ticksPerFrame || 0;
  let numberOfFrames = options.numberOfFrames || 1;

  sprite_obj.context = options.context;
  sprite_obj.width = options.width;
  sprite_obj.height = options.height;
  sprite_obj.image = options.image;
  sprite_obj.loop = options.loop;

  sprite_obj.update = function () {
    tickCount = tickCount + 1;
    if (tickCount > ticksPerFrame) {
      tickCount = 0;
      // If the current frame index is in range
      if (frameIndex < numberOfFrames - 1) {
        // Go to the next frame
        frameIndex = frameIndex + 1; 
      } else if (sprite_obj.loop) {
        frameIndex = 0;
      }
    }
  }; 

  sprite_obj.render = function () {
    // Draw the animation
    sprite_obj.context.drawImage(
       sprite_obj.image,
       frameIndex * sprite_obj.width / numberOfFrames,
       0,
       sprite_obj.width / numberOfFrames,
       sprite_obj.height,
       0,
       0,
       sprite_obj.width / numberOfFrames,
       sprite_obj.height);
  };  

  return sprite_obj;
}


function drawCharacter() {
  let stand = new Image();
  stand.src = "./jump-and-run_graphics/jump-and-run_main-character_stand.png";
  if(move_x === 0 && move_y === 0){
    ctx.drawImage(stand, x, y, 15, 25);
  } else {
    drawWalkFrames();
  }
  
}

function drawWalkFrames() {
  let walk1 = new Image();
  let walk2 = new Image();
  let walk_vert1 = new Image();
  let walk_vert2 = new Image();
  walk1.src = "./jump-and-run_graphics/jump-and-run_main-character_run1.png";
  walk2.src = "./jump-and-run_graphics/jump-and-run_main-character_run2.png";
  walk_vert1.src = "./jump-and-run_graphics/jump-and-run_main-character_run3.png";
  walk_vert2.src = "./jump-and-run_graphics/jump-and-run_main-character_run4.png";

  if (move_y === 0 &&
    (x%10 === 0 || 
    x%10 === 1 || 
    x%10 === 2 || 
    x%10 === 3 || 
    x%10 === 4 )
      ){
    ctx.drawImage(walk1, x, y, 15, 25);
  } else if(move_y === 0 &&
    (x%10 === 5 || 
    x%10 === 6 || 
    x%10 === 7 || 
    x%10 === 8 || 
    x%10 === 9)
    ){
    ctx.drawImage(walk2, x, y, 15, 25);
  }else if(move_x === 0 &&
    (y%10 === 0 || 
    y%10 === 1 || 
    y%10 === 2 || 
    y%10 === 3 || 
    y%10 === 4 )){
    ctx.drawImage(walk_vert1, x, y, 15, 25);
  } else if(move_x === 0 &&
    (y%10 === 5 || 
    y%10 === 6 || 
    y%10 === 7 || 
    y%10 === 8 || 
    y%10 === 9)
    ){
    ctx.drawImage(walk_vert2, x, y, 15, 25);
  } 
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // drawBall(x,y);
  drawCharacter(x, y);

  if(x + move_x > canvas.width - 15 || x + move_x < 0 ) {
    //reached edge of canvas
    console.log('beep');
  } else {
    x = x + move_x;
  }
  if(y + move_y > canvas.height - 25 || y + move_y < 0) {
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